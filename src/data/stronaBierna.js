export const passiveVoiceTheoryData = {
  "Gramatyka": {
    "Strona Bierna - Kompendium Rozszerzone": {
      theory: {
        affirmative: "Podmiot + odpowiednia forma 'be' + Past Participle (III forma).",
        negations: "Operator 'not' po 'be' lub pierwszym czasowniku posiłkowym.",
        questions: "Inwersja czasownika posiłkowego z podmiotem.",
        exceptions: [
          "1. KONSTRUKCJE KAUZATYWNE (Causative Form): \n" +
          "• HAVE SOMETHING DONE: Stosujemy, gdy ktoś wykonuje usługę za nas (I had my car fixed). \n" +
          "• GET SOMETHING DONE: Podobne do 'have', ale sugeruje wysiłek lub trudność w przekonaniu kogoś (I finally got the computer repaired). \n" +
          "• HAVE SOMEBODY DO: Konstrukcja czynna: zlecenie komuś zadania (I had the assistant type the letter). \n" +
          "• GET SOMEBODY TO DO: Konstrukcja czynna: namówienie kogoś do czegoś (I got my brother to help me).",
          
          "2. CZASOWNIKI Z DWOMA DOPEŁNIENIAMI (Double Object Verbs): \n" +
          "Przy czasownikach typu: give, send, show, buy, lend, offer, pay. \n" +
          "• OSOBA jako podmiot: I was given a bonus (bardziej naturalne). \n" +
          "• RZECZ jako podmiot: A bonus was given to me (wymaga przyimka 'to' lub 'for').",
          
          "3. STRONA BIERNA BEZOSOBOWA (Impersonal Passive): \n" +
          "Stosowana z czasownikami: say, think, believe, consider, report, claim, expect. \n" +
          "• Schemat IT: It + be + V3 + that... (It is said that he is a spy). \n" +
          "• Schemat OSOBOWY (Personal Passive): Subject + be + V3 + TO-infinitive (He is said TO BE a spy).",
          
          "4. ZAAWANSOWANE BEZOKOLICZNIKI W STRONIE BIERNEJ (Infinitives): \n" +
          "W strukturze osobowej wybór bezokolicznika zależy od czasu: \n" +
          "• Present: He is said to work... (On podobno pracuje - teraz). \n" +
          "• Continuous: He is said to be working... (On podobno teraz w tej chwili pracuje). \n" +
          "• Perfect: He is said to have worked... (On podobno pracował - wcześniej). \n" +
          "• Perfect Continuous: He is said to have been working... (On podobno pracował przez jakiś czas w przeszłości).",
          
          "5. CZASOWNIKI POSTRZEGANIA I 'MAKE': \n" +
          "W stronie biernej 'make', 'see', 'hear', 'help' odzyskują 'TO', które znika w stronie czynnej. \n" +
          "• Active: They made him cry. \n" +
          "• Passive: He was made TO cry. \n" +
          "• Active: I saw him enter. \n" +
          "• Passive: He was seen TO enter.",
          
          "6. CZASOWNIKI BEZ STRONY BIERNEJ: \n" +
          "Czasowniki nieprzechodnie (intransitive), np. disappear, arrive, seem, become, oraz niektóre statyczne, np. have (mieć), belong, resemble, fit - nie tworzą strony biernej.",
          
          "7. PASSIVE WITH 'GET': \n" +
          "W języku potocznym 'be' zastępujemy przez 'get' dla podkreślenia nagłej zmiany lub wypadku (He got arrested, The glass got broken)."
        ],
        examples: [
          "Present Simple: English is spoken here.",
          "Present Continuous: The room is being cleaned.",
          "Past Simple: The book was written in 1920.",
          "Past Continuous: The dinner was being cooked when I arrived.",
          "Present Perfect: The house has been sold.",
          "Past Perfect: The work had been finished before sunset.",
          "Future Simple: The results will be announced tomorrow.",
          "Future Perfect: The bridge will have been completed by June.",
          "Modals: This must be done immediately.",
          "Passive Infinitive: I want to be told the truth.",
          "Passive -ing: I hate being ignored."
        ],
        
      },
      choiceTasks: [
        // --- SEKCJA 1: CZASY I MODALE ---
        { id: 1301, question: "The decision ___ by the board members yesterday.", options: ["is made", "was made", "has been made", "was making"], correct: "was made" },
        { id: 1302, question: "Wait! The floor ___ at the moment.", options: ["is cleaned", "is being cleaned", "was being cleaned", "has been cleaned"], correct: "is being cleaned" },
        { id: 1303, question: "By 2027, the new tunnel ___.", options: ["will be finished", "will have been finished", "is finished", "is being finished"], correct: "will have been finished" },
        { id: 1304, question: "The documents ___ before the meeting started.", options: ["had been signed", "have been signed", "were signed", "were being signed"], correct: "had been signed" },
        { id: 1305, question: "This mystery ___ solved for decades.", options: ["isn't", "wasn't", "hasn't been", "won't be"], correct: "hasn't been" },
        { id: 1306, question: "The house ___ painted every five years.", options: ["is", "is being", "has been", "was"], correct: "is" },
        { id: 1307, question: "The patient ___ to the hospital by helicopter last night.", options: ["is taken", "was taken", "has been taken", "was being taken"], correct: "was taken" },
        { id: 1308, question: "Everything that could ___ done, has ___ done.", options: ["be/been", "be/be", "been/been", "be/being"], correct: "be/been" },
        { id: 1309, question: "Such a mistake should ___.", options: ["never have been made", "never have made", "never be made", "be never made"], correct: "never have been made" },
        { id: 1310, question: "The results ___ sent to you as soon as they are ready.", options: ["will be", "are being", "have been", "will have been"], correct: "will be" },

        // --- SEKCJA 2: OSOBOWE I BEZOSOBOWE (IT IS SAID...) ---
        { id: 1311, question: "He is believed ___ the country two days ago.", options: ["to leave", "to have left", "leaving", "to be leaving"], correct: "to have left" },
        { id: 1312, question: "It ___ that the strike will end tomorrow.", options: ["is expected", "expects", "is expecting", "was expected"], correct: "is expected" },
        { id: 1313, question: "The company is reported ___ a huge profit this year.", options: ["to make", "to have made", "making", "that it makes"], correct: "to have made" },
        { id: 1314, question: "She is said ___ for a new job at the moment.", options: ["to look", "to be looking", "to have looked", "looking"], correct: "to be looking" },
        { id: 1315, question: "The castle is thought ___ built in the 12th century.", options: ["to be", "to have been", "being", "to have"], correct: "to have been" },
        { id: 1316, question: "It is claimed ___ the virus originated in a lab.", options: ["to", "that", "which", "if"], correct: "that" },
        { id: 1317, question: "They are considered ___ the best in the industry.", options: ["to be", "being", "be", "is"], correct: "to be" },
        { id: 1318, question: "He was understood ___ working on a secret project.", options: ["to have been", "to be", "having been", "being"], correct: "to have been" },
        { id: 1319, question: "It ___ widely believed that the world was flat.", options: ["is", "was", "has been", "is being"], correct: "was" },
        { id: 1320, question: "The suspect is known ___ a weapon.", options: ["to carry", "to be carrying", "to have carried", "carrying"], correct: "to be carrying" },

        // --- SEKCJA 3: CAUSATIVE (HAVE SOMETHING DONE) ---
        { id: 1321, question: "I'll have the plumber ___ the sink.", options: ["fix", "to fix", "fixed", "fixing"], correct: "fix" },
        { id: 1322, question: "I got the technician ___ my internet connection.", options: ["repair", "to repair", "repaired", "repairing"], correct: "to repair" },
        { id: 1323, question: "You should have your eyes ___.", options: ["test", "testing", "tested", "to test"], correct: "tested" },
        { id: 1324, question: "How often do you have your car ___?", options: ["serviced", "service", "servicing", "to service"], correct: "serviced" },
        { id: 1325, question: "We're having a new security system ___ next week.", options: ["install", "installed", "to install", "installing"], correct: "installed" },
        { id: 1326, question: "She had her handbag ___ while she was on holiday.", options: ["steal", "stolen", "stealing", "to steal"], correct: "stolen" },
        { id: 1327, question: "I finally got my homework ___ by my older brother.", options: ["check", "checked", "to check", "checking"], correct: "checked" },
        { id: 1328, question: "I must have this document ___ as soon as possible.", options: ["translate", "translating", "translated", "to translate"], correct: "translated" },
        { id: 1329, question: "He had his hair ___ short for the summer.", options: ["cut", "cutting", "to cut", "cuts"], correct: "cut" },
        { id: 1330, question: "Why don't you get your brother ___ you with that?", options: ["help", "to help", "helped", "helping"], correct: "to help" },

        // --- SEKCJA 4: CZASOWNIKI POSTRZEGANIA I DWA DOPEŁNIENIA ---
        { id: 1331, question: "I was ___ a very difficult question by the journalist.", options: ["asked", "asking", "ask", "to ask"], correct: "asked" },
        { id: 1332, question: "He was made ___ the entire mess he had created.", options: ["clean up", "to clean up", "cleaning up", "cleaned up"], correct: "to clean up" },
        { id: 1333, question: "The thief was seen ___ the house through the window.", options: ["to enter", "enter", "entered", "to entering"], correct: "to enter" },
        { id: 1334, question: "I was offered ___ a job in New York.", options: ["-", "to", "for", "with"], correct: "-" },
        { id: 1335, question: "We were heard ___ about the secret plan.", options: ["to talk", "talk", "talking", "talked"], correct: "to talk" },
        { id: 1336, question: "The prisoner was helped ___.", options: ["escape", "to escape", "escaping", "escaped"], correct: "to escape" },
        { id: 1337, question: "She was lent ___ some money by her friend.", options: ["-", "to", "for", "with"], correct: "-" },
        { id: 1338, question: "The child was seen ___ by the river.", options: ["playing", "to play", "played", "play"], correct: "playing" },
        { id: 1339, question: "He was made ___ his confession.", options: ["sign", "to sign", "signing", "signed"], correct: "to sign" },
        { id: 1340, question: "A message was sent ___ me by mistake.", options: ["-", "to", "for", "at"], correct: "to" }
      ],
      textTasks: [
        // --- TRANSFROMACJE (Klucz do egzaminów rozszerzonych) ---
        { id: 1341, text: "People believe that he is hiding in the woods. -> He is believed ____ in the woods.", answer: "to be hiding" },
        { id: 1342, text: "They say she won the lottery. -> She is said ____ the lottery.", answer: "to have won" },
        { id: 1343, text: "The dentist is checking my teeth. -> I am having my teeth ____.", answer: "checked" },
        { id: 1344, text: "They forced her to tell the truth. -> She was made ____ the truth.", answer: "to tell" },
        { id: 1345, text: "They will have built the stadium by July. -> The stadium ____ by July.", answer: "will have been built" },
        { id: 1346, text: "Someone has stolen my passport! -> I have had my passport ____!", answer: "stolen" },
        { id: 1347, text: "Experts estimate that the painting is worth millions. -> The painting is estimated ____ millions.", answer: "to be worth" },
        { id: 1348, text: "I asked the secretary to type the letters. -> I had the secretary ____ the letters.", answer: "type" },
        { id: 1349, text: "People thought that the Earth was flat. -> The Earth was thought ____ flat.", answer: "to have been" },
        { id: 1350, text: "I'll get a professional to paint my house. -> I'll get my house ____.", answer: "painted" },
        { id: 1351, text: "They are renovating the old cinema. -> The old cinema ____ renovated.", answer: "is being" },
        { id: 1352, text: "They heard him scream. -> He was heard ____.", answer: "to scream" },
        { id: 1353, text: "Someone had already informed us. -> We ____ already been informed.", answer: "had" },
        { id: 1354, text: "It is expected that the prices will rise. -> The prices ____ to rise.", answer: "are expected" },
        { id: 1355, text: "They didn't give me any choice. -> I ____ any choice.", answer: "wasn't given" },
        { id: 1356, text: "I told the mechanic to check the oil. -> I had the oil ____.", answer: "checked" },
        { id: 1357, text: "Someone saw the suspect leaving the bank. -> The suspect was seen ____ the bank.", answer: "leaving" },
        { id: 1358, text: "They consider that he is the best candidate. -> He is considered ____ the best candidate.", answer: "to be" },
        { id: 1359, text: "They are sending the invitation to her. -> She ____ the invitation.", answer: "is being sent" },
        { id: 1360, text: "People know that she was a great actress. -> She is known ____ a great actress.", answer: "to have been" },
        { id: 1361, text: "I'll make him apologize. -> He will be made ____.", answer: "to apologize" },
        { id: 1362, text: "They haven't used this room for years. -> This room ____ for years.", answer: "hasn't been used" },
        { id: 1363, text: "I'll persuade the manager to give me a refund. -> I'll get the manager ____ me a refund.", answer: "to give" },
        { id: 1364, text: "They report that the army is advancing. -> The army is reported ____.", answer: "to be advancing" },
        { id: 1365, text: "I want them to pay me on time. -> I want ____ on time.", answer: "to be paid" },
        { id: 1366, text: "They were interviewing her when I arrived. -> She ____ when I arrived.", answer: "was being interviewed" },
        { id: 1367, text: "People think he committed the crime. -> He is thought ____ the crime.", answer: "to have committed" },
        { id: 1368, text: "I told the gardener to mow the lawn. -> I had the lawn ____.", answer: "mown" },
        { id: 1369, text: "They saw her dance. -> She was seen ____.", answer: "to dance" },
        { id: 1370, text: "They will announce the winner in an hour. -> The winner ____ in an hour.", answer: "will be announced" },
        { id: 1371, text: "It is believed that they have escaped. -> They are believed ____.", answer: "to have escaped" },
        { id: 1372, text: "Someone is following us. -> We ____.", answer: "are being followed" },
        { id: 1373, text: "They didn't allow us to enter. -> We ____ to enter.", answer: "were not allowed" },
        { id: 1374, text: "I got the tailor to shorten my trousers. -> I had my trousers ____.", answer: "shortened" },
        { id: 1375, text: "People expect that he will win the race. -> He is expected ____ the race.", answer: "to win" },
        { id: 1376, text: "They are repairing my watch. -> My watch is ____.", answer: "being repaired" },
        { id: 1377, text: "Someone has invited her to the wedding. -> She ____ to the wedding.", answer: "has been invited" },
        { id: 1378, text: "They say he lives in a caravan. -> He is said ____ in a caravan.", answer: "to live" },
        { id: 1379, text: "I'll have my assistant call you. -> I'll have you ____ by my assistant.", answer: "called" },
        { id: 1380, text: "They were recording the conversation. -> The conversation ____.", answer: "was being recorded" },
        { id: 1381, text: "It is reported that two people were injured. -> Two people are reported ____ injured.", answer: "to have been" },
        { id: 1382, text: "They made us wait for two hours. -> We were made ____ for two hours.", answer: "to wait" },
        { id: 1383, text: "Someone should do something about it. -> Something should ____ about it.", answer: "be done" },
        { id: 1384, text: "I'll get the cleaner to clean the windows. -> I'll have the windows ____.", answer: "cleaned" },
        { id: 1385, text: "They think she is working in London. -> She is thought ____ in London.", answer: "to be working" },
        { id: 1386, text: "They have postponed the meeting. -> The meeting ____ postponed.", answer: "has been" },
        { id: 1387, text: "Someone saw him leave the building. -> He was seen ____ the building.", answer: "to leave" },
        { id: 1388, text: "I had my sister take the photo. -> I got my sister ____ the photo.", answer: "to take" },
        { id: 1389, text: "They are considering his application. -> His application ____.", answer: "is being considered" },
        { id: 1390, text: "It is known that the company is in trouble. -> The company is known ____ in trouble.", answer: "to be" },
        { id: 1391, text: "They will have finished the report by tomorrow. -> The report ____ finished by tomorrow.", answer: "will have been" },
        { id: 1392, text: "I'll have the barber trim my beard. -> I'll have my beard ____.", answer: "trimmed" },
        { id: 1393, text: "People say she was very beautiful. -> She is said ____ very beautiful.", answer: "to have been" },
        { id: 1394, text: "They made him give back the money. -> He was made ____ the money.", answer: "to give back" },
        { id: 1395, text: "Someone had already warned them. -> They ____ already been warned.", answer: "had" },
        { id: 1396, text: "I got the plumber to fix the leak. -> I had the leak ____.", answer: "fixed" },
        { id: 1397, text: "They saw the ship sink. -> The ship was seen ____.", answer: "to sink" },
        { id: 1398, text: "They are testing the new drug. -> The new drug ____.", answer: "is being tested" },
        { id: 1399, text: "It is expected that the weather will improve. -> The weather is expected ____.", answer: "to improve" },
        { id: 1400, text: "I want you to tell me the truth. -> I want ____ the truth.", answer: "to be told" }
      ]
    }

  }
};