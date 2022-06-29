// for use of libraries, to use more physics.. Instructor suggested to use 'Box2D'
class Car {
  constructor(x, y, width, height) {
    // Dimensions of the car..
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // few physics of the car..to make the car(virtual) move like the car(actual)
    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0; // for rotations..

    // controlling the car movement through keyboard-keys..
    this.controls = new Controls();
  }

  // Move the car, as per the controls..
  updatePosition() {
    this.#move();
  }

  #move() {
    if (this.controls.forward) {
      //this.y -= 2; // !! Y-axis, is reverse in a computer..
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      //this.y+=2
      this.speed -= this.acceleration;
    }

    // Applying physics..
    // for ""forward""..
    if (this.speed > this.maxSpeed)
      // to avoid: over-speed.
      this.sped = this.maxSpeed;
    // for ""reverse""
    if (this.speed < -this.maxSpeed / 2)
      // /2..?: for reverse, not as speed as forward,
      this.speed = -this.maxSpeed / 2;

    // friction..
    if (this.speed > 0) this.speed -= this.friction;
    if (this.speed < 0) this.speed += this.friction; // for reverse..
    if (Math.abs(this.speed) < this.friction) this.speed = 0; // to not to get bounce between fiction update and decrease..

    // Moving Left..
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1; // for fix: in reverse, L becoming R, and R becoming L.
      if (this.controls.left) {
        //   this.x -= 2;
        this.angle += 0.03 * flip; // for forward, it doesn't have effect. For reverse, flips the sign of angle.
      }

      // Moving Right..
      if (this.controls.right) {
        //   this.x += 2;
        this.angle -= 0.03 * flip; // same as aabove..
      }
    }

    // move the car..
    // this.y -= this.speed;    // to move like a toy-car..
    /// Move like the actual car.. where the direction is, go that way..
    this.x -= Math.sin(this.angle) * this.speed; // *, does scaling to unit-circle
    this.y -= Math.cos(this.angle) * this.speed; // same here..
  }

  draw(context) {
    // for rotation..
    context.save();
    context.translate(this.x, this.y); // translate to the point, where we want to rotate..
    context.rotate(-this.angle); // rotate the car, by that angle..

    context.beginPath();
    // our car wll be a simple rectangle..
    context.rect(
      //   this.x - this.width / 2, // }
      //   this.y - this.height / 2, // } These both define the center of the rectangle..
      -this.width / 2, // }
      -this.height / 2, // } above are not needed, as above, translating thise..
      this.width,
      this.height
    );
    context.fill(); // fill it..
    context.restore(); // restore it, else, it translate and rotate infinitely in each frame..
  }
}
