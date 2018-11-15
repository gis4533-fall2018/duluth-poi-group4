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
    .setView([46.7367, -92.10015], 11);

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
var OpenMapSurfer_Grayscale = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
OpenMapSurfer_Grayscale.addTo(map);


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


    airportsLayer.bindPopup(function(layer){
        var Address = layer.feature.properties.Address;
        var Attraction = layer.feature.properties.Attraction;
        var Description = layer.feature.properties.Description;
        var Website = layer.feature.properties.Website;
		    
            console.log(layer.feature.properties)
                        
        var html = "<table><tr><td>Name: </td><td>"+Attraction+"</td></tr>"+"<tr><td>Address: </td><td>"+Address+"</td></tr>"+"<tr><td>Description: </td><td>"+Description+"</td></tr>"+"<tr><td>Website: </td><td>"+Website+"</td></tr></table>";

		    return html;
		})
	  	.addTo(map);