export const pronounsMasterData = {
  "Gramatyka": {
    "Zaimki (Pronouns) - Kompendium": {
      theory: {
        affirmative: "Zaimki zastępują rzeczowniki, aby uniknąć powtórzeń lub określają ilość i przynależność.",
        exceptions: [
          "1. SOME, ANY, NO, EVERY: \n" +
          "• SOME: Twierdzenia (I have some water) i prośby/propozycje (Would you like some?). \n" +
          "• ANY: Pytania i przeczenia. W twierdzeniach oznacza 'jakikolwiek'. \n" +
          "• NO: Buduje przeczenie bez słowa 'not' (I have no money = I don't have any money).",

          "2. EACH vs EVERY: \n" +
          "• EACH: Skupia się na poszczególnych jednostkach (zazwyczaj z grupy dwóch lub więcej). \n" +
          "• EVERY: Skupia się na grupie jako całości (z grupy trzech lub więcej).",

          "3. ANOTHER, OTHER, OTHERS, THE OTHER(S): \n" +
          "• ANOTHER: Jeden inny, dodatkowy (liczba pojedyncza, nieokreślona). \n" +
          "• OTHER: Inne (liczba mnoga, nieokreślona) + rzeczownik. \n" +
          "• OTHERS: Inni/Inne (zaimek, występuje bez rzeczownika). \n" +
          "• THE OTHER: Ten drugi (z dwóch) lub pozostały. \n" +
          "• THE OTHERS: Pozostali (z konkretnej grupy).",

          "4. EACH OTHER vs ONE ANOTHER: \n" +
          "• Obie formy oznaczają 'siebie nawzajem'. Tradycyjnie 'each other' stosowano do dwóch osób, a 'one another' do większej grupy, ale dziś są stosowane zamiennie.",

          "5. ZAIMKI ZWROTNE (Reflexive): Myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. \n" +
          "• Stosujemy, gdy podmiot i dopełnienie to ta sama osoba (I cut myself).",

          "6. ZAIMKI BEZOSOBOWE: \n" +
          "• YOU: Potoczne (You should always wash your hands). \n" +
          "• ONE: Bardzo formalne (One must follow the rules).",

          "7. EITHER / NEITHER / BOTH: \n" +
          "• BOTH ... AND: Obaj/Obie (Both Tom and Ann). \n" +
          "• EITHER ... OR: Albo... albo (Either you stay or you go). \n" +
          "• NEITHER ... NOR: Ani... ani (Neither my mom nor my dad knew)."
        ],
        examples: [
          "Would you like another cup of tea? (Jeszcze jedną?)",
          "Some people like tea, others prefer coffee. (Inni - w ogóle)",
          "Neither of us was invited. (Żaden z nas dwóch)",
          "They have known each other for years. (Nawzajem)"
        ]
      },
      choiceTasks: [
        { id: 2301, question: "I have two sisters. One is a teacher, ___ is a nurse.", options: ["other", "the other", "another", "others"], correct: "the other" },
        { id: 2302, question: "Would you like ___ piece of cake?", options: ["other", "the other", "another", "others"], correct: "another" },
        { id: 2303, question: "We don't have ___ milk left.", options: ["some", "any", "no", "none"], correct: "any" },
        { id: 2304, question: "Neither Tom ___ Jerry came to the party.", options: ["or", "nor", "and", "but"], correct: "nor" },
        { id: 2305, question: "They looked at ___ and started laughing.", options: ["themselves", "each other", "one another's", "theirself"], correct: "each other" },
        { id: 2306, question: "___ must be careful when driving in the rain.", options: ["One", "You", "They", "A & B are correct"], correct: "A & B are correct" },
        { id: 2307, question: "Some students passed, but ___ failed.", options: ["other", "the others", "another", "others"], correct: "others" },
        { id: 2308, question: "I can't find my keys ___. ", options: ["somewhere", "anywhere", "nowhere", "everywhere"], correct: "anywhere" },
        { id: 2309, question: "___ child was given a small gift.", options: ["Each", "Every", "All", "Both"], correct: "Each" },
        { id: 2310, question: "I'd like to try ___ pair of shoes, please.", options: ["other", "another", "the others", "others"], correct: "another" },
        { id: 2311, question: "He lives by ___ in a small cottage.", options: ["him", "himself", "his", "hisself"], correct: "himself" },
        { id: 2312, question: "You can choose ___ the red one or the blue one.", options: ["neither", "either", "both", "nor"], correct: "either" },
        { id: 2313, question: "There's ___ point in arguing with him.", options: ["no", "any", "none", "not"], correct: "no" },
        { id: 2314, question: "I've got two pens. You can have ___ of them.", options: ["both", "either", "any", "every"], correct: "either" },
        { id: 2315, question: "___ of my parents speak English.", options: ["Neither", "None", "No", "Any"], correct: "Neither" },
        { id: 2316, question: "Can ___ help me with this box?", options: ["somebody", "anybody", "nobody", "everybody"], correct: "anybody" },
        { id: 2317, question: "___ is perfect.", options: ["No one", "Anyone", "Someone", "Each"], correct: "No one" },
        { id: 2318, question: "We enjoyed ___ at the wedding.", options: ["ourselves", "each other", "us", "ourself"], correct: "ourselves" },
        { id: 2319, question: "Could I have ___ water, please?", options: ["any", "some", "no", "another"], correct: "some" },
        { id: 2320, question: "She has five rings. She wears ___ on a different finger.", options: ["every", "each", "all", "either"], correct: "each" }
      ],
      textTasks: [
        { id: 2351, text: "I have two cars. One is black, ____ is red.", answer: "the other" },
        { id: 2352, text: "Would you like ____ cup of coffee?", answer: "another" },
        { id: 2353, text: "They haven't seen ____ for a long time. (Nawzajem)", answer: "each other" },
        { id: 2354, text: "I don't have ____ money. (Any)", answer: "any" },
        { id: 2355, text: "He did it all by ____. (Sam)", answer: "himself" },
        { id: 2356, text: "____ (Żaden) of the two candidates was suitable.", answer: "Neither" },
        { id: 2357, text: "I like these shoes. Do you have them in ____ colours?", answer: "other" },
        { id: 2358, text: "You can ____ (albo) wait here or come with us.", answer: "either" },
        { id: 2359, text: "____ (Wszyscy/Każdy) knows that the Earth is round.", answer: "Everybody" },
        { id: 2360, text: "I have three books. Two are here, where are ____?", answer: "the others" },
        { id: 2361, text: "Is there ____ (ktokolwiek) at home?", answer: "anybody" },
        { id: 2362, text: "We should help ____ (sobie nawzajem - grupa).", answer: "one another" },
        { id: 2363, text: "I've got ____ (żadnych) friends in this city.", answer: "no" },
        { id: 2364, text: "If you need ____ (więcej/innych) examples, let me know.", answer: "other" },
        { id: 2365, text: "____ (Pewne) people prefer to work at night.", answer: "Some" },
        { id: 2366, text: "Neither my brother ____ (ani) my sister lives with us.", answer: "nor" },
        { id: 2367, text: "I hurt ____ (się) while I was cooking.", answer: "myself" },
        { id: 2368, text: "Is there ____ (coś) I can do for you?", answer: "anything" },
        { id: 2369, text: "He has two sons. ____ (Obaj) of them are doctors.", answer: "Both" },
        { id: 2370, text: "I don't like this book. Give me ____ (inną).", answer: "another" }
      ]
    }
  }
};