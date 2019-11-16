//modal box
//var modal = document.getElementById('myModal');
//var viewOnly = document.getElementById("viewOnly");
//
//viewOnly.onclick = function () {
//    modal.style.display = "none";
//    document.getElementById("modalRemoved").innerHTML = "You are disabled to do anything here, refresh page to do any editting with an assigned little world.";
//};

//$.getJSON("http://localhost:8000/datasml.json", function (json) {
//    console.log(json.hex);
//});

//$(document).ready(function(){
//    $("#info").load("test.txt", function(){
//        console.log("test")
//    });   
//});

$(document).ready(function(){
   
    
//var modal = document.getElementById('myModal');
//var viewOnly = document.getElementById("viewOnly");

//viewOnly.onclick = function () {
//    modal.style.display = "none";
//    document.getElementById("modalRemoved").innerHTML = "You are disabled to do anything here, refresh page to do any editting with an assigned little world.";
//};
//    
    
   var data = $.getJSON("data.json");
    console.log(data);
   $.getJSON( "data.json", function( data ) {
       console.log(data);
  
  $.each( data, function( key, val ) {
    console.log(key);
      console.log('here');
  });
 
  
});
   
//    $("#info").load("data.json", function(){
//        console.log("test")
//    });   
});