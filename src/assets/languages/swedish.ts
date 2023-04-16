import { ILanguageGeneral, ILanguagePages } from "./languageInterfaces"

export const languageGeneral: ILanguageGeneral = {
  misc: {
    playerName: "Hämnaren",
    damage: "Skada",
    defense: "Försvar",
  },
  opponents: {
    none: "",
    gorobei: "Gorobei",
    humanEater: "Människoätaren",
    piratecaptain: "Piratkaptenen",
    soldiers: "Soldater",
    magician: "Magikern",
    monk: "Munken",
    goblin: "Vätten",
    cobraman: "Kobramannen",
    snowGiant: "Snöjätten",
    giant: "Den tvåhövdade jätten",
    guard: "Vakten",
    olvar: "Olvar Barbaren",
    priests: "Präster",
    yaemon: "Yaemon"
  },
  help: {
    block: "Chansen att lyckas blockera slaget är ungefär 60% och innebär att du inte tar någon skada. Nästa attack du gör kommer få en slagmodifikation på minus 2 vilket gör det något svårare att träffa.",
    innerStrength: "Om din attack träffar kommer skadan dubbleras. Du kan dock bara använda din inre kraft ett begränsat antal gånger. Observera att kraften är förbrukad även om du missar. Använd den med förnuft."
  },
  abilities: {
    shuriken: "Shurikenjutsu",
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
    opalring: "opalring",
    shuriken: "kaststjärnor",
    gold: "guldstycken",
    glove: "magisk slaghandske",
    magicShuriken: "förtrollad kaststjärna",
    fireLizardEssence: "eldödle-essens",
    herbs: "örter (8 kroppspoäng)",
    amulet: "Amulett"
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
    innerStrength: "inre kraft",
    hp: "kroppspoäng",
  },
  temporary: {
    attack: "attack",
    damage: "damage"
  }
}

