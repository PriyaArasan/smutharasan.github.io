/*
Name: Supriya Mutharasan
WEB222: Final Assessment
Filename: contact.js
*/

(function () {

  var provincesArr = ['Manitoba', 'Ontario', 'Quebec', 'Nova Scotia', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador', 'New Brunswick'];
  // var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  function getValidation() {

    var streetName = document.getElementById('givenStreetName').value.trim();
    var city = document.getElementById('givenCity').value.trim();
    var postalCode = document.getElementById('givenPostalCode').value.trim();

    console.log(`Zip Code validation: ${getPostalCodeValidation(postalCode)}`);
    console.log(`City validation: ${getCityValidation(city)}`);
    console.log(`Street Name validation: ${getStreetNameValidation(streetName)}`);

    return false;
  }

  function clear() {
    var inputs = document.querySelectorAll('input');
    inputs.innerHMTL = "";
  }

  // Initiated when submit is clicked
  // 

  function displayError(msg) {
    var side = document.getElementById('side');
    var pElem = document.createElement('p');
    pElem.appendChild(msg);
    side.appendChild(pElem);
  }

  // Display the dropdown menu using elements from the provincesArr array
  function displayProvinces() {
    var provinceElem = document.getElementById('selectedProvince');

    provincesArr.forEach(function (province) {
      var option = document.createElement('option');
      option.setAttribute('value', province.toLowerCase());
      option.innerHTML = province.toUpperCase();
      provinceElem.appendChild(option);
    });
  }

  // the following function checks for valid postal code
  function getPostalCodeValidation(postalCode) {
    var postalCodeRegExp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!postalCodeRegExp.test(postalCode)) {
      displayError(`Invalid Postal Code, Must follow example provided`);
    } else return postalCodeRegExp.test(postalCode);
  }

  // the following function checks for valid city
  function getCityValidation(city) {
    var cityRegExp = /^[a-zA-Z]+$/;
    if (!cityRegExp.test(city))
      displayError(`Invalid City, Must follow example provided`);
    else return cityRegExp.test(city);
  }

  // the following function checks for valid street name
  // 
  function getStreetNameValidation(streetName) {
    var streetNameRegExp = /^[a-zA-Z]+$/;
    if (!streetNameRegExp.test(streetName))
      displayError(`Invalid Street Name, Must follow example provided`);
    else return streetNameRegExp.test(streetName);
  }



  window.onload = function () {
    displayProvinces();

    // Setting up manual handlers..
    document.getElementById('clearBTN').onclick = function () {
      clear();
    };

    document.getElementById('contactUsID').onsubmit = function () {
      return getValidation();
    };

    if (document.getElementById('specificationOP').checked === true) {

      var txtBoxOrderNumber = document.createElement('input');
      txtBoxOrderNumber.id = 'givenOrderNumber';
      txtBoxOrderNumber.type = 'text';
      txtBoxOrderNumber.placeholder = 'AAABBB';

      document.getElementsByClassName('triggerOrderNum').appendChild(txtBoxOrderNumber);
    } else {
      document.getElementsByClassName('triggerOrderNum').innerHMTL = '';
    }

  };

})();
