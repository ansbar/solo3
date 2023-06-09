import { ILanguagePreGame, ILanguagePages } from "../../interfaces/languageInterfaces"
import { ILanguageOpponents } from "./interfaces"

export interface Texts { languagePages: ILanguagePages, languageOpponents: ILanguageOpponents, languagePreGame: ILanguagePreGame }

export const languageOpponents: ILanguageOpponents = {
  gorobei: "Gorobei",
  humanEater: "Människoätaren",
  piratecaptain: "Piratkaptenen",
  soldiers: "Soldater",
  magician: "Magikern",
  monk: "Munken",
  monks: "Munkarna",
  goblin: "Vätten",
  cobraman: "Kobramannen",
  snowGiant: "Snöjätten",
  giant: "Den tvåhövdade jätten",
  guard: "Vakten",
  olvar: "Olvar Barbaren",
  olvarAndRuneWeaver: "Olvar Barbaren",
  priests: "Präster",
  yaemon: "Yaemon",
  manse: "Manse Dödsmagikern",
  runeweaver: "Runvävaren",
  firstOfTwoMonks: "Den förste av Den Ledes präster",
  secondOfTwoMonks: "Den andre av Den Ledes präster",
  torturer: "Torteraren",
  captain: "Kaptenen",
  olderGod: "Äldre gud",
  efreti: "Efreti" 
}

export const languagePreGame: ILanguagePreGame = {
  intro: {
    title: "Tigerns väg del 1 - Hämnaren",
    copyright: "Copyright Mark Smith & Jamie Thomson 1985",
    illustratedBy: "Illustreringar av Bob Harvey",
    translatedBy: "Översatt av Gunilla Jonsson 1986",
    localCopyRight: "Svensk copyright Äventyrsspel 1986",
    scan: "Scan & PDF Gothmog",
    versionInfo: "Allt innehåll är portat men det finns sannolikt en del buggar kvar. Om du hittar några, har feedback om något eller vill hjälpa till med översättning till andra språk så finns kontaktuppgifter i botten =)"
  }
}

