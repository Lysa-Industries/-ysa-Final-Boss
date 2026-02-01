export const relativeClausesData = {
  "Gramatyka": {
    "Zdania Przydawkowe (Relative Clauses)": {
      theory: {
        affirmative: "Zdania te opisują rzeczownik występujący wcześniej. Dzielą się na definiujące (bez przecinków) i niedefiniujące (z przecinkami).",
        exceptions: [
          "1. DEFINING RELATIVE CLAUSES (Definiujące): \n" +
          "• Niezbędne do zrozumienia, o kogo/co chodzi. Nie używamy przecinków. \n" +
          "• WHO (ludzie), WHICH (rzeczy), THAT (ludzie i rzeczy), WHOSE (przynależność), WHOM (ludzie w f. dopełnienia). \n" +
          "• Omission: Możemy pominąć 'who/which/that', jeśli po nich następuje podmiot (The book [that] I read).",

          "2. NON-DEFINING RELATIVE CLAUSES (Niedefiniujące): \n" +
          "• Dodają tylko dodatkową informację. Muszą być oddzielone przecinkami. \n" +
          "• NIE używamy 'that' zamiast 'who/which'. \n" +
          "• Nie można pomijać zaimka względnego. \n" +
          "• Przykład: My brother, who lives in London, is a doctor.",

          "3. WHOSE: \n" +
          "Zastępuje formy dzierżawcze (his, her, their). Stosujemy do ludzi i czasem do organizacji/państw (The company whose profits fell...).",

          "4. WHOM: \n" +
          "Bardzo formalne. Używane po przyimkach (To whom it may concern) lub gdy zaimek jest dopełnieniem (The man whom I saw).",

          "5. PREPOSITIONS (Przyimki): \n" +
          "• Styl potoczny: Przyimek na końcu (The girl I talked TO). \n" +
          "• Styl formalny: Przyimek przed zaimkiem (The girl TO WHOM I talked). \n" +
          "• Uwaga: Jeśli przyimek jest na początku, używamy tylko WHICH lub WHOM (nigdy that/who).",

          "6. WHERE, WHEN, WHY: \n" +
          "Zastępują 'preposition + which' (The house where I live = The house in which I live)."
        ],
        examples: [
          "The man who sold me the car is a crook. (Definiujące)",
          "Paris, which is the capital of France, is beautiful. (Niedefiniujące)",
          "Is that the woman whose cat I found?",
          "The hotel at which we stayed was expensive. (Formalne)"
        ]
      },
      choiceTasks: [
        { id: 2401, question: "The man ___ lives next door is a pilot.", options: ["who", "which", "whose", "whom"], correct: "who" },
        { id: 2402, question: "My car, ___ I bought last month, has already broken down.", options: ["that", "which", "who", "whose"], correct: "which" },
        { id: 2403, question: "That's the girl ___ brother is a famous actor.", options: ["who", "whose", "whom", "that"], correct: "whose" },
        { id: 2404, question: "The hotel ___ we stayed was very clean.", options: ["where", "which", "that", "when"], correct: "where" },
        { id: 2405, question: "The people ___ I work with are very friendly.", options: ["who", "which", "whose", "whom"], correct: "who" },
        { id: 2406, question: "I don't know the reason ___ he left so early.", options: ["when", "where", "why", "which"], correct: "why" },
        { id: 2407, question: "The man to ___ you were speaking is my boss.", options: ["who", "whom", "that", "which"], correct: "whom" },
        { id: 2408, question: "1999 was the year ___ I was born.", options: ["when", "which", "where", "that"], correct: "when" },
        { id: 2409, question: "The book ___ you lent me is fascinating.", options: ["who", "whose", "whom", "that"], correct: "that" },
        { id: 2410, question: "My sister, ___ lives in New York, is visiting us.", options: ["who", "that", "which", "whom"], correct: "who" },
        { id: 2411, question: "He is the person ___ I saw at the cinema.", options: ["whose", "whom", "which", "where"], correct: "whom" },
        { id: 2412, question: "The house ___ roof was damaged has been repaired.", options: ["which", "whose", "that", "where"], correct: "whose" },
        { id: 2413, question: "She told me a secret, ___ surprised me a lot.", options: ["what", "which", "that", "who"], correct: "which" },
        { id: 2414, question: "The chair ___ I am sitting on is broken.", options: ["who", "which", "whose", "where"], correct: "which" },
        { id: 2415, question: "Is this the restaurant ___ we ate last night?", options: ["where", "which", "that", "when"], correct: "where" },
        { id: 2416, question: "Everything ___ she said was true.", options: ["which", "that", "what", "who"], correct: "that" },
        { id: 2417, question: "The town ___ I grew up is very small.", options: ["where", "which", "that", "in that"], correct: "where" },
        { id: 2418, question: "They are the people ___ house was stolen.", options: ["whose", "who", "which", "whom"], correct: "whose" },
        { id: 2419, question: "I met a woman ___ can speak six languages.", options: ["which", "who", "whose", "whom"], correct: "who" },
        { id: 2420, question: "The office ___ I work is in the city centre.", options: ["where", "which", "that", "when"], correct: "where" }
      ],
      textTasks: [
        { id: 2451, text: "The man is my uncle. He is wearing a hat. -> The man ____ is wearing a hat is my uncle.", answer: "who" },
        { id: 2452, text: "That's the house. I was born there. -> That's the house ____ I was born.", answer: "where" },
        { id: 2453, text: "I know a girl. Her father is a pilot. -> I know a girl ____ father is a pilot.", answer: "whose" },
        { id: 2454, text: "The car is very old. He bought it yesterday. -> The car ____ he bought yesterday is very old.", answer: "which" },
        { id: 2455, text: "The woman is a doctor. You met her yesterday. -> The woman ____ you met yesterday is a doctor.", answer: "whom" },
        { id: 2456, text: "I saw a film. It was very scary. -> The film ____ I saw was very scary.", answer: "which" },
        { id: 2457, text: "London is a big city. It is the capital of the UK. -> London, ____ is the capital of the UK, is a big city.", answer: "which" },
        { id: 2458, text: "That's the boy. I told you about him. (Potocznie) -> That's the boy I told you ____.", answer: "about" },
        { id: 2459, text: "This is the book. I was looking for it. -> This is the book ____ I was looking for.", answer: "which" },
        { id: 2460, text: "The day was sunny. We went for a picnic then. -> The day ____ we went for a picnic was sunny.", answer: "when" },
        { id: 2461, text: "A widow is a woman ____ husband is dead.", answer: "whose" },
        { id: 2462, text: "The knife ____ we use to cut bread is blunt.", answer: "which" },
        { id: 2463, text: "The person to ____ I am writing is a manager.", answer: "whom" },
        { id: 2464, text: "I lost the pen ____ you gave me.", answer: "that" },
        { id: 2465, text: "He lives in a village ____ there are no shops.", answer: "where" },
        { id: 2466, text: "My friend, ____ is a lawyer, lives in Paris.", answer: "who" },
        { id: 2467, text: "The students ____ I teach are very smart.", answer: "whom" },
        { id: 2468, text: "This is the reason ____ I am late.", answer: "why" },
        { id: 2469, text: "The flowers ____ grow in my garden are beautiful.", answer: "which" },
        { id: 2470, text: "The man ____ car was stolen is at the police station.", answer: "whose" }
      ]
    }
  }
};