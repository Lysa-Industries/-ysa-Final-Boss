export const possessivesData = {
  "Gramatyka": {
    "Formy Dzierżawcze (Possessives)": {
      theory: {
        affirmative: "Dzierżawczość wyrażamy przez apostrof ('s), przymiotniki dzierżawcze (my, your) lub zaimki (mine, yours).",
        exceptions: [
          "1. SAXON GENITIVE ('s): \n" +
          "• Liczba pojedyncza: 's (the boy's ball). \n" +
          "• Liczba mnoga regularna (-s): tylko apostrof (the boys' ball). \n" +
          "• Liczba mnoga nieregularna: 's (the children's room). \n" +
          "• Imiona kończące się na -s: obie formy poprawne (James's car lub James' car).",

          "2. RZECZOWNIKI ZŁOŻONE I LISTY: \n" +
          "• Wspólna własność: Tom and Jerry's house (jeden dom). \n" +
          "• Oddzielna własność: Tom's and Jerry's houses (dwa różne domy). \n" +
          "• Ostatni wyraz: The mother-in-law's hat.",

          "3. PRZYMIOTNIKI VS ZAIMKI DZIERŻAWCZE: \n" +
          "• Adjectives (my, your, his, her, its, our, their) + rzeczownik. \n" +
          "• Pronouns (mine, yours, his, hers, ours, theirs) – występują samodzielnie (This car is mine).",

          "4. DOUBLE GENITIVE (Podwójny dopełniacz): \n" +
          "Używamy konstrukcji 'a friend of mine / a friend of John's'. Sugeruje to, że John ma wielu przyjaciół, a to jest jeden z nich.",

          "5. 'OF' CONSTRUCTION: \n" +
          "Zazwyczaj dla przedmiotów nieożywionych (the leg of the table), choć w nowoczesnym angielskim 'the table's leg' staje się dopuszczalne.",

          "6. CZAS I ODLEGŁOŚĆ: \n" +
          "W wyrażeniach czasowych zawsze używamy 's: a day's work, two weeks' holiday, yesterday's news."
        ],
        examples: [
          "It's my book. / The book is mine.",
          "We stayed at my aunt's. (skrót od aunt's house).",
          "For goodness' sake! (wyjątek fonetyczny).",
          "That old car of Peter's is always breaking down."
        ]
      },
      choiceTasks: [
        { id: 2201, question: "This is ___ car.", options: ["John's", "Johns'", "Johns", "of John"], correct: "John's" },
        { id: 2202, question: "I need to go to the ___.", options: ["chemist", "chemist's", "chemists", "of chemist"], correct: "chemist's" },
        { id: 2203, question: "Where are the ___ toys?", options: ["children's", "childrens'", "childrens", "childs"], correct: "children's" },
        { id: 2204, question: "That book isn't yours, it's ___.", options: ["my", "mine", "me", "mines"], correct: "mine" },
        { id: 2205, question: "We had a ___ holiday.", options: ["two-week", "two weeks'", "two week's", "two weeks"], correct: "two weeks'" },
        { id: 2206, question: "I'm a friend of ___.", options: ["hers", "her", "she", "hers'"], correct: "hers" },
        { id: 2207, question: "___ bikes are in the garage.", options: ["Tom and Mary's", "Tom's and Mary's", "Toms and Marys", "Toms' and Marys'"], correct: "Tom and Mary's" },
        { id: 2208, question: "The ___ room is upstairs.", options: ["babies", "baby's", "babies'", "of baby"], correct: "babies'" },
        { id: 2209, question: "___ news was very shocking.", options: ["Yesterday's", "Yesterdays", "Yesterday", "Of yesterday"], correct: "Yesterday's" },
        { id: 2210, question: "It was my ___ advice.", options: ["father-in-law's", "father's-in-law", "father-in-laws'", "father-in-laws"], correct: "father-in-law's" },
        { id: 2211, question: "That's a nice car. Is it ___?", options: ["their", "theirs", "them", "their's"], correct: "theirs" },
        { id: 2212, question: "___ cat is always sleeping on my porch.", options: ["The neighbor's", "The neighbors", "Of neighbor", "Neighbor"], correct: "The neighbor's" },
        { id: 2213, question: "I love ___ style.", options: ["Bess's", "Bess'", "Bess", "A & B are correct"], correct: "A & B are correct" },
        { id: 2214, question: "The ___ daughter is a doctor.", options: ["Smiths'", "Smith's", "Smiths", "of Smiths"], correct: "Smiths'" },
        { id: 2215, question: "I've lost ___ keys.", options: ["mine", "my", "me", "my's"], correct: "my" },
        { id: 2216, question: "Whose bag is this? It's ___.", options: ["ours", "our", "us", "ours'"], correct: "ours" },
        { id: 2217, question: "The ___ cover is torn.", options: ["book's", "books'", "book", "of the book"], correct: "book's" },
        { id: 2218, question: "Give me ___ laptop.", options: ["your", "yours", "you", "yours'"], correct: "your" },
        { id: 2219, question: "We meet at ___ every Friday.", options: ["St. Paul", "St. Paul's", "St. Pauls", "of St. Paul"], correct: "St. Paul's" },
        { id: 2220, question: "This is a photo ___.", options: ["of my sister", "of my sister's", "my sister's", "A & B are correct"], correct: "A & B are correct" }
        // ... (W aplikacji dodaj kolejne 30 pytań testowych)
      ],
      textTasks: [
        { id: 2251, text: "The room of the children -> The ____ room.", answer: "children's" },
        { id: 2252, text: "The house of Tom and Mary (they live together) -> ____ house.", answer: "Tom and Mary's" },
        { id: 2253, text: "A holiday that lasts three weeks -> A ____ holiday.", answer: "three weeks'" },
        { id: 2254, text: "The coat belonging to me -> It is ____ coat.", answer: "my" },
        { id: 2255, text: "The car belonging to him -> The car is ____.", answer: "his" },
        { id: 2256, text: "The tools of the workmen -> The ____ tools.", answer: "workmen's" },
        { id: 2257, text: "The sister of my friend (Double Genitive) -> A sister of ____.", answer: "my friend's" },
        { id: 2258, text: "The newspaper from today -> ____ newspaper.", answer: "Today's" },
        { id: 2259, text: "The keys belonging to you -> These keys are ____.", answer: "yours" },
        { id: 2260, text: "The handle of the door -> The ____ handle.", answer: "door's" },
        { id: 2261, text: "The toys of the boys -> The ____ toys.", answer: "boys'" },
        { id: 2262, text: "The office of the boss -> The ____ office.", answer: "boss's" },
        { id: 2263, text: "The wedding of Kate and William -> ____ wedding.", answer: "Kate and William's" },
        { id: 2264, text: "For the sake of God -> For ____ sake!", answer: "God's" },
        { id: 2265, text: "The cat of my cousins -> My ____ cat.", answer: "cousins'" },
        { id: 2266, text: "The success of the company -> The ____ success.", answer: "company's" },
        { id: 2267, text: "A friend of me -> A friend of ____.", answer: "mine" },
        { id: 2268, text: "The bags of the ladies -> The ____ bags.", answer: "ladies'" },
        { id: 2269, text: "The palace of the Queen -> The ____ palace.", answer: "Queen's" },
        { id: 2270, text: "The journey of ten miles -> A ____ journey.", answer: "ten miles'" }
        // ... (W aplikacji dodaj kolejne 30 zadań tekstowych)
      ]
    }
  }
};