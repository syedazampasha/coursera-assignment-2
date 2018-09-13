(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
    .controller('ShoppingCtrl', ShoppingCtrl)
    .controller('ShoppingCtrl2', ShoppingCtrl2)
    .service('ShoppingListService', ShoppingListService);

  ShoppingCtrl.$inject = ['ShoppingListService'];
  function ShoppingCtrl(ShoppingListService) {
    var list1 = this;
    list1.items = ShoppingListService.getItems();

    list1.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  ShoppingCtrl2.$inject = ['ShoppingListService'];
  function ShoppingCtrl2(ShoppingListService) {
    var list2 = this;

    list2.items = ShoppingListService.sendItems();
  }

  function ShoppingListService() {
    var service = this;

    var buyItems = [
      {
        name: "choco",
        quantity: "2"
      },
      {
        name: "Cake",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Gelusil",
        quantity: "5"
      }
    ];

    var boughtItems = [];
    service.removeItem = function (itemIdex) {
      boughtItems.push(buyItems[itemIdex]);
      buyItems.splice(itemIdex, 1);
    };

    service.getItems = function () {
      return buyItems;
    };
    service.sendItems = function () {
      return boughtItems;
    };
  }


})();
