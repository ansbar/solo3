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
    mainText: "Av de ekande stegen att döma är det fler än tjugo soldater som springer uppför Kärntornets spiraltrappa mot dig. De kommer säkert att försöka döda dig när de upptäcker vad du har gjort med deras ledare Honoric och hans bundsförvanter, Yaemon och Manse Dödsmagikern. Taket är fortfarande svagt upplyst av de glödande kolen i fyrfatet.",
    choices: [
      "Du kan försvara trappan så att de bara kan komma ut en i taget",
      "Du kan försöka göra ett väldigt språng från Kärntornets tak och hoppas att du kan ta dig över muren och landa i vallgraven nedanför",
      "Om du har färdigheten Klättra, kan du kanske klättra ned på utsidan av det Stora Kärntornets vägg"
    ]
  },
  1000: {
    mainText: "",
    choices: [
      "Gå vidare"
    ]
  },
}