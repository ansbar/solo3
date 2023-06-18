import { ILanguagePreGame, ILanguagePages } from "../../interfaces/languageInterfaces"
import { ILanguageOpponents } from "./interfaces"

export interface Texts { languagePages: ILanguagePages, languageOpponents: ILanguageOpponents, languagePreGame: ILanguagePreGame }

export const languageOpponents: ILanguageOpponents = {
  gorobei: "Gorobei",
}

export const languagePreGame: ILanguagePreGame = {
  intro: {
    title: "Tigerns väg del 2 - Förgöraren",
    copyright: "Copyright Mark Smith & Jamie Thomson 1985",
    illustratedBy: "Illustreringar av Bob Harvey",
    translatedBy: "Översatt av Gunilla Jonsson 1986",
    localCopyRight: "Svensk copyright Äventyrsspel 1986",
    scan: "Scan & PDF Gothmog",
    versionInfo: "Inget innehåll är ännu portat så boken går inte att spela ännu. Om du har feedback om något eller vill hjälpa till med översättning till andra språk så finns kontaktuppgifter i botten =)"
  }
}

export const languagePages: ILanguagePages = {
  1: {
    mainText: "",
    choices: [
      "Gå vidare"
    ]
  },
}