import { ILanguageGeneral, ILanguageIntro, ILanguagePages } from "../interfaces/languageInterfaces"

export interface Texts { languagePages: ILanguagePages, languageGeneral: ILanguageGeneral, languageIntro: ILanguageIntro }

export const languageGeneral: ILanguageGeneral = {
  misc: {
    damage: "Skada",
    defense: "Försvar",
    hiddenMainText: "Du måste bestämma nu om du ska använda INRE KRAFT."
  },
  gameHelp: {
    block: "Chansen att lyckas blockera slaget är ungefär 60% och innebär att du inte tar någon skada. Nästa attack du gör kommer få en slagmodifikation på minus 2 vilket gör det något svårare att träffa.",
    innerForce: "Om din attack träffar kommer skadan dubbleras. Du kan dock bara använda din inre kraft ett begränsat antal gånger. Observera att kraften är förbrukad även om du missar. Använd den med förnuft."
  },
  abilities: {
    deflectArrows: "Slå av pilar",
    acrobat: "Akrobatik",
    immunity: "Immunitet mot gift",
    playDead: "Spela död",
    escapeArtist: "Utbrytningskonst",
    poisonArrows: "Giftpilar",
    lockPicker: "Dyrka upp lås, upptäcka och oskadligöra fällor",
    climb: "Klättra",
    kwonsFlail: "Kwons slaga",
  },
  items: {
    healingPotion: "helande dryck (10 kroppspoäng)",
    flashPowder: "blixtpulver",
    opalring: "opalring",
    shuriken: "kaststjärnor",
    gold: "guldstycken",
    glove: "magisk slaghandske",
    magicShuriken: "förtrollad kaststjärna",
    fireLizardEssence: "eldödle-essens",
    herbs: "örter (8 kroppspoäng)",
    amulet: "Amulett",
    poison: "Intets blod"
  },
  defense: {
    punch: "Försvar mot slag",
    kick: "Försvar mot spark",
    throw: "Försvar mot kast"
  },
  modifiers: {
    punch: "slagmodifikation",
    kick: "sparkmodifikation",
    throw: "kastmodifikation",
    fate: "ödesmodifikation",  
  },
  attributes: {
    innerForce: "inre kraft",
    hp: "kroppspoäng",
  },
  temporary: {
    attack: "attack",
    damage: "damage"
  },
  difficulty: {
    medium: "Medium",
    hard: "Svårt",
    veryHard: "Väldigt svårt"
  },
  difficultyHelp: {
    medium: "<h4>Medium</h4><ul><li>5 färdigheter</li><li>2 i slag/spark/block/ödes-modifikationer</li><li>7 inre kraft</li><li>7 shuriken</li><li>Varning vid val som leder till döden</li></ul>",
    hard: "<h4>Svårt</h4><ul><li>4 färdigheter</li><li>1 i slag/spark/block/ödes-modifikationer</li><li>6 inre kraft</li><li>6 shuriken</li></ul>",
    veryHard: "<h4>Väldigt svårt (enligt boken)</h4><ul><li>3 färdigheter</li><li>0 i slag/spark/kast/ödes-modifikationer</li><li>5 inre kraft</li><li>5 shuriken</li></ul>"
  },
}

export const languageIntro: ILanguageIntro = {
  background: {
    b1: "l den magiska världen Orb, utslängd i det hav som Människoländernas folk kallar det Ändlösa, ligger den mystiska Stilla Drömmarnas Ö. Många år har gått sedan du som spädbarn för första gången såg dess gyllene stränder och gröna risfält. En tjänarinna förde dig dit under en mödosam färd över det vida havet från länder som du inte har sett sedan dess. Din trogna tjänarinna lade dig, ett föräldralöst barn, på trappan till Klipptemplet och bad för att munkarna skulle ta hand om dig, för hon var svag och döende av en fruktansvärd förbannelse.",
    b2: "Munkarna har bott på ön i flera hundra år och hängivet dyrkat sin gud, Kwon, Han som Säger Maktens Heliga Ord, Den Obeväpnade Stridens Obestridde Herre. De lever enkom för att hjälpa andra att stå emot den ondska som hemsöker världen. När de såg att du var ensam och behövde omsorg tog de dig till sig och du blev en av Klipptemplets noviser. lngen nämnde det underliga födelsemärke, format som en krona, som du har på låret, fastän du minns att den gamla tjänarinnan påstod att det hade en mystisk betydelse. När du har frågat om det har munkarna bett dig att meditera och vara tålmodig. Den äldste och mäktigaste av dem alla, Naijishi, Gryningens Stormästare, blev din fosterfar. Han gav dig ledning och träning i Kwons lugna godhet, i kunskap om människorna och deras sätt, och i att meditera så att ditt sinne lämnar kroppen och rider på vinden på jakt efter sanningen.",
    b3: "Från sex års ålder har dock den mesta av din tid ägnats åt att lära dig Tigerns Väg. Nu är du en Skuggkrigare, en mästare i stridskonst och skicklig på att komma de mäktigaste fiender in på livet, osedd och oväntat. Du är stark, tyst och smidig som en tiger, tålmodig i väntan på bytet och dödlig. I Mångfaldens land och i Människoländerna fruktar och respekterar man de sagoomspunna Skuggkrigarna, vilka kallas ”Männen utan skugga” Blotta tanken på en Skuggkrigare fyller människornas hjärtan med skräck. Men du är en av de få som dyrkar Kwon och följer Tigerns Väg. Du använder din färdighet för att befria världen från ondsinta varelser.",
    b4: "Vid unga år hängde du i dina händer i timmar i sträck från trädgrenar för att stärka armarna. Du sprang ﬂera mil och din lättfotade snabbhet var stor nog att hålla ett tio meter långt band uppe över marken. Du gick på lina, smidig som en apa. Nu simmar du som en fisk och hoppar som en tiger. Du kan röra dig som en lätt vind och glida genom den mörkaste natt som en skugga. lnnan han dog lärde Naijishi dig Skuggkrigarens fördrag.",
    b5: "Jag ska försvinna in i natten, ändra min kropp till trä eller sten, sjunka ned i jorden och gå genom väggar och stängda dörrar. Jag ska bli dödad många gånger och ändå inte dö, ändra mitt ansikte och bli osynlig, gå bland människorna utan att ses.",
    b6: "Det var sedan din fasterfar Naijishi hade dött som du började leva efter fördragets ord. En man kom till ön, Yaeman, Flammans Stormästare. Han använde lånade trollkonster för att lura munkarna att tro att han var en kwondyrkare från Storkontinenten. Han var verkligen en munk, men han dyrkade Kwons andre bror, den Lede, som hjälper de starka att förtrycka de svaga och onda män att härska över dårar. Yaeman dödade Naijishi - ingen kunde mäta sig med honom i strid utan vapen, och han stal Kettsuinrullarna från Templet. Ännu en gång kände du saknadens smärta, för du hade älskat Naijishi som en far. Du svor en ed till Kwon att en gång hämnas hans död. Du har slipat på dina färdigheter genom att hjälpa de förtrampade i Mångfaldens land, men nu är tiden inne för dig att visa vad du kan inför dina munkbröder i Klipptemplet.",
  },
  intro: {
    title: "Tigerns väg del 1 - Hämnaren"
  }
}