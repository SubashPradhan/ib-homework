class ShoppingCart {
    constructor(){
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName, quantity, pricePerUnit){
        const newItems = {
            name: itemName,    
            quantity: quantity,
            pricePerUnit: pricePerUnit
        }
        return this.items.push(newItems)    
    }
    clear(){
        return this.items =[]
    }
    total(){
        return this.items.reduce((accumulator, Item) => {
            accumulator + (Item.quantity * Item.pricePerUnit)
        },0)
    }

}

module.exports = ShoppingCart