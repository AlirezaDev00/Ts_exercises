"use strict";
class List {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    get getItems() {
        return this.items;
    }
}
class List2 {
    items = [];
    // private items: boolean[] | string[] | number[] = [];
    addItem(item) {
        this.items.push(item);
        return true;
    }
    get getItems() {
        return this.items;
    }
}
//# sourceMappingURL=app.js.map