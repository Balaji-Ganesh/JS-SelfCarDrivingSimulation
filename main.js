const canvas = document.getElementById("simulationCanvas");
// Set the dimension of the road(canvas)..
canvas.height = window.innerHeight; // moved to animate(), to remove the past traces of the car.
canvas.width = 200;

// Cars on the road..
const context = canvas.getContext("2d"); // contains, all the mehtods to draw the car..
const road = new Road(canvas.width / 2, canvas.width * 0.9); // x, width
const car = new Car(100, 100, 30, 50); // x, y, width,  height (in pixels)
car.draw(context);

// make the car move (appearance purpose)
animate();

function animate() {
  car.updatePosition(); // Update the positions (based on the keys pressed)
  canvas.height = window.innerHeight; // Adjusting the dimensions, this way, will re-draw the canvas.. thus, all the past traces of car gets vanished.
  road.draw(context); // first, draw the road..
  car.draw(context); // Re-Draw the car, acc. to the keys movement.
  requestAnimationFrame(animate); // this, calls the animate() each frame, gives ILLUSION of moving
}
