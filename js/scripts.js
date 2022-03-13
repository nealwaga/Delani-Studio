$("#design").click(function(){
    $("#p").toggle();
});

$("#development").click(function(){
    $("#b").toggle();
});

$("#productDevelopment").click(function(){
    $("#r").toggle();
});

$("po").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "pink");     
});