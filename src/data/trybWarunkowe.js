export const conditionalsData = {
  "Gramatyka": {
    "Zdania Warunkowe (Conditionals)": {
      theory: {
        affirmative: "Zdania warunkowe składają się z części z 'if' (warunek) oraz części głównej (skutek). Kolejność może być dowolna, ale jeśli 'if' jest na początku, stawiamy przecinek.",
        negations: "Zamiast 'if... not' możemy użyć 'unless' (chyba że).",
        questions: "Pytania tworzymy poprzez inwersję w części głównej zdania.",
        exceptions: [
          "ZERO CONDITIONAL: Prawdy ogólne, fakty naukowe. [If + Present Simple, Present Simple].",
          "FIRST CONDITIONAL: Realna możliwość w przyszłości. [If + Present Simple, Will + Verb]. Pamiętaj: po 'if' nie dajemy 'will'!",
          "SECOND CONDITIONAL: Gdybanie o teraźniejszości, sytuacje nierealne/mało prawdopodobne. [If + Past Simple, Would + Verb]. 'If I were you' - rada.",
          "THIRD CONDITIONAL: Gdybanie o przeszłości (żal, krytyka). Coś się wydarzyło i nie możemy tego zmienić. [If + Past Perfect, Would Have + V3].",
          "MIXED CONDITIONAL (Type A): Przeszły warunek ma wpływ na teraźniejszość. [If + Past Perfect, Would + Verb]. (Gdybym wtedy nie zjadł tyle, teraz czułbym się dobrze).",
          "MIXED CONDITIONAL (Type B): Stała cecha/teraźniejszy stan miał wpływ na przeszłość. [If + Past Simple, Would Have + V3]. (Gdybym był mądrzejszy, nie kupiłbym tego auta rok temu).",
          "INWERSJA (Advanced): Zamiast 'if' można użyć inwersji: 'Should you see him...' (1st), 'Were I you...' (2nd), 'Had I known...' (3rd)."
        ],
        examples: [
          "Type 0: If you heat ice, it melts.",
          "Type 1: If it rains, we will stay at home.",
          "Type 2: If I won the lottery, I would travel the world.",
          "Type 3: If I had studied harder, I would have passed the exam.",
          "Mixed: If I had taken that map, I wouldn't be lost now."
        ]
      },
     choiceTasks: [
        // --- TYPE 0 & 1 (Prawdy i Realna Przyszłość) ---
        { id: 1801, question: "If you mix red and white, you ___ pink.", options: ["get", "will get", "got", "would get"], correct: "get" },
        { id: 1802, question: "If the sun goes down, it ___ dark.", options: ["gets", "will get", "got", "is getting"], correct: "gets" },
        { id: 1803, question: "If I ___ the exam, I will celebrate.", options: ["pass", "will pass", "passed", "passes"], correct: "pass" },
        { id: 1804, question: "Unless it ___ raining, we won't go for a walk.", options: ["stops", "doesn't stop", "will stop", "stopped"], correct: "stops" },
        { id: 1805, question: "If you ___ ice, it melts.", options: ["heat", "will heat", "heated", "heats"], correct: "heat" },
        { id: 1806, question: "I'll be surprised if they ___ on time.", options: ["don't arrive", "won't arrive", "didn't arrive", "doesn't arrive"], correct: "don't arrive" },
        { id: 1807, question: "If you click this button, the computer ___ off.", options: ["turns", "will turn", "turned", "turn"], correct: "turns" },
        { id: 1808, question: "We'll go to the beach provided the weather ___ good.", options: ["is", "will be", "was", "be"], correct: "is" },
        { id: 1809, question: "If she ___ hard, she'll get the promotion.", options: ["works", "will work", "worked", "work"], correct: "works" },
        { id: 1810, question: "Water ___ if the temperature falls below 0°C.", options: ["freezes", "will freeze", "freeze", "froze"], correct: "freezes" },

        // --- TYPE 2 (Gdybanie o teraz) ---
        { id: 1811, question: "If I ___ you, I would tell her the truth.", options: ["am", "was", "were", "be"], correct: "were" },
        { id: 1812, question: "What would you do if you ___ a million dollars?", options: ["win", "won", "had won", "would win"], correct: "won" },
        { id: 1813, question: "If I ___ more time, I would take up a hobby.", options: ["have", "had", "would have", "has"], correct: "had" },
        { id: 1814, question: "He ___ much happier if he lived by the sea.", options: ["will be", "is", "would be", "was"], correct: "would be" },
        { id: 1815, question: "If we ___ a car, we could travel more often.", options: ["have", "had", "would have", "did have"], correct: "had" },
        { id: 1816, question: "I ___ that if I were you.", options: ["won't buy", "don't buy", "wouldn't buy", "didn't buy"], correct: "wouldn't buy" },
        { id: 1817, question: "If he ___ so lazy, he would have a better job.", options: ["isn't", "wasn't", "weren't", "wouldn't be"], correct: "weren't" },
        { id: 1818, question: "Where ___ you go if you could fly anywhere?", options: ["will", "do", "would", "did"], correct: "would" },
        { id: 1819, question: "If they ___ our language, communication would be easier.", options: ["speak", "spoke", "will speak", "would speak"], correct: "spoke" },
        { id: 1820, question: "I ___ to the party if I didn't have so much work.", options: ["will go", "go", "would go", "went"], correct: "would go" },

        // --- TYPE 3 (Gdybanie o przeszłości) ---
        { id: 1821, question: "If I ___ harder, I would have passed the test.", options: ["studied", "had studied", "would study", "study"], correct: "had studied" },
        { id: 1822, question: "She ___ the accident if she had been more careful.", options: ["avoided", "would avoid", "would have avoided", "had avoided"], correct: "would have avoided" },
        { id: 1823, question: "If they ___ about the meeting, they would have come.", options: ["knew", "had known", "would know", "know"], correct: "had known" },
        { id: 1824, question: "We wouldn't have got lost if we ___ a map.", options: ["took", "had taken", "would take", "take"], correct: "had taken" },
        { id: 1825, question: "If you ___ me, I would have helped you.", options: ["asked", "had asked", "would ask", "ask"], correct: "had asked" },
        { id: 1826, question: "He ___ have been late if he had caught the early bus.", options: ["wouldn't", "won't", "didn't", "hadn't"], correct: "wouldn't" },
        { id: 1827, question: "If I had seen him, I ___ him the news.", options: ["told", "would tell", "would have told", "had told"], correct: "would have told" },
        { id: 1828, question: "They ___ the game if their best player hadn't been injured.", options: ["won", "would win", "would have won", "had won"], correct: "would have won" },
        { id: 1829, question: "If we had known you were coming, we ___ a cake.", options: ["baked", "would bake", "would have baked", "had baked"], correct: "would have baked" },
        { id: 1830, question: "You wouldn't have been so tired if you ___ earlier.", options: ["went to bed", "had gone to bed", "would go to bed", "go to bed"], correct: "had gone to bed" },

        // --- MIXED CONDITIONALS (Mieszane) ---
        { id: 1831, question: "If I had won the lottery, I ___ rich now.", options: ["am", "will be", "would be", "would have been"], correct: "would be" },
        { id: 1832, question: "If he ___ more talented, he would have got the job.", options: ["is", "was", "were", "had been"], correct: "were" },
        { id: 1833, question: "If I ___ breakfast, I wouldn't be hungry now.", options: ["ate", "had eaten", "would eat", "would have eaten"], correct: "had eaten" },
        { id: 1834, question: "She ___ here now if she hadn't missed the train.", options: ["is", "will be", "would be", "would have been"], correct: "would be" },
        { id: 1835, question: "If I ___ you, I would have taken that offer yesterday.", options: ["am", "were", "had been", "would be"], correct: "were" },
        { id: 1836, question: "If they ___ earlier, they wouldn't be in this mess now.", options: ["left", "had left", "would leave", "leave"], correct: "had left" },
        { id: 1837, question: "He would be a doctor now if he ___ his studies.", options: ["finished", "had finished", "would finish", "finishes"], correct: "had finished" },
        { id: 1838, question: "If I ___ afraid of spiders, I would have picked it up.", options: ["am not", "wasn't", "weren't", "hadn't been"], correct: "weren't" },
        { id: 1839, question: "If we had taken the map, we ___ lost now.", options: ["aren't", "won't be", "wouldn't be", "wouldn't have been"], correct: "wouldn't be" },
        { id: 1840, question: "I ___ so tired today if I had slept better last night.", options: ["am not", "won't be", "wouldn't be", "wouldn't have been"], correct: "wouldn't be" },

        // --- INWERSJA I "UNLESS" ---
        { id: 1841, question: "___ you need any help, just let me know.", options: ["Should", "Were", "Had", "If only"], correct: "Should" },
        { id: 1842, question: "___ I you, I would accept the invitation.", options: ["Should", "Were", "Had", "Am"], correct: "Were" },
        { id: 1843, question: "___ he known about the trap, he wouldn't have gone.", options: ["Should", "Were", "Had", "If"], correct: "Had" },
        { id: 1844, question: "We will leave ___ you are ready.", options: ["unless", "as long as", "provided that", "if"], correct: "as long as" },
        { id: 1845, question: "I wouldn't go there ___ they paid me.", options: ["even if", "unless", "provided", "if"], correct: "even if" },
        { id: 1846, question: "___ you see her, give her my regards.", options: ["Should", "Were", "Had", "If only"], correct: "Should" },
        { id: 1847, question: "___ I more time, I would help you.", options: ["Had", "Were", "Should", "If"], correct: "Had" }, // Had I = If I had
        { id: 1848, question: "You can borrow my car ___ you drive carefully.", options: ["unless", "if not", "provided", "even if"], correct: "provided" },
        { id: 1849, question: "___ it not for your help, I would have failed.", options: ["Were", "Had", "Should", "But"], correct: "Were" },
        { id: 1850, question: "I'll be at the office ___ you need me.", options: ["in case", "unless", "provided", "if only"], correct: "in case" }
      ],
      textTasks: [
        // --- TYPE 1 ---
        { id: 1851, text: "If he ____ (come), I will tell him.", answer: "comes" },
        { id: 1852, text: "We ____ (not/go) if it rains.", answer: "won't go" },
        { id: 1853, text: "Unless she ____ (hurry), she'll miss the bus.", answer: "hurries" },
        { id: 1854, text: "I'll stay at home if I ____ (not/feel) well.", answer: "don't feel" },
        { id: 1855, text: "If they ____ (study), they will pass.", answer: "study" },
        { id: 1856, text: "If you ____ (drop) the glass, it will break.", answer: "drop" },
        { id: 1857, text: "She'll be happy if you ____ (call) her.", answer: "call" },
        { id: 1858, text: "If we ____ (not/find) a taxi, we'll walk.", answer: "don't find" },
        { id: 1859, text: "I ____ (buy) it if it's not too expensive.", answer: "will buy" },
        { id: 1860, text: "If he ____ (be) late, we'll start.", answer: "is" },

        // --- TYPE 2 ---
        { id: 1861, text: "If I ____ (be) you, I would go.", answer: "were" },
        { id: 1862, text: "If she ____ (have) a car, she would drive.", answer: "had" },
        { id: 1863, text: "I ____ (travel) more if I were rich.", answer: "would travel" },
        { id: 1864, text: "If they ____ (know) the truth, they'd be sad.", answer: "knew" },
        { id: 1865, text: "We ____ (help) you if we could.", answer: "would help" },
        { id: 1866, text: "If I ____ (not/work) so much, I'd be happy.", answer: "didn't work" },
        { id: 1867, text: "What ____ (you/do) if you lost your phone?", answer: "would you do" },
        { id: 1868, text: "If he ____ (speak) English, he'd get the job.", answer: "spoke" },
        { id: 1869, text: "I ____ (tell) you if I knew.", answer: "would tell" },
        { id: 1870, text: "If we ____ (live) in Spain, we'd be tan.", answer: "lived" },

        // --- TYPE 3 ---
        { id: 1871, text: "If I ____ (had) more time, I'd have finished.", answer: "had had" },
        { id: 1872, text: "She ____ (not/fail) if she'd studied.", answer: "wouldn't have failed" },
        { id: 1873, text: "If they ____ (invite) us, we'd have gone.", answer: "had invited" },
        { id: 1874, text: "I ____ (call) you if I'd had my phone.", answer: "would have called" },
        { id: 1875, text: "If we ____ (take) a taxi, we'd have arrived.", answer: "had taken" },
        { id: 1876, text: "He ____ (not/miss) the goal if he'd tried.", answer: "wouldn't have missed" },
        { id: 1877, text: "If you ____ (tell) me, I'd have helped.", answer: "had told" },
        { id: 1878, text: "We ____ (win) if we'd played better.", answer: "would have won" },
        { id: 1879, text: "If I ____ (seen) him, I'd have spoken.", answer: "had seen" },
        { id: 1880, text: "She ____ (be) happy if she'd stayed.", answer: "would have been" },

        // --- MIXED & TRANSFORMATIONS ---
        { id: 1881, text: "I didn't study, so I'm not a doctor now. -> If I ____ (study), I would be a doctor now.", answer: "had studied" },
        { id: 1882, text: "I'm not rich, so I didn't buy that car. -> If I ____ (be) rich, I would have bought that car.", answer: "were" },
        { id: 1883, text: "She is late because she missed the bus. -> If she hadn't missed the bus, she ____ (not/be) late now.", answer: "wouldn't be" },
        { id: 1884, text: "I'm tired because I went to bed late. -> If I hadn't gone to bed late, I ____ (not/be) tired now.", answer: "wouldn't be" },
        { id: 1885, text: "He doesn't have a map, so he got lost. -> If he ____ (have) a map, he wouldn't have got lost.", answer: "had" },
        { id: 1886, text: "I am not you, so I didn't say anything. -> If I ____ (be) you, I would have said something.", answer: "were" },
        { id: 1887, text: "They are here because I invited them. -> They ____ (not/be) here if I hadn't invited them.", answer: "wouldn't be" },
        { id: 1888, text: "He is a bad driver, so he crashed. -> If he ____ (be) a better driver, he wouldn't have crashed.", answer: "were" },
        { id: 1889, text: "I don't know him, so I didn't speak to him. -> If I knew him, I ____ (speak) to him.", answer: "would have spoken" },
        { id: 1890, text: "She isn't fast, so she lost the race. -> If she ____ (be) fast, she would have won.", answer: "were" },

        // --- REWRITING ---
        { id: 1891, text: "If you should see him, tell him. -> ____ you see him, tell him.", answer: "Should" },
        { id: 1892, text: "If I were you, I'd go. -> ____ I you, I'd go.", answer: "Were" },
        { id: 1893, text: "If he had known, he'd have come. -> ____ he known, he'd have come.", answer: "Had" },
        { id: 1894, text: "I'll go only if you go. -> I'll go ____ you go. (LONG)", answer: "as long as" },
        { id: 1895, text: "I'll go unless it rains. -> I'll go if it ____ (not) rain.", answer: "doesn't" },
        { id: 1896, text: "Without your help, I'd fail. -> If it ____ (not/be) for your help, I'd fail.", answer: "weren't" },
        { id: 1897, text: "He didn't help because he was busy. -> If he ____ (not/be) busy, he'd have helped.", answer: "hadn't been" },
        { id: 1898, text: "I'm not tall, so I can't reach it. -> If I ____ (be) taller, I could reach it.", answer: "were" },
        { id: 1899, text: "She didn't pass because she's lazy. -> If she ____ (not/be) lazy, she would have passed.", answer: "weren't" },
        { id: 1900, text: "You can stay, but you must be quiet. -> You can stay ____ (provided) you are quiet.", answer: "provided" }
      ]
    }
  }
};