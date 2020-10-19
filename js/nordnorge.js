mapboxgl.accessToken = 'pk.eyJ1IjoidXhsaW5oIiwiYSI6ImNrOGZ0eWN2YzA4NWozaW9pMXRldXloZnMifQ.CZVP7vDSVxGDVdE2UTZdSw';

const landsdelKnapper = document.querySelector("#landsdelKnapper")

const map = new mapboxgl.Map({
container: 'kartet', //fordi id="kartet" i hmtl
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 10,
center: [10.774653, 59.918145],
});

const innsamlinger = [
    {
        navn: "Jacqueline",
        tekst: "Hei",
        avatarUrl: '../img/jacqueline.png',
        lng: 10.779949,
        lat: 59.914087
    },
    {
        navn: "Amanda",
        tekst: "Hei",
        avatarUrl: "../img/amanda.png",
        lng: 10.953983,
        lat: 59.924471
    },
    {
        navn: "Christina",
        tekst: "Hei",
        avatarUrl: '../img/christina.png',
        lng: 10.199239,
        lat: 59.921052
    },
    {
        navn: "Linh",
        tekst: "Hei",
        avatarUrl: '../img/linh.png',
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
    <img src="${innsamlinger.avatarUrl}" alt="bilde">
    <h3>${innsamlinger.navn}</h3>
    <p>${innsamlinger.tekst}</p>
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