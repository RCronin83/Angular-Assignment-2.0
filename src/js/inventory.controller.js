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
    vm.sortType = 'price';
    vm.sortReverse = false;
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
     * Adds items to the 'View' using ItemService and clears the newItem Object
     * @param {Object} item [description]
     */
    vm.addItem = function addItem(item) {
      ItemService.addItem(item);
      vm.newItem = {};
    };
    /**
     * Changes the sorting of table data
     * @param  {[type]} sortField [description]
     * @return {[type]}           [description]
     */
    vm.changeSort = function changeSort(sortField) {
      console.log('hello');
     vm.sortType = sortField;
     vm.sortReverse = !vm.sortReverse;
    };

  }
}());
