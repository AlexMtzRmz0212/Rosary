// All prayer and interface text lives in lang.js (LANGUAGES, UI, PRAYERS, PRAYER_NAMES, mysteries).

const finalSlide = { isFinalSlide: true };

let rosaryStructure = [{ isSelection: true }];

// ───────────── Languages ─────────────
// Prayers show in every selected language, side by side. Interface text uses
// the first selected language (English, Spanish, French order).
const STORAGE_KEY = 'rosary.languages';

function loadLanguages() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        const valid = Object.keys(LANGUAGES).filter(code => Array.isArray(saved) && saved.includes(code));
        if (valid.length) return valid;
    } catch (e) {
        // Storage blocked or unreadable: fall back to English
    }
    return ['en'];
}

let selectedLanguages = loadLanguages();

const primaryLang = () => selectedLanguages[0];

// UI string with {placeholders} filled in
const t = (key, vars = {}, lang = primaryLang()) =>
    UI[lang][key].replace(/\{(\w+)\}/g, (_, name) => vars[name]);

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

function toggleLanguage(code) {
    const next = selectedLanguages.includes(code)
        ? selectedLanguages.filter(c => c !== code)
        : Object.keys(LANGUAGES).filter(c => c === code || selectedLanguages.includes(c));
    if (!next.length) return; // keep at least one language
    selectedLanguages = next;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
        // Choice just won't be remembered
    }
    updateDisplay();
}

function initLanguagePicker() {
    const picker = document.getElementById('language-picker');
    Object.entries(LANGUAGES).forEach(([code, { name }]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-option';
        btn.dataset.lang = code;
        btn.lang = code;
        btn.textContent = name;
        btn.addEventListener('click', () => toggleLanguage(code));
        picker.appendChild(btn);
    });
}

function applyLanguageChrome() {
    const lang = primaryLang();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = UI[lang][el.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', UI[lang][el.dataset.i18nAria]);
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.setAttribute('aria-pressed', String(selectedLanguages.includes(btn.dataset.lang)));
    });
}

// ───────────── Rosary structure ─────────────
// Each step names a prayer (a key in PRAYERS / PRAYER_NAMES); the text for each
// language is looked up when the step is shown.
const step = (prayer, beadType, extra = {}) => ({ prayer, beadType, ...extra });

const baseStructure = [
    step('signOfCross', 'cross'),
    step('apostlesCreed', 'apostles-creed'),
    step('ourFather', 'our-father'),
    step('hailMary', 'hail-mary', { hailMaryFor: 'faith' }),
    step('hailMary', 'hail-mary', { hailMaryFor: 'hope' }),
    step('hailMary', 'hail-mary', { hailMaryFor: 'charity' }),
    step('gloryBe', 'glory-be'),
    step('fatima', 'fatima')
];

function stepTitle(s, lang) {
    if (s.meditation !== undefined) return UI[lang].ordinals[s.meditation];
    const name = PRAYER_NAMES[s.prayer][lang];
    return s.hailMaryFor ? `${name} (${UI[lang].hailMaryFor[s.hailMaryFor]})` : name;
}

function stepText(s, lang) {
    if (s.meditation !== undefined) {
        const i = s.meditation;
        return `${selectedMysteries.names[lang][i]}\n\n${selectedMysteries.meditations[lang][i]}\n\n${UI[lang].fruit}: ${selectedMysteries.fruits[lang][i]}`;
    }
    return PRAYERS[s.prayer][lang];
}

let selectedMysteries = null;
let selectedKey = '';
let rosaryBuilt = false;
let currentPosition = 0;
let allBeadElements = [];

function getSuggestedMystery() {
    // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    return ['3', '1', '2', '3', '4', '2', '1'][new Date().getDay()];
}

function resetRosary() {
    selectedMysteries = null;
    selectedKey = '';
    rosaryBuilt = false;
    allBeadElements = [];
    rosaryStructure = [{ isSelection: true }];
    document.getElementById('rosary-visual-container').classList.remove('show');
    selectMysteries(getSuggestedMystery());
}

