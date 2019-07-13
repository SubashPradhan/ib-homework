// Creating class to be exported 
class ShoppingCart {
    constructor() {
        this.items = []
    }

    //function to get an empty array
    getItems() {
        return this.items
    }

    //function to addItems on cart
    addItem(itemName, quantity, pricePerUnit) {
        const newItems = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: pricePerUnit
        }
        return this.items.push(newItems)
    }

    // function to remove all items from array
    clear() {
        return this.items = []
    }

    //function to calculate totalCost of cartItems
    total() {
        const totalCost = this.items.reduce((accumulator, Item) => {
            let totalCostOfEachItem = (Item.quantity * Item.pricePerUnit)
            return accumulator + totalCostOfEachItem
        }, 0)
        return totalCost
    }

}

//exports ShoppingCart as a Class
module.exports = ShoppingCart