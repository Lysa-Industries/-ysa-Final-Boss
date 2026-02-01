export const reportedSpeechData = {
  "Zdania Złożone": {
    "Mowa Zależna": {
      theory: {
        affirmative: "Cofnięcie czasu (Past Simple -> Past Perfect, Will -> Would itd.) oraz zmiana zaimków i okoliczników (today -> that day, here -> there).",
        negations: "Operator 'not' po czasowniku wprowadzającym lub wewnątrz bezokolicznika (He told me NOT to go).",
        questions: "Brak inwersji (szyk oznajmiający) i brak operatorów do/does/did. Pytania tak/nie zaczynamy od 'if' lub 'whether'.",
        exceptions: [
          "Brak cofnięcia czasu, gdy sytuacja jest nadal aktualna lub mówimy o prawach natury.",
          "Reporting verbs z różną składnią: Suggest + -ing, Warn + to + bezokolicznik, Insist + on + -ing.",
          "Czasowniki modalne: must zmienia się na had to (obowiązek) lub zostaje must (przekonanie)."
        ],
        examples: [
          "I'll come -> He said he would come.",
          "Where do you live? -> He asked me where I lived.",
          "Don't touch it! -> He warned me not to touch it."
        ]
      },
      choiceTasks: [
        { id: 501, question: "He asked me ___ I had seen his keys.", options: ["that", "if", "weather", "did"], correct: "if" },
        { id: 502, question: "She suggested ___ to the cinema instead of staying home.", options: ["to go", "going", "we will go", "gone"], correct: "going" },
        { id: 503, question: "They complained that the service ___ terrible the night before.", options: ["is", "was", "has been", "had been"], correct: "had been" },
        { id: 504, question: "He promised ___ me as soon as he arrived.", options: ["calling", "to call", "that calls", "will call"], correct: "to call" },
        { id: 505, question: "The doctor advised ___ more vegetables.", options: ["me eat", "that I eat", "me to eat", "to eating"], correct: "me to eat" },
        { id: 506, question: "She asked where ___ my summer holidays.", options: ["did I spend", "I spent", "had I spent", "was I spending"], correct: "I spent" },
        { id: 507, question: "He denied ___ the window.", options: ["to break", "breaking", "that breaks", "broke"], correct: "breaking" },
        { id: 508, question: "They wanted to know what time ___.", options: ["the train leaves", "did the train leave", "the train left", "does the train leave"], correct: "the train left" },
        { id: 509, question: "The teacher warned us ___ late again.", options: ["not being", "not to be", "to not be", "don't be"], correct: "not to be" },
        { id: 510, question: "She admitted ___ the secret to her friends.", options: ["of telling", "to telling", "telling", "to tell"], correct: "telling" },
        { id: 511, question: "He insisted ___ for the dinner.", options: ["on paying", "to pay", "for paying", "in paying"], correct: "on paying" },
        { id: 512, question: "I asked her whether ___ help with her bags.", options: ["does she need", "needs she", "she needed", "did she need"], correct: "she needed" },
        { id: 513, question: "They told us that they ___ since 5 AM.", options: ["have been driving", "were driving", "had been driving", "are driving"], correct: "had been driving" },
        { id: 514, question: "He apologized ___ my birthday.", options: ["to forget", "for forgetting", "of forgetting", "that forgot"], correct: "for forgetting" },
        { id: 515, question: "She reminded me ___ the door before leaving.", options: ["to lock", "locking", "that lock", "locked"], correct: "to lock" }
      ],
      textTasks: [
        { id: 516, text: "'I'm living in London now.' -> He said he ____ in London then.", answer: "was living" },
        { id: 517, text: "'Where is my phone?' -> She asked where her phone ____.", answer: "was" },
        { id: 518, text: "'Don't shout!' -> He told me ____.", answer: "not to shout" },
        { id: 519, text: "'I have lost my wallet.' -> He claimed that he ____ his wallet.", answer: "had lost" },
        { id: 520, text: "'Will you help me?' -> She asked me if I ____ help her.", answer: "would" },
        { id: 521, text: "'I must go now.' -> He said he ____ go then.", answer: "had to" },
        { id: 522, text: "'Let's go for a walk.' -> He suggested ____ for a walk.", answer: "going" },
        { id: 523, text: "'Did you see the film?' -> They asked me if I ____ the film.", answer: "had seen" },
        { id: 524, text: "'I can't swim.' -> She said she ____ swim.", answer: "couldn't" },
        { id: 525, text: "'Come here!' -> He ordered me ____ there.", answer: "to come" },
        { id: 526, text: "'I'll see you tomorrow.' -> He promised he would see me the ____ day.", answer: "following" },
        { id: 527, text: "'Have you ever been to China?' -> He asked me if I ____ to China.", answer: "had ever been" },
        { id: 528, text: "'Leave me alone!' -> She told him ____ her alone.", answer: "to leave" },
        { id: 529, text: "'We are playing tomorrow.' -> They said they were playing the ____.", answer: "next day" },
        { id: 530, text: "'Where do you work?' -> He wanted to know where I ____.", answer: "worked" }
      ]
    }
  }
};