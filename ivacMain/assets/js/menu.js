$(".imgMenuClose").click(function(){
    $(".imgMenuClose").hide();
    $(".imgMenuOpen").show();
    $("#openMenu").show();
});

$(".imgMenuOpen").click(function(){
    $(".imgMenuOpen").hide();
    $(".imgMenuClose").show();
    $("#openMenu").hide();
});

$("#arrow").click(function(){
    $("#FL").hide();
     $("#SL").show(); 
});


$(".logOutButton").click(function(){
    $("#SL").hide();
     $("#FL").show(); 
});