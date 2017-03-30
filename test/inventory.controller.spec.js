(function() {
  'use strict';
  let expect = chai.expect;

  describe('Inventory Controller', function(){
    let InventoryController;
    let mockItemService = {};

    beforeEach(module('inventory'));
    beforeEach(module(function($provide){
      $provide.value('ItemService', mockItemService);
    }));
    beforeEach(inject(function($controller){
      mockItemService.getAllItems = function getAllItems(){
        return [{
          name: 'Item',
          price: 100,
          quantity: 20,
          color: 'Blue',
          discount: 10
        }];
      };
      mockItemService.addItem = function addItem(item){
        mockItemService.addItem.numTimesCalled++;
        return;
      };
      mockItemService.addItem.numTimesCalled = 0;
      InventoryController = $controller('InventoryController');
    }));
    it('Should confirm data types', function(){
      expect(InventoryController.newItem).to.be.an('object');
      expect(InventoryController.inventory).to.be.an('array');
      expect(InventoryController.addItem).to.be.a('function');
      expect(InventoryController.changeSort).to.be.a('function');
      expect(InventoryController.totalPrice).to.be.a('function')
      expect(InventoryController.tax).to.be.a('number');
    });
    it('Should call the addItem function when adding an item', function(){
      InventoryController.addItem({});
      expect(mockItemService.addItem.numTimesCalled).to.equal(1);
      
    });
  });

}());
