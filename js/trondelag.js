mapboxgl.accessToken = 'pk.eyJ1IjoidXhsaW5oIiwiYSI6ImNrOGZ0eWN2YzA4NWozaW9pMXRldXloZnMifQ.CZVP7vDSVxGDVdE2UTZdSw';

const landsdelKnapper = document.querySelector("#landsdelKnapper")

const map = new mapboxgl.Map({
container: 'kartet', //fordi id="kartet" i hmtl
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 5,
center: [11.305158, 63.690208],
});

const innsamlinger = [
    {
        avatarUrl: '../img/jacqueline.png',
        navn: "God jul, lille venn",
        by: "Drammen",
        link: "https://www.facebook.com/events/299953364576491",
        lng: 10.779949,
        lat: 59.914087
    },
    {
        avatarUrl: "../img/amanda.png",
        navn: "Amanda",
        link: "Hei",
        lng: 10.953983,
        lat: 59.924471
    },
    {
        avatarUrl: '../img/christina.png',
        navn: "Christina",
        link: "Hei",
        lng: 10.199239,
        lat: 59.921052
    },
    {
        avatarUrl: '../img/linh.png',
        navn: "Linh",
        link: "Hei",
        lng: 10.766111,
        lat: 59.921515
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
        <h3>Link:</h3>
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
        zoom: 14
    })
}

landsdelKnapper.onclick = flyTil