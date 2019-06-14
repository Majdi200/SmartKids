// var canvas = document.getElementById("example");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx.fillRect(25, 25, 50, 50);
// ctx.fillText("hey", 10, 50);

// var canvas = document.getElementById("example");
// var cty = canvas.getContext("2d");
// cty.fillStyle = "black";
// ctx.fillRect(45, 185, 50, 50);
// ctx.fillRect(65, 125, 50, 50);

// var canvas = document.getElementById("example");
// var ctz = canvas.getContext("2d");
// ctz.fillStyle = "yellow";
// ctz.strokeStyle = "black";
// ctz.fillRect(65, 125, 50, 50);

// function drax(x, y) {
//   const tCanvas = document.getElementById("example");
//   const ctx = tCanvas.getContext("2d");
//   ctx.fillStyle = "green";
//   ctx.fillRect(x, 0, 50, 50);
// }

////////////////////////////////////
// to create grid with color
/////////////////////////////////////
// function draw() {
//   var canvas = document.getElementById("example");
//   var ctx = canvas.getContext("2d");
//   for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       ctx.fillStyle =
//         "rgb(" +
//         Math.floor(255 - 42.5 * i) +
//         ", " +
//         Math.floor(255 - 42.5 * j) +
//         ", 100)";
//       ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
//   }
// }
// draw();

//////////////////////////////////////////////// */
//// daw circles :
// function draw() {
//   var canvas = document.getElementById("example");
//   var ctx = canvas.getContext("2d");
//   for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       ctx.strokeStyle =
//         "rgb(0, " +
//         Math.floor(255 - 42.5 * i) +
//         ", " +
//         Math.floor(255 - 42.5 * j) +
//         ")";
//       ctx.beginPath();
//       ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
//       ctx.stroke();
//     }
//   }
// }
// draw();

//////////////////////////////////////////////////////////

// var canvas = document.getElementById("example");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 150);
// var color = {
//   red: Math.floor(Math.random() * 255),
//   green: Math.floor(Math.random() * 255),
//   blue: Math.floor(Math.random() * 255),
//   rgb: function() {
//     return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
//   }
// };

// function updateCanvas() {
//   //  color.red   = (color.red+1) % 255
//   color.blue = (color.blue + 1) % 255;
//   // color.green = (color.green+1) % 255

//   ctx.clearRect(0, 0, 480, 270);
//   ctx.fillStyle = color.rgb();
//   ctx.fillRect(0, 0, 150, 150);
//   window.requestAnimationFrame(updateCanvas);
// }

// window.requestAnimationFrame(updateCanvas);
