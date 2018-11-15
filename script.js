// script.js

///////////////////////////////////////////////////////////////////////////////
//
// This the Javascript file we'll use to make our leaflet map
// Based on Maptime Boston leaflet tutorial:
// https://maptimeboston.github.io/leaflet-intro/
//
///////////////////////////////////////////////////////////////////////////////

// initialize the map
// We pass the div with id "map" to the L.map function
var map = L.map('map')
    // set initial map view to Boston with zoom level 13
    .setView([39.47, -95.41], 4);

// load a tile layer
// loading the base layer of map tiles using a URL template
// this template ({z}/{x}/{y}) allows leaflet to locate tiles with the
// correct zoom, x, and y coordinates

/*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
    // use the .addTo method to add the tile layer to the map.
    .addTo(map);*/

// FIXME: Load CSV data into leaflet markers
/*try to load csv*/

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})
.addTo(map);


// FIXME: Add styling to markers
// Use airport.png
/*creating variable for the airport png*/
var airportIcon = L.icon({
    iconUrl: 'star.png',
    iconSize: [40,40]
});
 /*adding custom layer as parameter to omnivore csv that allows us to specify custom icons*/
var customLayer = L.geoJson(null  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon:airportIcon});
    }
});
/*adding the airport locations with the new custom layer markers*/
var airportsLayer = omnivore.csv('Duluth.csv', null, customLayer);

airportsLayer.addTo(map);