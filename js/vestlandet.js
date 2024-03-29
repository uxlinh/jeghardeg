mapboxgl.accessToken = 'pk.eyJ1IjoidXhsaW5oIiwiYSI6ImNrOGZ0eWN2YzA4NWozaW9pMXRldXloZnMifQ.CZVP7vDSVxGDVdE2UTZdSw';

const landsdelKnapper = document.querySelector("#landsdelKnapper")

const map = new mapboxgl.Map({
container: 'kartet', //fordi id="kartet" i hmtl
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 6,
center: [6.428956, 61.242423],
});
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

const innsamlinger = [{
    avatarUrl: "../img/gaveicon.svg",
    navn: "God jul, lille venn",
    by: "Drammen",
    message: "God jul, lille venn er en dugnad hvor målet er å samle inn nye julegaver til barn i familier som har litt mindre å rutte med. Dugnaden finnes flere steder i Norge. Dersom du ønsker å starte en dugnad der hvor du bor, ta kontakt med Anikken Hjelde.",
    link: "https://www.facebook.com/godjullillevenn",
    lng: 10.205373,
    lat: 59.735535
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "God jul, lille venn",
    by: "Lier",
    message: "God jul, lille venn er en dugnad hvor målet er å samle inn nye julegaver til barn i familier som har litt mindre å rutte med. Dugnaden finnes flere steder i Norge. Dersom du ønsker å starte en dugnad der hvor du bor, ta kontakt med Anikken Hjelde.",
    link: "https://www.facebook.com/events/2083795035083929/",
    lng: 10.303734,
    lat: 59.810786
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "God Jul, lille venn",
    by: "Øvre Eiker",
    message: "God jul, lille venn er en dugnad hvor målet er å samle inn nye julegaver til barn i familier som har litt mindre å rutte med. Dugnaden finnes flere steder i Norge. Dersom du ønsker å starte en dugnad der hvor du bor, ta kontakt med Anikken Hjelde.",
    link: "https://www.facebook.com/events/347435896702633/",
    lng: 9.909805,
    lat: 59.776149
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Med hjerte for Solør",
    by: "Solør",
    message: "Vi er en non-profitt organisasjon som baserer vår drift 100% på frivillighet, gaver, donasjoner og engasjement fra sambygdinger.Det hele startet julen 2016 da jeg(Linn) la ut en status på facebook om at jeg hadde en del julegaver til overs dersom det var noen som ikke hadde råd til å kjøpe gaver til barna sine.",
    link: "https://www.facebook.com/210470026026990/posts/1188120694928580/?d=n",
    lng: 12.070018,
    lat: 60.608775
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ringerike Frivilligsentral",
    by: "Ringerike",
    message: "Det samles inn julegaver som gis videre til barnevernet i kommunen. Hvis du har noe å gi, så pakk gaven inn og kom innom oss. Vi setter på lapper sammen med giver. Lappene skal vise alder, kjønn osv slik at gaven kommer til rette vedkommende. Barnevernet tar av disse lappene før utlevering. Dette er en fint bidrag til å skape en hyggelig jul for mange barn/unge.",
    link: "https://ringerike.frivilligsentral.no/aktivitet?julegaveinnsamling&Id=3228",
    lng: 10.259873,
    lat: 60.171106
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Hjelpende hender",
    by: "Romerike og Oslo",
    message: "En frivillig hjelpe org. for hjemløse, rusmisbrukere, enslige, eldre og andre som trenger litt hjelp i hverdagen Vi er politisk uavhengig, og ikke- religiøs organisasjon.",
    link: "https://www.facebook.com/Hjelpende-hender-124622254361388",
    lng: 11.001599,
    lat: 59.980591
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Sortland Frivilligsentral",
    by: "Sortland",
    message: "Sortland frivilligsentral kjører innsamlingen, Julemateska. De gir gaveeske som inneholder julemat samt julegave til barna. På nettsiden kan du scrolle ned til, 'Vil du bidra' og huk av for Julemateska for å bidra.",
    link: "https://sortland.frivilligsentral.no/",
    lng: 15.416459,
    lat: 68.697502
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Trøgstad Frivilligsentral",
    by: "Trøgstad",
    message: "'Juletre med mening', er at foreldre/foresatte fra barn ifra lav-inntektsfamilier kan komme med konkrete julegave ønsker på vegne av barna sine. Målgruppen er 0-18 år (opptil 23 år hvis under barnevernet). Les mer om 'Juletre med mening via linken.",
    link: "https://trogstad.frivilligsentral.no/aktivitet?juletre-med-mening&Id=6107",
    lng: 11.316568,
    lat: 59.641407
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Spydeberg Frivilligsentral",
    by: "Spydeberg",
    message: "'Ønsketre', Det å få økonomien til å strekke til i jula kan være utfordrende for mange familier, det vil 'Sammen for Spydeberg' gjøre noe med. Sjekk ut nettsiden til Spydebergs frivilligsentral for mer informasjon.",
    link: "https://spydeberg.frivilligsentral.no/nyhet?%C3%B8nsketre&Id=34688",
    lng: 11.080715,
    lat: 59.620186
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Askim Frivilligsentral",
    by: "Askim",
    message: "'Juletre med mening', er at foreldre/foresatte fra barn ifra lav-inntektsfamilier kan komme med konkrete julegave ønsker på vegne av barna sine. Målgruppen er 0-18 år (opptil 23 år hvis under barnevernet). Lever julegaven til Frivilligsentralen på Torget 14, 1803 Askim",
    link: "https://askim.frivilligsentral.no/nyhet?juletre-med-mening&Id=29243",
    lng: 11.163716,
    lat: 59.583895
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Julegaveinnsamling i Re",
    by: "Revetal",
    message: "Gavene kan også i år leveres hos «Stor og Liten», der stiller de opp og tar imot gaver, forteller Jennifer. Det blir også stand ved utgangen mot parkeringshuset fredagene 3. og 10. desember, mellom klokka 17.00 og 19.00.",
    link: "https://www.reavisa.no/2021/11/18/na-er-treet-med-julegaveonsker-oppe/#.Ybj7zvHMI-Q",
    lng: 10.264243,
    lat: 59.371682
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Arendal - Clarion Hotel Tyholmen",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 8.767737,
    lat: 58.458071
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Asker - Quality Hotel Leangkollen",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.465458,
    lat: 59.831753
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Clarion Hotel Admiral",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.319525,
    lat: 60.395620
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Clarion Hotel Bergen",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.325555,
    lat: 60.396389
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Clarion Hotel Bergen Airport Terminal",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.230702,
    lat: 60.290514
},

{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Comfort Hotel Bergen",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.315495,
    lat: 60.396032
},

{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Quality Hotel Edvard Grieg",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.293183,
    lat: 60.292491
},

{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Comfort Hotel  Bergen Airport Terminal",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.235416,
    lat: 60.286160
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bergen - Clarion Collection Hotel Havnekontoret",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.321540,
    lat: 60.398240
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Bodø - Clarion Collection Hotel Grand Bodø",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 14.378167,
    lat: 67.283869
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Drammen - Clarion Collection Hotel Tollboden",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.210199,
    lat: 59.736913
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Drammen - Quality Hotel River Station",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.206752,
    lat: 59.739036
},

{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Drammen - Comfort Hotel Union Brygge",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.191734,
    lat: 59.743920
},

{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Florø - Comfort Hotel Florø",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.035635,
    lat: 61.599790
},

{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo Gardermoen - Clarion Hotel & Congress Oslo Airport",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 11.069963,
    lat: 60.192809
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo Gardermoen - Quality Airport Hotel Gardermoen",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 11.161589,
    lat: 60.163497
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo Fornebu - Quality Hotel Expo",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.628301,
    lat: 59.902580
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Fredrikstad - Quality Hotel Fredrikstad",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.939552,
    lat: 59.211208
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Hamar - Clarion Collection Hotel Astoria",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 11.074967,
    lat: 60.793273
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Harstad - Clarion Collection Hotel Arcticus",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 16.549455,
    lat: 68.804300
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Haugesund - Clarion Collection Hotel Amanda",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.267026,
    lat: 59.413219
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Haugesund - Clarion Collection Hotel Amanda",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.267026,
    lat: 59.413219
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Kolbotn - Quality Hotel Entry",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.779584,
    lat: 59.825064
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Kongsberg - Quality Hotel Grand",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 9.649631,
    lat: 59.669074
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Kristiansand - Clarion Hotel Ernst - Comfort Hotel Kristiansand",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 7.992871,
    lat: 58.144378
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Kristiansund - Quality Hotel Grand",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 7.731141,
    lat: 63.110111
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Langesund - Quality Hotel Skjærgården",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 9.744919,
    lat: 59.014221
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Larvik - Quality Hotel Grand Farris",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.029468,
    lat: 59.051057
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Lillehammer - Clarion Collection Hotel Hammer",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.462435,
    lat: 61.119313
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Mo i Rana - Clarion Collection Hotel Helma",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 14.139233,
    lat: 66.308763
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Clarion Collection Hotel Bastion",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.744938,
    lat: 59.908243
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Clarion Collection Hotel Gabelshus",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.709002,
    lat: 59.913727
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Clarion Hotel Oslo",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.756872,
    lat: 59.907678
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Comfort Hotel Grand Central",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.751240,
    lat: 59.910824
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Comfort Hotel Xpress Youngstorget",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.749557,
    lat: 59.916439
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Quality Hotel 33",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.818299, 
    lat: 59.928761
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Comfort Hotel Karl Johan",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.746119,
    lat: 59.911853
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Clarion Hotel The Hub",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.750042,
    lat: 59.912540
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Clarion Collection Hotel Savoy",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.738558,
    lat: 59.916783
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Comfort Hotel Xpress Central Station",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.748729,
    lat: 59.910668
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Oslo - Comfort Hotel Xpress Central Station",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.748729,
    lat: 59.910668
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Porsgrunn - Comfort Hotel Porsgrunn",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 9.657290,
    lat: 59.140392
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Sandefjord - Clarion Collection Hotel Atlantic",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.224580,
    lat: 59.133112
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Sandnes - Quality Hotel Residence",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.738487,
    lat: 58.851605
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Sarpsborg - Quality Hotel Sarpsborg",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 11.064780,
    lat: 59.296204
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Skien - Clarion Collection Hotel Bryggeparken",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 9.612549,
    lat: 59.205225
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Stavanger - Clarion Hotel Air",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.621056,
    lat: 58.887898
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Stavanger - Clarion Hotel Energy",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.688451,
    lat: 58.953596
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Stavanger - Clarion Hotel Stavanger",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.728708,
    lat: 58.967527
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Stavanger - Quality Airport Hotel Stavanger",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.628715,
    lat: 58.893253
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Stavanger - Clarion Collection Hotel Skagen Brygge",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.730139,
    lat: 58.972010
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Steinkjer - Quality Hotel Grand",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 11.495896,
    lat: 64.013482
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Stjørdal - Quality Airport Hotel Værnes",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.920163,
    lat: 63.467868
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Tromsø - Quality Hotel Saga",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 18.957638,
    lat: 69.648115
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Tromsø - Clarion Hotel The Edge",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi.",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 18.956773,
    lat: 69.647423
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Trondheim - Clarion Hotel Trondheim",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.401881,
    lat: 63.439975
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Trondheim - Quality Hotel Augustin",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.392608,
    lat: 63.430778
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Trondheim - Quality Hotel Panorama",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.374952,
    lat: 63.359368
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Tønsberg - Quality Hotel Tønsberg",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 10.407619,
    lat: 59.264816
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Ulsteinvik - Quality Hotel Ulstein",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 5.849424,
    lat: 62.340882
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Ålesund - Quality Hotel Ålesund",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 6.155117,
    lat: 62.475691
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Ensomt juletre søker gaver",
    by: "Ålesund - Quality Hotel Waterfront",
    message: "Hvert år i førjulstiden står det juletrær i hotellobbyene våre. Klare til å ta imot gaver fra storhjertede fremmede og så gi dem videre til barn i nærområdet som trenger litt ekstra julemagi. I år er det kanskje viktigere enn tidligere at julen føles så normal som mulig. <br> <br> *Ikke alle hotell har trærne oppe like lenge, så for å være sikker på at du kommer til et pyntet tre, ta turen en gang melllom 1. og 16. desember. *",
    link: "https://www.nordicchoicehotels.no/kampanjer-og-tilbud/ensomt-juletre/?gclid=Cj0KCQiAnuGNBhCPARIsACbnLzqwY4tVClgiZGIw6ikIp0SWT1P5W1MzyFLlNJ-HSorRH1qypCkOLsEaAmPtEALw_wcB",
    lng: 6.146387,
    lat: 62.470064
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Sveio Frivilligsentral (drevet av Kirkens Bymisjon)",
    by: "Sveio",
    message: "Juletreet med ønskjer blir som vanleg satt opp på Oasen Storsenter, så her kan du velge deg eit eller fleire ønskjer som du vil innfri 🎄 Om du ønskjer å bidra, men ikkje har tenkt deg fysisk ut på julehandel- ta gjerne kontakt. <br> Det er mange ulike måtar du kan bidra på 🧡",
    link: "https://www.facebook.com/SveioFrivilligsentral",
    lng: 5.360744,
    lat: 59.543592
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Vennesla - Julegavetreet",
    by: "Vennesla",
    message: "Har du lyst å glede noen med å få oppfylt sitt julegaveønske? 🎁 Julegavetreet er på plass i gågata (utenfor Kulturhuset) i år igjen 😊 Hvis du ønsker å bidra kan du ta med en lapp fra treet, kjøpe gaven og levere den i Servicetorget på Herredshuset i Vennesla sentrum. De passer på at gavene kommer til riktig person 😊 Under Julegada har Servicetorget åpent mandag-fredag fra kl 10-20, lørdag kl. 12-18 og søndag kl 13-18.",
    link: "https://www.facebook.com/117394291637979/posts/4876072829103411/?d=n",
    lng: 7.969101,
    lat: 58.276414
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Triaden Lørenskog Storsenter",
    by: "Lørenskog",
    message: "Gi en julegave til noen som trenger det  <br><br>Som i fjor hjelper vi Hjelpende Hender  å samle inn julegaver til de som trenger det. Utenfor Christiania Glasmagasin henger det lapper med julegaveønsker. <br>Vi og Hjelpende Hender setter stor pris på alle bidrag",
    link: "https://www.facebook.com/158966577705/posts/10157092214967706/?d=n",
    lng: 10.953053,
    lat: 59.919455
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Julegavetreet 2021 Evje og Hornnes Røde Kors ",
    by: "Evje sentrum, Coop Byglandsfjord, Joker Bygland og i Åseral",
    message: "ulegavetreet står i sentrum på Evje i morgen også fra kl.11.00 ved boden til Evje og Hornnes Sanitetsforening. Det er mange lapper igjen som venter på å bli oppfylt. I tillegg er det tre ved Coop på Byglandsfjord, Joker på Bygland og i Åseral. Har du lyst å oppfylle vet ønske men ikke skal på handletur så kan du vippse til 129064 så kan vi ordne en gave 😊",
    link: "https://www.facebook.com/1646305135627967/posts/3086856161572850/?d=n",
    lng: 7.786626,
    lat: 58.580494
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Julegavetreet 2021 Evje og Hornnes Røde Kors ",
    by: "Evje sentrum",
    message: "Julegavetreet står i sentrum på Evje i morgen også fra kl.11.00 ved boden til Evje og Hornnes Sanitetsforening. Det er mange lapper igjen som venter på å bli oppfylt. I tillegg er det tre ved Coop på Byglandsfjord, Joker på Bygland og i Åseral. Har du lyst å oppfylle vet ønske men ikke skal på handletur så kan du vippse til 129064 så kan vi ordne en gave 😊",
    link: "https://www.facebook.com/1646305135627967/posts/3086856161572850/?d=n",
    lng: 7.805781,
    lat: 58.586785
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Julegavetreet 2021",
    by: "Coop Byglandsfjord",
    message: "Julegavetreet står i sentrum på Evje i morgen også fra kl.11.00 ved boden til Evje og Hornnes Sanitetsforening. Det er mange lapper igjen som venter på å bli oppfylt. I tillegg er det tre ved Coop på Byglandsfjord, Joker på Bygland og i Åseral. Har du lyst å oppfylle vet ønske men ikke skal på handletur så kan du vippse til 129064 så kan vi ordne en gave 😊",
    link: "https://www.facebook.com/1646305135627967/posts/3086856161572850/?d=n",
    lng: 7.805542,
    lat: 58.670209
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Julegavetreet 2021",
    by: "Joker Bygland",
    message: "Julegavetreet står i sentrum på Evje i morgen også fra kl.11.00 ved boden til Evje og Hornnes Sanitetsforening. Det er mange lapper igjen som venter på å bli oppfylt. I tillegg er det tre ved Coop på Byglandsfjord, Joker på Bygland og i Åseral. Har du lyst å oppfylle vet ønske men ikke skal på handletur så kan du vippse til 129064 så kan vi ordne en gave 😊",
    link: "https://www.facebook.com/1646305135627967/posts/3086856161572850/?d=n",
    lng: 7.797972,
    lat: 58.831155
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Blåkors- AVSLUTTET FOR 2021",
    by: "Mariboes gate 4 - Oslo",
    message: "Gi en julegave som varmer til en rusavhengig eller hjemløs: <br> Hos Blåkors' lokaler i Mariboes gate 4 nede i sentrum kan du levere julegaver flere dager i uken. Gavene må være nye, pakket inn og helst merket med kjønn og størrelse dersom det er relevant for innholdet i gaven. Dørene er åpne for å ta imot gavene fra mandag til fredag klokken 08:00- 13:00 og på lørdager fra klokken 08:30- 12:30.</b>",
    link: "https://www.facebook.com/kontaktsenteret/posts/3848262255184621",
    lng: 10.750231727324795,
    lat: 59.91647335982764
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Fattighuset",
    by: "Grønlandsleiret 39 - Oslo",
    message: "Ønsker du å donere noe til fattige i Oslo? <br> Våre flinke frivillige jobber i utvidet åpningstid for å motta gaver: - Onsdager: 16:00 til 20:00 <br> Lørdager: 12:00 til 18:00 Første utvidet åpningsdag er lørdag 27. november og siste åpningsdag er 18. desember. <br> Dersom disse tidene ikke passer for deg, vennligst ring resepsjon på tlf. 478 95 268 alle hverdager fra 09:00 – 15:30. <br> I julen deler vi ut kun nye ting til våre gjester da de resten av året får brukt. <br> Økonomiske donasjoner mottas til Kontonummer - 1503.23.49002 eller på VIPPS - 12901. <br>",
    link: "https://www.facebook.com/119189971457263/posts/4748689498507264/?d=n",
    lng: 10.767012684995354,
    lat: 59.91112434698297
},
{
    avatarUrl: "../img/gaveicon.svg",
    navn: "Gateteam Oslo",
    by: "Grønlandsleiret 39 - Oslo",
    message: "Ønsker du å bli med å utgjøre en forskjell? Da er du hjertelig velkommen til å bidra en- eller flere onsdager hos Gateteam Oslo. De trenger hyggelige mennesker til varierte oppgaver, slik at de på gata kan få varme klær, mat og drikke etc. Gateteam Oslo møter på Jernbanetorget hver onsdag kl 18. Her deler de ut soveposer, sko, varme klær, mat, varm drikke og andre nødvendigheter. I koronatiden stiller de med ambulerende team som går rundt i gatenne og deler ut ferdiglagde poser. Bidra ved å kontakte dem via deres nettside ved å trukke på (Trykk her for mer info).",
    link: "https://gateteamoslo.no/gi-bidrag/",
    lng: 10.750108629759245,
    lat: 59.91117897393324
},
]