export const languagePages: ILanguagePages = {
  1: {
    mainText: "Solens första strålar hälsar dig när du bönar dina förberedelser inför prövningens tid. Idag blir du den yngste någonsin som aspirerar till titeln De Fyra Vindarnas Stormästare. När din fosterfar Naijishi mördades av Yaemon, tog andre Stormästaren hans plats. Nu, många årstider senare, har en mästare återigen dött och hans plats står ledig, för det måste alltid vara fem som leder orden. Du har erbjudits att göra anspråk på den på grund av din fulländning i Tigerns väg.\n\nVid den avtalade tidpunkten går du ensam över sanden till Klipptemplet. Det är en stor pelarstödd sal, inbyggd i sidan av en väldig röd granitklippa vilken fördes till vila på De Stilla Drömmarnas 0 av isflödena under snöns era, de som karvade ut Stora dalsänkan i den fjärran norden. När du närmar dig templet ser du att munkarna och ett stort antal bybor har samlats för att titta på striden mellan dig och den andre utmanaren, Gorobei. \n\nGorobei är liksom du en Invigd av den Inre cirkeln, en hängiven kwondyrkare och duglig krigare. Han är äldre, tyngre och starkare än du och har misslyckats vid en tidigare utmaning, men han är en skicklig brottare. Du går in i Templet och bugar för Gryningens Stormästare, en man som ser yngre ut än sina femtio år, slank och sträng med genomborrande, mörka ögon. Bredvid dig bugar också Gorobei, hans ansikte är en mask utan känslor. Han är bara klädd i ett ländkläde och de kraftiga musklerna glänser av en olja som kommer att göra det svårt att få grepp om honom. Du måste besegra honom i en strid utan vapen för att få genomgå det andliga prov som ska visa om du är redo att bli Stormästare. Gorobei vänder sig mot dig och bugar och du återgäldar hans artighet. Gryningens Stormästare påminner er om att det inte är en strid till döden och att ni inte får använda Inre Kraft. Han ger tecken på att ni kan börja. Gorobei rör sig försiktigt framåt över det polerade granitgolvet. Hans stora händer är redo att gripa tag i dig. ",
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
    mainText: "Barbaren stelnar till när du lägger pilen på din hoprullade tunga och spottar ut den i en enda flytande rörelse. Pilen genomborrar hans kind, men han har en järnfysik och trots att en grimas av smärta förvrider hans ansiktsdrag, lyckas hans kropp övervinna det kraftiga giftet. Du kan anteckna att han har förlorat 4 KROPPSPOANG. Medan du står stilla av förvåning hugger han mot dig och hans svärd skär genom luften mot din axel. Du har 8 i Försvar mot hugget när du höjer din vänstra underarm för att svepa svärdet åt sidan. Om han träffar dig gör svärdet 1T6+1 i skada.",
    choices: [
      "Om du överlever kan du använda Kobraslaget",
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
      "Om du klättrar upp på Kämtornets tak",
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
    mainText: "När hans fot närmar sig ditt huvud försöker du tvinga upp din högra handﬂata mot hans fotled för att tvinga hans ben över ditt huvud, men du har missbedömt det och din arm klyver luften förbi hans ben. Hans fot slår in i ditt ansikte. Hans INRE KRAFT är förlamande stark och det sprutar blod från din sönderslagna näsa och dina spruckna läppar. Du förlorar 10 KROPPSPOANG. Om du fortfarande lever kastas du bakåt av kraften i sparken. Du använder all din viljestyrka för att förtränga smärtan och ta dig upp på fötter, när Yaemon kommer rusande för att angripa igen.",
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
      "Om du försöker greppa ormens hals innan den kan hugg"
    ]
  },
  30: {
    mainText: "Ett väldigt Troll med vårtig, grön och slemmig hud, kommer rusande ut ur dimman och stannar upp framför dig. Du sparkar och slår för allt vad du är värd, men så snart du åstadkommer ett sår läks det igen på magisk väg. Det uppslitna köttet kryper över benen för att förenas igen och lämnar bara efter sig purpurfärgade ärr. Trollet klöser till dig och du förlorar 4 KROPPSPOANG. Om du fortfarande lever, ser det som om du kommer att förlora striden.",
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
    mainText: "När du försöker springa mot prästerna tar deras besvärjelse effekt och dina ben och armar blir som till bly. Din kropp darrar när du med en stor viljeansträngning tvingar dig ytterligare några steg framåt, men de har inga problem att slå ned dig och binda dig ordentligt. Om du haren Ring tar de den ifrån dig. Stryk den från Speltabellen.",
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
      "eller mot väster genom Trollkärret till staden lonalbion för att ta ett skepp över Stjärnans hav"
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
    mainText: "Du höjer foten som för att sparka Gorobei i bröstet, men snurrar 1 stället in bredvid honom och greppar hans arm för att kasta honom över höften. Du förstår snart att du har begått ett misstag, när ditt grepp glider över oljan som täcker honom och han använder sin skicklighet som brottare för att gripa tag i dig och låsa din arm bakom ryggen, samtidigt som han griper dig om strupen. Han är fruktansvärt stark. Du försöker göra en bakåtvolt över honom och bryta greppet men han är beredd på det och trycker ned dig mot golvet innan han ger dig ett kraftigt slag.",
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
      ""
    ]
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
    mainText: "Grottan är kal. Togawa sitter med korslagda ben på golvet och du följer hans exempel. Han ger dig komplimanger för din färdighet i Tigerns väg, men eftersom du inser att han är skickligare än du, ger du honom komplimanger för sparken som dödade Klippmonstret. Han erbjuder sig att visa den för dig. Han kallar den för Kwons slaga, och den är till och med kraftigare än de sparkar som du använder.\nAnteckna den på din Speltabell som en ny spark du har lärt dig. Du kan lägga +1 till din sparkmodifikation för råden som Togawa ger. Du talar om för honom att du är från De Stilla Drömmarnas Ö, berättar om ditt uppdrag och ber honom om hjälp Han förvånar dig med att fråga, \"Vilket är ditt hem?\"\nOm du svarar:",
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
    mainText: "",
    choices: [
      ""
    ]
  },
  69: {
    mainText: "",
    choices: [
      ""
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
    mainText: "",
    choices: [
      ""
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
    mainText: "",
    choices: [
      ""
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
    mainText: "",
    choices: [
      ""
    ]
  },
  79: {
    mainText: "",
    choices: [
      ""
    ]
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
    mainText: "",
    choices: [
      ""
    ]
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
    mainText: "",
    choices: [
      ""
    ]
  },
  85: {
    mainText: "",
    choices: [
      ""
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
      "eller Tigersprånget"
    ],
    stillAlive: "Han anfaller dig med morgonstjärnan. Ditt Försvar mot den pliggade kulan och kedjan är 7",
    directWin: "Du har lyckats kasta honom och han slungas över relingen på akterkastellet ned i havet."
  },
  88: {
    mainText: "",
    choices: [
      ""
    ]
  },
  89: {
    mainText: "",
    choices: [
      ""
    ]
  },
  90: {
    mainText: "",
    choices: [
      ""
    ]
  },
  91: {
    mainText: "",
    choices: [
      ""
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
    mainText: "",
    choices: [
      ""
    ]
  },
  97: {
    mainText: "En av piraterna har fått syn på dig och han kryper längs Havsgravens däck för att hugga av dig händerna med sin kroksabel. Ett svagt klingande från hans många öronringar varnar dig och du hoppar smidigt över relingen upp på däck och fångar hans arm med din vänsterhand när han svingar kroksabeln mot ditt huvud. Sedan använder du Virvelkastet för att kasta honom över relingen. Du vänder dig om och springer uppför trappan till akterkastellet där Sjörövarkaptenen står och leder sina män. Du hoppar uppför de sista stegen för att kunna dyka upp från ingenstans framför honom. Han kliver förvånad bakåt, men återfår snart sin fattning. Han är en högrest man med gråsprängt skägg och guldarmringar som får venerna på hans kraftiga armar att stå ut som strängar. Han svingar sin morgonstjärna mot dig när du går till anfall.",
    choices: [
      "Du kan använda Tigersprånget",
      "eller Kobraslaget",
      "eller Tigertanden"
    ]
  },
  98: {
    mainText: "När du vadar genom träsket vänder sig Shaggothen med ett vedervärdigt slurpande ljud och Svartalven slår sig fri från de sugande tentaklerna. Hon ler av tacksamhet så att hennes stora mandelögon blir till springor. Ni vänder er för att möta Shaggothen tillsammans, men du slungas plötsligt in i vecken på dess ruttnande kött av ett slag från alvens svärd. Hon skrattar rått och vadar ut till båten medan du förgäves försöker ta dig loss från den slemmiga bestens grepp. Den sjunker långsamt ned i träsket och drar dig med sig. Din näsa och dina lungor fylls med gyttja medan du hjälplöst kämpar. När träsket torkar upp kommer inte ens dina ben att finnas kvar. "
  },
  99: {
    mainText: "",
    choices: [
      ""
    ]
  },
  100: {
    mainText: "När du knäfaller framför det stora altaret bland de många valven i katedralen med domen, godtar Ödesgudinnan dig som hennes tjänare. På samma gång tar din egen gud, Kwon, avstånd från dig och din INRE KRAFT tas ifrån dig så att du försvagas. Det bekymrar dig inte, för nu vet du att det var ödesbestämt att det skulle ske, och det är meningslöst att ångra det. Ditt uppdrag att döda Yaemon ter sig oviktigt och du tillbringar stilla dagar i Fiendil som präst i katedralen, tills till och med stadens lugna folk en dag tycks upprörda. Ett stort mörker, en lång natt utan dag, följs av nyheter om att den fruktade Domsvärdslegionen och Röda Syrsans munkar har intagit Föraningens torn och är på marsch mot Fiendil. Det är för sent. Kwon är fjättrad i Inferno men ditt misslyckande bekymrar dig inte."
  },
  105: {
    mainText: "Din Shuriken ﬁnner sitt mål. Vakten slänger upp handen mot strupen och skriker innan han faller ihop på golvet, död. Du inser att larmet kan ha gått, så du lämnar kvar kaststjärnan och springer ut ur barackerna mot stadsporten. Stryk en Shuriken från Speltabellen.",
    choices: [
      "Gå vidare"
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
  113: {
    mainText: "Du hasar tillbaka nedför de steniga sluttningarna till Lyckopassets botten.",
    choices: [
      "Du kan vända tillbaka söderut och ta dig utefter bergen mot staden Fiendil",
      "Eller fortsätta genom Lyckopasset"
    ]
  },
  114: {
    mainText: "Han ser den dödliga avsikten i dina ögon ett ögonblick innan ditt slag träffar, men accepterar stoiskt döden. Hans nacke är bruten, men han kan fortfarande tala och har uppenbarligen godtagit sitt öde.\n “Det var förutbestämt att du skulle döda mig så, Hämnare.” Det verkar ändå som om Ödesgudinnan inte är nöjd. Eremiten vördade henne och hon vänder ryggen åt dig för det okänsliga dådet som hon visste att du skulle utföra. Du känner nästan hur din tur sviker dig, dra ifrån 2 från din Ödesmodifikation. Du kan inte låta bli att förbanna alltings meningslöshet när du går vidare in i staden. Folk ler när du går förbi, något som ingen har gjort i de andra städerna. De tycks ﬂyta förbi dig med det obekymrade lugnet hos dem som har godtagit att deras öde redan är bestämt.",
    choices: [
      "Gå vidare"
    ]
  },
  115: {
    mainText: "Sedan natten har fallit sliter du i dina bojor, men din enda belöning är en kyss från piskan. Du somnar utmattad före gryningen och när du vaknar har du järnbojor kring handlederna och ett järnband runt midjan som är fastkedjat vid åran. De är tunga och omöjliga att bryta upp. De kommer inte att tas av förrän din kropp är slutkörd och livlös efter flera år vid åran. Du har misslyckats."
  },
  116: {
    mainText: "Du stannar tyst upp bakom vakten, redo att slå till. Med förblindande snabbhet lägger du strypsnaran runt hans hals. Vakten dör utan ett ljud när ståltråden gör ett prydligt snitt genom hans luftstrupe och du smiter ut från Barackerna och glider som en skugga genom natten till stadsporten. Vid porten avleder du vakternas uppmärksamhet genom att kasta en sten som krossar en glasruta i närheten av en tjuv, som trodde att ingen hade sett honom. Sedan smiter du ut ur staden i det första gryningsljuset, när vakterna springer för att ta fast honom.",
    choices: [
      "Gå vidare"
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
  128: {
    mainText: "Stormästaren skakar på huvudet. ”Du har varken svarat sant eller vist. Du kan inte dölja din vilja att hämnas Naijishi, som älskade dig och lärde dig att älska Herren Kwon, från oss som har känt dig nästan hela ditt korta liv. Det är inte fel av dig att vilja hämnas Naijishi, men du måste vänta tålmodigt på att din tid ska komma och aldrig glömma, att tjäna Kwon är att hjälpa hela mänskligheten. Vad gäller tortyren, är det bara genom att misslyckas med ett uppdrag som en sann Skuggkrigare kan fångas och det ﬁnns alltid tid att bita av sig tungan och blöda till döds för att undvika risken att förråda hemligheter. Du behöver bara frukta att misslyckas med ett uppdrag. Du har misslyckats med det andliga provet och är ännu inte redo att bli en De Fyra Vindarnas Stormästare. Gå tillbaka till Tempelsalen och be Gorobei komma in till oss.” \nDu återvänder modfälld till huvudtemplet och det hörs ett svagt jämmer från byborna när du ber Gorobei att gå in i påklädningskammaren. Han lägger armen om dina axlar och säger, ”Nästa gång,” innan han går in bakom silkesförhänget. En timme senare kommer han tillbaka och du applåderar med de andra när han utnämns till Stormästare. ",
    choices: [
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
  136: {
    mainText: "Du försöker rulla undan, men armborstpilen slår in i sidan på dig och du ligger och kravlar på marken. Du förlorar 4 KROPPSPOÄNG. Vaktema vid stadsporten rusar fram mot dig när du hoppar upp på fötter.",
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
  139: {
    mainText: "Stormästaren ler och skakar på huvudet. ”Du har svarat klokt men inte sanningsenligt. Du kan inte dölja din önskan att hämnas Naijishi som älskade dig och lärde dig att älska Herren Kwon, från oss som har känt dig nästan hela ditt korta liv. Det är inte fel av dig att vilja hämnas på Yaemon, men vänta tålmodigt på att din tid ska komma och glöm aldrig, att tjäna Kwon är att hjälpa hela mänskligheten. Men du har rätt när du säger att en Skuggkrigare bara behöver frukta att misslyckas, för att uthärda tortyr måste man först uthärda misslyckandet. Det finns alltid tid att bita av sig tungan och blöda till döds, hellre än att riskera att förråda hemligheter under tortyr. Jag ska inte säga att du har misslyckats, du är snarare som en vässad klinga som vill ut ur skidan. Du behöver bara årens visdom för att slipas till perfektion. Jag ska inte hålla ett sådant mäktigt vapen kvar i skidan - du har klarat provet.” \nDe leder dig tillbaka till Tempelsalen, där munkarna och byborna har väntat för att se om du klarade provet. Böner till Kwon utsägs som en del av ceremonin när du utnämns till De Fyra Vindarnas Stor mästare. Gorobei applåderar med de andra. Han är fortfarande en lnvigd av lnre cirkeln, men hans tid kommer, för han är en skicklig krigare och en god munk. Om du skulle dö tar han antagligen din plats.",
    choices: [
      "Gå vidare"
    ]
  },
  144: {
    mainText: "Du väntar, till synes nedslagen, på att vakterna ska ta dig till fånga, men gör sedan en hög volt i luften över dem och springer genom porten, samtidigt som solens första strålar visar sig. De förbluffade soldaterna springer efter dig men du seglar nedför vägen snabbt som vinden och de ger snart upp den fruktlösa jakten.",
    choices: [
      "Gå vidare"
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
  151: {
    mainText: "Stormästaren ler och skakar på huvudet. ”Du har svarat sanningsenligt. Det är inte fel av dig att vilja hämnas Naijishi, som älskade dig och lärde dig att älska Herren Kwon, men du måste vänta tålmodigt på att din tid ska komma och aldrig glömma, att tjäna Kwon är att hjälpa hela mänskligheten. Men vad gäller tortyren, är det bara genom att misslyckas med ett uppdrag som en sann Skuggkrigare kan bli fångad och det finns alltid üd att bita av sig tungan och blöda till döds, hellre än att riskera att avslöja hemligheter. Du behöver bara frukta att misslyckas med ett uppdrag. Jag ska inte säga att du har misslyckats, för ingen har någonsin bemästrat Tigerns väg som du, och vi ska inte hålla kvar vårt skarpaste vapen i skidan för evigt. Du har lyckats med provet.” \nDe för dig tillbaka till Tempelsalen där munkarna och byboma har väntat för att se om du skulle klara provet. Böner till Kwon utgör en del av ceremonin när du utnämns till De Fyra Vindarnas Stormästare. Gorobei applåderar med de andra, för han är fortfarande en lnvigd av Inre cirkeln, men hans tid kommer, för han är en skicklig krigare och en god munk. Skulle du dö, efterträder han troligen dig. ",
    choices: [
      "Gå vidare"
    ]
  },
  153: {
    mainText: "Det tar bara ett ögonblick att dyrka upp låset med en liten fil. Det klickar till tyst och de väloljade gångjärnen ger inget ljud ifrån sig när du öppnar hyttdörren. Därinne sover Sjörövarkaptenen. Han har övergett sin egen hytt för bekvämligheten på Aquamarin. Han är full och snarkar högt. Du tar tid på dig att smeta gift på låsdyrken innan du stöter den i hans halspulsåder. Du vänder dig om och ropar signalen för besättningen att bryta sig ut samtidigt som Sjörövarkaptenen ligger i dödsryckningar. Du leder anfallet och de romdränkta piraterna tas med överraskning. Många hoppar i havet utan att tänka på att deras skepp ligger en kilometer bort i mörkret. Du är glad att se Glaivas, som har befriats av en besättningsman, göra slut på en ful pirat som visade sig besvärlig. De få som fortfarande är vid liv ger sig till honom och han ger order om att sätta dem vid årorna så att de får smaka sin egen medicin. Nästa morgon hissar ni seglen igen och seglar med god fart.",
    choices: [
      "Gå vidare"
    ]
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
  164: {
    mainText: "Den snurrande Shuriken träffar Sjörövarkaptenen i strupen och ropet han hade på sina läppar dränks i ett blodigt gurglande när han faller livlös ned på plankoma. Du ger signalen och besättningen rusar upp från roddardäck, viftande med kedjor och kroksablar de har tagit från vakterna. Du leder anfallet och ni överraskar de romrusiga piraterna. Många hoppar i havet utan att minnas att deras skepp ligger en kilometer bort i mörkret. Du är glad att se Glaivas, befriad av en i besättningen, göra slut på en ful pirat som visade sig besvärlig. De få som fortfarande är vid liv ger sig till honom och han ger order om att sätta dem vid årorna så att de får smaka sin egen medicin. l gryningen hissar ni seglen igen och sätter god fart.",
    choices: [
      "Gå vidare"
    ]
  },
  169: {
    mainText: "Du strosar genom portalen och hälsar på arbetarna. När du går genom de tysta gatorna i den döda staden lättar ditt hjärta vid åsynen av träd och en rosenträdgård. Du går in i lövsalen och hittar ett litet kloster tillägnat Kwon. Du är lycklig över att ha hittat en tillﬂyktsort där du kan meditera och söka hjälp, så du går in i templet och knäfaller i bön. En munk knäböjer bredvid dig i det kala templet och mässar en psalm till Kwon Försonaren.",
    choices: [
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
    mainText: "Gryningens Stormästare ler och säger, ”Du klarar provet, för du har svarat både vist och rätt. Det är inte fel av dig att vilja hämnas Naijishi, som älskade dig och lärde dig att älska Herren Kwon, men du måste vänta tålmodigt på att din tid ska komma och glöm aldrig, att tjäna Kwon är att hjälpa hela mänskligheten. Det är bara genom att misslyckas med ett uppdrag som en sann Skuggkrigare kan tas till fånga och det finns alltid tid att bita av sig tungan och förblöda, hellre än att riskera att avslöja hemligheter under tortyr. ” Han fortsätter, ”Vi har aldrig sett någon så lovande eller någon som bemästrar Tigerns väg så väl. Jag ska recitera Skuggkrigarnas Stormästares litania - minns den, för en dag kan den komma till användning. \n\nJAG ÄR SKUGGKRIGAREN \nMin Far och Mor är Himlen och Jorden \nMitt Hem är min Kropp \nMin Kraft är Trofasthet \nMin Magi är Träning \nMitt Liv och min Död är Andning \nMin Kropp är Kontroll \nMina Ögon är Solen och Månen \nMina Öron är Känslighet \nMina Lagar är Självförsvar \nMin Styrka är Anpassning \nMin Ambition är att Tillvarata varje Möjlighet \nMin Vän är Sinnet \nMin Fiende är Vårdslöshet \nMitt Skydd är Rätt Handling \nMitt Vapen är Allting \nMin Strategi är En fot framför Den andra \nMin Tilltro är till Kwon \nMIN VÄG ÄR TIGERNS VÄG” \n\nHans ord etsas in i ditt minne. Anteckna den här texten så att du kan referera till Litanian igen om du skulle behöva det. \nSedan tar han en Opalring från sitt finger och ger den till dig. ”Du kan få användning för den här, ” säger han och sätter den på ditt ﬁnger. När Stormästarens ekande ord har dött bort för de tillbaka dig till Tempelsalen, där munkarna och byborna har väntat för att se om du skulle klara provet. Ni ber böner till Kwon under ceremonin när du utnämns till De Fyra Vindamas Stormästare. Gorobei applåderar med de andra. Han är fortfarande en lnvigd av Inre cirkeln, men hans tid kommer, för han är en stor krigare och en god munk. Om du skulle dö tar antagligen han din plats. ",
    choices: [
      "Gå vidare"
    ]
  },
  183: {
    mainText: "Prästen svarar, ”Även om vi inte var upptagna med att hela skulle vi inte hjälpa dig, för de som följer ett klosters strikta lagar, som du måste göra, motverkar friheten och förhindrar ett paradis på Orb. ” Du inser av övertygelsen i hans ögon att en teologisk diskussion inte skulle rubba honom.",
    choices: [
      "Du kan berätta för honom om ditt uppdrag och be om hans hjälp igen.",
      "Du kan lämna templet och Helgedomen och gå in genom Obsidian- porten till Domedag"
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
  186: {
    mainText: "En ung soldat hånler och kallar dig en pestsmittad kloakråtta. Du sitter i ett hörn och ignorerar honom. Din skarpa hörsel gör att du kan lyssna på deras samtal i stället för på alla de andra som talar i värdshuset som är fyllt med folk. Det verkar som om de väntar på att ledaren för Domsvärdslegionen, Honoric, ska återvända innan de marscherar mot Föraningens tom. Han tycks ha lämnat staden tillsammans med Yaemon, och färdats norrut. En av de berusade soldaterna vid bordet bredvid börjar förolämpa dig och sedan säger han åt dig att om du vill leva borde du lämna värdshuset nu.",
    choices: [
      "Om du stannar vid ditt bord",
      "Om du hyr ett rum på övervåningen för natten"
    ]
  },
  191: {
    mainText: "Efter ceremonin går ni alla ut ur templet till de gyllene sanddynerna, där det serveras en enkel festmåltid på ris och frukt som delas av munkarna och byborna. Du äter lite och ger dig av tidigt, eftersom du vill meditera innan du somnar. Avslappnad av meditationen som befriar din själ från den värkande kroppens bojor, sluter du dina ögon så snart du har lagt dig på den halmfyllda madrassen som är din bädd. Du glider in i en djup men orolig sömn. Du ser ett skepp med smäckra åror sätta segel mot Mångfaldens land. En högrest man med bestämt utseende står på akterkastellet med benen brett isär mot gungningen. Han bär en tjock, mörkgrön kappa mot vädret och solen glänser så starkt i svärdsbältets spänne att du tror att det inte är en dröm, utan en vision. En sjöman kallar honom vid namn, ”Glaivas”, och han vänder sig om och tittar på dig, men sedan bleknar visionen bort och den strålande blå skyn byts ut mot ett stort och mörkt slott som avtecknar sig mot mörka, purpurfärgade moln. Tre torn på ett väldigt, svart Kärntorn tycks genomborra molnen. Du går mot det, fast besluten att genomföra ett svårt och viktigt uppdrag.\nNär du vaknar minns du drömmarna som om de var bilder målade på väggen i din munkcell, men sömnen har i alla fall gett dig tillbaka alla KROPPSPOÄNG som du förlorade i striden mot Gorobei. Du är på väg mot Templet när du hör oväsen från stranden och två fiskare springer upp till dig med nyheten att ett skepp har ankrat upp en bit ut. En man ror in till stranden och stiger ur båten när Stormästarna kommer ned för att hälsa på honom. Han presenterar sig som Glaivas, bugar respektfullt och ber att få tala med Stormästarnas Stormästare.\n -”Du kan tala till oss alla,” säger Gryningens Stormästare, ”vi har inga hemligheter på de Stilla Drömmarnas Ö. ” \n -”Inte sedan ni förlorade Kettsuinrullarna,” svarar Glaivas bistert. \n-”Vad vet du om Kettsuinrullarna?” frågar Stormästaren. Munkarna väntar spänt när Glaivas noga ser sig omkring innan han svarar. \n-”Kettsuinrullarna innehåller hemligheten om Maktens ord som kan binda själve Kwon i Inferno om det uttalas vid Förändringens pelare på de stora snövidderna i norr. Yaemon, Flammans Stormästare, av Röda Syrsans orden, stal den av er för många år sedan och har uttytt Ordet. Vi är i månaden Allmoderns prakt och under tre dagar blir månen röd vid Planetemas stora förening - någonting som bara händer vart femhundrade år. Om ordet uttalas vid Förändringens pelare under den här tiden, fjättras er Gud, Kwon, i den bottenlösa avgrunden, så att den Ledes munkar är fria att sprida sitt herravälde över människornas länder.” \nNär han nämner Yaemons namn blir det ett tumult, men Glaivas fortsätter och en onaturlig tystnad sänker sig. \n-”Yaemon är redan redo att ge sig av från staden Domedag på sin långa resa till Isvidderna. Även om jag är en jägare, van vid att patrullera vildmarken vid Klyftans kant, besegras jag lätt av någon som honom. Finns det någon här bland er som är villig att försöka stoppa honom?” \nNär Glaivas talar känner du en brännande vilja att hämnas på Yaemon flamma upp i ditt bröst. Din dröm om Glaivas, för det var honom du såg ombord på skeppet som nu ligger för ankar vid stranden, har övertygat dig om att det är du som är förutbestämd att utföra det här uppdraget. Du stiger fram och säger, ”Jag ska stoppa honom.” \n-”Du är ung, ” säger Glaivas, ”kan du lyckas när jag, en av jägarnas främste, skulle misslyckas?” \n-”Jag är Skuggkrigare, ” svarar du. \nGlaivas hajar till. Gryningens Stormästare suckar och säger, ”Ja, jag döper dig till Hämnare, för om någon kan lyckas, och det måste du för mänsklighetens skull, är det du.” Sedan vänder han sig mot Templet och faller i bön. \nStaden Domedag ligger på Människoländernas västkust och Glaivas ger dig en karta som visar de många städer och underliga länder som sträcker sig norrut till de snöiga vidderna. Du tillbringar resten av dagen med att göra dig redo, fästa järnärmarna vid din mörka dräkt och samla ihop Skuggkrigarens redskap innan du tillbringar några timmar i stilla meditation. Du går ombord på Glaivas skepp i tid för att segla ut med tidvattnet. Du måste hitta Yaemon och döda honom innan han når Förändringens pelare, annars är allt förlorat.",
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
  196: {
    mainText: "Du går uppför trappan till Templet. Träbänkarna tycks vara slumpmässigt utställda därinne, men taket är genomborrat av rosettfönster och det är ljust och vackert där inne. Kristaller reﬂekterar solens strålar mot en målning av ett förstört slott med soldater och bönder som dansar i gläntorna framför det. Den dödade prästen eller den unge krigaren syns inte till någonstans. En av Prästerna går fram mot dig och du frågar honom om han kan ge dig lite information. Han frågar om du tillber Béatan.\nVilken gud säger du att du tillber?",
    choices: [
      "Kwon",
      "Allmodern",
      "eller Béatan",
      "Om du hellre går ut ur Templet och följer efter den gamle mannen som sade sig vara ett Orakel"
    ]
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
  206: {
    mainText: "Barägaren har blandat Ras Ande i mjödet och det var starkare än du insåg. Alkoholen går snabbt ut i blodet och du reser dig för att gå, men svimmar. Du vaknar på morgonen, liggande i rännstenen, fullständigt nedlortad. Några av dina guldmynt har försvunnit, men du hade gömt fem av dem på dig och dem har du kvar. Om du hade en Opalring har den också blivit stulen. Stryk den från din Speltabell. Du bestämmer dig för att bege dig norrut, utifall att Yaemon skulle nå Förändringens pelare före dig och lämnar staden på vägen mot Mortavalon.",
    choices: [
      "Gå vidare"
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
  214: {
    mainText: "l din träning i att ta små doser gift ingår också stora mängder alkohol och du kan dricka nästan vem som helst under bordet. Den unge Kaptenen börjar sluddra och drickandet går långsammare. Du berättar för dem att du är en munk som dyrkar den Lede och de behandlar dig som en av de sina. Den unge Kaptenen frågar dig om resan som Honoric, ledaren för Domsvärdslegionen, gör tillsammans med Yaemon. Du säger åt dem att Yaemon färdas norrut i ett viktigt ärende. De skrattar åt det och börjar skämta med dig om att Honorics ärende är viktigare. Du förstår att han också känner till ett ord som kan binda en gud i Inferno och att de färdas mot Snöviddema. Efter ett tag låtsas du ha fått för mycket mjöd och hyr ett rum för natten på värdshuset. Det kostar 2 guldstycken. Du sover lätt med sinnena på spänn, men ingenting händer. Du vaknar på morgonen, lätt uppfriskad. Du får tillbaka 1 KROPPSPOÄNG om du vill. Du ger dig av och går ut ur staden på vägen mot Mortavalon.",
    choices: [
      "Gå vidare",
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
  225: {
    mainText: "Du ger barägaren två guldstycken för rummet och går upp på övervåningen. Du sover lätt med sinnena på helspänn och är redo när tre fulla soldater rusar in. Det är bara ett ögonblicks verk att slå två av dem medvetslösa med skickliga sparkar och den tredje stirrar förvånat på och springer sedan ut ur rummet. Du sover lite under resten av natten och får tillbaka 1 KROPPSPOÄNG, om du hade förlorat någon. På morgonen lämnar du staden på vägen mot Mortavalon.",
    choices: [
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
  231: {
    mainText: "När lejonen kastar sig fram inser du att till och med du är en enkel match för dem, naturens perfekta mördare. Folkmassan blir tyst.",
    choices: [
      "Är du en Akrobat? Om du är det",
      "Om du inte är det"
    ]
  },
  232: {
    mainText: "Skeppet som Glaivas har hyrt, ”Aquamarin”, har hundra åror och två master. Vindarna är vänliga mot er när ni ilar över den azurblå ytan. Havet är så lugnt, att efter två veckor utan ett stänk av saltvatten på läpparna glömmer du att det alls består av vatten. Roddarna ror i tio timmar om dagen, men de är fria män och inte kedjade vid årorna Två bär märken av piraternas piska, de har varit fångade av sjörövare, men hör till de lyckliga få som har överlevt och fått se himlen igen. Alla har roddarens tunga överkropp, några som gick till sjöss för att tjäna sitt levebröd i unga år är förkrympta och missformade, formade av livet vid åran till groteska karikatyrer av bergsdvärgar. \nMångfaldens land glider förbi söder om er och ni är inom synhåll från Magiska Gudinnans O när utkiken ropar en varning. Styrmannen sätter en ny kurs och trumslagen blir snabbare när roddarna fördubblar sina ansträngningar. Skeppet som närmar sig är långt och lågt, målat i grönt och rött och med en röd vimpel i masttoppen. Glaivas, som står bredvid dig vid relingen, säger, ”Det där skeppet är från Piraternas hamn, vi kommer aldrig undan det.” Så drar han sitt svärd. Roddarna tar ut sig till det yttersta, men trots att de svettas av ansträngningen kan »de inte ro snabbare än slavarna på Piraternas skepp, sporrade till ett vansinnigt tempo av slavdrivamas knutpiskor. Till sist ger Kaptenen order om ”förbered avhysning av äntergastar” och du gör dig redo för strid. Piratskeppet har en spetsig ramm, men de försöker uppenbarligen ta Aquamarin hel, för de hakar sig fast och lägger sig långsides. Piraterna har kroksablar och kedjenät och leds i anfallet av ett tre meter långt monster vars kropp är täckt med knutar av felväxta ben, en Människoätare med en lång spikklubba. Aquamarins besättning verkar inte vara någon match för de stridsvana sjörövarna.",
    choices: [
      "Du kan hoppa upp i riggen och kasta en Shuriken på Människoätaren",
      "Du kan anfalla Människoätaren när den kommer ombord och samtidigt plattar till en del av Aquamarins reling"
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
  237: {
    mainText: "Du försöker kasta en av angriparna. Han börjar nyktra till, men är fortfarande ganska berusad. Han har 5 i Försvar mot ditt Virvelkast.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Järnnävens slag"
    ],
    stillAlive: "Om du inte lyckas kasta honom angrips du av de av dina motståndare som är i livet. Du har 7 i försvar mot dem om tre lever, 8 om två lever och 9 om bara en fortfarande är vid liv. Var och en gör ett individuellt anfall mot dig och du kan bara blockera ett av dem. Varje anfall gör 1T6+1 i skada om de träffar"
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
  248: {
    mainText: "Dina nävar slår blixtsnabbt ut mot en av angriparna. Du får välja vem av dem det blir.",
    choices: [
      "Du kan använda Virvelkastet",
      "eller Bevingade hästens spark",
      "eller ett nytt slag"
    ],
    stillAlive: "Var och en av de soldater som fortfarande lever anfaller dig en gång. Du kan bara Blockera en attack."
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
  260: {
    mainText: "Resan genom ödemarken tar fyra dagar Om du var skadad får du tillbaka upp till 6 KROPPSPOÄNG. Under en stor del av resan följer du Lyckoﬂodens ﬂodbankar som möts av en sällan använd stig från Fiendil till Grågille Hed, Kunskapens stad långt i söder. Det regnar på den tredje dagen och för första gången lägger du märke till att klimatet är mycket kyligare här än på öarna i Andlösa havet. Till sist, när bergen hägrar framför dig, ser du staden Fiendil ligga i en grönskande dal. Stadsmuren är dåligt underhållen, på sina ställen till och med nedriven, och det finns inga vakter vid stadsporten, bara en gammal man i vinfläckig toga som sitter på ett stenblock som en gång var en del av porttornets befästning. Du ska just gå förbi honom när han ropar lågt till dig, ”Hämnare, välkommen till Fiendil. Du har färdats från De Stilla Drömmarnas O.” Han är ålderssvag och tycks inte utgöra något hot mot dig, förutom att han på något sätt vet vem du är Det finns ingen annan inom synhåll.",
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
  275: {
    mainText: "Grottan är mörk, men det silar ned ljus från en smal spricka i taket. När du makar dig fram längs det ojämna golvet hör du steg bakom dig och du skyndar in i mörkret. En trappa leder nedåt och när du går ned hör du ett underligt ljud, som gnisslandet av kugghjul, ovanifrån. Plötsligt faller en störtflod av vatten nedför trappan och du springer i mörkret med handen mot väggen. Du står snart till knäna i vatten och börjar undra om det finns någon väg ut i änden av tunneln, när ett fällgaller slår ned i golvet bakom dig. Vattennivån sjunker och du finner att du har fångats i en järnbur. Det finns inget sätt att ta sig ut och du tillbringar några matta timmar med att vila och meditera. Plötsligt dränks buren i ljus när dörren i änden av tunneln slås upp. Du befinner dig under sittplatserna på en stor rund arena som långsamt fylls med folk. Folkmassan jublar när en trumpet ljuder och burens framsida faller till marken. En grupp soldater går fram till burens baksida. De gör tecken åt dig att gå ut på arenan och sticker med spjuten genom gallret. ”Må Ödesgudinnan le mot dig,” säger en. ”Bara en av er kan bli slottets konung och överleva.” Du går ut i solljuset och folkmassan jublar igen. Burens dörr dras upp igen bakom dig och du kan inte gå tillbaka. Du skelar mot solen och ser dig omkring.",
    choices: [
      "Gå vidare"
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
  287: {
    mainText: "Du faller baklänges från Spindelvävshallen, ned på stenarna på går- den nedanför och bryter nacken. Du har misslyckats."
  },
  290: {
    mainText: "Bonden som har lett dig stannar utanför en ståtlig vit byggnad och pekar in. Du tackar honom och går in på den svala byggnadens mannorgolv. Du stegar självsäkert fram mot en krigare klädd i en blå och gyllene toga. Plötsligt öppnar sig golvet under dig och du faller ned på golvet i en mörk tunnel nedanför. Mannen i toga ropar ned efter dig, \"Skynda dig till arenan, min vän. Om mina män får tag i dig först dödar de dig.\" Du ser ingen annan väg ut än tunneln framför dig.",
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
  295: {
    mainText: "Du griper den Tvåhövdade jätten runt låren, men den väger över ett ton och du finner att du inte kan kasta den. Monstret släpper sin väldiga klubba och lyfter dig, slänger dig i klippan och trampar på dig. Ditt huvud krossas som en mogen melon när kraften från dess häl trycker ned det. Du har misslyckats med ditt uppdrag."
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
  303: {
    mainText: "Det är gott och väl efter midnatt när du kommer ut från härbärget i den svala nattluften, klädd i din svarta dräkt och huva. När du närmar dig klostret kan du se att det är lätt att klättra upp på taket till gången som förbinder refektoriet med bönerummet, eftersom det står vintunnor uppställda mot väggen. Du tar dig upp på taket och sänker dig ned på en mycket liten gårdsplan. Du går runt ett hörn på gårdsplanen och kommer in i en återvändsgränd. Den enda vägen ut som du kan se är en smal gång som leder åt vänster. Du tar dig försiktigt nedför den, men sliter av en osynlig tråd, tunn som spindelväv, och en klocka börjar ringa i refektoriet. Du springer nedför gången som svänger till vänster igen och kommer till en ny återvändsgränd utan flyktväg. Gångarna är byggda för att leda in inkräktare i återvändsgränder de inte kan fly från, och det är där du befinner dig. Flera munkar dyker upp bakom dig och du försöker förtvivlat klättra upp på väggen, men den är täckt med ett klibbigt nät som du fastnar i. Du är hjälplös och kan bara döda dig själv innan de får tag i dig genom att bita av dig tungan och förblöda. Ditt äventyr slutar här."
  },
  304: {
    mainText: "Togawa nickar igen och ställer en tredje fråga, \"Vilka är dina ögon? \" \"Mina ögon är Solen och Månen,\" svarar du, reciterande orden ur den hemliga Skuggkrigarnas Stormästares Litania. \"Jag är Skuggkrigare. Jag följer Tigerns väg. \" Togawa bugar sig för dig, \"En De Fyra Vindarnas Stormästare, \" säger han, \"jag måste göra mitt bästa för att hjälpa dig\".\nDu sover på grottans kalla golv, men i dina drömmar kommer Togawa fram till dig, hans kropp silvrig och eterisk, och sträcker fram handen mot dig. Du tar den och han lyfter dig ut ur din kropp. När du tittar ned kan du se dig själv sova i ljusskenet. Ni är snart långt från grottan, bortsvepta av en eterisk vind. Du håller hårt fast i honom i vetskap om att utan Togawas ledning skulle du driva hjälplöst. Skuggkrigarens färdigheter kan inte hjälpa dig här. Munken pekar framåt mot ett glimmande portvalv bortom vilket en silverstig sträcker sig upp bland molnen. Keruber ﬂockas runt pelarna och en Skyddsängel, vit och tadelfri, står mellan dem.\n\"Det här är Porten till De sju himlarna,\" säger Togawa. \"Vi kan inte gå in ännu.\" När han talar tar en skepnad form på silvervägen. Den glider förbi Skyddsängeln och när den närmar sig ser du att det är en perfekt tiger, men den har vit päls och blå ögon.\n\"Andetigern är en av Kwons tjänare,\" säger Togawa. \"Hon ska hjälpa oss.\" När tigrinnan ser på dig överför hon en del av sin kunskap. Hon har följt efter Yaemon på andeplanet, utan att han har märkt det. Yaemon och Honoric, marskalk över Domsvärdslegionen som dyrkar guden Vasch-Ro, färdas mot den fjärran staden Druath Glennan vid kanten av Snövidderna. De ska möta en tredje man där, Manse Dödsmagikern, en mäktig och ond magiker som dyrkar Nemesis, Ondskans högste princip. Tillsammans planerar de att färdas till Förändringens pelare och var och en av dem känner till ett hemligt ord som kan binda en gud eller gudinna i lnferno. Du inser att du måste färdas till Druath Glennan så snabbt som möjligt. Andetigern välsignar dig och Ödesgudinnan kommer att le mot dig. Din Ödesmodifikation är nu +1. Du försöker tala till Andetigern, men orden kommer inte fram och Togawa drar iväg dig från Porten till De sju himlarna. När du vaknar på morgonen säger han, \"Det oheliga förbundet måste stoppas. Av alla onda gudar är det bara den Ledes, Vasch-Ros och Nemesis anhängare som har disciplin att ena sig. Nemesis är den främsta av de onda gudarna. Aldrig förr har tre så mäktiga och onda män litat på varandra. \" Han tar fram en väska med örter ur en spricka i berget. \"De här har helande krafter,\" säger han. Du tar dem och kan använda dem när som helst när du inte är i strid för att få tillbaka upp till 8 KROPPSPOÄNG. Du tackar honom och ska just fråga honom om han vill göra dig sällskap, när han lägger sig ned på grottgolvet och somnar. Du känner att du inte kan få mer hjälp och börjar klättringen nedför berget Gwalodrun till passet nedanför. En dag senare kommer du in bland kullarna i Lyckopasset.",
    choices: [
      "Gå vidare"
    ]
  },
  307: {
    mainText: "Du går in på krogen Svarta svärdet. Den har ett långt utskänkningsrum med en flammande eld, till och med vid skördetiden i månaden Allmoderns prakt. Därinne sitter ungefär fyrtio män och dricker, de ﬂesta soldater. lnte en enda sjöman syns till, trots att du fortfarande är nära hamnen. Soldaterna har tagit med sina vapen in på krogen, men många har lossat på eller tagit av sig delar av rustningen i den tryckande hettan. Stanken av gammal svett är överväldigande. En man som måste väga 130 kg eller mer spatserar upp och ned utefter den långa baren, slänger upp mjödstop på disken och plockar på sig silver. Du köper ett stop och lyssnar till pratet. De ropar från bord till bord om fälttåget som de ska utkämpa mot folket i Föraningens tom. Vid ett bord sitter en särdeles högljudd man på tjugofem år eller så. Han vill ha mjöd och två av soldaterna som är med honom tar hans mugg och slåss om äran att få köpa honom ett stop. Han ignorerar det, lägger märke till dig och utmanar dig på mjödhävning. ",
    choices: [
      "Om du antar utmaningen",
      "Om du avböjer"
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
  323: {
    mainText: "Du tar upp några fiskfjäll ur en ficka och lägger dem över ögongloberna. Du kan se ganska bra genom dem, men de gör att du ser blind ut. Du sätter dig ned för att tigga i närheten av ingången till klostret och hör tillräckligt för att övertygas om att munkarna som dyrkar den Lede är genomonda. Men det är en kvinna i en svart kappa täckt med ett mönster av grön spindelväv som drar till sig din uppmärksamhet. Hon går mot klostret tillsammans med två munkar klädda i rött, och de tycks gräla om någonting. Hon förhandlar om ett pris för en besvärjelse som de vill att hon ska kasta i ”Spindelvävshallen ”. Hon påpekar att om den är deras enda försvar mot spioner i korridoren som förbinder refektoriet med sovcellerna, är besvärjelsen Nullaqs nät värd mer än trehundra guldmynt. Du tar upp din huva med dess magra skörd av kopparmynt och traskar långsamt bort för att ligga lågt tills mörkret faller. Du bestämmer dig för att utnyttja din vetskap om att Spindelvävshallen bara har en fälla, spindelväven från häxan som du såg tidigare.",
    choices: [
      "Har du färdigheten Klättra? Om du har det",
      "Om du inte har det, eller föredrar att inte klättra"
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
  329: {
    mainText: "Du formar ett ”O” med tungan och lägger försiktigt en av giftpilarna på den med en skicklig rörelse. Du andas in och spottar ut. Pilen har fastnat i munken innan han har förstått vad du gör. Giftet verkar. Han viker sig dubbel i krampryckningar på den leriga vägen och dör. Du ödslar ingen tid, utan tar av honom hans röda kläder och drar dem över din egen Skuggkrigardräkt. Du går med lugn säkerhet in i sovsalarna i klostret och tar dig till Spindelvävshallen.",
    choices: [
      "Gå vidare"
    ]
  },
  332: {
    mainText: "Du snurrar runt och kör upp utsidan av foten mot de blå ådrorna på Människoätarens strupe, samtidigt som den försöker slå undan dig med klubban.",
    choices: [
      "Du kan använda Järnnävens slag",
      "eller Draksvanskastet",
      "eller sparka igen"
    ],
    stillAlive: "Människoätaren försöker slå in ditt huvud. Du har 8 i Försvar mot hans tunga slag"
  },
  334: {
    mainText: "Till din bestörtning väljer månen det här ögonblicket att komma fram från bakom ett moln och munken får syn på din skugga. \"Vem är du?\" frågar han spänt.",
    choices: [
      "Ska du gå fram till honom och anfalla",
      "eller använda en Shuriken"
    ]
  },
  336: {
    mainText: "Den Tvåhövdade Jätten slår i marken så att klippan spräcks. Hans läppar är täckta av saliv blandat med blod. Du fortsätter framåt och i dimman ser du grottan som den bodde i. Du undersöker den noga och hittar ett urval av ben som har knäckts för att komma åt märgen, och en liten säck full med kopparstycken. Jättens skatt är utan värde för dig. Den är för tung för att bära med sig. Men du hittar en svart läderhandske, sydd med fin silvertråd. Den är magisk till sin natur, en Slaghandske, och du tar på dig den. Lägg +1 till din Slagmodifikation när du använder Järnnäven, Tigertassen eller Kobraslaget. \nNär du fortsätter genom kullarna lättar dimman och du beger dig in i den vilda ödemarken mot staden Fiendil.",
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
  345: {
    mainText: "Till den trögtänkta Människoätarens förvåning, hukar du dig på däcket och försöker svepa undan benen på den. Men den har grova och kraftiga ben och den är stor och stark.",
    choices: [
      "Du kan använda Bevingade hästens spark",
      "eller Järnnävens slag"
    ],
    stillAlive: "Du misslyckas med att slänga Människoätaren i däcket och den försöker krossa dig med spikklubban. Du har 7 i Försvar mot den fallande klubban när du försöker rulla bakåt och upp på händerna, för att sedan hoppa upp på fötter. Du har inte tid att blockera det kraftiga slaget."
  },
  347: {
    mainText: "Din Shuriken virvlar mot honom och glänser i månskenet. Han försöker kasta sig åt sidan, men den träffar honom i armen i stället för i strupen som du hade tänkt dig. Han ropar på hjälp och faller bakåt, med handen om armen. Du kan inte få tillbaka din Shuriken. Stryk den från Speltabellen. Du bestämmer dig för att du skulle riskera hela ditt uppdrag om du stannade, så du försvinner snabbt på bakgatorna och håller dig undan i ett utbränt bageri under natten. Du inser att munken kan ha känt igen dig som en Skuggkrigare och bestämmer dig för att lämna Domedag, fast besluten att inte låta Yaemon nå fram till Förändringens pelare före dig. Du förklär dig till tiggare och lämnar staden följande morgon.",
    choices: [
      "Gå vidare"
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
  357: {
    mainText: "Pojken skriker till när han dör och männen slår med piskan över oxen och kör därifrån, med Kobramannen släpande efter. Det ﬁnns en grotta under ett klipputsprång alldeles över dig på bergssidan. ”Den vägen till Mortavalon,” ropar en av männen och pekar mot grottan.",
    choices: [
      "Om du fortsätter längs vägen",
      "Om du undersöker grottan"
    ]
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
  363: {
    mainText: "När du griper tag i hans hand pirrar det till och du får en stöt som lamslår din kropp. Du förlorar 7 KROPPSPOÄNG. Om du fortfarande lever övervinner du smärtan som skulle ha förlamat de ﬂesta - din träning har ofta inneburit värre saker- och använder Järnnävens slag för att slå honom i magen. Sedan svänger du runt och använder Bevingade hästens spark. Du slår in foten i ansiktet på honom och sparkar ut honom i vallgraven. Vattnet kokar när de Flytande munnarna kastar sig mot sitt byte. lnom en minut har de slitit köttet från benen på honom. Du klättrar upp mot Vätten i tornet. Odjuret gör sig till inför publiken, säker på att vinna i dag också. Han slår sig för bröstet, som är dubbelt så brett som ditt, och svingar treudden med en hand. Tornet är grovt murat med många fästen för händerna, och du rör dig runt det så att Vätten inte vet exakt var du beﬁnner dig. Sedan griper du tag i en utskjutande sten med händerna och svingar dig upp i tornet bakom honom. Han svänger runt och du anfaller honom blixtsnabbt.",
    choices: [
      "Använder du Tigersprångets spark",
      "eller Virvelkastet",
      "eller Tigertassens slag"
    ]
  },
  368: {
    mainText: "Spindelvävshallen är en böjd korridor, som en välvd bro, som förbinder bostadsdelen på övervåningen med refektoriet där munkarna äter. När dörren går upp ser du ett rum som är svagt upplyst av två ﬂämtande ljus. Eftersom du är förvarnad lägger du märke till blänket av de många trådarna, tunna som spindelväv, som går kors och tvärs över golvet. Några av dem antar du är anknutna till klockor eller fällor som skulle förråda eller döda dig. Du böjer dig ned, går upp i handstående och går genom rummet på händerna. Du kan balansera på en arm medan den andra försiktigt undersöker golvet framför dig efter trådar. Det tar dig en halvtimme att långsamt gå genom rummet, men du lyckas utan att bryta någon av trådarna. Du kommer fram till dörren och går smidigt ned på fötter igen innan du öppnar den. Nu står du på balkongen över refektoriet och matsalen. Medan du kryper ihop bakom balkongen får du reda på det du behöver veta, av munkar som dricker vin sent in på natten. Yaemon tycks har gett sig av mot Mortavalon, tillsammans med Honoric, Marskalk över Doms- värdslegionen, för tio dagar sedan. lnnan du hinner ge dig av får du syn på en bokrulle där några av de sparkar, slag och kast som används i Syrsans Väg, stridskonsten som används av den Ledes munkar, finns beskrivna. Du kan höja din Slagmodifikation med 1, eftersom du lär dig några användbara tekniker. De är skickliga på att slå. Du lägger också märke till att de inte känner till den Kluvna blixtsparken. Det kan vara bra att veta när du måste slåss mot en munk som dyrkar den Lede. Du lyckas ta dig ut samma väg som du kom utan svårighet, och håller dig dold i ett nedbränt bageri resten av natten. På morgonen lämnar du Domedag, fast besluten att hinna ifatt Yaemon och Honoric.",
    choices: [
      "Gå vidare"
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
  375: {
    mainText: "Du lyckas hålla dig fast vid stenarna utanpå Spindelvävshallen när munken kastar ned änterhaken på stenläggningen nedanför. Du buktalar så att munken hör vad han tror är ett stönande från gårdsplanen nedanför. Han skrockar och lutar sig ut från fönstret för att titta ned, men han ser ingenting i mörkret. Han drar tillbaka huvudet och du tar dig långsamt uppför väggen mot fönstret, skjuter ifrån med fötterna, svänger ned och in genom fönstret och landar tyst bakom honom när han går bort från det. Han tycks märka att du är där och vänder på huvudet när du kastar din strypsnara om halsen på honom. Han dör utan ett ljud. Hallen är svagt upplyst av två ﬂämtande ljus, men dina skarpa ögon kan se den glittrande spindelväven som går kors och tvärs över golvet. Du sträcker dig upp från fönsterbrädet, kör in Kattklorna i murbruket i taket och tar dig långsamt över till dörren. Du befinner dig på en balkong över refektoriet och matsalen. När du kryper ihop bakom balkongen råkar du få höra det du behövde veta, av munkar som sitter och dricker vin till sent in på natten. Det verkar som om Yaemon har gett sig av mot Mortavalon tillsammans med Honoric, Marskalken över Domsvärdslegionen, för tio dagar sedan. Innan du ger dig av får du syn på en bokrulle som beskriver de sparkar, slag och kast som används i Syrsans väg, den stridsteknik som den Ledes munkar använder. Du kan höja din Kastmodifikation med 1, eftersom du lär dig några användbara tekniker. Du lägger också märke till att de inte känner till den Kluvna blixtsparken. Du lyckas ta dig ut genom ett fönster från balkongen och klättrar ned till gårdsplanen, där du hämtar din änterhake. Sedan gömmer du dig i ett nedbränt bageri resten av natten. På morgonen lämnar du Domedag, fast besluten att hinna ikapp Yaemon och Honoric.",
    choices: [
      "Gå vidare"
    ]
  },
  380: {
    mainText: "Pilen når fram till dig när du befinner dig mitt i luften mellan riggen och däcket, men du slår upp med handen och plockar den ur luften några centimetrar framför ditt bröst och kastar den åt sidan. Människoätaren är rasande och höjer sin spikklubba för att krossa dig.",
    choices: [
      "Du kan försöka använda Bevingade hästens spark",
      "eller försöka med Järnnävens slag",
      "eller glida över däcket och använda Draksvanskastet"
    ]
  },
  382: {
    mainText: "Ditt otroliga hopp räcker för att ta dig till ön och du landar mjukt på fötterna. Folkmassan jublar. Du ser dig omkring. Svartalven syns inte till någonstans. Hon har försvunnit i träsket. Riddaren ligger uppﬂäkt på sanden, men mannen i blå och gyllene klädnad flyter över vallgraven på ett litet isﬂak.",
    choices: [
      "Gå vidare"
    ]
  },
  384: {
    mainText: "Din fot slår in i hans solarplexus med en otrolig kraft, knäcker ett revben och får honom att tappa andan. Han viker sig dubbel, oförmögen att röra sig, och du slår ut med en kluven blixtspark. Din fot slår först in i hans mellangärde igen, sedan upp mot hans strupe i en enda flytande rörelse. 'Han faller död ned på den leriga gatan tre sekunder efter det att du anföll. Du ödslar ingen tid, utan tar av honom hans röda dräkt och drar den över din Skuggkrigardräkt. Du går lugnt och självsäkert in i klostrets sovsalar utan att någon stoppar dig, och fortsätter mot Spindelnätens hall.",
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
  403: {
    mainText: "Munken är en mästare på närstrid. Han går bakåt och slår undan din fot med underarmen. Sedan skriker han skräckslaget: ”SKUGGKRIGARE!”,för att larma de andra. Du inser att ditt uppdrag skulle vara i fara om du stannade och försvinner snabbt bland bakgatorna. Du gömmer dig i ett utbränt bageri under natten. Du funderar över att munken såg att du var en Skuggkrigare och beslutar dig för att lämna Domedag, fast besluten att se till att Yaemon inte når fram till Förändringens pelare före dig. Du lämnar staden nästa morgon, förklädd till tiggare.",
    choices: [
      "Gå vidare"
    ]
  },
  408: {
    mainText: "Du går förbi slavmarknaden där en kapten från Domsvärdslegionen bjuder utan att mötas av något motstånd, på män för att ro skeppen i Yttre befästningens förbund, Domedags flotta. De flesta av stadsborna tycks ta en stor omväg förbi platsen och du skyndar förbi. Du kommer till stadens största byggnad och stannar upp för att stirra fascinerat. Du gissar att det måsta vara templet till Vasch-Ro. Det är en väldig katedral byggd av basaltblock, med ett väldigt, fyrkantigt och befäst tom, slätt och outsmyckat, som höjer sig sjuttio meter över byggnaderna omkring. Bakom det ligger Honorics residens, mer en fästning än ett palats. Du fortsätter mot en krog med en skylt med soldater med ekrade hjul på sköldarna, som hukar sig framför ett svart svärd som hänger i luften. Den ligger i en gatukrok och bakom den till höger skymtar du ett kloster byggt i mörk sten med klarröda fönsterluckor. Det kan bara vara templet till den Lede, din gud Kwons förvridne bror. Yaemon kanske finns därinne.",
    choices: [
      "Du kan gå in på krogen och höra efter skvaller",
      "Du kan försöka smyga dig in i klostret"
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
  414: {
    mainText: "Du stirrar upp mot natthimlen tills du kan se i mörkret som en uggla. Sedan klämmer du dig igenom den smalaste av öppningarna mellan de två husen och beger dig mot Spindelvävshallen, som egentligen är en stor, välvd bro, tio meter upp och helt sluten. Den förbinder sovsalarna på första våningen med balkongen i refektoriet där munkarna äter. Du står under fönstret mitt på valvbågen och sätter fast Kattklorna på händer och fötter. Sedan tar du fram den lilla änterhaken och repet från en av dräktens innerﬁckor. Du kastar in den ﬁltklädda kroken genom det öppna fönstret och spänner repet innan du klättrar uppför det med en hand i taget, som en apa. Du är alldeles under fönstret när du ser två händer på kroken över dig.",
    choices: [
      "Om du försöker ta dig uppför den sista metern rep innan han hinner ta loss kroken",
      "Om du försöker sätta fast Klorna i broväggen och klättra upp till sidan av fönstret"
    ]
  }
}