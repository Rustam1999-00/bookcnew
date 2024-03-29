let books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "things fall apart",
        "year": 1958,
        "id": "bb1",
        "bookmarked": true
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "fairy tales",
        "year": 1836,
        "id": "bb2",
        "bookmarked": false
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "the divine comedy",
        "year": 1315,
        "id": "bb3",
        "bookmarked": true
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "the epic of gilgamesh",
        "year": -1700,
        "id": "bb4",
        "bookmarked": true
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "the book of job",
        "year": -600,
        "id": "bb5",
        "bookmarked": false
    },
    {
        "author": "Unknown",
        "country": "India Iran Iraq Egypt Tajikistan",
        "imageLink": "one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "one thousand and one nights",
        "year": 1200,
        "id": "bb6",
        "bookmarked": false
    },
    {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "njál's saga",
        "year": 1350,
        "id": "bb7",
        "bookmarked": false
    },
    {
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
        "pages": 226,
        "title": "pride and prejudice",
        "year": 1813,
        "id": "bb8",
        "bookmarked": false
    },
    {
        "author": "Honoré de Balzac",
        "country": "France",
        "imageLink": "le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        "pages": 443,
        "title": "le père goriot",
        "year": 1835,
        "id": "bb9",
        "bookmarked": false
    },
    {
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        "pages": 256,
        "title": "molloy, malone dies, the unnamable, the trilogy",
        "year": 1952,
        "id": "bb10",
        "bookmarked": false
    },
    {
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "great-expectations.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 1024,
        "title": "the decameron",
        "year": 1351,
        "id": "bb11",
        "bookmarked": false
    },
    {
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 224,
        "title": "ficciones",
        "year": 1965,
        "id": "bb12",
        "bookmarked": false
    },
    {
        "author": "Emily Brontë",
        "country": "United Kingdom",
        "imageLink": "wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
        "pages": 342,
        "title": "wuthering heights",
        "year": 1847,
        "id": "bb13",
        "bookmarked": false
    },
    {
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "l-etranger.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
        "pages": 185,
        "title": "the stranger",
        "year": 1942,
        "id": "bb14",
        "bookmarked": false
    },
    {
        "author": "Paul Celan",
        "country": "Romania, France",
        "imageLink": "poems-paul-celan.jpg",
        "language": "German",
        "link": "\n",
        "pages": 320,
        "title": "poems",
        "year": 1952,
        "id": "bb15",
        "bookmarked": false
    },
    {
        "author": "Louis-Ferdinand Céline",
        "country": "France",
        "imageLink": "voyage-au-bout-de-la-nuit.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
        "pages": 505,
        "title": "journey to the end of the night",
        "year": 1932,
        "id": "bb16",
        "bookmarked": false
    },
    {
        "author": "Miguel de Cervantes",
        "country": "Spain",
        "imageLink": "don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
        "pages": 1056,
        "title": "don quijote de la mancha",
        "year": 1610,
        "id": "bb17",
        "bookmarked": false
    },
    {
        "author": "Geoffrey Chaucer",
        "country": "England",
        "imageLink": "the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
        "pages": 544,
        "title": "the canterbury tales",
        "year": 1450,
        "id": "bb18",
        "bookmarked": false
    },
    {
        "author": "Anton Chekhov",
        "country": "Russia",
        "imageLink": "stories-of-anton-chekhov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
        "pages": 194,
        "title": "stories",
        "year": 1886,
        "id": "bb19",
        "bookmarked": false
    },
    {
        "author": "Joseph Conrad",
        "country": "United Kingdom",
        "imageLink": "nostromo.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nostromo\n",
        "pages": 320,
        "title": "nostromo",
        "year": 1904,
        "id": "bb20",
        "bookmarked": false
    },
    {
        "author": "Charles Dickens",
        "country": "United Kingdom",
        "imageLink": "great-expectations.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
        "pages": 194,
        "title": "great expectations",
        "year": 1861,
        "id": "bb21",
        "bookmarked": false
    },
    {
        "author": "Denis Diderot",
        "country": "France",
        "imageLink": "jacques-the-fatalist.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
        "pages": 596,
        "title": "jacques the fatalist",
        "year": 1796,
        "id": "bb22",
        "bookmarked": false
    },
    {
        "author": "Alfred Döblin",
        "country": "Germany",
        "imageLink": "berlin-alexanderplatz.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
        "pages": 600,
        "title": "berlin alexanderplatz",
        "year": 1929,
        "id": "bb23",
        "bookmarked": false
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "crime-and-punishment.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
        "pages": 551,
        "title": "crime and punishment",
        "year": 1866,
        "id": "bb24",
        "bookmarked": false
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "the-idiot.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
        "pages": 656,
        "title": "the idiot",
        "year": 1869,
        "id": "bb25",
        "bookmarked": false
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "the-possessed.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
        "pages": 768,
        "title": "the possessed",
        "year": 1872,
        "id": "bb26",
        "bookmarked": false
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "the-brothers-karamazov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
        "pages": 824,
        "title": "the brothers karamazov",
        "year": 1880,
        "id": "bb27",
        "bookmarked": false
    },
    {
        "author": "George Eliot",
        "country": "United Kingdom",
        "imageLink": "middlemarch.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
        "pages": 800,
        "title": "middlemarch",
        "year": 1871,
        "id": "bb28",
        "bookmarked": false
    },
    {
        "author": "Ralph Ellison",
        "country": "United States",
        "imageLink": "invisible-man.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
        "pages": 581,
        "title": "invisible man",
        "year": 1952,
        "id": "bb29",
        "bookmarked": false
    },
    {
        "author": "Euripides",
        "country": "Greece",
        "imageLink": "medea.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
        "pages": 104,
        "title": "medea",
        "year": -431,
        "id": "bb30",
        "bookmarked": false
    },
    {
        "author": "William Faulkner",
        "country": "United States",
        "imageLink": "absalom-absalom.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
        "pages": 313,
        "title": "absalom, absalom!",
        "year": 1936,
        "id": "bb31",
        "bookmarked": false
    },
    {
        "author": "William Faulkner",
        "country": "United States",
        "imageLink": "the-sound-and-the-fury.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
        "pages": 326,
        "title": "the sound and the fury",
        "year": 1929,
        "id": "bb32",
        "bookmarked": false
    },
    {
        "author": "Gustave Flaubert",
        "country": "France",
        "imageLink": "madame-bovary.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
        "pages": 528,
        "title": "madame bovary",
        "year": 1857,
        "id": "bb33",
        "bookmarked": false
    },
    {
        "author": "Gustave Flaubert",
        "country": "France",
        "imageLink": "l-education-sentimentale.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
        "pages": 606,
        "title": "sentimental education",
        "year": 1869,
        "id": "bb34",
        "bookmarked": false
    },
    {
        "author": "Federico García Lorca",
        "country": "Spain",
        "imageLink": "gypsy-ballads.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
        "pages": 218,
        "title": "gypsy ballads",
        "year": 1928,
        "id": "bb35",
        "bookmarked": false
    },
    {
        "author": "Gabriel García Márquez",
        "country": "Colombia",
        "imageLink": "one-hundred-years-of-solitude.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
        "pages": 417,
        "title": "one hundred years of solitude",
        "year": 1967,
        "id": "bb36",
        "bookmarked": false
    },
    {
        "author": "Gabriel García Márquez",
        "country": "Colombia",
        "imageLink": "love-in-the-time-of-cholera.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
        "pages": 368,
        "title": "love in the time of cholera",
        "year": 1985,
        "id": "bb37",
        "bookmarked": false
    },
    {
        "author": "Johann Wolfgang von Goethe",
        "country": "Saxe-Weimar",
        "imageLink": "faust.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
        "pages": 158,
        "title": "faust",
        "year": 1832,
        "id": "bb38",
        "bookmarked": false
    },
    {
        "author": "Nikolai Gogol",
        "country": "Russia",
        "imageLink": "dead-souls.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
        "pages": 432,
        "title": "dead souls",
        "year": 1842,
        "id": "bb39",
        "bookmarked": false
    },
    {
        "author": "Günter Grass",
        "country": "Germany",
        "imageLink": "the-tin-drum.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
        "pages": 600,
        "title": "the tin drum",
        "year": 1959,
        "id": "bb40",
        "bookmarked": false
    },
    {
        "author": "João Guimarães Rosa",
        "country": "Brazil",
        "imageLink": "the-devil-to-pay-in-the-backlands.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
        "pages": 494,
        "title": "the devil to pay in the backlands",
        "year": 1956,
        "id": "bb41",
        "bookmarked": false
    },
    {
        "author": "Knut Hamsun",
        "country": "Norway",
        "imageLink": "hunger.jpg",
        "language": "Norwegian",
        "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
        "pages": 176,
        "title": "hunger",
        "year": 1890,
        "id": "bb42",
        "bookmarked": false
    },
    {
        "author": "Ernest Hemingway",
        "country": "United States",
        "imageLink": "the-old-man-and-the-sea.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
        "pages": 128,
        "title": "the old man and the sea",
        "year": 1952,
        "id": "bb43",
        "bookmarked": false
    },
    {
        "author": "Homer",
        "country": "Greece",
        "imageLink": "the-iliad-of-homer.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Iliad\n",
        "pages": 608,
        "title": "iliad",
        "year": -735,
        "id": "bb44",
        "bookmarked": false
    },
    {
        "author": "Homer",
        "country": "Greece",
        "imageLink": "the-odyssey-of-homer.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Odyssey\n",
        "pages": 374,
        "title": "odyssey",
        "year": -800,
        "id": "bb45",
        "bookmarked": false
    },
    {
        "author": "Henrik Ibsen",
        "country": "Norway",
        "imageLink": "a-Dolls-house.jpg",
        "language": "Norwegian",
        "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
        "pages": 68,
        "title": "a doll's house",
        "year": 1879,
        "id": "bb46",
        "bookmarked": false
    },
    {
        "author": "James Joyce",
        "country": "Irish Free State",
        "imageLink": "ulysses.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
        "pages": 228,
        "title": "ulysses",
        "year": 1922,
        "id": "bb47",
        "bookmarked": false
    },
    {
        "author": "Franz Kafka",
        "country": "Czechoslovakia",
        "imageLink": "stories-of-franz-kafka.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
        "pages": 488,
        "title": "stories",
        "year": 1924,
        "id": "bb48",
        "bookmarked": false
    },
    {
        "author": "Franz Kafka",
        "country": "Czechoslovakia",
        "imageLink": "the-trial.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Trial\n",
        "pages": 160,
        "title": "the trial",
        "year": 1925,
        "id": "bb49",
        "bookmarked": false
    },
    {
        "author": "Franz Kafka",
        "country": "Czechoslovakia",
        "imageLink": "the-castle.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
        "pages": 352,
        "title": "the castle",
        "year": 1926,
        "id": "bb50",
        "bookmarked": false
    },
    {
        "author": "Kālidāsa",
        "country": "India",
        "imageLink": "the-recognition-of-shakuntala.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
        "pages": 147,
        "title": "the recognition of shakuntala",
        "year": 150,
        "id": "bb51",
        "bookmarked": false
    },
    {
        "author": "Yasunari Kawabata",
        "country": "Japan",
        "imageLink": "the-sound-of-the-mountain.jpg",
        "language": "Japanese",
        "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
        "pages": 288,
        "title": "the sound of the mountain",
        "year": 1954,
        "id": "bb52",
        "bookmarked": false
    },
    {
        "author": "Nikos Kazantzakis",
        "country": "Greece",
        "imageLink": "zorba-the-greek.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
        "pages": 368,
        "title": "zorba the greek",
        "year": 1946,
        "id": "bb53",
        "bookmarked": false
    },
    {
        "author": "D. H. Lawrence",
        "country": "United Kingdom",
        "imageLink": "sons-and-lovers.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
        "pages": 432,
        "title": "sons and lovers",
        "year": 1913,
        "id": "bb54",
        "bookmarked": false
    },
    {
        "author": "Halldór Laxness",
        "country": "Iceland",
        "imageLink": "independent-people.jpg",
        "language": "Icelandic",
        "link": "https://en.wikipedia.org/wiki/Independent_People\n",
        "pages": 470,
        "title": "independent people",
        "year": 1934,
        "id": "bb55",
        "bookmarked": false
    },
    {
        "author": "Giacomo Leopardi",
        "country": "Italy",
        "imageLink": "poems-giacomo-leopardi.jpg",
        "language": "Italian",
        "link": "\n",
        "pages": 184,
        "title": "poems",
        "year": 1818,
        "id": "bb56",
        "bookmarked": false
    },
    {
        "author": "Doris Lessing",
        "country": "United Kingdom",
        "imageLink": "the-golden-notebook.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
        "pages": 688,
        "title": "the golden notebook",
        "year": 1962,
        "id": "bb57",
        "bookmarked": false
    },
    {
        "author": "Astrid Lindgren",
        "country": "Sweden",
        "imageLink": "pippi-longstocking.jpg",
        "language": "Swedish",
        "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
        "pages": 160,
        "title": "pippi longstocking",
        "year": 1945,
        "id": "bb58",
        "bookmarked": false
    },
    {
        "author": "Lu Xun",
        "country": "China",
        "imageLink": "diary-of-a-madman.jpg",
        "language": "Chinese",
        "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
        "pages": 389,
        "title": "diary of a madman",
        "year": 1918,
        "id": "bb59",
        "bookmarked": false
    },
    {
        "author": "Naguib Mahfouz",
        "country": "Egypt",
        "imageLink": "children-of-gebelawi.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
        "pages": 355,
        "title": "children of gebelawi",
        "year": 1959,
        "id": "bb60",
        "bookmarked": false
    },
    {
        "author": "Thomas Mann",
        "country": "Germany",
        "imageLink": "buddenbrooks.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
        "pages": 736,
        "title": "buddenbrooks",
        "year": 1901,
        "id": "bb61",
        "bookmarked": false
    },
    {
        "author": "Thomas Mann",
        "country": "Germany",
        "imageLink": "the-magic-mountain.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
        "pages": 720,
        "title": "the magic mountain",
        "year": 1924,
        "id": "bb62",
        "bookmarked": false
    },
    {
        "author": "Herman Melville",
        "country": "United States",
        "imageLink": "moby-dick.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
        "pages": 378,
        "title": "moby dick",
        "year": 1851,
        "id": "bb63",
        "bookmarked": false
    },
    {
        "author": "Michel de Montaigne",
        "country": "France",
        "imageLink": "essais.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
        "pages": 404,
        "title": "essays",
        "year": 1595,
        "id": "bb64",
        "bookmarked": false
    },
    {
        "author": "Elsa Morante",
        "country": "Italy",
        "imageLink": "history.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
        "pages": 600,
        "title": "history",
        "year": 1974,
        "id": "bb65",
        "bookmarked": false
    },
    {
        "author": "Toni Morrison",
        "country": "United States",
        "imageLink": "beloved.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
        "pages": 321,
        "title": "beloved",
        "year": 1987,
        "id": "bb66",
        "bookmarked": false
    },
    {
        "author": "Murasaki Shikibu",
        "country": "Japan",
        "imageLink": "the-tale-of-genji.jpg",
        "language": "Japanese",
        "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
        "pages": 1360,
        "title": "the tale of genji",
        "year": 1006,
        "id": "bb67",
        "bookmarked": false
    },
    {
        "author": "Robert Musil",
        "country": "Austria",
        "imageLink": "the-man-without-qualities.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
        "pages": 365,
        "title": "the man without qualities",
        "year": 1931,
        "id": "bb68",
        "bookmarked": false
    },
    {
        "author": "Vladimir Nabokov",
        "country": "Russia/United States",
        "imageLink": "lolita.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Lolita\n",
        "pages": 317,
        "title": "lolita",
        "year": 1955,
        "id": "bb69",
        "bookmarked": false
    },
    {
        "author": "George Orwell",
        "country": "United Kingdom",
        "imageLink": "nineteen-eighty-four.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
        "pages": 272,
        "title": "nineteen eighty-four",
        "year": 1949,
        "id": "bb70",
        "bookmarked": false
    },
    {
        "author": "Ovid",
        "country": "Roman Empire",
        "imageLink": "the-metamorphoses-of-ovid.jpg",
        "language": "Classical Latin",
        "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
        "pages": 576,
        "title": "metamorphoses",
        "year": 100,
        "id": "bb71",
        "bookmarked": false
    },
    {
        "author": "Fernando Pessoa",
        "country": "Portugal",
        "imageLink": "the-book-of-disquiet.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
        "pages": 272,
        "title": "the book of disquiet",
        "year": 1928,
        "id": "bb72",
        "bookmarked": false
    },
    {
        "author": "Edgar Allan Poe",
        "country": "United States",
        "imageLink": "tales-and-poems-of-edgar-allan-poe.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
        "pages": 842,
        "title": "tales",
        "year": 1950,
        "id": "bb73",
        "bookmarked": false
    },
    {
        "author": "Marcel Proust",
        "country": "France",
        "imageLink": "a-la-recherche-du-temps-perdu.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
        "pages": 2408,
        "title": "in search of lost time",
        "year": 1920,
        "id": "bb74",
        "bookmarked": false
    },
    {
        "author": "François Rabelais",
        "country": "France",
        "imageLink": "gargantua-and-pantagruel.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
        "pages": 623,
        "title": "gargantua and pantagruel",
        "year": 1533,
        "id": "bb75",
        "bookmarked": false
    },
    {
        "author": "Juan Rulfo",
        "country": "Mexico",
        "imageLink": "pedro-paramo.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
        "pages": 124,
        "title": "pedro páramo",
        "year": 1955,
        "id": "bb76",
        "bookmarked": false
    },
    {
        "author": "Rumi",
        "country": "Sultanate of Rum",
        "imageLink": "the-masnavi.jpg",
        "language": "Persian",
        "link": "https://en.wikipedia.org/wiki/Masnavi\n",
        "pages": 438,
        "title": "the masnavi",
        "year": 1236,
        "id": "bb77",
        "bookmarked": false
    },
    {
        "author": "Salman Rushdie",
        "country": "United Kingdom, India",
        "imageLink": "midnights-children.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
        "pages": 536,
        "title": "midnight's children",
        "year": 1981,
        "id": "bb78",
        "bookmarked": false
    },
    {
        "author": "Saadi",
        "country": "Persia, Persian Empire",
        "imageLink": "bostan.jpg",
        "language": "Persian",
        "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
        "pages": 298,
        "title": "bostan",
        "year": 1257,
        "id": "bb79",
        "bookmarked": false
    },
    {
        "author": "Tayeb Salih",
        "country": "Sudan",
        "imageLink": "season-of-migration-to-the-north.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
        "pages": 139,
        "title": "season of migration to the north",
        "year": 1966,
        "id": "bb80",
        "bookmarked": false
    },
    {
        "author": "José Saramago",
        "country": "Portugal",
        "imageLink": "blindness.jpg",
        "language": "Portuguese",
        "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
        "pages": 352,
        "title": "blindness",
        "year": 1995,
        "id": "bb81",
        "bookmarked": false
    },
    {
        "author": "William Shakespeare",
        "country": "England",
        "imageLink": "hamlet.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Hamlet\n",
        "pages": 432,
        "title": "hamlet",
        "year": 1603,
        "id": "bb82",
        "bookmarked": false
    },
    {
        "author": "William Shakespeare",
        "country": "England",
        "imageLink": "king-lear.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/King_Lear\n",
        "pages": 384,
        "title": "king lear",
        "year": 1608,
        "id": "bb83",
        "bookmarked": false
    },
    {
        "author": "William Shakespeare",
        "country": "England",
        "imageLink": "othello.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Othello\n",
        "pages": 314,
        "title": "othello",
        "year": 1609,
        "id": "bb84",
        "bookmarked": false
    },
    {
        "author": "Sophocles",
        "country": "Greece",
        "imageLink": "oedipus-the-king.jpg",
        "language": "Greek",
        "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
        "pages": 88,
        "title": "oedipus the king",
        "year": -430,
        "id": "bb85",
        "bookmarked": false
    },
    {
        "author": "Stendhal",
        "country": "France",
        "imageLink": "le-rouge-et-le-noir.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
        "pages": 576,
        "title": "the red and the black",
        "year": 1830,
        "id": "bb86",
        "bookmarked": false
    },
    {
        "author": "Laurence Sterne",
        "country": "England",
        "imageLink": "the-life-and-opinions-of-tristram-shandy.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
        "pages": 640,
        "title": "the life and opinions of tristram shandy",
        "year": 1760,
        "id": "bb87",
        "bookmarked": false
    },
    {
        "author": "Italo Svevo",
        "country": "Italy",
        "imageLink": "confessions-of-zeno.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
        "pages": 412,
        "title": "confessions of zeno",
        "year": 1923,
        "id": "bb88",
        "bookmarked": false
    },
    {
        "author": "Jonathan Swift",
        "country": "Ireland",
        "imageLink": "gullivers-travels.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
        "pages": 178,
        "title": "gulliver's travels",
        "year": 1726,
        "id": "bb89",
        "bookmarked": false
    },
    {
        "author": "Leo Tolstoy",
        "country": "Russia",
        "imageLink": "war-and-peace.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
        "pages": 1296,
        "title": "war and peace",
        "year": 1867,
        "id": "bb90",
        "bookmarked": false
    },
    {
        "author": "Leo Tolstoy",
        "country": "Russia",
        "imageLink": "anna-karenina.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
        "pages": 864,
        "title": "anna karenina",
        "year": 1877,
        "id": "bb91",
        "bookmarked": false
    },
    {
        "author": "Leo Tolstoy",
        "country": "Russia",
        "imageLink": "the-death-of-ivan-ilyich.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
        "pages": 92,
        "title": "the death of ivan ilyich",
        "year": 1886,
        "id": "bb92",
        "bookmarked": false
    },
    {
        "author": "Mark Twain",
        "country": "United States",
        "imageLink": "the-adventures-of-huckleberry-finn.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
        "pages": 224,
        "title": "the adventures of huckleberry finn",
        "year": 1884,
        "id": "bb93",
        "bookmarked": false
    },
    {
        "author": "Valmiki",
        "country": "India",
        "imageLink": "ramayana.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Ramayana\n",
        "pages": 152,
        "title": "ramayana",
        "year": -450,
        "id": "bb94",
        "bookmarked": false
    },
    {
        "author": "Virgil",
        "country": "Roman Empire",
        "imageLink": "the-aeneid.jpg",
        "language": "Classical Latin",
        "link": "https://en.wikipedia.org/wiki/Aeneid\n",
        "pages": 442,
        "title": "the aeneid",
        "year": -23,
        "id": "bb95",
        "bookmarked": false
    },
    {
        "author": "Vyasa",
        "country": "India",
        "imageLink": "the-mahab-harata.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
        "pages": 276,
        "title": "mahabharata",
        "year": -700,
        "id": "bb96",
        "bookmarked": false
    },
    {
        "author": "Walt Whitman",
        "country": "United States",
        "imageLink": "leaves-of-grass.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
        "pages": 152,
        "title": "leaves of grass",
        "year": 1855,
        "id": "bb97",
        "bookmarked": false
    },
    {
        "author": "Virginia Woolf",
        "country": "United Kingdom",
        "imageLink": "mrs-dalloway.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
        "pages": 216,
        "title": "mrs dalloway",
        "year": 1925,
        "id": "bb98",
        "bookmarked": false
    },
    {
        "author": "Virginia Woolf",
        "country": "United Kingdom",
        "imageLink": "to-the-lighthouse.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
        "pages": 209,
        "title": "to the lighthouse",
        "year": 1927,
        "id": "bb99",
        "bookmarked": false
    },
    {
        "author": "Marguerite Yourcenar",
        "country": "France/Belgium",
        "imageLink": "memoirs-of-hadrian.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
        "pages": 408,
        "title": "memoirs of hadrian",
        "year": 1951,
        "id": "bb100",
        "bookmarked": false
    }
]





