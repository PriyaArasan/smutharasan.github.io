/*
Name: Supriya Mutharasan
WEB222: Final Assessment
Filename: script.js
*/

(function () {

  let products = {
    /**
     * Store all products from productsData.js on `products.all` for convenience.
     */
    all: window.BBHData,

    /**
     * Return a filtered array of products depending on the category given
     **/
    getByCategory: function (category) {
      var result = [];

      if (typeof category === 'undefined') {
        category = 'all';

        result = products.all.map(element => {
          var tempProduct = {};
          for (const key in element) {
            tempProduct[key] = element[key];
          }
          return tempProduct;
        });
      } else {

        result = products.all.filter(element => {
          var resultBool = false;
          if (element.productCategory === category) {
            console.log("BEING ADDED>>>>");
            resultBool = true;
          }

          return resultBool;
        });
      }

      return result;
    }
  };

  let cardHelpers = {
    clearTable: function () {
      document.getElementById('shoppingRowContent').innerHTML = '';
    },

    productToContainer: function (product) {
      console.log('HELLO');
      // var rowDiv = document.getElementById('shoppingRowContent');
      var columnDiv = document.createElement('div');
      var columContent = document.createElement('div');

      var displayProdName = document.createElement('h4');
      var displayProdDesc = document.createElement('p');
      var displayImg = document.createElement('img');
      var displayPrice = document.createElement('p');
      var addToCartWrapper = document.createElement('p');
      var addToCartBTN = document.createElement('button');
      addToCartBTN.innerText = 'Add to Cart'

      if (product.productCategory === 'coffeeBeans') {
        columnDiv.className = 'columnClass coffeeBeansClass';
      } else if (product.productCategory === 'coffeeEquip') {
        columnDiv.className = 'columnClass coffeeEquipClass';
      }

      columContent.className = 'columnContentClass';

      var tempProduct = {};
      tempProduct.code = product.code;
      tempProduct.productCategory = product.productCategory;
      tempProduct.productName = product.productName;
      tempProduct.price = product.price;
      tempProduct.productDescription = product.productDescription;
      tempProduct.img = product.img;
      tempProduct.weight = product.weight;

      for (var property in tempProduct) {
        if (property === 'productName') {
          displayProdName.innerHTML = tempProduct.productName;
        } else if (property === 'productDescription') {
          displayProdDesc.innerHTML = tempProduct.productDescription;
          displayProdDesc.className = 'productDescClass';
        } else if (property === 'img') {
          displayImg.setAttribute('src', 'images/' + tempProduct[property]);
          displayImg.alt = tempProduct.productDescription;
          displayImg.className = 'portofolioImages';
        } else if (property === 'price') {
          displayPrice.innerHTML = '$' + tempProduct.price;
          displayPrice.className = 'price';
        }
      }

      addToCartWrapper.appendChild(addToCartBTN)
      columContent.append(displayImg, displayProdName, displayPrice, displayProdDesc, addToCartWrapper);
      columnDiv.appendChild(columContent);
      return columnDiv;
    },

    /**
     * Takes an array of `product` Objects named `products`, and passes each
     * `product` in the array  to `cardHelpers.productToContainer()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `cardHelpers.clear()` to remove any existing rows before you do this.
     */
    productsToTable: function (products) {
      var rowDiv = document.getElementById('shoppingRowContent');
      var card_bod = document.getElementById('shoppingRowContent');
      if (card_bod.children.length > 0) this.clearTable();
      
      for(var givenIndex = 0; givenIndex < products.length; givenIndex++)
      {
        if (givenIndex % 3 == 0) {
            var individualRow = document.createElement('div');
            individualRow.className = 'individualRowClass';
            rowDiv.appendChild(individualRow);
        }
      }

      var counter = 0;

      var rowDivChildren = rowDiv.children;

      for (var i = 0; i < rowDivChildren.length; i++) {
        var eachChildDiv = rowDivChildren[i];
        for(var secondIndex = counter; secondIndex < counter + 3; secondIndex++){
          eachChildDiv.appendChild(cardHelpers.productToContainer(products[secondIndex]));
        }
        counter = counter + 3;
      }

    }
  };


  function setupMenuHandlers() {

    var sidebar = document.querySelector('.sidebar');

    document.getElementById('toggle-sidebar').onclick = function () {
      sidebar.classList.toggle('is-visible');
    };

    console.log(products.getByCategory());

    cardHelpers.productsToTable(products.getByCategory());


    document.getElementById('filterBtnNone').addEventListener('click', function () {

      document.getElementById('filterTitle').innerHTML = 'All Products';
      cardHelpers.productsToTable(products.getByCategory());


    });

    document.getElementById('filterBtnCoffeeBeans').onclick = function () {
      document.getElementById('filterTitle').innerHTML =
        'Our Coffee Blend Products';
      document.getElementById("filterTitle").style.verticalAlign = "super";
      cardHelpers.productsToTable(products.getByCategory('coffeeBeans'));
    };

    document.getElementById('filterCoffeeEquip').onclick = function () {
      document.getElementById('filterTitle').innerHTML =
        'Our Coffee Equipment Products';
      document.getElementById("filterTitle").style.verticalAlign = "super";
      cardHelpers.productsToTable(products.getByCategory('coffeeEquip'));
    };

  }

  window.onload = setupMenuHandlers();

})();