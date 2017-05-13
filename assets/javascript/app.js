
var search;
var url

$("#getArticles").on("click", function(event) {
    event.preventDefault();
    var search = $("#search").attr("value");
	// var recordNum = $("#numArticles").attr("value");
	// var startYear = ($("startYear").attr("value") + "0101");
	// var endYear = ($("#endYear").attr("value") + "0101");

	var url = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0437c28d785848028738af22ab9d1e6e&q=" + search)
});

$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
});


// + "&begin_date=" + startYear + "end_date=" + endYear)


	