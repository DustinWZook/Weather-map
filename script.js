let key = "pk.eyJ1IjoiZHVzdGlud3pvb2siLCJhIjoiY2xlc3VpbXFkMTN5bzN6cTZ1bThqdTBhZCJ9.dt2zA9emvzJHEQNLnN91iA";


mapboxgl.accessToken = 'pk.eyJ1IjoiZHVzdGlud3pvb2siLCJhIjoiY2xlc3VpbXFkMTN5bzN6cTZ1bThqdTBhZCJ9.dt2zA9emvzJHEQNLnN91iA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-98.35, 39.50], // starting position [lng, lat]
    zoom: 4 // starting zoom
});