const addMarker = (innsamlinger) => {

    const div = document.createElement("div")
    div.className = "innsamlingMarker"
    const marker = new mapboxgl.Marker(div)
    const minPopup = new mapboxgl.Popup()
    div.style.backgroundImage = `url(${innsamlinger.avatarUrl})`
    
    minPopup.setHTML(`
    <div class="popup-container">
        <img class="kart-avatar" src="${innsamlinger.avatarUrl}" alt="bilde">
        <h3>${innsamlinger.navn}</h3>
        <p>${innsamlinger.by}</p>
        <div>
        <a target="_blank" href="${innsamlinger.link}"><b>Trykk her for mer info</b></a>
        <p>${innsamlinger.message}</p>
        </div>
    </div>
    `)
    marker.setLngLat([innsamlinger.lng, innsamlinger.lat])
    marker.addTo(map) 
    marker.setPopup(minPopup)
}

const addMarkers = () => {
    for(const innsamling of innsamlinger) {
        addMarker(innsamling)
    }
}

map.on("load", addMarkers)



const flyTil = (evt) => {
    const knapp = evt.target
    const lng = knapp.dataset.lng 
    const lat = knapp.dataset.lat

    map.flyTo({
        center: [lng, lat],
        zoom: 6
    })
}

landsdelKnapper.onclick = flyTil