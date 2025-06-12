// class HtmlElem<T> {
//   constructor(private elem: T) {
//     this.elem = elem;
//   }

//   get getElem() {
//     return this.elem;
//   }
// }

// const elem = document.createElement("input");
// const newElem = new HtmlElem<HTMLInputElement>(elem);

// //* example 2
// class List {
//   protected items: any[] = [];

//   addItem(item: any) {
//     this.items.push(item);
//     return true;
//   }

//   popItem() {
//     return this.items.pop();
//   }
  
// }

// const numberList = new List()
// numberList.addItem(15)
// numberList.addItem(18)
// numberList.addItem("20")

// console.log(numberList.popItem().toFixed()); //Error
// console.log(numberList.popItem().toFixed());

// class NumberList extends List {
//     addItem(item: number) {
//         this.items.push(item)
//         return true
//     }   
    
//     popItem() {
//         return this.items.pop()
//     }
// }

// const numberList = new NumberList()
// numberList.addItem(15)
// numberList.addItem(18)
// numberList.addItem("20")

class list<T> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item)
    }

    popItem(): T | undefined {
        return this.items.pop()
    }
}

const scores = new list()
scores.addItem(15)
scores.addItem(20)