mapboxgl.accessToken = 'pk.eyJ1IjoidXhsaW5oIiwiYSI6ImNrOGZ0eWN2YzA4NWozaW9pMXRldXloZnMifQ.CZVP7vDSVxGDVdE2UTZdSw';

const landsdelKnapper = document.querySelector("#landsdelKnapper")

const map = new mapboxgl.Map({
container: 'kartet', //fordi id="kartet" i hmtl
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 6,
center: [11.305158, 63.690208],
});

const innsamlinger = [
    {
        avatarUrl: "../img/gaveicon.svg",
        navn: "God jul, lille venn",
        by: "Drammen",
        link: "https://www.facebook.com/events/299953364576491",
        lng: 10.205373,
        lat: 59.735535
    },
    {
        avatarUrl: "../img/gaveicon.svg",
        navn: "God jul, lille venn",
        by: "Lier",
        link: "https://www.facebook.com/events/2083795035083929/",
        lng: 10.303734,
        lat: 59.810786
    },
    {
        avatarUrl: "../img/gaveicon.svg",
        navn: "God Jul, lille venn",
        by: "Øvre Eiker",
        link: "https://www.facebook.com/events/347435896702633/",
        lng: 9.909805,
        lat: 59.776149
    },
    {
        avatarUrl: "../img/gaveicon.svg",
        navn: "Med hjerte for Solør",
        by: "Solør",
        link: "https://www.facebook.com/Hjerteforsolor/",
        lng: 12.070018,
        lat: 60.608775
    },
    {
        avatarUrl: "../img/gaveicon.svg",
        navn: "Ringerike Frivillighetssentral",
        by: "Ringerike",
        link: "https://ringerike.frivilligsentral.no/aktivitet?julegaveinnsamling&Id=3228",
        lng: 10.259873,
        lat: 60.171106
    },
    {
        avatarUrl: "../img/gaveicon.svg",
        navn: "Hjelpende hender",
        by: " ",
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
        <h4>Link:</h4>
        <a href="${innsamlinger.link}">${innsamlinger.link}</a>
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