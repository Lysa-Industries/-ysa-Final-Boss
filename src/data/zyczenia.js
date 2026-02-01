export const wishesAndPreferencesData = {
  "Gramatyka": {
    "Życzenia i Preferencje (Wish, Rather, It's time)": {
      theory: {
        affirmative: "W konstrukcjach tych 'cofamy' czas, aby pokazać, że sytuacja jest nierealna lub hipotetyczna.",
        negations: "Przeczenia tworzymy za pomocą 'didn't' dla teraźniejszości i 'hadn't' dla przeszłości.",
        questions: "Pytania występują rzadko, głównie w formie 'Would you rather...?'",
        exceptions: [
          "1. I WISH / IF ONLY (Teraźniejszość): Używamy Past Simple. Wyrażamy niezadowolenie z obecnej sytuacji. (I wish I were rich - Żałuję, że nie jestem bogaty).",
          "2. I WISH / IF ONLY (Przeszłość): Używamy Past Perfect. Wyrażamy żal dotyczący czegoś, co się stało. (I wish I had studied more - Żałuję, że się nie uczyłem).",
          "3. I WISH / IF ONLY (Skarga/Irytacja): Używamy 'would + verb'. Dotyczy zachowania innych osób lub rzeczy, które nas denerwują. (I wish you would stop shouting!).",
          "4. WOULD RATHER / SOONER (Ta sama osoba): Używamy bezokolicznika bez 'to'. (I'd rather stay at home).",
          "5. WOULD RATHER / SOONER (Dwie różne osoby): Jeśli chcemy, by ktoś coś zrobił TERAZ -> Past Simple (I'd rather you stayed). Jeśli w PRZESZŁOŚCI -> Past Perfect (I'd rather you hadn't told him).",
          "6. IT'S (HIGH) TIME: Używamy Past Simple. Oznacza, że już dawno powinniśmy coś zrobić. (It's time we went home).",
          "7. HAD BETTER: Używamy bezokolicznika bez 'to'. Służy do dawania mocnych rad. (You'd better see a doctor). Przeczenie: 'had better NOT'.",
          "8. WOULD PREFER: 'I would prefer to stay' (samodzielnie) lub 'I would prefer it if you stayed' (o kimś innym)."
        ],
        examples: [
          "I wish I had a faster car. (Ale nie mam)",
          "If only I hadn't lost my keys yesterday! (Żal)",
          "It's high time you started working. (Najwyższy czas)",
          "I'd rather you didn't smoke here. (Wolałbym, żebyś nie palił)",
          "You'd better not be late. (Lepiej się nie spóźnij)"
        ]
      },
      choiceTasks: [
        // --- WISH / IF ONLY ---
        { id: 2001, question: "I wish I ___ more money right now.", options: ["have", "had", "would have", "had had"], correct: "had" },
        { id: 2002, question: "If only I ___ her the truth last week.", options: ["told", "would tell", "had told", "tell"], correct: "had told" },
        { id: 2003, question: "I wish the neighbors ___ making so much noise.", options: ["stop", "will stop", "would stop", "stopped"], correct: "would stop" },
        { id: 2004, question: "If only we ___ in a bigger house.", options: ["live", "lived", "would live", "had lived"], correct: "lived" },
        { id: 2005, question: "I wish I ___ that cake yesterday. I feel sick now.", options: ["didn't eat", "hadn't eaten", "wouldn't eat", "not eat"], correct: "hadn't eaten" },
        
        // --- WOULD RATHER / SOONER ---
        { id: 2006, question: "I'd rather ___ at home tonight.", options: ["stay", "to stay", "stayed", "staying"], correct: "stay" },
        { id: 2007, question: "I'd rather you ___ anyone what I told you.", options: ["don't tell", "didn't tell", "not tell", "not to tell"], correct: "didn't tell" },
        { id: 2008, question: "Would you rather I ___ the window?", options: ["open", "opened", "to open", "opening"], correct: "opened" },
        { id: 2009, question: "He'd sooner ___ to the mountains than the beach.", options: ["go", "to go", "went", "going"], correct: "go" },
        { id: 2010, question: "I'd rather you ___ that expensive car last year.", options: ["didn't buy", "hadn't bought", "wouldn't buy", "not buy"], correct: "hadn't bought" },

        // --- IT'S TIME / HAD BETTER ---
        { id: 2011, question: "It's high time you ___ for your exams.", options: ["start studying", "started studying", "to start studying", "study"], correct: "started studying" },
        { id: 2012, question: "You'd better ___ late for the interview.", options: ["not be", "not to be", "don't be", "aren't"], correct: "not be" },
        { id: 2013, question: "It's time the kids ___ to bed.", options: ["go", "went", "to go", "are going"], correct: "went" },
        { id: 2014, question: "You ___ better ask for permission first.", options: ["had", "would", "did", "should"], correct: "had" },
        { id: 2015, question: "It's time we ___.", options: ["leave", "left", "to leave", "leaving"], correct: "left" },

        // --- MIXED (Kolejne 35 zadań testowych...) ---
        { id: 2016, question: "I wish I ___ how to play the guitar.", options: ["know", "knew", "would know", "had known"], correct: "knew" },
        { id: 2017, question: "I'd prefer it if you ___ so fast. It's dangerous.", options: ["don't drive", "didn't drive", "not drive", "won't drive"], correct: "didn't drive" },
        { id: 2018, question: "If only I ___ more attention during the lesson.", options: ["paid", "would pay", "had paid", "pay"], correct: "had paid" },
        { id: 2019, question: "I'd rather ___ dinner now.", options: ["have", "to have", "had", "having"], correct: "have" },
        { id: 2020, question: "I wish you ___ whistling! It's driving me crazy.", options: ["stopped", "would stop", "had stopped", "stop"], correct: "would stop" }
        // ... (Tu dodaj resztę do 50 pytań o podobnej strukturze)
      ],
      textTasks: [
        { id: 2051, text: "I'm not tall. -> I wish I ____ taller.", answer: "were" },
        { id: 2052, text: "I didn't buy that phone. -> If only I ____ that phone.", answer: "had bought" },
        { id: 2053, text: "You should start working. -> It's high time you ____ working.", answer: "started" },
        { id: 2054, text: "Don't tell him the truth. -> I'd rather you ____ him the truth.", answer: "didn't tell" },
        { id: 2055, text: "I want you to stop talking. -> I wish you ____ talking.", answer: "would stop" },
        { id: 2056, text: "I want to go to the cinema. -> I'd rather ____ to the cinema.", answer: "go" },
        { id: 2057, text: "It was a mistake to go there. -> I wish we ____ there.", answer: "hadn't gone" },
        { id: 2058, text: "You should see a doctor. -> You'd better ____ a doctor.", answer: "see" },
        { id: 2059, text: "I'm sorry I can't speak Spanish. -> I wish I ____ Spanish.", answer: "could speak" },
        { id: 2060, text: "Why did you tell her? -> I'd rather you ____ her.", answer: "hadn't told" },
        { id: 2061, text: "It's time for us to leave. -> It's time we ____.", answer: "left" },
        { id: 2062, text: "I'd prefer to eat pizza. -> I'd rather ____ pizza.", answer: "eat" },
        { id: 2063, text: "I regret being so rude. -> If only I ____ so rude.", answer: "hadn't been" },
        { id: 2064, text: "Please don't smoke here. -> I'd rather you ____ here.", answer: "didn't smoke" },
        { id: 2065, text: "You should study now. -> It's time you ____.", answer: "studied" },
        { id: 2066, text: "I wish I ____ (have) a bigger car when I was moving house.", answer: "had had" },
        { id: 2067, text: "You'd better ____ (not/forget) your keys again.", answer: "not forget" },
        { id: 2068, text: "I'd sooner ____ (stay) at home than go out last night.", answer: "have stayed" },
        { id: 2069, text: "If only it ____ (stop) raining! I want to go out.", answer: "would stop" },
        { id: 2070, text: "It's high time the government ____ (do) something about it.", answer: "did" }
        // ... (Tu dodaj resztę do 50 zadań otwartych)
      ]
    }
  }
};