const MYSTERY_KEYS = { '1': 'joyful', '2': 'sorrowful', '3': 'glorious', '4': 'luminous' };

function selectMysteries(type) {
    const name = MYSTERY_KEYS[type];
    if (!name) return false;
    selectedMysteries = mysteries[name];
    selectedKey = type;
    document.body.dataset.mystery = name;
    return true;
}

function buildRosary() {
    if (rosaryBuilt || !selectedMysteries) return;

    rosaryStructure = rosaryStructure.concat(baseStructure);

    for (let decade = 0; decade < 5; decade++) {
        const inDecade = { decade: decade + 1 };

        rosaryStructure.push(step('', 'mystery', { ...inDecade, meditation: decade }));
        rosaryStructure.push(step('ourFather', 'our-father', inDecade));

        for (let hail = 0; hail < 10; hail++) {
            rosaryStructure.push(step('hailMary', 'hail-mary', { ...inDecade, count: { n: hail + 1, total: 10 } }));
        }

        rosaryStructure.push(step('gloryBe', 'glory-be', inDecade));
        rosaryStructure.push(step('fatima', 'fatima', inDecade));
    }

    rosaryStructure.push(
        step('hailHolyQueen', 'glory-be'),
        step('finalPrayer', 'glory-be'),
        step('signOfCross', 'cross'),
        finalSlide
    );

    rosaryBuilt = true;
    buildRosaryVisual();
    document.getElementById('rosary-visual-container').classList.add('show');
}

