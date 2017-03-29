(function() {
  'use strict';

  angular.module('inventory').factory('ItemService', ItemService);

  ItemService.$inject = ['$location'];

  function ItemService($location){
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];


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
      console.log(inventory);
      localStorage.setItem('inventory', angular.toJson(inventory));
    }
    function getAllItems(){
      return inventory;

    }
    return {
      addItem: addItem,
      getAllItems: getAllItems
    };
  }
}());
