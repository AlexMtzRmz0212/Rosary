// To Do List:

// Fix buildRosary() in different languages
// make a more obvious transition between Hail Maries
// Check Orthography (Caps)
// Final slide


const languages = {
    en: { name: "English", flag: "EN" },
    es: { name: "Spanish", flag: "ES" },
    fr: { name: "French", flag: "FR" },
    // Add more languages as needed
};

// Store selected languages
let selectedLanguages = ['en']; // Default to English

let rosaryStructure = [
    {
        type: "Language Selection",
        text: `Please select languages (use number keys):\n\n${Object.entries(languages).map(([code, lang], index) => 
            `${index + 1}. ${lang.flag} ${lang.name} ${selectedLanguages.includes(code) ? '✓' : ''}`
        ).join('\n')}\n\nPress Spacebar when done.`,
        bead: "🌐",
        isLanguageSelection: true
    },
    {
        type: "Day Selection",
        text: `Please select which mysteries to pray today:\n\n1. Monday/Saturday - Joyful Mysteries\n2. Tuesday/Friday - Sorrowful Mysteries\n3. Wednesday/Sunday - Glorious Mysteries\n4. Thursday - Luminous Mysteries`,
        bead: "🗓️",
        mystery: "",
        isSelection: true
    }
];

const baseStructure = [
    // Opening
    { 
        type: {
            en: "Sign of the Cross",
            es: "Señal de la Cruz", 
            fr: "Signe de la Croix"
        },
        text: {
            en: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
            es: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
            fr: "Au nom du Père, et du Fils, et du Saint-Esprit. Amen."
        },
        bead: "✟", 
        mystery: "", 
        beadType: "cross" 
    },
    { 
        type: {
            en: "Apostles' Creed",
            es: "Credo de los Apóstoles",
            fr: "Symbole des Apôtres"
        },
        text: {
            en: `I believe in God, the Father almighty, Creator of heaven and earth;
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
            es: `Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra;
y en Jesucristo, su único Hijo, Nuestro Señor,
que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen,
padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado;
descendió a los infiernos; al tercer día resucitó de entre los muertos; 
subió a los cielos, y está sentado a la derecha de Dios Padre todopoderoso;
desde allí ha de venir a juzgar a vivos y muertos.
Creo en el Espíritu Santo, la santa Iglesia católica,
la comunión de los santos, el perdón de los pecados,
la resurrección de la carne y la vida eterna.

Amén.`,
            fr: `Je crois en Dieu, le Père tout-puissant, Créateur du ciel et de la terre;
et en Jésus-Christ, son Fils unique, Notre Seigneur,
qui a été conçu du Saint-Esprit, est né de la Vierge Marie,
a souffert sous Ponce Pilate, a été crucifié, est mort et a été enseveli;
est descendu aux enfers; le troisième jour, Il est ressuscité des morts;
Il est monté aux cieux, et siège à la droite de Dieu le Père tout-puissant;
d'où Il viendra juger les vivants et les morts.
Je crois en l'Esprit Saint, à la sante Église catholique,
à la communion des saints, à la rémission des péchés,
à la résurrection de la chair, et à la vie éternelle.

Amen.`
        },
        bead: "○", 
        mystery: "", 
        beadType: "apostles-creed" 
    },
    { 
        type: {
            en: "Our Father", 
            es: "Padre Nuestro",
            fr: "Notre Père"
        },
        text: {
            en: `Our Father, Who art in heaven,
Hallowed be Thy Name.
Thy Kingdom come.
Thy Will be done, on earth as it is in Heaven.
Give us this day our daily bread.
And forgive us our trespasses,
as we forgive those who trespass against us.
And lead us not into temptation,
but deliver us from evil.

Amen.`,
            es: `Padre nuestro, que estás en el cielo,
santificado sea tu Nombre;
venga a nosotros tu Reino;
hágase tu voluntad en la tierra como en el cielo.
Danos hoy nuestro pan de cada día;
perdona nuestras ofensas,
como también nosotros perdonamos a los que nos ofenden;
no nos dejes caer en la tentación,
y líbranos del mal.

Amén.`,
            fr: `Notre Père, qui es aux cieux,
Que ton nom soit sanctifié.
Que ton règne vienne.
Que ta volonté soit faite sur la terre comme au ciel.
Donne-nous aujourd'hui notre pain de ce jour.
Pardonne-nous nos offenses,
comme nous pardonnons aussi à ceux qui nous ont offensés.
Et ne nous soumets pas à la tentation,
mais délivre-nous du mal.

Amen.`
        },
        bead: "●", 
        mystery: "", 
        beadType: "our-father" 
    },
    // Hail Marys for Faith, Hope, Charity
    ...(function() {
        const purposes = [
            { en: "Faith", es: "Fe", fr: "Foi" },
            { en: "Hope", es: "Esperanza", fr: "Espérance" },
            { en: "Charity", es: "Caridad", fr: "Charité" }
        ];
        
        const text = {
            en: `Hail Mary,
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
            es: `Dios te salve, María,
llena eres de gracia,
el Señor es contigo.
Bendita tú eres entre todas las mujeres,
y bendito es el fruto de tu vientre, Jesús.
Santa María, Madre de Dios,
ruega por nosotros, pecadores,
ahora y en la hora de nuestra muerte.

Amén.`, 
            fr: `Je vous salue Marie, 
pleine de grâce,
le Seigneur est avec vous.
Vous êtes bénie entre toutes les femmes,
et Jésus, le fruit de vos entrailles, est béni.
Sainte Marie, Mère de Dieu,
priez pour nous, pauvres pécheurs,
maintenant et à l'heure de notre mort.

Amen.`
        };

        return purposes.map((purpose, index) => ({
            type: {
                en: `Hail Mary (for ${purpose.en}) [${index + 1}/3]`,
                es: `Ave María (por la ${purpose.es}) [${index + 1}/3]`,
                fr: `Je Vous Salue Marie (pour la ${purpose.fr}) [${index + 1}/3]`
            },
            text: text,
            bead: "○",
            mystery: "",
            beadType: "hail-mary"
        }));
    })(),
    { 
        type: {
            en: "Glory Be",
            es: "Gloria",
            fr: "Gloire au Père"
        },
        text: {
            en: `Glory be to the Father,
and to the Son,
and to the Holy Spirit.
As it was in the beginning,
is now,
and ever shall be,
world without end.

Amen.`,
            es: `Gloria al Padre,
y al Hijo,
y al Espíritu Santo.
Como era en el principio,
ahora y siempre,
por los siglos de los siglos.

Amén.`,
            fr: `Gloire au Père,
et au Fils,
et au Saint-Esprit.
Comme il était au commencement,
maintenant et toujours,
et dans les siècles des siècles.

Amen.`
        },
        bead: "✦", 
        mystery: "", 
        beadType: "glory-be" 
    },
    { 
        type: {
            en: "Fatima Prayer",
            es: "Oración de Fátima", 
            fr: "Prière de Fatima"
        },
        text: {
            en: `O my Jesus,
forgive us our sins,
save us from the fires of hell,
and lead all souls to Heaven,
especially those in most need of Thy mercy.

Amen.`,
            es: `¡Oh, Jesús mío!,
perdona nuestros pecados,
líbranos del fuego del infierno,
lleva al cielo a todas las almas,
especialmente a las más necesitadas de tu misericordia.

Amén.`,
            fr: `Ô mon Jésus,
pardonnez-nous nos péchés,
préservez-nous du feu de l'enfer,
et conduisez au Ciel toutes les âmes,
surtout celles qui ont le plus besoin de votre miséricorde.

Amen.`
        },
        bead: "✦", 
        mystery: "", 
        beadType: "fatima-prayer" 
    }
];

