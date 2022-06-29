class Controls {
  constructor() {
    // Initially, all are set to false. They change, based on the keys pressed.
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    // Have the keyboard-key listeners..
    this.#addKeyboardListeners(); // prefix as '#' -> to tell that, this is a private method.
  }

  #addKeyboardListeners() {
    // When a (arrowKey) is PRESSED..
    document.onkeydown = (event) => {
      // If this is made as normal function, 'this' won't refer to class..
      // depending on the key pressed, set that to true
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
    //   console.table(this); // Log the entire object..
    };
    // When a (arrowKey) is RELEASED..
    document.onkeyup = (event) => {
      // If this is made as normal function, 'this' won't refer to class..
      // depending on the key released, set that to false
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
    //   console.table(this); // Log the entire object..
    };
  }
}
