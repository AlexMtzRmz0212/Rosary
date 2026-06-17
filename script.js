let rosaryStructure = [
    // Day Selection
    {
        type: "Day Selection",
        text: `Please select which mysteries to pray today:\n

1. Monday/Saturday - Joyful Mysteries
2. Tuesday/Friday - Sorrowful Mysteries
3. Wednesday/Sunday - Glorious Mysteries
4. Thursday - Luminous Mysteries`,
        bead: "🗓️",
        mystery: "",
        isSelection: true
    }
];

const finalSlide = {
    type: "Completion",
    text: "Congratulations! You have completed the Rosary.",
    bead: "🎉",
    mystery: "",
    isFinalSlide: true
};

// BaseStructure: shared prayer texts factored out and Hail Marys generated to avoid repetition
const PRAYERS = {
    signOfCross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    apostlesCreed:
        `I believe in God, the Father almighty, Creator of heaven and earth;
and in Jesus Christ, His only Son, Our Lord,
Who was conceived by the Holy Spirit, born of the Virgin Mary,
suffered under Pontius Pilate, was crucified, died, and was buried.
He descended into hell; on the third day He rose again from the dead;
He ascended into Heaven, and is seated at the right hand of God, the Father almighty;
from there He will come to judge the living and the dead.
I believe in the Holy Spirit, the holy Catholic Church,
the communion of saints, the forgiveness of sins,
the resurrection of the body, and life everlasting.

Amen.`,
    ourFather:
        `Our Father, Who art in heaven,
Hallowed be Thy Name.
Thy Kingdom come.
Thy Will be done, on earth as it is in Heaven.
Give us this day our daily bread.
And forgive us our trespasses,
as we forgive those who trespass against us.
And lead us not into temptation,
but deliver us from evil.

Amen.`,
    hailMary:
        `Hail Mary,
Full of Grace,
The Lord is with thee.
Blessed art thou among women,
and blessed is the fruit
of thy womb, Jesus.
Holy Mary,
Mother of God,
pray for us sinners now,
and at the hour of death.

Amen.`,
    gloryBe:
        `Glory be to the Father,
and to the Son,
and to the Holy Spirit.
As it was in the beginning,
is now,
and ever shall be,
world without end.

Amen.`,
    fatima:
        `O my Jesus,
forgive us our sins,
save us from the fires of hell,
and lead all souls to Heaven,
especially those in most need of Thy mercy.

Amen.`
};

const makeHailMary = (label) => ({
    type: label ? `Hail Mary (${label})` : "Hail Mary",
    text: PRAYERS.hailMary,
    bead: "○",
    mystery: "",
    beadType: "hail-mary"
});

const baseStructure = [
    { type: "Sign of the Cross", text: PRAYERS.signOfCross, bead: "✟", mystery: "", beadType: "cross" },
    { type: "Apostles' Creed", text: PRAYERS.apostlesCreed, bead: "○", mystery: "", beadType: "apostles-creed" },
    { type: "Our Father", text: PRAYERS.ourFather, bead: "●", mystery: "", beadType: "our-father" },
    makeHailMary("for Faith"),
    makeHailMary("for Hope"),
    makeHailMary("for Charity"),
    { type: "Glory Be", text: PRAYERS.gloryBe, bead: "✦", mystery: "", beadType: "glory-be" },
    { type: "Fatima Prayer", text: PRAYERS.fatima, bead: "✦", mystery: "", beadType: "fatima" }
];

