$("#search").click(function {
	var search = $(this).attr("value");
 });


	var recordNum = $(this).attr("data-name");
	var startYear = (($(this).attr("data-name") + "0101");
	var endYear = (($(this).attr("data-name") + "0101");




var url = ("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0437c28d785848028738af22ab9d1e6e&q=" + search + "&begin_date=" + startYear + "end_date=" + endYear)
            https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369f…547cd47b931d8cbc56b:0:74623931&q=red&begin_date=19970101&end_date=19980101

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

	// $("#").on("click", function(event) {
 //        event.preventDefault();

 //        var movie = $("#movie-input").val();
 //        // Write code to add the new movie into the movies array
 //        movies.push(movie);
 //        console.log(movies);
 //        // The renderButtons function is called, rendering the list of movie buttons
 //        renderButtons();
 //      });
 //    var var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
 //    url += '?' + $.param({'api-key': "0437c28d785848028738af22ab9d1e6e",'q': "things"

 //      $.ajax({
 //          url: queryURL,
 //          method: "GET"
 //        })
 //        .done(function(response) {
 //          var results = response.data;