function buildRosaryVisual() {
    allBeadElements = [];
    const NS = 'http://www.w3.org/2000/svg';
    const wrapper = document.querySelector('.visual-wrapper');
    wrapper.innerHTML = '';

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '-18 -18 336 546');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    // ─── DEFS ───────────────────────────────────────────────
    const defs = document.createElementNS(NS, 'defs');

    // Bead colors come from CSS variables (see style.css) so they follow the mystery's theme
    const beadDefs = {
        'hail-mary':      ['--bead-hi', '--bead',      '--bead-lo'],
        'our-father':     ['--bead-hi', '--ink',       '--bead-lo'],
        'glory-be':       ['--bead-hi', '--bead-soft', '--bead-lo'],
        'mystery':        ['--bead-hi', '--rubric',    '--rubric-lo'],
        'apostles-creed': ['--bead-hi', '--ink',       '--bead-lo'],
        'fatima':         ['--bead-hi', '--bead-soft', '--bead-lo'],
    };

    Object.entries(beadDefs).forEach(([name, [c0, c1, c2]]) => {
        const g = document.createElementNS(NS, 'radialGradient');
        g.setAttribute('id', `g-${name}`);
        g.setAttribute('cx', '38%'); g.setAttribute('cy', '32%'); g.setAttribute('r', '62%');
        [[c0,'0%'],[c1,'55%'],[c2,'100%']].forEach(([color, offset]) => {
            const s = document.createElementNS(NS, 'stop');
            s.setAttribute('offset', offset); s.style.stopColor = `var(${color})`;
            g.appendChild(s);
        });
        defs.appendChild(g);
    });

    // Matte chain/cross fill (flat, taken from the bead color)
    const cg = document.createElementNS(NS, 'linearGradient');
    cg.setAttribute('id', 'g-chain');
    cg.setAttribute('gradientUnits', 'userSpaceOnUse');
    cg.setAttribute('x1', '0'); cg.setAttribute('y1', '0');
    cg.setAttribute('x2', '300'); cg.setAttribute('y2', '510');
    ['0%', '100%'].forEach(o => {
        const s = document.createElementNS(NS, 'stop');
        s.setAttribute('offset', o); s.style.stopColor = 'var(--bead)';
        cg.appendChild(s);
    });
    defs.appendChild(cg);

    svg.appendChild(defs);

    // ─── GEOMETRY ───────────────────────────────────────────
    const cx = 150, cy = 195, rx = 113, ry = 103;
    const loopBottom = cy + ry;  // 298
    const loopTop    = cy - ry;  // 92

    const setAttrs = (el, pairs) => { pairs.forEach(([k,v]) => el.setAttribute(k, v)); return el; };

    const drawLine = (x1, y1, x2, y2) => setAttrs(document.createElementNS(NS, 'line'), [
        ['x1',x1],['y1',y1],['x2',x2],['y2',y2],
        ['stroke','url(#g-chain)'],['stroke-width','1.6'],['opacity','0.7']
    ]);

    // ─── CHAIN LINES ────────────────────────────────────────
    svg.appendChild(setAttrs(document.createElementNS(NS, 'ellipse'), [
        ['cx',cx],['cy',cy],['rx',rx],['ry',ry],
        ['fill','none'],['stroke','url(#g-chain)'],['stroke-width','1.8'],['opacity','0.62']
    ]));
    svg.appendChild(drawLine(cx, loopBottom, cx, 441));
    svg.appendChild(drawLine(cx, loopBottom, cx, cy)); // closing prayers rise from bottom up to center

    // ─── BEAD FACTORY ───────────────────────────────────────
    const beadR = { 'hail-mary':5, 'our-father':7.5, 'glory-be':6, 'mystery':7.5, 'apostles-creed':8.5, 'fatima':6 };

    const makeBead = (x, y, type, idx) => {
        const el = setAttrs(document.createElementNS(NS, 'circle'), [
            ['cx',x],['cy',y],['r',beadR[type] ?? 5],
            ['fill',`url(#g-${type})`],
            ['stroke','rgba(255,255,255,0.28)'],['stroke-width','0.8'],
            ['class',`svg-bead bead-type-${type}`],['id',`visual-bead-${idx}`]
        ]);
        svg.appendChild(el);
        allBeadElements[idx] = el;
        return el;
    };

    // ─── TAIL BEADS (indices 1-7, from closest-to-loop down to closest-to-cross) ──
    // Physical order top→bottom: fatima(7), glory-be(6), hm(5), hm(4), hm(3), our-father(2), apostles-creed(1)
    const tailPhysical = ['fatima','glory-be','hail-mary','hail-mary','hail-mary','our-father','apostles-creed'];
    const tailStartY = loopBottom + 18;
    tailPhysical.forEach((type, i) => makeBead(cx, tailStartY + i * 18, type, 7 - i));

    // ─── CROSS (index 0 = Sign of the Cross) ────────────────────────────────────
    const crossG = setAttrs(document.createElementNS(NS, 'g'), [
        ['id','visual-bead-0'],['class','svg-bead']
    ]);
    const crossCY = tailStartY + 7 * 18 + 14;

    crossG.appendChild(setAttrs(document.createElementNS(NS, 'rect'), [
        ['x',cx-9],['y',crossCY-18],['width','18'],['height','7'],['rx','1.5'],
        ['fill','#7a3a08'],['stroke','#c8860a'],['stroke-width','0.6']
    ]));
    const inriTxt = setAttrs(document.createElementNS(NS, 'text'), [
        ['x',cx],['y',crossCY-12],['text-anchor','middle'],
        ['font-size','4.5'],['fill','#ffd700'],['font-family','serif'],['letter-spacing','0.5']
    ]);
    inriTxt.textContent = 'INRI';
    crossG.appendChild(inriTxt);
    crossG.appendChild(setAttrs(document.createElementNS(NS, 'rect'), [
        ['x',cx-3.5],['y',crossCY-10],['width','7'],['height','32'],['rx','2.5'],
        ['fill','url(#g-chain)']
    ]));
    crossG.appendChild(setAttrs(document.createElementNS(NS, 'rect'), [
        ['x',cx-14],['y',crossCY],['width','28'],['height','7'],['rx','2.5'],
        ['fill','url(#g-chain)']
    ]));
    svg.appendChild(crossG);
    allBeadElements[0] = crossG;
    let beadIndex = 8;

    // ─── DECADE BEADS on ellipse (indices 8-77) ─────────────
    for (let i = 0; i < 70; i++) {
        const angle = Math.PI / 2 - (i / 70) * 2 * Math.PI;
        const x = cx + rx * Math.cos(angle);
        const y = cy + ry * Math.sin(angle);
        const pos = i % 14;
        const type = pos === 0  ? 'mystery'
                   : pos === 1  ? 'our-father'
                   : pos <= 11  ? 'hail-mary'
                   : pos === 12 ? 'glory-be'
                   :              'fatima';
        makeBead(x, y, type, beadIndex++);
    }

    // ─── CLOSING BEADS rising from bottom of loop to center (indices 78-80) ───
    makeBead(cx, loopBottom - 26, 'glory-be', beadIndex++); // Hail Holy Queen (78)
    makeBead(cx, loopBottom - 52, 'glory-be', beadIndex++); // Final Prayer (79)

    // Sign of the Cross at center (80) — replaces M medal
    const centerCrossG = setAttrs(document.createElementNS(NS, 'g'), [
        ['id',`visual-bead-${beadIndex}`],['class','svg-bead']
    ]);
    const ccx = cx, ccy = cy;
    centerCrossG.appendChild(setAttrs(document.createElementNS(NS, 'rect'), [
        ['x',ccx-9],['y',ccy-20],['width','18'],['height','7'],['rx','1.5'],
        ['fill','#7a3a08'],['stroke','#c8860a'],['stroke-width','0.6']
    ]));
    const cInri = setAttrs(document.createElementNS(NS, 'text'), [
        ['x',ccx],['y',ccy-14],['text-anchor','middle'],
        ['font-size','4.5'],['fill','#ffd700'],['font-family','serif'],['letter-spacing','0.5']
    ]);
    cInri.textContent = 'INRI';
    centerCrossG.appendChild(cInri);
    centerCrossG.appendChild(setAttrs(document.createElementNS(NS, 'rect'), [
        ['x',ccx-3.5],['y',ccy-13],['width','7'],['height','34'],['rx','2.5'],
        ['fill','url(#g-chain)']
    ]));
    centerCrossG.appendChild(setAttrs(document.createElementNS(NS, 'rect'), [
        ['x',ccx-14],['y',ccy-3],['width','28'],['height','7'],['rx','2.5'],
        ['fill','url(#g-chain)']
    ]));
    svg.appendChild(centerCrossG);
    allBeadElements[beadIndex] = centerCrossG;

    wrapper.appendChild(svg);
}


