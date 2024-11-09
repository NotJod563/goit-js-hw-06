class Storage {
    #items; // Оголошення приватної властивості
  
    constructor(initialItems) {
      this.#items = initialItems; // Ініціалізація приватної властивості
    }
  
    getItems() {
      return this.#items; // Повертає масив поточних товарів
    }
  
    addItem(newItem) {
      this.#items.push(newItem); // Додає новий товар до масиву
    }
  
    removeItem(itemToRemove) {
      this.#items = this.#items.filter(item => item !== itemToRemove); // Видаляє товар з масиву
    }
  }
  
  // Код для перевірки
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  