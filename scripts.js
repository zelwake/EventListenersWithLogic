$("#firstButton").click(() => {
    console.log("Yeah, you clicked me")
})

$("#secondButton").click(() => {
    $("#firstButton").text("Clicked");
})

//  read color in input once a never update
//  let colorInput = $("#colorInInput").val();

$("#thirdButton").click(() => {
//  update variable with each click based on input
    let colorInput = $("#colorInInput").val();
    $("button").css("background-color", colorInput);
})