function updateBeadHighlight() {
    // Clear all highlights
    allBeadElements.forEach(bead => {
        if (bead) {
            bead.classList.remove('current', 'completed');
        }
    });

    if (currentPosition === 0 || !rosaryBuilt) return;

    // Calculate the visual bead index (subtract 1 for the selection screen)
    const visualIndex = currentPosition - 1;
    
    if (visualIndex >= 0 && visualIndex < allBeadElements.length && allBeadElements[visualIndex]) {
        const bead = allBeadElements[visualIndex];
        void bead.getBoundingClientRect(); // force reflow so arrive animation restarts
        bead.classList.add('current');

        for (let i = 0; i < visualIndex; i++) {
            if (allBeadElements[i]) allBeadElements[i].classList.add('completed');
        }
    }
}

function triggerTextAnimation() {
    const section = document.getElementById('prayer-section');
    section.classList.remove('fade-in');
    void section.offsetWidth;
    section.classList.add('fade-in');
}

function setProgress(percent) {
    document.getElementById('progress-fill').style.width = `${percent}%`;
    document.querySelector('.progress-bar').setAttribute('aria-valuenow', Math.round(percent));
}

// Five ticks, one per decade: finished ones filled, the current one in rubric
function setDecade(current, label) {
    const ticks = document.getElementById('decade-ticks');
    ticks.innerHTML = '';
    if (current) {
        for (let i = 1; i <= 5; i++) {
            const tick = document.createElement('span');
            tick.className = `tick${i < current ? ' done' : i === current ? ' now' : ''}`;
            ticks.appendChild(tick);
        }
    }
    document.getElementById('decade-label').textContent = label;
}