var elDark = document.querySelector('.js-dark');
var elBtn = document.querySelector('.js-btn');

var elSelect = document.querySelector('.js-select');
var elSelect2 = document.querySelector('.js-select2');
var elSelect3 = document.querySelector('.js-select3');
var elSelect4 = document.querySelector('.js-select4');

var elList = document.querySelector('.js-list');

var elText = document.querySelector('.js-text');

var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');



let newinput = [];
elForm.addEventListener('input',function(){
    newinput = []
    elList.innerHTML = '';


   var elInputval = elInput.value.toLocaleLowerCase()

   books.forEach((elsearch)=>{
    if(elsearch.title.toLocaleLowerCase().includes(elInputval)){
        newinput.push(elsearch)
    }
   })
renderbook(newinput,elList)
})





let them = false

elDark.addEventListener('click', () => {
    them = !them;

    let bgtheme = them ? 'dark' : '';

    window.localStorage.setItem('them', bgtheme)
    change()

})
function change() {
    if (window.localStorage.getItem('them') == "dark") {
        document.body.classList.add('dark')
    }
    else {
        document.body.classList.remove('dark')
    }
}


var booksarrey = [];

let renderbook = (arrey, node) => {


    arrey.forEach((item) => {


        let elLi = document.createElement('li');
        elLi.setAttribute('class', 'col-3 lg-col-3 md-col-5 sm-col-12 border list-group p-0 ms-5 mb-5 text-center text-light bg-dark hover')
        let elImg = document.createElement('img');
        elImg.src = `./img/books/${item.imageLink}`



        let eltitle = document.createElement('h2')
        eltitle.textContent = item.title;
        eltitle.setAttribute('class', 'text-center')

        let elYear = document.createElement('h3')
        elYear.textContent = `Year=${item.year}`
        elYear.setAttribute('class', 'text-center mt-2')

        let elLanguage = document.createElement('h3')
        elLanguage.textContent = item.language;
        elLanguage.setAttribute('class', 'text-center mt-2 ')

        let elPages = document.createElement('h3')
        elPages.textContent = `Pages=${item.pages}`;
        elPages.setAttribute('class', 'text-center mt-2 ')



        elLi.appendChild(elImg)
        elLi.appendChild(eltitle)
        elLi.appendChild(elYear)
        elLi.appendChild(elLanguage)
        elLi.appendChild(elPages)

        node.appendChild(elLi);



        // booksarrey.push(item);

    })


}
renderbook(books, elList)

