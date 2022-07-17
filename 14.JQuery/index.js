// $("h1").css("font-size", "5rem");
// $("h1").addClass("big-title");
// // $("h1").text("Shubham");
// // $("button").text("Shubham");
// $("button").html("<h2>Shubham</h2>");
// $("a").text("Search");
// $("a").attr("href","https://www.bing.com");
// jQuery("button").click(function(){
//     jQuery("h1").text("Shubhammm")
// })
$(document).keypress(function(e){
    $("h1").text(e.key)
})

$("h1").on("mouseover", function(){
    $("h1").css("color","blue")
})

$("h1").on("mouseout", function(){
    $("h1").css("color","black")
})

// $("button").on("click", function(){
//     $("h1").hide();
// })

// $("button").on("click", function(){
//     $("h1").fadeToggle();
// })


// $("button").on("click", function(){
//     $("h1").slideToggle();
// })


// $("button").on("click", function(){
//     $("h1").animate({ opacity: 0.5 });
// })


$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({ opacity: 0.5});
})

// $("h1").before("<button>Before Button.</button>")
// $("h1").after("<button>After Button.</button>")
// $("h1").prepend("<button>prepend Button.</button>")
// $("h1").append("<button>append Button.</button>")

// This can be done when we are adding jquery cdn in head of html.
// $(document).ready(function() {
//     $("h1").css("color", "blue");
// })
