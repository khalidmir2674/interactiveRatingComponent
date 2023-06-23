$(document).ready(function() {
    $(".thankDiv").hide();
  } );


$(".ratebtn").on("click", function(){
    var chosenbtnRating = $(this).html();
    
    btnPressed(chosenbtnRating);
    thankMsgShow(chosenbtnRating);
});

$(".submitbtn").on("click", function(){
    $(".RatingDiv").hide();
    $(".thankDiv").show();
});

function btnPressed(btnValue) {
    if (btnValue == 1){
        $("#btn1").addClass("ratebtnPressed");
    } else if (btnValue == 2) {
        $("#btn2").addClass("ratebtnPressed");
    } else if (btnValue == 3) {
        $("#btn3").addClass("ratebtnPressed");
    } else if (btnValue == 4) {
        $("#btn4").addClass("ratebtnPressed");
    } else {
        $("#btn5").addClass("ratebtnPressed");
    }
    return btnValue;
}

function thankMsgShow(btnValueResult) {
    $(".ratingResult").text("You selected "+ btnValueResult +" out of 5")
    
}

    