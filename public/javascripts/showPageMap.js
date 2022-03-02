mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/dark-v10", // style URL
  center: campground.geometry.coordinates, //[-74.5, 40], // starting position [lng, lat]
  zoom: 7, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl(), "bottom-left");

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h6>${campground.title}<p>${campground.location}</p></h6>`
    )
  )
  .addTo(map);
