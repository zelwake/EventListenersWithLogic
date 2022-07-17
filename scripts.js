$("#firstButton").click(() => {
    console.log("Yeah, you clicked me")
})

$("#secondButton").click(() => {
    $("#firstButton").text("Clicked");
})

$("#thirdButton").click(() => {
    $("button").css("background-color","red");
})