export const languagePages: ILanguagePages = {
  1: {
    mainText: "Solens första strålar hälsar dig när du börjar dina förberedelser inför prövningens tid. Idag blir du den yngste någonsin som aspirerar till titeln De Fyra Vindarnas Stormästare. När din fosterfar Naijishi mördades av Yaemon, tog andre Stormästaren hans plats. Nu, många årstider senare, har en mästare återigen dött och hans plats står ledig, för det måste alltid vara fem som leder orden. Du har erbjudits att göra anspråk på den på grund av din fulländning i Tigerns väg.\n\nVid den avtalade tidpunkten går du ensam över sanden till Klipptemplet. Det är en stor pelarstödd sal, inbyggd i sidan av en väldig röd granitklippa vilken fördes till vila på De Stilla Drömmarnas Ö av isflödena under snöns era, de som karvade ut Stora dalsänkan i den fjärran norden. När du närmar dig templet ser du att munkarna och ett stort antal bybor har samlats för att titta på striden mellan dig och den andre utmanaren, Gorobei. \n\nGorobei är liksom du en Invigd av den Inre cirkeln, en hängiven kwondyrkare och duglig krigare. Han är äldre, tyngre och starkare än du och har misslyckats vid en tidigare utmaning, men han är en skicklig brottare. Du går in i Templet och bugar för Gryningens Stormästare, en man som ser yngre ut än sina femtio år, slank och sträng med genomborrande, mörka ögon. Bredvid dig bugar också Gorobei, hans ansikte är en mask utan känslor. Han är bara klädd i ett ländkläde och de kraftiga musklerna glänser av en olja som kommer att göra det svårt att få grepp om honom. Du måste besegra honom i en strid utan vapen för att få genomgå det andliga prov som ska visa om du är redo att bli Stormästare. Gorobei vänder sig mot dig och bugar och du återgäldar hans artighet. Gryningens Stormästare påminner er om att det inte är en strid till döden och att ni inte får använda Inre Kraft. Han ger tecken på att ni kan börja. Gorobei rör sig försiktigt framåt över det polerade granitgolvet. Hans stora händer är redo att gripa tag i dig. ",
    choices: [
      "Låtsas slå till och använd sedan Tigersprångets spark",
      "Låtsas greppa honom men använd istället Kobraslaget",
      "Höj foten som för att sparka men gå istället åt sidan och använd Virvelkastet",
      "Gör en saltomortal till Gorobeis sida innan du anfaller"
    ]
  },
  2: {
    mainText: "Vakten som går sitt pass på lnre Borggården märker inte att du med en lätt skrapning tvingar upp fönstret till ett förrådsrum. Rummet går ut till en spiraltrappa upplyst av facklor fästade i hållare på den yttre väggen. Halvvägs upp lägger din skarpa syn märker till ett nät av fina trådar som är sträckta över trappan och fästade vid ståltrådar som försvinner in genom hål i den inre väggen. Du går ned på händerna och \"går\" uppför trappan Du känner efter de nästan osynliga trådarna när du passerar och spetsar öronen efter minsta ljud. Till sist är du förbi dem.",
    choices: [
      "Gå vidare"
    ]
  },
  3: {
    mainText: "Kroken fastnar i slottsmuren och du tar ett språng mot vallgravens andra sida. Du faller i vattnet med ett plask och börjar dra dig uppför muren så fort du kan. Vattnet kokar runt dig när de Flytande Munnarna ilar mot sitt byte. Två sitter fortfarande fast vid dig när du drar dig upp. Du förlorar 3 KROPPSPOÄNG när de sliter i ditt kött. Om du fortfarande är vid liv, borstar du undan dem, ställer dig upp och ser dig omkring. Svartalven syns inte till någonstans utan är försvunnen i träsket. Riddaren ligger utbredd på sanden men mannen i blå och gyllene klädnad ﬂyter över vallgraven på ett litet isﬂak.",
    choices: [
      "Gå vidare"
    ]
  },
  4: {
    mainText: "Prästerna springer fram till ﬂodstranden och en av dem får syn på dig och pekar. De börjar slita av sig sina ringbrynjor.",
    choices: [
      "Om du har färdigheten Giftpilar och vill använda den",
      "Om du inte har den eller hellre snabbt vill simma uppströms"
    ]
  },
  5: {
    mainText: "Du ligger i det mörka träsket och när Trollet böjer sig ned och plockar upp dig med klorna, sveper dess stank över dig. Du förlorar 2 KROPPSPOÄNG av den hårdhänta behandlingen när den gör sig beredd att äta upp dig. Om du fortfarande lever när du närmar dig den gapande käften, slår du dina järnärmar i ansiktet på den. Du ser hur det svarta blodet som springer fram ur ögat krymper till en tår när det krossade ögat återformas. Men trollet släpper dig av förvåning och du flyr så fort du kan.",
    choices: [
      "Gå vidare"
    ]
  },
  6: {
    mainText: "Du går genom porten av purpursvart glas och in i själva staden Domedag. Du kan inte påminna dig om att du någonsin har sett så många byggnader, gedigna och höga, med tak av sluttande skiffer och inte av halm. Det finns butiker överallt som säljer fisk, vin och säd. Det finns till och med en slavmarknad. l närheten av Obsidianporten börjar en nyhetsutropare ringa i sin klocka. Han är klädd i brandgult och grönt för att väcka uppmärksamhet och börjar ropa högt om en tapper äventyrare från Domedag som har fått rikliga belöningar och hittat en hemlig väg in i dödsstaden Mortavalon genom att gå in i en grotta bland kullarna som omger staden. Sedan förkunnar han högljutt att armén betalar bra för rekryter, att det inte är krig att men det behövs män för manövrar på Fotslätten. Det ligger rader av barracker inte långt från hamnen.",
    choices: [
      "Om du beslutar dig för att ta värvning i armén för att se vad du kan finna för information",
      "Om du struntar i nyhetsutroparen och går vidare genom staden"
    ]
  },
  7: {
    mainText: "Du tillbringar nästa dag ensam på vakt, men ingen lämnar slottet. Det är fortfarande tio dagar tills månen blir röd vid planetemas förening och du kan se hur förberedelserna börjar på den yttre borggården. Yaemon, Honoric och Manse Dödsmagikern beger sig mot Förändringens pelare imorgon. Dina böner till Kwon om en stormig, månlös natt besvaras och du bestämmer att i natt ska du fullfölja ditt uppdrag eller dö i ett ärofullt försök. Vinden och regnet och mörkret gör det möjligt för dig att ta dig in i slottet som om du var osynlig. Du förbereder dig i stilla meditation och tar på dig din dräkt innan du börjar stirra in i mörkret tills din mörkersyn är lika skarp som en ugglas.",
    choices: [
      "Om du har färdigheten Klättra och vill klättra över slottsmuren",
      "Annars kan du lyfta upp gallret utanför vallgraven och hoppa ned i tunneln under."
    ]
  },
  8: {
    mainText: "Barbaren stelnar till när du lägger pilen på din hoprullade tunga och spottar ut den i en enda flytande rörelse. Pilen genomborrar hans kind, men han har en järnfysik och trots att en grimas av smärta förvrider hans ansiktsdrag, lyckas hans kropp övervinna det kraftiga giftet. Du kan anteckna att han har förlorat 4 KROPPSPOÄNG.",
    choices: [
      "Gå vidare",
    ]
  },
  800: {
    mainText: "Medan du står stilla av förvåning hugger han mot dig och hans svärd skär genom luften mot din axel. Du har 8 i Försvar mot hugget när du höjer din vänstra underarm för att svepa svärdet åt sidan. Om han träffar dig gör svärdet 1T6+1 i skada.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller Bevingade hästens spark",
      "eller Draksvansen"
    ]
  },
  9: {
    mainText: "Trots att kobran kan hugga snabbare än ögat uppfattar, är du ännu snabbare. Du griper tag om halsen på den med ena handen och skär av huvudet på den med en Shuriken du håller i den andra. Manse ligger på rygg, men han kan fortfarande kasta besvärjelser och hans Besvärjelseord ekar i din hjärna när hans magiska kraft återigen börjar verka. Han knyter sin näve och det är som om järnstänger trängde emot dig från alla håll. Hans bleka ansikte darrar av ansträngning när han knyter näven ännu hårdare tills din bröstkorg trycks in. Han öppnar handen och du faller livlös till golvet."
  },
  10: {
    mainText: "Han tittar på dig och nickar, uppenbarligen nöjd. Du sover den natten i den egendomlige munkens grotta. Han har få ägodelar och säger att han inte har sett en mänsklig varelse på åratal, förutom i sömnen. Det verkar som om han lever av luft, för han har inget annat att erbjuda dig än kallt och uppfriskande regnvatten från bergen. På morgonen påstår han att han på något sätt har sett Yaemon, Flammans Stormästare, färdas norrut från staden Domedag tillsammans med Honoric, Vasch-Ros tjänare, Marskalk för Domsvärdslegionen. \"Och de färdas för att möta en tredje,\" säger han, \"Manse Dödsmagikern, som vördar Nemesis. En mäktig och ond magiker. Detta oheliga förbund måste stoppas. Av alla onda gudar har bara den Ledes, Vasch-Ros, och Nemesis anhängare disciplin nog att sluta förbund. Nemesis är den främsta av alla onda gudar. Aldrig förr har tre så mäktiga och onda män litat på varandra.\"\n\"Det är planeternas förening, \" svarar du. Togawa plockar fram en väska med örter från en spricka i berget. \"De här har helande förmågor\" säger han. Du tar dem och kan använda dem när som helst när du inte blir anfallen. Örterna helar upp till 8 KROPPSPOÄNG, men bara en gång. Du tackar honom och ska just fråga om han vill göra dig sällskap när han lägger sig ned på grottgolvet och somnar. Du känner att du inte kan få mer hjälp och börjar klättra nedför berget Gwalodrun till passet nedanför. En dag senare når du högländerna vid Lyckopasset.",
    choices: [
      "Gå vidare",
    ]
  },
  11: {
    mainText: "Din Shuriken sårar bara den första vakten och han ropar ut en varning. Du ser magiska ljus tändas runt slottet som lyktgubbar och beslutar dig för att klättra tillbaka nedför tornet och över vallgraven igen, för att försöka ta dig in i slottet genom gallret som leder till en underjordisk tunnel.",
    choices: [
      "Gå vidare"
    ]
  },
  12: {
    mainText: "Du simmar uppströms, men när du ger dig av börjar de mässa igen och när besvärjelsen verkar, märker du att du inte kan röra dina lemmar. Du ﬂyter stilla nedströms, in i deras välkomnande armar och de binder dig hårt. Om du har en Ring, tar de den ifrån dig. Stryk den från Speltabellen.",
    choices: [
      "Om du har färdigheten Utbrytarkonst",
      "Om du inte har det"
    ]
  },
  13: {
    mainText: "Du försöker hoppa upp och låsa benen runt Kobramannens hals när han slår, för att vrida till och kasta honom till marken, men hans snabbhet överraskar dig ändå.",
    choices: [
      "Du kan angripa honom med Tigertassens slag",
      "Eller Bevingade hästens spark"
    ],
    stillAlive: "Gorobei angriper dig. Ditt försvar mot Gorobeis Kobraslag är 7.",
    miss: "Du inte lyckas kasta Kobramannen"
  },
  14: {
    mainText: "l brådskan går du farligt nära stigens kant. Det förrädiska träsket omger dig helt, dolt i dimman. Gör ett Ödesslag",
    choices: [
      "Om Ödet ler mot dig",
      "Om Ödet vänder ryggen åt dig"
    ]
  },
  15: {
    mainText: "Du säger farväl till soldaten och går raskt bort från slottet.",
    choices: [
      "Gå vidare"
    ]
  },
  16: {
    mainText: "Du går till barackerna och sällar dig till en kö av människor, några unga och Vältränade, andra äldre och lite mer nedgångna. Du väljs ut tillsammans med några av de andra och får visa din skicklighet med svärdet. Det lyckas någorlunda, men inte bra, eftersom du aldrig har fått träning i svärdsfäktning. Ni grupperas och drillas i några timmar innan ni får marschera till era nattbaracker. Du lyckas få reda på att Domsvärdslegionen ska gå till angrepp mot folket i Föraningens spiror men att det finns gott om tid att träna inför striden, för fältherren, Honoric, har lämnat staden för att färdas norrut. När ni lägger er att sova börjar de tala om att plundra Tornen och om allt byte de ska ha med sig hem. Barackerna är bevakade för den händelse några av de nya rekryterna skulle ändra sig i fråga om att ta värvning, men du bestämmer dig för att det inte ﬁnns mer av intresse här och försöker desertera under de lugna timmarna före gryningen. Du virar din svarta huvudduk om huvudet tills bara ögonspringorna syns och tar på dig din svarta dräkt.",
    choices: [
      "Om du har färdigheten Klättra och vill lämna Barackerna via taket",
      "Om du beslutar dig för att smyga upp bakom vakten när de andra sover"
    ]
  },
  17: {
    mainText: "Du går fram som för att slå till och hoppar sedan upp och sveper med foten mot Gorobeis huvud med en otrolig snabbhet. Gorobei är visserligen inte snabb, men han känner till ditt sätt att slåss.",
    choices: [
      "Du kan finta och slå",
      "Finta och kasta",
      "Eller sparka igen"
    ],
    stillAlive: "Gorobei angriper dig. Ditt försvar mot Gorobeis Kobraslag är 7."
  },
  18: {
    mainText: "Han rosslar svagt när ståltråden skär av hans luftstrupe och du sänker försiktigt ned kroppen på golvet innan du ordnar änterhaken och glider ned på gräset på Inre Borggården som omger Stora Kärntornet.",
    choices: [
      "Om du klättrar upp på Kärntornets tak",
      "Om du klättar uppför Kärntomet till den första fönsterraden och tar dig in där"
    ]
  },
  19: {
    mainText: "Aquamarins stora åror förs av två man vardera. Bredvid dig stirrar en roddare tomt på dig. Han var nyligen fri, men har nu bundits vid åran av piraterna. De vita ärren på hans rygg säger dig att han är en av de två som har varit på en slavgalär tidigare. Han har en väldig överkropp med onaturligt bred bröstkorg och små ben som smalnar av mot de små fötterna, något som gör att han liknar en padda. Han talar om för dig att han förslavades som pojke och inte känner till något annat liv än roddardäcket. Han jämrar sig lågt vid tanken på det grymma öde som har drabbat honom och berättar för dig att han var den enda på det förra slavskeppet som levde längre än ett år. Piraterna utser en Slavdrivare och två män med piskor för att övervaka Aquamarins roddardäck. Det verkar som om de ska sälja henne och besättningen i någon laglös hamn. ",
    choices: [
      "Försöka bryta dig fri",
      "Sitta kvar"
    ]
  },
  20: {
    mainText: "\"Se dig omkring\", säger Togawa, \"är det här mitt hem?\" Du stirrar förvirrat på honom. \"Nej, \" fortsätter han, \"mitt hem är min kropp och ditt hem är din kropp.\"",
    choices: [
      "Gå vidare"
    ]
  },
  21: {
    mainText: "Prästerna har slagit läger bland kullarna som omger Mortavalon. I närheten av en grottöppning under ett klipputsprång. Sedan de har ätit vid en liten eld går två av dem bort till platsen där du ligger. l stället för att ge dig mat säger de att de ska föra dig tillbaka till fånghålorna under Vasch-Ros katedral i Domedag, där du kan ruttna bort. Du frågar dem nyfiket varför de för dig dit i stället för till deras eget tempel i Mortavalon.\n\"Eftersom Manse Dödsmagikern, en av Nemesis tjänare och den mäktigaste av alla magiker, färdas norrut för att möta Honoric och Yaemon, som tillhör Röda Syrsans orden, för att bruka stor magi som ska störta världen i mörker och föra oss närmare den dag när vi, Nemesis tjänare, ska styra hela Orb.\"\n\"Yaemon kommer att förråda honom\", säger du. De skrattar och svarar att Dödsmagikern känner alla mäns tankar och kan sitta långt bort och se dem väva sina planer. Så lämnar de dig och gör sig i ordning för att sova. Du sliter med dina bojor i några timmar och lyckas lösa upp dem så att du kan få in dina tummar under repet. Till sist är du fri och bestämmer dig för att krypa in i grottan, så att de inte kan använda besvärjelser för att fånga dig igen.",
    choices: [
      "Gå vidare"
    ]
  },
  22: {
    mainText: "Vakten tvekar, sedan säger han, \"Vänta här medan Jag hämtar de nödvändiga papperen. Du behöver ett passerkort.\" Han ger tecken till en annan soldat att ta över och går in under fällgallret till borggården.",
    choices: [
      "Om du väntar på att han ska komma tillbaka",
      "Om du lämnar slottet för den händelse han har gått för att förbereda en fälla"
    ]
  },
  23: {
    mainText: "Barbaren höjer sin röst till ett stridsrop när han svingar till mot dig i bärsärkarraseri. Han bryr sig inte om dina anfall så länge hans svärd får smaka ditt blod. Dra ett från all skada du gör på honom. Han hugger mot ditt huvud med svärdet, men du går åt sidan, vrider dig och sparkar till med vänster fot mot hans ansikte när svärdet sveper förbi bakom ryggen på dig.",
    choices: [
      "Du kan slå",
      "kasta",
      "eller sparka igen"
    ]
  },
  24: {
    mainText: "När hans fot närmar sig ditt huvud försöker du tvinga upp din högra handﬂata mot hans fotled för att tvinga hans ben över ditt huvud, men du har missbedömt det och din arm klyver luften förbi hans ben. Hans fot slår in i ditt ansikte. Hans INRE KRAFT är förlamande stark och det sprutar blod från din sönderslagna näsa och dina spruckna läppar. Du förlorar 10 KROPPSPOÄNG. Om du fortfarande lever kastas du bakåt av kraften i sparken. Du använder all din viljestyrka för att förtränga smärtan och ta dig upp på fötter, när Yaemon kommer rusande för att angripa igen.",
    choices: [
      "Du har inte tid att sparka, men du kan försöka slå",
      "eller kasta honom"
    ]
  },
  25: {
    mainText: "Kobramannen slår lika snabbt som du när du vrider dig åt sidan och sparkar med foten mot hans bröstkorg.",
    choices: [
      "Du kan finta och slå",
      "Finta och kasta",
      "Eller sparka igen"
    ],
    miss: "Din spark missade, han träffar med sitt hugg"
  },
  26: {
    mainText: "Vid middagstid följande dag har Aquamarin lämnat öarna bakom sig och Storkontinenten hägrar framför er. Ni vänder er norrut och följer den klippiga kusten under några dagar. Du återfår upp till 10 förlorade KROPPSPOÄNG när du vilar medan ni glider över det lugna havet. Det börjar regna lätt nästa dag emedan ni följer kusten längs en stor bukt. Glaivas kommer fram för att tala med dig och pekar på en mäktig ﬂodmynning där Gråbenan rinner ut i havet. Han berättar att hans hemstad, Tor, ligger uppför ﬂoden. Du frågar honom om det finns ett Kwontempel där och han skakar på huvudet, men berättar öppenhjärtigt för dig att hans gudinna är Allmodern, Livsbevararen. Du frågar honom om de städer som ligger bortom Tor vid ﬂoden Gråbenan, men han får ett plågat uttryck i ansiktet. \n”Låt mig istället berätta om Domedag, för det är dit vi är på väg,” säger han. ”Det är en av de största städerna i Människoländerna, med kanske fyrahundratusen själar, och den styrs av Domsvärdslegionen. De flesta spottar när de hör det namnet, men det är en av Orbs starkaste arméer. De dyrkar krigsguden, Vasch-Ro, Han som står för Liemannen, och de sprider fruktan omkring sig i strid. Det finns tempel till andra gudar, men Krigsgudens katedral överskuggar dem alla. Marskalk över Domsvärdslegionen är Honoric, en ond man som aldrig har besegrats i strid. Det sägs att han en gång dräpte en stormjätte ensam. Han är tveklöst en makalös kämpe. Röda Syrsans orden har också ett tempel där. De skickar sina noviser till Nordansnö för att få träning, där de får vänja sig vid alla sorters umbäranden. Yaemon är den främsta krigare som någonsin har lett dem. De använder Avatars kors, Godhetens främsta grundsats, som sin symbol, men med en orm ringlande runt den. Det kan du känna igen dem på om du skulle få syn på en.” \nFöljande dag siktar ni de befästa murarna i Domedags hamn och två långa skepp i svart trä skjuter ut för att möta er. De för Yttre Befästningens, Domedags ﬂottas, flagg. När de kommer närmare får ni order att dreja bi av en högrest man i svart ringbrynja. Kaptenen lyder och seglen slaknar. Han besvarar olika frågor, men när hamnkommendanten frågar vad han ska göra i Domedag tittar han nervöst på Glaivas och slickar sig om läpparna. Glaivas svarar för honom och säger att han har kommit för att sälja galärslavar. Hamnkommendanten ﬂinar, ”Jag tänkte konfiskera ert skepp, men eftersom ni kommer med män som vi behöver, får ni passera genom Yttre Befästningen. Ni får fortsätta.” \nSjälva Yttre Befästningen är ett väldigt porthus, som en fästning, som spänner mellan hamnens murar i en båge. Skeppet glider in under den och gör an vid det livliga varvet. Du tackar Glaivas för hjälpen och hoppar smidigt iland. Han återvänder till Tor för att organisera motståndet mot den Ledes styrkor om du skulle misslyckas med ditt uppdrag. Han slänger till dig en börs som innehåller tio guldstycken och säger, ”Här, du behöver dem. Må Ödesgudinnan le mot dig, Skuggkrigare. ” Du lägger börsen i fickan och vänder in mot staden. Det finns två portar, sida vid sida. Den större är en väldig båge av svart obsidian, som en regnbåge av mörkt glas. Den andra, som är mycket mindre, består av två par vita marmorpelare på vilka en balk vilar med orden ”Gudarnas portal” inskrivna i guld.",
    choices: [
      "Om du väljer att gå igenom Obsidianporten",
      "Om du väljer Gudarnas portal"
    ]
  },
  27: {
    mainText: "Flickan tittar hånfullt på dig, som om du på något sätt var ovärdig. Den gamle mannen skriker åt dig, ”Må Ödet aldrig mer le mot dig.” Han har förbannat dig. Dra ett från din Ödesmodifikation. Du lämnar snabbt kapellet och beslutar dig för att gå in genom Obsidianporten till själva staden.",
    choices: [
      "Gå vidare"
    ]
  },
  28: {
    mainText: "Han fångar upp ståltråden som äter sig in i hans stålhandske och ropar på hjälp. Du dödar honom snabbt, men inte snabbare än att en armborstskäkta från en annan vakt hinner sända dig i döden och du faller handlöst mot gräset nedanför.",
  },
  29: {
    mainText: "Du hoppar över den nu väldiga ädelstenen som rullar nedför trappan bakom dig och måttar en Bevingade hästens spark mot Dödsmagikern innan du landar. Han slungas till golvet som en trasdocka. När han faller kastar han sin ormstav. Den förvandlas till en levande kobra med utspänt huvud och som ringlar mot dig, redo att hugga.",
    choices: [
      "Om du struntar i den och kastar dig över Dödsmagikern för att försöka göra slut på honom",
      "Om du försöker greppa ormens hals innan den kan hugga"
    ]
  },
  30: {
    mainText: "Ett väldigt Troll med vårtig, grön och slemmig hud, kommer rusande ut ur dimman och stannar upp framför dig. Du sparkar och slår för allt vad du är värd, men så snart du åstadkommer ett sår läks det igen på magisk väg. Det uppslitna köttet kryper över benen för att förenas igen och lämnar bara efter sig purpurfärgade ärr. Trollet klöser till dig och du förlorar 4 KROPPSPOÄNG. Om du fortfarande lever, ser det som om du kommer att förlora striden.",
    choices: [
      "Om du vänder dig om och ﬂyr så fort du kan",
      "Om du har färdigheten Spela död"
    ]
  },
  31: {
    mainText: "Du väntar på att vakten ska komma tillbaka när du hör ett svagt gnisslande ljud bakom dig. Du vänder dig om i tid för att se Honoric och Manse Dödsmagikern stiga fram ur en hemlig dörröppning. Du ska just ta fram en kaststjärna, när Manse kastar en besvärjelse och din kropp grips av en darrande förlamning. Du kan inte göra motstånd när Honoric skickligt klyver ditt huvud från axlarna med ett svärd.",
  },
  32: {
    mainText: "Togawa nickar. \"Vilka är dina vapen?\" frågar han\nOm du svarar:",
    choices: [
      "Jag behöver inga vapen.",
      "Mina vapen är allting som existerar."
    ]
  },
  33: {
    mainText: "Du hoppar från båten, högt upp i luften i en graciös båge mot den andra sidan. Folkmassan drar andan av förundran. Gör ett Ödesslag.",
    choices: [
      "Gå vidare",
      "Du hoppar för kort och ramlar i vallgraven"
    ]
  },
  34: {
    mainText: "Krasch! Kaptenens huvud slår i däcket på vägen ned och skallen krossas innan vågorna slukar honom. Nyheten sprider sig snabbt bland piraterna. De avbryter striden för att hoppa tillbaka ombord på Havsgraven och börjar ivrigt slåss för att avgöra vem som ska bli den nye, enväldige kaptenen. Du dyker ned från akterkastellet och simmar snabbt mot Aquamarin, som redan är på väg bort. Dina lungor är på bristningsgränsen när du till sist får tag i en åra och kan häva dig upp över relingen.",
    choices: [
      "Gå vidare",
    ]
  },
  35: {
    mainText: "Du hukar dig som för att brottas med Gorobel, som spänner sig, redo att sätta sin extra tyngd mot din, men du slår oväntat till honom i mellangärdet. Gorobei har lång räckvidd och han är skicklig på att slå och blockera, om än inte lika snabbt som du.",
    choices: [
      "Du kan finta och sparka",
      "Finta och kasta",
      "Eller slå igen"
    ],
    stillAlive: "Gorobei angriper dig. Ditt försvar mot hans Tigertassens slag är 7"
  },
  36: {
    mainText: "Oraklet hasar fram till en bänk vid ingången till det lilla träkapellet som ligger bortom templet till Béatan den Frie. Han vänder sig mot dig och bjuder dig att stiga in. Kapellet är litet och mörkt, men till din förvåning är det rent och välhållet. Bokrullar ligger prydligt staplade i hyllor längs väggarna. Den gamle mannen ropar ett flicknamn och hans lärjunge dyker upp, en förbluffande söt flicka på inte mer än åttio årstider. Medan du undrar vad hon gör hos den böjde gamle mannen i ett kapell som är för litet för att rymma mer än tjugo människor, tar han fram en lång offerkniv med obehagligt utseende. l kapellets mörker blir hans drag stramare och kraftfullare än de var när han grälade med Prästerna. Han ber dig ligga ned på vad som tycks vara en liten marmorsarkofag med en silverkanna stående bredvid. Den unga flickan sträcker sig fram för att leda dig. ",
    choices: [
      "Om du litar på dem och låter henne leda dig",
      "Om du beslutar dig för att snabbt ge dig av"
    ]
  },
  37: {
    mainText: "Trots att du gör allt du kan, förmår du inte ta dig loss från bojorna. Du hör prästerna tala, och det verkar som om de dyrkar Nemesis, Ondskans främsta princip. På något sätt har ryktet om dina undersökningar i Domedag färdats före dig, men du kan inte lista ut varför Nemesis präster är i förbund med Röda Syrsans munkar och med Domsvärdslegionen som följer Krigsguden Vasch-Ro. De återvänder med dig till Domedag, där du förs till fängelsehålorna under Vasch-Ros katedral och kedjas vid väggen. Fångvaktaren bryr sig inte om att ge dig mat eller vatten och inom några dagar är du död.",
  },
  38: {
    mainText: "Du använder återigen änterhaken och tar dig snabbt och tyst uppför väggen. Vid krönet ser du en vakt som har hört den dova dunsen från den ﬁltklädda kroken när den föll ned på murkrönet. Du klättrar åt sidan från kroken genom att ta fäste där murbruket har spolats bort från stenarna och hoppar över muren vid sidan om honom, med strypsnaran redo mellan tänderna. Han svänger runt när du försöker slänga snaran över huvudet på honom. Gör ett Anfallsslag. Han har 4 i Försvar när han höjer armen.",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  39: {
    mainText: "Barbaren har arbetat upp ett bärsärkarraseri och klyver luften i mäktiga hugg med svärdet utan att bry sig om någon smärta. Det enda han är ute efter är ditt blod. Draksvansen överraskar honom när du försöker slå undan benen under honom. Han har bara 4 i försvar när hans svärd hugger i luften över dig.",
    choices: [
      "Du kan slå",
      "eller sparka när Olvar försöker resa sig",
    ],
    unsuccessfulThrow: "Om du misslyckas med att kasta honom, försöker han hugga dig i två delar från pannan till buken när du reser dig. Du har 6 i Försvar mot hans hugg samtidigt som han uppger ett blodisande vrål. Han gör 1T6+1 i skada om han träffar dig",
 
  },
  40: {
    mainText: "Du siktar lite fel och dina Shuriken visslar förbi Yaemons huvud. När de första två försvinner ut i natten slår Yaemon upp med handen och fångar skickligt den sista i ﬂykten. Sedan skickar han tillbaka den mot dig med en knyck med handleden. All din skicklighet krävs för att svepa undan den med underarmen i sista ögonblicket och den ﬂyger iväg med ett vinande ljud. Yaemon väntade sig inte att du skulle parera din egen Shuriken och du har ett ögonblick att handla på.",
    choices: [
      "Du kan använda en Giftpil om du kan konsten",
      "Du kan gå i närkamp med Yaemon"
    ]
  },
  41: {
    mainText: "Du är helt tyst och använder Skuggkrigarens kattgång för att få stegen att verka som om du var på väg åt andra hållet, ut ur träsket. Men den spårar dig endast på lukten och plaskandet från de lufsande stegen kommer allt snabbare.",
    choices: [
      "Om du tar hänsyn till vindriktningen och springer fortare",
      "Om du står kvar och slåss"
    ]
  },
  42: {
    mainText: "Medan Kobramannen med sina locklösa ögon tittar på och vaksamt väntar på att du ska blotta dig, slår du med baksidan av händerna mot den svajande halsen, men du måste vara snabb för att hinna före hans pisksnabba hugg.",
    choices: [
      "Om du vill använda Bevingade hästens spark",
      "eller försöka med Tigertandskastet",
      "eller slå igen. "
    ],
    miss: "Du misslyckas med att hugga till mot hans svajande huvud"
  },
  43: {
    mainText: "\"Se dig omkring,\" säger Togawa, \"är detta mitt hem?\" Du stirrar förvirrat på honom. \"Nej, \" fortsätter han, \"mitt hem är min kropp och ditt hem är din kropp.\"" ,
    choices: [
      "Gå vidare"
    ]
  },
  44: {
    mainText: "När du försöker springa mot prästerna tar deras besvärjelse effekt och dina ben och armar blir som till bly. Din kropp darrar när du med en stor viljeansträngning tvingar dig ytterligare några steg framåt, men de har inga problem att slå ned dig och binda dig ordentligt. Om du har en Ring tar de den ifrån dig. Stryk den från Speltabellen.",
    choices: [
      "Om du har färdigheten Utbrytningskonst",
      "Om du inte har den"
    ]
  },
  45: {
    mainText: "Du duckar undan för Kaptenens svingande morgonstjärna, sedan hoppar du åt sidan när han försöker överraska dig med att slå dig i ansiktet med de tunga guldringar som han har på vänster hand. lnnan du kan angripa honom igen sänks ett kedjenät ned över dig och du faller kämpande ned på däck. Två sjörövare såg dig angripa deras kapten. Eftersom de var hans favoriter sprang de fram för att hjälpa honom genom att slänga ned ett nät från trappan. De binder dig och drar tillbaka dig till Aquamarin där dina Skuggkrigarredskap tas ifrån dig och du binds fast vid en åra.",
    choices: [
      "Gå vidare"
    ]
  },
  46: {
    mainText: "”Vi är alltid redo att hjälpa en av Livsbevararens anhängare,” säger prästen. Du frågar honom om en munk, en av den Ledes tjänare som kallas Yaemon, är i Domedag. Prästen talar om för dig att det berättas i staden att Honoric, marskalk för Domsvärdslegionen, lämnade staden för tio dagar sedan, just när hans män förväntade sig att han skulle leda dem i strid mot folket i Föraningens tom. Han fortsätter, ”Jag vet inte varför han gav sig av så plötsligt, men det måste vara viktigt.” Han gör en paus. ”Men Yaemon då?” frågar du. ”Javisst ja, Röda Syrsans munkar har alltid stått på god fot med dem som dyrkar Krigsguden Vasch-Ro. Yaemon följde med honom på vägen mot Mortavalon. ” Han har inget mer att berätta, annat än att de red och var ensamma. Du tackar honom och lämnar templet.",
    choices: [
      "Om du går genom Obsidianporten",
      "Om du lämnar Domedag genom hamnporten och beger dig mot Mortavalon"
    ]
  },
  47: {
    mainText: "Barbaren faller till sist samman i en hög med benen brutna. Mot slutet verkade det som om han skulle slåss för evigt, men hans stridsrop kommer aldrig mer att bekymra Orbs länder. Runvävare har återfått sin syn och han har tittat på under slutet av striden. Så snart Olvar är död springer han fram och tar diademet med den blå juvelen från Barbarens panna.\n\"Jag tar hand om den här,\" säger han och drar sitt svärd mot dig.",
    choices: [
      "Om du vill slåss om diademet med mannen som du räddade från fågelmännen",
      "Om du vill ta 5 guldstycken från Olvars kropp och låta mannen gå, kan du antingen bege dig mot nordväst ut ur passet mot staden Nordansnö",
      "eller mot staden Druath Glennan",
      "eller mot väster genom Trollkärret till staden Ionalbion för att ta ett skepp över Stjärnans hav"
    ]
  },
  48: {
    mainText: "\"Underhöll du de fattiga utan betalning? Inte så konstigt att jag inte såg dig uppträda. Kom in då\", och han vinkar in dig på borggården, en gård omgiven av höga murar på alla sidor.",
    choices: [
      "Gå vidare"
    ]
  },
  49: {
    mainText: "Det magiska kraftfältet växer, men din kaststjärna har sådan tyngd att den går igenom och slår Manse till golvet. När han faller kastar han ned sin ormstav som förvandlas till en levande kobra med huvudet utspänt. Den krälar fram mot dig, redo att hugga.",
    choices: [
      "Om du struntar i den och angriper Dödsmagikern för att försöka göra slut på honom",
      "Om du försöker hugga tag om ormens hals innan den kan hugga"
    ]
  },
  50: {
    mainText: "Flickan tar din hand i hennes och leder dig till marmorbänken. Den gamle mannen förklarar att han måste spilla lite av ditt blod i silverkalken för att kunna läsa din framtid. Han skär i en ven i din arm och blodet rinner ned i kannan. Du tittar förskräckt på honom när han låter det rinna tills du har förlorat en kvarts liter och det börjar pirra i armen. Dra bort 2 KROPPSPOÄNG. Sedan sluter han såret med en besvärjelse. Flickan häller en grön, magisk vätska i kannan. Du känner dig svag och lyder honom när han ber dig titta i spegeln som hänger på väggen ovanför dig. Han börjar sjunga och tar fram ett kristallprisma som han håller över kannan. Blodet och vätskan bubblar och Oraklets mässande blir högre. En bild av två män som lämnar en stad till häst formas i spegeln. Den större av de två är klädd i en svart ringbrynja och bär en svart sköld prydd med ett silversvärd hängande i en silvertråd, Domsvärdet. Hans ansikte är arrogant och grymt. Den andre är klädd som en krigarmunk, i rött med ett smalt, svart bälte. De rider tysta mot dig och munkens genomborrande, svarta ögon blickar in i dina utan att blinka. Oraklet talar om för dig att visionen visar Yaemon, Flammans Stormästare, som rider med Honoric, Marskalk av Domsvärdslegionen, norrut från Mortavalon. Han berättar för dig att de färdas mot Förändringens pelare för att framsäga ett ord var som ska fängsla en gud och gudinna i Underjorden. Honoric vill styra hela Människoländerna. Du faller i trans och när du vaknar är du utanför Domedag, gående på vägen mot Mortavalon. Du undrar vad Oraklet kan ha gjort medan du var i trans. Har han berättat om din vision för någon? Visionen antydde i alla fall att Honoric och Yaemon är långt framför dig. Du inser att du måste färdas till Mortavalon för att ta reda på var Yaemon och Honoric är.",
    choices: [
      "Gå vidare"
    ]
  },
  51: {
    mainText: "Din hand slår genom luften med blixtens hastighet tre gånger efter varandra och tre Shuriken ﬂyger mot Yaemon. Gör ett Shurikenslag.",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  52: {
    mainText: "Du tömmer Eldödle-essensen på vallgravens yta och det uppmuntrar ox-grodorna att fortsätta kväka.",
    choices: [
      "Gå vidare"
    ]
  },
  53: {
    mainText: "\"Se dig omkring,\" säger Togawa, \"är detta mitt hem?\" Du stirrar förvirrat på honom. \"Nej, \" fortsätter han, \"mitt hem är min kropp och ditt hem är din kropp.\"" ,
    choices: [
      "Gå vidare"
    ]
  },
  54: {
    mainText: "Du vrider din vänstra fot och piskar till med högerfoten i en båge mot Yaemons huvud. Den här gången är han beredd och duckar igen under din svepande fot. När du vänder dig för att möta honom hoppar han upp och kör in sin högerfot i din ljumske, följt av en snabb saxspark med andra benet upp i ansikte på dig. Du faller på rygg på golvet som en säck potatis, omtöcknad. Du förlorar 8 KROPPSPOÄNG.\nOm du fortfarande lever lyfter han upp din handled från marken och vänder ryggen mot dig med benen på vardera sidan om din arm. Han vrider runt och sätter sig bredvid dig med ena vaden över din hals. Du skriker av smärta när han börjar sätta ett väldigt tryck på din arm för att bryta den. Du står emot, men inser att armgreppet är till fördel för honom. Med förvånansvärd smidighet lägger du din vikt på skulderbladen och svingar båda fötterna över huvudet mot Yaemon. Han tvingas släppa dig för att blockera anfallet. När han gör det, för du tillbaka dina ben och tar dig upp på fötter genom att sätta handﬂatorna mot marken bakom huvudet och trycka till hårt, innan Yaemon hinner reagera. Du hoppar utom räckhåll och vänder dig för att möta honom när han tar sig upp på fötter. Du är fortfarande lite virrig och skakar på huvudet för att det ska klarna, precis i tid för att se Yaemon kasta sig mot dig med en hel serie anfall.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "Om inte",
    ]
  },
  540: {
    mainText: "Då du inte har färdigheten Akrobatik måste du blockera Yaemons anfall. Du har 7 i Försvar",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  55: {
    mainText: "Ditt avslutande slag får den siste att falla ihop baklänges mot floden. Du har slagit ihjäl allihop. Vagnarna syns inte till någonstans, men du lägger märke till att en av männen bär en Amulett. Amuletten är en ljus kristall innefattad i en guldbricka på vilken det finns en inskription och magiska runor: \"Den som bär mig kan motstå Dödens Finger.\" Du hänger Amuletten om halsen. Anteckna den på Speltabellen. När du letar igenom deras kroppar hittar du en sliten bokrullelåda. Muttrande en bön till Kwon att skydda dig från besvärjelser, öppnar du den. Papyrusrullen som ligger där, visar att ägaren var en Nemesispräst, \"Ondskans främsta Princip, han som återför allt till Mörker.\"\nDen innehåller en beskrivning av dig. Det var ingen tillfällighet att de angrep dig. Ryktet har på något sätt gått före dig, för deras Nemesistempel ligger i Mortavalon. Du vandrar vidare in i bergsområdet som omger Mortavalon och undrar vem som kan ha kontaktat Nemesistemplet om dig, och varför. När du går runt en krök bland kullarna lägger du märke till en grotta täckt av ett klipputsprång i berget ovanför dig",
    choices: [
      "Om du fortsätter längs vägen mot Mortavalon",
      "Om du hellre går in i grottan"
    ]
  },
  56: {
    mainText: "Han ber dig att ge tecknet för de många vägarna till frihet men du kan det inte. Han gör sig redo att kasta en besvärjelse, men du ber om ursäkt, säger att du ska söka hjälp någon annanstans och lämnar snabbt templet. Oraklet syns inte till någonstans, så du går ut ur helgedomen och in genom Obsidianporten.",
    choices: [
      "Gå vidare"
    ]
  },
  57: {
    mainText: "Du kastar upp din änterhake på slottsmuren. Gör ett Ödesslag.",
    choices: [
      "Ödet ler mot dig",
      "Ödet vänder sin rygg mot dig, missar kroken och du sjunker ned 1 vattnet innan du kan få upp den igen"
    ]
  },
  58: {
    mainText: "Sjörövarkaptenen faller ned på brädorna, död. Två av hans män står i trappan bakom dig, men när de ser att du ensam har dödat mannen som de fruktade går de undan och ropar ut nyheten till de andra piraterna. Sjörövarna överger Aquamarin och återvänder till Havsgraven, där de börjar slåss på allvar för att bestämma vem som ska bli ny enväldig kapten. Du dyker ned i havet från akterkastellet och simmar snabbt mot Aquamarin som redan är på väg bort. Dina lungor är nära att brista när du till sist får tag på en åra i rörelse, och du kan dra dig upp över relingen.",
    choices: [
      "Gå vidare"
    ]
  },
  59: {
    mainText: "Du travar stadigt på i två dagar och håller ett öga på de sågtandade Visionernas berg till höger, innan du kommer in i ett fuktigt och dimmigt land, Trollkärret. Det är ett väldigt träskland och i dimman har du ingen aning om hur lång tid det kan ta att gå runt det mot söder. Du bestämmer dig för att fortsätta genom det och följa spåren av ett litet djur. När du går fram över den blöta marken blir dimman allt tätare och en väldig, mörk skepnad skymtar framför dig. Dimman har dämpat ljudet av dess väldiga fötter i gyttjan. Den stannar och sniffar högt.",
    choices: [
      "Om du vill röra dig försiktigt men snabbt framåt",
      "Om du hellre vill stå stilla och vänta på att den ska hitta dig"
    ]
  },
  60: {
    mainText: "Kaststjärnan hänger i luften framför honom i det magiska kraftfältet som glöder när det absorberar stöten. När du störtar fram för att angripa är han färdig med sin besvärjelse och det väller upp eld inom dig. Det sipprar ut rök genom din mun och näsa när dina lungor och andra inre organ fattar eld. Dödsmagikern har kastat besvärjelsen lnre eld på dig, en besvärjelse som bara de mäktigaste av de onda trollkarlarna känner till, och du kremeras inifrån.",
  },
  61: {
    mainText: "Du höjer foten som för att sparka Gorobei i bröstet, men snurrar istället in bredvid honom och greppar hans arm för att kasta honom över höften. Du förstår snart att du har begått ett misstag, när ditt grepp glider över oljan som täcker honom och han använder sin skicklighet som brottare för att gripa tag i dig och låsa din arm bakom ryggen, samtidigt som han griper dig om strupen. Han är fruktansvärt stark. Du försöker göra en bakåtvolt över honom och bryta greppet men han är beredd på det och trycker ned dig mot golvet innan han ger dig ett kraftigt slag.",
    choices: [
      "Gå vidare"
    ]
  },
  62: {
    mainText: "Vakten tvekar, sedan säger han, \"Vänta här medan jag hämtar de nödvändiga papperen. Du behöver ett passerkort.\" Han ger tecken till en annan soldat att ta över och går in under fällgallret till slottsgården. ",
    choices: [
      "Väntar du på att han ska komma tillbaka",
      "Om du hellre går din väg med tanke på att han kan ha gått för att förbereda en fälla"
    ],
    unsuccessfulThrow: "Om han fortfarande lever, eller om du misslyckades med att ens kasta honom, försöker de kvarvarande prästerna att slå ned dig med sina stridsklubbor. "
  },
  63: {
    mainText: "Du hoppar med fötterna före mot en av prästerna i ett försök att lägga dina fötter runt hans huvud, innan du vrider till för att kasta honom till marken. Du kan välja vilken av dem du angriper.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller en Kluven blixtspark"
    ],
    successfulThrowChoices: [
      "Du använder Tigertassens slag"
    ],
    successfulThrow: "Om du lyckas kan du försöka använda Tigertassens slag på den liggande prästen, som förtvivlat försöker rulla åt sidan.",
    unsuccessfulThrow: "Om han fortfarande lever, eller om du misslyckades med att ens kasta honom, försöker de kvarvarande prästerna att slå ned dig med sina stridsklubbor. Om 3 är i livet har du 7 i Försvar. Om 2 lever har du 8 i Försvar och om bara en finns kvar har du 9 i Försvar Du kan bara blockera ett av anfallen."
  },
  630: {
    mainText: "Du lyckas med kastet och försöker använda Tigertassens slag på den liggande prästen, som förtvivlat försöker rulla åt sidan. Hans Försvar är 2 och om du träffar honom får du lägga 2 till skadan.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller en Kluven blixtspark"
    ],
  },
  64: {
    mainText: "Så snart du träffar vattnet tycks det koka runt dig när Flytande munnar störtar fram för att få tag i sitt byte. Du kämpar, men har ingen chans. Inom en minut är ditt skelett renskrapat från kött."
  },
  65: {
    mainText: "När du lämnar Domedags frånstötande murar och tom stiger solen upp på himlen och skiner ned på mognande majs och kom som vajar i brisen. Åkrarna sträcker sig inte långt och du är snart ute på en låg slätt, Fotslätten, där flera tusen från Domsvärdslegionen, raska och effektiva, övar inför det förestående kriget. Den plana slätten övergår gradvis i vildmark med träd och slingerväxter.",
    choices: [
      "Om du fortsätter på vägen till Mortavalon",
      "Om du går norrut från vägen, ut i vildmarken"
    ]
  },
  66: {
    mainText: "Grottan är kal. Togawa sitter med korslagda ben på golvet och du följer hans exempel. Han ger dig komplimanger för din färdighet i Tigerns väg, men eftersom du inser att han är skickligare än du, ger du honom komplimanger för sparken som dödade Klippmonstret. Han erbjuder sig att visa den för dig. Han kallar den för Kwons slaga, och den är till och med kraftigare än de sparkar som du använder.\nAnteckna den på din Speltabell som en ny spark du har lärt dig. Du kan lägga +1 till din sparkmodifikation för råden som Togawa ger. Du talar om för honom att du är från De Stilla Drömmarnas Ö, berättar om ditt uppdrag och ber honom om hjälp. Han förvånar dig med att fråga, \"Vilket är ditt hem?\"\nOm du svarar:",
    choices: [
      "Jag har inget hem.",
      "Mitt hem är min kropp.",
      "Som jag sade, är jag från De Stilla Drömmarnas Ö.",
      "Jag tror på Kwon, världen är mitt hem."
    ]
  },  
  67: {
    mainText: "lnnan morgonstjärnan når fram slår du upp med benet och driver upp foten i Kaptenens ansikte.\n Du har totalt fyra rundor på dig att besegra honom.",
    choices: [
      "Du kan försöka Tigertandskastet",
      "Du kan använda Kobraslaget",
      "eller sparka igen"
    ],
    stillAlive: "Han anfaller dig med morgonstjärnan. Ditt Försvar mot den pliggade kulan och kedjan är 7"
  },
  68: { 
    mainText: "Han är alldeles för snabb för att du ska kunna använda Tigertandskastet. Du måste bestämma nu om du ska använda INRE KRAFT om du har någon kvar.",
    choices: [
      "Du kan använda Virvelkastet när han rusar fram",
      "eller Draksvanskastet"
    ]
  },
  69: {
    mainText: "Så snart du kan, lägger du en nål på tungan samtidigt som du virvlar fram genom luften för att komma inom räckhåll. När du landar på fötterna spottar du hårt och pilen ﬂyger iväg mot Yaemon. Han gör inget försök att flytta sig, men så, till din förvåning, blåser han den lilla pilen åt sidan, centimetrar från ansiktet. Sedan hukar han sig ned och hoppar upp högt i luften mot dig med vänstra benet utsträckt i en flygande Bevingade hästens spark riktad mot ditt huvud. Han uppger ett väldigt tjut och du inser att han använder lnre kraft.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "Om du inte har det kan du inte göra annat än att försöka blockera sparken."
    ]
  },
  690: {
    mainText: "Då du inte har färdigheten Akrobatik måste du blockera Yaemons anfall. Du har 8 i Försvar",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  70: {
    mainText: "Den unga Lyckoﬂoden rinner nedför en smal dal som ringlar sig som en orm mellan de branta sluttningarna i Visionernas berg. Luften blir svalare när du klättrar och snön börjar falla. Du vänder ut och in på din dräkt så att det vita fodret kamouflerar dig i snön. Du sover gott i passet, trots kölden och får tillbaka upp till 4 KROPPSPOÄNG. På den andra dagen hör du ett rop från andra sidan en brant och du rör dig försiktigt fram för att titta. En krigare håller sitt svärd högt mot en grupp Arocker, fågelmän, som anfaller. När du tittar på slår en grön ljusblixt ut från hans svärd och fäller en av Arockerna.",
    choices: [
      "Om du hjälper krigaren, som är hårt pressad",
      "Om du hellre gömmer dig i snön tills Arockerna ger sig av"
    ]
  },
  71: {
    mainText: "Du försöker köra upp hälen i ljumsken på en av prästerna och sedan sparka upp i ansiktet på honom. Du får välja vem du vill anfalla.",
    choices: [
      "Om du överlever deras anfall kan du försöka använda Tigertandskastet",
      "eller Kobraslaget",
      "eller sparka igen."
    ],
    stillAlive: "Om några fortfarande lever angriper de dig med sina stridsklubbor. Var och en har ett individuellt anfall"
  },
  72: {
    mainText: "Hans veka hand gör en rörelse i luften och en svagt glödande sköld formas framför honom. Du kastar en Shuriken med all din kraft och hoppas bryta igenom hans förtrollade skydd. Gör ett Anfallsslag.",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  73: {
    mainText: "Du ror båten över det slemmiga träsket mot vallgraven, men från det ögonblick då du steg i båten har det runnit in vatten genom sprickorna och när du flyter ut i vallgraven börjar båten sjunka. Till din fasa ser du att vattnet är fullt av Flytande munnar, rovgiriga fiskar som bara består av tänder och en töjbar mage.",
    choices: [
      "Om du har färdigheten Klättra kan du försöka kasta upp din änterhake på miniatyrslottets mur och hoppas kunna klättra uppför repet",
      "Om du är Akrobat kan du försöka göra ett jättehopp till andra sidan vallgraven",
      "Om du inte vill använda de här färdigheterna, eller inte har dem, kan du dyka ned i vallgraven och simma mot slottet"
    ]
  },
  74: {
    mainText: "Du halar dig ljudlöst upp ur vallgraven och börjar den svåra klättringen uppför slottsmuren med hjälp av Kattkloma för att få grepp i varje tänkbar skreva. Du ska just kika över bröstvärnet när de långsamma stegen från en patrullerande vakt passerar ovanför dig. Du hänger ljudlöst kvar och trycker dig mot muren när han oförklarligt stannar för att titta ut över vallgraven. Dina armar värker av ansträngning när han går i väg mot det närmaste tomet efter tio minuter, och du tar dig över bröstvärnet. Du använder änterhaken och repet för att snabbt ta dig ned till Borggården nedanför. Anterhaken lossnar när du skakar på repet och du fångar den. När du ser dig omkring inser du att du bara har tagit dig in på den yttre borggården. Det finns ytterligare en mur mellan dig och lnre borggården som omger Stora kärntornet. Det finns ett smalt hål i väggen som används för att räcka över vapen och mat när porten är stängd.",
    choices: [
      "Om du har färdigheten Utbtytarkonst kan du försöka ta dig igenom det",
      "Annars kan du använda dina färdigheter i Klättring för att bestiga muren till lnre borggården"
    ]
  },
  75: {
    mainText: "Du klättrar upp till taket med hjälp av Kattklorna och öppnar ljudlöst luckan som leder ut på yttertaket. Du klättrar ut under takfoten och ut på skifferplattorna på barackens tak innan du hoppar ned på gatan nedanför. Gör ett Ödesslag.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  76: {
    mainText: "Prästen blir inte förolämpad av din vägran att dyrka hans gudinna, utan han tar dig med till sitt hus i närheten av den stora välvda katedralen, där ni båda serveras ett mål mat. Han berättar för dig att de onda männen som du letar efter i denna stund närmar sig staden Druath Glennan vid den norra kusten av Stjärnhavet. Eftersom det är sent stannar du i hans hus över natten. Du får tillbaka upp till 3 KROPPSPOÄNG under vilan. När du vaknar lägger du märke till att en av dina Shuriken ligger på en stol bredvid din säng. Det finns inga repor eller tecken på att den har använts, men en magisk runa har ristats in på den med syra. Prästen berättar för dig vid frukosten att han har förtrollat kaststjärnan och säger att han ska be att Ödet ska le mot dig. Du kan lägga 1 till tärningsslaget när du använder den Förtrollade Shuriken. Du säger adjö till prästen och beger dig mot den norra porten. lnte långt från huset, när du befinner dig i en smal gränd, rundar plötsligt en herrelös oxkärra hörnet och rullar ned mot dig.",
    choices: [
      "Om du hoppar upp i luften och gör en volt över den så att den passerar under dig",
      "Om du hoppar åt sidan - du kommer att bli träffad men inte krossad under hjulet"
    ]
  },
  77: {
    mainText: "lnnan morgonstjärnan träffar dig driver du in fingrarna i den onda Kaptenens hals. \nDu har totalt fyra rundor på dig att besegra honom",
    choices: [
      "Du kan försöka använda Tigertandskastet",
      "eller Tigersprångets spark",
      "eller ännu ett slag med raka fingrar"
    ],
    stillAlive: "Han anfaller dig med sin morgonstjärna. Ditt Försvar mot kulan och kedjan är 8"
  },
  78: {
    mainText: "När du springer fram för att anfalla, pekar Runvävare med sitt svärd mot dig och uttalar en besvärjelse. Ett klot av grön energi slår ut mot dig från svärdsspetsen.",
    choices: [
      "Om du har färdigheten Akrobatik kan du försöka hoppa upp i luften, göra en volt över den och kasta dig mot krigarmagikern",
      "Om du inte är Akrobat eller inte vill försöka göra det, kan du leda undan den med en Shuriken."
    ]
  },
  780: {
    mainText: "Du försöker leda undan klotet med en shuriken. Klotets försvar är 7.",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  79: {
    mainText: "Ditt försök att infiltrera slottet verkar gå bra, när du efter många äventyr går från Inre borggården till Stora kärntornet. Men trots all din försiktighet har en skarpögd vakt fått syn på dig i ljuset från fullmånen.\nDet strömmar ut män från Kärntornet mot dig och du vänder om för att fly men vägen är blockerad av Honoric och gardeskaptenen. Du dödar kaptenen, men vakterna är snart över dig och du kan inte blockera deras stötar och parera de mäktiga huggen från Honorics svärd på samma gång. Ditt huvud flyger i väg från dina axlar och Honoric står kvar, obesegrad.",
  },
  80: {
    mainText: "Du går fram för att anfalla, men gör plötsligt en volt och landar vid sidan om Gorobei när hans näve sveper i luften över den punkt där du stod. Han vänder sig mot dig, men du har överraskat honom och det blir lättare att anfalla honom än om du bara stod framför honom och utväxlade slag. Du får lägga två till tärningsslaget för det första anfallet.",
    choices: [
      "Om du låtsas slå och sedan använder Tigersprångets spark",
      "eller om du låtsas greppa honom, men istället använder Kobraslaget",
      "eller om höjer foten som för att sparka, men i stället går åt sidan och använder Virvelkastet"
    ]
  },
  81: {
    mainText: "När du klättrar upp till Stormjättevägen blir luften kallare och snön börjar falla. Det finns inga stigar, annat än de som trampats upp av bergsgetter och till och med de är snart igensnöade. Du är vid den högsta punkten i passet när en molnbank samlas ovanför dig. Du tittar upp och ser vad som tycks vara en jättestaty på den närmaste bergstoppen. Snön faller tungt när en blixt slår ut från toppen mot bergssidan ovanför. Det hörs ett plötsligt mullrande och du börjar springa, men den framrusande lavinen som sattes igång av blixten hinner ikapp dig. Du krossas till döds under lavinen.",
  },
  82: {
    mainText: "Dina fingrar slår fram som stålkäppar mot en av angriparna och du hoppas fånga honom i armhålan, där han inte är skyddad av ringbrynjan. Du kan välja vem du vill anfalla.",
    choices: [
      "Om du överlever deras anfall kan du använda en Kluven blixtspark",
      "eller Tigertandskastet",
      "eller slå till igen"
    ],
    stillAlive: "Om några av prästerna fortfarande lever försöker de svinga sina stridsklubbor mot dig."
  },
  83: {
    mainText: "Grottan är mörk och du stirrar in i den tills dina ögon har vant sig vid mörkret innan du ropar Togawas namn. Skelettet av en hjort från de Västra öarna, med nästan 3 meter breda horn, ligger på klippgolvet. De kraftiga lårbenen är uppbrutna för märgen. Du går försiktigt framåt, men stelnar till när du hör något som liknar en oxe som andas tungt. Du står stilla när ett tre meter långt Klippmonster angriper. Du försöker blockera hans tunga slag, men det sveper din arm åt sidan och slänger in dig i grottväggen. Du förlorar 4 KROPPSPOÄNG. Om du fortfarande lever kastar du dig huvudstupa i marken och gör en volt mot monstret, sedan rullar du upp på fötter och slår ut med foten i en enda ﬂytande rörelse. Klippmonstret slår till mot dig och stönar av smärta. Du hoppar undan från hans klor men odjuret tycks vara ogenomträngligt för dina slag och striden fortsätter en stund. Plötsligt dyker en munk upp från ingenstans, mitt ur luften tycks det. Klippmonstret tittar upp när mannen landar precis framför det. Munken snurrar runt åt höger på vänster fot, vänder ryggen åt odjuret och slår till med höger fot runt och upp i Klippmonstrets mellangärde med en snabbhet som knappt ens du kan tro på. Han vrålar till när hans lnre kraft frigörs och sparken fäller Klippmonstret, som skakar grottan när det faller stelt till marken. Munken vänder sig mot dig och bugar. \"Mitt namn är Togawa. Var vänlig följ mig.\" Hans egen grotta ligger en kort klättring ovanför Klippmonstrets och du följer efter honom dit.",
    choices: [
      "Gå vidare"
    ]
  },
  84: {
    mainText: "Du vänder dig åt sidan och riktar med ett vrål en Bevingade hästens spark rakt mot hans huvud. Yaemon, som förutser vad du tänker göra. lägger sig på rygg och kör in sin fot i din ljumske när din spark sveper över huvudet på honom. Du viker dig dubbel av smärta när han lägger sina fötter runt din hals och vrider till i en våldsam cirkel i luften, en variant av Tigertandskastet. Du kan inte kontrollera dig själv för smärtan och faller hjälplöst samman i en hög. Du förlorar 6 KROPPSPOÄNG. Om du fortfarande lever tar du dig upp på fötter så snabbt du kan och hoppar utom räckhåll för Yaemons slag. Men när du stannar upp hoppar han genom luften mot dig, med vänster ben utsträckt i en Bevingade hästens spark.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "Om du inte har det kan du bara försöka blockera"
    ]
  },
  85: {
    mainText: "Blixten träffar dig i sidan. Den bränner ditt kött och stöter till dig som om du hade träffats av en murbräcka. Du slängs in i den bortre väggen och förlorar 8 KROPPSPOÄNG. Om du fortfarande är vid liv, snurrar du genom luften och landar säkert på föttema. Du övervinner smärtan när barbaren rör sig framåt för att anfalla dig med sitt långsvärd.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller Bevingade hästens spark",
      "eller Draksvanskastet",
      "Om du har färdigheten Giftpilar, kan du använda en sådan"
    ]
  },
  86: {
    mainText: "Du smyger ljudlöst som en panter mot den intet ont anande vakten som lutar sig tankfullt mot dörrposten.",
    choices: [
      "Om du smyger upp längs väggen och använder strypsnaran",
      "Om du kastar en Shuriken mot hans strupe"
    ]
  },
  87: {
    mainText: "Du duckar under det svepande klotet och kedjan och hoppar upp i luften i ett försök att lägga fötterna runt hans hals och genom en smidig vridning kasta honom i havet. \nDu har totalt fyra rundor på dig att besegra honom.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller Tigersprångets spark"
    ],
    stillAlive: "Han anfaller dig med morgonstjärnan. Ditt Försvar mot den pliggade kulan och kedjan är 7",
    directWin: "Du har lyckats kasta honom och han slungas över relingen på akterkastellet ned i havet."
  },
  88: {
    mainText: "Det är bara Yaemon som lägger märke till att du lägger pilen i munnen och när du vänder dig om och spottar pilen mot honom knäpper han till med fingrarna och fångar den skickligt mellan tummen och fingret, några centimetrar framför ansiktet. \"Döda honom,\" säger han och Manse Dödsmagikern, som är ivrig att visa sina konster, lyder. Han håller ut händerna mot dig som om han höll i en apelsin och gör några tecken. Till din fasa slits hjärtat ut ur bröstkorgen på dig och ﬂyger till hans hand. Han klämmer det pulserande organet och golvet dränks i blod när du faller död ned.",
  },
  89: {
    mainText: "Du snurrar mot Yaemon och anfaller.",
    choices: [
      "Om du ska du slå",
      "eller sparka",
      "eller kasta"
    ]
  },
  90: {
    mainText: "Hans smäckra händer sveper genom luften och en svagt glödande sköld som stoppar nålen, bildas framför honom. Med glödande ögon som är fyllda av hat börjar han förbereda en ny besvärjelse.",
    choices: [
      "Du beslutar dig för att anfalla honom i närstrid"
    ]
  },
  91: {
    mainText: "Regnet dämpas något när du långsamt tar dig över vallgraven. Du hör knarrandet från vaktens häl mot gruset när han vänder sig för att titta ut över vattnet, oroad av oxgrodornas plötsliga tystnad. Du glider ned under ytan",
    choices: [
      "Ödet ler mot dig vänder sig vakten bort",
      "Ödet vänder ryggen åt dig"
    ]
  },
  92: {
    mainText: "Olvar uppger ett vildsint vrål samtidigt som han struntar i all försiktighet, svingar sitt svärd över huvudet och stöter till mot dig. Han har gripits av bärsärkarraseri och är uppfylld av stridslust. Han känner varken fruktan eller smärta förrän antingen du eller han ligger död. Dra ett från all skada du gör på honom. Du parerar hans svärd med underarmen, går åt sidan och gör ett Kobraslag från höften.",
    choices: [
      "Om du fortfarande lever kan du sparka",
      "eller kasta",
      "eller slå igen"
    ],
    stillAlive: "Om han fortfarande lever svingar han sitt svärd i en väldig båge från vänster till höger och försöker hugga upp din bröstkorg. Du har 8 i Försvar mot det vildsinta hugget när du försöker hoppa bakåt."
  },
  93: {
    mainText: "Vildmarken övergår i gläntor längs Lyckoﬂodens dalgång. Du passerar spåren av underliga djur överallt och när du går i utkanten av en tät och dyster skog hittar du en bred sträng av upptrampat gräs i gläntan. När du böjer dig fram för att undersöka spåren ser du att de har gjorts av en stor grupp halvtroll för några dagar sedan, kanske på väg tillbaka till Klyftan. När du sniffar i luften stapplar en man mot dig, ut ur det midjehöga gräset. Han är gammal och bär en blå kåpa som är i trasor, men det är hans ansikte som gör dig uppmärksam. Det är täckt med blod, för hans ögon har blivit utstuckna. Du ropar till honom och han sätter sig plötsligt ned och säger att han inte har något guld, men däremot en fruktansvärd sjukdom som du skulle få om du åt upp honom. Du försäkrar honom att du inte är en kannibal och frågar honom vad som har hänt. Han säger att han är en munk från Fiendil. Han har förlorat tidsbegreppet, men han tror att han har känt solen fyra gånger i ansiktet sedan en man som kallas Honoric lät sticka ut hans ögon för att han spionerade genom ett nyckelhål. ”Han var tillsammans med en Stormästare av vår orden, en fin man som heter Yaemon och jag såg dem planera en resa på en karta, men Yaemon hörde mig och jag blev infångad. Hjälp mig, jag svälter. Åt vilket håll ligger floden?” Du säger åt honom att gå nedför kullen om han vill hitta ﬂoden, och eftersom du tycker synd om honom ger du honom några nötter som du har plockat. Han kommer bara ihåg att de planerade att möta en tredje man som de kallade Dödsmagikern. Det finns inget mer du kan göra för att hjälpa honom, så du färdas vidare mot Fiendil.",
    choices: [
      "Gå vidare"
    ]
  },
  94: {
    mainText: "Du faller med huvudet före mot marken sju meter ned, svänger runt i luften och landar på fötterna som en katt. Ingen har lagt märke till dig och du glider som en skugga genom natten till stadsporten. Vid porten avleder du vakternas uppmärksamhet genom att kasta en sten som splittrar en glasruta, i närheten av en tjuv som trodde att ingen lade märke till honom. Sedan smiter du ut ur staden vid solen första strålar, medan vakterna springer för att fånga tjuven.",
    choices: [
      "Gå vidare"
    ]
  },
  95: {
    mainText: "Gorobei använder Järnnäven för att slå dig så hårt i nacken att du faller medvetslös till golvet. En ung bypojke häller vatten på din panna när du återfår medvetandet. Några av de yngre noviserna mumlar sitt deltagande när du gnider din nacke. En timme senare kommer Gorobei tillbaka från påklädningsrummet och du applåderar med de andra när han utnämns till Stormästare.",
    choices: [
      "Gå vidare"
    ]
  },
  96: {
    mainText: "Du är ibland dem innan de kan avsluta vadhelst ondsint besvärjelse de hade börjat med och de använder sina stridsklubbor mot dig istället. De bär hela ringbrynjor och är väl skyddade men långsamma.",
    choices: [
      "Du kan använda Tigertandskastet",
      "eller Kobraslaget",
      "eller en Kluven blixtspark"
    ]
  },
  97: {
    mainText: "En av piraterna har fått syn på dig och han kryper längs Havsgravens däck för att hugga av dig händerna med sin kroksabel. Ett svagt klingande från hans många öronringar varnar dig och du hoppar smidigt över relingen upp på däck och fångar hans arm med din vänsterhand när han svingar kroksabeln mot ditt huvud. Sedan använder du Virvelkastet för att kasta honom över relingen. Du vänder dig om och springer uppför trappan till akterkastellet där Sjörövarkaptenen står och leder sina män. Du hoppar uppför de sista stegen för att kunna dyka upp från ingenstans framför honom. Han kliver förvånad bakåt, men återfår snart sin fattning. Han är en högrest man med gråsprängt skägg och guldarmringar som får venerna på hans kraftiga armar att stå ut som strängar. Han svingar sin morgonstjärna mot dig när du går till anfall.",
    choices: [
      "Du kan använda Tigersprångets spark",
      "eller Kobraslaget",
      "eller Tigertandskastet"
    ]
  },
  98: {
    mainText: "När du vadar genom träsket vänder sig Shaggothen med ett vedervärdigt slurpande ljud och Svartalven slår sig fri från de sugande tentaklerna. Hon ler av tacksamhet så att hennes stora mandelögon blir till springor. Ni vänder er för att möta Shaggothen tillsammans, men du slungas plötsligt in i vecken på dess ruttnande kött av ett slag från alvens svärd. Hon skrattar rått och vadar ut till båten medan du förgäves försöker ta dig loss från den slemmiga bestens grepp. Den sjunker långsamt ned i träsket och drar dig med sig. Din näsa och dina lungor fylls med gyttja medan du hjälplöst kämpar. När träsket torkar upp kommer inte ens dina ben att finnas kvar. "
  },
  99: {
    mainText: "Du är bevakad hela tiden, men du har tid att undersöka låset till porten som leder in till lnre borggården och du hittar ett hål i väggen som används till att skicka mat och vapen igenom när porten är låst. \nNär tiden är inne tas du in i själva Kärntornet. Huvudhallen har en stor spiraltrappa som leder till slottets tak och vidare till tre torn. Du föses in i samtalsrummet före middagen för att underhålla Yaemon och Honoric. Manse Dödsmagikern syns inte till någonstans.\nYaemon iakttar dig noga, men Honoric verkar avslappnad och häller vin från en karaff i en guldbägare. Slottskaptenen och hans dam sitter mellan dem. Du sjunger en sång från Människoländerna om tappra krigardåd och förlorad kärlek och din jonglering ger en artig applåd.\nSå snart din föreställning är slut ger Kaptenen signal och din eskort, två vakter, föser ut dig ur samtalsrummet just när Manse kommer in genom den motsatta dörren.",
    choices: [
      "Om du har färdigheten Gittpilar kan du använda den mot Yaemon",
      "Om du inte har den eller inte vill använda den kan du låta vakterna eskortera dig ut ur slottet"
    ]
  },
  100: {
    mainText: "När du knäfaller framför det stora altaret bland de många valven i katedralen med domen, godtar Ödesgudinnan dig som hennes tjänare. På samma gång tar din egen gud, Kwon, avstånd från dig och din INRE KRAFT tas ifrån dig så att du försvagas. Det bekymrar dig inte, för nu vet du att det var ödesbestämt att det skulle ske, och det är meningslöst att ångra det. Ditt uppdrag att döda Yaemon ter sig oviktigt och du tillbringar stilla dagar i Fiendil som präst i katedralen, tills till och med stadens lugna folk en dag tycks upprörda. Ett stort mörker, en lång natt utan dag, följs av nyheter om att den fruktade Domsvärdslegionen och Röda Syrsans munkar har intagit Föraningens torn och är på marsch mot Fiendil. Det är för sent. Kwon är fjättrad i Inferno men ditt misslyckande bekymrar dig inte."
  },
  101: {
    mainText: "När du går genom portalen längst ned i trappan ser du Yaemon på taket till Stora kärntornet. Han bär en tatuering av Syrsan på pannan och är klädd i Röda Syrsans röda ordensjacka och löst sittande byxor.\nHan är i medelåldern, men kroppen är smidig och kraftfull. De spända musklerna på underarmarna spelar när han knyter nävama. Han bugar sig för dig och säger sedan, \nDu har gjort ditt värv, Skuggkrigare.\n Du återgäldar hans bugning och säger, \"Mitt uppdrag är ännu inte fullgjort.\"\nHan ler och säger, \"Jag dödade din andlige fader, liksom jag dödade din verkliga far när du var ett spädbarn. Nu ska jag döda dig.\"\nlngen har någonsin talat med dig om din fars död, men Yaemons ord får bara längtan efter hämnd att brinna starkare inom dig. Du bemästrar din vrede och lugnar ned dig, redo att slåss. Yaemon har varit Flammans Stormästare längre än du har levat. Du kommer aldrig att möta någon som är skickligare i den dödliga Syrsans väg. Hans kropp är på toppen av sin förmåga och hans vilja är stark. Du rör dig mot honom och inser att det här kommer att bli en strid som inte liknar någon annan. Yaemon har 20 i KROPPSPOÄNG.",
    choices: [
      "Om du rusar fram och anfaller",
      "Du kan gå närmare och använda Giftpilar",
      "Du kan kasta 3 Shuriken i följd"
    ]
  },
   102: {
    mainText: "Amuletten splittras, bitarna glänser när de faller nedför trappan som bitar från en splittrad vas. Dödsmagikern är förvånad över att du stod emot hans infernaliska trollkonst, men han börjar förbereda en annan besvärjelse. Hans åldriga ord frammanar visioner av förmänsklig ondska och illviljan hos länge sedan glömda gudar.",
    choices: [
      "Du kan använda en giftpil",
      "Annars kan du gå till angrepp",
      "eller kasta en Shuriken"
    ]
  },
   103: {
    mainText: "Du vänder dig om och springer men, när de avslutar sin ondskefulla besvärjelse blir dina rörelser långsammare, lemmarna känns tunga som bly och det är bara med stor ansträngning som du kan få dem att röra sig överhuvudtaget. Du stapplar fram till floden och försvinner ur sikte bakom några sävsnår.",
    choices: [
      "Du kan glida ned i ﬂoden och hålla dig under ytan genom att andas genom det smäckra bamburöret",
      "Om du hellre rullar ned en sten i ﬂoden och långsamt krälar bort genom säven"
    ]
  },
   104: {
    mainText: "\"Ja,\" säger vakten, \"det är en vacker stad. Jag seglade dit en gång med ett skepp. Kom in då..\" Du tackar honom och går in under fällgallret till borggården bakom.",
    choices: [
      "Gå vidare"
    ]
  },
  105: {
    mainText: "Din Shuriken ﬁnner sitt mål. Vakten slänger upp handen mot strupen och skriker innan han faller ihop på golvet, död. Du inser att larmet kan ha gått, så du lämnar kvar kaststjärnan och springer ut ur barackerna mot stadsporten. Stryk en Shuriken från Speltabellen.",
    choices: [
      "Gå vidare"
    ]
  },
  106: {
    mainText: "Barbaren stelnar till när du lägger pilen på din hoprullade tunga och spottar ut den i en enda flytande rörelse. Pilen genomborrar hans kind, men han har en järnfysik och trots att en grimas av smärta förvrider hans ansiktsdrag, lyckas hans kropp övervinna det kraftiga giftet. Du kan anteckna att han har förlorat 4 KROPPSPOÄNG.",
    choices: [
      "Gå vidare",
    ]
  },
  1060: {
    mainText: "Medan du står stilla av förvåning hugger han mot dig och hans svärd skär genom luften mot din axel. Du har 8 i Försvar mot hugget när du höjer din vänstra underarm för att svepa svärdet åt sidan. Om han träffar dig gör svärdet 1T6+1 i skada.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller Bevingade hästens spark",
      "eller Draksvansen"
    ]
  },
  107: {
    mainText: "Du svingar dig över relingen utan att någon ser dig och springer uppför trappan till akterkastellet där Sjörövarkaptenen står och leder sina män. Du hoppar uppför de sista trappstegen, så att du dyker upp framför honom som från ingenstans. Han kliver bakåt av förvåning, men återfår snart fattningen. Han är en storväxt karl med gråsprängt skägg och guldarmringar som får venerna på de kraftiga armarna att stå ut som rep. Han svingar sin morgonstjärna när du rör dig framåt för att anfalla.",
    choices: [
      "Du kan använda Tigersprånget",
      "eller Kobraslaget",
      "eller Tigertandskastet"
    ]
  },
  108: {
    mainText: "Du använder andningsröret för att få luft, men efter tio minuter i den frysande vallgraven bestämmer du dig för att riskera att krypa upp och börja klättra. Änterhaken, som är lindad med ﬁlt, fastnar och du tar dig snabbt och ljudlöst upp till bröstvämet. När du kikar över bröstvärnet grips du av en egendomlig skräck och för ett ögonblick är du stel av rädsla. Det är tillräckligt för att Honoric ska hinna begrava sitt Magiska svärd, Sorcerak, i ditt huvud och du faller tillbaka ned i vallgraven, död. En av vakterna hörde dig i vallgraven när grodorna slutade kväka.",
  },
  109: {
    mainText: "Du griper med händerna om dess underarm - den är för ohanterlig för att hoppa undan, men i stället slår det upp eld över hela dess kropp och du blir svårt bränd. Du förlorar 4 KROPPSPOÄNG. Om du fortfarande lever när du hoppar bakåt, oförmögen att göra något Virvelkast, träffas du av dess glödande näve. Ditt Försvar när du försöker kasta dig åt sidan är 6.",
    choices: [
      "Du kan använda Järnnävens slag",
      "Eller Tigersprångets spark"
    ]
  },
  110: {
    mainText: "Ditt sista slag får Gorobei att falla ihop medvetslös på granitgolvet. En våg av applåder hörs vid din seger och Gryningens Stormästare gratulerar dig för dina framsteg i stridskonsten och bjuder dig att stiga in i påklädningskammaren. Du går in bakom silkesdraperierna längst ned i Tempelsalen och in i ett litet mörkt rum, helt utan möbler förutom två väldiga kopparkistor. Det brinner rökelse i ett kar som svänger som en pendel från taket. Rummet är upplyst av vita ljus. Du knäböjer på sävmattan som är vänd mot de tre Stormästarna. De stirrar rakt fram utan att se och väntar på att du ska bryta tystnaden, som du är fast besluten att hålla. Efter det att ett timslångt ljus har brunnit ned, utan att någon har rört så mycket som en muskel, ser Gryningens Stormästare dig i ögonen och säger, ”Kwon vet att du önskar i ditt hjärta att tjäna honom, men jag måste ställa två frågor till dig. Vill du verkligen tjäna Kwon över allt annat, eller längtar du efter att hämnas din fosterfader Naijishis död, till och med mer än du önskar tjäna din gud? Vad ska en Skuggkrigare frukta mest - att misslyckas med ett uppdrag eller att fängslas av en fiende som använder tortyr för att få veta hemligheter?” Du vet längst in i ditt hjärta att du hellre skulle hämnas Naijishi än något annat på Orb, men en Stormästare bör ägna sitt liv åt Kwon. l den andra frågan kan du bara låta sunda förnuftet leda dig.",
    choices: [
      "Om du svarar: ”Jag vill tjäna Kwon mer än något annat och jag fruktar bara att misslyckas med ett uppdrag”",
      "Om du svarar: ”Jag vill hämnas den far som älskade mig och jag fruktar tortyr mer än något annat”",
      "Om du svarar: ”Jag vill hämnas den far som älskade mig och jag fruktar bara att misslyckas med ett uppdrag”",
      "Om du svarar: ”Jag vill tjäna Kwon mer än något annat och jag fruktar tortyr mer än något annat”"
    ]
  },
  111: {
    mainText: "Snöjätten faller ned på isen med ett brak och rör sig inte. Hans blod fläckar den frusna ytan rosaröd. När du ﬂämtar efter andan och ser dig omkring, ser du att riddaren är död, förgiftad av Kobramannen som jagar mannen i blå och gyllene klädnad. Du ﬂyttar dig till vallgravssidan av isen och lyckas bryta loss ett litet isﬂak från kanten. Du knuffar iväg det mot slottet och hoppar upp på det. När du tittar ned i vallgraven ser du att den är fylld av Flytande munnar, en rovgirig fisk som bara består av tänder och en tänjbar buk. När du lugnt flyter över tar mannen i blå och gyllene klädnad upp en lång påle och lyfts med hjälp av sin magi smidigt upp i luften. Publiken applåderar honom. Han knuffar sig mot slottet med pålen och ni kommer fram till andra sidan vallgraven tillsammans.",
    choices: [
      "Gå vidare"
    ]
  },
  112: {
    mainText: "Du spatserar över borggården mot Förvaltarens kontor. De två männen i svarta resekläder, Honoric och Manse Dödsmagikern, pratar med Gardeskaptenen och en grupp av hans män. Du stannar för att titta på håll när Honoric, en kraftigt byggd man med ett arrogant och grymt utseende, lånar Kaptenens vapen och erbjuder soldaterna att anfalla honom. Flera gör så på en gång, men det går inte att komma förbi hans blixtrande svärd. Han awäpnar tre av dem och slår tillbaka resten. Allt de kan göra är att parera hans hugg och du vet att han skulle kunna döda dem om han ville. Manse grinar illa när han ser på uppvisningen och förvandlar Honorics svärd till en tulpan genom att peka på det. Gardeskaptenen kan inte låta bli att skrocka vid åsynen av den väldige mannen, Fältmarskalk över Domsvärdslegionen, hållande i en tulpan som han ska prygla soldaterna med. Honoric blir röd av vrede, slänger blomman och drar sitt eget väldiga, svarta svärd. Du grips av en ilning av skräck och vakterna kurar ihop när en slöja av skräck sänker sig över slottet. Det förhäxade svärdet ryker lätt och tulpanen har förvandlats tillbaka till ett svärd.\"Var är din magi nu, Dödsmagiker, dina besvärjelser fungerar inte när Sorcerak är draget\", säger Honoric. Dödsmagikerns ögon blir till springor och hans bleka, magra ansikte tycks blekna ännu mer när han yttrar en annan besvärjelse. Ingenting händer och Honoric vänder sig om och går mot slottet, samtidigt som han stoppar tillbaka Sorcerak i skidan. När han öppnar porten in till lnre borggården får du syn på ett torn på slottets baksida som tycks vara delvis raserat. Det skulle vara lätt att klättra uppför det. Förvaltaren talar om för dig att de har hyrt \"en riktig bard\" för imorgon, men när han har hört dig sjunga och sett dig jonglera säger han att du kan göra ditt nummer vid middagen i kväll.",
    choices: [
      "Gå vidare"
    ]
  },
  113: {
    mainText: "Du hasar tillbaka nedför de steniga sluttningarna till Lyckopassets botten.",
    choices: [
      "Du kan vända tillbaka söderut och ta dig utefter bergen mot staden Fiendil",
      "Eller fortsätta genom Lyckopasset"
    ]
  },
  114: {
    mainText: "Han ser den dödliga avsikten i dina ögon ett ögonblick innan ditt slag träffar, men accepterar stoiskt döden. Hans nacke är bruten, men han kan fortfarande tala och har uppenbarligen godtagit sitt öde.\n \"Det var förutbestämt att du skulle döda mig så, Hämnare.\" Det verkar ändå som om Ödesgudinnan inte är nöjd. Eremiten vördade henne och hon vänder ryggen åt dig för det okänsliga dådet som hon visste att du skulle utföra. Du känner nästan hur din tur sviker dig, dra ifrån 2 från din Ödesmodifikation. Du kan inte låta bli att förbanna alltings meningslöshet när du går vidare in i staden. Folk ler när du går förbi, något som ingen har gjort i de andra städerna. De tycks ﬂyta förbi dig med det obekymrade lugnet hos dem som har godtagit att deras öde redan är bestämt.",
    choices: [
      "Gå vidare"
    ]
  },
  115: {
    mainText: "Sedan natten har fallit sliter du i dina bojor, men din enda belöning är en kyss från piskan. Du somnar utmattad före gryningen och när du vaknar har du järnbojor kring handlederna och ett järnband runt midjan som är fastkedjat vid åran. De är tunga och omöjliga att bryta upp. De kommer inte att tas av förrän din kropp är slutkörd och livlös efter flera år vid åran."
  },
  116: {
    mainText: "Du stannar tyst upp bakom vakten, redo att slå till. Med förblindande snabbhet lägger du strypsnaran runt hans hals. Vakten dör utan ett ljud när ståltråden gör ett prydligt snitt genom hans luftstrupe och du smiter ut från Barackerna och glider som en skugga genom natten till stadsporten. Vid porten avleder du vakternas uppmärksamhet genom att kasta en sten som krossar en glasruta i närheten av en tjuv, som trodde att ingen hade sett honom. Sedan smiter du ut ur staden i det första gryningsljuset, när vakterna springer för att ta fast honom.",
    choices: [
      "Gå vidare"
    ]
  },
  117: {
    mainText: "När pulvret kommer i kontakt med elden slår en lysande blixt upp. Du skyddade dina ögon, men Olvar är för ögonblicket förblindad. Barbaren backar ut genom dörren och du följer efter med en Bevingade hästens spark i bröstet på honom. Han kastar upp armarna och faller baklänges i snön. Anteckna att han har förlorat 5 KROPPSPOÄNG, för du har brutit några av hans revben. Du ska just springa ut i snön och göra slut på honom när en blå ljusblixt slår ut från ädelstenen på hans panna mot dörröppningen. Du hoppar bakåt i luften, gör en volt när blixten passerar under dig och landar upprätt, vänd mot dörren.\nOlvar har återfått synförmågan och rusar in.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Kobraslaget",
      "eller Draksvanskastet",
      "Om du har färdigheten Giftpilar och vill använda en"
    ]
  },
  118: {
    mainText: "Han slår till med höger hand mot vänstra sidan av din hals. Du för upp benet i en båge från vänster till höger och för hans hand åt sidan, men han drar tillbaka den och hugger igen på andra sidan av din hals. Du får snabbt ge vika och vrider upp armen över bröstet för att ta emot slaget med underarmen. Med obeveklig snabbhet sluter Yaemon sin hand och slår rakt upp med näven, i ett försök att driva upp sina knogar i din näsa. Du är hårt pressad, men lyckas få upp underarmen över huvudet precis i tid för att ta emot slaget. Ett ögonblick senare slår han upp med sidan av höger fot mot din strupe i en Bevingade hästens spark, men med en snabbhet född ur desperationen lyckas du slå undan hans fot med din vänstra hand. Kraften från sparken får honom att virvla runt och du tar chansen att hoppa utom räckhåll, medan ekot från hans vrål ekar i natten. Yaemon vänder sig för att möta dig och du tar tillfället i akt att göra ett motanfall.",
    choices: [
      "Om du sparkar",
      "eller slår",
      "eller kastar"
    ]
  },
  119: {
    mainText: "Flammor slår upp över dess massiva kropp när Elementarvarelsen försöker gripa tag i dig. Du sparkar med all din styrka i hopp om att göra någon verkan på den glödande kolossen. Om du lyckas träffa den, måste du dra ett från dina KROPPSPOÄNG, eftersom ﬂammorna bränner din fot.",
    stillAlive: "Om Efretin fortfarande står framför dig försöker den slå dig till marken med båda sina väldiga nävar. Ditt Försvar mot dessa hammarslag är 7.",
    choices: [
      "Du kan använda järnnäven",
      "eller Virvelkastet",
      "eller sparka igen"
    ]
  },
  120: {
    mainText: "Du höjer dig ljudlöst ur vallgraven och klättrar lätt till toppen av det förfallna tornet, piskad av vinden och regnet. När du kikar över bröstvärnet ser du två vakter som står vid en eld som har tänts under en stor tjärad segelduk. Elden brinner en bit från trappan som leder till den lnre borggården som omger Stora Kärntornet. Du duckar bakom bröstvärnet igen och hänger där när molnen splittras så att månen skiner igenom. Fem minuter senare är månen dold igen och du kryper ljudlöst över bröstvärnet upp på tornets tak.",
    choices: [
      "Kastar du en Shuriken på en av vakterna och springer fram för att använda strypsnaran på den andra?",
      "Om du kastar en liten sten i elden",
      "Om du har något blixtpulver kvar, kan du kasta in det i elden"
    ]
  },
  121: {
    mainText: "Du griper tag i den lilla båten, medan Shaggothen långsamt sjunker ned i gyttjan och drar med sig den kämpande Svartalven. Hon ger ifrån sig ett bubblande skrik när hon långsamt sjunker under ytan. Till ditt förtret är båten full av sprickor och hål och den har släppt in en hel del träskvatten.",
    choices: [
      "Om du hoppar i och försöker ro ut i vallgraven",
      "Om du överger den och drar dig över sanddynerna"
    ]
  },
  122: {
    mainText: "Det är svårt att gå när du rör dig i utkanten av de grova kullarna vid foten av Visionernas berg och resan tar flera dagar längre tid än du hade väntat dig. Efter den längsta dagens slit som du hittills har tvingat dig igenom, faller mörkret. Månen är röd och det kommer ingen mer dag. Du är för sent ute. Det eviga mörkret har fallit och Kwon har fängslats i lnferno. Din INRE KRAFT försvinner och det finns ingenting du kan göra för att stoppa ondskan från att växa. Du har misslyckats.",
  },
  123: {
    mainText: "Prästerna springer fram till ﬂodstranden och stirrar ned i vattnet på den plats där stenen föll i. Trögheten försvinner och du glider genom sävsnåren och iväg när de tittar ned. En tar av sig sin ringbrynja för att undersöka ﬂodens djup när du försvinner upp bland kullarna som omger staden Mortavalon Du kommer upp på vägen igen och när du rundar en krök ser du en grotta under ett klipputsprång ovanför dig. ",
    choices: [
      "Om du fortsätter rakt fram till Mortavalon",
      "Om du går in i grottan"
    ]
  },
  124: {
    mainText: "\"Aha, jag var också i Druath. Synd att jag missade dig. Var sjöng du?\"",
    choices: [
      "Om du svarar: På Allmodems härbärge",
      "På Hydrans Huvuden",
      "På Stora torget"
    ]
  },
  125: {
    mainText: "Du glider genom natten mot stadsporten, men någon har sett dig. Larmet går vid barackerna när du närmar dig porten och facklor ﬂammar upp på porthusets torn och några kastas ned på gatan nedanför. Du hör det omisskännliga ljudet från ett armborst och svänger runt mot ljudet.",
    choices: [
      "Om du har färdigheten Slå av pilar",
      "Om du inte har det"
    ]
  },
  126: {
    mainText: "Du har använt din Utbrytarkonst för att spänna kroppen och hålla armar och ben så att repen lossnar när du slappnar av, trots att piraterna band dig ordentligt. Du vrider och vänder på dig och använder din otroliga smidighet för att ta dig loss ytterligare. Du drar en axel ur led och lyckas frigöra en arm. Sedan kan du snabbt ta dig loss ur repen som håller dig. l mörkret på roddardäck är du tacksam för dieten som har gett dig förmågan att se i mörker. Vakten hör inte när du smyger förbi de sovande kropparna vid årorna, förrän du är nära nog att lägga en bit kedja som fanns till hands runt hans hals och kväva honom tills han förlorar medvetandet. Han faller ihop utan ett ljud. Du kliver över kroppen fram till kistan där de har lagt undan dina skuggkrigarredskap och tar tillbaka dem. En efter en befriar du besättningen och säger åt dem att vänta tysta på ett tecken från dig, medan du går till huvudkabinen för att se om Sjörövarkaptenen sover ombord på sitt byte. Du klättrar tyst uppför trapporna till huvuddäck och väntar på att månen ska försvinna bakom ett moln. Du når kabinens dörr utan att någon lägger märke till dig.",
    choices: [
      "Kan du Dyrka upp lås? Om du kan och vill göra det",
      "Om du inte kan eller inte vill, kan du använda INRE KRAFT att slå upp dörren med"
    ]
  },
  127: {
    mainText: "Blixten sveper förbi dig och bränner plankorna i stugan. Runvävaren var närmare blixten än Olvar, så hans syn kommer inte tillbaka än på ett tag. Du hoppar fram och anfaller barbaren som står beredd med sitt svärd och skakar på huvudet för att se bättre.",
    choices: [
      "Du kan använda Kobraslaget mot hans oskyddade hals",
      "eller den Bevingade hästens spark",
      "eller Draksvanskastet",
      "eller, om du har färdigheten Giftpilar, kan du använda en"
    ]
  },
  128: {
    mainText: "Stormästaren skakar på huvudet. ”Du har varken svarat sant eller vist. Du kan inte dölja din vilja att hämnas Naijishi, som älskade dig och lärde dig att älska Herren Kwon, från oss som har känt dig nästan hela ditt korta liv. Det är inte fel av dig att vilja hämnas Naijishi, men du måste vänta tålmodigt på att din tid ska komma och aldrig glömma, att tjäna Kwon är att hjälpa hela mänskligheten. Vad gäller tortyren, är det bara genom att misslyckas med ett uppdrag som en sann Skuggkrigare kan fångas och det ﬁnns alltid tid att bita av sig tungan och blöda till döds för att undvika risken att förråda hemligheter. Du behöver bara frukta att misslyckas med ett uppdrag. Du har misslyckats med det andliga provet och är ännu inte redo att bli en De Fyra Vindarnas Stormästare. Gå tillbaka till Tempelsalen och be Gorobei komma in till oss.” \nDu återvänder modfälld till huvudtemplet och det hörs ett svagt jämmer från byborna när du ber Gorobei att gå in i påklädningskammaren. Han lägger armen om dina axlar och säger, ”Nästa gång,” innan han går in bakom silkesförhänget. En timme senare kommer han tillbaka och du applåderar med de andra när han utnämns till Stormästare. ",
    choices: [
      "Gå vidare"
    ]
  },
  129: {
    mainText: "Hästen påverkas också. Den saktar ned till en strävsam lunk och gnäggar gällt av skräck. Din kropp darrar när du kämpar för att röra dig, men inte lyckas. Prästerna, för du vet att det är prästmagi, slår dig ur sadeln och binder dig ordentligt. Om du har en Ring tar de den ifrån dig. Stryk den från Speltabellen.",
    choices: [
      "Om du är skicklig i Utbrytarkonst",
      "Om du inte är det"
    ]
  },
  130: {
    mainText: "Du går genom portalen som leder till tornet krönt av den Svarta Virvelströmmen. Spiraltrappan är upplyst av ett olycksbådande, grönt sken och du ser ett rött öga som hängeri tomma intet längst upp i stentrappan. Det glöder och ögonvitan är fasansfullt rödsprängd. Det blinkar en gång, sedan försvinner det när dörren till kammaren ovanför slängs upp. Manse Dödsmagikern reser sig högt över dig längst upp i trappan. Hans onaturligt vita hudfärg lyser spöklikt grön i ljuset. Hans ögon glöder blodsprängt röda och han bär en svart stav krönt av ett kobrahuvud i grön, snidad jade. \nInnan du hinner röra dig pekar han med ett långt finger mot dig och säger kallt, \"DÖ!\"",
    choices: [
      "Om du har Amuletten som skyddar mot Dödens Finger",
      "Om du inte har den"
    ]
  },
  131: {
    mainText: "Den glödande elementaren är klumpig och du kan knappast missa. Du är bara orolig över att den kanske inte känner smärtan från ditt slag. Dra ett från dina KROPPSPOÄNG om du träffar den, eftersom din hand blir bränd av ﬂammoma som slickar dess kropp.",
    stillAlive: "Om Efretin fortfarande står upp framför dig, försöker den köra in sin ﬂammande näve i din bröstkorg. Ditt försvar mot slaget när du försöker snurra runt åt sidan är 7.",
    choices: [
      "Du kan använda Tigersprångets spark",
      "eller Virvelkastet",
      "eller slå igen"
    ]
  },
  132: {
    mainText: "Regnet dämpas något när du tar dig fram över vallgraven. Du hör knarrandet från en vakts fötter på gruset när han vänder sig om för att titta ut över vattnet, oroad av oxgrodornas plötsliga tystnad. Du glider ned under ytan. Gör ett Ödesslag.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  133: {
    mainText: "Bergssidan höjer sig över dig och du inser att det kommer att bli en farlig klättring.",
    choices: [
      "Om du vill fortsätta lägger du ditt liv i Ödesgudinnans händer",
      "Om du hellre låter bli att ta risken och ger upp möjligheten att hitta Togawa, om han fortfarande lever"
    ]
  },
  134: {
    mainText: "När du närmar dig den sjunkna plattformen som skiljer träsket från öknen, nära arenans mur, börjar det bubbla i gyttjan framför dig. Du ändrar riktning, sätter foten på en mossbelupen liten kulle, kastar dig upp i luften och hoppar över det höga stängslet av järnspikar. Folkmassan drar andan igen. Du landar på fötterna och blickar ut över arenan ett ögonblick. Svartalven och Shaggothen syns inte till någonstans. Mannen i blå och gyllene klädnad har dräpt Snöjätten men riddaren i rustning ligger i en oroande ställning på sanddynerna med Kobramannen lutande över sig. En lång, smal träpåle står nedstucken i en sanddyn i närheten av riddarens kropp. Du bestämmer dig för att angripa Kobramannen för att komma över pålen, i hopp om att kunna hoppa över vallgraven med den. Kobramannens huvud svajar hypnotiskt över dig, han är beredd att hugga till.",
    choices: [
      "Om du använder Tigertassens slag",
      "eller Bevingade hästens spark",
      "eller Tigertandskastet"
    ]
  },
  135: {
    mainText: "Prästerna sitter av hästarna och börjar recitera en ondskefull besvärjelse medan de långsamt går fram mot dig. Dina lemmar känns tyngre.",
    choices: [
      "Om du anfaller dem",
      "Om du springer fram till ﬂoden för att gömma dig i sävsnåren och rulla ned en sten i vattnet, innan du ålar i väg",
      "Om du springer fram till ﬂoden, dyker ned och stannar under vattnet med hjälp av ditt bamburör"
    ]
  },
  136: {
    mainText: "Du försöker rulla undan, men armborstpilen slår in i sidan på dig och du ligger och kravlar på marken. Du förlorar 4 KROPPSPOÄNG. Vakterna vid stadsporten rusar fram mot dig när du hoppar upp på fötter.",
    choices: [
      "Om du är Akrobat",
      "Om du inte är det"
    ]
  },
  137: {
    mainText: "Du står bredbent framför dörren och tar tre djupa andetag. Sedan, när du är redo, använder du Järnnäven med ett grymtande vrål när din INRE KRAFT släpps lös. Det hörs en smäll och dörren ﬂyger av gångjärnen. Du hoppar över den när den faller i golvet. Stryk en poäng INRE KRAFT från ditt rollpersonsformulär. Sjörövarkaptenen finns därinne. Han har övergett sitt eget skepp till förmån för bekvämligheten på Aquamarin. Han vaknar av smällen från dörren och rullar ned ur sängen, drar fram sin kroksabel från under kudden och försöker kasta några ﬁltar på dig. Du slänger iväg en Shuriken och med en skicklig knyck med handleden virvlar den iväg mot honom, innan han hinner skrika till. Slå ett slag för Shuriken. ",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  138: {
    mainText: "När du smyger dig mot vallgraven i månskenet denna stilla natt, uppfattar din skarpa hörsel ett dämpat rop från slottets bröstvärn. De har sett dig. Du ligger lågt en timme, men när du hör gläfsandet från hundar bestämmer du dig för att springa ut i skogen. Du använder din skogskunskap för att lura bort hundama från spåret och återvänder till slottet dagen därpå.",
    choices: [
      "Gå vidare"
    ]
  },
  139: {
    mainText: "Stormästaren ler och skakar på huvudet. ”Du har svarat klokt men inte sanningsenligt. Du kan inte dölja din önskan att hämnas Naijishi som älskade dig och lärde dig att älska Herren Kwon, från oss som har känt dig nästan hela ditt korta liv. Det är inte fel av dig att vilja hämnas på Yaemon, men vänta tålmodigt på att din tid ska komma och glöm aldrig, att tjäna Kwon är att hjälpa hela mänskligheten. Men du har rätt när du säger att en Skuggkrigare bara behöver frukta att misslyckas, för att uthärda tortyr måste man först uthärda misslyckandet. Det finns alltid tid att bita av sig tungan och blöda till döds, hellre än att riskera att förråda hemligheter under tortyr. Jag ska inte säga att du har misslyckats, du är snarare som en vässad klinga som vill ut ur skidan. Du behöver bara årens visdom för att slipas till perfektion. Jag ska inte hålla ett sådant mäktigt vapen kvar i skidan - du har klarat provet.” \nDe leder dig tillbaka till Tempelsalen, där munkarna och byborna har väntat för att se om du klarade provet. Böner till Kwon utsägs som en del av ceremonin när du utnämns till De Fyra Vindarnas Stor mästare. Gorobei applåderar med de andra. Han är fortfarande en lnvigd av lnre cirkeln, men hans tid kommer, för han är en skicklig krigare och en god munk. Om du skulle dö tar han antagligen din plats.",
    choices: [
      "Gå vidare"
    ]
  },
  140: {
    mainText: "Ditt hjärta slår häftigt, sedan slits det ut ur bröstkorgen och ﬂyger till Dödsmagikerns utsträckta hand. Han klämmer organet, som fortfarande slår, och trappstegen ovanför dig är dränkta med ditt blod. Du faller död ned och rullar ned till Stora Kärntornets tak nedanför. Utan försvar mot Manses djävulska häxkonster kunde du inte stå emot honom.",
  },
  141: {
    mainText: "Du går över Stora Kärntornets tak och går in i tornet som kröns av Svarta Virvelströmmens ﬂagga. Med Sorcerak på ryggen klättrar du upp till tornets topp. Trappan är upplyst av ett olycksbådande grönt sken och du ser ett rött öga som hänger i tomma intet längst upp i stentrappan. Det glöder och ögonvitan är fruktansvärt blodsprängd.\nPlötsligt smäller det till och försvinner när du klättrar uppför de sista trappstegen och slänger upp dörren längst upp. Manse Dödsmagikern, som fortfarande är klädd i sin svarta kappa vilken gör hans ansikte än mer blekt, reser sig ur sängen när du kommer in. Fruktan som strålar ut från Sorceraks magiska klinga får hans vita hår att resa sig. Han uttalar en besvärjelse, men ingenting händer. Du kastar ned Sorcerak på golvet framför honom, och han ryggar bakåt. Hans ögon glöder lika röda som det du såg utanför hans kammare.\nHans röst är en svag väsning när han hotar dig, \"Om du dödar mig tar det där ondsinta svärdet din själ.\" Du struntar i honom och han försöker kasta en sista besvärjelse när du går framåt, men Sorcerak upplöser magin när en blixt av eld lämnar hans mun och du kastar honom med lätthet till golvet. Han är inte stark och kämpar förgäves när du kör ned hälen i hans hals. Nacken knäcks som torr kvist. Aldrig mer ska Manse Dödsmagikern offra barn till sin gud Nemesis. Med hjälp av Honorics svärd har du befriat Orb från dess mäktigaste svarta magiker. Du lämnar Sorcerak rykande på kammarens golv och går nedför torntrappan för att leta rätt på Yaemon och hämnas din andliga fader.",
    choices: [
      "Gå vidare"
    ]
  },
  142: {
    mainText: "Blixten träffar dig i sidan, bränner ditt kött och ger dig en stöt som om du hade träffats av en murbräcka. Du kastas in i den bortre väggen.\nDu förlorar 8 KROPPSPOÄNG. Om du fortfarande lever vrider du dig i luften och landar säkert på fötterna. Du lyckas övervinna smärtan när Barbaren går fram för att angripa dig med sitt långsvärd. Runvävare stod närmare eldblixten än Olvar, så han är förblindad ett tag till.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller Bevingade hästens spark",
      "eller Draksvanskastet",
      "eller, om du har färdigheten Giftpilar, kan du använda en sådan"
    ]
  },
  143: {
    mainText: "När du närmar dig grottöppningen i den släta klippan ger den smala klippavsatsen som du står på vika. Du faller och försöker använda händer och fötter för att hindra fallet genom att snudda vid bergssidan när du faller. Men fallet är för högt och du studsar bort från bergssidan och spetsas på en liten tall. Du har misslyckats med ditt uppdrag.",
  },
  144: {
    mainText: "Du väntar, till synes nedslagen, på att vakterna ska ta dig till fånga, men gör sedan en hög volt i luften över dem och springer genom porten, samtidigt som solens första strålar visar sig. De förbluffade soldaterna springer efter dig men du seglar nedför vägen snabbt som vinden och de ger snart upp den fruktlösa jakten.",
    choices: [
      "Gå vidare"
    ]
  },
  145: {
    mainText: "Du gömmer dig i ett hål i marken, studerar porthuset och väntar på att mörkret ska falla. Månen är vit och full och natten är stilla. Det blåser inte ens tillräckligt för att banéren på de tre tornen ska vaja.",
    choices: [
      "Om du väljer att försöka döda Yaemon, Honoric och Manse Dödsmagikern ikväll",
      "Om du hellre väntar och ser om vädret blir sämre imorgon"
    ]
  },
  146: {
    mainText: "Du tappar balansen när din fot halkar på den förrädiska isen och glider över den glänsande ytan, samtidigt som Snöjättens klor träffar dig. Du förlorar 6 KROPPSPOÄNG. Om du fortfarande lever lyckas du på något sätt återfå fotfästet. Folkmassan ylar av blodtörst och du anfaller igen med Järnnävens slag genom att slå uppåt mot den vita jätten från din hukande ställning.",
    choices: [
      "Du kan använda en Kluven blixtspark",
      "eller glida under hans viftande armar och använda Draksvanskastet",
      "eller slå igen"
    ],
  },
  147: {
    mainText: "Du tömmer Eldödle-essensen på vallgravens yta och får oxgrodorna att fortsätta kväka. ",
    choices: [
      "Gå vidare"
    ]
  },
  148: {
    mainText: "Du går tyst fram till portalen längst ned i tornet som kröns av Röda Syrsans banér. Du rör dig försiktigt när du glider uppför stentrappan och känner efter fällor hela tiden.",
    choices: [
      "Gå vidare"
    ]
  },
  149: {
    mainText: "Efretin höjer sig över dig, med ﬂammorna slickande dess rödglänsande kött. Den sträcker sig efter dig och det strömmar eld nedfor dess arm.",
    choices: [
      "Du kan använda Järnnävens slag",
      "eller Virvelkastet",
      "eller Tigersprångets spark"
    ]
  },
  150: {
    mainText: "Du tittar åt sidan på Yaemon. Du hoppar som en krabba så att du kommer inom räckhåll, och gör ännu en Kluven blixtspark med foten riktad mot hans ljumske. Yaemon är inte så lätt att lura en gång till.\nHan hoppar högt över din första spark och medan han ännu är i luften sparkar han dig i ansiktet, innan du hinner avsluta din Kluvna blixtspark. Du vacklar bakåt och han landar framför dig. Han lägger sin vänstra hand på din bröstkorg, kröker vänster ben runt ditt och stöter till. Du faller platt på rygg och han sätter sig på ett knä bredvid dig, samtidigt som han slår ned med höger hand mot ditt bröst med ett vrål av lnre Kraft, så att dina revben knäcks. Du förlorar 11 KROPPSPOÄNG.\nOm du fortfarande lever inser du att du bara har sekunder på dig innan Yaemon gör slut på dig och fruktan för döden ger dig styrka att rulla undan och utom räckhåll för honom. Du tar dig upp på fötter så fort du kan, men han är över dig igen med en serie anfall.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "Om inte"
    ]
  },
  1500: {
    mainText: "Du har inte färdigheten akrobatik och därför måste du försöka blockera. Ditt Försvar är bara 6, eftersom du fortfarande är en smula omtöcknad.",
    choices: [
      "Du lyckas",
      "Du misslyckas"
    ]
  },
  151: {
    mainText: "Stormästaren ler och skakar på huvudet. ”Du har svarat sanningsenligt. Det är inte fel av dig att vilja hämnas Naijishi, som älskade dig och lärde dig att älska Herren Kwon, men du måste vänta tålmodigt på att din tid ska komma och aldrig glömma, att tjäna Kwon är att hjälpa hela mänskligheten. Men vad gäller tortyren, är det bara genom att misslyckas med ett uppdrag som en sann Skuggkrigare kan bli fångad och det finns alltid üd att bita av sig tungan och blöda till döds, hellre än att riskera att avslöja hemligheter. Du behöver bara frukta att misslyckas med ett uppdrag. Jag ska inte säga att du har misslyckats, för ingen har någonsin bemästrat Tigerns väg som du, och vi ska inte hålla kvar vårt skarpaste vapen i skidan för evigt. Du har lyckats med provet.” \nDe för dig tillbaka till Tempelsalen där munkarna och byboma har väntat för att se om du skulle klara provet. Böner till Kwon utgör en del av ceremonin när du utnämns till De Fyra Vindarnas Stormästare. Gorobei applåderar med de andra, för han är fortfarande en lnvigd av Inre cirkeln, men hans tid kommer, för han är en skicklig krigare och en god munk. Skulle du dö, efterträder han troligen dig. ",
    choices: [
      "Gå vidare"
    ]
  },
  152: {
    mainText: "Blixten träffar dig i sidan, bränner ditt kött och slungar dig bakåt som om du hade träffats av en murbräcka. Du kastas in i den bortre väggen. Du förlorar 8 KROPPSPOÄNG. Men om du fortfarande lever svänger du runt i luften och landar säkert på föttema. Du lyckas övervinna smärtan när Barbaren rör sig mot dig för att anfalla med sitt långsvärd. Runvävare kommer till din hjälp. Barbaren koncentrerar sina anfall på dig, men du får slå för ett anfall från Runvävare mot Olvar när du själv gör ett slag, spark eller kast. Runvävare gör 1T6+1 i skada med sitt svärd och Olvars Försvar mot honom är 8.",
    choices: [
      "Du kan använda Kobraslaget",
      "eller Bevingade hästens spark",
      "eller Draksvanskastet",
      "eller, om du har färdigheten Giftpilar, kan du använda en sådan"
    ]
  },
  153: {
    mainText: "Det tar bara ett ögonblick att dyrka upp låset med en liten fil. Det klickar till tyst och de väloljade gångjärnen ger inget ljud ifrån sig när du öppnar hyttdörren. Därinne sover Sjörövarkaptenen. Han har övergett sin egen hytt för bekvämligheten på Aquamarin. Han är full och snarkar högt. Du tar tid på dig att smeta gift på låsdyrken innan du stöter den i hans halspulsåder. Du vänder dig om och ropar signalen för besättningen att bryta sig ut samtidigt som Sjörövarkaptenen ligger i dödsryckningar. Du leder anfallet och de romdränkta piraterna tas med överraskning. Många hoppar i havet utan att tänka på att deras skepp ligger en kilometer bort i mörkret. Du är glad att se Glaivas, som har befriats av en besättningsman, göra slut på en ful pirat som visade sig besvärlig. De få som fortfarande är vid liv ger sig till honom och han ger order om att sätta dem vid årorna så att de får smaka sin egen medicin. Nästa morgon hissar ni seglen igen och seglar med god fart.",
    choices: [
      "Gå vidare"
    ]
  },
  154: {
    mainText: "Ekdörren knakar lätt på gångjämen när du stiger in i Honorics kammare. Giftångoma vrider sig som en orm ur munnen på honom. Du övervinner skräcken som strålar ut från hans svärd, tar upp det och lämnar kammaren så fort du kan, noga med att inte andas förrän du är i säkerhet utanför. Du fäster svärdet på ryggen och klättrar ut genom tornets fönster.",
    choices: [
      "Om du klättrar upp i det tom som kröns av Röda syrsans flagg",
      "Om du väljer det som pryds av Svarta Virvelströmmens banér"
    ]
  },
  155: {
    mainText: "Du vänder sidan mot honom, bredbent med lätt böjda knän och nävarna redo. Du måste bestämma nu om du ska använda INRE KRAFT om du har någon kvar.",
    choices: [
      "När han går i närstrid med dig kan du använda Kobraslaget",
      "eller Järnnävens slag",
      "eller Tigertassens slag"
    ]
  },
  156: {
    mainText: "Du går runt slottet tills du är en osynlig skugga i mörkret under det övergivna norra tornet. Du ser att sprickoma som har bildats när grunden har satt sig kommer att göra det lätt att klättra till ett av fönstren, men över oxgrodornas kväkande kan du höra steg från vakter någonstans i närheten. Du sänker dig ljudlöst ned i den kalla vallgraven med regnet piskande runt dig. Ljudet från oxgrodorna är förvånansvärt högt och det är uppenbart att de plötsligt slutat kväka.",
    choices: [
      "Om du har någon Eldödle-essens",
      "Om du inte har det"
    ]
  },
  157: {
    mainText: "Slaget är så kraftigt att det går igenom ditt försvar och träffar dig på sidan av huvudet. Du förlorar 10 KROPPSPOÄNG. Om du fortfarande lever, är smärtan så fruktansvärd att du ligger dubbelvikt på marken.",
    choices: [
      "Om du kan minska ämnensomsättningen och Spela död",
      "Om du inte kan eller vill, släpar du dig upp och stapplar mot ﬂoden"
    ]
  },
  158: {
    mainText: "Du rullar upp ett stycke vaxad tråd tills den hänger alldeles ovanför munnen på Marskalken över Domsvärdslegionen. Du öppnar ﬂaskan som innehåller blod från Intet, lntighetens mun, det kraftigaste kända giftet. Det ångar när de svarta dropparna rinner nedför tråden och droppar ned i Honorics öppna mun. Han stelnar till och du vet att han är hjälplös och dör av kvävning när bröstkorgen paralyseras. Du har mördat Domsvärdslegionens Marskalk, en av de mäktigaste männen på Orb.",
    choices: [
      "Gå vidare"
    ]
  },
  159: {
    mainText: "Kraften bakom slaget kastar dig bakåt genom luften och du slår i marken på rygg, omtöcknad. Ett ögonblick senare har Yaemon gått ned på knä bredvid dig och han driver först den ena, sedan den andra knutna näven mot din tinning, samtidigt som han vrålar när hans INRE KRAFT frigörs. Din skalle spräcks och du dör omedelbart.",
  },
  160: {
    mainText: "Snöjätten slår till med klorna mot ditt ansikte. Ditt Försvar mot det väldiga slaget från hans armar när du kämpar för att hålla balansen på isen, är 6.",
    choices: [
      "Du kan använda en Kluven blixtspark",
      "eller glida under hans viftande armar och använda Draksvanskastet",
      "eller slå till igen"
    ],
    stillAlive: "Snöjätten försöker krossa dig med ett slag med klorna. Du har 5 i Försvar när du kämpar för att hålla balansen på isen. Om du fortfarande lever kan du glida in under de fäktande armarna"
  },
  161: {
    mainText: "Den Shuriken som förtrollades av Ödesgudinnans präst, tjuter blodisande när den slungas mot Elementarvarelsens bröst. Den sätter sig i bröstet och Efretin blir en ﬂammande pelare innan den försvinner. Du har förpassat den till dess hem, Bronsstaden. Den förtrollade Shuriken har hamnat i eldens elementarplan. Stryk den från din Speltabell.\nDu ruskar på huvudet åt att du nätt och jämnt kom undan och fortsätter färden mot Visionemas berg.",
    choices: [
      "Om du vill färdas västerut och ta dig över bergen vid Stormjättevägen",
      "Om du föredrar att följa den ringlande Lyckofloden upp i Lvckopasset och ta dig över bergen den vägen"
    ]
  },
  162: {
    mainText: "När du säger till vakten i slottets porthus att du är en trubadur och jonglör, säger han att det det ska bli en bankett imorgon kväll för hedrade gäster. Han frågar dig var du uppträdde senast.",
    choices: [
      "Om du svarar: \"lonalbion\"",
      "Mortavalon",
      "Druath Glennan"
    ]
  },
  163: {
    mainText: "Stridsklubban klingar mot dina järnärmar som en hammare mot städet. Du griper tag i angriparens handled och drar honom ur sadeln.\nHan faller handlöst och rullar åt sidan, död. De tre andra sitter av och börjar mässa. De måste vara präster, tänker du.",
    choices: [
      "Om du anfaller dem",
      "Om du springer"
    ]
  },
  164: {
    mainText: "Den snurrande Shuriken träffar Sjörövarkaptenen i strupen och ropet han hade på sina läppar dränks i ett blodigt gurglande när han faller livlös ned på plankoma. Du ger signalen och besättningen rusar upp från roddardäck, viftande med kedjor och kroksablar de har tagit från vakterna. Du leder anfallet och ni överraskar de romrusiga piraterna. Många hoppar i havet utan att minnas att deras skepp ligger en kilometer bort i mörkret. Du är glad att se Glaivas, befriad av en i besättningen, göra slut på en ful pirat som visade sig besvärlig. De få som fortfarande är vid liv ger sig till honom och han ger order om att sätta dem vid årorna så att de får smaka sin egen medicin. l gryningen hissar ni seglen igen och sätter god fart.",
    choices: [
      "Gå vidare"
    ]
  },
  165: {
    mainText: "Blixten sveper förbi dig och sätter eld på stugans plankor. Du anfaller tillsammans med Runvävare. Barbaren koncentrerar sina anfall på dig. Du får slå ett anfall för Runvävare när du själv anfaller med ett slag, spark eller kast. Olvars Försvar mot Runvävare är 8, och Runvävares svärd gör 1T6+1 i skada.",
    choices: [
      "Anfaller du Barbaren med ett Kobraslag mot hans oskyddade hals",
      "eller med en Bevingade hästens spark",
      "eller med ett Draksvanskast",
      "Eller, om du har färdigheten Giftpilar, kan du använda en av dem"
    ]
  },
  166: {
    mainText: "Du tillbringar nästa dag ensam på vakt, men ingen lämnar slottet. Det är fortfarande tio dagar kvar tills månen blir röd vid planetemas förening och du kan se förberedelserna börja på Yttre borggården.\nYaemon, Honoric och Manse Dödsmagikern ska ge sig av mot Förändringens pelare imorgon. Dina böner til Kwon om en stormig och månlös natt är besvarade och du bestämmer dig för att i natt ska du avsluta ditt uppdrag eller dö i ett hedervärt försök. Vinden och regnet och mörkret gör det möjligt för dig att ta dig in i slottet så gott som osynligt. Du förbereder dig i tyst meditation och tar på dig din dräkt innan du stirrar in i mörkret tills din mörkersyn är lika skarp som en ugglas.",
    choices: [
      "Om du har färdigheten Klättra och vill klättra uppför slottsmuren",
      "Annars kan du försöka göra den lättare klättringen uppför det övergivna tornet vare sig du har färdigheten Klättra eller inte",
      "Eller så kan du lyfta gallret utanför vallgraven och hoppa ned i tunneln under"
    ]
  },
  167: {
    mainText: "Du störtar igenom luften och ned på marken där du rullar runt. När du kommer upp på fötter kastar du dig framstupa i luften och vrider dig så att du landar vänd mot Yaemon, som hoppar upp på fötter. Du tar tillvara på chansen och hjular fram mot honom, gör en volt för att komma inom räckhåll och tar Yaemon med överraskning.",
    choices: [
      "Försöker du använda ett slag",
      "en spark",
      "eller ett kast"
    ]
  },
  168: {
    mainText: "Du går fram mot munkarna. En av dem slår ned Leksaksmakaren på marken med ett skickligt slag i magen, när du ber dem sluta plåga honom. Han anfaller med förblindande snabbhet när du ser efter om Leksaksmakaren är svårt skadad. Ditt försvar mot hans plötsliga spark är 6. Om han träffar dig gör han 1T6+2 i skada. Om du fortfarande lever stiger munkarna tillbaka. De rör sig med smidigheten hos vältränade slagskämpar. De är säkra på att vinna och bestämmer sig för att ge sig på dig en och en. Den som sparkade stiger fram och bugar.\nDu bugar tillbaka.",
    choices: [
      "Om du använder Tigertassens slag",
      "eller Kluvna blixtsparken",
      "eller Tigertandskastet"
    ]
  },
  169: {
    mainText: "Du strosar genom portalen och hälsar på arbetarna. När du går genom de tysta gatorna i den döda staden lättar ditt hjärta vid åsynen av träd och en rosenträdgård. Du går in i lövsalen och hittar ett litet kloster tillägnat Kwon. Du är lycklig över att ha hittat en tillﬂyktsort där du kan meditera och söka hjälp, så du går in i templet och knäfaller i bön. En munk knäböjer bredvid dig i det kala templet och mässar en psalm till Kwon Försonaren.",
    choices: [
      "Gå vidare"
    ]
  },
  170: {
    mainText: "Du kan inte missa Efretins massiva kropp och kaststjärnan slår in i bröstkorgen på den, där den långsamt börjar smälta. Du kan naturligtvis inte få tillbaka den. Den har i alla fall skadat Elementarvarelsen, och du kan dra 2 från Efretins KROPPSPOÄNG när ni börjar slåss.",
    choices: [
      "Gå vidare"
    ]
  },
  171: {
    mainText: "När den första mannen i ringbrynja kommer rusande och svingar sin stridsklubba mot dig, försöker du föra den tunga klubban åt sidan med överarmen. Ditt försvar för den blockeringen är 8.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  172: {
    mainText: "Du hoppar ned i det slemmiga, gröna träsket och sjunker nästan ned till midjan. Kärret suger ned fötterna på dig när du kämpar dig fram mot båten som skvalpar stilla mitt i sörjan av gyttja och slem. Svartalven försöker också ta sig fram till båten, men plötsligt sprutar det upp gyttja och slem när en formlös massa av späck och piskande tentakler dyker upp ur vattnet framför henne. Det är en Shaggoth, eller slembest, som virar sina stinkande tentakler runt den skrikande Svartalven. Du tittar flyktigt ut över öknen, där riddaren slåss mot Kobramannen.",
    choices: [
      "Om du kommer till Svartalvens hjälp",
      "Om du tar dig fram till båten",
      "Om du vadar förbi och tar dig ut i öknen"
    ]
  },
  173: {
    mainText: "Gör ett Ödesslag",
    choices: [      
      "Klättringen är mödosam, men frånsett att en smal klipphylla lossnar under din fot, händer ingenting. Till sist ger klippväggen plats för en grottöppning",
      "Gå vidare",
    ]
  },
  174: {
    mainText: "Du klättrar som en spindel uppför Stora Kärntornets vägg, trycker dig mot stenarna, hänger ljudlös varje gång vakten, som går sina ronder på lnre borggården, är nedanför dig. Vinden och regnet döljer de svaga skrapningarna från Kattklorna när du kör in dem i det lösa murbruket som håller ihop stenama, och du är osynlig i mörkret. Till sist når du upp till bröstvärnet och du kikar ut över Kärntornets platta tak. De tre tornen, som är förvånansvärt stora nu när du är så nära, ståtar fortfarande med ﬂaggoma vilka är svagt upplysta av glöden från ett fyrfat med kol. Gardeskaptenen står med ryggen mot glöden, klädd i svart rustning. Han patrullerar då och då bröstvärnet från ena tornet till det andra innan han går tillbaka för att värma sig vid fyrfatet.\nHan har tagit av sig hjälmen och står i ljuset från kolelden.",
    choices: [
      "Om du väntar tills han står bredvid det låga bröstvärnet och försöker kasta honom över sidan",
      "Om du använder en Shuriken och siktar på hans huvud",
      "Om du smyger upp bakom honom och använder din Sttypsnara",
      "Eller, om du har färdigheten Giftpilar, kan du använda en"
    ]
  },
  175: {
    mainText: "Kaptenen ropar på hjälp när Shuriken fastnar i filtarna och han kastar dem mot dig när du angriper honom. Du skickar dem åt sidan och duckar undan den svepande kroksabeln innan du hör ett ljud bakom dig. Du virvlar runt och blockerar, men det är för sent för att fånga kastkniven som Piratens närmaste man slänger. Den sätter sig i hjärtat på dig och du känner inget mer. "
  },
  176: {
    mainText: "Du struntar i dem, men förolämpningarna fortsätter och snart ropar hälften av soldaterna i rummet åt dig att slåss. Du bestämmer dig för att det är klokast att lämna värdshuset och går med långa kliv mot dörren. Den berusade unge Kaptenen tar sig upp på fötter och drar sitt svärd. Det tycks glöda när det lämnar skidan och du känner fruktan sänka sig över dig. Du stannar med håret på ända. Du reciterar bistert Skuggkrigarnas fördrag, Ninja No Chigiri, medan du håller andan och du återfår ditt mod. Du går mot dörren, men Kaptenen och två av hans vänner bestämmer sig för att angripa dig med sina svärd. Du måste försvara dig. ",
    choices: [
      "Använder du Bevingade hästens spark",
      "eller Järnnävens slag",
      "eller Virvelkastet"
    ]
  },
  177: {
    mainText: "Gryningens Stormästare ler och säger, ”Du klarar provet, för du har svarat både vist och rätt. Det är inte fel av dig att vilja hämnas Naijishi, som älskade dig och lärde dig att älska Herren Kwon, men du måste vänta tålmodigt på att din tid ska komma och glöm aldrig, att tjäna Kwon är att hjälpa hela mänskligheten. Det är bara genom att misslyckas med ett uppdrag som en sann Skuggkrigare kan tas till fånga och det finns alltid tid att bita av sig tungan och förblöda, hellre än att riskera att avslöja hemligheter under tortyr. ” Han fortsätter, ”Vi har aldrig sett någon så lovande eller någon som bemästrar Tigerns väg så väl. Jag ska recitera Skuggkrigarnas Stormästares litania - minns den, för en dag kan den komma till användning. \n\n”JAG ÄR SKUGGKRIGAREN \nMin Far och Mor är Himlen och Jorden \nMitt Hem är min Kropp \nMin Kraft är Trofasthet \nMin Magi är Träning \nMitt Liv och min Död är Andning \nMin Kropp är Kontroll \nMina Ögon är Solen och Månen \nMina Öron är Känslighet \nMina Lagar är Självförsvar \nMin Styrka är Anpassning \nMin Ambition är att Tillvarata varje Möjlighet \nMin Vän är Sinnet \nMin Fiende är Vårdslöshet \nMitt Skydd är Rätt Handling \nMitt Vapen är Allting \nMin Strategi är En fot framför Den andra \nMin Tilltro är till Kwon \nMIN VÄG ÄR TIGERNS VÄG” \n\nHans ord etsas in i ditt minne. Anteckna den här texten så att du kan referera till Litanian igen om du skulle behöva det. \nSedan tar han en Opalring från sitt finger och ger den till dig. ”Du kan få användning för den här, ” säger han och sätter den på ditt ﬁnger. När Stormästarens ekande ord har dött bort för de tillbaka dig till Tempelsalen, där munkarna och byborna har väntat för att se om du skulle klara provet. Ni ber böner till Kwon under ceremonin när du utnämns till De Fyra Vindarnas Stormästare. Gorobei applåderar med de andra. Han är fortfarande en lnvigd av Inre cirkeln, men hans tid kommer, för han är en stor krigare och en god munk. Om du skulle dö tar antagligen han din plats. ",
    choices: [
      "Gå vidare"
    ]
  },
  178: {
    mainText: "Kaptenen duckar, men för sent. Han gurglar hjälplöst när du drar åt strypsnaran hårdare tills den skär igenom hans luftstrupe, innan du försiktigt sänker kroppen till golvet. \nDu lägger märke till att vart och ett av de tre tomen har en valvgång som leder in till en spiraltrappa.",
    choices: [
      "Du kan gå upp i tornet som kröns av Domsvärdets ﬂagga",
      "eller tornet som kröns av Röda Syrsans ﬂagga",
      "eller tornet som kröns av Svarta virvelströmmens flagga"
    ]
  },
  179: {
    mainText: "På vägen till Fruktans borg stöter du på spåren av hästar och ett läger.\n Du skyndar på i hopp om att hinna ifatt dem innan de når säkerheten i slottet. När du följer spåren över heden kommer du i närheten av Vättetandsbergen, taggiga och svarta, och framför dem står ett stort slott, byggt av samma dystra sten. På bägge sidor om porthuset står en kraftig påle nedkörd i marken. Två järnjungfrur, metallkorgar täckta med spikar, och formade som kistor, gungar lätt i vinden.\n Kroppen i den ena är hopsjunken och förruttnad, men i den andra sitter en utmärglad man med ett skägg som har växt ned till midjan. \n  Han är till och med för galen för att be om hjälp av främlingar. Tre ryttare rider in genom vakthuset lite före dig, en man i röd dräkt med två svartklädda män bredvid sig, båda är högresta, men den ena är smal och den andra byggd som en bjöm. För första gången ser du ditt byte. \n Stora Kärntornet höjer sig högt över murama, krönt av tre torn som alla pryds av ett banér. Det nordligaste ståtar med en röd syrsa, det västliga med ett silversvärd som hänger i en tråd, Domsvärdet, och det tredje med den svarta virvelströmmen, symbolen för Nemesis.\n När du närmar dig vakthuset drar två vakter i väg med en skrikande man till ett galler utanför vallgraven.\n \"Matdags, \" säger en och de skrattar när de lyfter upp gallret och slänger ned sin fånge till det som kan lura i slottets källarhålor.",
    choices: [
      "Om du väntar på mörkrets inbrott innan du försöker ta dig in i slottet",
      "Om du hellre försöker bli tagen för en trubadur, ett av De sju sätten att gå, kan du rekognoscera i slottet först"
    ]
  },
  180: {
    mainText: "När du lägger giftpilen i munnen brer Efretin ut arrnama. Du blåser hårt och nålen sjunker in i dess kropp, men den brinner upp i ﬂammorna som slickar den. Nålen har ingen effekt. lnnan du hinner röra dig störtar det fram flammor från dess öppna armar och du omsluts av elden. Du hålls hjälplös fast i dess armar och världen Orb bleknar bort omkring dig. Du vrider dig i Efretins brinnande omfamning när du ser ett nytt landskap dyka upp omkring dig. Slott och väggar av brons omsluter dig och ett sorgligt ljud från lurar hälsar din ankomst till Bronsstaden. Bronsgolvet är så hett att det bränner dina fötter och du känner inte till något sätt att lämna eldens elementarplan. Ditt uppdrag slutar här.",
  },
  181: {
    mainText: "Du hoppar högt åt sidan, hjular i luften och landar några steg bakom Yaemon, just när han skulle slå till dig. Han är förvånad över din gymnastiska förmåga och vänder sig mot dig när du slår flera volter fram mot honom och gör ett flygande anfall.",
    choices: [
      "Du kan slå",
      "eller sparka",
      "eller försöka kasta honom"
    ]
  },
  182: {
    mainText: "Du hukar dig på marken och hästarna springer över dig",
    choices: [
      "Gå vidare"
    ]
  },
  183: {
    mainText: "Prästen svarar, ”Även om vi inte var upptagna med att hela skulle vi inte hjälpa dig, för de som följer ett klosters strikta lagar, som du måste göra, motverkar friheten och förhindrar ett paradis på Orb. ” Du inser av övertygelsen i hans ögon att en teologisk diskussion inte skulle rubba honom.",
    choices: [
      "Du kan berätta för honom om ditt uppdrag och be om hans hjälp igen.",
      "Du kan lämna templet och Helgedomen och gå in genom Obsidianporten till Domedag"
    ]
  },
  1840: {
    mainText: "Du sparkar till med vänster fot två gånger i snabb följd mot det vita pälsberget. Du siktar på hans sida och tinning, men tappar nästan fotfästet. Gör ett ödesslag.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  184: {
    mainText: "Du sparkar till med vänster fot två gånger i snabb följd mot det vita pälsberget.",
    choices: [
      "och använda Draksvanskastet",
      "eller Järnnävens slag",
      "eller sparka igen"
    ],
    stillAlive: "Snöjätten försöker krossa dig med ett slag med klorna. Du har 5 i Försvar när du kämpar för att hålla balansen på isen. Om du fortfarande lever kan du glida in under de fäktande armarna"
  },
  185: {
    mainText: "Du går nedför huvudgatan, Drömmarens Promenad, och tar till höger ned längs Hjulvägen. Staden verkar lugn tills du hör högljudda röster framför dig. Två män i bruna dräkter med ett upp och nedvänt Avatars kors med en ringlande orm i dimma över, driver grymt med en leksaksmakare. En liten ﬂicka gråter, men andra stadsbor går förbi på andra sidan gatan och stirrar framför sig. De två männen tvingar honom att öppna munnen och sedan håller en i huvudet medan den andra försöker tvinga ned handdockor i halsen på honom. Från symbolen på dräkten känner du igen dem som den Ledes präster.",
    choices: [
      "Om du går emellan och försöker rädda Leksaksmakaren",
      "Om du struntar i händelsen och lämnar honom åt sitt öde"
    ]
  },
  186: {
    mainText: "En ung soldat hånler och kallar dig en pestsmittad kloakråtta. Du sitter i ett hörn och ignorerar honom. Din skarpa hörsel gör att du kan lyssna på deras samtal i stället för på alla de andra som talar i värdshuset som är fyllt med folk. Det verkar som om de väntar på att ledaren för Domsvärdslegionen, Honoric, ska återvända innan de marscherar mot Föraningens tom. Han tycks ha lämnat staden tillsammans med Yaemon, och färdats norrut. En av de berusade soldaterna vid bordet bredvid börjar förolämpa dig och sedan säger han åt dig att om du vill leva borde du lämna värdshuset nu.",
    choices: [
      "Om du stannar vid ditt bord",
      "Om du hyr ett rum på övervåningen för natten"
    ]
  },
  187: {
    mainText: "När pulvret kommer i beröring med ﬂammoma slår det upp en ljusblixt. Du skyddade dina ögon, men Olvar och Runvävare är för ögonblicket förblindade. Barbaren backar ut genom dörren och du följer efter med en Bevingade hästens spark mot hans bröstkorg. Han slänger upp armarna och faller baklänges i snön. Anteckna att han har förlorat 5 KROPPSPOÄNG, för du har knäckt några av hans revben. Du ska just springa ut i snön och göra slut på honom, när en blå ljusblixt slår ut mot dörröppningen från ädelstenen på hans panna. Du försöker kasta dig tillbaka in och har 6 i Försvar mot Blixten när Olvar återfår synförmågan.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  188: {
    mainText: "Med en kobras snabbhet hugger du med bägge händerna mot de två armborstpilarnas bana, korsar dem framför bröstet och får pilarna att slungas mot väggarna på bägge sidor om dig. Du rör dig tyst fram till spiraltrappan och väntar för att se att ingen har hört ljudet från järnpilarna. Sedan glider du nöjt uppför trappan.",
    choices: [
      "Gå vidare"
    ]
  },
  189: {
    mainText: "Till och med under de svåra omständighetema i mörker, blåst och regn är ljuset från fyrfatet tillräckligt för att du ska kunna slita upp Kaptenens strupe med din Shuriken på 10 meters håll. Han faller ihop med ett klingande från rustningen, men skriket kvävdes innan han fick fram det. Vart och ett av de tre tornen har en valvgång som leder in till en spiraltrappa.",
    choices: [
      "Vilket torn går du upp i? Det som kröns av Domsvärdet?",
      "Det som kröns av Röda syrsan?",
      "Det som kröns av Svarta virvelströmmen? "
    ]
  },
  190: {
    mainText: "Golvplankorna är lätta att lyfta. Under dem ﬁnns svart jord. Det ﬁnns ett lager med luft som går att andas vid golvet, under röken, och du börjar gräva ned dig i jorden. När du har gjort ett hål som är stort nog att krypa ihop i, täcker du dig själv med jord och sticker upp andningsröret för att få den luft du kan, samtidigt som du kontrollerar din andning för att minska luftbehovet. Du svettas och ﬂämtar efter andan, men jorden skyddar dig från elden, som dör ut när den har bränt ut trärummet. Du ligger stilla när en grupp munkar kommer in för att undersöka restema. Det verkar som om de har omringat stället i väntan på att du skulle komma ut, men nu tror de att du är död. Du hör dem tala om Yaemons nära förestående resa till Fruktans borg, i sällskap med Honoric av Domsvärdslegionen och Manse Dödsmagikern, en mäktig trollkarl och anhängare av Nemesis, Ondskans högsta princip, och om hur belåtna de ska bli över att du är död. När de har gått lämnar du ditt hål och tar vägen förbi värdshuset \"Hydrans huvuden\" ut ur staden och vidare mot Vättetandsbergen, där Fruktans borg ligger.",
    choices: [
      "Gå vidare"
    ]
  },
  191: {
    mainText: "Efter ceremonin går ni alla ut ur templet till de gyllene sanddynerna, där det serveras en enkel festmåltid på ris och frukt som delas av munkarna och byborna. Du äter lite och ger dig av tidigt, eftersom du vill meditera innan du somnar. Avslappnad av meditationen som befriar din själ från den värkande kroppens bojor, sluter du dina ögon så snart du har lagt dig på den halmfyllda madrassen som är din bädd. Du glider in i en djup men orolig sömn. Du ser ett skepp med smäckra åror sätta segel mot Mångfaldens land. En högrest man med bestämt utseende står på akterkastellet med benen brett isär mot gungningen. Han bär en tjock, mörkgrön kappa mot vädret och solen glänser så starkt i svärdsbältets spänne att du tror att det inte är en dröm, utan en vision. En sjöman kallar honom vid namn, ”Glaivas”, och han vänder sig om och tittar på dig, men sedan bleknar visionen bort och den strålande blå skyn byts ut mot ett stort och mörkt slott som avtecknar sig mot mörka, purpurfärgade moln. Tre torn på ett väldigt, svart Kärntorn tycks genomborra molnen. Du går mot det, fast besluten att genomföra ett svårt och viktigt uppdrag.\nNär du vaknar minns du drömmarna som om de var bilder målade på väggen i din munkcell, men sömnen har i alla fall gett dig tillbaka alla KROPPSPOÄNG som du förlorade i striden mot Gorobei. Du är på väg mot Templet när du hör oväsen från stranden och två fiskare springer upp till dig med nyheten att ett skepp har ankrat upp en bit ut. En man ror in till stranden och stiger ur båten när Stormästarna kommer ned för att hälsa på honom. Han presenterar sig som Glaivas, bugar respektfullt och ber att få tala med Stormästarnas Stormästare.\n -”Du kan tala till oss alla,” säger Gryningens Stormästare, ”vi har inga hemligheter på de Stilla Drömmarnas Ö. ” \n -”Inte sedan ni förlorade Kettsuinrullarna,” svarar Glaivas bistert. \n-”Vad vet du om Kettsuinrullarna?” frågar Stormästaren. Munkarna väntar spänt när Glaivas noga ser sig omkring innan han svarar. \n-”Kettsuinrullarna innehåller hemligheten om Maktens ord som kan binda själve Kwon i Inferno om det uttalas vid Förändringens pelare på de stora snövidderna i norr. Yaemon, Flammans Stormästare, av Röda Syrsans orden, stal den av er för många år sedan och har uttytt Ordet. Vi är i månaden Allmoderns prakt och under tre dagar blir månen röd vid Planeternas stora förening - någonting som bara händer vart femhundrade år. Om ordet uttalas vid Förändringens pelare under den här tiden, fjättras er Gud, Kwon, i den bottenlösa avgrunden, så att den Ledes munkar är fria att sprida sitt herravälde över människornas länder.” \nNär han nämner Yaemons namn blir det ett tumult, men Glaivas fortsätter och en onaturlig tystnad sänker sig. \n-”Yaemon är redan redo att ge sig av från staden Domedag på sin långa resa till Isvidderna. Även om jag är en jägare, van vid att patrullera vildmarken vid Klyftans kant, besegras jag lätt av någon som honom. Finns det någon här bland er som är villig att försöka stoppa honom?” \nNär Glaivas talar känner du en brännande vilja att hämnas på Yaemon flamma upp i ditt bröst. Din dröm om Glaivas, för det var honom du såg ombord på skeppet som nu ligger för ankar vid stranden, har övertygat dig om att det är du som är förutbestämd att utföra det här uppdraget. Du stiger fram och säger, ”Jag ska stoppa honom.” \n-”Du är ung, ” säger Glaivas, ”kan du lyckas när jag, en av jägarnas främste, skulle misslyckas?” \n-”Jag är Skuggkrigare, ” svarar du. \nGlaivas hajar till. Gryningens Stormästare suckar och säger, ”Ja, jag döper dig till Hämnare, för om någon kan lyckas, och det måste du för mänsklighetens skull, är det du.” Sedan vänder han sig mot Templet och faller i bön. \nStaden Domedag ligger på Människoländernas västkust och Glaivas ger dig en karta som visar de många städer och underliga länder som sträcker sig norrut till de snöiga vidderna. Du tillbringar resten av dagen med att göra dig redo, fästa järnärmarna vid din mörka dräkt och samla ihop Skuggkrigarens redskap innan du tillbringar några timmar i stilla meditation. Du går ombord på Glaivas skepp i tid för att segla ut med tidvattnet. Du måste hitta Yaemon och döda honom innan han når Förändringens pelare, annars är allt förlorat.",
    choices: [
      "Gå vidare"
    ]
  },
  192: {
    mainText: "När lejonen rusar fram mot dig, gör du ett otroligt hopp. Folkmassan drar andan när du gör en volt över dem och sedan springer mot träsket. De vänder sig om med förbluffande snabbhet och du når det mörkgröna träsket just som lejonen hugger efter dina hälar, men de stannar, rädda för att hoppa ned i det onaturligt gröna, slemtäckta vattnet.",
    choices: [
      "Gå vidare"
    ]
  },
  193: {
    mainText: "Du fäster Kattkloma vid händema och klättrar försiktigt uppför bergssidan. Du undviker avsatser där sprickoma vamar dig för att klippan kan ge vika under dig. Till sist öppnar sig den släta klippsidan i en grottöppning.",
    choices: [
      "Gå vidare"
    ]
  },
  194: {
    mainText: "Du sätter dig vid hans bord och han ber om ett oxhuvud mjöd. Han ler mot dig med sänkta ögonlock när mjödet kommer, doppar två muggar i den bräddfulla hinken och ställer försiktigt en av dem framför dig. Ni höjer muggarna tillsammans och tömmer dem. Det hörs ett bravorop när ni ställer ned muggarna igen tillsammans. Den unge kaptenen doppar dem i hinken igen och ett nytt bravorop hälsar era ansträngningar.",
    choices: [
      "Om du är Immun mot gifter",
      "Om du inte är det"
    ]
  },
  195: {
    mainText: "Du går undan den svingande stridsklubban, hoppar upp bakom mannen i ringbrynja och landar på hans häst. Hästen stegrar sig och du försöker fälla honom till marken när han vrider sig i sadeln för att slå stridsklubban i ansiktet på dig. Han har 5 i Försvar mot din Tigertass.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  196: {
    mainText: "Du går uppför trappan till Templet. Träbänkarna tycks vara slumpmässigt utställda därinne, men taket är genomborrat av rosettfönster och det är ljust och vackert där inne. Kristaller reﬂekterar solens strålar mot en målning av ett förstört slott med soldater och bönder som dansar i gläntorna framför det. Den dödade prästen eller den unge krigaren syns inte till någonstans. En av Prästerna går fram mot dig och du frågar honom om han kan ge dig lite information. Han frågar om du tillber Béatan.\nVilken gud säger du att du tillber?",
    choices: [
      "Kwon",
      "Allmodern",
      "eller Béatan",
      "Om du hellre går ut ur Templet och följer efter den gamle mannen som sade sig vara ett Orakel"
    ]
  },
  197: {
    mainText: "Du har besegrat Elementarvarelsen och kliver bakåt när Efretin förvandlas till en ﬂammande pelare innan den försvinner. Du har förpassat den till dess hem, Bronsstaden.",
    choices: [
      "Om du vill gå västerut och sedan gå över Visionernas berg vid Stormjättevägen",
      "Om du föredrar att följa den vindlande Lyckoﬂoden upp i Lyckopasset och gå över bergen där"
    ]
  },
  198: {
    mainText: "Två armborstpilar utlöses från en fälla i väggen och en av dem genomborrar din strupe. Du sjunker gurglande ned på golvet och lungorna fylls med blod. Du drunknar i ditt eget blod i hallen till Fruktans borg.",
  },
  199: {
    mainText: "Det är svårt att kasta på det här avståndet i blåsten och det virvlande regnet på ett mål som bara lyses upp av ett fyrfat. Kaststjärnan klingar till när den genomborrar rustningen på hans rygg, men Kaptenen har bara fått ett lätt sår. Han ropar högt när du väljer att anfalla, ställer sig bakom fyrfatet och välter det. Du hoppar över de glödande kolen samtidigt som en svartklädd figur dyker upp i luften ovanför dig. Det är Manse Dödsmagikern och du kan svagt se det förvridna leendet på hans läppar när han kastar en besvärjelse som får dig att skaka hjälplöst. Honoric rusar fram ur valvgången till sitt torn och du är hjälplös när Marskalken över Domsvärdslegionen sliter svärdet ur händerna på Kaptenen och hugger av ditt huvud.",
  },
  200: {
    mainText: "Du går in genom dörren till värdshuset Volontären och förvånas över att få se ett hjulformat rum, ljust och luftigt med en cirkelformad bar i mitten. Det finns tio bord med stolar fastskruvade i golvet runt dem. men alla tittar på dig och samtalen tystnar, kanske för ljudet från dörren. En man klädd i en dräkt som bär det tioekrade hjulets symbol hälsar dig som Hämnaren och bjuder dig att göra honom sällskap. Du sätter dig mitt emot honom och frågar hur han kan veta ditt namn. \nHan svarar, ”Vi som följer Ödesgudinnan vet ofta vad som ska hända. Vår ledare, Vimsig, förutser alla främlingar som ska komma. ” \n”Men med sådana krafter skulle han väl kunna styra Människoländerna?” säger du. \n”Vi ser bara vad vi är förutbestämda att se och det är inte Vimsigs öde att styra Människoländerna. ” \nDu berättar för honom att tillbedjare av onda gudar har förenats för att förslava sina medmänniskor. Prästen svarar att han vet det och när du frågar honom vad Ödesgudinnans följeslagare tänker göra, gör han bara en gest med händerna och säger, ”Det som sker, sker, och man kan inte göra något åt det.” Han säger också att han inser att Föraningens torn med sin väldiga katedral till Ödesgudinnan kommer att falla först av allt om de onda lyckas, och han säger att han är på din sida. Han ber dig till och med att bli ett Ödets Verktyg, gå samman med en elitgrupp av hjältar som är förutbestämda att utföra stora dåd i hennes tjänst och bli en av Ödesgudinnans tillbedjare. \n”För hon står över alla andra gudar, Balansens bevarare, utan vilken allt skulle förgås. ” \nDu har hört talas om den lilla elitstyrka som tjänar Ödesgudinnan som Hennes Verktyg, och det är verkligen en ära. En av männen lämnar värdshuset när han ber dig följa med till Ödesgudinnans katedral i Fiendil.",
    choices: [
      "Om du vill bli en tillbedjare av Ödesgudinnan",
      "Om du artigt avböjer prästens erbjudande"
    ]
  },
  201: {
    mainText: "Du använder sidan av handen för att slå undan pilen innan den träffar dig och sedan rullar du ut ur fackelskenet. Du ligger stilla tills du hör ett rop från en sidogata. \"Stoppa tjuven\" ropar någon, när en man som håller i en kniv springer ut i fackelskenet. Han skriker till av skräck när vakterna vid stadsporten rusar efter honom och du smiter osedd ut genom stadsporten i det första gryningsljuset.",
    choices: [
      "Gå vidare",
    ]
  },
  202: {
    mainText: "Folkmassan drar efter andan när du glider in under den vitpälsade jättens grepp, lägger båda benen om den och vrider kroppen i ett försök att kasta den till marken. Trots att den har bättre fotfäste än de ﬂesta, finner Snöjätten att isen är hal, men den har ben som är tjocka som din bröstkorg. Om du träffar får du lägga 3 till din Spark- eller Slagmodiﬁkation i det här enda anfallet, när du hoppar upp på fötter, redo att måtta ett slag mot den när den försöker ta sig upp. ",
    choices: [
      "Du antingen använda en Kluven blixtspark",
      "eller Järnnävens slag"
    ],
    stillAlive: "Snöjätten försöker trampa på ditt huvud när du rullar undan för att komma på fötter så fort som möjligt. Ditt försvar mot det är 7 och du har inte tid att blockera."
  },
  203: {
    mainText: "Ringen på ditt finger glöder varmt och när du tittar på blir opalen klar och tycks växa. När du tittar in i den ser du ett mansansikte. Det är blekt och vitt med en lång, krokig näsa och ihåliga kinder. Hans stora, blodröda ögon stirrar uppmärksamt ut ur opalen, som om han letade efter något eller någon. Han kniper ihop dem och pannan rynkas av irritation. Han svär och du är shockad över att höra hans röst, klingande och makaber, när han säger \"Jag kan inte se dig, Förföljare, men du ska veta att ingen kan stå emot Manse Dödsmagikerns häxkonst. \" Han drar sig tillbaka och bakom honom får du syn på en annan man, i röda kläder med ett bälte i svart och guld. Det är Yaemon, Flammans Stormästare. Du fortsätter i hopp om att hinna ikapp dem.",
    choices: [
      "Om du vill gå västerut och gå över Visionernas berg vid Stormjättevägen",
      "Om du föredrar att följa den vindlande Lyckoﬂoden upp i Lyckopasset och gå över bergen där"
    ]
  },
  204: {
    mainText: "Barbarens ögon släpper aldrig din blick när han tar ifrån dig din pengabörs. Sedan kräver han hånleende att få dina Skuggkrigar-verktyg också. Du anfaller hellre än att ge bort utrustningen som du behöver för ditt uppdrag. En blå ljusblixt slår ut med en smäll från ädelstenen på Olvars panna. Du försöker omedelbart vrida dig åt sidan. Ditt försvar mot blixten när du försöker hoppa undan är 5.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  205: {
    mainText: "Din dräkt tar eld när du hoppar genom ﬂammorna och du kan inte andas, elden slukar allt syre. Du faller ihop på golvet och elden rasar runt omkring dig. En fallande bjälke befriar dig från dina plågor. När elden dör ut är det bara ett svartnande skelett kvar av dig.",
    choices: [
      "Gå vidare",
    ]
  },
  206: {
    mainText: "Barägaren har blandat Ras Ande i mjödet och det var starkare än du insåg. Alkoholen går snabbt ut i blodet och du reser dig för att gå, men svimmar. Du vaknar på morgonen, liggande i rännstenen, fullständigt nedlortad. Några av dina guldmynt har försvunnit, men du hade gömt fem av dem på dig och dem har du kvar. Om du hade en Opalring har den också blivit stulen. Stryk den från din Speltabell. Du bestämmer dig för att bege dig norrut, utifall att Yaemon skulle nå Förändringens pelare före dig och lämnar staden på vägen mot Mortavalon.",
    choices: [
      "Gå vidare"
    ]
  },
  207: {
    mainText: "Du går fram mot trappan i hopp om att hitta upp till tornen uppe på Kärntornet, men en kantsten rör sig lite under din fot och det hörs ett klickande från väggen till höger om dig.",
    choices: [
      "Om du har färdigheten Slå av pilar",
      "Om du inte har har den färdigheten"
    ]
  },
  208: {
    mainText: "När du går in mellan de vita marmorpelarna hör du en röst som låter som om den kom från stenarna, ”Välkommen till Helgedomen, drag inga svärd härinne. ” Du kan inte se någon i närheten, men framför dig krälar en väldig, ung krigare klädd i rödbrunt och grått mödosamt uppför trappan till ett tempel. En präst i gul kåpa kommer ut för att hjälpa honom, men när han böjer sig fram rider en riddare till häst i svart harnesk uppför tempeltrappan och hugger av prästens huvud. En annan präst uttalar en besvärjelse, hästen ryggar tillbaka och två andra ryttare som bär samma vapensköld, ett silversvärd hängande i en silvertråd på svart botten, rider fram och tar tyglarna från sin vän. Han förbannar vredgat den unge krigaren, men verkar hjälplös när de leder honom förbi dig och galopperar ut genom marmorporten. Prästerna bär in sin döde kollega och den unge krigaren, som har lämnat ett blodspår på trappan, i templet. När de gör det kraxar en hopskrumpen, böjd gammal man med ett halsband av kristall som klickar när han rör sig, ”Jag förutsade det, men lyssnade ni på mig, Oraklet? Nej! Kommer Frie Béatan att le mot er nu, falska präster?” Han vänder om och hasar mot ett litet träkapell. Den döda prästen tjänade Béatan, vars följeslagare försöker föra paradiset närmare Orb genom att vara nyckfullt goda och strunta i alla lagar som hindrar den fria själen.",
    choices: [
      "Du kan följa efter Prästerna in i Frie Béatans tempel",
      "Du kan lämna Helgedomen och gå in genom Obsidianporten",
      "Du kan följa efter den gamle mannen som påstod sig vara ett Orakel"
    ]
  },
  209: {
    mainText: "Gardeskaptenen duckar och kör in sin armbåge i din mage. Du hoppar bakåt och han välter omkull fyrfatet. Du hoppar över de glödande kolen när en svartklädd figur dyker upp i luften ovanför dig.\nDet är Manse Dödsmagikern och du kan svagt se det förvridna leendet på hans läppar när han kastar besvärjelsen som får dig att skaka hjälplöst. Honoric rusar fram ur valvgången från sitt tom och du är hjälplös när Domsvärdslegionens Marskalk sliter svärdet ur händerna på Kaptenen och hugger av dig huvudet.",
  },
  210: {
    mainText: "På morgonen den tredje dagen utanför Mortavalon är du högt uppe i Lyckopasset. Luften är frisk och doftar av bergsljung. Berget Gwalo-drun höjer sig i en klippig topp framför dig. Du klättrar uppför den steniga sluttningen vid dess fot och halkar bakåt när småstenen glider ned, tills du når ett bälte med tallar. Vid trädlinjen blir bergssidan brant och farlig.",
    choices: [
      "Om du har färdigheten Klättra",
      "Om du inte har den"
    ]
  },
  211: {
    mainText: "När de samtidigt tar ett språng, hoppar du upp och sparkar, men de föser instinktivt din fot åt sidan. En av dem slår dig till marken innan du hinner rulla undan och begraver sina tänder i din hals. Folkmassan ylar i vild glädje när lejonen sliter vilt i dig och du välkomnar Dödens famn."
  },
  212: {
    mainText: "Du travar längs vägen, passerar en och annan resenär till häst eller till fots och någon enstaka karavan, medan du samlar bär och nötter utefter vägen där du går. Du sover en bit från vägen. Du får tillbaka upp till 2 KROPPSPOÄNG och fortsätter i hopp om att nå Mortavalon i skymningen den andra dagen. Vägen vindlar sig uppåt in i ett bergigt område som omger staden Mortavalon och det är eftermiddag när du hör ett underligt väsande och ett plötsligt skrik runt en krök längre fram. Du rör dig försiktigt fram och får syn på en svart man med en kobras vajande hals och huvud, kedjad vid en vagn som det står en stor bur på. Kobramannen har gripit tag i en ung pojke och ska just döda honom. De två männen på vagnen tittar på och är för skräckslagna för att göra någonting.",
    choices: [
      "Lämnar du den lilla pojken åt hans öde",
      "eller springer du fram och sparkar till Kobramannen"
    ]
  },
  213: {
    mainText: "När Fiendils förfallna murar har försvunnit ur sikte bakom dig störs luften av ett svagt skimmer. Du känner hetta mot ansiktet när en egendomlig varelse tar form framför dig. Den är stor som en jätte, men har rubinröd hud och är täckt av slickande lågor. Den breda, grinande munnen är fylld av krokiga, gula betar och två gula, rykande horn kröner dess huvud. Den talar med djup, mullrande stämma.\"Min herre, Manse Dödsmagikern, har sänt mig för att föra dig till Bronsstaden på eldens Elementarplan.\"\nLivet i den fruktade Bronsstaden är värre än själva döden.",
    choices: [
      "Du kan kasta dig fram och anfalla Efretin",
      "eller, om du har färdigheten Giftpilar kan du använda en",
      "Om du har en förtrollad Shuriken och vill använda den",
      "Om du vill använda en vanlig Shuriken"
    ]
  },
  214: {
    mainText: "l din träning i att ta små doser gift ingår också stora mängder alkohol och du kan dricka nästan vem som helst under bordet. Den unge Kaptenen börjar sluddra och drickandet går långsammare. Du berättar för dem att du är en munk som dyrkar den Lede och de behandlar dig som en av de sina. Den unge Kaptenen frågar dig om resan som Honoric, ledaren för Domsvärdslegionen, gör tillsammans med Yaemon. Du säger åt dem att Yaemon färdas norrut i ett viktigt ärende. De skrattar åt det och börjar skämta med dig om att Honorics ärende är viktigare. Du förstår att han också känner till ett ord som kan binda en gud i Inferno och att de färdas mot Snöviddema. Efter ett tag låtsas du ha fått för mycket mjöd och hyr ett rum för natten på värdshuset. Det kostar 2 guldstycken. Du sover lätt med sinnena på spänn, men ingenting händer. Du vaknar på morgonen, lätt uppfriskad. Du får tillbaka 1 KROPPSPOÄNG om du vill. Du ger dig av och går ut ur staden på vägen mot Mortavalon.",
    choices: [
      "Gå vidare",
    ]
  },
  215: {
    mainText: "När du försiktigt undersöker marken på vägen till trappan som kan leda upp till tornen, lägger du märke till att den stora kantstenen framför dig ligger något högre än de andra. Du undersöker väggarna runt dig och ser en spricka i ett av stenblocken. När du petar upp den hittar du en fälla med två armborst som du skickligt oskadliggör genom att lyfta av järnpilarna innan du går uppför trappan. Du glider ljudlöst uppåt.",
    choices: [
      "Gå vidare",
    ]
  },
  216: {
    mainText: "Barbarens ögon går från dig till Runvävare och han tar din pengabörs. Sedan ber han hånleende att få dina Skuggkrigarredskap också. Runvävare drar sitt svärd, kallar dig ynkrygg och anfaller Olvar. Lnnan han kan gå i närstrid med honom slår en blixt ut med en smäll från ädelstenen på Barbarens panna. Den slår in i Runvävares bröstkorg och han slungas in i den bortre väggen, död. Sedan vänder han sig mot dig och ännu en blå blixt slår ut mot dig. Du försöker hoppa rakt upp, över den. Du har 6 i Försvar mot blixten.",
    choices: [
      "Gå vidare",
      "Gå vidare",
    ]
  },
  217: {
    mainText: "Du klättrar ned från vinden och går iväg från Honorics dödskammare nedför trappan till Stora kärntornets tak och klättrar uppför tornet som kröns av Röda Syrsans banér.",
    choices: [
      "Gå vidare",
    ]
  },
  218: {
    mainText: "Det är svårt att kasta på det här avståndet i vinden och det virvlande regnet, mot ett mål som bara är upplyst av ett fyrfat. Kaststjärnan virvlar förbi hans huvud och landar utanför slottsmurama. Gardeskaptenen märkte den inte.",
    choices: [
      "Du kan vänta tills han står på takkanten och kasta honom över den",
      "Du kan använda en giftpil om du har den färdigheten",
      "Du kan smyga fram bakom honom och strypa honom",
      "Du kan vänta tills han kommer närmare och försöka kasta en ny Shuriken"
    ]
  },
  2180: {
    mainText: "Du väntar tills han kommer närmare och försöker kasta en ny Shuriken",
    choices: [
      "Gå vidare",
      "Gå vidare",
    ]
  },
  219: {
    mainText: "Sjöbrisen för med sig saltstänk från havet när du travar fram längs Stjärnhavets östkust. För att spara tid bestämmer du dig för att simma över den smala östra spetsen av det stjärnformade havet. Det kalla vattnet är uppfriskande. Till slut kommer du fram till de stenlagda gatorna i staden Druath Glennan. Husen är höga och smala, byggda av mörkt tegel, förutom träbalkongerna som nästan nuddar vid varandra och gör gatorna mörka och dystra. Du är glad över att ha förklätt dig till sjöman, eftersom vakterna uppenbarligen får sin lön av munkarna som dyrkar den Lede. Deras kloster med sina röda fönsterluckor, ligger utefter ena sidan av Gudarnas torg, mitt emot ett tempel till Allmodern. Du lägger märke till ett fattighus på en av de sjaskiga sidogatorna, förklär dig till tiggare och sällar dig till fyllbultarna där som får hjälp av Allmoderns prästinnor. Du planerar att rekognoscera i den Ledes tempel i hopp om att hitta Yaemon där, när du hör en av tiggarna berätta om hur han blev av med sin arm. Han har ett varigt och blodigt bandage löst hängande från axeln. Det verkar som om han en gång var sopare i klostret, men han slängdes ut eftersom han söp. Han hörde genom omvägar att Yaemon, Flammans Stormästare, besökte klostret och han beslutade sig dåraktigt nog för att kasta sig framför ärkemunken och be att få tillbaka sitt jobb. Yaemon tog underligt nog emot honom, men han talade hånfullt om för honom att till och med rännstenen var en alltför bra plats för honom. Han hade en vän med sig, \"med ondskefullt utseende och ett ondskefullt hjärta. Han hade de mest fasansfulla, själlösa, röda ögon... Manse Dödsmagikern kallade de honom. Hur som helst. Bara för skojs skull sade han att han skulle straffa mig, och innan jag visste vad som hade hänt ramlade min arm av. Jag skulle ha förblött om det inte var för prästinnorna.\"\nHan får inte mycket sympati. En av dem, med sluddrande röst, frågar vad han väntar sig om han beblandar sig med Yaemon, Flammans Stormästare, och Dödsmagikern, den mäktigaste trollkarlen på Orb. Du får veta av deras samtal att Yaemon har väntat med Honoric, ledaren för Domsvärdslegionen, på att Manse Dödsmagikern skulle ansluta sig till dem i Druath Glennan. Nu har de gett sig av mot det slott som kallas Fruktans borg, i närheten av Vättetandsbergen. Eftersom det är sent bestämmer du dig för att stanna i fattighuset och ge dig av följande morgon. \nDu vaknar mitt i nattet av lukten av sur rök. Rummet som du sover i har fattat eld och lågorna blockerar dörröppningen och fyller hallen utanför. Det finns inga fönster att fly genom. Rummet fylls med rök.",
    choices: [
      "Om du hoppar genom den täta väggen av eldslågor",
      "Om du sliter loss golvplankoma",
    ]
  },
  220: {
    mainText: "Du springer fram till isen och hoppar upp på den, så att du glider iväg från lejonen. De springer efter dig, men tappar fotfästet på den förrädiska ytan och får ganska komiska ansiktsuttryck när de upplever något helt oväntat. Du lyckas ta dig förbi dem genom att använda din utmärkta balansförmåga. Varje gång de kastar sig mot dig halkar de och faller platt ned. Du springer över slätten och hoppar ned i träsket. Lejonen, som kommer upp på gräset, hugger efter dina hälar igen, men stannar innan de kommer ut i det onaturligt gröna slemmet. ",
    choices: [
      "Gå vidare"
    ]
  },
  221: {
    mainText: "När du mediterar i templet tycks din kropp och själ fyllas av Kwon Försonarens harmoni. Du får tillbaka upp till 3 poäng INRE KRAFT, när Guden ger dig av sin styrka. Munken, Bartholdy, ser att du har Kwons ynnest och ber dig bedja inför hans bröder i refektoriet före middagen. Du avböjer och berättar i stället för honom om ditt uppdrag. När han hör att du är en Skuggkrigare håller han med om att bara han och den lokale Stormästaren bör känna till ditt uppdrag. Stormästaren, Bartok, en skröplig gammal man, är vis men svag och fylls av fruktan när han får höra dina nyheter. Han har dock hört att Yaemon har passerat genom Mortavalon för åtta dagar sedan, kanske, tror han, för att ta sig till den Ledes prästerskaps kloster i staden Fiendil. Han råder dig att färdas norrut mot Lyckopasset, så att du kan ta dig till snöns länder före Flammans Stormästare. Han fortsätter, ”Det finns en man som bor i bergen, en mystiker, men han följer Tigerns väg. Han är äldre än jag, men Kwons välvilja har hållit honom stark och vig. Han heter Togawa och för länge sedan var han Gryningens Stormästare på De Stilla Drömmarnas Ö. Han lever på berget Gwalodrun och därifrån släpper han sin själ fri att vandra på andra existensplan. Han kanske kan tala om för dig var du kan finna Yaemon.” Du äter ensam i en liten munkcell och sömnen vederkvicker dig. Du får tillbaka upp till 4 förlorade KROPPSPOÄNG. Följande dag lämnar du munkarna att förbereda sig inför mörkrets dag, om ditt uppdrag skulle misslyckas. Du har inte hunnit ikapp Yaemon än, så du lämnar staden genom den norra porten på morgonen.",
    choices: [
      "Tänker du färdas genom ödemarken mot Fiendil",
      "bege dig norrut till Stormjättepasset",
      "eller bege dig åt nordost till Lyckopasset och mystikern Togawa"
    ]
  },
  222: {
    mainText: "Munkens huvud slungas bakåt och skallen missformas av ditt slag.\n Hans nacke bryts med ljudet av ett piskrapp och huvudet slänger löjligt fram och tillbaka som huvudena på dockorna gjorda av Leksaksmakaren vars liv du just har räddat. Han återhämtar sig och ler och tackar, men den lilla ﬂickan, hans dotter, springer fram till dig och täcker din hand med kyssar. Du frågar Leksaksmakaren om han har sett Yaemon, Stormästare av Röda syrsans orden. Han skakar på hvudet:\n\"Ingen vaktar portarna här. Det går inte att veta vilka som kommer och går.\" Du tackar honom och avböjer artigt hans erbjudande att stanna hos honom, eftersom du vill lämna Fiendil innan den Ledes prästerskap kommer underfund med vad du har gjort med två av deras bröder.",
    choices: [
      "Gå vidare",
    ]
  },
  223: {
    mainText: "Du småspringer längs vägen, passerar några resenärer till häst eller fots och någon enstaka karavan, och du samlar bär och nötter längs vägen där du går. Du sover en bit bort från vägen. Du får tillbaka upp till 2 KROPPSPOÄNG och fortsätter i hopp om att nå Mortavalon i skymningen nästa dag. Vid middagsﬁd närmar sig ännu en karavan med fyra vagnar. Den åtföljs av fyra karavanvakter till häst, klädda i ringbrynja och underligt nog med stndsklubbor. Du springer misstänksamt vidare när en av dem plötsligt ropar, \"Skuggkrigaren!\" De stormar fram mot dig och svingar sina vapen. När de kommer nära ser du att de bär Svarta Virvelströmmens symbol.",
    choices: [
      "Om du är Akrobat kan du försöka hoppa undan och hoppa upp bakom en av angriparna",
      "Annars kan du blockera det första klubbslaget med din järnärm och försöka stjälpa angriparen ur sadeln",
      "eller ducka ned på marken i vetskap om att hästarna inte kommer att trampa på dig"
    ]
  },
  224: {
    mainText: "Den ondsinte Torteraren kastas i vattnet av ditt dödliga slag och guppar stilla med huvudet nedåt. Fångama bönfaller dig om att du ska befria dem. Du ser möjligheten att skapa en avledande manöver, så du gör det. Du ber dem bara att räkna till tvåhundra innan de följer efter dig ut ur kammaren.",
    choices: [
      "Gå vidare",
    ]
  },
  225: {
    mainText: "Du ger barägaren två guldstycken för rummet och går upp på övervåningen. Du sover lätt med sinnena på helspänn och är redo när tre fulla soldater rusar in. Det är bara ett ögonblicks verk att slå två av dem medvetslösa med skickliga sparkar och den tredje stirrar förvånat på och springer sedan ut ur rummet. Du sover lite under resten av natten och får tillbaka 1 KROPPSPOÄNG, om du hade förlorat någon. På morgonen lämnar du staden på vägen mot Mortavalon.",
    choices: [
      "Gå vidare"
    ]
  },
  226: {
    mainText: "När du hoppar mot Olvar nickar han mot dig och en blixt slår ut med en smäll mot dig från ädelstenen på hans panna. Du har 6 i Försvar mot blixten när du försöker hoppa undan.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  227: {
    mainText: "Kobramannen väser och skruvar sig i änden på kopplet, då pojken flyr till tryggheten medan Kobramannen var distraherad. De två männen, väldiga, feta sällar som liknar de oxar som drar deras vagn, berättar för dig att de ska föra Kobramannen till djurparken i Mortavalon.\n\"Han bodde ensam i en grotta en liten bit upp i berget här\", säger en och pekar mot ett mörkt hål i bergssluttningen, täckt av ett klipputsprång. \"Vi vågade inte ge oss för långt in, men det finns säkert skatter att hämta, det garanterar jag.\" Så piskar de sina oxar framåt och drar den väsande Kobramannen efter sig.\nPojken, som sitter bak på vagnen, ropar, \"Tack för att du räddade mig - skaka inte hand med den unge magikern!\" Männen skrattar och du lämnas att fundera över meningen bakom hans underliga ord.",
    choices: [
      "Om du går förbi oxkärran och rakt mot Mortavalon",
      "Om du går in i grottan"
    ]
  },
  228: {
    mainText: "Du faller glidande till marken, och innan Yaemon vet vad som händer lägger du dina ben runt hans, vrider vildsint till och fäller honom till golvet. Han kan inte använda sina ben för att hindra fallet ordentligt, så han slår i slottstaket med ett skrik. Han förlorar 2 KROPPSPOÄNG.",
    stillAlive: "Annars återhämtar han sig snabbt och när du drar upp knäna till bröstet och rätar ut benen så att du smidigt kommer upp på fötter, står han framför dig. Men du har fortfarande initiativet.",
    choices: [
      "Använder du Draksvanskastet igen",
      "eller Virvelkastet",
      "eller ett slag",
      "eller en spark"
    ]
  },
  229: {
    mainText: "Du vecklar ut den vaxade tråden tills den hänger alldeles över munnen på Domsvärdslegionens Marskalk. Du öppnar flaskan som innehåller blod från Intet, Intighetens mun, det kraftigaste gift som är känt.\nDet ryker när de svarta dropparna rinner nedför tråden och droppar ned i Honorics öppna mun. Han blir stel och du vet att han är hjälplös och dör av kvävning när bröstkorgen paralyseras. Du har mördat Marskalken, en av de mäktigaste männen på Orb.",
    choices: [
      "Om du går ned i kammaren och tar det rykande svärdet, Sorcerak",
      "Om du bestämmer dig för att gå utan det, kan du gå över Kärntornets tak till tornet med Svarta Virvelströmmens ﬂagga",
      "eller till tornet med Röda Syrsans flagga"
    ]
  },
  230: {
    mainText: "När vinden visslar runt det Stora Kärntornet hörs ett plötsligt, plågat ylande. För ett ögonblick reser sig håren på din nacke av skräck, tills du inser att det bara är vinden som ylar i en skottglugg i ett av tornen.\nKaptenen ser omskakad ut och du väljer det här ögonblicket för att sticka upp huvudet och blåsa en giftpil mot honom genom det virvlande regnet. Han är bara upplyst av glöden från fyrfatet, men giftpilen träffar sitt mål. Han faller ihop på golvet med ett brak från rustningen när vinden ylar igen. Du lägger märke till att alla tre tornen har en valvgång som leder till en spiraltrappa.",
    choices: [
      "Du kan klättra upp i tornet med Domsvärdets ﬂagga",
      "eller tornet med Röda Syrsans flagga",
      "eller tornet med Svarta Virvelströmmens ﬂagga"
    ]
  },
  231: {
    mainText: "När lejonen kastar sig fram inser du att till och med du är en enkel match för dem, naturens perfekta mördare. Folkmassan blir tyst.",
    choices: [
      "Är du en Akrobat? Om du är det",
      "Om du inte är det"
    ]
  },
  232: {
    mainText: "Skeppet som Glaivas har hyrt, ”Aquamarin”, har hundra åror och två master. Vindarna är vänliga mot er när ni ilar över den azurblå ytan. Havet är så lugnt, att efter två veckor utan ett stänk av saltvatten på läpparna glömmer du att det alls består av vatten. Roddarna ror i tio timmar om dagen, men de är fria män och inte kedjade vid årorna Två bär märken av piraternas piska, de har varit fångade av sjörövare, men hör till de lyckliga få som har överlevt och fått se himlen igen. Alla har roddarens tunga överkropp, några som gick till sjöss för att tjäna sitt levebröd i unga år är förkrympta och missformade, formade av livet vid åran till groteska karikatyrer av bergsdvärgar. \nMångfaldens land glider förbi söder om er och ni är inom synhåll från Magiska Gudinnans Ö när utkiken ropar en varning. Styrmannen sätter en ny kurs och trumslagen blir snabbare när roddarna fördubblar sina ansträngningar. Skeppet som närmar sig är långt och lågt, målat i grönt och rött och med en röd vimpel i masttoppen. Glaivas, som står bredvid dig vid relingen, säger, ”Det där skeppet är från Piraternas hamn, vi kommer aldrig undan det.” Så drar han sitt svärd. Roddarna tar ut sig till det yttersta, men trots att de svettas av ansträngningen kan de inte ro snabbare än slavarna på Piraternas skepp, sporrade till ett vansinnigt tempo av slavdrivarnas knutpiskor. Till sist ger Kaptenen order om ”förbered avhysning av äntergastar” och du gör dig redo för strid. Piratskeppet har en spetsig ramm, men de försöker uppenbarligen ta Aquamarin hel, för de hakar sig fast och lägger sig långsides. Piraterna har kroksablar och kedjenät och leds i anfallet av ett tre meter långt monster vars kropp är täckt med knutar av felväxta ben, en Människoätare med en lång spikklubba. Aquamarins besättning verkar inte vara någon match för de stridsvana sjörövarna.",
    choices: [
      "Du kan hoppa upp i riggen och kasta en Shuriken på Människoätaren",
      "Du kan anfalla Människoätaren när den kommer ombord och samtidigt plattar till en del av Aquamarins reling"
    ]
  },
  233: {
    mainText: "Runvävare ligger död vid dina fötter, med sitt svärd nedkört i trägolvet bredvid sig. Du plockar upp det, men inser att han verkligen var både magiker och krigare, för det krävs en magikers besvärjelse för att skapa de pulserande, gröna ljuskloten som exploderar när de träffar någonting. Du sträcker dig efter Tiaran, men bränner dig när du rör vid den. Magiska tecken som finns inristade i den visar att den smiddes djupt nere i Klyftan av svartalver. Ingen med rent hjärta kan röra vid den. Du tillbringar natten i kojan och får tillbaka upp till 3 KROPPSPOÄNG. Du lämnar kvar de odugliga skattema. De skulle bara tynga dig på resan. l gryningen ger du dig av igen för att fullgöra ditt uppdrag. Senare på dagen går du ned från det höga Lyckopasset.",
    choices: [
      "Ska du bege dig mot nordöst till Stjärnhavet och Druath Glennan",
      "eller norrut mot staden Nordansnö",
      "eller österut genom Trollkärret till Ionalbion och vidare med båt över Stjärnhavet"
    ]
  },
  234: {
    mainText: "”Men vi har väntat på dig. Vimsig själv känner redan till dig, men inte den Ledes tjänare, det är inte deras öde att veta... ” Han tystnar, ”. ..ännu. ” \n”Vem är Vimsig?” frågar du. \n”Ödets Överstepräst, Fiendils härskare. Du vet inte mycket, främling. Här får du en gyllene välsignelse. Gå till Volontären. ” Han pekar nedför huvudgatan. ”Där får du höra något du får nytta av. Ja, vi visste allt att du skulle komma.” Han brister ut i ett rungande skratt. Eftersom du inte vill väcka mer uppmärksamhet skyndar du nedför huvudgatan, Drömmarens Promenad. Tjugofem meter nedåt gatan hänger Volontärens skylt, en ung krigare med böjt knä som mottar ett svärd från en man i gyllene kläder och som bär en leende guldmask.",
    choices: [
      "Ska du följa den gamle eremitens råd och gå in",
      "eller fortsätta nedför Drömmarens Promenad"
    ]
  },
  235: {
    mainText: "Du samlar en hel del druvor och nötter och lever av vad naturen ger, när du småspringer genom vildmarken och håller riktningen med hjälp av solens läge och höjd på himlen. Du rör dig snabbt och kommer snart in i ett lågt bergslandskap täckt av cypresser. Du klättrar upp i en och tillbringar natten där ostört. Du får tillbaka upp till 2 KROPPSPOÄNG.",
    choices: [
      "Om du vill fortsätta genom vildmarken och passera norr om Mortavalon",
      "Om du vill gå tillbaka ned på vägen i närheten av staden Mortavalon"
    ]
  },
  236: {
    mainText: "Den andre munken tvekar en sekund när du kastar dig med fötterna före mot hans ben. Om det är första gången du försöker kasta honom har han 5, inte 6, i Försvar mot det överraskande anfallet.",
    successfulThrow: "Du lyckas kroka fast dina ben bakom hans och vrider till våldsamt så att han faller till marken. När han faller drar du tillbaka dina fötter och använder händerna för att resa upp ryggen från marken, som en krabba, och sedan hoppa upp till stående.",
    unsuccessfulThrow: "Du misslyckades med att kasta honom och han hoppar upp över ditt svepande kast och landar på föttema, samtidigt som du hoppar upp. Han försöker slå till dig med två knytnävsslag. Du har 7 i Försvar.",
    choices: [
      "Du kan sparka",
      "eller slå din motståndare"
    ]
  },
  237: {
    mainText: "Du försöker kasta en av angriparna. Han börjar nyktra till, men är fortfarande ganska berusad. Han har 5 i Försvar mot ditt Virvelkast.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Järnnävens slag"
    ],
    directWin: "Du lyckas kasta honom.",
    stillAlive: "Om du inte lyckas kasta honom angrips du av de av dina motståndare som är i livet. Du har 7 i försvar mot dem om tre lever, 8 om två lever och 9 om bara en fortfarande är vid liv. Var och en gör ett individuellt anfall mot dig och du kan bara blockera ett av dem. Varje anfall gör 1T6+1 i skada om de träffar"
  },
  238: {
    mainText: "När du slår till med sidan av handen, blockerar Torteraren med yxan hängande i snodden från hans handled. Han är skicklig på att slåss med knytnävarna.",
    choices: [
      "Om du fortfarande lever kan du använda Tigersprångets spark",
      "eller Tigertandskastet",
      "eller försöka slå igen."
    ],
    stillAlive: "Om Torteraren fortfarande lever fintar han med yxan och försöker måtta ett kraftigt slag mot dig med andra handen. Du har 7 i Försvar."
  },
  239: {
    mainText: "När du hoppar fram mot Olvar, nickar han mot dig och en blixt slår ut med en smäll från ädelstenen på hans panna. Du försöker hoppa över blixten och du har 5 i Försvar mot den.",
    choices: [
      "Gå vidare",
      "Gå vidare",
    ],
    stillAlive: "Om du inte lyckas kasta honom angrips du av de av dina motståndare som är i livet. Du har 7 i försvar mot dem om tre lever, 8 om två lever och 9 om bara en fortfarande är vid liv. Var och en gör ett individuellt anfall mot dig och du kan bara blockera ett av dem. Varje anfall gör 1T6+1 i skada om de träffar"
  },
  240: {
    mainText: "Du snurrar blixtsnabbt runt åt höger på vänsterfoten och slår upp med höger häl i en båge som om benet var en kedja och foten en tung metallkula. Den slår in i sidan av Yaemons ansikte med en smäll och får hans huvud att virvla runt. Kraften från slaget gör att han slungas iväg, nätt och jämnt förmögen att hålla sig på fötter. Dra 8 från hans KROPPSPOÄNG. Fördubbla det om du använde INRE KRAFT.",
    choices: [
      "Om du använder Kwons slaga igen",
      "eller en Kluven blixtspark",
      "eller Bevingade hästens spark",
      "eller ett slag",
      "eller ett kast"
    ],
    stillAlive: "Om han fortfarande, lever hoppar du med huvudet före mot honom och gör en volt i luften, så att bägge föttema slår mot honom i en ﬂygande spark. Han återhämtar sig i sista ögonblicket och får upp höger underarm över ansiktet, så att han kan fösa dina fötter åt sidan. Du landar mjukt med ryggen mot honom, handlar snabbt och slår upp med vänster fot i en båge från vänster till höger. Den här gången duckar Yaemon och när du vänder dig om för att möta honom måttar du en Tigersprångets spark mot hans ansikte. Yaemon är pressad.\nHan backar och undviker din spark med några tum. Sedan gör han en volt tillbaka, på händerna och sedan upp på fötter, och fortsätter att volta tills han är gott och väl utom räckhåll. Du följer efter honom och när han stannar är du beredd att anfalla igen."
  },
  241: {
    mainText: "Du väntar på att Runvävare ska göra ett utfall mot dig och går sedan åt sidan och försöker gripa tag i hans handled, vrida till och kasta honom över höften.",
    choices: [
      "Du kan antingen slå",
      "eller sparka medan han kämpar för att komma på fötter."
    ],
    unsuccessfulThrow: "Om du inte lyckas kasta honom drar han tillbaka sin svärdsarm och måttar ett väldigt hugg mot ditt huvud. Du har 7 i Försvar mot hans klinga."
  },
  242: {
    mainText: "Han berättar att han är en munk som dyrkar Kwon och bjuder dig att följa med till hans kloster i Försoningens Trädgårdar. Templet ligger i en rosenträdgård och du är lycklig över att ha hittat en säker tillflyktsort där du kan meditera och söka hjälp. Du faller på knä i bön i det kala templet och bredvid sjunger munken psalmen till Kwon Förlösaren.",
    choices: [
      "Gå vidare",
    ]
  },
  243: {
    mainText: "När du går ut på slätten går mannen i blått och guld ut på issjön. Lejonen rusar dreglande fram mot dig. De är stora och starka. Du kan inte låta bli att beundra deras styrka och snabbhet.",
    choices: [
      "Ska du möta dem på gräset",
      "eller gå tillbaka ut på issjön"
    ]
  },
  244: {
    mainText: "Den andre munken anfaller. lnnan han hinner sparka till, dansar du fram och slår till med raka fingrar under hans revben.",
    choices: [
      "Om du fortfarande lever kan du använda Bevingade hästens spark",
      "eller Draksvanskastet",
      "eller Kobraslaget igen"
    ],
    successfulOpponentThrow: "Han kastar dig och du ﬂyger genom luften och slår i marken med axeln före. Du rullar upp på fötter, men munken är redo och försöker sparka dig. Du har bara 6 i försvar mot det och du har inte tid att blockera.",
    stillAlive: "Om han fortfarande lever försöker han kasta dig till marken. Ditt försvar mot Syrsans variant av Virvelkastet är 7."
  },
  245: {
    mainText: "Du kastar dig till marken och försöker fånga hans ben mellan dina för att välta honom, men han är beredd den här gången och hoppar rakt upp så att han landar på dig. Han trampar dig i mellangärdet med ett vrål, när han släpper fram sin INRE KRAFT. Dina revben knäcks som bambuspön. Du förlorar 10 KROPPSPOÄNG och han hoppar över dig och vänder sig i luften så att han landar framför ditt huvud. Om du fortfarande lever, lyckas du övervinna din smärta och slå ihop händerna, samtidigt som du tittar upp och bakåt, så att du med snabbheten och styrkan hos en björn fångar Yaemons fot när han försöker sparka igen. För ett ögonblick tror du att du har honom fast, men han genomför sin spark och skjuter ifrån med det andra benet. Han använder ditt grepp som en språngbräda och slungar hela kroppen framåt så att hans ben slits ur ditt grepp. Du drar upp knäna till bröstet och rätar ut benen, så att rörelsens kraft får dig på fötter. Du hinner precis se Yaemon vrida sig i luften för att landa framför dig igen. Du har initiativet.",
    choices: [
      "Ska du slå",
      "eller sparka",
      "eller försöka använda Virvelkastet"
    ]
  },
  246: {
    mainText: "Du är immun mot kobrans dödliga gift, men inte mot magin som höll den fången i Ormstaven. Dess käftar sluter sig obevekligt om din hals och du sliter förtvivlat när tändema närmar sig halspulsådern. l desperation sliter du loss ormhuvudet från din hals. Du krossar hjärnan på den och sargar dig själv svårt. Du förlorar 4 KROPPSPOÄNG. Om du fortfarande lever förbinder du halsen med hjälp av en bit tyg från din dräkt och hämtar andan innan du bestämmer dig för vilket tom du ska gå in i härnäst.",
    choices: [
      "Du kan välja tornet som kröns av Domsvärdets banér, om du inte redan har varit där",
      "eller tornet som ståtar med Röda Syrsans flagga"
    ]
  },
  247: {
    mainText: "Vinden visslar runt det Stora Kärntornet och plötsligt hörs ett plågat ylande. För ett ögonblick reser sig håren på din nacke av fasa, innan du inser att det bara är vinden som viner i en skottglugg i ett av tornen.\nKaptenen rycker till och du bestämmer dig för att det är rätt ögonblick att smyga sig fram bakom honom. Han är på sin vakt och tycks märka dig i sista ögonblicket. Gör ett Anfallsslag när du sänker din strypsnara över hans huvud.",
    choices: [
      "Gå vidare",
      "Gå vidare",
    ]
  },
  248: {
    mainText: "Dina nävar slår blixtsnabbt ut mot en av angriparna. Du får välja vem av dem det blir.",
    choices: [
      "Du kan använda Virvelkastet",
      "eller Bevingade hästens spark",
      "eller ett nytt slag"
    ],
    stillAlive: "Var och en av de soldater som fortfarande lever anfaller dig en gång. Du kan bara Blockera en attack."
  },
  249: {
    mainText: "Torteraren är inte van vid motståndare som sparkar med sådan dödlig kraft och otrolig snabbhet.",
    choices: [
      "Om du fortfarande lever kan du använda Tigertassens slag",
      "eller Tigertandskastet",
      "eller Tigersprångets spark igen."
    ],
    stillAlive: "Om Torteraren fortfarande lever viner hans yxa genom luften när han försöker klyva din skalle. Du har 7 i Försvar."
  },
  250: {
    mainText: "Du tar ett steg in åt höger och försöker slå in högerfoten i hans mellangärde och sedan vidare upp mot hans strupe i snabb följd.",
    choices: [
      "Om du fortfarande lever kan du slå",
      "eller kasta",
      "eller sparka igen"
    ],
    stillAlive: "Om han fortfarande lever anfaller han dig och du har 7 i Försvar mot hans hugg."
  },
  251: {
    mainText: "Runvävare gör upp en eld i kojan medan du sätter dig på golvet för att meditera. Hans enda rustning är ett brösthamesk av härdat läder och du lägger märke till att han på något sätt gör upp eld utan ﬂinta och stål. Din själ vandrar vida omkring när dörren till kojan plötsligt slås upp. ln kommer en barbarkrigare. Han bär ett halsband av jättevesslans tänder, ett bjömskinn och en underlig tiara med en djupblå ädelsten på pannan. Han har en egendomlig rustning av överlappande metallbitar, som fiskfjäll. Han pekar illvilligt med sitt långsvärd och säger på nordmännens förvrängning av handelsspråket, \"Nåväl, mina små bergstomtar. Jag tar hand om era pengar och alla era saker\". \nRunvävare svarar, \"Vad tar du oss för, som hotar oss på det sättet? Enkla bönder?\"\nBarbaren säger, \"Jag struntar i om ni så är prinsar. Jag är Olvar Kaoskrigaren och jag tar hand om allt ert guld.\"\n",
    choices: [
      "Du kan anfalla",
      "Du kan ge honom din pengabörs",
      "Du kan kasta blixtpulver i elden"
    ]
  },
  252: {
    mainText: "Isen är förrädisk och det är bara din goda balansförmåga som gör att du kan behålla fotfästet när Snöjätten kastar sig över dig, viftande med sina svarta klor. Du kan inte se hans ögon, men av hans vildsinta beteende inser du att du måste slåss mot den vitpälsade kolossen.",
    choices: [
      "Ska du kasta dig fram över isen och använda Draksvanskastet",
      "eller rycka fram och använda Järnnävens slag",
      "eller försöka använda en Kluven blixtspark"
    ]
  },
  253: {
    mainText: "Ditt slag är så kraftigt att trots det magiska fältet som skyddar honom viker sig magikern och din Bevingade hästens spark skickar honom genom luften och ned i vallgraven. Vattnet kokar när de Flytande munnarna kastar sig mot sitt byte. lnom en minut har allt kött slitits från benen. Du klättrar upp mot Vätten i tornet. Monstret gör sig till inför folkmassan, säker på att segra igen. Han slår sig för bröstet, som är dubbelt så brett som ditt, och snurrar treudden i handen. Tornet är grovt byggt med många fästen för händerna när du rör dig runt det för att inte låta Vätten veta precis var du befinner dig. Sedan håller du fast i en stenskreva och svingar dig upp i tornet bakom honom. Han snurrar runt och du anfaller honom med blixtrande snabbhet.",
    choices: [
      "Använder du Tigersprångets spark",
      "eller Virvelkastet",
      "eller Tigertassens slag"
    ]
  },
  254: {
    mainText: "När du lämnar Domedags illavarslande tom och murar bakom dig, klättrar solen upp på himlen och skiner ned på mognande majs och kom som vajar för vinden. Fälten sträcker sig inte så långt och du når snart fram till en låg slätt, Fotslätten, där flera tusen mannar från Domsvärdslegionen, skickligt och effektivt, tränar inför det kommande kriget. Slätten övergår snart i vildmark med träd och slingerväxter.",
    choices: [
      "Om du fortsätter på vägen till Mortavalon",
      "Om du går norrut från vägen, ut i vildmarken"
    ]
  },
  255: {
    mainText: "Mannen vänder sig bort som om han hade tagit miste, och du tar dig ut ur massan av kroppar så fort du kan. Du har blivit välkänd i Mortavalon. Alla talar om dina bedrifter på arenan och du bestämmer dig för att det är klokt att lämna staden och dess intresse för ond, bråd död. Du går ut genom den norra portalen, förklädd till lantarbetare.\nVakterna vid porten frågar dig vart du ska, \"Det är spelens dag, en helgdag\", men du ignorerar dem och de låter dig gå.",
    choices: [
      "Om du beger dig mot nordost över vildmarken till staden Fiendil",
      "Om du beger dig norrut mot Stormjättevägen längs Visionernas berg"
    ]
  },
  256: {
    mainText: "Du går fram på höger fot och lyfter sedan vänster, svänger runt åt höger och sparkar ned vänster häl i luften mot den ena angriparens huvud. Du får välja vem du anfaller.",
    choices: [
      "Du kan använda Virvelkastet",
      "eller Järnnävens slag",
      "eller sparka igen"
    ],
    stillAlive: "Var och en av soldaterna anfaller en gång. Du kan bara blockera en av dem."
  },
  257: {
    mainText: "Din Shuriken glittrar i solen när den slungas mot Människoätarens bröst. När du hoppar ned från riggen avfyras en skur av pilar från akterkastellet på Kaparnas skepp. Människoätaren grymtar till av smärta när din Shuriken begraver sig i bröstkorgen på den. Slå en tärning och dra summan från det väldiga monstrets KROPPSPOÄNG på 16. En av piraternas pilar kommer mot dig.",
    choices: [
      "Försök skydda dig från pilen",
      "Hoppa ner från riggen"
    ]
  },
  258: {
    mainText: "Den andre munken är nätt och jämnt vid medvetande, men han knäfaller framför dig på gatan och böjer sig inför din överlägsna kraft och förmåga.",
    choices: [
      "Skonar du honom",
      "eller gör du slut på honom med en spark mot huvudet"
    ]
  },
  259: {
    mainText: "Torteraren blir överraskad av ditt otroliga hopp och tappar nästan yxan. Den dinglar i läderremmen från hans handled när han försöker kasta tillbaka ditt ben från huvudet.",
    choices: [
      "Om du fortfarande lever kan du använda Tigersprångets spark",
      "eller Tigertassens slag",
    ],
    unsuccessfulThrow: "Om du misslyckas med att kasta honom fångar han din fot och slungar dig in i tortyrkammarens vägg. Du förlorar 2 KROPPSPOÄNG Om du fortfarande lever, hugger han mot dig med yxan. Du har 7 i Försvar när du rullar åt sidan. Om du fortfarande lever hoppar du upp på fötter.",
    successfulThrow: "Om du lyckas kasta honom kan du följa upp med en attack medan han fortfarande ligger ned."
  },
  260: {
    mainText: "Resan genom ödemarken tar fyra dagar Om du var skadad får du tillbaka upp till 6 KROPPSPOÄNG. Under en stor del av resan följer du Lyckoﬂodens ﬂodbankar som möts av en sällan använd stig från Fiendil till Grågille Hed, Kunskapens stad långt i söder. Det regnar på den tredje dagen och för första gången lägger du märke till att klimatet är mycket kyligare här än på öarna i Ändlösa havet. Till sist, när bergen hägrar framför dig, ser du staden Fiendil ligga i en grönskande dal. Stadsmuren är dåligt underhållen, på sina ställen till och med nedriven, och det finns inga vakter vid stadsporten, bara en gammal man i vinfläckig toga som sitter på ett stenblock som en gång var en del av porttornets befästning. Du ska just gå förbi honom när han ropar lågt till dig, ”Hämnare, välkommen till Fiendil. Du har färdats från De Stilla Drömmarnas Ö.” Han är ålderssvag och tycks inte utgöra något hot mot dig, förutom att han på något sätt vet vem du är Det finns ingen annan inom synhåll.",
    choices: [
      "Du kan be honom att inte berätta om dig för någon",
      "eller döda du honom med ett skickligt slag mot huvudet"
    ]
  },
  261: {
    mainText: "Arenans golv är indelat i sektioner. l mitten står en väldig Vätte och svingar en treudd på toppen av ett miniatyrslott omgivet av en stor vallgrav. Cirkeln utanför vallgraven är indelad i fyra sektioner med järnstaket. Sektionen till vänster om dig är en liten grässlätt, till höger om dig ligger en frusen sjö, skapad av magi. Bortom slätten ligger ett kusligt, grönt träsk och mellan träsket och isen ﬁnns en öken med sanddyner. Du står på en plattform mellan gräset och isen. På andra sidan arenan står en man i silverrustning med ansiktet dolt av ett visir, på en likadan plattform. Mellan er två, på vänster hand, står en Svartalv som utmanande viftar med sitt svarta svärd och vid arenans högra kant står en ung man i svepande klädnad i blått och guld. På issjön står en tre meter hög Snöjätte, och på slätten strövar två rytande lejon. Du ser bara en båt i träsket och i öknen väntar en man med en kobras vajande huvud och hals. När du ser dig omkring börjar plattformen glida ned mot marken och du är snart inom räckhåll för lejonen eller Snöjätten. Nu kan de faktiskt röra sig in på varandras områden. Arenans väggar är släta och kantade av soldaters    spjut. Mannen i rustning stiger in bland sanddynerna och Svartalven vadar ut i träsket. Mannen i blå och gyllene klädnad väntar stilla.",
    choices: [
      "Ska du gå ut på slätten och pröva lyckan bland lejonen",
      "eller gå ut på issjön"
    ]
  },
  262: {
    mainText: "Du gör upp en liten eld i kojan innan du sätter dig på golvet för att meditera. Din själ vandrar i fjärran när dörren till kojan plötsligt öppnas. In stiger en barbarkrigare. Han bär ett halsband av jättevesslans tänder, ett björnskinn och en underlig tiara med en djupblå sten på pannan. Hans rustning är egendomligt gjord av överlappande metallplattor likt ﬁskfjäll. Han pekar illvilligt med sitt långsvärd och säger på en oborstad nordmans variant av handelsspråket, \"God kväll, min lilla bergstomte. Olvar Kaoskrigaren tänker ta alla dina pengar!\"\nSka du?",
    choices: [
      "Hoppa upp och anfalla?",
      "Ge honom din pengabörs?",
      "Kasta blixtpulver på elden?"
    ],
  },
  263: {
    mainText: "Du slår till mot sidan av Runvävares hals, snabb som en huggande orm.",
    choices: [
      "Om du överlever kan du sparka",
      "eller kasta",
      "eller slå till igen"
    ],
    stillAlive: "Om han fortfarande lever sveper han till med svärdet mot dina ben. Du har 6 i Försvar när du försöker hoppa över bladet."
  },
  264: {
    mainText: "Den andre munken går till anfall. Du vänder dig åt sidan och riktar en Bevingade hästens spark mot honom när han närmar sig.",
    choices: [
      "Om du fortfarande lever kan du använda Kobraslaget",
      "eller Draksvanskastet",
      "eller sparka igen."
    ],
    stillAlive: "Om han fortfarande lever svarar han dig med en spark för en spark"
  },
  265: {
    mainText: "Du hoppar upp och hänger dig i hålet som leder upp på vinden, sedan klämmer du dig igenom och upp på brädoma ovanför. Du känner efter lösa brädor och kravlar försiktigt fram till en spricka i innertaket.\nEtt ensamt ljus som brinner i kammaren nedanför ger tillräcklig belysning för att du ska kunna se. Honoric sover. Hans arroganta drag verkar mindre grymma än när han är vaken, och han har munnen öppen och snarkar lätt. Hans väldiga svärd ligger utdraget ur skidan bredvid honom. Du kan inte se några fällor i kammaren.",
    choices: [
      "Om du vill hälla din enda dos av Intets blod på en vaxad tråd ned i Honorics mun.",
      "Om du föredrar att gå tillbaka nedför trappan och gå in genom dörren efter att ha oljat gångjärnen",
    ],
  },
  266: {
    mainText: "Vilket slag vill du använda? Du måste bestämma nu om du ska använda INRE KRAFT.",
    choices: [
      "Kobraslaget?",
      "Järnnävens slag?",
      "Tigertassens slag?"
    ],
  },
  267: {
    mainText: "Vätten försöker skyffla upp dig på änden av sin obehagligt hullingförsedda treudd, men du dansar åt sidan och försöker gripa tag i skaftet på den så att du kan slänga hans tunga kropp över höften.",
    choices: [
      "Du kan slå",
      "eller sparka",
    ],
    successfulThrow: "Om du lyckas kasta honom ser du honom rulla runt och komma upp på fötter, men du anfaller medan han reser sig.",
    unsuccessfulThrow: "Om du misslyckas med att kasta honom kör han in sin armbåge 1 dina revben med benknäckande styrka (du förlorar 2 KROPPSPOÄNG) Om du fortfarande lever försöker han spetsa dig på treudden. Du har 7 i Försvar mot hans anfall.",
  },
  268: {
    mainText: "Dina tre angripare ligger runt dig, döda eller medvetslösa. En respektfylld tystnad sänker sig över krogen och ingen vill möta din blick. Du inser att ryktet kommer att spridas att det finns en munk i Domedag som inte slåss som Röda Syrsans munkar. Du beslutar dig för att lämna krogen och staden så fort som möjligt. En ung soldat följer efter dig när du går, men du smiter från honom bland de vindlande bakgatorna och tar dig snabbt fram till stadsporten. Du kommer säkert igenom innan order ges om att stoppa alla främlingar. Väl i säkerhet borta från stadsmuren, klättrar du upp i ett träd där du kan sova dold.",
    choices: [
      "Gå vidare"
    ]
  },
  269: {
    mainText: "Du hoppar upp på det Stora Kärntornets platta tak och slungar en kaststjärna som visslar iväg mot Kaptenens huvud. Gör ett anfallsslag.",
    choices: [
      "Gå vidare",
      "Gå vidare",
      "Gå vidare",
    ]
  },
  270: {
    mainText: "En brant trappa vindlar sig uppåt från tortyrkammaren, förbi tomma fångceller. Du kommer ut i en hall i det Stora Kärntornet. En spiraltrappa leder upp från motsatta sidan av hallen.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  271: {
    mainText: "Du hoppar uti luften och griper tag i en av Arockerna när den sveper ned bakom krigaren. Med en kraftig knyck bryter du nacken av den. En vass klo sliter upp din axel (du förlorar 3 KROPPSPOÄNG). Om du fortfarande lever vänder du dig om och griper tag i angriparens ben, drar ned honom och ger honom ett förlamande Tigertassens slag i sidan av halsen. Annu en magisk blixt slår ut från krigarens svärd. När de ser det glider Arockerna i väg över dalen, så att du kan fortsätta din färd. Krigaren presenterar sig som Runvävare. Du vet att runor är symboler som används för besvärjelser. Han tackar dig för att du hjälpte honom och berättar att han färdas norrut för att hitta nya betesmarker, efter en något pinsam sammanstötning med myndigheterna i Mortavalon. Ni går tillsammans ytterligare en bit och kommer fram till en liten koja i närheten av flodens källa. Ni bestämmer er för att tillbringa natten där - Runvävare vill tända en eld mot kylan.",
    choices: [
      "Gå vidare"
    ]
  },
  272: {
    mainText: "Folkmassan jublar när du kastar ned Vättens treudd i vallgraven, och själva slottet börjar sjunka ned i marken. Du söker igenom den svartmuskiga bestens avskyvärda kropp och hittar en ﬂaska med texten \"Magisk dryck\". Det är Vättens pris för hans seger på arenan, hans mest älskade ägodel. Du tar av korken och känner den omisskännliga lukten av Eldödle-essens, inte alls en magisk dryck. Vätten hade blivit lurad, men du kan få användning för den och beslutar dig för att behålla den. Slottet försvinner utom synhåll för Mortavalons hänryckta befolkning. Du har tillfälligt stillat deras blodtörst och en gång för dig till gatan utanför. En folkmassa samlas runt dig. En aristokrats butler erbjuder dig arbete som livvakt, medan det regnar rosor över er. Du försöker komma undan den oönskade uppmärksamheten, men en man drar i din järnärm. Du vänder dig om, redo att använda ett Kobraslag, men han säger, \"Kommer du från de Stilla Drömmarnas Ö?\"",
    choices: [
      "Om du medger att du gör det",
      "Om du säger att du aldrig har hört talas om en sådan ö"
    ]
  },
  273: {
    mainText: "När du går förbi krogen slås dörren upp. Hesa rop och stanken av gammal svett slår emot dig. Du fortsätter förbi och studerar nonchalant klostret. Det pryds av vackra torn och valvbågar. Pelargångarna är välbevakade och takskäggen kantas av hullingförsedda spikar. På baksidan ligger refektoriet och sovcellerna. Du beslutar dig för att använda dina färdigheter som Skuggkrigare för att ta dig in nattetid och leta efter information. Finns Yaemon därinne?",
    choices: [
      "Undersöker du klostret för att hitta den säkraste platsen att ta sig in",
      "Annars tillbringar du dagen på härbärget med att träna dig i Tigerns väg"
    ]
  },
  274: {
    mainText: "Dörren glider lätt upp på de oljade gångjämen och du smyger tyst in i kammaren. Du känner en skugga av fruktan som utstrålar från Honorics svärd, Sorcerak, som plötsligt uttalar hans namn. Han vaknar otroligt nog omedelbart och rullar ned från den bortre sidan av sängen, samtidigt som han griper om sitt talande svärd. Du hoppar över sängen, men han är beredd och ropar högt när den vilda striden börjar. Han giymtar till av smärta när du slår in med foten i hans sida, men han är hård och otroligt skicklig med svärdet. Han hugger rakt igenom dina järnärmar och bryter din vänstra arm så att den blir obrukbar, men du svarar med ett väldigt slag som slungar honom bakåt. Du skymtar fruktan i Honorics ansikte när han inser hur dödlig du är, men han anfaller med fömyad styrka. Du fälls utan förvarning av ett slag bakifrån, och när du tittar upp ser du Yaemons orörliga ansikte. l samma stund genomborrar Honorics svärd ditt hjärta och du dör.",
  },
  275: {
    mainText: "Grottan är mörk, men det silar ned ljus från en smal spricka i taket. När du makar dig fram längs det ojämna golvet hör du steg bakom dig och du skyndar in i mörkret. En trappa leder nedåt och när du går ned hör du ett underligt ljud, som gnisslandet av kugghjul, ovanifrån. Plötsligt faller en störtflod av vatten nedför trappan och du springer i mörkret med handen mot väggen. Du står snart till knäna i vatten och börjar undra om det finns någon väg ut i änden av tunneln, när ett fällgaller slår ned i golvet bakom dig. Vattennivån sjunker och du finner att du har fångats i en järnbur. Det finns inget sätt att ta sig ut och du tillbringar några matta timmar med att vila och meditera. Plötsligt dränks buren i ljus när dörren i änden av tunneln slås upp. Du befinner dig under sittplatserna på en stor rund arena som långsamt fylls med folk. Folkmassan jublar när en trumpet ljuder och burens framsida faller till marken. En grupp soldater går fram till burens baksida. De gör tecken åt dig att gå ut på arenan och sticker med spjuten genom gallret. ”Må Ödesgudinnan le mot dig,” säger en. ”Bara en av er kan bli slottets konung och överleva.” Du går ut i solljuset och folkmassan jublar igen. Burens dörr dras upp igen bakom dig och du kan inte gå tillbaka. Du skelar mot solen och ser dig omkring.",
    choices: [
      "Gå vidare"
    ]
  },
  276: {
    mainText: "Krigarmagikern väger svärdet på vanligt sätt i handen nu, beredd att sticka eller parera. Det finns kanske ingen magi kvar i svärdet, tänker du när du bestämmer dig för om du ska använda..",
    choices: [
      "Kluven blixtspark",
      "ett Virvelkast",
      "eller Tigertassens slag"
    ]
  },
  277: {
    mainText: "Du kryper in i hålet som går genom den tre meter tjocka muren alldeles innan ännu en soldat går förbi på sin runda runt inre borggården. Han lägger lyckligtvis inte märke till din svartklädda skepnad i det mörka hålet. Du ligger stilla i en halvtimme innan du kommer underfund med hur lång tid hans runda tar. När du försöker fortsätta vidare upptäcker du att du har fastnat, men du kommer igenom hålet genom att dra axlarna ur led. Du springer över till det Stora Kärntornet och börjar klättra upp mot taket. Du hänger ljudlöst i dina Kattklor varje gång vakten går förbi nedanför.",
    choices: [
      "Om du vill fortsätta på Kärntornets utsida tills du når taket",
      "Om du vill ta dig in vid ett av de lägre fönstren"
    ]
  },
  278: {
    mainText: "Du sparkar till med höger fot rakt mot Yaemons mage, men han hoppar bakåt med bägge föttema och fångar din fot. Han vräker dig uppåt så att du ﬂyger genom luften, men du använder hans kast till din fördel och slår upp med foten i ansiktet på honom när du gör en kullerbytta bakåt i luften. Han skriker till av smärta. Dra 2 från hans KROPPSPOÄNG.",
    choices: [
      "Använder du Bevingade hästens spark",
      "eller Kwons slaga om du har lärt dig den",
      "eller ett slag",
      "eller ett kast",
      "eller en Kluven blixtspark"
    ],
    stillAlive: "Om han fortfarande lever är han rasande, och just när du landar mjukt på fötterna kommer han upp bredvid dig. Han vrider sig åt sidan och slår upp med höger fot i ditt solar plexus, sedan vidare upp i ansiktet och ned i bröstkorgen igen, i snabb följd med tre korta rop. Du förlorar 8 KROPPSPOÄNG. Om du fortfarande lever slår hans sista slag omkull dig på rygg. När ditt huvud klarnar tittar du upp på Yaemon som står över dig med benen på var sida om din överkropp, och kör ned näven mot ditt ansikte. Du slår den åt sidan med höger hand och för tillbaka handen över bröstet för att parera ett kraftigt hugg mot halsen. Det tar dig bara bråkdelen av en sekund att lägga vänster arm runt hans ben och lyfta, så att han faller. Du tar dig snabbt loss och hoppar upp på fötter samtidigt som Yaemon. Han är ett ögonblick långsammare än du och du kan anfalla." 
  },
  279: {
    mainText: "Munken faller till marken hjälplöst hostande blod. Men du får inte ta igen dig, utan den andra munken bugar sig för dig innan han gör sig redo att anfalla. Du bestämmer dig för att byta taktik.",
    choices: [
      "Om du använder Draksvanskastet",
      "eller Kobraslaget",
      "eller Bevingade hästens spark"
    ]
  },
  280: {
    mainText: "Människoätaren trampar ned trärelingen och höjer klubban för att slå till dig, när du landar mjukt framför honom. En skur av pilar från piratskeppets akterkastell visslar över dig.",
    choices: [
      "Du kan försöka använda Bevingade hästens spark",
      "eller försöka med Järnnävens slag",
      "eller glida över däcket och använda Draksvanskastet"
    ]
  },
  281: {
    mainText: "Vätten försöker spetsa dig på sin obehagligt hullingförsedda treudd, men du hoppar upp i luften och sparkar till med foten, i hopp om att träffa honom i strupen.",
    choices: [
      "Du kan försöka använda Tigertassens slag,",
      "eller Virvelkastet",
      "eller Tigersprångets spark igen"
    ],
    stillAlive: "Om Vätten fortfarande lever stöter han med treudden mot din mage. Du har 8 i Försvar mot stöten när du hoppar åt sidan i det trånga tornet.",
  },
  282: {
    mainText: "På ett ögonblick har du slängt en kaststjärna mot Torterarens rygg och försvunnit ned i det svarta vattnet. Du stirrar upp från under ytan och ser Torteraren vrida sig i smärta. Han hotar pojken med ett glödgat järn och pojken pekar mot vattnet. Den rasande Torteraren vänder sitt maskerade ansikte mot vattnet, tar sin stora yxa och springer vrålande mot dammen. Du dyker upp ur vattnet och kastar ytterligare en Shuriken som träffar honom i armen innan han slår i vattenytan. Han flämtar till av smärta och du använder Tigertassen för att slå yxan ur händerna på honom. Du brottas med honom och ni sjunker ned i det svarta djupet. Han är stark, men ingen match för dig under vatten. Du är tränad för det här och använder upprepade Kobraslag för att slå honom medvetslös. Vattnet hindrar knappast kraften i dina slag alls.\nTorteraren flyter livlös upp till ytan och du drar dig flämtande upp i tortyrkammaren. Det finns flera fångar som bönfaller dig att du ska befria dem. Du ser en möjlighet att skapa en avledande manöver och gör det, men ber dem att räkna till tvåhundra innan de följer efter dig ut ur kammaren.",
    choices: [
      "Gå vidare",
    ]
  },
  283: {
    mainText: "Vägen slingrar sig ned från bergen och du ser staden Mortavalon som ligger i en skål av gröna beteshagar och majsfält. lnfarten till staden är genom en stor triumfbåge tillägnad en seger för Imperiets jägare som följer Imperiets gud, Moraine, mot Ödesgudinnans soldater. Det är kväll och du sluter dig till en grupp bönder som har arbetat på fälten. Du förklarar att du är en främling och frågar dem om deras stad. Det verkar som om det största templet är tillägnat Dödsguden, men Prästerna lägger sig sällan i det dagliga livet så länge ingen bråkar om de enstaka försvinnandena. De ägnar sig åt barnaoffer. l morgon är det helgdag, för det ska bli strid på arenan. Det verkar som om de letar efter en kämpe som kan vinna en otrolig förmögenhet.",
    choices: [
      "Om du vill följa med en av dem för att träffa Arenans mästare",
      "Om du hellre går genom staden"
    ]
  },
  284: {
    mainText: "Krigaren slåss väl, men efter en timme kommer det inga fler magiska blixtar från hans svärd och han faller av stigen. Fågelmännen dödar honom och bär i väg honom till sina klipphyllor. Du fortsätter och kommer till slut fram till en koja i närheten av flodens källa. Kylan berör dig inte så länge du rör på dig, eftersom du är tränad länge och hårt att motstå extrema temperaturer, men du bestämmer dig för att tillbringa natten i kojan för att vara säker för fågelmännen.",
    choices: [
      "Gå vidare"
    ]
  },
  285: {
    mainText: "Du försöker göra en volt över vakterna, men du är för långsam och en av dem hugger till dig med svärdet när du ﬂyger över honom. Du faller till marken och innan du kan komma upp sticker en av dem svärdet i ryggen på dig och tvingar ned dig på den leriga vägen. Han har genomborrat din lever och du dör. Ditt äventyr slutar här."
  },
  286: {
    mainText: "När munkarna närmar sig för att sparka dig kastar du dig med fötterna före mot huvudet på en av dem. Om det är första gången du försöker göra det blir de överraskade. Siffran efter snedstrecket under Försvar mot Kast är deras Försvar om det här är andra (eller tredje osv) gången du använder det här kastet. Du kan bara anfalla en av dem.",
    choices: [
      "Du kan använda Tigertassens slag",
      "eller Bevingade hästens spark",
    ],
    unsuccessfulThrow: "Om du misslyckas med att kasta honom är du i underläge när du landar. Du har 5 i Försvar mot dem om båda lever (och du kan bara blockera ett av deras anfall) och 7 om bara en är kvar."
  },
  287: {
    mainText: "Du faller baklänges från Spindelvävshallen, ned på stenarna på går- den nedanför och bryter nacken. Du har misslyckats."
  },
  288: {
    mainText: "Du hoppar högt upp i luften och gör en volt mot Runvävare, över blixten som slår ut och exploderar mot kojans vägg med en smäll.",
    choices: [
      "Gå vidare"
    ]
  },
  289: {
    mainText: "Det finns ingen vid den norra porten som kan se dig lämna den underliga staden Fiendil, men du bestämmer dig för att lägga så många mil som möjligt mellan dig och dess underliga invånare.",
    choices: [
      "Har du på dig en Opalring?",
      "Om du inte har det"
    ]
  },
  290: {
    mainText: "Bonden som har lett dig stannar utanför en ståtlig vit byggnad och pekar in. Du tackar honom och går in på den svala byggnadens mannorgolv. Du stegar självsäkert fram mot en krigare klädd i en blå och gyllene toga. Plötsligt öppnar sig golvet under dig och du faller ned på golvet i en mörk tunnel nedanför. Mannen i toga ropar ned efter dig, \"Skynda dig till arenan, min vän. Om mina män får tag i dig först dödar de dig.\" Du ser ingen annan väg ut än tunneln framför dig.",
    choices: [
      "Gå vidare",
    ]
  },
  291: {
    mainText: "Fyrfatet fräser till när det träffas av vattnet som skvätter över kammaren när du hoppar upp bakom Torteraren. Han sveper till i blindo med det glödgade järnet runt och bakom sig och lyckas träffa dig med det.\nDu förlorar 2 KROPPSPOÄNG när det äter sig in i ditt kött. Om du fortfarande lever hoppar du bakåt från järnet när han släpper det och drar yxan från bältet. Han grinar mordiskt mot dig.",
    choices: [
      "Om du tvättar grinet från hans ansikte med en Tigersprångets spark",
      "eller Tigertassens slag",
      "eller ett Tigertandskast"
    ]
  },
  292: {
    mainText: "Stjäman flyger in i blixten och virvlar iväg med ett vinande ljud.\nBlixten ändrar kurs och exploderar med en smäll utan att göra någon skada. Du cirklar runt Runvävare och letar efter en öppning.",
    choices: [
      "Gå vidare",
    ]
  },
  293: {
    mainText: "När Vätten svänger runt treuddens skaft mot din sida, ger du honom ett slag med sidan av handen mot hans vårtiga axel.",
    choices: [
      "Du kan försöka använda Tigertassens slag,",
      "eller Virvelkastet",
      "eller Tigersprångets spark igen"
    ],
    stillAlive: "Du måste försöka hoppa över treuddens svepande skaft. Du har 8 i Försvar mot det väldiga slaget. "
  },
  294: {
    mainText: "Sjögräset knastrar under dina fötter när du närmar dig staden Ionalbion, belägen uppe på de vita klipporna över Stjärnhavet. Flockar med får ﬂyr från dig när du vandrar över de böljande kullarna utanför landporten. Vakterna bär ett emblem som du inte känner igen, ett dansande svärd med en bokrulle virad runt klingan. Gatan sträcker sig ned mot havsporten och hamnen. Du går förbi en fontän formad som en delﬁn, där en ung kvinna säljer blommor gjorda av marsipan utanför en av de många bokrullebutikerna. Du antar att de flesta resenärerna borde gå förbi fontänen och frågar henne om hon har lagt märke till någon speciell person de senaste tio dagama. Hon svarar på en guttural dialekt av handelsspråket att trots att hon sitter vid fontänen varje dag har hon inte sett någon ovanlig person. Du bestämmer dig för att gå direkt till hamnen, där ett antal långa, låga galärer ligger ankrade. En skylt anger att ”Tumlaren” seglar mot Druath Glennan vid högvatten. Det kostar två guldstycken att åka med. Du går ombord på skeppet när de ska kasta loss och betalar guldet till hyttpojken.",
    choices: [
      "Gå vidare"
    ]
  },
  295: {
    mainText: "Du griper den Tvåhövdade jätten runt låren, men den väger över ett ton och du finner att du inte kan kasta den. Monstret släpper sin väldiga klubba och lyfter dig, slänger dig i klippan och trampar på dig. Ditt huvud krossas som en mogen melon när kraften från dess häl trycker ned det. Du har misslyckats med ditt uppdrag."
  },
  296: {
    mainText: "Du lyckas hoppa undan en av soldaternas svärdshugg och griper tag i hans handled, vrider och kastar honom över höften. Du kastar honom i ett litet bord med en smäll som splittrar det. Någon fäller en kommentar om ditt ovanliga sätt att slåss. Du hoppar över högen med krossade ben och trä och är ute från krogen innan någon annan hinner angripa dig. Du är inte förföljd och bestämmer dig för att sova på ett härbärge för ett guldstycke i natt. På morgonen bestämmer du dig för att bege dig norrut, så att Yaemon inte ska hinna till Förändringens pelare före dig och du lämnar staden längs vägen mot Mortavalon.",
    choices: [
      "Gå vidare",
    ]
  },
  297: {
    mainText: "Du berättar för prästen om ditt uppdrag att stoppa Yaemon från att fjättra din gud, Kwon, i Inferno. Han rynkar pannan och säger, ”Jag skulle inte vara så orolig om det inte var för att Yaemons munkar av Röda Syrsans orden är i förbund med den förbannade Domsvärdslegionen.” Han fortsätter med att säga att Honoric, legionens marskalk, har lämnat Domedag just när hans män väntade sig att han skulle leda dem i strid mot folket i Föraningens tom. Han gav sig av med Yaemon och de red ensamma mot Mortavalon. ”Du tror väl inte att du kan stoppa dem ensam. Honoric dödade fyrtio män, ärrade veteraner, i striden vid Håltornet. Tre av Ödets Verktyg dog för hans Magiska klinga, Sorcerak, den dagen. Du har inga vapen. lngen man kan stå emot Yaemon i strid utan vapen. han har varit Stormästare i hundra årstider.” ”Det du säger är kanske sant, men jag har svurit att försöka.” Han har inte mer att berätta, men han ger dig en liten ﬂaska som innehåller en klarblå vätska. Det är en Läkande dryck och du kan använda den en gång när du inte är i strid för att få tillbaka upp till tio förlorade KROPPSPOÄNG. Du tackar prästen och lämnar templet, fast besluten att hinna ikapp Yaemon.",
    choices: [
      "Om du lämnar staden genom hamnporten och beger dig mot Mortavalon",
      "Om du går in i Domedag genom Obsidianporten"
    ]
  },
  298: {
    mainText: "Du lyckas gripa tag i repet mitt i luften och dämpar fallet. Du faller de sista fem metrarna och landar på fötterna när munken lossar din änterhake. Du plockar upp den och försvinner in i staden innan han hinner ge larm. Du ligger lågt tills morgonen kommer och lämnar staden, förklädd till tiggare igen och besluten att se till att Yaemon inte kommer fram till Förändringens pelare före dig.",
    choices: [
      "Gå vidare"
    ]
  },
  299: {
    mainText: "Leksaksmakaren skriker förtvivlat bakom dig när du snabbt går förbi.\nDu håller dig undan från munkarna och tillbringar en del tid med att gå på de lugna gatoma i den här staden som nästan tycks avstängd från resten av Människoländerna. Du får inte veta något, ingen tycks våga säga mer än några lustigheter till dig. Du beslutar dig förtvivlat för att bege dig norrut igen. Du vet inte om Yaemon fortfarande är framför dig, men du kan inte riskera att låta honom nå Förändringens pelare före dig.",
    choices: [
      "Gå vidare",
    ]
  },
  300: {
    mainText: "Skjulets tak läcker och det luktar fuktigt överallt, men den gamla kvinnan som bor här med sin efterblivne son ställer inga frågor och ger dig lite varm välling. Du tackar henne och lämnar två guldstycken under en kruka i skafferiet där hon kommer att hitta dem senare.\nSedan slår du dig ned för att vänta. När skymningen har fallit hörs ett flaxande utanför fönstret som är täckt av spindelväv. Du öppnar det och Deidras vita duva ﬂyger in. Den släpper ett papper från näbben i ditt knä, innan den ﬂaxar i väg över stadsmuren. Meddelandet lyder:\nSkynda dig till Fruktans borg. Ditt byte har lämnat den Ledes kloster i staden och tänker stanna i Borgen tills de ska bege sig över snövidderna till Förändringens pelare.\nDu frågar kvinnan om vägen, men hon blir vettskrämd när du nämner borgen och bönfaller dig att inte gå dit. \"Jag måste,\" säger du och till sist säger hon åt dig att gå mot nordväst över Hedlandet mot Vättetandsbergen. Du går håller dig till stadens utkant och ger dig ut på landsbygden vid en skylt som berättar om en krog som kallas Hydrans Huvuden.",
    choices: [
      "Gå vidare",
    ]
  },
  301: {
    mainText: "Du tar ett steg till höger, står med benen isär och lätt böjda knän, och klyver luften med vänster arm i ett slag från höften mot Yaemons strupe. Han är beredd och reagerar blixtsnabbt. Han lutar sig bakåt och slår till med vänster handﬂata uppåt och i kors. Han slår in i din handled med vänster hand, och höger hand träffar din armmuskel alldeles ovanför armbågen. Smärtan är outhärdlig när din arm tvingas mot leden och bryts med en smäll. Du förlorar 8 KROPPSPOÄNG. Om du fortfarande lever kan du inte slå igen. Du kan inte heller använda Akrobatik om du har den färdigheten. När du vacklar bakåt av smärta försöker du förtvivlat övervinna den i tid för att kunna svara på Yaemons nästa anfall. Du tittar upp och ser honom hoppa genom luften mot dig med vänster ben utsträckt i en Bevingade hästens spark riktad mot ditt huvud. Du har 7 i Försvar.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  302: {
    mainText: "Barbarens röst höjs i ett vrål av stridslust när han hugger mot dig i bärsärkar-raseri. Han bryr sig inte om dina anfall så länge hans svärd får smaka ditt blod. Dra ifrån 1 från all skada du gör på honom. Han hugger med sitt svärd nedåt mot ditt huvud, men du tar ett steg åt höger sida, vrider dig och sparkar till med foten mot hans ansikte när svärdet visslar förbi bakom din rygg.",
    choices: [
      "Du kan slå",
      "eller kasta",
      "eller sparka igen"
    ],
    stillAlive: "Om han fortfarande lever, hugger han med svärdet från höger till vänster genom den punkt där du står. Du har 8 i Försvar när du hoppar bakåt."
  },
  303: {
    mainText: "Det är gott och väl efter midnatt när du kommer ut från härbärget i den svala nattluften, klädd i din svarta dräkt och huva. När du närmar dig klostret kan du se att det är lätt att klättra upp på taket till gången som förbinder refektoriet med bönerummet, eftersom det står vintunnor uppställda mot väggen. Du tar dig upp på taket och sänker dig ned på en mycket liten gårdsplan. Du går runt ett hörn på gårdsplanen och kommer in i en återvändsgränd. Den enda vägen ut som du kan se är en smal gång som leder åt vänster. Du tar dig försiktigt nedför den, men sliter av en osynlig tråd, tunn som spindelväv, och en klocka börjar ringa i refektoriet. Du springer nedför gången som svänger till vänster igen och kommer till en ny återvändsgränd utan flyktväg. Gångarna är byggda för att leda in inkräktare i återvändsgränder de inte kan fly från, och det är där du befinner dig. Flera munkar dyker upp bakom dig och du försöker förtvivlat klättra upp på väggen, men den är täckt med ett klibbigt nät som du fastnar i. Du är hjälplös och kan bara döda dig själv innan de får tag i dig genom att bita av dig tungan och förblöda. Ditt äventyr slutar här."
  },
  304: {
    mainText: "Togawa nickar igen och ställer en tredje fråga, \"Vilka är dina ögon? \" \"Mina ögon är Solen och Månen,\" svarar du, reciterande orden ur den hemliga Skuggkrigarnas Stormästares Litania. \"Jag är Skuggkrigare. Jag följer Tigerns väg. \" Togawa bugar sig för dig, \"En De Fyra Vindarnas Stormästare, \" säger han, \"jag måste göra mitt bästa för att hjälpa dig\".\nDu sover på grottans kalla golv, men i dina drömmar kommer Togawa fram till dig, hans kropp silvrig och eterisk, och sträcker fram handen mot dig. Du tar den och han lyfter dig ut ur din kropp. När du tittar ned kan du se dig själv sova i ljusskenet. Ni är snart långt från grottan, bortsvepta av en eterisk vind. Du håller hårt fast i honom i vetskap om att utan Togawas ledning skulle du driva hjälplöst. Skuggkrigarens färdigheter kan inte hjälpa dig här. Munken pekar framåt mot ett glimmande portvalv bortom vilket en silverstig sträcker sig upp bland molnen. Keruber ﬂockas runt pelarna och en Skyddsängel, vit och tadelfri, står mellan dem.\n\"Det här är Porten till De sju himlarna,\" säger Togawa. \"Vi kan inte gå in ännu.\" När han talar tar en skepnad form på silvervägen. Den glider förbi Skyddsängeln och när den närmar sig ser du att det är en perfekt tiger, men den har vit päls och blå ögon.\n\"Andetigern är en av Kwons tjänare,\" säger Togawa. \"Hon ska hjälpa oss.\" När tigrinnan ser på dig överför hon en del av sin kunskap. Hon har följt efter Yaemon på andeplanet, utan att han har märkt det. Yaemon och Honoric, marskalk över Domsvärdslegionen som dyrkar guden Vasch-Ro, färdas mot den fjärran staden Druath Glennan vid kanten av Snövidderna. De ska möta en tredje man där, Manse Dödsmagikern, en mäktig och ond magiker som dyrkar Nemesis, Ondskans högste princip. Tillsammans planerar de att färdas till Förändringens pelare och var och en av dem känner till ett hemligt ord som kan binda en gud eller gudinna i lnferno. Du inser att du måste färdas till Druath Glennan så snabbt som möjligt. Andetigern välsignar dig och Ödesgudinnan kommer att le mot dig. Din Ödesmodifikation är nu +1. Du försöker tala till Andetigern, men orden kommer inte fram och Togawa drar iväg dig från Porten till De sju himlarna. När du vaknar på morgonen säger han, \"Det oheliga förbundet måste stoppas. Av alla onda gudar är det bara den Ledes, Vasch-Ros och Nemesis anhängare som har disciplin att ena sig. Nemesis är den främsta av de onda gudarna. Aldrig förr har tre så mäktiga och onda män litat på varandra. \" Han tar fram en väska med örter ur en spricka i berget. \"De här har helande krafter,\" säger han. Du tar dem och kan använda dem när som helst när du inte är i strid för att få tillbaka upp till 8 KROPPSPOÄNG. Du tackar honom och ska just fråga honom om han vill göra dig sällskap, när han lägger sig ned på grottgolvet och somnar. Du känner att du inte kan få mer hjälp och börjar klättringen nedför berget Gwalodrun till passet nedanför. En dag senare kommer du in bland kullarna i Lyckopasset.",
    choices: [
      "Gå vidare"
    ]
  },
  305: {
    mainText: "Honoric och Manse Dödsmagikern ligger båda döda, men ditt uppdrag är inte slutfört ännu. Det återstår fortfarande att hämnas din andliga fader och döda Yaemon, Flammans Stormästare i Röda Syrsans orden. Om du misslyckas kommer han att uttala det maktens ord vid Förändringens pelare som kommer att binda Kwon i Inferno.\nDu går ned på Stora Kärntornets tak.",
    choices: [
      "Gå vidare",
    ]
  },
  306: {
    mainText: "Yaemon går fram och måttar en Tigersprångets spark mot ditt ansikte, men du stiger åt sidan och vänder dig bort från den. Yaemons spark visslar förbi din rygg när du driver upp sidan av din fot i Yaemons mage och sedan vidare upp mot huvudet på honom. Han reagerar snabbt och blockerar din första spark med underarmen, men den andra överraskar honom och träffar i ansiktet. Huvudet slås bakåt och han vacklar till, tillfälligt omtöcknad. Dra ifrån 6 av hans KROPPSPOÄNG. Fördubbla det om du använde Inre styrka.",
    stillAlive: "Om han fortfarande lever återhämtar han sig, och du kan följa upp ditt anfall.",
    choices: [
      "Vill du använda en Kluven blixtspark igen",
      "eller Tigersprångets spark",
      "eller Bevingade hästens spark",
      "eller Kwons slaga om du kan den",
      "eller ett slag",
      "eller ett kast"
    ]
  },
  307: {
    mainText: "Du går in på krogen Svarta svärdet. Den har ett långt utskänkningsrum med en flammande eld, till och med vid skördetiden i månaden Allmoderns prakt. Därinne sitter ungefär fyrtio män och dricker, de ﬂesta soldater. lnte en enda sjöman syns till, trots att du fortfarande är nära hamnen. Soldaterna har tagit med sina vapen in på krogen, men många har lossat på eller tagit av sig delar av rustningen i den tryckande hettan. Stanken av gammal svett är överväldigande. En man som måste väga 130 kg eller mer spatserar upp och ned utefter den långa baren, slänger upp mjödstop på disken och plockar på sig silver. Du köper ett stop och lyssnar till pratet. De ropar från bord till bord om fälttåget som de ska utkämpa mot folket i Föraningens tom. Vid ett bord sitter en särdeles högljudd man på tjugofem år eller så. Han vill ha mjöd och två av soldaterna som är med honom tar hans mugg och slåss om äran att få köpa honom ett stop. Han ignorerar det, lägger märke till dig och utmanar dig på mjödhävning. ",
    choices: [
      "Om du antar utmaningen",
      "Om du avböjer"
    ]
  },
  308: {
    mainText: "Han slår till med höger hand mot vänster sida av din hals. Du för upp ditt ben i en båge från vänster till höger och föser hans arm åt sidan, men han drar tillbaka den och slår till igen mot andra sidan av din hals, så att du blir omtöcknad. Med oförminskad vildsinthet knyter Yaemon sin hand till en näve och rätar på armen, så att hans knogar slår in i din näsa. Smärtan sköljer över dig. Ett ögonblick senare slår han in foten i ditt huvud med en Bevingade hästens spark och du tappar fotfästet och slungas bakåt med utbredda armar. Du förlorar 10 KROPPSPOÄNG när ljudet av hans vrål ekar uti natten. Om du fortfarande lever lyckas du lindra fallet med armarna när du landar platt på ryggen. l sista ögonblicket klarnar din blick och du ser Yaemons fot trampa ned mot ditt huvud. Du rullar undan och hoppar på fötter och utom räckhåll.\nDu cirklar försiktigt runt honom och går sedan till anfall.",
    choices: [
      "Om du försöker använda ett slag",
      "eller en spark",
      "eller ett kast"
    ]
  },
  309: {
    mainText: "Du har dödat en odödlig och befriat Orb från ett av de monster som härjade i världen innan människan kom från stjämorna. Du andas djupt men tyst och tar dig förbi den fallna kroppen fram till kanten av den becksvarta, underjordiska floden som förser vallgraven med vatten. Den enda vägen vidare är att dyka ned i det iskalla vattnet. Du glider ned i vattnet, ned i det kalla djupet och märker att du har sten över huvudet innan du kommer till ytan. Du simmar med kraftfulla tag genom undervattenstunneln i en minut, innan ett skimrande ljus över dig talar om för dig att du kan gå upp till ytan. När du gör det fylls dina öron av skriket från en man. En ung pojke som är kedjad vid väggen stirrar på dig, men säger ingenting. Du har kommit upp i tortyrkammaren under Fruktans borg. En vippstol hänger över dig och den sömnlöse Torteraren arbetar fortfarande. Han sätter ett glödgat järn mot köttet på en man som hänger i kedjor från taket.\nTorteraren har en stor yxa i bältet och hans breda, muskulösa rygg dryper av svett i hettan från ett fyrfat fyllt med glödande kol. Han bär läderarmband med grova nitar och en bödels svarta huva.",
    choices: [
      "Om du kastar en Shuriken mot honom innan du dyker tillbaka under ytan",
      "Om du kastar dig upp ur vattnet och anfaller honom"
    ]
  },
  310: {
    mainText: "Din knutna näve klyver hörbart luften när du slår mot Människoätarens kropp.",
    choices: [
      "Du kan snurra åt sidan och använda Bevingade hästens spark",
      "eller försöka att slå undan Människoätarens ben med Draksvanskastet",
      "eller använda Järnnävens slag igen"
    ],
    stillAlive: "Människoätaren försöker krossa dig med sin spikklubba. Du har 8 i Försvar mot hans tunga slag"
  },
  311: {
    mainText: "Den lilla pilen flyger förbi hans öra och magikern spärrar upp ögonen av förvåning. När du bereder dig att sparka magikern den här gången pekar han med fingret mot dig och uttalar ord som verkar tappa dig på din styrka. Du stapplar kraftlöst fram när Vätten hoppar ned från sitt slottstom. Magikern går bakåt och tittar på när Vätten närmar sig dig och viftar med sin treudd. Du är för svag för att springa och han kör in treuddens spetsar i din mage innan han lyfter dig på den och drar ut dig i vallgraven. Vattnet kokar när de Flytande munnarna kommer för att äta, och på några minuter har ditt kött slitits från benen."
  },
  312: {
    mainText: "Du springer fram som för att slå, men hoppar i stället upp i luften i sista ögonblicket och försöker få dina fötter runt hans huvud, innan du vrider till och kastar honom till marken.",
    choices: [
      "Du kan försöka använda Tigertassens slag",
      "eller en Kluven blixtspark"
    ],
    successfulThrow: "Om du lyckas, vrider du till och kastar honom virvlande till golvet, och landar sedan själv på fötterna.",
    unsuccessfulThrow: "Om du misslyckas med att kasta honom försöker han sparka dig i ryggen när du mjukt landar på fötterna. Du har 6 i Försvar mot hans spark."
  },
  313: {
    mainText: "Det är många dagars marsch över snövidderna. Du vet inte exakt var staden ligger och förbannar den ödsliga tomheten, för det finns ingen ledtråd till vart du ska gå. Till sist får du syn på de vita kupolerna och ishusen i staden Nordansnö på kvällen till den natt då månen blir röd, en natt utan slut. Du är för sent ute. Det eviga mörkret har kommit och Kwon har fjättrats i lnferno. Din lnre kraft försvinner och och det finns ingenting du kan göra för att förhindra att ondskan tilltar i styrka. Du har misslyckats."
  },
  314: {
    mainText: "Du svänger ned på en sidogata så att du närmar dig Spindelvävshallen från baksidan. Klädd i svart från topp till tå i din Skuggkrigardräkt smyger du försiktigt genom natten och andas tyst som en fågel. Du stannar helt stilla när du får syn på en munk som kommer nedför den annars öde gatan mot dig. Han stannar också och tycks känna faran.",
    choices: [
      "Om du har färdigheten Giftpilar och vill använda en",
      "Annars"
    ]
  },
  315: {
    mainText: "Kobramannen tittar upp när du kastar dig fram i en ﬂygande Tigersprångets spark. Men kobramannen kan hugga snabbt som en orm och han har 6 i Försvar mot din spark.",
    choices: [
      "Du träffar Kobramannen",
      "Du missar Kobramannen"
    ]
  },
  3150: {
    mainText: "Du misslyckas med att sparka Kobramannen och han biter dig i vristen och sprutar in ett dödligt gift.",
    choices: [
      "Om du har har lmmunitet mot gift",
      "Annars"
    ]
  },
  31501: {
    mainText: "Du dör i svåra smärtor",
  },
  31502: {
    mainText: "Om du har lmmunitet, stirrar männen förvånat när du tar dig upp medan pojken sätter sig i säkerhet",
    choices: [
      "Gå vidare"
    ]
  },
  316: {
    mainText: "Den Tvåhövdade jätten är trögtänkt och långsam, men mycket stark. Du måste slå ﬂera kraftiga slag och undvika den väldiga klubban som den försöker krossa dig med.",
    choices: [
      "Om du överlever anfallet kan du använda Järnnävens slag",
      "eller Virvelkastet",
      "eller sparka igen."
    ],
    stillAlive: "Du har 8 i försvar mot monstrets trädstam. Den är omöjlig att blockera eftersom den är så stor och tung, men det är relativt lätt att hoppa undan från den eftersom du är så liten och snabb när du försöker hoppa, skutta och hjula undan den."
  },
  317: {
    mainText: "Dörren glider lätt upp på de oljade gångjärnen och du smyger tyst in i rummet. Du känner skuggan av fruktan som strålar ut från Honorics svärd Sorcerak, som plötsligt uttalar hans namn. Han vaknar till din häpnad omedelbart, rullar ned från sängen på den bortre sidan och tar sitt svärd. Du hoppar över sängen, men han är beredd och ropar högt när den vilda striden börjar. Han grymtar till av smärta när du kör in din fot i hans sida, men han är hård och otroligt skicklig med svärdet. Han skär rakt igenom din jämärm och din vänsterhand bryts och blir obrukbar, men du svarar med ett väldigt slag som slår honom tillbaka. Du ser fruktan i Honorics ansikte när han inser hur dödligt farlig du är, men han anfaller med förnyat raseri. Utan förvarning fälls du av ett slag bakifrån, och när du tittar upp ser du Yaemons orörliga ansikte. Honorics klinga genomborrar ditt hjärta och du dör.",
  },
  318: {
    mainText: "Barbaren har hetsat upp sig till ett bärsärkarraseri och klyver luften med mäktiga svärdshugg, obekymrad om smärta och enbart törstande efter ditt blod. Draksvansen tar honom med överraskning, när du försöker slå undan benen under honom. Han har bara 4 i försvar när hans svärd klyver luften över dig.",
    choices: [
      "Du kan sparka",
      "eller slå"
    ],
    unsuccessfulThrow: "Om du misslyckas med att kasta honom försöker han hugga av dig på mitten från pannan till magen när du tar dig upp. Du har 6 i Försvar mot hans hugg när han ger ifrån sig ett blodisande tjut. Han gör 1T6+2 i skada."
  },
  319: {
    mainText: "När du ska till att gå ned på marken och slå undan benen under honom, riktar Yaemon en Bevingade hästens spark mot ditt huvud. Du handlar instinktivt och griper tag med händema i hans fot. Du använder en variant av Draksvanskastet, krokar fast din högra häl runt hans andra vrist och drar undan den. Han faller till marken och sätter sig upp, redo att vrida sig åt sidan. Du håller fortfarande i hans ben och kör upp din högra fot i hans ansikte med ett vrål. Han förlorar 6 KROPPSPOÄNG. Du får fördubbla det om du använder INRE KRAFT.",
    stillAlive: "Om han fortfarande lever, använder han kraften när hans överkropp tvingas tillbaka ned på marken till att vrida loss foten ur ditt grepp och göra en volt bakåt. Han använder händema för att komma upp i luften och landar på fötterna. Han utdelar nästan omedelbart en saxspark. Hans vänstra fot slår ut mot din ljumske och den högrafoten slår upp mot ditt huvud, så att han ﬂyger upp i luften. Du går tillbaka på din vänsterfot med lätt böjda knän och kör upp höger handflata i en rak blockering med armen som stoppar Yaemons spark mot ljumsken. Sedan för du upp armen över bröstet och för undan sparken mot ansiktet, så att du är redo för ett motangrepp.",
    choices: [
      "Ska du pröva Draksvanskastet igen",
      "eller virvelkastet",
      "eller ett slag",
      "eller en spark"
    ],
  },
  320: {
    mainText: "Du går över det Stora Kärntornets tak tills du står nedanför tornet med Domsvärdets ﬂagga. Sedan klättrar du upp, tyst som en mus. Trappan är upplyst av ﬂera tacklor i bronshållare på väggen och längst upp ﬁnns en tung ekdörr. Ovanför dörren finns en smal öppning, precis stor nog för att du ska kunna kräla genom den och upp på vinden.",
    choices: [
      "Oljar du försiktigt dörrens gångjäm innan du öppnar den",
      "Om du hellre undersöker vinden för att se om du kan spionera på personen i rummet nedanför"
    ]
  },
  321: {
    mainText: "När du går fram för att slå till sänker besten sitt huvud för att storma fram mot dig och vrålar vildsint. Du måste möta den odödlige jätten ansikte mot ansikte.",
    choices: [
      "Om du överlever kan du använda Bevingade hästens spark",
      "eller Draksvanskastet",
      "eller Järnnäven igen"
    ],
    stillAlive: "Om varelsen från det glömda förﬂutna överlever, försöker han sprätta upp din buk med en släng från huvudet när den tillfälligt går ned på alla fyra. Du har 6 i Försvar mot det."
  },
  322: {
    mainText: "Du höjer händerna utan förvarning och försöker slå ihop dem på vardera sidan om motståndarens huvud.",
    choices: [
      "Om du fortfarande lever kan du använda Tigertandskastet",
      "eller en Kluven blixtspark",
      "eller slå igen. "
    ],
    stillAlive: "Om han fortfarande lever svarar han på ditt dubbla Tigertassens slag så snabbt att du inte hinner blockera, när han duckar ned och gör ett Kobraslag upp mot ditt solar plexus. Du har 6 i försvar mot hans slag."
  },
  323: {
    mainText: "Du tar upp några fiskfjäll ur en ficka och lägger dem över ögongloberna. Du kan se ganska bra genom dem, men de gör att du ser blind ut. Du sätter dig ned för att tigga i närheten av ingången till klostret och hör tillräckligt för att övertygas om att munkarna som dyrkar den Lede är genomonda. Men det är en kvinna i en svart kappa täckt med ett mönster av grön spindelväv som drar till sig din uppmärksamhet. Hon går mot klostret tillsammans med två munkar klädda i rött, och de tycks gräla om någonting. Hon förhandlar om ett pris för en besvärjelse som de vill att hon ska kasta i ”Spindelvävshallen ”. Hon påpekar att om den är deras enda försvar mot spioner i korridoren som förbinder refektoriet med sovcellerna, är besvärjelsen Nullaqs nät värd mer än trehundra guldmynt. Du tar upp din huva med dess magra skörd av kopparmynt och traskar långsamt bort för att ligga lågt tills mörkret faller. Du bestämmer dig för att utnyttja din vetskap om att Spindelvävshallen bara har en fälla, spindelväven från häxan som du såg tidigare.",
    choices: [
      "Har du färdigheten Klättra? Om du har det",
      "Om du inte har det, eller föredrar att inte klättra"
    ]
  },
  324: {
    mainText: "När du slår till den siste munken med vad du antar är ett dödande slag, ger fruktan honom styrka att blockera slaget i sista stund och han kastar sig in under oxkärran till andra sidan. Han haltar iväg till ett närbeläget hus och du bestämmer dig för att lämna staden genom norra stadsporten innan han hinner hämta förstärkningar.",
    choices: [
      "Gå vidare",
    ]
  },
  325: {
    mainText: "Den ohanterlige Jätten är långsam men mycket stark. Du måste slå åtskilliga kraftiga slag för att fälla den, och undvika trädstamsklubban medan du gör det. ",
    choices: [
      "Om du överlever anfallet kan du använda Tigersprångets spark",
      "eller Virvelkastet",
      "eller slå till igen."
    ],
    stillAlive: "Du har 8 i Försvar mot den väldiga klubban. Det är omöjligt att Blockera den eftersom den är så stor och tung, men du har relativt lätt för att hoppa undan då du är så liten och snabb när du försöker kasta dig, hoppa och hjula ur vägen för den."
  },
  326: {
    mainText: "Du slår med näven mot magikerns mellangärde, men han rör vid en gyllene platta som hänger på hans bröst och luften runt honom blir grönaktig. Han har skapat någon sorts magisk sköld som lindrar ditt slag. Han har 6 i Försvar mot det.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  327: {
    mainText: "Du slår till gång på gång men Shaggothen tycks oberörd. Den virar sina tentakler runt dig och börjar sjunka tillbaka ned i träsket. Du dras ned med den och dina lungor fylls av slem. Den kommer att lägga sin avkomma i din kropp och när de växer blir du mat åt dem."
  },
  328: {
    mainText: "Du hoppar upp, svingar dig in i hålet som leder upp på vinden och klämmer dig igenom till brädoma ovanför. Du känner dig för efter lösa brädor och kravlar försiktigt fram till en spricka i innertaket. Honoric sover och hans arroganta anletsdrag verkar mindre grymma än när han är vaken. Han har munnen öppen och snarkar lätt. Hans väldiga svärd ligger utdraget ur skidan bredvid honom. Du kan inte se några fällor i rummet.",
    choices: [
      "Om du vill hälla din enda dos av Intets blod nedför en vaxad tråd i Hononcs mun",
      "Om du föredrar att gå tillbaka nedför trappan och gå in genom dörren efter att ha oljat gångjärnen"
    ]
  },
  329: {
    mainText: "Du formar ett ”O” med tungan och lägger försiktigt en av giftpilarna på den med en skicklig rörelse. Du andas in och spottar ut. Pilen har fastnat i munken innan han har förstått vad du gör. Giftet verkar. Han viker sig dubbel i krampryckningar på den leriga vägen och dör. Du ödslar ingen tid, utan tar av honom hans röda kläder och drar dem över din egen Skuggkrigardräkt. Du går med lugn säkerhet in i sovsalarna i klostret och tar dig till Spindelvävshallen.",
    choices: [
      "Gå vidare"
    ]
  },
  330: {
    mainText: "Du slår med höger näve mot Yaemons huvud, men han tar ett steg mot dig och åt höger, bredbent och med böjda knän, och slår upp med sidan av vänster hand mot insidan av din högra handled så att slaget går förbi honom. Sedan vrider han upp sin högra hand i ditt mellangärde med ett rop. Du viker dig dubbel och förlorar 4 KROPPSPOÄNG. Om du fortfarande lever drar han tillbaka handen och för den genom luften mot ditt huvud. Men du reagerar snabbt och sätter dig bokstavligt talat ned så att hans arm visslar förbi över huvudet på dig.\nSedan gör du en bakåtkullerbytta så att du kommer utom räckhåll. Du rullar upp till huvudstående och knycker till så att du kommer upp på fötter mitt emot Yaemon. Han morrar frustrerat åt din ﬂykt. Du kan anfalla igen.",
    choices: [
      "Använder du Kobraslaget",
      "eller Tigertassens slag",
      "eller ett kast",
      "eller en spark"
    ]
  },
  331: {
    mainText: "När vinden visslar runt tornen på Stora Kärntornet hörs plötsligt ett plågat ylande. För ett ögonblick reser sig håren på din nacke av skräck, tills du inser att det bara är vinden som viner i en skottglugg i ett av tornen. Kaptenen rycker till och du väljer det här ögonblicket för att smyga fram bakom honom när han rör sig mot takkanten. Du använder Bevingade hästens spark för att slänga honom över bröstvämet och han faller långt innan han inser vad som har hänt. När han gör det skriker han av skräck och ropar \"Inkräktare\", innan han slår i stenläggningen nedanför med en krasch. När du drar dig tillbaka från kanten och går mot ett av tornen lyses hela taket upp. När du tittar upp ser du Manse Dödsmagikern. Han har ett förvridet leende på sina läppar när han kastar en besvärjelse som gör att du skakar hjälplöst.\nHonoric kommer ut ur dörren från sitt torn och du är hjälplös när Marskalken över Domsvärdslegionen hugger av dig huvudet vid axlarna.",
  },
  332: {
    mainText: "Du snurrar runt och kör upp utsidan av foten mot de blå ådrorna på Människoätarens strupe, samtidigt som den försöker slå undan dig med klubban.",
    choices: [
      "Du kan använda Järnnävens slag",
      "eller Draksvanskastet",
      "eller sparka igen"
    ],
    stillAlive: "Om Människoätaren fortfarande lever försöker den slå in ditt huvud med den tunga klubban. Du har 7 i försvar mot det klumpiga slaget."
  },
  333: {
    mainText: "Odjuret försöker ta dig i en krossande omfamning, men du gör en volt mot den, under de famlande händerna och rullar upp på fötter, samtidigt som du utdelar en Bevingade hästens spark.",
    choices: [
      "Om du överlever kan du använda Järnnäven",
      "eller Draksvanskastet",
      "eller sparka den igen"
    ],
    stillAlive: "Om monstret fortfarande lever försöker det gripa tag i dig och spetsa dig på sitt väldiga horn. Du har 7 i Försvar mot det när du försöker hoppa bakåt utom räckhåll."
  },
  334: {
    mainText: "Till din bestörtning väljer månen det här ögonblicket att komma fram från bakom ett moln och munken får syn på din skugga. \"Vem är du?\" frågar han spänt.",
    choices: [
      "Ska du gå fram till honom och anfalla",
      "eller använda en Shuriken"
    ]
  },
  335: {
    mainText: "Utan en darrning i musklerna som visar vad du tänker göra innan du rör dig, tar du ett steg till höger och gör två snabba sparkar åt sidan i följd, först mot sidan av hans vänstra knä och sedan upp mot vänster sida av hans huvud. Du tar honom med överraskning.",
    choices: [
      "Om du fortfarande lever kan du använda Tigertandskastet",
      "eller Tigertassens slag",
      "eller sparka till igen"
    ],
    stillAlive: "Om munken fortfarande lever låtsas han slå till, och måttar sedan en spark med hälen mot din hals. Du har 7 i Försvar mot hans spark."
  },
  336: {
    mainText: "Den Tvåhövdade Jätten slår i marken så att klippan spräcks. Hans läppar är täckta av saliv blandat med blod. Du fortsätter framåt och i dimman ser du grottan som den bodde i. Du undersöker den noga och hittar ett urval av ben som har knäckts för att komma åt märgen, och en liten säck full med kopparstycken. Jättens skatt är utan värde för dig. Den är för tung för att bära med sig. Men du hittar en svart läderhandske, sydd med fin silvertråd. Den är magisk till sin natur, en Slaghandske, och du tar på dig den. Lägg +1 till din Slagmodifikation när du använder Järnnäven, Tigertassen eller Kobraslaget. \nNär du fortsätter genom kullarna lättar dimman och du beger dig in i den vilda ödemarken mot staden Fiendil.",
    choices: [
      "Gå vidare"
    ]
  },
  337: {
    mainText: "Skeppet glider ut ur hamnen och sätter segel. Du står vid relingen och ser tillbaka mot klipporna som försvinner i fjärran. Det finns bara en annan passagerare, en kvinna som är svept i hermelinpäls mot sjöbrisen. Hon tycks fascinera besättningen. Hon uppsöker dig och presenterar sig som Dierdra. När du tittar efter ser du att hennes ansikte är målat så att hon liknar en fin katt. Du har aldrig sett en sådan ansiktsmålning förut, och det onaturliga över den stör dig. Hon ler och frågar om du finner resan besvärlig. Du svarar inte, men hon fortsätter, ”Jag skulle inte heller bry mig om den, om jag skulle underhålla någon som intresserade mig. ” Du börjar prata en del med henne och hon berättar för dig att hon är sångerska, men det är när hon berättar vilka hon ska sjunga för som du blir intresserad. Av hennes beskrivning att döma kan det bara vara Yaemon, Flammans Stormästare, mannen du har svurit att döda. Hon pratar också om mannen som kallas Manse Dödsmagikern, en svart trollkarl som dyrkar Nemesis och kan frammana varelser från elementarplanen för att slåss mot sina fiender. Hon tycks inte störas av tanken på att möta sådana människor, men hennes behagligt sjungande röst har snart förhäxat dig. Innan du inser vad du gör har du berättat för henne om ditt uppdrag. Du väntar skräckslaget på hur hon ska reagera när förtrollningen är bruten. Hon ler och säger att hon egentligen inte alls är sångerska, utan magiker, och hon svär vid allt som är gott att hon ska hjälpa dig. Hon vänder sig bort och kuttrar mjukt två gånger. En vit duva kommer ned från skyn bakom dig och landar på hennes utsträckta hand. När skeppet glider in i hamnen i Druath Glennan säger hon åt dig att besöka en fattig familjs hus utanför stadsmuren och vänta på ett meddelande från henne. Du är osäker på om du gör som hon ber dig för att du litar på henne, eller för att hon har förhäxat dig, men du lämnar skeppet och går mot det fallfärdiga rucklet som tycks krypa ihop i skuggan nedanför stadsmuren.",
    choices: [
      "Gå vidare"
    ]
  },
  338: {
    mainText: "Pilen borrar sig in i magikerns kind och han slår till med handen mot den, när det dödliga giftet börjar verka. Han börjar gunga på fötterna och faller sedan ned i vallgraven. Folkmassan är tyst, för de kan inte se pilen och tror att du är en magiker. Vattnet kokar när de Flytande munnarna kastar sig mot sitt byte. lnom en minut har hans kött slitits från benen. Du klättrar upp mot Vätten i tornet. Odjuret gör sig till inför publiken, säker på att segra igen. Han slår sig för bröstet, som är dubbelt så brett som ditt, och svänger treudden med en hand. Tornet är grovt byggt med många fästen för händerna och du rör dig runt det för att hålla Vätten osäker om var du befinner dig. Sedan griper du tag i en utstickande sten med båda händerna och svingar dig upp i tornet bakom honom. Han virvlar runt och du anfaller honom med blixtens hastighet.",
    choices: [
      "Använder du Tigersprångets spark",
      "eller Virvelkastet",
      "eller Tigertassens slag"
    ]
  },
  339: {
    mainText: "Du går in i tornet och glider ljudlöst uppåt. Trappan är upplyst av ﬂera facklor i bronshållare på väggen. Du är på din vakt mot fällor och rör dig tyst som en katt på fågeljakt. Längst upp i tornet, bortom det enda fönstret, finns en tung ekdörr. Ovanför dörren finns en smal öppning, precis stor nog för att du ska kunna ta dig igenom den och som leder till den fuktiga vinden.",
    choices: [
      "Ska du försiktigt olja dörrens gångjärn innan du öppnar den",
      "eller ska du undersöka vinden först för att se om du kan spionera på mannen i rummet nedanför"
    ]
  },
  340: {
    mainText: "När du går fram slår Yaemon ut med näven mot ditt huvud, men du går ned på ena knät och slår honom med raka ﬁngrar i mellangärdet, alldeles under bröstkorgen. Han grymtar till av smärta och viker sig dubbel. Du hoppar upp på fötter, slår upp med armbågen så att din högra hand vilar mot höger axel, och slår till honom kraftigt under käken. Dra 4 ifrån hans KROPPSPOÄNG. Du får fördubbla det om du använde INRE KRAFT.",
    stillAlive: "Om han fortfarande lever slås hans huvud bakåt, men han kastar sig tillbaka och slår upp föttema mot ditt huvud, som du lyckas skydda, och vidare över det, så att han landar säkert en bit bort. Men nu står du alldeles bakom honom och kan anfalla igen.",
    choices: [
      "Om du använder Kobraslaget igen",
      "eller Järnnävens slag",
      "eller Tigertassens slag",
      "eller en spark",
      "eller ett kast"
    ]
  },
  341: {
    mainText: "Du beger dig norrut från Domedag tills du kommer till träskmarken som kallas Grönkärr. Du går i utkanten av den, går över en ﬂod som flyter ut ur den fuktiga dyn och travar på under några dagar. Du jagar och samlar vid behov och sover i träden. Efter flera dagar vänder du mot nordväst och passerar försiktigt vägen som leder norrut från Mortavalon mot staden Solur. Du beger dig in i det vilda och vindpinade bergslandskapet som kallas Kummeldalen, på väg mot staden Fiendil. Du får tillbaka alla KROPPSPOÄNG som du har förlorat hittills på resan. En egendomligt kylig dag ligger dimman tät runt kullarna och du befinner dig i en smal klyfta. En stenbumling rullar ned mot dig från kullens krön, men du hoppar smidigt undan. Plötsligt står du framför en väldig Tvåhövdad Jätte. Han svänger en knölig påk som ser ut att vara ett litet träd. Klubban visslar genom luften mot dig och du duckar ned under den. Jätten vrålar ilsket.",
    choices: [
      "Ska du använda Tigersprångets spark",
      "eller Järnnävens slag",
      "eller Virvelkastet"
    ]
  },
  342: {
    mainText: "Han lutar sig framåt när du klättrar uppför repet mot fönstret. Han är beredd och ger dig ett Järnnävens slag i ansiktet. Du förlorar 4 KROPPSPOÄNG, och om du fortfarande lever gör kraften från slaget att du faller bakåt uti luften.",
    choices: [
      "Om du är Akrobat",
      "Om du inte är det"
    ]
  },
  343: {
    mainText: "Du utdelar ett fruktansvärt slag mot den pulserande gröna säck som är Shaggothens kropp. Du skriker till när den INRE KRAFT lämnar dig. Det går en dallring genom den och tentaklerna släpper dig, när den ljudlöst sjunker ned i det bubblande träsket. När han får se det, lufsar Trollet bakom dig iväg och du fortsätter din mödosamma resa. När natten faller på har du kommit igenom träsket och fortsätter i månskenet. Vid soluppgången måste du bestämma vilken väg du ska ta.",
    choices: [
      "Om du går till Ionalbion vid Stjärnhavets södra strand och tar båten till Druath Glennan",
      "Om du går norrut mot staden Nordansnö"
    ]
  },
  344: {
    mainText: "Barbaren faller till slut som en hög brutna ben. Mot slutet verkade det som om striden skulle rasa för evigt, men hans stridsrop ska aldrig med störa Orb.",
    choices: [
      "Gå vidare",
    ]
  },
  345: {
    mainText: "Till den trögtänkta Människoätarens förvåning, hukar du dig på däcket och försöker svepa undan benen på den. Men den har grova och kraftiga ben och den är stor och stark.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Järnnävens slag"
    ],
    stillAlive: "Du misslyckas med att slänga Människoätaren i däcket och den försöker krossa dig med spikklubban. Du har 7 i Försvar mot den fallande klubban när du försöker rulla bakåt och upp på händerna, för att sedan hoppa upp på fötter. Du har inte tid att blockera det kraftiga slaget."
  },
  346: {
    mainText: "När du har petat med en ståltråd ett litet slag glider låset tillbaka och du går in i Kärntornets hall. Du stänger snabbt porten när du hör fotsteg närma sig inifrån. Utan ett ögonblicks tvekan går du över till väggens bortre hörn, hoppar upp och kilar fast dig mellan taket och de två väggarna. Du hänger där i ungefär tjugo minuter medan Förvaltaren och en vakt som har dykt upp under dig planerar en räd mot vinkällaren. Till sist försvinner de. Du hoppar ned på golvet och gnider liv i dina domnade lemmar, innan du går uppför spiraltrappan i motsatta änden av hallen. Halwägs upp lägger du märke till ett nät av fina trådar som sträcker sig över trappan och är knutna till ståltrådar som försvinner in genom hål i den inre väggen. Du går ned på händerna och \"går\" uppför trappan, samtidigt som du känner efter de nästan osynliga trådarna och spetsar öronen efter minsta ljud. Snart är du förbi dem.",
    choices: [
      "Gå vidare",
    ]
  },
  347: {
    mainText: "Din Shuriken virvlar mot honom och glänser i månskenet. Han försöker kasta sig åt sidan, men den träffar honom i armen i stället för i strupen som du hade tänkt dig. Han ropar på hjälp och faller bakåt, med handen om armen. Du kan inte få tillbaka din Shuriken. Stryk den från Speltabellen. Du bestämmer dig för att du skulle riskera hela ditt uppdrag om du stannade, så du försvinner snabbt på bakgatorna och håller dig undan i ett utbränt bageri under natten. Du inser att munken kan ha känt igen dig som en Skuggkrigare och bestämmer dig för att lämna Domedag, fast besluten att inte låta Yaemon nå fram till Förändringens pelare före dig. Du förklär dig till tiggare och lämnar staden följande morgon.",
    choices: [
      "Gå vidare"
    ]
  },
  348: {
    mainText: "Du går över Stora Kärntornets tak och går in i tornet som ståtar med Röda Syrsans banér. Du glider tyst uppför den mörka trappan och känner dig noga för efter fällor. Det ﬁnns inga, och snart kan du lägga örat mot dörren in till rummet längst upp i trappan. Du hör ingenting inifrån rummet och oljar ekdörrens gångjärn innan du försiktigt öppnar den. Yaemon, Flammans Stormästare av Röda Syrsans orden, sitter med korslagda ben på golvet i rummet och mediterar. Han bär stridsmunkens röda dräkt och ett svart bomullsbälte. Han ropar till av förvåning när han reser sig upp. Sedan blir hans ansikte bistert och orörligt igen. Han bugar för dig. ”Välkommen, Skuggkrigare. Du är Hämnaren. Jag dödade din andlige far, ” säger han. Du bugar dig också och går till anfall. Yaemon visar sig vara utomordentligt skicklig på att slåss. Han sparkar, slår och blockerar med bländande snabbhet och styrka, men ditt kontrollerade hat eggar dig till än större styrka och snabbhet. Yaemon är hårt pressad tills du hör fotsteg i trappan nedanför. Hononic har svarat på Yaemons rop och han rusar in bakom dig och viftar med sitt rykande svärd, Sorcerak. Du motstår skräcken som det Magiska svärdet utstrålar, men du kan inte stå emot dem bägge två, för de är två av de främsta krigare som Orb någonsin har skådat.\nTill sist slår Yaemons näve in i din tinning, samtidigt som Sorcerak hugger av din hals och ditt huvud rullar runt i rummet som en boll. Du har misslyckats. Nu kan ingenting stoppa dessa män. Ondskan härskar i världen.",
  },
  349: {
    mainText: "Du glider in under dess fötter, men du kan inte rubba dess väldiga ben. Den faller i stället ihop över dig, så att luften går ur dig och din bröstkorg krossas. Plöstligt stöter odjuret, som har ett utmärkt luktsinne, till och spetsar dig på sitt horn med de kraftiga armarna. Du vrider dig fortfarande svagt när den börjar äta upp dig. ",
  },
  350: {
    mainText: "När han ﬂyger mot dig hoppar du baklänges upp i handstående och sedan bakåt på fötter igen ﬂera gånger, tills du är utom räckvidd för Yaemons anfall. När han kommer ned byter du riktning och hoppar snabbt mot honom. Du stannar upp alldeles framför honom precis när han smidigt landar på fötterna. Du har möjlighet att anfalla.",
    choices: [
      "Ska du slå",
      "eller kasta",
      "eller sparka"
    ]
  },
  351: {
    mainText: "När han märker att du inte vill ta honom i handen börjar magikern mässa på en besvärjelse.",
    choices: [
      "Om du har färdigheten Giftpilar kan du använda en sådan",
      "Annars kan du anfalla honom med ett Järnnävens slag"
    ]
  },
  352: {
    mainText: "Du springer några steg längs Aquamarins däck innan du hoppar över relingen och landar mot piratskeppets sida, hängande i spygatterna med händerna. Du väntar ett ögonblick innan du börjar maka dig med en hand över den andra mot Havsgravens röda akter. Gör ett ödesslag och se om någon av Kaparna har lagt märke till när du hoppade över till deras skepp.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  353: {
    mainText: "Du kan välja vem av dem du vill anfalla, men munkarna som dyrkar den Lede är väl bevandrade i stridskonstema. En av munkarna försöker använda en Bevingade hästens spark mot dig, men du går åt sidan åt vänster och försöker slå honom över strupen med höger hand i ett Tigertassens slag.",
    choices: [
      "Om du överlever kan du använda Bevingade hästens spark",
      "eller Tigertandskastet",
    ],
    stillAlive: "Om de fortfarande lever anfaller de dig. Du har 6 i Försvar mot deras båda anfall och 8 om bara en är i livet."
  },
  354: {
    mainText: "Vakten tvekar och säger, \"Vänta här medan jag hämtar de nödvändiga papperen. Du behöver ett passerkort\" Han gör tecken till en annan soldat att ta över och går in under fällgallret till borggården. När du stirrar på hans försvinnande rygg inser du att Mortavalon ligger hundratals kilometer söderut, en lång väg att vandra sedan det senaste uppträdandet. Man du kan kanske säga att du är på väg hem till Nordansnö.",
    choices: [
      "Väntar du på att vakten ska komma tillbaka",
      "eller går du din väg, om han skulle förbereda en fälla"
    ]
  },
  355: {
    mainText: "Vakterna ser in i den ﬂammande elden som förblindar dem för allt annat runt dem. En av dem muttrar, \"Bara ett vedträ som tog eld,\" när du ljudlöst smyger förbi dem och nedför trappan till lnre borggården nedanför. En vakt går runt på Inre borggården, men du väntar tills han är utom synhåll på andra sidan Stora Kärntornet, och glider som en skugga genom gräset till en liten port som leder in i själva Tornet.",
    choices: [
      "Om du har färdigheten Dyrka upp lås kan du försöka öppna den stängda porten",
      "Om du inte har färdigheten, eller inte vill använda den"
    ]
  },
  356: {
    mainText: "356 missing in book",    
  },
  357: {
    mainText: "Pojken skriker till när han dör och männen slår med piskan över oxen och kör därifrån, med Kobramannen släpande efter. Det ﬁnns en grotta under ett klipputsprång alldeles över dig på bergssidan. ”Den vägen till Mortavalon,” ropar en av männen och pekar mot grottan.",
    choices: [
      "Om du fortsätter längs vägen",
      "Om du undersöker grottan"
    ]
  },
  358: {
    mainText: "Monstret hukar sig när du klättrar uppför grottväggen och fäster dina Kattklor i sprickor i grottaket. Den är kedjad vid väggen med en tung kedja som är lång nog att räcka till din sida av grottan. Plötsligt kastar sig odjuret, som har ett utmärkt luktsinne, mot dig, sliter ned dig från taket och spetsar dig på sitt hom med de kraftiga annama. Du vrider dig fortfarande svagt när den börjar äta upp dig.",
  },
  359: {
    mainText: "Du går fram mot honom och utdelar utan förvarning en Flygande hästens spark mot hans strupe.",
    choices: [
      "Om du använder INRE KRAFT",
      "Om du inte kan eller vill göra det"
    ]
  },
  360: {
    mainText: "Människoätaren viker sig vid knäna och faller baklänges mellan de två skeppen. Vattnet skvätter upp när han faller i vattnet. Om du har använt en Shuriken försvinner den med Människoätaren. När du ser dig hastigt omkring kan du se att Kaparna med sina öronringar och kroksablar är en mer än hård match för Aquamarins besättning. Glaivas skicklighet med svärdet är bländande, men de tränger långsamt in honom. Med en kraftig spark åt sidan fäller du ännu en angripare till golvet, där han ligger livlös. En annan storvuxen pirat med vårtigt ansikte gör ett utfall mot dig med sin sabel. Du slår blixtsnabbt ihop händerna och fångar klingan mellan dem, när den är centimetrar från ditt ansikte. Han hinner gapa av förvåning innan din högra fot slår in i hans tinning.",
    choices: [
      "Du kan försöka slå dig fram till Glaivas",
      "Du kan hoppa över till Kaparnas skepp och anfalla piratkaptenen"
    ]
  },
  361: {
    mainText: "Det är helt mörkt inne i tornet, men när du tittar upp mot dörren längst upp ser du ett rött öga som hänger fritt i tomma intet. Det glöder, och ögonvitan är fruktansvärt blodsprängd. När du tittar på det blinkar det och försvinner plötsligt.",
    choices: [
      "Om du lyssnar vid dörren till rummet",
      "Om du går över det Stora Kärntornets tak till tornet med Svarta virvelströmmens ﬂagga"
    ]
  },
  362: {
    mainText: "Det finns ingenting du kan göra när träsket sluter sig om dig. lnte ens Trollet som jagade dig vågar göra något för att rädda sin middag.",
  },
  363: {
    mainText: "När du griper tag i hans hand pirrar det till och du får en stöt som lamslår din kropp. Du förlorar 7 KROPPSPOÄNG. Om du fortfarande lever övervinner du smärtan som skulle ha förlamat de ﬂesta - din träning har ofta inneburit värre saker- och använder Järnnävens slag för att slå honom i magen. Sedan svänger du runt och använder Bevingade hästens spark. Du slår in foten i ansiktet på honom och sparkar ut honom i vallgraven. Vattnet kokar när de Flytande munnarna kastar sig mot sitt byte. lnom en minut har de slitit köttet från benen på honom. Du klättrar upp mot Vätten i tornet. Odjuret gör sig till inför publiken, säker på att vinna i dag också. Han slår sig för bröstet, som är dubbelt så brett som ditt, och svingar treudden med en hand. Tornet är grovt murat med många fästen för händerna, och du rör dig runt det så att Vätten inte vet exakt var du beﬁnner dig. Sedan griper du tag i en utskjutande sten med händerna och svingar dig upp i tornet bakom honom. Han svänger runt och du anfaller honom blixtsnabbt.",
    choices: [
      "Använder du Tigersprångets spark",
      "eller Virvelkastet",
      "eller Tigertassens slag"
    ]
  },
  364: {
    mainText: "Du hör ingenting inifrån rummet och du oljar ekdörrens gångjärn innan du försiktigt skjuter upp den. Yaemon, Flammans Stormästare av Röda Syrsans orden, sitter med korslagda ben på golvet där inne och mediterar. Han är klädd i krigarmunkens röda dräkt med ett svart bomullsbälte. Ansiktet är bistert och orörligt när han ställer sig upp och bugar för dig.\n\"Välkommen, Skuggkrigarre, du är Hämnaren och jag dödade din andlige far,\" säger han. Du bugar för honom och anfaller. Yaemon visar sig vara mycket skicklig på att slåss. Han sparkar, slår och blockerar med förblindande snabbhet och styrka, men ditt kontrollerade hat eggar dig till än större handlingskraft. Yaemon är hårt ansatt tills du hör fotsteg i trappan nedanför. Det röda ögat var en besvärjelse kastad av Manse Dödsmagikern. Han såg dig genom det svävande ögat och kallade på vakterna, som kommer inrusande i rummet bakom dig. Du vänder dig om för att blockera ett svärdshugg, men Yaemon kastar dig till marken och en av soldaterna naglar fast dig vid golvplankoma med svärdet. Du har misslyckats med ditt uppdrag.",
  },
  365: {
    mainText: "Kaststjärnan missar och fastnar i kojans trävägg, när energiklotet träffar dig och exploderar. Du förlorar 6 KROPPSPOÄNG när explosionen bränner dig och kastar dig bakåt några steg. Om du fortfarande lever morrar du av vrede när du cirklar runt Runvävare.",
    choices: [
      "Gå vidare"
    ]
  },
  366: {
    mainText: "Du försöker ta av tiaran från Barbarens huvud, men du bränner dig när du rör vid den. Du förstår av de Magiska tecken som är inristade på den, att den smiddes djupt nere i Klyftan av Svartalver. Ingen med rent hjärta kan röra vid den.\nDu tillbringar natten i kojan och får tillbaka upp till 3 KROPPSPOÄNG. Du lämnar kvar de oanvändbara skattema, de skulle bara tynga dig på resan, men du bestämmer dig för att ta 5 guldstycken från Olvar.\nDe skulle kunna komma till användning. I soluppgången ger du dig av på ditt uppdrag igen. Senare på dagen kommer du ned ur Lyckopasset.",
    choices: [
      "Du kan bege dig mot nordost till Stjämhavet och Druath Glennan",
      "eller norrut mot staden Nordansnö",
      "eller österut genom Trollkärret till staden Ionalbion, för att ta en båt över Stjärnhavet"
    ]
  },
  367: {
    mainText: "Du slår ut med vänster arm i ett försök att gripa tag i Yaemons handled, men han reagerar nästan omedelbart med att gå bakåt och gripa tag i din arm. Så vrider han dig så att du har ryggen mot honom.\nHan drar upp din underarm mellan skulderbladen på dig i en smärtsam låsning, medan han lägger sin andra arm om ditt huvud. Du vet att du bara har en sekund på dig innan din nacke bryts, så du går ned i hukande ställning och hoppar med föttema över Yaemons huvud, så att du landar bakom honom och bryter hans grepp. När dina fötter slår i marken snurrar han runt och sparkar till med höger fot i en vid båge från höger till vänster. Sparken träffar dig i sidan av huvudet med våldsam kraft, när han vrålar till med den lnre kraftens styrka. Du förlorar 10 KROPPSPOÄNG. Om du fortfarande lever tar reﬂexerna över så att du rullar med slaget och hjular undan till sidan av Yaemon. När du stannar upp känner du dig lite omtumlad. Han kastar sig över dig igen med en serie slag.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "om inte"
    ]
  },
  3670: {
    mainText: "Du saknar färdigheten Akrobatik och försöka blockera hans många anfall. Du har 7 i Försvar.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "om inte"
    ]
  },
  368: {
    mainText: "Spindelvävshallen är en böjd korridor, som en välvd bro, som förbinder bostadsdelen på övervåningen med refektoriet där munkarna äter. När dörren går upp ser du ett rum som är svagt upplyst av två ﬂämtande ljus. Eftersom du är förvarnad lägger du märke till blänket av de många trådarna, tunna som spindelväv, som går kors och tvärs över golvet. Några av dem antar du är anknutna till klockor eller fällor som skulle förråda eller döda dig. Du böjer dig ned, går upp i handstående och går genom rummet på händerna. Du kan balansera på en arm medan den andra försiktigt undersöker golvet framför dig efter trådar. Det tar dig en halvtimme att långsamt gå genom rummet, men du lyckas utan att bryta någon av trådarna. Du kommer fram till dörren och går smidigt ned på fötter igen innan du öppnar den. Nu står du på balkongen över refektoriet och matsalen. Medan du kryper ihop bakom balkongen får du reda på det du behöver veta, av munkar som dricker vin sent in på natten. Yaemon tycks har gett sig av mot Mortavalon, tillsammans med Honoric, Marskalk över Doms- värdslegionen, för tio dagar sedan. lnnan du hinner ge dig av får du syn på en bokrulle där några av de sparkar, slag och kast som används i Syrsans Väg, stridskonsten som används av den Ledes munkar, finns beskrivna. Du kan höja din Slagmodifikation med 1, eftersom du lär dig några användbara tekniker. De är skickliga på att slå. Du lägger också märke till att de inte känner till den Kluvna blixtsparken. Det kan vara bra att veta när du måste slåss mot en munk som dyrkar den Lede. Du lyckas ta dig ut samma väg som du kom utan svårighet, och håller dig dold i ett nedbränt bageri resten av natten. På morgonen lämnar du Domedag, fast besluten att hinna ifatt Yaemon och Honoric.",
    choices: [
      "Gå vidare"
    ]
  },
  369: {
    mainText: "Du lägger hälen mot portlåset och luften går ur dig när du låter din INRE KRAFT välla fram. Låset går av med en smäll och porten glider upp. Du går in i Kärntornet och stänger snabbt porten när du hör steg närma sig inifrån. Utan ett ögonblicks tvekan går du över till det bortre hörnet av väggen, hoppar upp och kilar fast dig mellan taket och väggarna. Du hänger där i tjugo minuter medan Förvaltaren och vakten som har dykt upp under dig planerar en räd mot vinkällaren.\nTill sist försvinner de. Du hoppar ned på golvet och gnuggar liv i dina domnade lemmar, innan du går uppför spiraltrappan som går upp från andra sidan hallen. Halwägs upp lägger du med din skarpa blick lägger märke till ett nät av tunna trådar som sträcker sig över trappan och sitter fast i ståltrådar som försvinner genom hål i den inre väggen. Du går ned på händer och \"går\" uppför trappan, samtidigt som du känner efter de nästan osynliga trådarna och spetsar öronen efter minsta ljud. Strax är du förbi dem.",
    choices: [
      "Gå vidare"
    ]
  },
  370: {
    mainText: "Har du använt det dödligaste av gifter, Intets blod?",
    choices: [
      "Om du har gjort det",
      "Om du inte har gjort det"
    ]
  },
  371: {
    mainText: "Du fortsätter att slåss och fäller två eller fler av de svartmuskiga Sjörövarna. Men besättningen övermannas snabbt, några dårar ger sig till och med. Du är omringad, men ingen kan ta sig förbi de blixtsnabba slagen från dina händer och fötter. Plötsligt tittar en av dem upp över dig och ﬂinar. Du vänder blicken uppåt och ser riggen falla ned mot dig. En av piraterna har klättrat upp i masten och huggit ned riggen. Du kan nätt och jämnt röra dig under den och en svärm av piratkroppar fäller dig, kämpande, till marken. Du bärs ned. Dina Skuggkrigarverktyg tas ifrån dig och du binds fast vid en av Aquamarins åror.",
    choices: [
      "Gå vidare"
    ]
  },
  372: {
    mainText: "Mannen i blå och gyllene klädnad stiger fram mot dig. Han är ung, inte äldre än du och ögonen blinkar muntert. Det hänger en guldplatta i ett korallhalsband på hans bröst. Vätten tittar på och hamrar med treudden mot slottstornet. Den unge mannen talar. ”Var hälsad, stridskamrat. Jag ska inte fråga vilket brott du har begått för att Mortavalons folk ska ha skickat in dig på arenan. Jag ska istället föreslå dig en sak. Jag är magiker. Mina besvärjelser är mäktiga och dödliga.” Du lägger märke till att hans gyllene och blå klädnad är slät och oskrynklad, när han fortsätter, ”Jag har dödat Snöjätten och jag skulle kunna döda dig, men då måste jag döda den där också,” han pekar mot Vätten, ”och om jag dog skulle ingen av oss ha överlevt. Låt oss sluta fred och döda det där vidriga odjuret tillsammans, sedan kan folket få avgöra vem av oss som ska få leva. Här, ta min hand.”",
    choices: [
      "Om du vill ta hans hand, antingen för att kasta honom i vallgraven eller för att sluta fred med honom",
      "Om du hellre vill anfalla honom på något annat sätt"
    ]
  },
  373: {
    mainText: "Det väldiga monstret lufsar mot dig och du kan se att det liknar en väldig, hårlös apa. Det har en kraftig kätting runt fotleden, så att den bara kan nå grottans öppning. Det hängande skinnet avslöjar väldiga svarta muskler, fyllda av kraft.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Järnnäven",
      "eller Draksvanskastet"
    ]
  },
  374: {
    mainText: "Du får välja vilken munk du vill anfalla. En av dem försöker slå till dig, men du lutar dig bakåt utom räckhåll och kör upp din fot mot hans huvud.",
    choices: [
      "Om du överlever kan du använda Bevingade hästens spark",
      "eller Tigertandskastet",
    ],
    stillAlive: "Om de fortfarande lever anfaller de dig. Du har 6 i Försvar mot deras båda anfall och 8 om bara en är i livet."
  },
  375: {
    mainText: "Du lyckas hålla dig fast vid stenarna utanpå Spindelvävshallen när munken kastar ned änterhaken på stenläggningen nedanför. Du buktalar så att munken hör vad han tror är ett stönande från gårdsplanen nedanför. Han skrockar och lutar sig ut från fönstret för att titta ned, men han ser ingenting i mörkret. Han drar tillbaka huvudet och du tar dig långsamt uppför väggen mot fönstret, skjuter ifrån med fötterna, svänger ned och in genom fönstret och landar tyst bakom honom när han går bort från det. Han tycks märka att du är där och vänder på huvudet när du kastar din strypsnara om halsen på honom. Han dör utan ett ljud. Hallen är svagt upplyst av två ﬂämtande ljus, men dina skarpa ögon kan se den glittrande spindelväven som går kors och tvärs över golvet. Du sträcker dig upp från fönsterbrädet, kör in Kattklorna i murbruket i taket och tar dig långsamt över till dörren. Du befinner dig på en balkong över refektoriet och matsalen. När du kryper ihop bakom balkongen råkar du få höra det du behövde veta, av munkar som sitter och dricker vin till sent in på natten. Det verkar som om Yaemon har gett sig av mot Mortavalon tillsammans med Honoric, Marskalken över Domsvärdslegionen, för tio dagar sedan. Innan du ger dig av får du syn på en bokrulle som beskriver de sparkar, slag och kast som används i Syrsans väg, den stridsteknik som den Ledes munkar använder. Du kan höja din Kastmodifikation med 1, eftersom du lär dig några användbara tekniker. Du lägger också märke till att de inte känner till den Kluvna blixtsparken. Du lyckas ta dig ut genom ett fönster från balkongen och klättrar ned till gårdsplanen, där du hämtar din änterhake. Sedan gömmer du dig i ett nedbränt bageri resten av natten. På morgonen lämnar du Domedag, fast besluten att hinna ikapp Yaemon och Honoric.",
    choices: [
      "Gå vidare"
    ]
  },
  376: {
    mainText: "Du ligger orörlig på gräset när de stiger av och undersöker din kropp. Du slutar andas nästan helt och hållet och koncentrerar dig på att få blodet att sluta flyta ut mot huden. Din hjärtverksamhet går ned till minsta möjliga. När de rör vid dig verkar det som om du redan börjar bli stel och när din panna börjar kännas kall efter ett slag, rider de i väg och lämnar dig. När de stiger i sadeln bestämmer de sig för att återvända till sitt tempel, helgat åt Nemesis, Ondskans högsta princip.\n\"Manse kommer att bli nöjd,\" säger en av dem.\n\"Ja, och de underliga munkarna av Syrsans orden,\" säger en annan. När de har lämnat dig fortsätter du försiktigt. Du undrar hur ryktet om dig kan ha färdats så snabbt före dig och varför Nemesis prästerskap skulle vara i förbund med munkarna som dyrkar den Lede. Efter ett slag kommer du in i det bergslandskap som omger Mortavalon. Du påminner dig att du har hört talas om en trollkarl som dyrkar Nemesis, Manse Dödsmagikern, betraktad som en av de mäktigaste varelserna på Orb. Dina funderingar avbryts när du får syn på en grotta i bergssidan ovanför dig.",
    choices: [
      "Om du fortsätter utefter vägen mot Mortavalon",
      "Om du går in i grottan"
    ]
  },
  377: {
    mainText: "Olvar uppger ett vildsint vrål, överger all försiktighet och svingar svärdet över huvudet och gör ett utfall mot dig. Han har gripits av bärsärkarraseri och är helt uppslukad av stridslust. Han känner ingen fruktan eller smärta förrän antingen du eller han ligger död. Dra ifrån 1 från all skada du gör på honom. Du parerar hans klinga med underarmen, går åt sidan och måttar ett Kobraslag från höften och uppåt.",
    choices: [
      "Om du fortfarande lever kan du sparka",
      "eller kasta",
      "eller slå till igen."
    ],
    stillAlive: "Om han fortfarande lever svingar han sitt svärd i en väldig båge från vänster till höger, i ett försök att sprätta upp ditt bröst. Du har 8 i Försvar mot hans vilda hugg, när du försöker hoppa bakåt"
  },
  378: {
    mainText: "Dina tre Shuriken ﬂyger mot Yaemons strupe, men han vänder sig åt sidan i exakt rätt ögonblick, höjer högerarmen framför bröstet och för höger hand upp och ned genom luften i en snabb rörelse. Han använder baksidan av handen och tumroten för att slå undan dina Shuriken utan att röra vid eggen och de ﬂyger ut i natten. Du är förbluffad, men inser att du måste handla innan han har slutat koncentrera sig på dina stjärnor.",
    choices: [
      "Använder du en Giftpil, om du har den färdigheten",
      "eller går du till anfall i närstrid",
    ],
    stillAlive: "Om han fortfarande lever svingar han sitt svärd i en väldig båge från vänster till höger, i ett försök att sprätta upp ditt bröst. Du har 8 i Försvar mot hans vilda hugg, när du försöker hoppa bakåt"
  },
  379: {
    mainText: "Du hoppar bakåt, men snubblar nedför trappoma och den nu stora, gröna juvelen faller ned över dig. Du upptäcker att du befinner dig inne i den och den rullar nedför trappan med dig, ut över det Stora kärntornets tak. Genom den gröna glasväggen ser du Yaemon dyka upp när Manse följer efter dig ut på Tornets tak. Juvelen börjar dra ihop sig och du krymper med den tills du är liten som en myra. Manse Dödsmagikern ler när han plockar upp juvelen från golvet, och du hör honom säga till Yaemon att han ska låta fatta in dig i en ring. Du kommer att leva länge, en liten vansinnig på Dödsmagikerns hand.",
  },
  380: {
    mainText: "Pilen når fram till dig när du befinner dig mitt i luften mellan riggen och däcket, men du slår upp med handen och plockar den ur luften några centimetrar framför ditt bröst och kastar den åt sidan. Människoätaren är rasande och höjer sin spikklubba för att krossa dig.",
    choices: [
      "Du kan försöka använda Bevingade hästens spark",
      "eller försöka med Järnnävens slag",
      "eller glida över däcket och använda Draksvanskastet"
    ]
  },
  381: {
    mainText: "",
    choices: [
      "Om du har färdigheten Klättra kan du klättra upp på sidan av Kärntornet till taket",
      "eller klättra upp på Kärntornet och ta dig in genom ett av de lägre fönstren",
      "Om du inte har den färdigheten, eller inte vill använda den, kan du, om du har någon INRE KRAFT kvar, försöka tvinga upp låset",
      "Om det inte går kan du inte ta dig in i Kärntornet från lnre borggården. Då kan du bara pröva gallret i vallgraven. Du lyckas lätt klättra tillbaka upp i det förfallna tornet."
    ]
  },
  382: {
    mainText: "Ditt otroliga hopp räcker för att ta dig till ön och du landar mjukt på fötterna. Folkmassan jublar. Du ser dig omkring. Svartalven syns inte till någonstans. Hon har försvunnit i träsket. Riddaren ligger uppﬂäkt på sanden, men mannen i blå och gyllene klädnad flyter över vallgraven på ett litet isﬂak.",
    choices: [
      "Gå vidare"
    ]
  },
  383: {
    mainText: "När du makar dig framåt öppnar sig en grotta runt dig och du kan svagt se konturerna av något som liknar en Äldre Gud i ljuset av en ensam, rykande fackla. Den har ett väldigt, krökt horn i pannan och som nästan skrapar mot det fem meter höga taket. Dess konturer är egendomligt oregelbundna och stanken av förruttnelse antyder att den tjocka huden faller av i stora, döda sjok. Om det verkligen är en av de Äldre Gudarna vet du att den är otroligt stark, även om den har försvagats av att leva i den här fuktiga och slemmiga grottan. Den halvätna kroppen av den olycklige som kastades till monstret när du anlände till Fruktans borg ligger framför dig, med en skräckslagen grimas i ansiktet.",
    choices: [
      "Om du har färdigheten Klättra kan du försöka kräla över taket i mörkret, bort från facklan",
      "Annars går du fram, redo att slåss"
    ]
  },
  384: {
    mainText: "Din fot slår in i hans solarplexus med en otrolig kraft, knäcker ett revben och får honom att tappa andan. Han viker sig dubbel, oförmögen att röra sig, och du slår ut med en kluven blixtspark. Din fot slår först in i hans mellangärde igen, sedan upp mot hans strupe i en enda flytande rörelse. 'Han faller död ned på den leriga gatan tre sekunder efter det att du anföll. Du ödslar ingen tid, utan tar av honom hans röda dräkt och drar den över din Skuggkrigardräkt. Du går lugnt och självsäkert in i klostrets sovsalar utan att någon stoppar dig, och fortsätter mot Spindelnätens hall.",
    choices: [
      "Gå vidare"
    ]
  },
  385: {
    mainText: "Du tar fram din änterhake och repet ur en ﬁcka i dräkten, som nu är täckt med slem, och kastar kroken mot en förvriden stubbe vid stigen. Vid andra försöket fastnar den. Du ser dig försiktigt om efter odjuret som förföljde dig och drar dig upp ur gungﬂyt. När du tar loss kroken och lägger tillbaka den, får du syn på den mörka skepnaden av odjuret bakom dig på stigen, ett väldigt, vårtigt Troll. Det rör sig inte.\nPlötsligt sprutar träsket upp framför dig och grova, ﬁbriga tentakler ringlar sig runt dig. En missformad utväxt som liknar ett grönt stenblock, en Shaggoth, angriper dig. Du hoppar undan från en av tentaklerna och slår till den pulserande massan till kropp. Din näve sjunker in och gör inte mycket skada.",
    choices: [
      "Om du har någon INRE KRAFT kvar",
      "Om du inte har det"
    ]
  },
  386: {
    mainText: "Du hör ingenting inifrån rummet och du oljar ekdörrens gångjärn innan du försiktigt skjuter upp den. Yaemon, Flammans Stormästare av Röda Syrsans orden, sitter med korslagda ben på golvet där inne och mediterar. Han bär kngarmunkens röda dräkt med ett svart bomullsbälte. Hans ansikte är bistert och orörligt när han ställer sig upp och bugar mot dig. \"Välkommen, Skuggkrigare. Du är Hämnaren och jag dödade din andlige far, \" säger han. Du bugar för honom och går till anfall. Yaemon visar sig vara en ypperlig slagskämpe. Han sparkar, slår och blockerar med förblindande snabbhet och styrka, men ditt kontrollerade hat eggar dig till än större styrka och snabbhet.\nYaemon är hårt trängd tills du hör steg i trappan nedanför. Det röda ögat var en besvärjelse kastad av Manse Dödsmagikern. Han såg dig genom det svävande ögat och nu kommer han in i rummet bakom dig. Du vänder dig om för att måtta en spark mot honom, men han släpper ned en grön juvel på golvet mellan er. Han uttalar ett uråldrigt maktens ord och juvelen utvidgar sig tills du befinner dig inne i den.\nDu kan inte ta dig ut och juvelen börjar krympa samman igen. Du krymper med den tills du är stor som en myra. Manse Dödsmagikern ler när han plockar upp ädelstenen från golvet och du hör honom säga till Yaemon att han ska låta fatta in dig i en ring. Du kommer att leva länge, en liten vansinnig på Dödsmagikerns hand.",
  },
  387: {
    mainText: "Ryttaren i ringbrynja stelnar till när du slår mot hans hals, och han faller av hästen. Du balanserar på händerna och tar dig fram till sadeln och tar tyglarna när hästen börjar skena. Du är en skicklig ryttare och lyckas vända det vettskrämda djuret mot bergsområdet som omger Mortavalon. De andra dundrar efter, och är fortfarande bakom dig när du kommer in i bergsområdet. De börjar uttala en ondsint besvärjelse och du övermannas av någon sorts tröghet.",
    choices: [
      "Om du sporrar på hästen ytterligare",
      "Om du hoppar av hästen och springer in i en grotta som du ser i bergssidan ovanför dig"
    ]
  },
  388: {
    mainText: "Giftet har ingen verkan och du lyckas ta dig ned genom metallgallret där du såg mannen släppas ned när du kom till Fruktans borg.",
    choices: [
      "Gå vidare"
    ]
  },
  389: {
    mainText: "I en snabb rörelse lägger du en Giftpil på tungan och spottar ut den mot magikerns ansikte. Han försöker hoppa undan. Han har 4 i Försvar mot din pil.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  390: {
    mainText: "Vilken spark vill du använda?",
    choices: [
      "Bevingade hästens spark",
      "Kluven blixtspark",
      "Tigersprångets spark",
      "Kwons slaga, om du kan den"
    ]
  },
  391: {
    mainText: "Kobrans gift är dödligt och du dör inom tio minuter, med din kropp över Dödsmagikerns. Du har misslyckats med att hämnas din andlige faders död och Yaemon kommer att uttala det maktens ord vid Förändringens pelare som kommer att binda din gud, Kwon, i Infemo.",
  },
  392: {
    mainText: "Du närmar dig slottet på den punkt där de närmaste tornen står trettio meter ifrån varandra. Du kan höra vakterna patrullera vid bröstvärnet, över ljudet från de kväkande oxgrodorna. Du glider ljudlöst ned i den kalla vallgraven och regnet faller runt omkring dig. Oxgrodorna är ovanligt högljudda och du inser att det skulle märkas om de tystnade plötsligt.",
    choices: [
      "Om du har någon Eldödle-essens",
      "Om du inte har det"
    ]
  },
  393: {
    mainText: "När du smyger dig förbi vakterna, som fortfarande värmer sig vid elden under segelduksskyddet, utlöser du en fälla och en giftnål sticker upp i fotsulan på dig.",
    choices: [
      "Om du har Immunitet mot gift",
      "Om du inte har det"
    ]
  },
  3930: {
    mainText: "Du faller hjälplös till golvet med musklerna knutna i krampryckningar. En av vakterna sticker svärdet igenom dig så att han kan säga sig ha varit vaksam nog att döda dig. Du har misslyckats med ditt uppdrag.",
  },
  394: {
    mainText: "Kobramannen ligger utbredd på sanden, död. Folkmassan vrålar entusiastiskt när du tar pålen från sanddynen i närheten. Du tar tag i ena änden, håller den framför dig, springer till kanten av öknen, sätter ned änden av pålen i sanden och seglar över den breda vallgraven. Du ser att den är full av Flytande munnar, rovgiriga fiskar som bara består av en mun och en töjbar buk. Du landar på muren som är den lägsta delen av slottet. Mannen i blått och guld ﬂyter över vallgraven på ett litet isﬂak som har brutits loss från kanten av issjön.",
    choices: [
      "Gå vidare"
    ]
  },
  395: {
    mainText: "Munken är också en mästare på närstrid och han är beredd på ett anfall från sin mörke angripare. Han har 6 i Försvar mot din Bevingade hästens spark, när du grymtar till av den INRE KRAFTEN som utlöses.",
    choices: [
      "Gå vidare",
      "Gå vidare"
    ]
  },
  396: {
    mainText: "Innan du når fram till däcket genomborrar pilen ditt lår och du snubblar. Du drar ut den hullingförsedda pilen, men muskeln är svårt sargad. Du förlorar 4 KROPPSPOÄNG och får dra 1 från din Sparkmodifikation. Människoätaren är rasande och höjer sin spikklubba för att krossa dig.",
    choices: [
      "Du kan försöka använda Bevingade hästens spark",
      "eller försöka med Järnnävens slag",
      "eller glida över däcket och använda Draksvanskastet"
    ]
  },
  397: {
    mainText: "Det är alldeles mörkt inne i tornet, men när du tittar upp mot dörren längst upp ser du ett rött öga som hänger fritt i tomma intet. Det glöder och ögonvitan är fruktansvärt blodsprängd. När du tittar blinkar det och försvinner plötsligt.",
    choices: [
      "Om du lyssnar vid dörren till rummet",
      "Om du går över det Stora Kärntornets tak till tornet med Svarta virvelströmmens flagga"
    ]
  },
  398: {
    mainText: "Du hoppar ned i den breda, steniga tunneln under dig, och hoppas att du ska hinna slutföra ditt uppdrag innan vakterna märker att gallret inte ligger på sin plats. Du sjunker ned till anklama i slem och pipande kloakråttor rör vid dina fotlederi mörkret. Du trevar dig långsamt fram och stannar upp helt när du känner att det finns någonting framför dig. Det har upptäckt dig och ett öronbedövande vrål ekar i grottan som är dess hem.",
    choices: [
      "Om du fortsätter längs tunneln mot det",
      "Om du har färdigheten Klättra kan du försöka lämna tunneln och klättra uppför slottsmuren"
    ]
  },
  3980: {
    mainText: "Du hoppar ned i den breda, steniga tunneln under dig, och hoppas att du ska hinna slutföra ditt uppdrag innan vakterna märker att gallret inte ligger på sin plats. Du sjunker ned till anklama i slem och pipande kloakråttor rör vid dina fotlederi mörkret. Du trevar dig långsamt fram och stannar upp helt när du känner att det finns någonting framför dig. Det har upptäckt dig och ett öronbedövande vrål ekar i grottan som är dess hem.",
    choices: [
      "Du fortsätter längs tunneln mot det",
    ]
  },
  399: {
    mainText: "När du går uppför trappan ser du den öppna dörren till Bankettsalen och kryper förbi det drömmande hushållets låsta dörrar. Till sist känner du den fuktiga vinden omsluta dig igen när du kikar upp förbi översta trappsteget mot Kärntornets platta tak. De tre tornen, som är förvånansvärt stora nu när du är så nära, ståtar fortfarande med ﬂaggorna som är svagt upplysta av elden från ett fyrfat med kol.\nGardeskaptenen står med ryggen mot fyrfatet, klädd i svart rustning.\nDå och då patrullerar han längs bröstvärnet från det ena tornet till det andra, innan han går tillbaka för att värma sig vid fyrfatet. Han har tagit av sig hjälmen och står vid kolglöden.",
    choices: [
      "Om du väntar tills han ställer sig vid det låga bröstvärnet och försöker kasta honom över kanten",
      "Om du använder en Shuriken och siktar mot huvudet",
      "Om du smyger fram bakom honom och använder strypsnaran",
      "Om du har färdigheten Giftpilar, kan du använda en sådan"
    ]
  },
  400: {
    mainText: "Du använder Jämnäven och slår in i Manses huvud så hårt att det nästan ﬂyger av axlarna. När du hör hans nacke knäckas känner du kobrans huggtänder i din hals. Giftet sprider sig i dina vener.",
    choices: [
      "Om du har lmmunitet mot gift",
      "Om du inte har det"
    ]
  },
  401: {
    mainText: "Yaemon är för snabb för att du ska kunna lyckas med Tigertandskastet.",
    choices: [
      "Du kan försöka med Virvelkastet",
      "eller Draksvanskastet"
    ]
  },
  402: {
    mainText: "Du lyfter på gallret vid vallgravens kant och sänker dig ned i den breda, steniga tunneln nedanför. Du satsar på att du ska hinna slutföra ditt uppdrag innan vakterna märker att gallret inte ligger på sin plats.\nDu sjunker ned till fotknölarna i slem och pipande kloakråttor rör vid dina fotleder i mörkret. Du trevar dig långsamt fram och stannar tvärt när du känner att det finns någonting framför dig. Det har upptäckt dig och ett öronbedövande vrål ekar i grottan som är dess hem.",
    choices: [
      "Om du fortsätter längs tunneln mot det",
      "Om du har färdigheten Klättra kan du försöka lämna tunneln och klättra uppför slottsmuren"
    ]
  },
  403: {
    mainText: "Munken är en mästare på närstrid. Han går bakåt och slår undan din fot med underarmen. Sedan skriker han skräckslaget: ”SKUGGKRIGARE!”,för att larma de andra. Du inser att ditt uppdrag skulle vara i fara om du stannade och försvinner snabbt bland bakgatorna. Du gömmer dig i ett utbränt bageri under natten. Du funderar över att munken såg att du var en Skuggkrigare och beslutar dig för att lämna Domedag, fast besluten att se till att Yaemon inte når fram till Förändringens pelare före dig. Du lämnar staden nästa morgon, förklädd till tiggare.",
    choices: [
      "Gå vidare"
    ]
  },
  404: {
    mainText: "Ditt sista steg ledde dig från stigen och rakt ut i träsket. Du börjar obevekligt sjunka och slår i gyttjan som bubblar runt dig. Du lugnar ned dig och slutar röra dig, så att du sjunker långsammare.",
    choices: [
      "Om du har färdigheten Klättra",
      "Om du inte har det"
    ]
  },
  405: {
    mainText: "Oxkärran rullar fram under dig när du gör en volt över den och landar mjukt på fötterna. Innan du hinner röra dig dyker två munkar upp från dörröppningar på vardera sidan om dig. De bär symbolen Avatars kors, inverterat och omringat av en orm. Du känner igen den Ledes märke.\n\"Det måste vara Kwondyrkaren,\" säger en. \"Bara en munk kan ha klarat sig undan kärran.\" De går till anfall och ni intar stridsställning.\nFörst cirklar ni tyst runt varandra ett ögonblick.",
    choices: [
      "Använder du Tigertassens slag",
      "eller Bevingade hästens spark",
      "eller Tigertandskastet"
    ]
  },
  406: {
    mainText: "Blixten går förbi dig och slår in i väggen bakom, så att kojans brädor börjar glöda. Du går till anfall innan Olvar hinner fyra av en till.",
    choices: [
      "Du kan försöka använda Kobraslaget mot hans oskyddade hals",
      "eller Bevingade hästens spark",
      "eller Draksvanskastet",
      "eller om du har färdigheten Giftpilar, kan du använda en sådan"
    ]
  },
  407: {
    mainText: "Du är inte tillräckligt snabb och den tunga stridsklubban träffar dig i ansiktet innan ditt slag träffar. Du förlorar 8 KROPPSPOÄNG. Om du fortfarande lever är smärtan olidlig. Du faller av hästen och landar i en hög på marken.",
    choices: [
      "Om du har förmågan att minska ämnesomsättningen och Spela död",
      "Om du inte kan eller vill, drar du dig upp på fötter och stapplar mot ﬂoden"
    ]
  },
  408: {
    mainText: "Du går förbi slavmarknaden där en kapten från Domsvärdslegionen bjuder utan att mötas av något motstånd, på män för att ro skeppen i Yttre befästningens förbund, Domedags flotta. De flesta av stadsborna tycks ta en stor omväg förbi platsen och du skyndar förbi. Du kommer till stadens största byggnad och stannar upp för att stirra fascinerat. Du gissar att det måsta vara templet till Vasch-Ro. Det är en väldig katedral byggd av basaltblock, med ett väldigt, fyrkantigt och befäst tom, slätt och outsmyckat, som höjer sig sjuttio meter över byggnaderna omkring. Bakom det ligger Honorics residens, mer en fästning än ett palats. Du fortsätter mot en krog med en skylt med soldater med ekrade hjul på sköldarna, som hukar sig framför ett svart svärd som hänger i luften. Den ligger i en gatukrok och bakom den till höger skymtar du ett kloster byggt i mörk sten med klarröda fönsterluckor. Det kan bara vara templet till den Lede, din gud Kwons förvridne bror. Yaemon kanske finns därinne.",
    choices: [
      "Du kan gå in på krogen och höra efter skvaller",
      "Du kan försöka smyga dig in i klostret"
    ]
  },
  409: {
    mainText: "Du tittar ned på den knäböjande munken och säger: ”Jag ska skona dig om du talar om för mig var Yaemon, Flammans Stormästare, finns någonstans. ”\nMunken har tydligen förlorat allt mod och du tror honom när han säger: \"Han gav sig av mot staden Druath Glennan för tre dagar sedan. En stor krigare färdades med honom och jag råkar veta att de var på väg för att möta en tredje, en mäktig trollkarl tror jag.\" Du låter munken gå och han ger sig av med sänkt huvud.",
    choices: [
      "Gå vidare"
    ]
  },
  410: {
    mainText: "Du för handen från vänster till höger i ett vildsint försök att slå till honom över halsen. Olyckligtvis är han för snabb för dig och han fångar din handled och ger dig skickligt en kort spark i magen. Du förlorar 2 KROPPSPOÄNG. Om du fortfarande lever sätter han fotsulan mot din mage och faller bakåt, så att du dras med. Sedan rätar han ut benet så att du ﬂyger över honom.",
    choices: [
      "Om du har färdigheten Akrobatik",
      "Om du inte har det",
    ]
  },
  411: {
    mainText: "När hans fot närmar sig ditt huvud kör du upp din högra handﬂata mot hans fotled och tvingar upp hans ben högre så att han ﬂyger över ditt huvud. När du vänder dig om gör han en kullerbytta bakåt och landar tryggt på föttema. Han vänder sig mot dig och anfaller igen.",
    choices: [
      "Du har inte tid att sparka, men du kan försöka kasta honom",
      "eller slå"
    ]
  },
  412: {
    mainText: "Kobramannen hugger blixtsnabbt. Tänderna sjunker in i din arm och pumpar ut ett dödligt gift i dina vener.",
    choices: [
      "Om du har immunitet mot gift",
      "Om du inte har det"
    ]
  },
  4120: {
    mainText: "Du är dock immun mot giftet som inte har någon effekt, men kobramannens tänder sliter ändå upp ditt skinn och du blöder. Du förlorar 2 KROPPSPOÄNG.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Tigertassens slag",
      "eller Tigertandskastet"
    ]
  },
  41201: {
    mainText: "Du har inte har utvecklat lmmunitet mot gift under din lärotid och upptäcker plötsligt att det blir svårt att andas. Du faller bakåt mot sanden och dör medan vrålet från blodet i dina öron blandas med vrålet från folkmassan. Ditt äventyr är slut.",
  },
  413: {
    mainText: "När du hoppar uppför de sista trappstegen går han bakåt och hans purpurfärgade läppar öppnas till ett brett grin när han släpper ned en liten, grön juvel på golvet. Den växer snabbt och hotar att sluka dig.",
    choices: [
      "Om du är Akrobat",
      "Om du inte är det"
    ]
  },
  414: {
    mainText: "Du stirrar upp mot natthimlen tills du kan se i mörkret som en uggla. Sedan klämmer du dig igenom den smalaste av öppningarna mellan de två husen och beger dig mot Spindelvävshallen, som egentligen är en stor, välvd bro, tio meter upp och helt sluten. Den förbinder sovsalarna på första våningen med balkongen i refektoriet där munkarna äter. Du står under fönstret mitt på valvbågen och sätter fast Kattklorna på händer och fötter. Sedan tar du fram den lilla änterhaken och repet från en av dräktens innerﬁckor. Du kastar in den ﬁltklädda kroken genom det öppna fönstret och spänner repet innan du klättrar uppför det med en hand i taget, som en apa. Du är alldeles under fönstret när du ser två händer på kroken över dig.",
    choices: [
      "Om du försöker ta dig uppför den sista metern rep innan han hinner ta loss kroken",
      "Om du försöker sätta fast Klorna i broväggen och klättra upp till sidan av fönstret"
    ]
  },
  415: {
    mainText: "Båda vakterna förblindas av blixten, men de ropar på hjälp. Du ser magiska ljus tändas runt slottet som lyktgubbar och bestämmer dig för att klättra tillbaka nedför tornet, ta dig över vallgraven igen och ta dig in i slottet genom gallret som leder till den underjordiska tunneln.",
    choices: [
      "Gå vidare"
    ]
  },
  416: {
    mainText: "Hjulets nav träffar dig och kastar dig mot väggen. Du förlorar 4 KROPPSPOÄNG. Om du fortfarande lever går du vidare och lägger märke till några munkar som bär symbolen av ett Avatarkors, reverserat och omslingrat av en orm. Du känner igen den som den Ledes symbol. De struntar i dig och följer efter vagnen som tycks vara under kontroll nu.",
    choices: [
      "Gå vidare",
    ]
  },
  417: {
    mainText: "Ditt sista steg ledde dig från stigen och rakt ut i träsket. Du börjar obevekligt sjunka och slår i gyttjan som bubblar runt dig. Du lugnar ned dig och slutar röra dig, så att du sjunker långsammare.",
    choices: [
      "Om du har någon INRE KRAFT kvar",
      "Om du inte har det"
    ]
  },
  418: {
    mainText: "När du har ritat upp en karta över slottet ur minnet gömmer du dig i ett hål i marken där du kan studera potthuset, och du väntar på att mörkret ska falla. Månen är vit och full och natten stilla. Det blåser inte ens tillräckligt för att banéren på de tre tornen ska veckla ut sig.",
    choices: [
      "Om du väljer att klättra uppför det övergivna tornet",
      "Om du väljer att lyfta på gallret utanför vallgraven och hoppa ned i tunneln nedanför",
      "Om du föredrar att vänta för att se om vädret blir sämre i morgon natt"
    ]
  },
  419: {
    mainText: "Du plaskar runt i vattnet och låtsas att du inte kan simma. När de är inom räckhåll blåser du en giftpil genom andningsröret mot en av Prästernas ansikten. Den slår in i kinden på honom och han plaskar runt i vattnet och dör i krampryckningar. Besvärjelsen som gjorde dig så slö är bruten. Du simmar över till andra stranden och försvinner in i sävsnåren. De kan inte hålla din snabbfotade hastighet och du tar dig tillbaka över floden och upp i bergsområdet som omger Mortavalon.\nDu kommer tillbaka upp på vägen, rundar en krök och får syn på en grotta, täckt av ett klipputsprång, i bergssidan ovanför dig.",
    choices: [
      "Om du går vidare rakt mot Mortavalon",
      "Om du går in i grottan"
    ]
  },
  420: {
    mainText: "Yaemon faller dödligt sårad ned på det Stora Kärntornets stentak. Vinden ylar och det hörs ett blixtnedslag. Hans ansikte lyses plötsligt upp av en blixt och han ler underligt nog, lugn inför döden. Han höjer rösten över det piskande regnet: \"Du är verkligen mäktig, Skuggkrigare. Jag har kämpat mot många väldiga krigare. Din far från Människoländerna var en av dem, men jag besegrade honom, som de andra.\" Du ska just fråga honom vem din far var när han grips av en hostattack som tar hans sista andetag. Yaemon är död och du har lyckats med ditt uppdrag. Din berömmelse som Hämnaren, kommer att sprida sig över Orbs länder på fruktans vingar, för du har dödat tre så mäktiga tyranner, att de kunde hålla gudarna som gisslan. \nYaemons röda jacka, som är dränkt i regn och svett, har fallit upp så att du ser ett vaxat pergament, Kettsuinrullarna. Du ska just öppna det när du överväldigas av en underbar känsla av frid och din gud Kwons röst ljuder omkring dig. \"Gryningens Stormästare gav dig ett passande namn, Hämnare, för nu är det Yaemon och inte jag som ska försmäkta i det kokande blodets sjö i lnferno. Om du hade misslyckats hade Domens legion och Röda Syrsans munkar svept över Människoländerna med hjälp av Prästerna som dyrkar Nemesis och hela mänskligheten skulle ha levt i fruktan under de onda härskare som du har dödat.\" Dina sår är helade som genom ett under och en ny styrka fyller din kropp när guden ger dig INRE KRAFT. Du känner dig bländad och överväldigad av vad som händer och känslan av Kwons godhet fyller din själ med ljus.\n \"Det är ont om tid nu, Hämnare, för de onda gudarna rör sig än en gång mot oss. Du måste återlämna Kettsuinrullarna till deras rätta plats i Klipptemplet på de Stilla Drömmarnas Ö, men din färd kommer att kantas av faror. Jag ska hjälpa dig: välj en färdighet från Tigerns väg som du ännu inte behärskar, och jag ska lära dig den. Du kommer att behärska den som om du hade tränat den sedan barnsben. \" Guden fortsätter, \"Jag ska hjälpa dig, men bara en gång, när du är i stor fara. Om du verkligen behöver mig, säg bara \"Kwon, förlös mig,\" så ska jag bli din räddning. Jag kommer att vaka över dig, Hämnare, för jag hoppas att du en dag ska sälla dig till mig i Gudarnas trädgård.\"\nNär Kwons närvaro försvinner kan du inte låta bli att ropa, \"Vem var min verkliga far?\"\nDet är som om det var vinden själv som talade till dig när Kwons röst bleknar bort, \"Tiden är inte kommen än, Hämnare. \"\nDu darrar till och lägger för första gången märke till hur kallt regnet är. Kwon har försvunnit och du är ensam igen. Du hör med förskräckelse männens rop och ljudet av bepansrade fötter i Kärntornets tappa.",
  },
}