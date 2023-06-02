<script lang="ts" setup>
  import { EModals } from "@/assets/enums"
  import Modal from "@/utils/modal.vue"
</script>


<template>
  <Modal :active-modal="EModals.rules">
    <h1>Regler & info</h1>
    <h3>Angreppsmetoder inom Tigerns väg</h3>
    <h4>Kluven blixtspark</h4>
    En spark från sidan. Den når lika högt som angriparen är lång.<br>
    <h4>Tigersprångets spark</h4>
    Angriparen tar ett språng framåt samtidigt som han sparkar framåt.<br>
    <h4>Bevingade hästens spark</h4>
    Angriparen sparkar bakåt. Når till brösthöjd.<br>
    <h4>Tigertassens slag</h4>
    Ett handkantsslag som kommer uppifrån.<br>
    <h4>Järnnävens slag</h4>
    Ett knytnävsslag som riktas rakt framåt.<br>
    <h4>Kobraslaget</h4>
    Ett slag som kommer nerifrån.<br>
    <h4>Virvelkastet</h4>
    Ett kast som används när både angripare och försvarare står upp.<br>
    <h4> Draksvanskastet</h4>
    Detta kast innebär att angriparen kastar sig framåt med benen först och sparkar mot försvararens ben så att denne faller omkull. Båda ligger när kastet är avslutat.<br>
    <h4>
      Tigertandskastet
    </h4>
    Angriparen tar ett språng med föttema först och låser ett saxgrepp kring försvararens hals. Med hjälp av detta grepp kastar han försvararen. Båda ligger när kastet är avslutat.<br>
  
    <h3>Strid</h3>
    Som Mästare i Taijutsu, Skuggkrígarens färdighet att slåss utan vapen, har du fyra grundläggande sätt att slåss. Du kan kasta Shuriken (se under färdigheter), sparka, slå eller kasta. Du får veta när du kan använda Shuriken.
    Det är i allmänhet svårare att träffa en motståndare med en spark, men den gör mer skada. Ett lyckat kast gör att du kan fortsätta med ett ”dödande slag", men om du misslyckas med ett kast sänks din Försvarssiffra mot ﬁenden eftersom du är öppen för anfall. När du är i strid blir du tillfrågad om vilken typ av anfall du vill göra.
    Striderna presenteras så att du kan titta igenom reglerna snabbt och börja spela nästan direkt. Om du gör det, bör du komma ihåg Blockering och INRE KRAFT, eftersom du inte alltid får veta av texten när du ska använda dem.
    <br>
    <h4>
      Slag
    </h4>
    Du får veta vilket Försvarsvärde din motståndare har mot ett slag. Slå två tärningar. Om resultatet blir högre än hans eller hennes Försvar har du lyckats att slå till motståndaren. Då slår du en täming till. Resultatet är den mängd skada som du gör på motståndaren. Dra den från hans KROPPSPOÄNG. Om det ger honom en KROPPSPOÄNG på 0 eller mindre har du vunnit. När motståndaren anfaller dig får du ett Försvar för den striden. Slå två tärningar. Om resultatet blir högre än den siffran har du blivit träffad. Hur mycket skada du tar beror på motståndaren och står antecknat i paragrafen. Det står vanligen skrivet som ”Skada 1T6+1” eller ”2T6" eller "1T6-2”. "T6” står för
    en vanlig sexsidig tärning. Du slår helt enkelt det angivna antalet tärningar och lägger till siffran som står efter. Det är den mängd skada som du tar. lnnan du drar den från din KROPPSPOÄNG, kan du välja att försöka blockera eller parera anfallet (se Blockera).
    <br>
    <h4>
      Slagmodifikation
    </h4>
    När du slår för "Slag" för att avgöra om du har lyckats träffa motståndaren eller inte lägger du till eller drar ifrån på Slagmodiﬁkationen.
    Modiﬁkationen speglar din färdighet i att använda slag enligt Tigerns väg. Du börjar med en Slagmodiﬁkation på 0, den stiger när du blir bättre på Tigerns Väg och kan förändras under äventyret.
    <br>
    <h4>
      Spark
    </h4>
    Sparken och Sparkmodifikationen fungerar precis som slaget, förutom att när du slår tärningen för att avgöra hur mycket skada du gör, lägger du till 2 - en spark är effektivare än ett slag.
    <br>
    <h4>
      Kast
    </h4>
    Kastet och Kastmodifikationen fungerar som slaget. Men om du lyckas gör du ingen skada på motståndaren. Du får i stället göra ytterligare ett anfall, ett slag eller en spark, och det är mycket lättare att träffa en kastad motståndare så du får oftast lägga ett värde till din slag- eller sparkmodifikation, hur mycket står i texten. Om du lyckas med det uppföljande anfallet får du även lägga 2 till skadan du gör.
    <br>
    <h4>
      Skuggkrigarens Kroppspoäng
    </h4>
    Du börjar spelet med 20 KROPPSPOÄNG. Det är antagligen det som förändras mest allt eftersom du blir skadad, helad osv. När du får O eller mindre i KROPPSPOÄNG är du död och äventyret är slut.
    <br>
    <h4>
      Blockering
    </h4>
    Som en Skuggkrigare, en mästare i Taijutsu, kan du blockera eller parera slag med olika delar av kroppen, vanligen underarrnama.
    Därför har du tunna, lätta järnstavar insydda i ärmarna för att kunna blockera till och med svärd och andra vapen. Om du har blivit träffad i strid, kan du försöka blockera slaget och undvika att ta skada. Slå två tärningar. Om resultatet blir lägre än ditt Försvar i den striden, har du lyckats blockera slaget och tar ingen skada. Om du slår lika med eller högre än ditt Försvar, tar du skada på vanligt sätt. Eftersom du har ägnat tid åt att blockera är alltid ditt nästa anfall mindre effektivt eftersom motståndaren har mer tid på sig att reagera. Vare sig du lyckas parera eller inte drar du 2 från din Slag-, Spark- eller Kastmodifikation i nästa anfall. Kom ihåg att du bara kan blockera slag.
    <br>
    <h4>
      Inre Kraft
    </h4>
    Genom meditation och hård träning har du lärt dig att släppa lös andlig eller INRE KRAFT genom kroppen på samma sätt som karateexperter idag slår sönder träklossar och tegelstenar. l alla strider kan du, innan du slår tämingen för att avgöra om du träffar eller missar motståndaren, välja att använda INRE KRAFT. Om du gör det drar du en poäng från dina INRE KRAFT-poäng. Den används även om du inte lyckas träffa motståndaren. Om du lyckas, fördubblar du resultatet när du avgör hur mycket skada du gör. När din INRE KRAFT är O kan du inte längre använda INRE KRAFT, så bruka den med förstånd! Du börjar spelet med 5 poäng INRE KRAFT
    <h4>
      Ödet
    </h4>
    Turen spelar sin roll och ödesgudinnan har stor makt på Orbs värld. När du blir ombedd att göra ett Ödesslag slår du två tärningar och lägger till eller drar ifrån din Ödesmodifikation. Om resultatet blir 7-12 har du tur och Ödet ler mot dig. Om resultatet blir 2-6 har du otur och Ödet har vänt ryggen åt dig. Du börjar äventyret med O i Ödesmodifikation.

    <h3>Färdigheterna i Tigerns väg</h3>
    Du har tränats i ninjutsu hela ditt liv. Ditt smaksinne, din syn och hörsel har ﬁnslipats till nästan övermänsklig effektivitet. Du är tränad i skogskunskap och kan spåra som en blodhund och dölja dina spår.
    Du har kunskap om växter och örter som gör att du kan leva i vildmarken. Du är fysiskt så vältränad man kan bli. Du kan springa upp till 7 mil på en dag och simmar som en fisk. Din träning inbegrep ridning, lite buktaleri, meditation, förmågan att vara absolut stilla i timmar i sträck, perfekt balans och "De sju sätten att gå" eller förklädnad. l den senare färdigheten ingår också praktisk träning, så att du tex kan sjunga som en trubadur om du använder den förklädnaden.
    En stor del av träningen har varit inriktad på att smyga, gömma sig i skuggor, röra sig tyst och andas så tyst som möjligt, så att du kan röra dig utan att synas eller höras. Du börjar spelet med de här färdigheterna.
    Det finns nio andra färdigheter också. En av dem, Shurikenjutsu, lär sig alla Skuggkrigare. Den måste du ta, men sedan får du välja tre andra färdigheter från de övriga åtta.
    <br>
    <h4>
      Shurikenjutsu
    </h4>
    Du börjar äventyret med fem ”Shuriken” Du har specialiserat dig på typen ”kaststjärnor", små, rakbladsvassa, stjärnformade plattor av metall. Du kan kasta dem på upp till 10 meters håll med förödande effekt. Om du kastar en Shuriken får du en Försvarssiffra för ditt offer.
    Slå två tärningar. Om resultatet blir höqre än Försvaret, har du träffat offret. Om du lyckas med det slår du en tärning. Resultatet är den mängd skada som din Shuriken gör. Dra den från offrets KROPPSPOÄNG. lbland kan det var omöjligt att få tillbaka en Shuriken när du har kastat den. Håll på rätt plats på Speltabellen reda på hur många du har och stryk en Shuriken varje gång du blir av med en. Om du inte har några kvar kan du inte använda den här färdigheten längre.
    <br>
    <h4>Slå av pilar</h4>
    Den här färdigheten, som kräver perfekt muskelkoordination, samspel mellan hand och öga och snabba reflexer, gör att du kan slå undan eller till och med fånga projektiler som pilar eller spjut.

    <h4>Akrobatik</h4>
    Förmågan att kunna hoppa och skutta som en akrobat eller gymnast med eller utan hjälp av språngbrädor och liknande.
    <h4>lmmunitet mot gift</h4>
    Det här innebär att man tar små doser kraftigt gift under lång tid så att kroppen långsamt bygger upp ett motstånd. Det gör att Skuggkrigaren kan överleva de ﬂesta förgiftningsförsök. 
    <h4>Spela död</h4>
    Den här färdigheten, som kräver lång och hård träning, gör att Skuggkrigaren kan minska hjärtverksamheten och ämnesomsättningen med blotta viljestyrkan, så att han tycks vara död.
    <h4>Utbrytningskonst</h4>
    En Skuggkrigare med den här färdigheten kan dra sina leder ur led och göra kroppen så böjlig som möjligt. Det gör att han kan ta sig igenom små utrymmen och ta sig loss från rep och kedjor genom att slinka ur dem.
    <h4>Giﬁpilar</h4>
    Den här färdigheten, också känd som nålspottning, gör att Skuggkrigaren kan lägga små pilar täckta med ett kraftigt gift som sprids i blodet, på sin tunga. Genom att kröka tungan till ett ”O” och spotta eller blåsa kan han få pilen att ﬂyga ungefär 5 meter. Ett användbart överraskningsanfall som inte alltid går att spåra till gärningsmannen.
    <h4>Dyrka upp lös, upptäcka och oskadliggöra fällor</h4>
    Förmågan att öppna låsta dörrar, kistor o.s.v. Skuggkrigare med den här färdigheten har med sig olika dyrkar i fickor i dräkten, tillsammans med ett litet bräckjärn eller en kofot. Du är också tränad i att hitta fällor och använda låsdyrkningsredskapen för att oskadliggöra dem.
    <h4>Klättra</h4>
    Mångsidig träning i att använda Änterhaken och krampor för händer och fötter, så kallade Kattklor. Vid den filtklädda änterhaken med fyra spetsar är 15 meter rep fästat. Den hakas fast i murar, i nischer o.s.v, så att Skuggkrigaren kan klättra uppför repet. Kattklorna är krampor med piggar på som bärs på handﬂatan och under fotsuloma. Skuggkrigaren kan ta fäste med Kloma i en vägg och klättra rakt upp som en ﬂuga och till och med klättra på innertak.
  
    <h3>Skuggkrigarens verktyg</h3>
    Förutom den utrustning du tar med dig för dina färdigheter, har du som Skuggkrigare vissa verktyg med dig från början. De är:
    <h4>Dräkten</h4>
    På dagen är du normalt förklädd till en resande, tiggare eller något liknande. Nattetid när du är på ett uppdrag bär du dräkt. Den består av några stycken svart tyg. Ett stycke bärs som en jacka och täcker bröstet och armarna. Två andra viras runt vartdera benet och fästes vid midjan. Till sist viras ett långt tygstycke runt huvudet så att bara ögonen syns. Andra sidan av dräkten kan vara vit för färd på snö, eller grön för färd i skogen eller på gräsmark.
    <h4>Järnarmar</h4>
    Fyra tunna jämstavar, långa som din underarm, är insydda i ärmarna på din dräkt. De gör att du kan parera eller blockera slag från svärd och andra huggvapen.
    <h4>Andningsrör</h4>
    Det är gjort av bambu och kan användas som en snorkel så att du kan stanna länge under vatten. Det kan också användas som ett blåsrör tillsammans med färdigheten Giftpilar, så att räckvidden blir större.
    <h4>Strypsnara</h4>
    Ett särskilt vapen för Skuggkrigarna. Det är en bit ståltråd som används för att lönnmörda fiender genom strypning.
    <h4>Blixtpulver</h4>
    Det här pulvret skapar en förblindande blixt när det kastas på någon öppen låga. Du har bara tillräckligt mycket för en omgång.
    <h4>Flinta och stål</h4>
    Används när man gör upp eld.
    <h4>Spindelfisk</h4>
    Saltad och inlagd används den här mycket giftiga fisken som en källa till det dödliga gift som används tillsammans med färdigheten Giftpilar. Det är också ett användbart sätt att avlägsna vakthundar.
    <h4>Intets blod</h4>
    Du bär också med dig en dos av det kraftigaste gift som är känt på Orb. Giftet är extremt svårt och farligt att få tag i, för det tas från gadden på den skorpion som är son till Guden Intet, lntighetens mun.
    <br>
    Med de här färdighetema och vapnen till ditt förfogande är du nu en Skuggkrigare, redo att ta det första steget på Tigerns väg.
  </Modal>
</template>


<style lang="scss" scoped>
  h3 {
    margin: 30px 0 15px 0;
  }
  h4 {
    margin: 10px 0 5px 0;
  }
</style>