import { ContentItem } from "../types/content";

const md = (strings: TemplateStringsArray, ...values: any[]) => {
  const raw = String.raw({ raw: strings }, ...values);

  return raw
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
};

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
};

const createItem = (
  title: string,
  description: string,
  imageUrl: string
): ContentItem => ({
  title,
  description,
  imageUrl,
  slug: createSlug(title),
});

export const contentConfig: { items: ContentItem[] } = {
  items: [
    createItem(
      "Programeren",
      md`
## Mijn Eerste Stappen

Toen ik **9 jaar oud** was, vond ik de wereld van programmeren. Mijn eerste ervaring was met werken met **Scratch**, met dat maakte ik makkelijke **2D-spellen**.

---

## Game Development – Deel 1

Op **12- of 13-jarige leeftijd** kreeg ik een grote interesse in **game development**. Ik begon spelletjes te maken voor **Roblox** met Roblox Studio. Naast mijn eigen projecten werkte ik ook mee aan grotere games, zoals **MadCity** en andere roleplay-spellen.

Hoewel ik maar **ongeveer €300** verdiende met Roblox-games, was het voor een **12-jarig kind** toch een indrukwekkend bedrag. Dit motiveerde me om verder te gaan met programmeren.

## Game Development – Deel 2

Na een tijdje begon ik mijn interesse in programmeren wat te verliezen. In plaats daarvan raakte ik **verslaafd aan GTA V**, mijn favoriete game ooit.

Tijdens het spelen ontdekte ik de **modding-community** genaamd **FiveM**, en ik werd meteen enthousiast. Dit was een plek waar mensen hun eigen servers konden maken (vergelijk het met Minecraft bijvoorbeeld maar voor GTA).

Op een dag kreeg ik een bericht van iemand die vroeg of ik wist hoe je een **FiveM-server** moest opzetten. Ik loog en zei: _"Ja, ik kan dat!"_ – terwijl ik eigenlijk geen idee had hoe het werkte. Maar na wat onderzoek ontdekte ik dat FiveM dezelfde programmeertaal gebruikte als Roblox. Het bleek makkelijker dan ik dacht, en al snel bouwde ik **custom FiveM-servers**.

Een van de bekendste projecten waaraan ik werkte, was **CaliRP**. Dat project bestaat **nog steeds** en draait tegenwoordig een **jaaromzet van maar liefst 630 000 DOLLAR**.

Ik bleef FiveM-servers ontwikkelen van **het 6de leerjaar tot het 2de middelbaar**, maar uiteindelijk stopte ik ermee. Het werk werd te zwaar en slecht betaald, waardoor ik **burn-out** kreeg. Dit was het moment waarop ik besloot een nieuwe richting in te slaan.

---

## Overstap naar Web Development

Na mijn periode in game development begon ik **interesse te krijgen in webontwikkeling**. Ik wist niet precies waarom, maar ik vond het bouwen van websites opeens **veel interessanter dan games maken**.

Vandaag is **web development mijn grootste passie** en mijn belangrijkste focus als freelancer. Ik heb tot nu toe **meer dan 25 bedrijven** geholpen om online te geraken.

Daarnaast werk ik als **webdev bij het AI bedrijf Anthropic**.
      `,
      "/blog/programmer.jpg"
    ),
    createItem(
      "Penetratie Testen",
      md`
## De Eerste Hack

De eerste keer dat ik iets hackte, was in een videospel. Ik vond een fout in het spel waardoor ik heel veel in-game geld kon krijgen. Ik ontdekte dat ik dit kon omzetten naar cryptocurrency en besefte dat ik hiermee meer dan €5 000 kon verdienen.

Maar uiteindelijk voelde ik me hier niet goed over. Daarom gaf ik het geld terug en vertelde ik de makers van het spel over de fout.

## De Donkere Periode

Na deze ervaring begon ik hacken steeds interessanter te vinden. Het voelde spannend en leuk, maar al snel ging ik te ver.

Ik hackte websites, verwijderde databases en servers, haalde websites offline en voerde DDoS-aanvallen uit op mensen die ik niet mocht. Ook hackte ik accounts en deed ik aan wraak-hacking.

## Omkeer

Toen ik 14 jaar was, besloot ik te stoppen met onethisch hacken. Ik begon lessen te volgen over penetratietesten en webontwikkeling. Hierdoor leerde ik hoe hacken op een legale en ethische manier kon worden gebruikt.

Vanaf dat moment stopte ik met het hacken van accounts en websites zonder toestemming. Dit was ook het begin van mijn alias: **Alm0stEthical**.

## Nieuwe Pad

Vandaag de dag heb ik mijn leven omgedraaid. Ik focus me volledig op **ethisch hacken**, waarbij ik bedrijven help om hun systemen veiliger te maken. Alles gebeurt nu met toestemming, en ik gebruik mijn vaardigheden op een positieve manier.
      `,
      "/blog/penetratie.jpg"
    ),
    createItem(
      "Mijn Persoonlijkheid",
      md`
Ik ben eigenlijk een redelijk chill & altijd positief en blij met een smile 😁, maar tegelijk ook super gedreven. Ik hou ervan om de leiding te nemen en dingen te runnen – dat is gewoon mijn ding. Macht hebben en projecten managen? Dat is echt iets waar ik van houd.

Maar ondanks dat ben ik wel een introvert. Ik geniet van mijn eigen space, gewoon alleen. Wat ik echt nice vind? Sunsets en dat golden hour. Ik kan daar echt van genieten.

Verder lees ik graag romantische boeken. En in mijn vrije tijd? Zoals ge waarschijnlijk al doorhad, ben ik bezig met **ethisch** hacken en programmeren.
      `,
      "/blog/sunset.jpg"
    ),
    createItem(
      "Mijn Waarden & Normen",
      md`
        ## Wat Echt Belangrijk Is Voor Mij

        Waarden en normen vormen de basis van hoe ik in het leven sta. Iedereen heeft bepaalde principes die ze volgen, en ik ben daar geen uitzondering op. Hier zijn een paar dingen die voor mij echt belangrijk zijn.

        ---

        ## Eerlijkheid & Loyaliteit

        Eerlijkheid is voor mij een van de belangrijkste dingen. Ik hou niet van fake mensen of mensen die dingen achterhouden. Als je met mij omgaat, krijg je altijd de waarheid – soms misschien een beetje te direct, maar liever dat dan leugens.

        Daarnaast ben ik super **loyaal**. Als iemand iets voor mij betekent, sta ik altijd klaar voor die persoon. Vrienden en familie kunnen altijd op mij rekenen, zolang ze eerlijk en oprecht blijven. Een deal is een deal.

        ## Vrijheid & Onafhankelijkheid

        Ik haat het om vast te zitten aan iets of iemand. **Vrijheid** is voor mij belangerijk – de vrijheid om mijn eigen keuzes te maken, mijn eigen pad te volgen en te doen waar ik gelukkig van word.

        Dat betekent ook dat ik **onafhankelijk** wil zijn. Ik werk hard om zelf dingen te kunnen regelen, zonder afhankelijk te zijn van anderen. Dat is waarom ik al vroeg met ondernemen begon en waarom ik altijd nieuwe skills blijf leren.

        ## Groei & Discipline

        Ik ben iemand die altijd vooruit wil. Stilzitten en tevreden zijn met "goed genoeg" is niks voor mij. **Zelfontwikkeling** is superbelangrijk – of dat nu gaat om nieuwe webdev tech of andere dev dingen leren, betere keuzes maken of als persoon groeien.

        Tegelijk snap ik dat je niks bereikt zonder **discipline**.
      `,
      "/blog/waarden-en-normen.jpg"
    ),
    createItem(
      "Muziek",
      md`
Muziek voor mij is super belangrijk. Ik hou van het leren van nieuwe muziek, maar ik heb ook een aantal favorieten die ik altijd blijft luisteren. Het helpt me bij het concentreren tijdens het programmeren. Maar ik **maak zelf ook muziek**, ik maak alleen beats omdat ik niet echt durf om te zingen - eigenlijk is het niet over durven het gaat meer over dat ik niet goed met woorden uit mijn mond op de spot te halen. Ik zou wel ook ooit muziek maken, maar dan zou ik het niet meer leren.
      `,
      "/blog/music.jpg"
    ),
    createItem(
      "Sporten",
      md`
Ik heb **gevechts sporten** als hobby. Ik deed: **Muay Thai**, **Jiu Jitsu**, **Judo** en **Karate**. Dat is wel een hobby die niet helemaal naar mijn levensstijl past, maar ik vind het wel leuk om te doen en nu momenteel doe ik alleen maar **Muay Thai**. Voor al 7 jaar bijna. En ik ga ook soms met Michiel naar de GYM van aalter.
      `,
      "/blog/boxing.jpg"
    ),
  ],
};
