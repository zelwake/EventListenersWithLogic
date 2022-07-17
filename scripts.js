$("#firstButton").click(() => {
    console.log("Yeah, you clicked me")
})

$("#secondButton").click(() => {
    $("#firstButton").text("Clicked");
})

$("#thirdButton").click(() => {
    let colorInput = $("#colorInInput").val();
    $("button").css("background-color", colorInput);
})