//===================================

let elYears = new Set()

books.forEach((item) => {
    let ItemYear = item.year
    elYears.add(ItemYear)

});


elYears.forEach((newyear) => {
    let elNewoption = document.createElement('option')
    elNewoption.textContent = newyear;

    elSelect.appendChild(elNewoption)


})

let sortYear = []

elSelect.addEventListener('change', () => {
    sortYear = [];

    elList.innerHTML = ' ';
    if (elSelect.value == 'all') {
        renderbook(books, elList)
    }

    if (elSelect.valuev !== 'All') {
        books.forEach((elyear) => {
            if (elyear.year == elSelect.value) {
                sortYear.push(elyear)
            }

        })
    }


    renderbook(sortYear, elList)

});
// =========================================
let languageSort = new Set();
books.forEach((setL) => {
    let language = setL.language;
    languageSort.add(language)
});


languageSort.forEach((eladd) => {
    let lagOptione = document.createElement('option');
    lagOptione.textContent = eladd;
    elSelect2.appendChild(lagOptione)
})

const languageDom = [];

elSelect2.addEventListener('change', () => {


    const languageDom = [];
    elList.innerHTML = ' ';

    if (elSelect2.value == 'all') {
        renderbook(books, elList)
    }

    if (elSelect2.value !== 'all') {
        books.forEach((el) => {
            if (el.language == elSelect2.value) {
                languageDom.push(el)
            }
        })
    }

    renderbook(languageDom, elList)


});
// ======================================


