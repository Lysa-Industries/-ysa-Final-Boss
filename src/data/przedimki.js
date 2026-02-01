export const articlesData = {
  "Gramatyka": {
    "Przedimki (Articles)": {
      theory: {
        affirmative: "Używamy 'A/AN' dla rzeczowników policzalnych w l. pojedynczej, gdy mówimy o nich po raz pierwszy. 'THE' używamy, gdy coś jest znane, unikalne lub wspomniane ponownie.",
        negations: "Brak przedimka (Zero Article) występuje najczęściej przy l. mnogiej i rzeczownikach niepoliczalnych w sensie ogólnym.",
        questions: "Zasady użycia przedimków nie zmieniają się w pytaniach.",
        exceptions: [
          "A/AN (18 zasad/użyć): 1. Zawody (a doctor), 2. Religie (a Catholic), 3. Narodowości (a Pole), 4. Ceny/częstotliwość (twice a week), 5. 'Jakiś' (a Mr. Smith), 6. Po 'Such' (such a day), 7. Po 'Quite' (quite a surprise), 8. Setki/tysiące (a hundred), 9. Wykrzyknienia (What a pity!), 10. Choroby lekkie (a cold/a headache), 11. Części ciała w idiomach (a long face), 12. Przyrządy (a telescope), 13. Zamiast 'per' (50km an hour), 14. Opis cechy (a blue eye), 15. Przed l. pojedynczą policzalną (a car), 16. Po 'Half' (half a kilo), 17. Klasyfikacje (A lion is an animal), 18. Pewne wyrażenia (a few, a little).",
          "THE (18 zasad/użyć): 1. Unikatowe (the Sun), 2. Rzeki (the Vistula), 3. Morza/Oceany (the Baltic), 4. Archipelagi (the Bahamas), 5. Łańcuchy górskie (the Alps), 6. Kraje z 'Republic/Kingdom/States', 7. Instrumenty (play the piano), 8. Grupy ludzi (the rich), 9. Rodziny (the Browns), 10. Kierunki świata (the North), 11. Gazety (the Times), 12. Budynki unikalne (the Opera House), 13. Kina/Teatry (the Odeon), 14. Stopień najwyższy (the best), 15. Liczebniki porządkowe (the first), 16. Określone przez kontekst (the door), 17. Organizacje (the UN), 18. Dekady (the 90s).",
          "ZERO ARTICLE (18 zasad/użyć): 1. Imiona (John), 2. Kontynenty (Europe), 3. Pojedyncze góry (Mt Everest), 4. Pojedyncze wyspy (Sicily), 5. Kraje (Poland), 6. Miasta (Warsaw), 7. Ulice (Oxford St), 8. Jeziora (Lake Garda), 9. Posiłki (have lunch), 10. Sporty (play football), 11. Języki (speak English), 12. Przedmioty szkolne (Biology), 13. Kolory (Blue is nice), 14. Abstrakcje (Love is blind), 15. Transport 'by' (by bus), 16. Dni/Miesiące (on Monday), 17. Święta (Easter), 18. Instytucje w ich celu (at school - uczyć się, in hospital - chorować)."
        ],
        examples: [
          "The Nile is the longest river.",
          "I have a headache.",
          "He goes to church every Sunday.",
          "The United Kingdom is in Europe.",
          "I play the violin."
        ]
      },
      choiceTasks: [
        { id: 1001, question: "___ Mount Everest is the highest peak in the world.", options: ["A", "An", "The", "-"], correct: "-" },
        { id: 1002, question: "He plays ___ piano beautifully.", options: ["a", "an", "the", "-"], correct: "the" },
        { id: 1003, question: "She is ___ engineer.", options: ["a", "an", "the", "-"], correct: "an" },
        { id: 1004, question: "___ Vistula is the longest river in Poland.", options: ["A", "An", "The", "-"], correct: "The" },
        { id: 1005, question: "I go to ___ work by ___ bus.", options: ["the/the", "-/-", "a/the", "the/-"], correct: "-/-" },
        { id: 1006, question: "___ happiness is very important.", options: ["A", "An", "The", "-"], correct: "-" },
        { id: 1007, question: "We visited ___ United States last year.", options: ["a", "an", "the", "-"], correct: "the" },
        { id: 1008, question: "He has ___ cold and needs to stay in ___ bed.", options: ["a/-", "the/a", "a/the", "-/-"], correct: "a/-" },
        { id: 1009, question: "They live in ___ Oxford Street.", options: ["a", "an", "the", "-"], correct: "-" },
        { id: 1010, question: "___ rich should help ___ poor.", options: ["The/the", "A/a", "-/-", "The/-"], correct: "The/the" },
        { id: 1011, question: "I'll see you on ___ Monday.", options: ["a", "an", "the", "-"], correct: "-" },
        { id: 1012, question: "___ Smith family lives next door.", options: ["A", "An", "The", "-"], correct: "The" },
        { id: 1013, question: "It costs two pounds ___ kilo.", options: ["a", "an", "the", "-"], correct: "a" },
        { id: 1014, question: "___ Lake Superior is huge.", options: ["A", "An", "The", "-"], correct: "-" },
        { id: 1015, question: "She speaks ___ French fluently.", options: ["a", "an", "the", "-"], correct: "-" },
        { id: 1016, question: "___ Moon orbits ___ Earth.", options: ["The/the", "A/a", "-/-", "The/-"], correct: "The/the" },
        { id: 1017, question: "What ___ beautiful day!", options: ["a", "an", "the", "-"], correct: "a" },
        { id: 1018, question: "He is in ___ prison for robbery.", options: ["a", "an", "the", "-"], correct: "-" },
        { id: 1019, question: "___ Sahara is a vast desert.", options: ["A", "An", "The", "-"], correct: "The" },
        { id: 1020, question: "I'm going to ___ cinema tonight.", options: ["a", "an", "the", "-"], correct: "the" },
        { id: 1021, question: "She's ___ Catholic.", options: ["a", "an", "the", "-"], correct: "a" },
        { id: 1022, question: "He was ___ first to arrive.", options: ["a", "an", "the", "-"], correct: "the" },
        { id: 1023, question: "___ Biology is my favorite subject.", options: ["A", "An", "The", "-"], correct: "-" },
        { id: 1024, question: "___ English are known for their tea.", options: ["A", "An", "The", "-"], correct: "The" },
        { id: 1025, question: "I have ___ little time left.", options: ["a", "an", "the", "-"], correct: "a" },
        { id: 1026, question: "___ dinner is ready!", options: ["A", "An", "The", "-"], correct: "-" },
        { id: 1027, question: "We stayed at ___ Hilton Hotel.", options: ["a", "an", "the", "-"], correct: "the" },
        { id: 1028, question: "___ Netherlands is a flat country.", options: ["A", "An", "The", "-"], correct: "The" },
        { id: 1029, question: "She has ___ university degree.", options: ["a", "an", "the", "-"], correct: "a" },
        { id: 1030, question: "___ dogs are faithful animals.", options: ["A", "An", "The", "-"], correct: "-" }
      ],
      textTasks: [
        { id: 1031, text: "____ (PACIFIC) Ocean is the largest ocean.", answer: "The" },
        { id: 1032, text: "I have ____ (HEADACHE) since morning.", answer: "a" },
        { id: 1033, text: "They are traveling through ____ (EUROPE) by train.", answer: "-" },
        { id: 1034, text: "____ (BERMUDA) Triangle is mysterious.", answer: "The" },
        { id: 1035, text: "He goes to ____ (CHURCH) every Sunday to pray.", answer: "-" },
        { id: 1036, text: "____ (REPUBLIC) of Ireland is beautiful.", answer: "The" },
        { id: 1037, text: "I've got ____ (FEW) friends in London.", answer: "a" },
        { id: 1038, text: "____ (LUNCH) we had today was great.", answer: "The" },
        { id: 1039, text: "He plays ____ (GUITAR) in a band.", answer: "the" },
        { id: 1040, text: "____ (HIGHEST) building in the city is new.", answer: "The" },
        { id: 1041, text: "I'm going to ____ (BED) now.", answer: "-" },
        { id: 1042, text: "____ (STATUE) of Liberty is in New York.", answer: "The" },
        { id: 1043, text: "She's ____ (OPTIMIST).", answer: "an" },
        { id: 1044, text: "I love ____ (JAZZ) music.", answer: "-" },
        { id: 1045, text: "____ (TATRAS) are in the south of Poland.", answer: "The" },
        { id: 1046, text: "He works as ____ (ACCOUNTANT).", answer: "an" },
        { id: 1047, text: "____ (SUN) is very bright today.", answer: "The" },
        { id: 1048, text: "I'll be there in ____ (HOUR).", answer: "an" },
        { id: 1049, text: "____ (HOSPITAL) he's in is very good.", answer: "The" },
        { id: 1050, text: "We go on holiday once ____ (YEAR).", answer: "a" },
        { id: 1051, text: "____ (LIFE) is hard sometimes.", answer: "-" },
        { id: 1052, text: "____ (NORTH) of England is cold.", answer: "The" },
        { id: 1053, text: "He's ____ (HONEST) person.", answer: "an" },
        { id: 1054, text: "____ (WARSAW) is the capital of Poland.", answer: "-" },
        { id: 1055, text: "She's at ____ (UNIVERSITY) studying Law.", answer: "-" },
        { id: 1056, text: "____ (SKY) is blue.", answer: "The" },
        { id: 1057, text: "I have ____ (IDEA).", answer: "an" },
        { id: 1058, text: "____ (QUEEN) of England lives in London.", answer: "The" },
        { id: 1059, text: "It's ____ (SUCH) a pity!", answer: "such" },
        { id: 1060, text: "____ (APPLES) are good for you.", answer: "-" }
      ]
    }
  }
};