export const tenses = {
  "Teraźniejsze": {
    "Present Simple": {
      theory: {
        affirmative: "Podmiot + czasownik (w 3 os. l. poj. końcówka -s/-es).",
        negations: "Podmiot + don't / doesn't + bezokolicznik.",
        questions: "Do / Does + podmiot + bezokolicznik?",
        exceptions: [
          "1. Czasownik 'be' -> am/is/are.",
          "2. Czasowniki statyczne (know, love, hate) nie występują w formie -ing.",
          "3. Słowa klucze: always, usually, often, sometimes, never, every day."
        ],
        examples: ["She lives in London.", "Water boils at 100°C.", "I usually drink tea."]
      },
      choiceTasks: [
      { id: 1, question: "My brother ___ football every Tuesday.", options: ["play", "plays", "playing", "is play"], correct: "plays" },
      { id: 2, question: "Where ___ your parents live?", options: ["do", "does", "are", "is"], correct: "do" },
      { id: 3, question: "Water ___ at 100 degrees Celsius.", options: ["boil", "boils", "is boiling", "boiled"], correct: "boils" },
      { id: 4, question: "The bank ___ at 4:00 PM on Fridays.", options: ["close", "is closing", "closes", "closed"], correct: "closes" },
      { id: 5, question: "I ___ usually drink coffee in the evening.", options: ["am not", "don't", "doesn't", "not"], correct: "don't" },
      { id: 6, question: "___ she know about the meeting?", options: ["Do", "Is", "Does", "Has"], correct: "Does" },
      { id: 7, question: "We ___ from Poland.", options: ["comes", "coming", "come", "are come"], correct: "come" },
      { id: 8, question: "Birds ___ south for the winter.", options: ["fly", "flies", "flying", "are fly"], correct: "fly" },
      { id: 9, question: "He ___ never late for work.", options: ["does", "is", "has", "was"], correct: "is" },
      { id: 10, question: "How often ___ you go to the gym?", options: ["do", "does", "are", "have"], correct: "do" }
    ],
    textTasks: [
      { id: 11, text: "She ____ (not / drink) coffee.", answer: "doesn't drink" },
      { id: 12, text: "The train ____ (leave) at 8:00 PM.", answer: "leaves" },
      { id: 13, text: "My father ____ (work) in a big office.", answer: "works" },
      { id: 14, text: "The sun ____ (rise) in the east.", answer: "rises" },
      { id: 15, text: "____ (you / speak) English?", answer: "Do you speak" },
      { id: 16, text: "I ____ (not / like) mushrooms.", answer: "don't like" },
      { id: 17, text: "Cats ____ (catch) mice.", answer: "catch" },
      { id: 18, text: "My sister ____ (study) every night.", answer: "studies" },
      { id: 19, text: "Plants ____ (need) water to grow.", answer: "need" },
      { id: 20, text: "It ____ (rain) a lot in autumn.", answer: "rains" }
    ]
    },
    "Present Continuous": {
      theory: {
        affirmative: "Podmiot + am/is/are + czasownik-ing.",
        negations: "Podmiot + am/is/are + not + czasownik-ing.",
        questions: "Am/Is/Are + podmiot + czasownik-ing?",
        exceptions: [
          "1. Końcówka -e znika: make -> making.",
          "2. Podwajanie spółgłoski: run -> running, sit -> sitting.",
          "3. Słowa klucze: now, at the moment, currently, Look!, Listen!."
        ],
        examples: ["I am studying now.", "Look! It is raining.", "They are constantly complaining."]
      },
      choiceTasks: [
      { id: 21, question: "Listen! Somebody ___.", options: ["sings", "is singing", "are singing", "sing"], correct: "is singing" },
      { id: 22, question: "I can't talk now, I ___.", options: ["cook", "cooking", "am cooking", "is cooking"], correct: "am cooking" },
      { id: 23, question: "Why ___ you wearing a coat? It's warm.", options: ["do", "is", "are", "have"], correct: "are" },
      { id: 24, question: "Look! The bus ___.", options: ["comes", "is coming", "coming", "has come"], correct: "is coming" },
      { id: 25, question: "They ___ for the exam currently.", options: ["study", "studying", "are studying", "is studying"], correct: "are studying" },
      { id: 26, question: "She ___ always losing her keys!", options: ["does", "is", "has", "are"], correct: "is" },
      { id: 27, question: "What ___ you doing tonight?", options: ["do", "is", "are", "have"], correct: "are" },
      { id: 28, question: "The population ___ very fast.", options: ["grows", "is growing", "growing", "are growing"], correct: "is growing" },
      { id: 29, question: "We ___ not working this week.", options: ["do", "are", "is", "have"], correct: "are" },
      { id: 30, question: "___ it raining outside?", options: ["Does", "Is", "Are", "Has"], correct: "Is" }
    ],
    textTasks: [
      { id: 31, text: "They ____ (not / watch) TV now.", answer: "are not watching" },
      { id: 32, text: "I ____ (wait) for the bus at the moment.", answer: "am waiting" },
      { id: 33, text: "Look! The cat ____ (climb) that tree.", answer: "is climbing" },
      { id: 34, text: "What ____ (you / read) these days?", answer: "are you reading" },
      { id: 35, text: "Be quiet! The baby ____ (sleep).", answer: "is sleeping" },
      { id: 36, text: "We ____ (have) a great time at the party.", answer: "are having" },
      { id: 37, text: "He ____ (study) hard for his finals.", answer: "is studying" },
      { id: 38, text: "My parents ____ (travel) around Europe right now.", answer: "are traveling" },
      { id: 39, text: "The weather ____ (get) colder.", answer: "is getting" },
      { id: 40, text: "____ (it / snow) yet?", answer: "Is it snowing" }
    ]
    },
    "Present Perfect": {
      theory: {
        affirmative: "Podmiot + have/has + III forma (Past Participle).",
        negations: "Podmiot + haven't/hasn't + III forma.",
        questions: "Have/Has + podmiot + III forma?",
        exceptions: [
          "1. 'Since' (punkt w czasie, np. since 1990).",
          "2. 'For' (okres czasu, np. for 5 years).",
          "3. Słowa klucze: already, yet, just, never, ever, so far, recently."
        ],
        examples: ["I have lost my keys.", "She has never been to Paris.", "We have lived here for years."]
      },
      choiceTasks: [
      { id: 41, question: "I ___ this movie three times.", options: ["saw", "have seen", "has seen", "am seeing"], correct: "have seen" },
      { id: 42, question: "She ___ never been to Asia.", options: ["have", "has", "is", "was"], correct: "has" },
      { id: 43, question: "We ___ lived here since 2010.", options: ["have", "has", "are", "were"], correct: "have" },
      { id: 44, question: "___ you ever eaten snails?", options: ["Did", "Have", "Has", "Do"], correct: "Have" },
      { id: 45, question: "He has ___ finished his homework.", options: ["yet", "still", "already", "ever"], correct: "already" },
      { id: 46, question: "They haven't called us ___.", options: ["already", "just", "yet", "ever"], correct: "yet" },
      { id: 47, question: "I have ___ my wallet!", options: ["lost", "lose", "losing", "losted"], correct: "lost" },
      { id: 48, question: "How many books ___ he written?", options: ["did", "has", "have", "is"], correct: "has" },
      { id: 49, question: "She has been a doctor ___ ten years.", options: ["since", "for", "during", "ago"], correct: "for" },
      { id: 50, question: "Everything is clean. I ___ just mopped the floor.", options: ["have", "has", "did", "am"], correct: "have" }
    ],
    textTasks: [
      { id: 51, text: "____ you ____ (finish) your work yet?", answer: "Have you finished" },
      { id: 52, text: "We ____ (know) each other for years.", answer: "have known" },
      { id: 53, text: "He ____ (never / be) abroad.", answer: "has never been" },
      { id: 54, text: "I ____ (lose) my glasses.", answer: "have lost" },
      { id: 55, text: "She ____ (write) five letters today.", answer: "has written" },
      { id: 56, text: "The rain ____ (stop) at last.", answer: "has stopped" },
      { id: 57, text: "____ (you / see) my keys anywhere?", answer: "Have you seen" },
      { id: 58, text: "They ____ (move) to a new house.", answer: "have moved" },
      { id: 59, text: "I ____ (not / see) him lately.", answer: "have not seen" },
      { id: 60, text: "It ____ (not / rain) for ages.", answer: "has not rained" }
    ]
    },
    "Present Perfect Continuous": {
      theory: {
        affirmative: "Podmiot + have/has + been + czasownik-ing.",
        negations: "Podmiot + haven't/hasn't + been + czasownik-ing.",
        questions: "Have/Has + podmiot + been + czasownik-ing?",
        exceptions: [
          "1. Nacisk na czynność (nie skutek).",
          "2. Słowa klucze: How long?, since, for, all day, lately."
        ],
        examples: ["I've been waiting for two hours.", "It has been raining all day."]
      },
      choiceTasks: [
      { id: 61, question: "She is tired because she ___.", options: ["has been running", "runs", "is running", "has run"], correct: "has been running" },
      { id: 62, question: "How long ___ you been waiting?", options: ["do", "are", "have", "has"], correct: "have" },
      { id: 63, question: "It ___ all morning.", options: ["rains", "is raining", "has been raining", "has rained"], correct: "has been raining" },
      { id: 64, question: "Your eyes are red. ___ you been crying?", options: ["Do", "Are", "Have", "Has"], correct: "Have" },
      { id: 65, question: "He ___ playing video games for hours.", options: ["is", "has", "has been", "was"], correct: "has been" },
      { id: 66, question: "I ___ learning English since January.", options: ["am", "have", "have been", "was"], correct: "have been" },
      { id: 67, question: "We ___ looking for a house for months.", options: ["are", "have", "have been", "were"], correct: "have been" },
      { id: 68, question: "Why is the grass wet? ___ it been raining?", options: ["Does", "Is", "Has", "Was"], correct: "Has" },
      { id: 69, question: "They ___ talking on the phone for an hour.", options: ["are", "have", "have been", "were"], correct: "have been" },
      { id: 70, question: "I'm hot because I ___ exercising.", options: ["am", "have", "have been", "was"], correct: "have been" }
    ],
    textTasks: [
      { id: 71, text: "How long ____ you ____ (study)?", answer: "have you been studying" },
      { id: 72, text: "I ____ (work) here for six months.", answer: "have been working" },
      { id: 73, text: "She ____ (bake) all morning.", answer: "has been baking" },
      { id: 74, text: "They ____ (not / listen) to me.", answer: "have not been listening" },
      { id: 75, text: "It ____ (snow) since yesterday.", answer: "has been snowing" },
      { id: 76, text: "We ____ (wait) for you for ages!", answer: "have been waiting" },
      { id: 77, text: "Why ____ (your hands / shake)?", answer: "have your hands been shaking" },
      { id: 78, text: "He ____ (garden) since 8 AM.", answer: "has been gardening" },
      { id: 79, text: "I ____ (think) about moving to Italy.", answer: "have been thinking" },
      { id: 80, text: "The dog ____ (bark) for ten minutes.", answer: "has been barking" }
    ]
    }
  },
  "Przeszłe": {
    "Past Simple": {
      theory: {
        affirmative: "Podmiot + II forma czasownika (końcówka -ed lub nieregularne).",
        negations: "Podmiot + didn't + bezokolicznik.",
        questions: "Did + podmiot + bezokolicznik?",
        exceptions: [
          "1. Czasownik 'to be' (was/were) nie przyjmuje 'did'.",
          "2. Słowa klucze: yesterday, ago, in 1998, last week."
        ],
        examples: ["I went to the cinema yesterday.", "She didn't call me.", "Did you see that?"]
      },
      choiceTasks: [
      { id: 101, question: "We ___ a new car last week.", options: ["buyed", "bought", "have bought", "buy"], correct: "bought" },
      { id: 102, question: "When ___ the film finish?", options: ["do", "did", "was", "has"], correct: "did" },
      { id: 103, question: "I ___ at home yesterday evening.", options: ["didn't be", "wasn't", "weren't", "am not"], correct: "wasn't" },
      { id: 104, question: "They ___ to Italy three years ago.", options: ["go", "went", "gone", "goed"], correct: "went" },
      { id: 105, question: "___ you see the news this morning?", options: ["Do", "Did", "Were", "Have"], correct: "Did" },
      { id: 106, question: "The Titanic ___ in 1912.", options: ["sink", "sank", "sunk", "is sinking"], correct: "sank" },
      { id: 107, question: "We ___ very tired after the trip.", options: ["did", "was", "were", "been"], correct: "were" },
      { id: 108, question: "Shakespeare ___ many famous plays.", options: ["write", "wrote", "written", "writed"], correct: "wrote" },
      { id: 109, question: "I ___ my homework and then went out.", options: ["did", "do", "done", "was doing"], correct: "did" },
      { id: 110, question: "How ___ your weekend?", options: ["was", "were", "did", "had"], correct: "was" }
    ],
    textTasks: [
      { id: 111, text: "I ____ (meet) my best friend in 2015.", answer: "met" },
      { id: 112, text: "We ____ (not / go) to the beach yesterday.", answer: "didn't go" },
      { id: 113, text: "____ (you / see) that flash of light?", answer: "Did you see" },
      { id: 114, text: "She ____ (leave) the room a minute ago.", answer: "left" },
      { id: 115, text: "He ____ (stop) smoking last year.", answer: "stopped" },
      { id: 116, text: "I ____ (lose) my keys on the way home.", answer: "lost" },
      { id: 117, text: "They ____ (be) very happy to see us.", answer: "were" },
      { id: 118, text: "The accident ____ (happen) at 9 PM.", answer: "happened" },
      { id: 119, text: "Who ____ (tell) you that secret?", answer: "told" },
      { id: 120, text: "We ____ (eat) at a great restaurant on Sunday.", answer: "ate" }
    ]
    },
    "Past Continuous": {
      theory: {
        affirmative: "Podmiot + was/were + czasownik-ing.",
        negations: "Podmiot + wasn't/weren't + czasownik-ing.",
        questions: "Was/Were + podmiot + czasownik-ing?",
        exceptions: [
          "1. Używany do opisywania tła wydarzeń lub dwóch czynności dziejących się naraz.",
          "2. Słowa klucze: while, when, at 5 PM yesterday, all night."
        ],
        examples: ["I was sleeping when you called.", "They were dancing while I was cooking."]
      },
      choiceTasks: [
      { id: 121, question: "What ___ you doing at 7 PM yesterday?", options: ["did", "was", "were", "are"], correct: "were" },
      { id: 122, question: "It ___ when I woke up.", options: ["rained", "was raining", "rains", "had rained"], correct: "was raining" },
      { id: 123, question: "While I ___ for the bus, I saw Tom.", options: ["waited", "was waiting", "waiting", "had waited"], correct: "was waiting" },
      { id: 124, question: "They ___ playing football all afternoon.", options: ["were", "was", "did", "have been"], correct: "were" },
      { id: 125, question: "I ___ listening, so I didn't hear you.", options: ["wasn't", "didn't", "weren't", "not"], correct: "wasn't" },
      { id: 126, question: "Was she ___ at 11:00?", options: ["sleep", "sleeping", "slept", "sleeps"], correct: "sleeping" },
      { id: 127, question: "The sun ___ and birds were singing.", options: ["shined", "was shining", "shone", "is shining"], correct: "was shining" },
      { id: 128, question: "What were they ___ about?", options: ["talk", "talking", "talked", "talks"], correct: "talking" },
      { id: 129, question: "I ___ working when the power went out.", options: ["am", "was", "did", "were"], correct: "was" },
      { id: 130, question: "Why ___ you crying when I arrived?", options: ["did", "was", "were", "are"], correct: "were" }
    ],
    textTasks: [
      { id: 131, text: "I ____ (sleep) when the phone rang.", answer: "was sleeping" },
      { id: 132, text: "They ____ (not / pay) attention during the lesson.", answer: "were not paying" },
      { id: 133, text: "What ____ (you / do) at this time yesterday?", answer: "were you doing" },
      { id: 134, text: "It ____ (snow) while we were driving.", answer: "was snowing" },
      { id: 135, text: "I ____ (read) a book all evening.", answer: "was reading" },
      { id: 136, text: "She ____ (cook) dinner when I came home.", answer: "was cooking" },
      { id: 137, text: "The kids ____ (play) in the garden.", answer: "were playing" },
      { id: 138, text: "We ____ (have) breakfast at 8:00.", answer: "were having" },
      { id: 139, text: "He ____ (not / drive) fast when it happened.", answer: "wasn't driving" },
      { id: 140, text: "____ (the sun / shine) when you left?", answer: "Was the sun shining" }
    ]
    },
    "Past Perfect": {
      theory: {
        affirmative: "Podmiot + had + III forma (Past Participle).",
        negations: "Podmiot + hadn't + III forma.",
        questions: "Had + podmiot + III forma?",
        exceptions: [
          "1. Wyraża czynność, która stała się przed innym momentem w przeszłości.",
          "2. Słowa klucze: before, after, by the time, as soon as."
        ],
        examples: ["The film had started before we arrived.", "I had never seen him before."]
      },
      choiceTasks: [
      { id: 141, question: "By the time he came, she ___.", options: ["left", "has left", "had left", "was leaving"], correct: "had left" },
      { id: 142, question: "I went to bed after I ___ my work.", options: ["finished", "was finishing", "had finished", "finish"], correct: "had finished" },
      { id: 143, question: "He told me he ___ his wallet.", options: ["lost", "has lost", "had lost", "was losing"], correct: "had lost" },
      { id: 144, question: "The film ___ before we arrived.", options: ["already started", "had already started", "has started", "was starting"], correct: "had already started" },
      { id: 145, question: "Had you ___ him before the party?", options: ["meet", "met", "meeting", "meeted"], correct: "met" },
      { id: 146, question: "She ___ never seen a ghost until then.", options: ["has", "had", "was", "did"], correct: "had" },
      { id: 147, question: "I couldn't pay because I ___ my card at home.", options: ["left", "had left", "have left", "was leaving"], correct: "had left" },
      { id: 148, question: "Everything was white because it ___.", options: ["snowed", "was snowing", "had snowed", "has snowed"], correct: "had snowed" },
      { id: 149, question: "___ she finished the report by 5 PM?", options: ["Did", "Was", "Had", "Has"], correct: "Had" },
      { id: 150, question: "We realized we ___ our way.", options: ["lost", "were losing", "had lost", "lose"], correct: "had lost" }
    ],
    textTasks: [
      { id: 151, text: "I ____ (never / see) such a beautiful sunset before.", answer: "had never seen" },
      { id: 152, text: "The bus ____ (already / go) when I got to the stop.", answer: "had already gone" },
      { id: 153, text: "He ____ (not / eat) anything all day.", answer: "had not eaten" },
      { id: 154, text: "____ (you / meet) her before the wedding?", answer: "Had you met" },
      { id: 155, text: "I was sure I ____ (hear) that song before.", answer: "had heard" },
      { id: 156, text: "They ____ (live) in Paris before moving here.", answer: "had lived" },
      { id: 157, text: "She said she ____ (buy) the tickets.", answer: "had bought" },
      { id: 158, text: "The plants died because I ____ (forget) to water them.", answer: "had forgotten" },
      { id: 159, text: "By the time I was 20, I ____ (visit) ten countries.", answer: "had visited" },
      { id: 160, text: "The house was empty because they ____ (move) out.", answer: "had moved" }
    ]
    },
    "Past Perfect Continuous": {
      theory: {
        affirmative: "Podmiot + had + been + czasownik-ing.",
        negations: "Podmiot + hadn't + been + czasownik-ing.",
        questions: "Had + podmiot + been + czasownik-ing?",
        exceptions: [
          "1. Podkreśla trwanie czynności przed innym zdarzeniem w przeszłości.",
          "2. Często pokazuje przyczynę stanu w przeszłości (np. He was tired because...)."
        ],
        examples: ["They had been playing for an hour before it rained."]
      },
     choiceTasks: [
      { id: 161, question: "He was out of breath because he ___.", options: ["had been running", "ran", "is running", "has been running"], correct: "had been running" },
      { id: 162, question: "We ___ for an hour when the bus arrived.", options: ["were waiting", "had been waiting", "waited", "have been waiting"], correct: "had been waiting" },
      { id: 163, question: "How long ___ she been working there?", options: ["had", "was", "did", "has"], correct: "had" },
      { id: 164, question: "Everything was wet because it ___.", options: ["rained", "was raining", "had been raining", "has rained"], correct: "had been raining" },
      { id: 165, question: "He ___ all day, so he was very tired.", options: ["had been driving", "was driving", "drove", "has driven"], correct: "had been driving" },
      { id: 166, question: "I ___ for a job for months before I found one.", options: ["looked", "had been looking", "was looking", "have looked"], correct: "had been looking" },
      { id: 167, question: "The ground was covered in snow; it ___.", options: ["snowed", "was snowing", "had been snowing", "had snowed"], correct: "had been snowing" },
      { id: 168, question: "They ___ for hours when they finally agreed.", options: ["argued", "were arguing", "had been arguing", "have argued"], correct: "had been arguing" },
      { id: 169, question: "She ___ English for years before she moved to London.", options: ["studied", "was studying", "had been studying", "has been studying"], correct: "had been studying" },
      { id: 170, question: "Why were you tired? ___ you been working out?", options: ["Had", "Were", "Did", "Have"], correct: "Had" }
    ],
    textTasks: [
      { id: 171, text: "I ____ (wait) for two hours when she called.", answer: "had been waiting" },
      { id: 172, text: "They ____ (play) football for a while before it rained.", answer: "had been playing" },
      { id: 173, text: "He ____ (smoke) for years before he quit.", answer: "had been smoking" },
      { id: 174, text: "____ (you / walk) long before you got lost?", answer: "Had you been walking" },
      { id: 175, text: "We ____ (not / expect) a visit from them.", answer: "had not been expecting" },
      { id: 176, text: "She ____ (learn) Japanese for a year before she went to Tokyo.", answer: "had been learning" },
      { id: 177, text: "The engine ____ (make) a strange noise for days.", answer: "had been making" },
      { id: 178, text: "How long ____ (they / date) before they got engaged?", answer: "had they been dating" },
      { id: 179, text: "I ____ (stare) at the screen all day.", answer: "had been staring" },
      { id: 180, text: "The children ____ (cry) for a long time.", answer: "had been crying" }
    ]
    }
  },
  "Przyszłe": {
    "Future Simple": {
      theory: {
        affirmative: "Podmiot + will + bezokolicznik.",
        negations: "Podmiot + won't + bezokolicznik.",
        questions: "Will + podmiot + bezokolicznik?",
        exceptions: [
          "1. Używany do decyzji spontanicznych, obietnic i przewidywań bez dowodów.",
          "2. Słowa klucze: tomorrow, next year, in the future, I think, I hope."
        ],
        examples: ["I will help you.", "I hope it will be sunny."]
      },
     choiceTasks: [
      { id: 201, question: "I think it ___ rain tomorrow.", options: ["will", "is going to", "is", "shall"], correct: "will" },
      { id: 202, question: "I'm tired. I ___ go to bed now.", options: ["will", "am going to", "will be", "go"], correct: "will" },
      { id: 203, question: "___ you help me with this bag?", options: ["Will", "Are", "Do", "Have"], correct: "Will" },
      { id: 204, question: "I promise I ___ tell anyone.", options: ["don't", "won't", "am not", "not"], correct: "won't" },
      { id: 205, question: "Wait! I ___ you a lift.", options: ["give", "am giving", "will give", "gave"], correct: "will give" },
      { id: 206, question: "Scientists ___ find a cure for cancer one day.", options: ["will", "are", "do", "will be"], correct: "will" },
      { id: 207, question: "I ___ probably be home late tonight.", options: ["am", "will", "do", "have"], correct: "will" },
      { id: 208, question: "___ she be at the meeting tomorrow?", options: ["Is", "Does", "Will", "Has"], correct: "Will" },
      { id: 209, question: "I don't think he ___ pass the exam.", options: ["won't", "will", "is", "does"], correct: "will" },
      { id: 210, question: "Maybe we ___ go to Italy next summer.", options: ["will", "are", "do", "going to"], correct: "will" }
    ],
    textTasks: [
      { id: 211, text: "I ____ (call) you when I arrive.", answer: "will call" },
      { id: 212, text: "I'm sure you ____ (enjoy) the film.", answer: "will enjoy" },
      { id: 213, text: "Wait! I ____ (open) the door for you.", answer: "will open" },
      { id: 214, text: "The world ____ (be) different in 2050.", answer: "will be" },
      { id: 215, text: "I ____ (not / forget) what you said.", answer: "won't forget" },
      { id: 216, text: "____ (you / be) at home this evening?", answer: "Will you be" },
      { id: 217, text: "I think they ____ (win) the match.", answer: "will win" },
      { id: 218, text: "It ____ (not / cost) much to fix the car.", answer: "won't cost" },
      { id: 219, text: "I ____ (pay) for the tickets, I promise.", answer: "will pay" },
      { id: 220, text: "Who ____ (be) the next president?", answer: "will be" }
    ]
    },
    "Future Continuous": {
      theory: {
        affirmative: "Podmiot + will be + czasownik-ing.",
        negations: "Podmiot + won't be + czasownik-ing.",
        questions: "Will + podmiot + be + czasownik-ing?",
        exceptions: [
          "1. Czynność w toku w konkretnym punkcie przyszłości.",
          "2. Słowa klucze: this time tomorrow, in two hours."
        ],
        examples: ["This time tomorrow, I will be flying to NYC."]
      },
    choiceTasks: [
      { id: 221, question: "This time tomorrow, I ___ on a beach.", options: ["will lie", "will be lying", "am lying", "will have lied"], correct: "will be lying" },
      { id: 222, question: "Don't phone me at 8:00. I ___ dinner.", options: ["will have", "will be having", "have", "am having"], correct: "will be having" },
      { id: 223, question: "___ you be using the car this evening?", options: ["Will", "Are", "Do", "Shall"], correct: "Will" },
      { id: 224, question: "In ten years, most people ___ electric cars.", options: ["will drive", "will be driving", "are driving", "drive"], correct: "will be driving" },
      { id: 225, question: "I ___ working all day Saturday.", options: ["will", "will be", "am", "be"], correct: "will be" },
      { id: 226, question: "What ___ you be doing at midnight?", options: ["will", "shall", "do", "are"], correct: "will" },
      { id: 227, question: "They ___ not be joining us for lunch.", options: ["will", "do", "are", "won't"], correct: "will" },
      { id: 228, question: "He ___ sleeping when you get home.", options: ["will be", "is", "will", "be"], correct: "will be" },
      { id: 229, question: "We ___ staying at the Hilton hotel.", options: ["are", "will be", "will", "be"], correct: "will be" },
      { id: 230, question: "At 3 PM tomorrow, I ___ an exam.", options: ["will take", "will be taking", "am taking", "take"], correct: "will be taking" }
    ],
    textTasks: [
      { id: 231, text: "I ____ (study) at the library this afternoon.", answer: "will be studying" },
      { id: 232, text: "They ____ (not / work) next week. They're on holiday.", answer: "won't be working" },
      { id: 233, text: "What ____ (you / do) at this time tomorrow?", answer: "will you be doing" },
      { id: 234, text: "She ____ (wait) for you at the airport.", answer: "will be waiting" },
      { id: 235, text: "We ____ (fly) over the Atlantic in two hours.", answer: "will be flying" },
      { id: 236, text: "I ____ (see) James at the office tomorrow.", answer: "will be seeing" },
      { id: 237, text: "He ____ (not / use) his laptop later.", answer: "won't be using" },
      { id: 238, text: "____ (you / watch) the game tonight?", answer: "Will you be watching" },
      { id: 239, text: "This time next week, we ____ (ski) in the Alps.", answer: "will be skiing" },
      { id: 240, text: "I ____ (think) of you when I'm on my trip.", answer: "will be thinking" }
    ]
    },
    "Future Perfect": {
      theory: {
        affirmative: "Podmiot + will have + III forma.",
        negations: "Podmiot + won't have + III forma.",
        questions: "Will + podmiot + have + III forma?",
        exceptions: [
          "1. Czynność, która zakończy się przed konkretną chwilą w przyszłości.",
          "2. Słowa klucze: by, by the time, by then, by next month."
        ],
        examples: ["By 2026, I will have finished my studies."]
      },
      choiceTasks: [
      { id: 241, question: "By 2030, I ___ my own company.", options: ["will start", "will be starting", "will have started", "have started"], correct: "will have started" },
      { id: 242, question: "Will you ___ the report by Monday?", options: ["finish", "be finishing", "have finished", "finished"], correct: "have finished" },
      { id: 243, question: "By the time you arrive, I ___ dinner.", options: ["will cook", "will have cooked", "am cooking", "cook"], correct: "will have cooked" },
      { id: 244, question: "They ___ the bridge by next summer.", options: ["will build", "will have built", "build", "have built"], correct: "will have built" },
      { id: 245, question: "I ___ my exams by the end of June.", options: ["will have taken", "will take", "am taking", "will be taking"], correct: "will have taken" },
      { id: 246, question: "The film ___ by 10:00 PM.", options: ["will end", "will have ended", "is ending", "ends"], correct: "will have ended" },
      { id: 247, question: "___ you have lived here for a year by then?", options: ["Will", "Do", "Are", "Have"], correct: "Will" },
      { id: 248, question: "I won't ___ it by tomorrow morning.", options: ["finish", "have finished", "be finishing", "finished"], correct: "have finished" },
      { id: 249, question: "By next week, we ___ all our money.", options: ["will spend", "will have spent", "spend", "will be spending"], correct: "will have spent" },
      { id: 250, question: "The snow ___ by the time we go out.", options: ["will melt", "will have melted", "melts", "is melting"], correct: "will have melted" }
    ],
    textTasks: [
      { id: 251, text: "By 5 PM, I ____ (finish) my work.", answer: "will have finished" },
      { id: 252, text: "They ____ (not / arrive) by the time we leave.", answer: "won't have arrived" },
      { id: 253, text: "____ (you / do) your homework by dinner?", answer: "Will you have done" },
      { id: 254, text: "By next year, I ____ (learn) 1000 new words.", answer: "will have learned" },
      { id: 255, text: "The store ____ (close) by then.", answer: "will have closed" },
      { id: 256, text: "We ____ (spend) all our savings by August.", answer: "will have spent" },
      { id: 257, text: "He ____ (get) his degree by next July.", answer: "will have gotten" },
      { id: 258, text: "By the time she wakes up, I ____ (leave).", answer: "will have left" },
      { id: 259, text: "I ____ (not / see) him by the end of the week.", answer: "won't have seen" },
      { id: 260, text: "____ (the builder / finish) the roof by Friday?", answer: "Will the builder have finished" }
    ]
    },
    "Future Perfect Continuous": {
      theory: {
        affirmative: "Podmiot + will have been + czasownik-ing.",
        negations: "Podmiot + won't have been + czasownik-ing.",
        questions: "Will + podmiot + have been + czasownik-ing?",
        exceptions: [
          "1. Podkreślenie czasu trwania czynności do konkretnego punktu w przyszłości.",
          "2. Zawsze zawiera określenie czasu (np. for 10 years)."
        ],
        examples: ["Next month, they will have been living here for 10 years."]
      },
      choiceTasks: [
      { id: 261, question: "In June, I ___ here for five years.", options: ["will have been living", "will be living", "will have lived", "live"], correct: "will have been living" },
      { id: 262, question: "How long ___ you have been working there?", options: ["will", "do", "are", "shall"], correct: "will" },
      { id: 263, question: "By midnight, he ___ for ten hours.", options: ["will sleep", "will be sleeping", "will have been sleeping", "is sleeping"], correct: "will have been sleeping" },
      { id: 264, question: "They ___ for over an hour by the time the bus comes.", options: ["will wait", "will have been waiting", "will be waiting", "wait"], correct: "will have been waiting" },
      { id: 265, question: "I ___ studying for three hours by 10 PM.", options: ["will have been", "will be", "am", "have been"], correct: "will have been" },
      { id: 266, question: "By next month, she ___ learning French for a year.", options: ["will have been", "is", "will be", "has been"], correct: "will have been" },
      { id: 267, question: "Will they ___ for long by the time we arrive?", options: ["be waiting", "have been waiting", "wait", "be wait"], correct: "have been waiting" },
      { id: 268, question: "We ___ using this car for 15 years next July.", options: ["will have been", "will be", "are", "have been"], correct: "will have been" },
      { id: 269, question: "I won't ___ for very long by then.", options: ["be working", "have been working", "work", "have worked"], correct: "have been working" },
      { id: 270, question: "By the end of the day, I ___ for 20 miles.", options: ["will have been walking", "will be walking", "walk", "have walked"], correct: "will have been walking" }
    ],
    textTasks: [
      { id: 271, text: "By 2027, I ____ (work) here for ten years.", answer: "will have been working" },
      { id: 272, text: "How long ____ (you / wait) by the time the train arrives?", answer: "will you have been waiting" },
      { id: 273, text: "She ____ (study) for five hours by midnight.", answer: "will have been studying" },
      { id: 274, text: "By next year, they ____ (live) in Poland for a decade.", answer: "will have been living" },
      { id: 275, text: "I ____ (not / drive) for long by then.", answer: "won't have been driving" },
      { id: 276, text: "He ____ (sleep) for 12 hours by the time we wake him.", answer: "will have been sleeping" },
      { id: 277, text: "By the end of the month, we ____ (save) money for a year.", answer: "will have been saving" },
      { id: 278, text: "____ (you / exercise) for long before the class ends?", answer: "Will you have been exercising" },
      { id: 279, text: "I ____ (cook) all day by the time the guests arrive.", answer: "will have been cooking" },
      { id: 280, text: "They ____ (play) together for 20 years by next season.", answer: "will have been playing" }
    ]
    },
    
  },
  "Zadania Mieszane":{
    "Zadania Czas Przeszły": {
       theory: {
        affirmative: "Przeszłych",
        negations: "",
        questions: "",
        exceptions: [
          ""
        ],
        examples: [""]
      },
choiceTasks: [
    { id: 301, question: "I ___ along the street when I ___ an old friend.", options: ["walked / met", "was walking / met", "had walked / met", "was walking / was meeting"], correct: "was walking / met" },
    { id: 302, question: "The teacher was angry because I ___ my homework.", options: ["didn't do", "wasn't doing", "hadn't done", "haven't done"], correct: "hadn't done" },
    { id: 303, question: "By the time we ___ the station, the train ___.", options: ["reached / left", "reached / had left", "had reached / left", "were reaching / left"], correct: "reached / had left" },
    { id: 304, question: "I ___ for two hours when she finally called.", options: ["waited", "was waiting", "had been waiting", "have been waiting"], correct: "had been waiting" },
    { id: 305, question: "While they ___ dinner, the lights ___ out.", options: ["had / went", "were having / went", "had had / were going", "were having / had gone"], correct: "were having / went" },
    { id: 306, question: "He ___ exhausted because he ___ all day.", options: ["was / had been working", "had been / worked", "was / was working", "was / has been working"], correct: "was / had been working" },
    { id: 307, question: "I ___ a book when the doorbell ___.", options: ["read / rang", "was reading / rang", "had read / rang", "was reading / was ringing"], correct: "was reading / rang" },
    { id: 308, question: "She ___ to London after she ___ her studies.", options: ["moved / finished", "moved / had finished", "had moved / finished", "was moving / finished"], correct: "moved / had finished" },
    { id: 309, question: "How long ___ you ___ for me before I arrived?", options: ["did / wait", "were / waiting", "had / been waiting", "have / been waiting"], correct: "had / been waiting" },
    { id: 310, question: "Everything ___ white because it ___ all night.", options: ["was / had been snowing", "had been / snowed", "was / was snowing", "is / snowed"], correct: "was / had been snowing" },
    { id: 311, question: "We ___ at the party when the music ___.", options: ["danced / stopped", "were dancing / stopped", "had danced / stopped", "were dancing / was stopping"], correct: "were dancing / stopped" },
    { id: 312, question: "I ___ him before, so I ___ who he was.", options: ["saw / knew", "had seen / knew", "was seeing / had known", "have seen / knew"], correct: "had seen / knew" },
    { id: 313, question: "The children ___ when I ___ home.", options: ["slept / got", "were sleeping / got", "had slept / got", "were sleeping / was getting"], correct: "were sleeping / got" },
    { id: 314, question: "I ___ a lot of money on a car that ___ down a week later.", options: ["spent / broke", "had spent / broke", "was spending / broke", "spent / had broken"], correct: "spent / broke" },
    { id: 315, question: "They ___ for 10 years before they ___ married.", options: ["dated / got", "were dating / got", "had been dating / got", "had dated / got"], correct: "had been dating / got" },
    { id: 316, question: "Who ___ the window while I ___ out?", options: ["broke / was", "was breaking / was", "had broken / am", "broke / had been"], correct: "broke / was" },
    { id: 317, question: "I ___ very tired because I ___ since 5 AM.", options: ["was / had been driving", "was / drove", "had been / was driving", "was / have been driving"], correct: "was / had been driving" },
    { id: 318, question: "After he ___ the letter, he ___ it.", options: ["wrote / posted", "had written / posted", "was writing / posted", "wrote / had posted"], correct: "had written / posted" },
    { id: 319, question: "What ___ you ___ when you heard the news?", options: ["did / do", "were / doing", "had / done", "are / doing"], correct: "were / doing" },
    { id: 320, question: "The house ___ empty when we ___.", options: ["was / arrived", "had been / arrived", "was / had arrived", "is / arrived"], correct: "was / arrived" },
    { id: 321, question: "I ___ my phone, so I ___ call you.", options: ["lost / couldn't", "had lost / couldn't", "was losing / can't", "lost / hadn't"], correct: "had lost / couldn't" },
    { id: 322, question: "She ___ for an hour before the taxi ___.", options: ["waited / came", "was waiting / came", "had been waiting / came", "had waited / was coming"], correct: "had been waiting / came" },
    { id: 323, question: "When the film ___ , I realized I ___ it before.", options: ["started / saw", "started / had seen", "was starting / saw", "had started / seen"], correct: "started / had seen" },
    { id: 324, question: "It ___ to rain while they ___ in the park.", options: ["started / walked", "started / were walking", "was starting / walked", "had started / walked"], correct: "started / were walking" },
    { id: 325, question: "He ___ the race because he ___ hard for months.", options: ["won / had been training", "was winning / trained", "won / was training", "had won / trains"], correct: "won / had been training" }
  ],textTasks: [
    { id: 326, text: "I ____ (not / see) him for years before we met in Paris.", answer: "had not seen" },
    { id: 327, text: "What ____ (you / do) when the accident happened?", answer: "were you doing" },
    { id: 328, text: "The grass was yellow because it ____ (not / rain) for weeks.", answer: "had not rained" },
    { id: 329, text: "He ____ (study) for the test all night, so he fell asleep.", answer: "had been studying" },
    { id: 330, text: "As soon as she ____ (finish) her meal, she paid the bill.", answer: "had finished" },
    { id: 331, text: "While I ____ (cook), my sister ____ (set) the table.", answer: "was cooking / was setting" },
    { id: 332, text: "I ____ (lose) my key, so I couldn't get in.", answer: "had lost" },
    { id: 333, text: "They ____ (drive) for five hours before they found a hotel.", answer: "had been driving" },
    { id: 334, text: "When I ____ (open) the curtains, I ____ (see) it was snowing.", answer: "opened / saw" },
    { id: 335, text: "He ____ (already / leave) when I arrived.", answer: "had already left" },
    { id: 336, text: "I ____ (wait) at the station for 40 minutes before the train came.", answer: "had been waiting" },
    { id: 337, text: "We ____ (not / know) that she ____ (buy) a new house.", answer: "didn't know / had bought" },
    { id: 338, text: "The phone ____ (ring) three times before I answered it.", answer: "had rung" },
    { id: 339, text: "I ____ (walk) down the street when it ____ (start) to pour.", answer: "was walking / started" },
    { id: 340, text: "She ____ (be) exhausted because she ____ (work) since dawn.", answer: "was / had been working" },
    { id: 341, text: "They ____ (not / tell) me they ____ (be) there before.", answer: "didn't tell / had been" },
    { id: 342, text: "The fire ____ (burn) for hours before the firemen arrived.", answer: "had been burning" },
    { id: 343, text: "I ____ (not / recognize) him because he ____ (change) so much.", answer: "didn't recognize / had changed" },
    { id: 344, text: "While the kids ____ (play), the parents ____ (talk).", answer: "were playing / were talking" },
    { id: 345, text: "How long ____ (you / live) there before you moved?", answer: "had you been living" },
    { id: 346, text: "He ____ (put) on his coat and ____ (go) out.", answer: "put / went" },
    { id: 347, text: "I ____ (think) about her when she ____ (call) me.", answer: "was thinking / called" },
    { id: 348, text: "The car ____ (make) a strange noise for days before it stopped.", answer: "had been making" },
    { id: 349, text: "By the time I ____ (get) to the office, the meeting ____ (start).", answer: "got / had started" },
    { id: 350, text: "I ____ (never / see) such a big dog before.", answer: "had never seen" }
  ]
            },

"Zadania Czas Przyszły": {
         theory: {
        affirmative: "Przyszłych",
        negations: "",
        questions: "",
        exceptions: [
          ""
        ],
        examples: [""]
      },
   choiceTasks: [
    { id: 401, question: "Don't phone me at 8:00. I ___ dinner then.", options: ["will have", "will be having", "will have had", "have"], correct: "will be having" },
    { id: 402, question: "By the end of the month, I ___ my project.", options: ["finish", "will be finishing", "will have finished", "will have been finishing"], correct: "will have finished" },
    { id: 403, question: "In June, we ___ here for ten years.", options: ["will live", "will be living", "will have been living", "are living"], correct: "will have been living" },
    { id: 404, question: "I'm sure they ___ the game tonight.", options: ["win", "will win", "will be winning", "will have won"], correct: "will win" },
    { id: 405, question: "This time next week, I ___ on a plane.", options: ["will sit", "will be sitting", "will have sat", "sit"], correct: "will be sitting" },
    { id: 406, question: "By 2027, the city ___ a new stadium.", options: ["builds", "will be building", "will have built", "will have been building"], correct: "will have built" },
    { id: 407, question: "How long ___ you ___ English by the time you graduate?", options: ["will / learn", "will / be learning", "will / have been learning", "will / have learned"], correct: "will / have been learning" },
    { id: 408, question: "I ___ probably ___ at home later.", options: ["will / be", "am / being", "will / have been", "be"], correct: "will / be" },
    { id: 409, question: "Wait! I ___ you with those bags.", options: ["will help", "will be helping", "help", "am helping"], correct: "will help" },
    { id: 410, question: "At midnight, most people ___.", options: ["will sleep", "will be sleeping", "will have slept", "sleep"], correct: "will be sleeping" },
    { id: 411, question: "By tomorrow morning, it ___ raining.", options: ["will stop", "will be stopping", "will have stopped", "stops"], correct: "will have stopped" },
    { id: 412, question: "In two hours, I ___ for six hours straight.", options: ["will work", "will be working", "will have been working", "work"], correct: "will have been working" },
    { id: 413, question: "I think people ___ on Mars in the future.", options: ["will live", "will be living", "will have lived", "are living"], correct: "will live" },
    { id: 414, question: "By the time you get home, I ___ the house.", options: ["will clean", "will have cleaned", "will be cleaning", "clean"], correct: "will have cleaned" },
    { id: 415, question: "___ you ___ the car this evening?", options: ["Will / use", "Will / be using", "Will / have used", "Do / use"], correct: "Will / be using" },
    { id: 416, question: "I ___ to bed early tonight.", options: ["will go", "am going", "will have gone", "go"], correct: "will go" },
    { id: 417, question: "By next summer, she ___ her degree.", options: ["will finish", "will have finished", "will be finishing", "finishes"], correct: "will have finished" },
    { id: 418, question: "They ___ for three hours by the time we arrive.", options: ["will walk", "will be walking", "will have been walking", "walk"], correct: "will have been walking" },
    { id: 419, question: "I promise I ___ tell anyone your secret.", options: ["don't", "won't", "won't be", "am not"], correct: "won't" },
    { id: 420, question: "This time tomorrow, we ___ our exams.", options: ["will take", "will be taking", "will have taken", "take"], correct: "will be taking" },
    { id: 421, question: "By 10 PM, I ___ for the whole day.", options: ["will study", "will be studying", "will have been studying", "study"], correct: "will have been studying" },
    { id: 422, question: "Do you think it ___ snow tomorrow?", options: ["will", "is", "will be", "shall"], correct: "will" },
    { id: 423, question: "In five years, he ___ his own business.", options: ["will run", "will have been running", "runs", "will be running"], correct: "will be running" },
    { id: 424, question: "By midnight, the party ___.", options: ["will end", "will have ended", "is ending", "ends"], correct: "will have ended" },
    { id: 425, question: "We ___ across Europe this time next month.", options: ["will travel", "will be travelling", "will have travelled", "travel"], correct: "will be travelling" }
  ],
  textTasks: [
    { id: 426, text: "I ____ (finish) this book by the end of the week.", answer: "will have finished" },
    { id: 427, text: "Don't come at 2:00. I ____ (have) a meeting then.", answer: "will be having" },
    { id: 428, text: "By next year, they ____ (live) here for 20 years.", answer: "will have been living" },
    { id: 429, text: "I ____ (help) you with the laundry later.", answer: "will help" },
    { id: 430, text: "At this time tomorrow, she ____ (fly) to Paris.", answer: "will be flying" },
    { id: 431, text: "By the time we arrive, the film ____ (start).", answer: "will have started" },
    { id: 432, text: "In two hours, I ____ (wait) for you for half a day!", answer: "will have been waiting" },
    { id: 433, text: "I hope the weather ____ (be) better tomorrow.", answer: "will be" },
    { id: 434, text: "This time next week, we ____ (ski) in the Alps.", answer: "will be skiing" },
    { id: 435, text: "By Monday, I ____ (read) all the documents.", answer: "will have read" },
    { id: 436, text: "How long ____ (you / work) here by Christmas?", answer: "will you have been working" },
    { id: 437, text: "I ____ (not / be) at home tonight.", answer: "won't be" },
    { id: 438, text: "They ____ (play) tennis at 10 AM tomorrow.", answer: "will be playing" },
    { id: 439, text: "By the end of the day, I ____ (write) ten letters.", answer: "will have written" },
    { id: 440, text: "Next month, I ____ (study) English for five years.", answer: "will have been studying" },
    { id: 441, text: "I'm sure you ____ (find) a good job.", answer: "will find" },
    { id: 442, text: "Wait! I ____ (get) you a glass of water.", answer: "will get" },
    { id: 443, text: "By the time he retires, he ____ (work) for 40 years.", answer: "will have been working" },
    { id: 444, text: "At 8 PM tonight, I ____ (watch) the news.", answer: "will be watching" },
    { id: 445, text: "The snow ____ (melt) by the end of March.", answer: "will have melted" },
    { id: 446, text: "We ____ (not / use) the office next week.", answer: "won't be using" },
    { id: 447, text: "By 2030, technology ____ (change) even more.", answer: "will have changed" },
    { id: 448, text: "How many books ____ (you / write) by next year?", answer: "will you have written" },
    { id: 449, text: "I ____ (stay) with my cousins this summer.", answer: "will be staying" },
    { id: 450, text: "By midnight, it ____ (rain) for 12 hours.", answer: "will have been raining" }
  ]      },
  "Zadania Czas Terazniejszy": {
         theory: {
        affirmative: " Terazniejszych",
        negations: "",
        questions: "",
        exceptions: [
          ""
        ],
        examples: [""]
      },
  choiceTasks: [
    { id: 601, question: "I ___ usually ___ tea, but today I ___ coffee.", options: ["drink / am drinking", "am drinking / drink", "drink / drink", "am drinking / am drinking"], correct: "drink / am drinking" },
    { id: 602, question: "I ___ my phone! ___ you seen it anywhere?", options: ["lose / Do", "am losing / Are", "have lost / Have", "have been losing / Has"], correct: "have lost / Have" },
    { id: 603, question: "Why ___ you ___? Is something wrong?", options: ["do / cry", "are / crying", "have / cried", "have / been crying"], correct: "are / crying" },
    { id: 604, question: "She ___ in London for five years and she loves it.", options: ["lives", "is living", "has lived", "has been living"], correct: "has lived" },
    { id: 605, question: "The train ___ at 8:30 every morning.", options: ["leave", "is leaving", "leaves", "has left"], correct: "leaves" },
    { id: 606, question: "I ___ for you for over an hour! Where have you been?", options: ["wait", "am waiting", "have been waiting", "have waited"], correct: "have been waiting" },
    { id: 607, question: "___ you ___ that man over there? He looks familiar.", options: ["Do / know", "Are / knowing", "Have / known", "Have / been knowing"], correct: "Do / know" },
    { id: 608, question: "Look! The sun ___.", options: ["rises", "is rising", "has risen", "has been rising"], correct: "is rising" },
    { id: 609, question: "I ___ my homework already. Can I go out?", options: ["do", "am doing", "have done", "have been doing"], correct: "have done" },
    { id: 610, question: "He ___ always ___ his keys. It's so annoying!", options: ["does / lose", "is / losing", "has / lost", "is / lose"], correct: "is / losing" },
    { id: 611, question: "How long ___ you ___ English?", options: ["do / learn", "are / learning", "have / been learning", "have / learned"], correct: "have / been learning" },
    { id: 612, question: "Water ___ at 100 degrees Celsius.", options: ["boil", "boils", "is boiling", "has boiled"], correct: "boils" },
    { id: 613, question: "I ___ never ___ to Paris.", options: ["am / being", "have / been", "do / be", "have / being"], correct: "have / been" },
    { id: 614, question: "Be quiet! The baby ___.", options: ["sleeps", "is sleeping", "has slept", "has been sleeping"], correct: "is sleeping" },
    { id: 615, question: "They ___ for a new house for months, but they haven't found one.", options: ["look", "are looking", "have been looking", "have looked"], correct: "have been looking" },
    { id: 616, question: "___ it ___ outside right now?", options: ["Does / rain", "Is / raining", "Has / rained", "Has / been raining"], correct: "Is / raining" },
    { id: 617, question: "My father ___ in a bank.", options: ["work", "works", "is working", "has worked"], correct: "works" },
    { id: 618, question: "I ___ this book. It's really interesting.", options: ["read", "am reading", "have been reading", "reads"], correct: "am reading" },
    { id: 619, question: "Everything is clean because I ___ the house all morning.", options: ["clean", "am cleaning", "have been cleaning", "cleans"], correct: "have been cleaning" },
    { id: 620, question: "___ you ever ___ sushi?", options: ["Do / eat", "Are / eating", "Have / eaten", "Have / been eating"], correct: "Have / eaten" },
    { id: 621, question: "He ___ to the gym three times a week.", options: ["go", "goes", "is going", "has gone"], correct: "goes" },
    { id: 622, question: "Your hands are dirty. What ___ you ___?", options: ["do / do", "are / doing", "have / been doing", "have / done"], correct: "have / been doing" },
    { id: 623, question: "I ___ what you mean, but I don't agree.", options: ["understand", "am understanding", "have understood", "understands"], correct: "understand" },
    { id: 624, question: "She ___ lunch at the moment.", options: ["has", "is having", "have", "has had"], correct: "is having" },
    { id: 625, question: "We ___ each other since high school.", options: ["know", "are knowing", "have known", "have been knowing"], correct: "have known" }
  ],
  textTasks: [
    { id: 626, text: "I ____ (not / see) my brother lately.", answer: "have not seen" },
    { id: 627, text: "Wait a second, I ____ (think) about it.", answer: "am thinking" },
    { id: 628, text: "She ____ (write) three emails since 9 AM.", answer: "has written" },
    { id: 629, text: "The Earth ____ (go) around the Sun.", answer: "goes" },
    { id: 630, text: "How long ____ (it / rain)? The garden is flooded.", answer: "has it been raining" },
    { id: 631, text: "I ____ (usually / get up) at 7 o'clock.", answer: "usually get up" },
    { id: 632, text: "Listen! Somebody ____ (play) the piano.", answer: "is playing" },
    { id: 633, text: "____ (you / ever / meet) a famous person?", answer: "Have you ever met" },
    { id: 634, text: "I ____ (work) on this project for two weeks now.", answer: "have been working" },
    { id: 635, text: "He ____ (not / like) vegetables.", answer: "doesn't like" },
    { id: 636, text: "Why ____ (you / look) at me like that?", answer: "are you looking" },
    { id: 637, text: "I ____ (finish) my coffee, now I'm ready to go.", answer: "have finished" },
    { id: 638, text: "They ____ (talk) on the phone for hours.", answer: "have been talking" },
    { id: 639, text: "The moon ____ (shine) at night.", answer: "shines" },
    { id: 640, text: "I ____ (not / feel) well today.", answer: "am not feeling" },
    { id: 641, text: "____ (you / hear) that noise? It's very loud.", answer: "Do you hear" },
    { id: 642, text: "We ____ (already / buy) the tickets.", answer: "have already bought" },
    { id: 643, text: "She ____ (study) hard because she has an exam tomorrow.", answer: "is studying" },
    { id: 644, text: "I ____ (lose) my umbrella, so I'm wet.", answer: "have lost" },
    { id: 645, text: "How many times ____ (you / visit) London?", answer: "have you visited" },
    { id: 646, text: "It ____ (smell) delicious in the kitchen.", answer: "smells" },
    { id: 647, text: "They ____ (live) here for ten years.", answer: "have lived" },
    { id: 648, text: "I ____ (wait) for the bus right now.", answer: "am waiting" },
    { id: 649, text: "____ (she / play) tennis every weekend?", answer: "Does she play" },
    { id: 650, text: "I ____ (read) 50 pages of this book so far.", answer: "have read" }
  ]     },
   "Wszystkie czasy (czaszka)": {
         theory: {
        affirmative: "Wszystko",
        negations: "",
        questions: "",
        exceptions: [
          ""
        ],
        examples: [""]
      },
  choiceTasks: [
    { id: 701, question: "By the time you arrive tomorrow, I ___ the house for three hours.", options: ["will clean", "will be cleaning", "will have been cleaning", "have cleaned"], correct: "will have been cleaning" },
    { id: 702, question: "I ___ a very strange dream last night.", options: ["have", "had", "was having", "have had"], correct: "had" },
    { id: 703, question: "Look at those clouds! It ___ rain.", options: ["will", "is going to", "rains", "has rained"], correct: "is going to" },
    { id: 704, question: "I ___ English since I was six years old.", options: ["learn", "am learning", "have been learning", "learned"], correct: "have been learning" },
    { id: 705, question: "If I ___ him tomorrow, I will tell him the news.", options: ["see", "will see", "am seeing", "saw"], correct: "see" },
    { id: 706, question: "We ___ for two hours when the car broke down.", options: ["were driving", "had been driving", "drove", "have been driving"], correct: "had been driving" },
    { id: 707, question: "The Earth ___ around the Sun.", options: ["go", "is going", "goes", "has gone"], correct: "goes" },
    { id: 708, question: "I ___ never ___ to Japan in my life.", options: ["was / being", "have / been", "did / go", "had / been"], correct: "have / been" },
    { id: 709, question: "This time next year, I ___ my own company.", options: ["run", "will be running", "will have run", "am running"], correct: "will be running" },
    { id: 710, question: "When I got home, I realized I ___ my wallet at work.", options: ["left", "was leaving", "had left", "have left"], correct: "had left" },
    { id: 711, question: "What ___ you ___ at 10 PM last night?", options: ["did / do", "were / doing", "had / done", "have / been doing"], correct: "were / doing" },
    { id: 712, question: "By 2030, scientists ___ a cure for this disease.", options: ["will find", "will be finding", "will have found", "find"], correct: "will have found" },
    { id: 713, question: "I can't go out because I ___ my homework yet.", options: ["didn't finish", "haven't finished", "don't finish", "hadn't finished"], correct: "haven't finished" },
    { id: 714, question: "Listen! The neighbors ___ again.", options: ["argue", "are arguing", "have argued", "argued"], correct: "are arguing" },
    { id: 715, question: "They ___ for over an hour by the time the bus finally came.", options: ["waited", "were waiting", "had been waiting", "have been waiting"], correct: "had been waiting" },
    { id: 716, question: "I ___ to the gym every Monday.", options: ["go", "am going", "have gone", "will go"], correct: "go" },
    { id: 717, question: "By the end of this week, I ___ here for exactly a month.", options: ["will work", "will be working", "will have worked", "have worked"], correct: "will have worked" },
    { id: 718, question: "While I ___ the dishes, I ___ a glass.", options: ["washed / broke", "was washing / broke", "washed / was breaking", "had washed / broke"], correct: "was washing / broke" },
    { id: 719, question: "I'm tired. I think I ___ to sleep.", options: ["will go", "go", "am going", "have gone"], correct: "will go" },
    { id: 720, question: "She ___ as a nurse for twenty years before she retired.", options: ["worked", "was working", "had worked", "has worked"], correct: "had worked" },
    { id: 721, question: "___ you ever ___ a celebrity?", options: ["Did / meet", "Have / met", "Do / meet", "Were / meeting"], correct: "Have / met" },
    { id: 722, question: "It ___ when I left the house this morning.", options: ["rains", "was raining", "rained", "has been raining"], correct: "was raining" },
    { id: 723, question: "I ___ this book by tomorrow evening.", options: ["will read", "will be reading", "will have read", "read"], correct: "will have read" },
    { id: 724, question: "He ___ always ___ about his boss! It's so tiring.", options: ["is / complaining", "does / complain", "has / complained", "complains"], correct: "is / complaining" },
    { id: 725, question: "The film ___ at 8:00 PM tonight.", options: ["is starting", "starts", "will have started", "started"], correct: "starts" }
  ],
  textTasks: [
    { id: 726, text: "I ____ (not / see) him since we graduated.", answer: "have not seen" },
    { id: 727, text: "When I ____ (arrive) at the party, everyone ____ (already / leave).", answer: "arrived / had already left" },
    { id: 728, text: "By next month, I ____ (live) in this city for ten years.", answer: "will have been living" },
    { id: 729, text: "____ (you / watch) TV when I called you?", answer: "Were you watching" },
    { id: 730, text: "The sun ____ (set) in the west.", answer: "sets" },
    { id: 731, text: "I ____ (work) on this computer for five hours and my eyes hurt.", answer: "have been working" },
    { id: 732, text: "We ____ (not / go) on holiday last year.", answer: "didn't go" },
    { id: 733, text: "I ____ (finish) my report by 5 o'clock tomorrow.", answer: "will have finished" },
    { id: 734, text: "Look! The cat ____ (chase) a bird.", answer: "is chasing" },
    { id: 735, text: "I ____ (wait) for the train when I ____ (see) the accident.", answer: "was waiting / saw" },
    { id: 736, text: "They ____ (never / be) to a rock concert before.", answer: "have never been" },
    { id: 737, text: "Next week at this time, I ____ (sunbathe) in Spain.", answer: "will be sunbathing" },
    { id: 738, text: "He ____ (study) for three hours before he took a break.", answer: "had been studying" },
    { id: 739, text: "____ (you / speak) to him yet?", answer: "Have you spoken" },
    { id: 740, text: "I promise I ____ (not / tell) anyone what you said.", answer: "won't tell" },
    { id: 741, text: "Water ____ (boil) at 100 degrees.", answer: "boils" },
    { id: 742, text: "I ____ (lose) my keys yesterday.", answer: "lost" },
    { id: 743, text: "By the time we ____ (get) there, the store ____ (close).", answer: "got / will have closed" },
    { id: 744, text: "She ____ (be) a teacher for fifteen years now.", answer: "has been" },
    { id: 745, text: "While they ____ (play) cards, the phone ____ (ring).", answer: "were playing / rang" },
    { id: 746, text: "I ____ (read) that book three times already.", answer: "have read" },
    { id: 747, text: "He ____ (drive) for hours when he realized he was lost.", answer: "had been driving" },
    { id: 748, text: "____ (you / often / go) to the cinema?", answer: "Do you often go" },
    { id: 749, text: "I ____ (buy) a new car next year.", answer: "will buy" },
    { id: 750, text: "It ____ (snow) for two days without stopping.", answer: "has been snowing" }
  ]     }
  }
  
};