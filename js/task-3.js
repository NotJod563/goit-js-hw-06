class StringBuilder {
    #value; // Оголошення приватної властивості
  
    constructor(initialValue) {
      this.#value = initialValue; // Ініціалізація приватної властивості
    }
  
    getValue() {
      return this.#value; // Повертає поточне значення value
    }
  
    padEnd(str) {
      this.#value += str; // Додає str в кінець value
    }
  
    padStart(str) {
      this.#value = str + this.#value; // Додає str на початок value
    }
  
    padBoth(str) {
      this.padStart(str); // Додає str на початок
      this.padEnd(str);   // Додає str в кінець
    }
  }
  
  // Код для перевірки
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
  