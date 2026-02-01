export const inversionAndEmphasisData = {
  "Gramatyka": {
    "Inwersja i Emfaza (Emphasis)": {
      theory: {
        affirmative: "Emfaza służy do uwydatnienia konkretnej części zdania. Inwersja polega na postawieniu czasownika posiłkowego przed podmiotem.",
        exceptions: [
          "1. INWERSJA PO PRZYSŁÓWKACH PRZECZĄCYCH: Po słowach: Never, Rarely, Seldom, Hardly, Scarcely, Barely, Little. \n" + 
          "Struktura: Przysłówek + operator (do/does/did/have/can) + podmiot + czasownik. \n" +
          "Przykład: Never have I seen such beauty.",

          "2. WYRAŻENIA Z 'ONLY' I 'NOT': Only then, Only later, Only when..., Not until..., Not only... but also. \n" +
          "Uwaga: W 'Only when' i 'Not until' inwersja następuje w drugiej części zdania! \n" +
          "Przykład: Not until I saw him did I believe it.",

          "3. WYRAŻENIA Z 'NO': Under no circumstances, In no way, On no account, At no time. \n" +
          "Przykład: Under no circumstances should you open this door.",

          "4. INWERSJA W WARUNKACH: Zamiast 'if'. \n" +
          "• Type 1: Should you need help... (If you should need...) \n" +
          "• Type 2: Were I you... (If I were you...) \n" +
          "• Type 3: Had I known... (If I had known...)",

          "5. CLEFT SENTENCES (Zdania rozszczepione): \n" +
          "• IT IS/WAS... THAT: It was John who broke the vase (to Jan, nie kto inny). \n" +
          "• WHAT-CLAUSE: What I need is a coffee (To, czego potrzebuję, to kawa).",

          "6. EMPHATIC 'DO': Używamy do/does/did w zdaniach twierdzących dla wzmocnienia. \n" +
          "Przykład: I DO love you! (Naprawdę cię kocham!).",

          "7. KONSTRUKCJE Z 'THE PROBLEM/THING IS': The thing is that we have no money."
        ],
        examples: [
          "Rarely does he go out. (Rzadko kiedy wychodzi).",
          "Hardly had I entered when the phone rang. (Ledwie wszedłem, gdy zadzwonił telefon).",
          "What he did was (to) resign. (To, co zrobił, to złożył rezygnację).",
          "Little did she know about the surprise. (Niewiele wiedziała o niespodziance)."
        ]
      },
      choiceTasks: [
        // --- INWERSJA NEGATYWNA ---
        { id: 2101, question: "Never ___ such a boring film.", options: ["I have seen", "have I seen", "I saw", "did I saw"], correct: "have I seen" },
        { id: 2102, question: "Rarely ___ to the gym these days.", options: ["does he go", "he goes", "is he going", "he does go"], correct: "does he go" },
        { id: 2103, question: "Hardly ___ started the presentation when the lights went out.", options: ["I had", "had I", "did I", "I did"], correct: "had I" },
        { id: 2104, question: "Little ___ that the police were watching him.", options: ["he knew", "did he know", "had he known", "he did know"], correct: "did he know" },
        { id: 2105, question: "Under no circumstances ___ you tell him.", options: ["you should", "should you", "you must", "mustn't you"], correct: "should you" },
        { id: 2106, question: "Not only ___ late, but he also forgot his notes.", options: ["he was", "was he", "is he", "he is"], correct: "was he" },
        { id: 2107, question: "Only when the music stopped ___ that something was wrong.", options: ["I realized", "did I realize", "had I realized", "I did realize"], correct: "did I realize" },
        { id: 2108, question: "On no account ___ this button.", options: ["you must touch", "must you touch", "touch you", "you should touch"], correct: "must you touch" },
        { id: 2109, question: "Seldom ___ such a beautiful sunset.", options: ["we see", "do we see", "are we seeing", "we do see"], correct: "do we see" },
        { id: 2110, question: "No sooner ___ the house than it started to rain.", options: ["had I left", "I had left", "did I leave", "I left"], correct: "had I left" },
        
        // --- EMFAZA I CLEFT SENTENCES ---
        { id: 2111, question: "It was my brother ___ told me the news.", options: ["which", "who", "whom", "what"], correct: "who" },
        { id: 2112, question: "___ I need is a long holiday.", options: ["That", "What", "Which", "The thing"], correct: "What" },
        { id: 2113, question: "I ___ want to help you, but I'm busy.", options: ["do", "did", "does", "am"], correct: "do" },
        { id: 2114, question: "The ___ is that we don't have enough time.", options: ["problem", "what", "it", "thing"], correct: "problem" },
        { id: 2115, question: "It was in London ___ they first met.", options: ["which", "where", "that", "when"], correct: "that" },
        { id: 2116, question: "___ I love about summer is the long days.", options: ["It", "What", "The thing", "That"], correct: "What" },
        { id: 2117, question: "He ___ tell me he was sorry, I remember it.", options: ["did", "do", "does", "was"], correct: "did" },
        { id: 2118, question: "Only then ___ the importance of his words.", options: ["I understood", "did I understand", "had I understood", "I did understand"], correct: "did I understand" },
        { id: 2119, question: "Scarcely ___ started my lunch when the phone rang.", options: ["I had", "had I", "did I", "I did"], correct: "had I" },
        { id: 2120, question: "___ you need is a good night's sleep.", options: ["That", "It", "What", "Which"], correct: "What" },
        // ... (W aplikacji dodaj kolejne 30 pytań testowych)
      ],
      textTasks: [
        { id: 2151, text: "I have never seen such a mess. -> Never ____ such a mess.", answer: "have I seen" },
        { id: 2152, text: "He rardely visits us. -> Rarely ____ us.", answer: "does he visit" },
        { id: 2153, text: "You must not open this box on any account. -> On no account ____ this box.", answer: "must you open" },
        { id: 2154, text: "I didn't know that he was ill. -> Little ____ that he was ill.", answer: "did I know" },
        { id: 2155, text: "She didn't only sing, she also danced. -> Not only ____, but she also danced.", answer: "did she sing" },
        { id: 2156, text: "If you should see him, call me. -> ____ you see him, call me.", answer: "Should" },
        { id: 2157, text: "I had just sat down when the doorbell rang. -> Hardly ____ down when the doorbell rang.", answer: "had I sat" },
        { id: 2158, text: "He understood the truth only later. -> Only later ____ the truth.", answer: "did he understand" },
        { id: 2159, text: "If I were you, I would leave. -> ____ I you, I would leave.", answer: "Were" },
        { id: 2160, text: "I need a drink. (What...) -> What ____ a drink.", answer: "I need is" },
        { id: 2161, text: "Mary broke the window. (It was...) -> It was Mary ____ the window.", answer: "that broke" },
        { id: 2162, text: "I like her personality. (What...) -> What ____ her personality.", answer: "I like is" },
        { id: 2163, text: "You shouldn't go out in this weather. -> Under no circumstances ____ out in this weather.", answer: "should you go" },
        { id: 2164, text: "If he had known, he wouldn't have come. -> ____ he known, he wouldn't have come.", answer: "Had" },
        { id: 2165, text: "I realized my mistake only when I got home. -> Only when I got home ____ my mistake.", answer: "did I realize" },
        { id: 2166, text: "They don't often travel abroad. -> Seldom ____ abroad.", answer: "do they travel" },
        { id: 2167, text: "I really want to go! -> I ____ want to go!", answer: "do" },
        { id: 2168, text: "He didn't realize he'd lost his wallet until he reached the shop. -> Not until he reached the shop ____ he'd lost his wallet.", answer: "did he realize" },
        { id: 2169, text: "The noise is the problem. -> The ____ is the noise.", answer: "problem" },
        { id: 2170, text: "I've never been so insulted. -> Never ____ so insulted.", answer: "have I been" },
        { id: 2171, text: "He said nothing. -> Not a word ____.", answer: "did he say" },
        { id: 2172, text: "If you need more info, let me know. -> ____ you need more info, let me know.", answer: "Should" },
        { id: 2173, text: "We can only solve this problem by working together. -> Only by working together ____ this problem.", answer: "can we solve" },
        { id: 2174, text: "I hate the cold weather. (What...) -> What ____ the cold weather.", answer: "I hate is" },
        { id: 2175, text: "He didn't suspect anything. -> Little ____ anything.", answer: "did he suspect" }
        // ... (W aplikacji dodaj kolejne 25 zadań tekstowych)
      ]
    }
  }
};