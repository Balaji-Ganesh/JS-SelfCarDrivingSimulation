class Road {
  constructor(x, width, laneCount = 5) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    // Setting the left and right boundaries..
    this.left = x - width / 2;
    this.right = x + width / 2;

    // Setting the top and bottom boundaries..
    const infinity = 10000000; // can use JS's, but that makes things wierd here.
    this.top = -infinity; // !!, Y DECs vertically up in computers.
    this.bottom = infinity;
  }

  draw(context) {
    context.lineWidth = 5;
    context.strokeStyle = "white";

    // Left boundary of the road
    // context.beginPath();
    // context.moveTo(this.left, this.top); //
    // context.lineTo(this.left, this.bottom); // drawing a line on left...
    // context.stroke();

    // // right boundary of the road.
    // context.beginPath();
    // context.moveTo(this.right, this.top); //
    // context.lineTo(this.right, this.bottom); // drawing a line on right...
    // context.stroke();

    // draw boundaries + lanes of the road too..
    for (let i = 0; i <= this.laneCount; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);

      // to make thie lines, appear like road-lines..
      if (i > 0 && i < this.laneCount)
        context.setLineDash([40, 20]); //  [20pixels-dash, 20pixels-break]
      else context.setLineDash([]); // for left and right boundaries-- no need of dashed
      context.beginPath();
      context.moveTo(x, this.top); //
      context.lineTo(x, this.bottom); // drawing a line on right...
      context.stroke();
    }
  }
}
