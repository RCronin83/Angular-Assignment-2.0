(function() {
  'use strict';
  let expect = chai.expect;

  describe('ItemService', function(){
    let ItemService;

    beforeEach(module('inventory'));

    beforeEach(inject(function(_ItemService_){
      ItemService = _ItemService_;
    }));
    it('Should give us an array of our inventory', function(){
      let result = ItemService.getAllItems();
      expect(result).to.be.an('array');
    });
    it('Should add an item with the correct info', function(){
      expect(ItemService.getAllItems().length).to.equal(0);
      ItemService.addItem({
        name: 'Item',
        price: 100,
        quantity: 20,
        color: 'Blue',
        discount: 10
      });
      let inventory = ItemService.getAllItems();
      expect(inventory.length).to.equal(1);
      expect(inventory[0].name).to.equal('Item');
      expect(inventory[0].price).to.equal(100);
      expect(inventory[0].quantity).to.equal(20);
      expect(inventory[0].color).to.equal('Blue');
      expect(inventory[0].discount).to.equal(10);
    });
  });
}());
