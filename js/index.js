$(document).ready(function() {
  var i = 0;
  var y = 0;
  y = Math.floor(Math.random() * 10);
  
  var quoteText = "";

  $.get(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=42&callback=",
    function(json) {
      quoteText = json[y].content;
      $("#quote").html(
        "<p><i class='fa fa-quote-left fa-2x fa-pull-left fa-border' aria-hidden='true'></i>" +
          json[y].content +
          "</p><p>&mdash;" +
          json[y].title +
          "</p>" +
          "</div>"
      );
    }
  );

  $("#getQuote").on("click", function() {
    i = Math.floor(Math.random() * 42);

    var randColor = Math.floor(Math.random() * 10);
    switch (randColor) {
      case 0:
        randColor = "#0074D9";
        break;
      case 1:
        randColor = "#7FDBFF";
        break;
      case 2:
        randColor = "#39CCCC";
        break;
      case 3:
        randColor = "#3D9970";
        break;
      case 4:
        randColor = "#001f3f";
        break;
      case 5:
        randColor = "#2ECC404";
        break;
      case 6:
        randColor = "#F98866";
        break;
      case 7:
        randColor = "#693D3D";
        break;
      case 8:
        randColor = "#505160";
        break;
      case 9:
        randColor = "#003B46";
        break;
      case 10:
        randColor = "#5D535E";
        break;
    }

    $("body").css({ "background-color": randColor, transition: "1s ease"});

    $("#quote").css({ color: randColor, transition: "1s ease" });
    $.get(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" +
        i +
        "&callback=",
      function(json) {
        quoteText = json[y].content;

        $("#quote").html(
          "<p><i class='fa fa-quote-left fa-2x fa-pull-left fa-border' aria-hidden='true'></i>" +
            json[y].content +
            "</p><p>&mdash;" +
            json[y].title +
            "</p>" +
            "</div>"
        );
      }
    );
  });

  $("#tweet").on("click", function() {
    var url = "https://twitter.com/intent/tweet?hashtags=quote&text=";
    var theQuote ="";
    theQuote = quoteText.replace("<p>","");
    theQuote = theQuote.replace("</p>","");
    theQuote = theQuote.replace("<strong>","");
    theQuote = theQuote.replace("</strong>","");
    theQuote = encodeURIComponent(theQuote);

    url += theQuote;

    window.open(url);
  });
});
