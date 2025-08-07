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

const baseStructure = [
    // Opening
    { type: "Sign of the Cross", text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.", bead: "✟", mystery: "", beadType: "cross" },
    { type: "Apostles' Creed", text: 
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
    bead: "○", mystery: "", beadType: "apostles-creed" },
    { type: "Our Father", 
        text: `Our Father, Who art in heaven,
        Hallowed be Thy Name.
        Thy Kingdom come.
        Thy Will be done, on earth as it is in Heaven.
        Give us this day our daily bread.
        And forgive us our trespasses,
        as we forgive those who trespass against us.
        And lead us not into temptation,
        but deliver us from evil.

        Amen.`,
    bead: "●", mystery: "", beadType: "our-father" },

    // Three Hail Marys for Faith, Hope, and Charity
    { type: "Hail Mary (for Faith)", text: 
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
        bead: "○", mystery: "", beadType: "hail-mary" },
    { type: "Hail Mary (for Hope)", text: 
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
        bead: "○", mystery: "", beadType: "hail-mary" },
    { type: "Hail Mary (for Charity)", text: 
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
        bead: "○", mystery: "", beadType: "hail-mary" },
    { type: "Glory Be", text: 
        `Glory be to the Father,
        and to the Son,
        and to the Holy Spirit.
        As it was in the beginning,
        is now,
        and ever shall be,
        world without end.

        Amen.`, 
        bead: "✦", mystery: "", beadType: "glory-be" },
    { type: "Fatima Prayer", text: 
        `O my Jesus,
        forgive us our sins,
        save us from the fires of hell,
        and lead all souls to Heaven,
        especially those in most need of Thy mercy.

        Amen.`, 
        bead: "✦", mystery: "", beadType: "glory-be" },
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

function resetRosary() {
    selectedMysteries = null;
    mysteryType = '';
    rosaryBuilt = false;
    allBeadElements = [];
    rosaryStructure = [
        { type: "Day Selection", text: 'Please select which mysteries to pray today:\n\n1. Monday/Saturday - Joyful Mysteries\n2. Tuesday/Friday - Sorrowful Mysteries\n3. Wednesday/Sunday - Glorious Mysteries\n4. Thursday - Luminous Mysteries', bead: "🗓️", mystery: "", isSelection: true }
    ];
    document.getElementById('rosary-visual-container').classList.remove('show');
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
            text: `${selectedMysteries.names[decade]}\n\n${selectedMysteries.meditations[decade]}\n\nFruit of the Mystery: ${selectedMysteries.names[decade]}`,
            bead: "🌟",
            mystery: selectedMysteries.names[decade],
            isMeditation: true,
            beadType: "mystery"
        });

        // Our Father for each decade
        rosaryStructure.push({
            type: "Our Father",
            text: 
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
            bead: "●",
            mystery: selectedMysteries.names[decade],
            beadType: "our-father"
        });
        
        // 10 Hail Marys for each decade
        for (let hail = 0; hail < 10; hail++) {
            rosaryStructure.push({
                type: `Hail Mary ${hail + 1}/10`,
                text: 
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
                bead: "○",
                mystery: selectedMysteries.names[decade],
                beadType: "hail-mary"
            });
        }
        
        // Glory Be and Fatima Prayer after each decade
        rosaryStructure.push({
            type: "Glory Be",
            text: 
            `Glory be to the Father
            and to the Son,
            and to the Holy Spirit.
            As it was in the beginning, is now,
            and ever shall be,
            world without end.

            Amen.`,
            bead: "✦",
            mystery: selectedMysteries.names[decade],
            beadType: "glory-be"
        });
        
        rosaryStructure.push({
            type: "Fatima Prayer", 
            text: 
            `O my Jesus,
            forgive us our sins,
            save us from the fires of hell,
            and lead all souls to Heaven,
            especially those in most need of Thy mercy.`,
            bead: "✦",
            mystery: selectedMysteries.names[decade],
            beadType: "glory-be"
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
        { type: "Sign of the Cross", text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.", bead: "✟", mystery: "", beadType: "cross" }
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
    let beadIndex = 0;
    const container = document.querySelector('.rosary-chain');
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const loopRadius = 120; // Fixed radius for the circle
    const verticalOffset = -80; // Move everything up

    // Clear existing beads
    document.querySelectorAll('.rosary-bead').forEach(el => el.remove());

    // Opening beads (vertical line above cross, going bottom to top, moved up)
    const openingContainer = document.createElement('div');
    openingContainer.className = 'opening-prayers';
    openingContainer.id = 'opening-prayers-beads';
    openingContainer.style.position = 'absolute';
    openingContainer.style.left = '50%';
    openingContainer.style.bottom = '-50px';
    openingContainer.style.transform = `translateX(-50%) translateY(${verticalOffset}px)`;
    openingContainer.style.display = 'flex';
    openingContainer.style.flexDirection = 'column-reverse';
    openingContainer.style.alignItems = 'center';
    openingContainer.style.gap = '2px';
    container.appendChild(openingContainer);

    for (let i = 2; i < 9; i++) {
        const beadEl = document.createElement('div');
        beadEl.className = `rosary-bead ${rosaryStructure[i].beadType}`;
        beadEl.id = `visual-bead-${beadIndex}`;
        openingContainer.appendChild(beadEl);
        allBeadElements[beadIndex] = beadEl;
        beadIndex++;
    }

    // Main loop (circle), moved up
    const loopContainer = document.createElement('div');
    loopContainer.className = 'rosary-loop';
    loopContainer.style.position = 'absolute';
    loopContainer.style.left = '50%';
    loopContainer.style.top = `calc(50% + ${verticalOffset}px)`;
    loopContainer.style.transform = 'translate(-50%, -50%)';
    loopContainer.style.width = `${loopRadius * 2}px`;
    loopContainer.style.height = `${loopRadius * 2}px`;
    loopContainer.style.border = '3px solid rgba(139, 69, 19, 0.6)';
    loopContainer.style.borderRadius = '50%';
    container.appendChild(loopContainer);

    // Center medal, moved up
    const centerMedal = document.createElement('div');
    centerMedal.className = 'center-medal';
    centerMedal.style.position = 'absolute';
    centerMedal.style.left = '50%';
    centerMedal.style.top = '210%';
    centerMedal.style.transform = `translate(-50%, -50%) translateY(${verticalOffset}px)`;
    loopContainer.appendChild(centerMedal);

    // Cross (fixed position at bottom, moved up)
    const crossEl = document.createElement('div');
    crossEl.className = 'rosary-bead cross';
    crossEl.id = `visual-bead-${beadIndex}`;
    crossEl.style.position = 'absolute';
    crossEl.style.left = '50%';
    crossEl.style.bottom = '0%';
    crossEl.style.transform = `translateX(-50%) translateY(${verticalOffset}px)`;
    container.appendChild(crossEl);
    allBeadElements[beadIndex] = crossEl;
    beadIndex++;

    // Decade beads (positioned exactly on the brown circle, mirrored to the other side)
    const totalDecadeBeads = 70; // 5 decades * 14 beads
    for (let i = 0; i < totalDecadeBeads; i++) {
        const beadEl = document.createElement('div');
        let beadType;
        const posInDecade = i % 14;
        if (posInDecade === 0) beadType = 'mystery';
        else if (posInDecade === 1) beadType = 'our-father';
        else if (posInDecade >= 2 && posInDecade <= 11) beadType = 'hail-mary';
        else beadType = 'glory-be';

        beadEl.className = `rosary-bead ${beadType}`;
        beadEl.id = `visual-bead-${beadIndex}`;

        // Mirror beads across the vertical axis
        const angle = (((i / totalDecadeBeads) * 2 * Math.PI - Math.PI / 2) + Math.PI);
        // Mirror x by subtracting from (loopRadius * 2)
        const x = (loopRadius * 2) - (loopRadius + loopRadius * Math.cos(angle));
        const y = loopRadius + loopRadius * Math.sin(angle);

        beadEl.style.position = 'absolute';
        beadEl.style.left = `${x}px`;
        beadEl.style.top = `${y}px`;
        beadEl.style.transform = `translate(-50%, -50%)`;
        loopContainer.appendChild(beadEl);
        allBeadElements[beadIndex] = beadEl;
        beadIndex++;
    }

    // Closing beads (vertical line above loop, bottom to top), moved up
    const closingContainer = document.createElement('div');
    closingContainer.className = 'closing-prayers';
    closingContainer.id = 'closing-prayers-beads';
    closingContainer.style.position = 'absolute';
    closingContainer.style.left = '50%';
    closingContainer.style.top = `calc(240px + ${verticalOffset}px)`;
    closingContainer.style.transform = 'translateX(-50%)';
    closingContainer.style.display = 'flex';
    closingContainer.style.flexDirection = 'column-reverse';
    closingContainer.style.alignItems = 'center';
    closingContainer.style.gap = '8px';
    container.appendChild(closingContainer);

    for (let i = 0; i < 3; i++) {
        const beadEl = document.createElement('div');
        beadEl.className = 'rosary-bead glory-be';
        beadEl.id = `visual-bead-${beadIndex}`;
        closingContainer.appendChild(beadEl);
        allBeadElements[beadIndex] = beadEl;
        beadIndex++;
    }
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
        // Highlight current bead
        allBeadElements[visualIndex].classList.add('current');
        
        // Mark previous beads as completed
        for (let i = 1; i < visualIndex; i++) {
            if (allBeadElements[i]) {
                allBeadElements[i].classList.add('completed');
            }
        }
    }
}

function updateDisplay() {
    const current = rosaryStructure[currentPosition];
    
    // Special handling for mystery selection
    if (current.isSelection) {
        document.getElementById('mystery-title').textContent = 'Choose Your Mysteries';
        document.getElementById('prayer-type').textContent = current.type;
        document.getElementById('bead-indicator').textContent = current.bead;
        document.getElementById('prayer-text').textContent = current.text;
        document.getElementById('position-indicator').textContent = 'Use number keys 1-4 to select, then Spacebar to continue';
        document.getElementById('decade-counter').textContent = '';
        document.getElementById('rosary-visual-container').classList.remove('show');
        document.getElementById('progress-fill').style.width = '0%';
        return;
    }

    // Show mystery title if available
    document.getElementById('mystery-title').textContent = mysteryType || '';
    document.getElementById('prayer-type').textContent = current.type;
    document.getElementById('bead-indicator').textContent = current.bead;
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

// Keyboard controls
document.addEventListener('keydown', function(e) {
    const current = rosaryStructure[currentPosition];

    // If on selection screen
    if (current && current.isSelection) {
        if (['1', '2', '3', '4'].includes(e.key)) {
            if (selectMysteries(e.key)) {
                document.getElementById('prayer-text').textContent = `You selected: ${mysteryType}\n\nPress Spacebar to begin.`;
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

// Initial load
resetRosary();
updateDisplay();