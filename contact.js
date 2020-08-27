/*
Name: Supriya Mutharasan
WEB222: Final Assessment
Filename: contact.js
*/

(function () {

  var provincesArr = ['Manitoba', 'Ontario', 'Quebec', 'Nova Scotia', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador', 'New Brunswick'];
  
  function getValidation() {

    var streetName = document.getElementById('givenStreetName').value.trim();
    var city = document.getElementById('givenCity').value.trim();
    var postalCode = document.getElementById('givenPostalCode').value.trim();
    
    console.log(`Phone Number validation: ${phoneValidation(phoneNumber)}`);
    console.log(`Zip Code validation: ${getPostalCodeValidation(postalCode)}`);
    console.log(`City validation: ${getCityValidation(city)}`);
    console.log(`Street Name validation: ${getStreetNameValidation(streetName)}`);

    return false;
  }

  function clear() {
    var inputs = document.querySelectorAll('input');
    inputs.innerHTML = "";
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

  function phoneValidation(phoneNumber) 
  {
    var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    if (!pattern.test(phoneNumber)) {
        displayError(`The Phone Number must be in the following format: XXX-XXX-XXXX`);
    } else return pattern.test(phoneNumber);
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

    // if (document.getElementById('specificationOP').checked === true) 
    // {
    //   console.log('DO SOMETHING');
    //   var orderNumberLabelJS = document.createElement('label');
    //   var txtBoxOrderNumber = document.createElement('input');
    //   var lineBreak = document.createElement('br');

    //   orderNumberLabelJS.for = 'obtainOrderNumber';

    //   txtBoxOrderNumber.id = 'givenOrderNumber';
    //   txtBoxOrderNumber.type = 'text';
    //   txtBoxOrderNumber.placeholder = 'AAABBB';

    //   document.getElementsByClassName('triggerOrderNum').append(orderNumberLabelJS, lineBreak,txtBoxOrderNumber);
    // } else {
    //   document.getElementsByClassName('triggerOrderNum').innerHTML = '';
    // }
    
    addEventListener('DOMContentLoaded', function() {
      document.getElementById('orderNumContainer').innerHTML = '';
    });
    
    document.getElementById('specificationQ').addEventListener('change', function() {
      document.getElementById('orderNumContainer').innerHTML = '';
    });
    
    document.getElementById('specificationC').addEventListener('change', function() {
      document.getElementById('orderNumContainer').innerHTML = '';
    });
    
    document.getElementById('specificationOP').addEventListener('change', function() {
      console.log('DO SOMETHING');
      document.getElementById('orderNumContainer').innerHTML = '';
      var tester = document.getElementById('orderNumContainer');
      var orderNumberLabelJS = document.createElement('label');
      var txtBoxOrderNumber = document.createElement('input');
      var lineBreak = document.createElement('br');
      
      orderNumberLabelJS.for = 'obtainOrderNumber';
      orderNumberLabelJS.innerText = 'Order Number: ';

      txtBoxOrderNumber.id = 'givenOrderNumber';
      txtBoxOrderNumber.type = 'text';
      txtBoxOrderNumber.placeholder = 'AAABBB';
      
      tester.append(orderNumberLabelJS,lineBreak,txtBoxOrderNumber);
      
    });
    
  };
  
})();