// One column per language, each with its own heading, count and text
function renderColumns(cols) {
    const wrap = document.getElementById('prayer-cols');
    wrap.innerHTML = '';
    wrap.scrollTop = 0;
    wrap.dataset.n = cols.length;
    document.body.dataset.langs = cols.length;

    cols.forEach((c, i) => {
        const col = document.createElement('article');
        col.className = 'prayer-col';
        col.lang = c.lang;

        const heading = document.createElement(i === 0 ? 'h1' : 'h2');
        heading.className = 'prayer-type';
        heading.textContent = c.title;

        const count = document.createElement('div');
        count.className = 'position-indicator';
        count.textContent = c.count || '';

        const text = document.createElement('div');
        text.className = 'prayer-text';
        text.textContent = c.text;

        col.append(heading, count, text);
        wrap.appendChild(col);
    });
}

function updateDisplay() {
    triggerTextAnimation();
    applyLanguageChrome();
    const current = rosaryStructure[currentPosition];
    const lang = primaryLang();

    // Special handling for mystery selection
    if (current.isSelection) {
        const keys = Object.values(LANGUAGES).map(l => l.key.toUpperCase()).join(', ');
        document.body.dataset.screen = 'select';
        document.getElementById('mystery-title').textContent = UI[lang].appName;
        renderColumns([{
            lang,
            title: UI[lang].chooseMysteries,
            count: isMobileDevice() ? UI[lang].hintTouch : t('hintKeys', { keys }),
            text: t('todayIs', { day: UI[lang].days[new Date().getDay()] })
        }]);
        document.querySelectorAll('.mystery-option').forEach(btn => {
            const set = MYSTERY_KEYS[btn.dataset.key];
            const isSelected = btn.dataset.key === selectedKey;
            btn.classList.toggle('is-selected', isSelected);
            btn.setAttribute('aria-pressed', String(isSelected));
            btn.querySelector('.option-name').textContent = mysteries[set].title[lang];
            btn.querySelector('.option-days').textContent =
                MYSTERY_DAYS[set].map(d => capitalize(UI[lang].days[d])).join(', ');
            btn.querySelector('.option-today').hidden = btn.dataset.key !== getSuggestedMystery();
        });
        setDecade(0, '');
        document.getElementById('rosary-visual-container').classList.remove('show');
        setProgress(0);
        return;
    }

    // Special handling for final slide
    if (current.isFinalSlide) {
        showFinalSlide();
        return;
    }

    document.body.dataset.screen = 'pray';

    document.getElementById('mystery-title').textContent =
        selectedLanguages.map(code => selectedMysteries.title[code]).join(' / ');
    renderColumns(selectedLanguages.map(code => ({
        lang: code,
        title: stepTitle(current, code),
        count: current.count ? t('count', current.count, code) : '',
        text: stepText(current, code)
    })));

    // Progress thread
    setProgress((currentPosition / (rosaryStructure.length - 1)) * 100);

    // Decade ticks and label
    const decade = current.decade || 0;
    setDecade(decade, decade
        ? t('decade', { n: decade, name: selectedMysteries.names[lang][decade - 1] })
        : '');

    // Show rosary visual if built
    if (rosaryBuilt) {
        document.getElementById('rosary-visual-container').classList.add('show');
        updateBeadHighlight();
    }
}

