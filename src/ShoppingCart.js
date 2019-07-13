class ShoppingCart {
    constructor() {
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName, quantity, pricePerUnit) {
        const newItems = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: pricePerUnit
        }
        return this.items.push(newItems)
    }
    clear() {
        return this.items = []
    }
    total() {
        const totalCost = this.items.reduce((accumulator, Item) => {
            let totalCostOfEachItem = (Item.quantity * Item.pricePerUnit)
            return accumulator + totalCostOfEachItem
        }, 0)
        return totalCost
    }

}

module.exports = ShoppingCart