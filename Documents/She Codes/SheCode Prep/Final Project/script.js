// function buyShoe() {
//   var yourName = prompt("Whats your name?");
//   var shoeType = prompt("What type of shoe do you want");
//   var shoeNumber = prompt("Whats your shoe number");
//   var yourOrder = prompt(
//     "Hello" + yourName + "your" + shoeType + "" + "will be delivered soon"
//   );

//   if (shoeNumber < 10) {
//     alert("We dont have that shoe,Try next store");
//   }
// }
// var onClick = document.queryCommand("button");
// onclick.addEventListener("click", buyShoe);

function yourOrders() {
  var yourName = prompt("Whats your name?");
  var shoeType = prompt("What type of shoe do you want");
  var shoeNumber = prompt("Whats your shoe number");

  if (shoeNumber < 10) {
    alert("We dont have that shoe,Try next store");
  } else {
    alert(
      "Hello" +
        "" +
        yourName +
        "" +
        "your" +
        shoeType +
        "" +
        "will be delivered soon"
    );
  }
}

var onClick = document.querySelector("button");
onClick.addEventListener("click",yourOrders)
