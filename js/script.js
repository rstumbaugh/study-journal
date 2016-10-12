String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}




$(document).ready( function() {

	console.log($(window).width);
	var section = getQueryVariable("section");
	section = section.capitalizeFirstLetter();

	var title;

	if (section === "Adidas") {
		title = "adidas";
	} else if (section === "Mel") {
		title = "Mel Van Londen";
	} else if (section === "Gary") {
		title = "Gary Swart";
	} else {
		title = section;
	}

	$(".hero h1").text(title);

	$row = $("<div/>", {"class": "row"});
	$col = $("<div/>", {"class": "content col-md-10 col-md-offset-1"});
	$text = $("<div/>");

	$text.load("text/"+section+".txt");

	$button = $("<a/>", { "href": "index.html", "class": "home-btn col-md-2 col-md-offset-5"});
	$button.text("Back to home");

	$text.appendTo( $col );
	$button.appendTo( $col );

	$col.appendTo( $row );

	$row.appendTo( $(".content-container"));

});


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  alert('Query Variable ' + variable + ' not found');
}