const mysteries = {
    joyful: {
        names: [
            "The Annunciation",
            "The Visitation", 
            "The Birth of Jesus",
            "The Presentation",
            "The Finding of Jesus in the Temple"
        ],
        meditations: [
            '“And when the angel had come to her, he said, ‘Hail, full of grace, the Lord is with thee. Blessed art thou among women.” – Luke 1:28.',
            `“Elizabeth was filled with the Holy Spirit and cried out in a loud voice: ‘Blest are you among women and blest is the fruit of your womb.'” – Luke 1:41-42.`,
            '“She gave birth to her first-born Son and wrapped Him in swaddling clothes and laid Him in a manger, because there was no room for them in the place where travelers lodged.” – Luke 2:7.',
            `“When the day came to purify them according to the law of Moses, the couple brought Him up to Jerusalem so that He could be presented to the Lord, for it is written in the law of the Lord, ‘Every first-born male shall be consecrated to the Lord.'” – Luke 2: 22-23.`,
            '“On the third day they came upon Him in the temple sitting in the midst of the teachers, listening to them and asking them questions.” – Luke 2:46'
        ],
        fruits: [
            "Humility",
            "Love of Neighbor",
            "Poverty of Spirit",
            "Obedience",
            "Joy in finding Jesus"
        ]
    },
    sorrowful: {
        names: [
            "The Agony in the Garden",
            "The Scourging at the Pillar",
            "The Crowning with Thorns", 
            "The Carrying of the Cross",
            "The Crucifixion and Death of Jesus"
        ],
        meditations: [
            `“In His anguish He prayed with all the greater intensity, and His sweat became like drops of blood falling to the ground. Then He rose from prayer and came to His disciples, only to find them asleep, exhausted with grief.” – Luke 22:44-45.`,
            `“Pilate’s next move was to take Jesus and have Him scourged.” – John 19:1.`,
            `“They stripped off His clothes and wrapped Him in a scarlet military cloak. Weaving a crown out of thorns they fixed it on His head, and stuck a reed in His right hand….” – Matthew 27:28-29.`,
            `“…carrying the cross by Himself, He went out to what is called the Place of the Skull (in Hebrew, Golgotha).'” – John 19:17.`,
            `“Jesus uttered a loud cry and said, ‘Father, into Your hands I commend My spirit.’ After He said this, He expired.” – Luke 23:46.`
        ],
        fruits: [
            "Sorrow for Sin",
            "Purity",
            "Courage",
            "Patience",
            "Perseverance"
        ]
    },
    glorious: {
        names: [
            "The Resurrection",
            "The Ascension",
            "The Descent of the Holy Spirit",
            "The Assumption", 
            "The Coronation"
        ],
        meditations: [
            `“You need not be amazed! You are looking for Jesus of Nazareth, the one who was crucified. He has been raised up; He is not here. See the place where they laid Him” – Mark 16:6.`,
            `“Then, after speaking to them, the Lord Jesus was taken up into Heaven and took His seat at God’s right hand.” – Mark 16:19.`,
            `“All were filled with the Holy Spirit. They began to express themselves in foreign tongues and make bold proclamation as the Spirit prompted them.” – Acts 2:4.`,
            `“You are the glory of Jerusalem… you are the splendid boast of our people… God is pleased with what you have wrought. May you be blessed by the Lord Almighty forever and ever.'” – Judith 15:9-10.`,
            `“A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.” – Revelation 12:1.`            
        ],
        fruits: [
            "Faith",
            "Hope",
            "Love of God",
            "Grace of a Happy Death",
            "Trust in Mary's Intercession"
        ]
    },
    luminous: {
        names: [
            "The Baptism of Jesus",
            "The Wedding at Cana",
            "The Proclamation of the Kingdom of God",
            "The Transfiguration",
            "The Institution of the Eucharist"
        ],
        meditations: [
            `“And when Jesus was baptized… the heavens were opened and He saw the Spirit of God descending like a dove, and alighting on Him, and lo, a voice from heaven, saying ‘this is My beloved Son,’ with whom I am well pleased.'” – Matthew 3:16-17.`,
            `“His mother said to the servants, ‘Do whatever He tells you.’… Jesus said to them, ‘Fill the jars with water.’ And they filled them up to the brim.” – John 2:5-7.`,
            `“And preach as you go, saying, ‘The kingdom of heaven is at hand.’ Heal the sick, raise the dead, cleanse lepers, cast out demons. You received without pay, give without pay.” – Matthew 10:7-8.`,
            `“And as He was praying, the appearance of His countenance was altered and His raiment became dazzling white. And a voice came out of the cloud saying, ‘This is My Son, My chosen; listen to Him!”” – Luke 9:29, 35.`,
            `“And He took bread, and when He had given thanks He broke it and gave it to them, saying, ‘This is My body which is given for you.’ …And likewise the cup after supper, saying, ‘This cup which is poured out for you is the new covenant in My blood’.” – Luke 22:19-20.`
        ],
        fruits: [
            "Openness to the Holy Spirit",
            "To Jesus through Mary",
            "Repentance and trust in God",
            "Desire for Holiness",
            "Adoration"
        ]
    }
};

let selectedMysteries = null;
let mysteryType = '';
let rosaryBuilt = false;
let currentPosition = 0;
let allBeadElements = [];

function getSuggestedMystery() {
    // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    return ['3', '1', '2', '3', '4', '2', '1'][new Date().getDay()];
}

function resetRosary() {
    selectedMysteries = null;
    mysteryType = '';
    rosaryBuilt = false;
    allBeadElements = [];
    rosaryStructure = [
        { type: "Day Selection", text: '', bead: "🗓️", mystery: "", isSelection: true }
    ];
    document.getElementById('rosary-visual-container').classList.remove('show');
    selectMysteries(getSuggestedMystery());
}

