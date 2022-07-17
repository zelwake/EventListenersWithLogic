$("#firstButton").click(() => {
    console.log("Yeah, you clicked me")
})

$("#secondButton").click(() => {
    $("#firstButton").text("Clicked");
})

let colorInput = $("#colorInInput").val();
console.log($("#colorInInput").val())

$("#thirdButton").click(() => {
    $("button").css("background-color", colorInput);
})