const mysteries = {
    joyful: {
        names: {
            en: [
                "The Annunciation",
                "The Visitation", 
                "The Birth of Jesus",
                "The Presentation",
                "The Finding of Jesus in the Temple"
            ],
            es: [
                "La Anunciación",
                "La Visitación",
                "El Nacimiento de Jesús",
                "La Presentación",
                "El Encuentro de Jesús en el Templo"
            ],
            fr: [
                "L'Annonciation",
                "La Visitation",
                "La Naissance de Jésus",
                "La Présentation",
                "La Rencontre de Jésus au Temple"
            ]
        },
        meditations: {
            en: [
                '“And when the angel had come to her, he said, ‘Hail, full of grace, the Lord is with thee. Blessed art thou among women.” – Luke 1:28.',
                `"Elizabeth was filled with the Holy Spirit and cried out in a loud voice: 'Blest are you among women and blest is the fruit of your womb.'" – Luke 1:41-42.`,
                `"She gave birth to her first-born Son and wrapped Him in swaddling clothes and laid Him in a manger, because there was no room for them in the place where travelers lodged." – Luke 2:7.`,
                `"When the day came to purify them according to the law of Moses, the couple brought Him up to Jerusalem so that He could be presented to the Lord, for it is written in the law of the Lord, 'Every first-born male shall be consecrated to the Lord.'" – Luke 2: 22-23.`,
                '“On the third day they came upon Him in the temple sitting in the midst of the teachers, listening to them and asking them questions.” – Luke 2:46'
            ],
            es: [
                `"Y entrando el ángel donde ella estaba, dijo: ¡Salve, llena de gracia! El Señor es contigo; bendita tú eres entre todas las mujeres." – Lucas 1:28.`,
                `"Entonces Elizabeth, llena del Espíritu Santo, exclamó a gran voz: ¡Bendita tú entre las mujeres, y bendito el fruto de tu vientre!" – Lucas 1:41-42.`,
                `"Y dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no había lugar para ellos en el mesón." – Lucas 2:7.`,
                `"Cuando se cumplieron los días de su purificación según la ley de Moisés, lo llevaron a Jerusalén para presentarlo al Señor, como está escrito en la ley del Señor: 'Todo varón primogénito será consagrado al Señor.'" – Lucas 2:22-23.`,
                `"Al tercer día, lo encontraron en el templo, sentado en medio de los maestros, escuchándolos y haciéndoles preguntas." – Lucas 2:46.`
            ],
            fr: [
                `"L'ange entra chez elle et dit: 'Je te salue, pleine de grâce! Le Seigneur est avec toi; tu es bénie entre toutes les femmes." – Luc 1:28.`,
                `"Élisabeth fut remplie du Saint-Esprit et s'écria à haute voix: 'Bénie es-tu entre les femmes, et béni est le fruit de ton sein!'" – Luc 1:41-42.`,
                `"Elle enfanta son fils premier-né, l'emmaillota et le coucha dans une crèche, car il n'y avait pas de place pour eux dans l'auberge." – Luc 2:7.`,
                `"Lorsque les jours de leur purification selon la loi de Moïse furent accomplis, ils l'amenèrent à Jérusalem pour le présenter au Seigneur, comme il est écrit dans la loi du Seigneur: 'Tout premier-né mâle sera consacré au Seigneur.'" – Luc 2:22-23.`,
                `"Au bout de trois jours, ils le trouvèrent dans le temple, assis au milieu des enseignants, les écoutant et leur posant des questions." – Luc 2:46.`
            ]
        },
        fruits: {
            en: [
                "Humility",
                "Love of Neighbor",
                "Poverty of Spirit",
                "Obedience",
                "Joy in finding Jesus"
            ],
            es: [
                "Humildad",
                "Amor al prójimo",
                "Pobreza de espíritu",
                "Obediencia",
                "Alegría al encontrar a Jesús"
            ],
            fr: [
                "Humilité",
                "Amour du prochain",
                "Pauvreté d'esprit",
                "Obéissance",
                "Joie de trouver Jésus"
            ]
        },
    },
    sorrowful: {
        names: {
            en: [
                "The Agony in the Garden",
                "The Scourging at the Pillar",
                "The Crowning with Thorns", 
                "The Carrying of the Cross",
                "The Crucifixion and Death of Jesus"
            ],
            es: [
                "La Agonía en el Huerto",
                "La Flagelación",
                "La Coronación de Espinas",
                "El Camino al Calvario",
                "La Crucifixión y Muerte de Jesús"
            ],
            fr: [
                "L'Agonie dans le Jardin",
                "La Flagellation",
                "Le Couronnement d'Épines",
                "Le Portement de la Croix",
                "La Crucifixion et la Mort de Jésus"
            ]
        },
        meditations: {
            en: [
                `"In His anguish He prayed with all the greater intensity, and His sweat became like drops of blood falling to the ground. Then He rose from prayer and came to His disciples, only to find them asleep, exhausted with grief." – Luke 22:44-45.`,
                `"Pilate's next move was to take Jesus and have Him scourged." – John 19:1.`,
                `"They stripped off His clothes and wrapped Him in a scarlet military cloak. Weaving a crown out of thorns they fixed it on His head, and stuck a reed in His right hand…." – Matthew 27:28-29.`,
                `"…carrying the cross by Himself, He went out to what is called the Place of the Skull (in Hebrew, Golgotha).'" – John 19:17.`,
                `"Jesus uttered a loud cry and said, 'Father, into Your hands I commend My spirit.' After He said this, He expired." – Luke 23:46.`
            ],
            es: [
                `"Y estando en agonía, oraba más intensamente; y era su sudor como grandes gotas de sangre que caían hasta la tierra. Y levantándose de la oración, vino a sus discípulos, y los halló durmiendo a causa de la tristeza." – Lucas 22:44-45.`,
                `"Tomó entonces Pilato a Jesús y lo hizo azotar." – Juan 19:1.`,
                `"Le desnudaron y le vistieron con un manto de púrpura; y tejiendo una corona de espinas, se la pusieron sobre su cabeza." – Mateo 27:28-29.`,
                `"Y él, cargando su cruz, salió hacia el lugar llamado de la Calavera." – Juan 19:17.`,
                `"Jesús, clamando a gran voz, dijo: Padre, en tus manos encomiendo mi espíritu. Y habiendo dicho esto, expiró." – Lucas 23:46.`
            ],
            fr: [
                `"Étant en agonie, il priait plus instamment, et sa sueur devint comme des grumeaux de sang, qui tombaient à terre. Puis, s'étant levé de sa prière, il vint vers ses disciples, qu'il trouva endormis de tristesse." – Luc 22:44-45.`,
                `"Pilate prit alors Jésus et le fit flageller." – Jean 19:1.`,
                `"Ils lui ôtèrent ses vêtements, et le revêtirent d'un manteau écarlate. Ils tressèrent une couronne d'épines, qu'ils posèrent sur sa tête." – Matthieu 27:28-29.`,
                `"Jésus, portant sa croix, sortit vers le lieu appelé du Crâne." – Jean 19:17.`,
                `"Jésus s'écria d'une voix forte: Père, je remets mon esprit entre tes mains. Et, en disant ces mots, il expira." – Luc 23:46.`
            ]
        },
        fruits: {
            en: [
                "Sorrow for Sin",
                "Purity",
                "Courage",
                "Patience",
                "Perseverance"
            ],
            es: [
                "Dolor por el Pecado",
                "Pureza",
                "Valentía",
                "Paciencia",
                "Perseverancia"
            ],
            fr: [
                "Contrition pour le Péché",
                "Pureté",
                "Courage",
                "Patience",
                "Persévérance"
            ]
        }
    },
    glorious: {
        names: {
            en: [
                "The Resurrection",
                "The Ascension",
                "The Descent of the Holy Spirit",
                "The Assumption", 
                "The Coronation"
            ],
            es: [
                "La Resurrección",
                "La Ascensión",
                "La Venida del Espíritu Santo",
                "La Asunción",
                "La Coronación"
            ],
            fr: [
                "La Résurrection",
                "L'Ascension",
                "La Descente du Saint-Esprit",
                "L'Assomption",
                "Le Couronnement"
            ]
        },
        meditations: {
            en: [
                `"You need not be amazed! You are looking for Jesus of Nazareth, the one who was crucified. He has been raised up; He is not here. See the place where they laid Him" – Mark 16:6.`,
                `"Then, after speaking to them, the Lord Jesus was taken up into Heaven and took His seat at God's right hand." – Mark 16:19.`,
                `"All were filled with the Holy Spirit. They began to express themselves in foreign tongues and make bold proclamation as the Spirit prompted them." – Acts 2:4.`,
                `"You are the glory of Jerusalem… you are the splendid boast of our people… God is pleased with what you have wrought. May you be blessed by the Lord Almighty forever and ever.'" – Judith 15:9-10.`,
                `"A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars." – Revelation 12:1.`            
            ],
            es: [
                `"No os asustéis; buscáis a Jesús de Nazaret, el que fue crucificado; ha resucitado, no está aquí." – Marcos 16:6.`,
                `"Y el Señor Jesús, después de hablarles, fue elevado al cielo y se sentó a la diestra de Dios." – Marcos 16:19.`,
                `"Todos quedaron llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu les concedía expresarse." – Hechos 2:4.`,
                `"Tú eres la gloria de Jerusalén… tú el orgullo de Israel… agradaste al Señor por todas estas cosas… Bendita seas del Señor por los siglos." – Judit 15:9-10.`,
                `"Una gran señal apareció en el cielo: una mujer vestida del sol, con la luna bajo sus pies, y sobre su cabeza una corona de doce estrellas." – Apocalipsis 12:1.`
            ],
            fr: [
                `"Ne soyez pas effrayées; vous cherchez Jésus de Nazareth, qui a été crucifié; il est ressuscité, il n'est point ici." – Marc 16:6.`,
                `"Le Seigneur Jésus, après leur avoir parlé, fut enlevé au ciel, et il s'assit à la droite de Dieu." – Marc 16:19.`,
                `"Ils furent tous remplis du Saint-Esprit, et se mirent à parler en d'autres langues, selon que l'Esprit leur donnait de s'exprimer." – Actes 2:4.`,
                `"Tu es la gloire de Jérusalem… tu es l'honneur de notre peuple… Dieu est satisfait de tes œuvres… Sois bénie du Seigneur dans l'éternité." – Judith 15:9-10.`,
                `"Un grand signe parut dans le ciel: une femme enveloppée du soleil, la lune sous ses pieds, et une couronne de douze étoiles sur sa tête." – Apocalypse 12:1.`
            ]
        },
        fruits: {
            en: [
                "Faith",
                "Hope",
                "Love of God",
                "Grace of a Happy Death",
                "Trust in Mary's Intercession"
            ],
            es: [
                "Fe",
                "Esperanza",
                "Amor a Dios",
                "Gracia de una Buena Muerte",
                "Confianza en la Intercesión de María"
            ],
            fr: [
                "Foi",
                "Espérance",
                "Amour de Dieu",
                "Grâce d'une Bonne Mort",
                "Confiance en l'Intercession de Marie"
            ]
        }
    },
    luminous: {
        names: {
            en: [
                "The Baptism of Jesus",
                "The Wedding at Cana",
                "The Proclamation of the Kingdom of God",
                "The Transfiguration",
                "The Institution of the Eucharist"
            ],
            es: [
                "El Bautismo de Jesús",
                "Las Bodas de Caná",
                "El Anuncio del Reino de Dios",
                "La Transfiguración",
                "La Institución de la Eucaristía"
            ],
            fr: [
                "Le Baptême de Jésus",
                "Les Noces de Cana",
                "L'Annonce du Royaume de Dieu",
                "La Transfiguration",
                "L'Institution de l'Eucharistie"
            ]
        },
        meditations: {
            en: [
                `"And when Jesus was baptized… the heavens were opened and He saw the Spirit of God descending like a dove, and alighting on Him, and lo, a voice from heaven, saying 'this is My beloved Son,' with whom I am well pleased.'" – Matthew 3:16-17.`,
                `"His mother said to the servants, 'Do whatever He tells you.'… Jesus said to them, 'Fill the jars with water.' And they filled them up to the brim." – John 2:5-7.`,
                `"And preach as you go, saying, 'The kingdom of heaven is at hand.' Heal the sick, raise the dead, cleanse lepers, cast out demons. You received without pay, give without pay." – Matthew 10:7-8.`,
                `"And as He was praying, the appearance of His countenance was altered and His raiment became dazzling white. And a voice came out of the cloud saying, 'This is My Son, My chosen; listen to Him!''" – Luke 9:29, 35.`,
                `"And He took bread, and when He had given thanks He broke it and gave it to them, saying, 'This is My body which is given for you.' …And likewise the cup after supper, saying, 'This cup which is poured out for you is the new covenant in My blood'." – Luke 22:19-20.`
            ],
            es: [
                `"Y Jesús, después que fue bautizado, subió inmediatamente del agua; y he aquí, los cielos se abrieron, y vio al Espíritu de Dios que descendía como paloma y venía sobre él. Y hubo una voz de los cielos que decía: Este es mi Hijo amado, en quien tengo complacencia." – Mateo 3:16-17.`,
                `"Su madre dijo a los sirvientes: Haced todo lo que él os diga… Jesús les dijo: Llenad estas tinajas de agua. Y las llenaron hasta arriba." – Juan 2:5-7.`,
                `"Y yendo, predicad, diciendo: El reino de los cielos se ha acercado. Sanad enfermos, resucitad muertos, limpiad leprosos, echad fuera demonios; de gracia recibisteis, dad de gracia." – Mateo 10:7-8.`,
                `"Y mientras oraba, la apariencia de su rostro se hizo otra, y su ropa se hizo blanca y resplandeciente. Y vino una voz desde la nube, diciendo: Este es mi Hijo, mi escogido; a él oíd." – Lucas 9:29, 35.`,
                `"Y tomó el pan y dio gracias, y lo partió y les dio, diciendo: Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí. De igual manera, después de haber cenado, tomó la copa, diciendo: Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama." – Lucas 22:19-20.`
            ],
            fr: [
                `"Dès que Jésus eut été baptisé, il sortit de l'eau. Et voici, les cieux s'ouvrirent, et il vit l'Esprit de Dieu descendre comme une colombe et venir sur lui. Et voici, une voix fit entendre des cieux ces paroles: Celui-ci est mon Fils bien-aimé, en qui j'ai mis toute mon affection." – Matthieu 3:16-17.`,
                `"Sa mère dit aux serviteurs: Faites ce qu'il vous dira… Jésus leur dit: Remplissez d'eau ces vases. Et ils les remplirent jusqu'au bord." – Jean 2:5-7.`,
                `"Allez, prêchez, et dites: Le royaume des cieux est proche. Guérissez les malades, ressuscitez les morts, purifiez les lépreux, chassez les démons. Vous avez reçu gratuitement, donnez gratuitement." – Matthieu 10:7-8.`,
                `"Pendant qu'il priait, l'aspect de son visage changea, et son vêtement devint d'une éclatante blancheur. Et une voix sortit de la nuée, disant: Celui-ci est mon Fils élu: écoutez-le!" – Luc 9:29, 35.`,
                `"Il prit du pain, et, après avoir rendu grâces, le rompit, et le leur donna, en disant: Ceci est mon corps, qui est donné pour vous; faites ceci en mémoire de moi. Il prit de même la coupe, après le souper, et la leur donna, en disant: Cette coupe est la nouvelle alliance en mon sang, qui est répandu pour vous." – Luc 22:19-20.`
            ]
        },
        fruits: {
            en: [
                "Openness to the Holy Spirit",
                "To Jesus through Mary",
                "Repentance and trust in God",
                "Desire for Holiness",
                "Adoration"
            ],
            es: [
                "Apertura al Espíritu Santo",
                "A Jesús por María",
                "Arrepentimiento y confianza en Dios",
                "Deseo de Santidad",
                "Adoración"
            ],
            fr: [
                "Ouverture au Saint-Esprit",
                "À Jésus par Marie",
                "Repentance et confiance en Dieu",
                "Désir de Sainteté",
                "Adoration"
            ]
        }
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
    selectedLanguages = ['en']; // Reset to default language
    rosaryStructure = [
        { 
            type: "Language Selection", 
            text: `Please select languages (use number keys):\n\n${Object.entries(languages).map(([code, lang], index) => 
                `${index + 1}. ${lang.flag} ${lang.name} ${selectedLanguages.includes(code) ? '✓' : ''}`
            ).join('\n')}\n\nPress Spacebar when done.`,
            bead: "🌐", 
            isLanguageSelection: true 
        },
        { 
            type: "Day Selection", 
            text: `Please select which mysteries to pray today:\n\n1. Monday/Saturday - Joyful Mysteries\n2. Tuesday/Friday - Sorrowful Mysteries\n3. Wednesday/Sunday - Glorious Mysteries\n4. Thursday - Luminous Mysteries`,
            bead: "🗓️", 
            mystery: "", 
            isSelection: true 
        }
    ];
    document.getElementById('rosary-visual-container').classList.remove('show');
    updateSelectedLanguagesDisplay();
}

function selectMysteries(type) {
    switch(type) {
        case '1':
            selectedMysteries = mysteries.joyful;
            mysteryType = {
                en: 'Joyful Mysteries',
                es: 'Misterios Gozosos',
                fr: 'Mystères Joyeux'
            };
            break;
        case '2':
            selectedMysteries = mysteries.sorrowful;
            mysteryType = {
                en: 'Sorrowful Mysteries',
                es: 'Misterios Dolorosos',
                fr: 'Mystères Douloureux'
            };
            break;
        case '3':
            selectedMysteries = mysteries.glorious;
            mysteryType = {
                en: 'Glorious Mysteries',
                es: 'Misterios Gloriosos',
                fr: 'Mystères Glorieux'
            };
            break;
        case '4':
            selectedMysteries = mysteries.luminous;
            mysteryType = {
                en: 'Luminous Mysteries',
                es: 'Misterios Luminosos',
                fr: 'Mystères Lumineux'
            };
            break;
        default:
            return false;
    }
    return true;
}

// FIX
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
    
    updateSelectedLanguagesDisplay();
    
    if (current.isLanguageSelection) {
        document.getElementById('mystery-title').textContent = 'Choose Languages';
        document.getElementById('prayer-type').textContent = current.type;
        document.getElementById('bead-indicator').textContent = current.bead;
        document.getElementById('prayer-text').textContent = current.text;
        document.getElementById('position-indicator').textContent = 'Use number keys 1-4 to select languages, Spacebar to continue';
        return;
    }

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

    // Display prayers in multiple languages
    if (rosaryBuilt && selectedMysteries) {

        // For multi-language display
        document.getElementById('mystery-title').innerHTML = selectedLanguages.map(lang => 
            `<div class="language-title">${languages[lang].flag} ${mysteryType[lang]}</div>`
        ).join('');

        document.getElementById('prayer-type').innerHTML = selectedLanguages.map(lang => 
            `<div class="prayer-type-language">${languages[lang].flag} ${typeof current.type === 'object' ? current.type[lang] || current.type.en : current.type}</div>`
        ).join('');

        document.getElementById('prayer-text').innerHTML = selectedLanguages.map(lang => 
            `<div class="prayer-text-language">
                <div class="language-label">${languages[lang].flag} ${languages[lang].name}</div>
                <div class="prayer-content">${typeof current.text === 'object' ? current.text[lang] || current.text.en : current.text}</div>
            </div>`
        ).join('<hr class="language-separator">');
        
        document.getElementById("flags").innerHTML = "🇬🇧 🇪🇸 🇫🇷";
        twemoji.parse(document.head);

    } else {
        // Fallback for single language or non-rosary content
        document.getElementById('mystery-title').textContent = mysteryType || '';
        document.getElementById('prayer-type').textContent = typeof current.type === 'object' ? current.type.en : current.type;
        document.getElementById('prayer-text').textContent = typeof current.text === 'object' ? current.text.en : current.text;
    }

    document.getElementById('bead-indicator').textContent = current.bead;

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
            if (selectedMysteries && current.mystery === selectedMysteries.names.en[i]) {
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

function updateSelectedLanguagesDisplay() {
    const container = document.getElementById('selected-languages');
    if (rosaryBuilt && selectedLanguages.length > 0) {
        container.innerHTML = '<strong>Languages:</strong>' + 
            selectedLanguages.map(lang => 
                `<div>${languages[lang].flag} ${languages[lang].name}</div>`
            ).join('');
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Keyboard controls
document.addEventListener('keydown', function(e) {
    const current = rosaryStructure[currentPosition];

    // Language selection
    if (current && current.isLanguageSelection) {
        const langCodes = Object.keys(languages);
        const langIndex = parseInt(e.key) - 1;
        
        if (langIndex >= 0 && langIndex < langCodes.length) {
            const langCode = langCodes[langIndex];
            const index = selectedLanguages.indexOf(langCode);
            
            if (index > -1) {
                // Remove if already selected
                selectedLanguages.splice(index, 1);
            } else {
                // Add if not selected
                selectedLanguages.push(langCode);
            }
            
            // Update display
            current.text = `Please select languages (use number keys):\n\n${Object.entries(languages).map(([code, lang], index) => 
                `${index + 1}. ${lang.flag} ${lang.name} ${selectedLanguages.includes(code) ? '✓' : ''}`
            ).join('\n')}\n\nPress Spacebar when done.`;
            
            updateDisplay();
            updateSelectedLanguagesDisplay();
        }
        
        if (e.code === 'Space' && selectedLanguages.length > 0) {
            currentPosition++;
            updateDisplay();
            updateSelectedLanguagesDisplay();
        }
        return;
    }

    // If on selection screen
    if (current && current.isSelection) {
        if (['1', '2', '3', '4'].includes(e.key)) {
            if (selectMysteries(e.key)) {
                const options = [
                { key: '1', label: 'Monday/Saturday - Joyful Mysteries' },
                { key: '2', label: 'Tuesday/Friday - Sorrowful Mysteries' },
                { key: '3', label: 'Wednesday/Sunday - Glorious Mysteries' },
                { key: '4', label: 'Thursday - Luminous Mysteries' }
                ];

                // Build text with a check mark on the chosen option (like language selection)
                current.text = `Please select which mysteries to pray today:\n\n${options.map(opt => 
                `${opt.key}. ${opt.label} ${e.key === opt.key ? '✓' : ''}`
                ).join('\n')}\n\nPress Spacebar to begin.`;

                // Update the visible text immediately
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
        if (e.code === 'Backspace' || e.key.toLowerCase() === 'r') {
            resetRosary();
            currentPosition = 0;
            updateDisplay();
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

// Add CSS for multi-language display
const multiLanguageCSS = `
.language-title {
    margin-bottom: 10px;
    font-size: 1.2em;
}

.prayer-type-language {
    margin-bottom: 8px;
    font-size: 1.1em;
}

.prayer-text-language {
    margin-bottom: 20px;
}

.language-label {
    font-weight: bold;
    color: #87ceeb;
    margin-bottom: 5px;
    font-size: 0.9em;
}

.prayer-content {
    white-space: pre-line;
    margin-bottom: 15px;
}

.language-separator {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.3);
    margin: 15px 0;
}

.selected-languages {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.7);
    padding: 10px;
    border-radius: 5px;
    font-size: 0.8em;
}

.selected-languages div {
    margin: 2px 0;
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = multiLanguageCSS;
document.head.appendChild(style);

// Initial load
resetRosary();
updateDisplay();