let sortPage = new Set();

books.forEach((elpage) => {
    let setpage = elpage.pages
    sortPage.add(setpage)
});

sortPage.forEach((elpage) => {
    let pagesoption = document.createElement('option')
    pagesoption.textContent = elpage

    elSelect3.appendChild(pagesoption)
})

let pagesDom = [];
elSelect3.addEventListener('change', () => {
    pagesDom = [];

    elList.innerHTML = ' '

    if (elSelect3.value == 'all') {
        renderbook(books, elList)
    }
    if (elSelect3.value !== 'all') {
        books.forEach((elDom) => {
            if (elDom.pages == elSelect3.value) {
                pagesDom.push(elDom)
            }


        })
    }

    renderbook(pagesDom, elList)
})


let titlesort = new Set();

books.forEach((el) => {
    let titleset = el.title
    titlesort.add(titleset)
});

titlesort.forEach((element) => {
    let titile = document.createElement('option');
    titile.textContent = element;
    elSelect4.appendChild(titile)


});

let titleDom = [];
elSelect4.addEventListener('change',()=>{
    titleDom = [];
elList.innerHTML = ' ';
if(elSelect4.value == 'all'){
    renderbook(books,elList)
}

if(elSelect4.value !== 'all'){
    books.forEach((elDom)=>{
        if(elDom.title == elSelect4.value){
            titleDom.push(elDom)
        }
    })
}

renderbook(titleDom,elList)

})













