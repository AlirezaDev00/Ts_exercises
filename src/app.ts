class List<T extends boolean | number | string> {
    private items: T[] = []

    addItem(item: T):void {
        this.items.push(item)
    }

    get getItems() {
        return this.items
    }
}

type list2Items = boolean | number | string
class List2 {
    private items: list2Items[] = [];
    // private items: boolean[] | string[] | number[] = [];

    
    addItem(item: string | number | boolean):boolean {
        this.items.push(item)
        return true
    }

    get getItems() {
        return this.items
    }
}

