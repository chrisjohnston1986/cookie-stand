'use strict';

// **** Globals/ Window into the DOM ****

let locationSection = document.getElementById('store location');



//Daily shop hours

let dailyHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


// **** Helper Functions - Utilities ****

// let storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

console.dir(locationSection);



let seattle = {
  site: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  customerNumbers: [],
  cookieTotals: [],
  total: 0,

  generateCustomers: function(){
    for(let i = 0; i < dailyHours.length; i++){

      let hourCustomerTotal = randomCustomerNumber(this.minCust, this.maxCust);
      this.customerNumbers.push(hourCustomerTotal);
    }
  },

  generateCookies: function(){
    for(let i = 0; i < this.customerNumbers.length; i++){

      let hourlyTotal = this.customerNumbers[i] * this.avgCookies;
      console.log(hourlyTotal);
      let roundedHourlyTotal = Math.round(hourlyTotal);
      this.cookieTotals.push(roundedHourlyTotal);
      this.total += roundedHourlyTotal;
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.site;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  }
};

seattle.generateCustomers();
seattle.generateCookies();
console.log(seattle);

let tokyo = {
  site: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  customerNumbers: [],
  cookieTotals: [],
  total: 0,

  generateCustomers: function(){
    for(let i = 0; i < dailyHours.length; i++){

      let hourCustomerTotal = randomCustomerNumber(this.minCust, this.maxCust);
      this.customerNumbers.push(hourCustomerTotal);
    }
  },

  generateCookies: function(){
    for(let i = 0; i < this.customerNumbers.length; i++){

      let hourlyTotal = this.customerNumbers[i] * this.avgCookies;
      console.log(hourlyTotal);
      let roundedHourlyTotal = Math.round(hourlyTotal);
      this.cookieTotals.push(roundedHourlyTotal);
      this.total += roundedHourlyTotal;
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.site;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  }
};

tokyo.generateCustomers();
tokyo.generateCookies();
console.log(tokyo);


let dubai = {
  site: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7, customerNumbers: [],
  cookieTotals: [],
  total: 0,

  generateCustomers: function(){
    for(let i = 0; i < dailyHours.length; i++){

      let hourCustomerTotal = randomCustomerNumber(this.minCust, this.maxCust);
      this.customerNumbers.push(hourCustomerTotal);
    }
  },

  generateCookies: function(){
    for(let i = 0; i < this.customerNumbers.length; i++){

      let hourlyTotal = this.customerNumbers[i] * this.avgCookies;
      console.log(hourlyTotal);
      let roundedHourlyTotal = Math.round(hourlyTotal);
      this.cookieTotals.push(roundedHourlyTotal);
      this.total += roundedHourlyTotal;
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.site;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  }
};

dubai.generateCustomers();
dubai.generateCookies();
console.log(dubai);


let paris = {
  site: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  customerNumbers: [],
  cookieTotals: [],
  total: 0,

  generateCustomers: function(){
    for(let i = 0; i < dailyHours.length; i++){

      let hourCustomerTotal = randomCustomerNumber(this.minCust, this.maxCust);
      this.customerNumbers.push(hourCustomerTotal);
    }
  },

  generateCookies: function(){
    for(let i = 0; i < this.customerNumbers.length; i++){

      let hourlyTotal = this.customerNumbers[i] * this.avgCookies;
      console.log(hourlyTotal);
      let roundedHourlyTotal = Math.round(hourlyTotal);
      this.cookieTotals.push(roundedHourlyTotal);
      this.total += roundedHourlyTotal;
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.site;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  }
};

paris.generateCustomers();
paris.generateCookies();
console.log(paris);

let lima = {
  site: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  customerNumbers: [],
  cookieTotals: [],
  total: 0,

  generateCustomers: function(){
    for(let i = 0; i < dailyHours.length; i++){

      let hourCustomerTotal = randomCustomerNumber(this.minCust, this.maxCust);
      this.customerNumbers.push(hourCustomerTotal);
    }
  },

  generateCookies: function(){
    for(let i = 0; i < this.customerNumbers.length; i++){

      let hourlyTotal = this.customerNumbers[i] * this.avgCookies;
      console.log(hourlyTotal);
      let roundedHourlyTotal = Math.round(hourlyTotal);
      this.cookieTotals.push(roundedHourlyTotal);
      this.total += roundedHourlyTotal;
    }
  },

  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.site;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.cookieTotals[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = `Total:  ${this.total} cookies`;
    articleElem.appendChild(h3Elem);
  }
};

lima.generateCustomers();
lima.generateCookies();
console.log(lima);


// credit: -grabbed from MDN-
function randomCustomerNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// **** Object Literals ****



// ***** Executable Code ****


