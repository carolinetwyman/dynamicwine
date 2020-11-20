
// from project 2
// ---------------------------------------------------------------------------
// Event listener for when the indoorOutdoor dropdown is selected
$("#indoorOutdoorSelect").change(function (event) {
   event.preventDefault();

   // Get the value from the indoorOutdoor dropdown
   indoorOutdoorVar = document.getElementById("indoorOutdoorSelect").value

   // retrieve google api link without the query parameter
   var mapLink = $('#map').attr('src');
   var mapBaseLink = mapLink.split("q=")[0];

   // set the new link based on workout location value selected
   var updatedMapLink = mapBaseLink + (indoorOutdoorVar == "indoor" ? "q=gym" : "q=park");
   $('#map').attr("src", updatedMapLink);

   // If both a location and category have been selected
   // (i.e. the values of the variables is no longer equal to zero)
   // Run the gettingTheExercises function
   if (indoorOutdoorVar != 0 && categoryVar != 0) {
       gettingTheExercises()
   }
})
// ---------------------------------------------------------------------------
