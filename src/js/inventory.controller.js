(function() {
  'use strict';

  angular.module('inventory')
  .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['ItemService'];
  /**
  * Constructs an Inventory Controller
  */
  function InventoryController(ItemService){
    let vm = this;
    vm.newItem = {};
    vm.inventory = ItemService.getAllItems();

    vm.tax = 0.0575;
    /**
    * Determines final price of items with discounts and tax included
    * @param  {Object} item tax and discount values
    * @return {Number}     Final price
    */
    vm.totalPrice = function totalPrice(item){
      let price = item.price - item.discount;
      let tax = price * vm.tax;
      return price + tax;

    };

    /**
    * Adds new items to the inventory array
    * @param  {Object} item Should have 'name', 'price', 'quantity', 'color', 'discount'
    * @return {Void}
    */
    vm.addItem = function addItem(item) {
      console.log('in controller addItem:', item);
      ItemService.addItem(item);
      vm.newItem = {};
    };

  }
}());
