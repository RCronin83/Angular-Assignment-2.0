(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);

  function ItemService(){
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

    /**
     * Adds an item to the inventory database
     * @param {Object} item Should have 'name', 'price', 'quantity', 'color', 'discount'
     * @return {Void}
     */
    function addItem(item) {
      item.price = Number(item.price);
      item.quantity = Number(item.quantity);
      item.discount = Number(item.discount);

      if (typeof(item) !== 'object' ||
          typeof(item.name) !== 'string' ||
          typeof(item.price) !== 'number' ||
          Number.isNaN(item.price)||
          typeof(item.quantity) !== 'number' ||
          Number.isNaN(item.quantity)||
          typeof(item.color) !== 'string' ||
          typeof(item.discount) !== 'number' ||
          Number.isNaN(item.discount)) {
            return;
      }

      inventory.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      localStorage.setItem('inventory', angular.toJson(inventory));
    }
    /**
     * Gets all the items in the inventory
     * @return {Object} A collection of items
     */
    function getAllItems(){
      return inventory;

    }
    return {
      addItem: addItem,
      getAllItems: getAllItems
    };
  }
}());
