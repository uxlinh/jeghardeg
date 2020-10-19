mapboxgl.accessToken = 'pk.eyJ1IjoidXhsaW5oIiwiYSI6ImNrOGZ0eWN2YzA4NWozaW9pMXRldXloZnMifQ.CZVP7vDSVxGDVdE2UTZdSw';

const landsdelKnapper = document.querySelector("#landsdelKnapper")

const map = new mapboxgl.Map({
container: 'kartet', //fordi id="kartet" i hmtl
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 6,
center: [6.428956, 61.242423],
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