function showFinalSlide() {
    document.querySelector('.rosary-container').classList.add('hidden');
    const finalSlideEl = document.getElementById('final-slide');
    finalSlideEl.classList.remove('hidden');
    requestAnimationFrame(() => requestAnimationFrame(() => finalSlideEl.classList.add('visible')));
}

document.getElementById('restart-button').addEventListener('click', resetToStart);

function resetToStart() {
    const finalSlideEl = document.getElementById('final-slide');
    finalSlideEl.classList.remove('visible');
    setTimeout(() => {
        finalSlideEl.classList.add('hidden');
        document.querySelector('.rosary-container').classList.remove('hidden');
        resetRosary();
        currentPosition = 0;
        updateDisplay();
    }, 600);
}

function goNext() {
    const current = rosaryStructure[currentPosition];
    if (current && current.isSelection) {
        if (!selectedMysteries) return;
        buildRosary();
        currentPosition++;
        updateDisplay();
    } else if (currentPosition < rosaryStructure.length - 1) {
        currentPosition++;
        updateDisplay();
    } else {
        resetToStart();
    }
}

function goBack() {
    if (currentPosition > 0) {
        currentPosition--;
        updateDisplay();
    }
}

// On-screen buttons
document.getElementById('next-button').addEventListener('click', goNext);
document.getElementById('back-button').addEventListener('click', goBack);
document.getElementById('begin-button').addEventListener('click', goNext);
document.querySelectorAll('.mystery-option').forEach(btn => {
    btn.addEventListener('click', () => {
        if (selectMysteries(btn.dataset.key)) updateDisplay();
    });
});

// Keyboard controls
document.addEventListener('keydown', function(e) {
    const current = rosaryStructure[currentPosition];
    const onButton = e.target instanceof HTMLButtonElement;

    // If on selection screen
    if (current && current.isSelection) {
        if (['1', '2', '3', '4'].includes(e.key)) {
            if (selectMysteries(e.key)) {
                updateDisplay();
            }
        }
        const language = Object.entries(LANGUAGES).find(([, l]) => l.key === e.key.toLowerCase());
        if (language && !e.ctrlKey && !e.metaKey && !e.altKey) {
            toggleLanguage(language[0]);
        }
        // A focused button handles Space itself (click), so don't also advance
        if ((e.code === 'Space' || e.key === ' ') && !onButton) {
            goNext();
        }
        return;
    }

    // Navigation
    if ((e.code === 'Space' || e.key === ' ') && !onButton) {
        e.preventDefault();
        goNext();
    }
    if (e.code === 'Backspace') {
        goBack();
    }
    // Reset with R
    if (e.key.toLowerCase() === 'r') {
        resetRosary();
        currentPosition = 0;
        updateDisplay();
    }
});

// Touch events for mobile swipe
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < swipeThreshold) return;

    const container = document.querySelector('.rosary-container');

    if (swipeDistance > 0) {
        if (currentPosition > 0) {
            currentPosition--;
            container.classList.add('swipe-right');
            setTimeout(() => container.classList.remove('swipe-right'), 300);
            updateDisplay();
        }
    } else {
        if (currentPosition < rosaryStructure.length - 1) {
            currentPosition++;
            container.classList.add('swipe-left');
            setTimeout(() => container.classList.remove('swipe-left'), 300);
            updateDisplay();
        }
    }
}

function isMobileDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

function updateControlsDisplay() {
    const controlText = document.getElementById('control-text');
    const mobileControls = document.getElementById('mobile-controls');
    
    if (isMobileDevice()) {
        controlText.style.display = 'none';
        mobileControls.style.display = 'block';
    } else {
        controlText.style.display = 'block';
        mobileControls.style.display = 'none';
    }
}


// Initialize mobile detection
updateControlsDisplay();

// Update controls on resize (in case of device rotation)
window.addEventListener('resize', updateControlsDisplay);


// Initial load
initLanguagePicker();
resetRosary();
updateDisplay();