function selectMysteries(type) {
    switch(type) {
        case '1':
            selectedMysteries = mysteries.joyful;
            mysteryType = 'Joyful Mysteries';
            break;
        case '2':
            selectedMysteries = mysteries.sorrowful;
            mysteryType = 'Sorrowful Mysteries';
            break;
        case '3':
            selectedMysteries = mysteries.glorious;
            mysteryType = 'Glorious Mysteries';
            break;
        case '4':
            selectedMysteries = mysteries.luminous;
            mysteryType = 'Luminous Mysteries';
            break;
        default:
            return false;
    }
    return true;
}

function buildRosary() {
    if (rosaryBuilt || !selectedMysteries) return;

    // Add base structure to rosary
    rosaryStructure = rosaryStructure.concat(baseStructure);

    // Add decades to rosary structure
    for (let decade = 0; decade < 5; decade++) {
        // Mystery Meditation
        rosaryStructure.push({
            type: `${getOrdinal(decade + 1)} Mystery`,
            text: `${selectedMysteries.names[decade]}\n\n${selectedMysteries.meditations[decade]}\n\nFruit of the Mystery: ${selectedMysteries.fruits[decade]}`,
            bead: "🌟",
            mystery: selectedMysteries.names[decade],
            isMeditation: true,
            beadType: "mystery"
        });

        // Our Father for each decade
        rosaryStructure.push({
            type: "Our Father",
            text: PRAYERS.ourFather,
            bead: "●",
            mystery: selectedMysteries.names[decade],
            beadType: "our-father"
        });

        // 10 Hail Marys for each decade
        for (let hail = 0; hail < 10; hail++) {
            rosaryStructure.push({
                type: `Hail Mary ${hail + 1}/10`,
                text: PRAYERS.hailMary,
                bead: "○",
                mystery: selectedMysteries.names[decade],
                beadType: "hail-mary"
            });
        }

        // Glory Be and Fatima Prayer after each decade
        rosaryStructure.push({
            type: "Glory Be",
            text: PRAYERS.gloryBe,
            bead: "✦",
            mystery: selectedMysteries.names[decade],
            beadType: "glory-be"
        });

        rosaryStructure.push({
            type: "Fatima Prayer",
            text: PRAYERS.fatima,
            bead: "✦",
            mystery: selectedMysteries.names[decade],
            beadType: "fatima"
        });
    }

    // Closing prayers
    rosaryStructure.push(
        { type: "Hail Holy Queen", text: 
            `Hail Holy Queen, Mother of Mercy, our life, our sweetness and our hope! 
            To thee do we cry, poor banished children of Eve; 
            to thee do we send up our sighs, mourning and weeping in this valley of tears. 
            Turn then, O most gracious advocate, thine eyes of mercy toward us, 
            and after this our exile, show unto us the blessed fruit of thy womb, Jesus. 
            O clement, O loving, O sweet Virgin Mary! Pray for us, O Holy Mother of God. 
            That we may be made worthy of the promises of Christ.

            Amen.`,     
            bead: "◊", mystery: "", beadType: "glory-be" },
        { type: "Final Prayer", text: "O God, whose only-begotten Son, by His life, death and resurrection, has purchased for us the rewards of eternal life; grant we beseech Thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.", bead: "✟", mystery: "", beadType: "glory-be" },
        { type: "Sign of the Cross", text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.", bead: "✟", mystery: "", beadType: "cross" },
        finalSlide
    );

    rosaryBuilt = true;
    buildRosaryVisual();
    document.getElementById('rosary-visual-container').classList.add('show');
}

function getOrdinal(num) {
    const ordinals = ['', '1st', '2nd', '3rd', '4th', '5th'];
    return ordinals[num];
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

    const beadDefs = {
        'hail-mary':      ['#d8f0ff', '#4da8da', '#1a5f88'],
        'our-father':     ['#fffde0', '#ffd700', '#8a6200'],
        'glory-be':       ['#ead6ff', '#8b45d4', '#4e1e8a'],
        'mystery':        ['#ffd0d0', '#e83838', '#8a0f0f'],
        'apostles-creed': ['#ccffcc', '#3cb84a', '#1a5c22'],
        'fatima':         ['#ffe8cc', '#ff8000', '#7a3000'],
    };

    Object.entries(beadDefs).forEach(([name, [c0, c1, c2]]) => {
        const g = document.createElementNS(NS, 'radialGradient');
        g.setAttribute('id', `g-${name}`);
        g.setAttribute('cx', '38%'); g.setAttribute('cy', '32%'); g.setAttribute('r', '62%');
        [[c0,'0%'],[c1,'55%'],[c2,'100%']].forEach(([color, offset]) => {
            const s = document.createElementNS(NS, 'stop');
            s.setAttribute('offset', offset); s.setAttribute('stop-color', color);
            g.appendChild(s);
        });
        defs.appendChild(g);
    });

    // Gold chain gradient (diagonal across full viewBox)
    const cg = document.createElementNS(NS, 'linearGradient');
    cg.setAttribute('id', 'g-chain');
    cg.setAttribute('gradientUnits', 'userSpaceOnUse');
    cg.setAttribute('x1', '0'); cg.setAttribute('y1', '0');
    cg.setAttribute('x2', '300'); cg.setAttribute('y2', '510');
    [['#c8930a','0%'],['#fde06a','50%'],['#9a5e10','100%']].forEach(([c,o]) => {
        const s = document.createElementNS(NS, 'stop');
        s.setAttribute('offset', o); s.setAttribute('stop-color', c);
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
        ['x',cx-14],['y',crossCY+2],['width','28'],['height','7'],['rx','2.5'],
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
        ['x',ccx-14],['y',ccy+2],['width','28'],['height','7'],['rx','2.5'],
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

function updateDisplay() {
    const prayerTextEl = document.getElementById('prayer-text');
    if (prayerTextEl) prayerTextEl.scrollTop = 0;
    triggerTextAnimation();
    const current = rosaryStructure[currentPosition];
    
    // Special handling for mystery selection
    if (current.isSelection) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = dayNames[new Date().getDay()];
        const options = `1. Monday/Saturday - Joyful Mysteries\n2. Tuesday/Friday - Sorrowful Mysteries\n3. Wednesday/Sunday - Glorious Mysteries\n4. Thursday - Luminous Mysteries`;
        document.getElementById('mystery-title').textContent = 'Choose Your Mysteries';
        document.getElementById('prayer-type').textContent = current.type;
        document.getElementById('prayer-text').textContent = selectedMysteries
            ? `Today is ${today}.\nSelected: ${mysteryType}\n\nPress Spacebar to begin, or use 1–4 to change:\n\n${options}`
            : `Today is ${today}.\n\nPlease select which mysteries to pray:\n\n${options}`;
        document.getElementById('position-indicator').textContent = 'Use number keys 1–4 to select, then Spacebar to continue';
        document.getElementById('decade-counter').textContent = '';
        document.getElementById('rosary-visual-container').classList.remove('show');
        document.getElementById('progress-fill').style.width = '0%';
        return;
    }

    // Special handling for final slide
    if (current.isFinalSlide) {
        showFinalSlide();
        return;
    }

    // Show mystery title if available
    document.getElementById('mystery-title').textContent = mysteryType || '';
    document.getElementById('prayer-type').textContent = current.type;
    document.getElementById('prayer-text').textContent = current.text;

    // Progress bar
    const progress = ((currentPosition) / (rosaryStructure.length - 1)) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // Position indicator
    const percent = Math.round((currentPosition / (rosaryStructure.length - 1)) * 100);
    document.getElementById('position-indicator').textContent = `Progress: ${percent}%`;

    // Decade counter
    let decadeNum = '';
    if (current.mystery) {
    // Find which decade we're in
    for (let i = 0; i < 5; i++) {
        if (selectedMysteries && current.mystery === selectedMysteries.names[i]) {
            decadeNum = `Decade ${i + 1} of 5: ${current.mystery}`;
            break;
        }
    }
    }
    document.getElementById('decade-counter').textContent = decadeNum;

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
    document.getElementById('restart-button').addEventListener('click', resetToStart);
}

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

// Keyboard controls
document.addEventListener('keydown', function(e) {
    const current = rosaryStructure[currentPosition];

    // If on selection screen
    if (current && current.isSelection) {
        if (['1', '2', '3', '4'].includes(e.key)) {
            if (selectMysteries(e.key)) {
                updateDisplay();
            }
        }
        if (e.code === 'Space' || e.key === ' ') {
            if (selectedMysteries) {
                buildRosary();
                currentPosition++;
                updateDisplay();
            }
        }
        return;
    }

    // Navigation
    if (e.code === 'Space' || e.key === ' ') {
        if (currentPosition < rosaryStructure.length - 1) {
            currentPosition++;
            updateDisplay();
        } else {
            resetToStart();
        }
    }
    if (e.code === 'Backspace') {
        if (currentPosition > 0) {
            currentPosition--;
            updateDisplay();
        }
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
resetRosary();
updateDisplay();