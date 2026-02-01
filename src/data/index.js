import { tenses } from "./tenses";
import { przyimki } from "./przyimki";
import { thereIsItIsData } from "./thereIs";
import { przymiotniki } from "./przymiotniki";
import { reportedSpeechData } from "./mowaZalezna";
import { verbPatternsData } from "./skladniaCzas";
import { adverbsData } from "./przyslowki";
import { wordFormationData } from "./slowotworstwo";
import { modalVerbsData } from "./modalne";
import { articlesData } from "./przedimki";
import { adverbialClausesData } from "./zdOkolicznosciowe";
import { passiveVoiceTheoryData } from "./stronaBierna";
import { conditionalsData } from "./trybWarunkowe";
import { wishesAndPreferencesData } from "./zyczenia";
import { inversionAndEmphasisData } from "./inwersja";
import { possessivesData } from "./formyDzierzawcze";
import { pronounsMasterData } from "./zaimki";
import { relativeClausesData } from "./zdaniaPrzudawkowe";
export const grammarData = {
  "Czasy gramatyczne": tenses,

  "Przyimki i Czasowniki złożone": przyimki,
  "There is / It is": thereIsItIsData,
  Przymiotniki: przymiotniki,
  "Mowa zalezna": reportedSpeechData,
  "Składnia czasowników": verbPatternsData,
  Przysłówki: adverbsData,
  Słowotwórstwo: wordFormationData,
  "Czasowniki modalne": modalVerbsData,
  Przedimki: articlesData,
  "Zdania Okolicznościowe": adverbialClausesData,
  "Strona bierna": passiveVoiceTheoryData,
  "Tryby warunkowe": conditionalsData,
  "Zdania wyrażające życzenia": wishesAndPreferencesData,
  "Inwersja i wyrażenia empatyczne": inversionAndEmphasisData,
  "Formy dzierżawcze": possessivesData,
  Zaimki: pronounsMasterData,
  "Zdania przydawkowe": relativeClausesData,
};

