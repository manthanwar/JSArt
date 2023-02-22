class User {
  static helloEmail = 'hello@company.com';

  static welcomeMessage() {
    return 'Welcome to our team!';
  }

  constructor() {
    console.log(User.helloEmail);
    console.log(User.welcomeMessage());
  }
}

const user1 = new User();
console.log(user1);

class Person {
  #privateField;
  static #PRIVATE_STATIC_FIELD;

  // Construct to assign the name attribute
  constructor(name) {
    this.name = name;
  }

  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }

  static basePublicStaticMethod() {
    return this.#PRIVATE_STATIC_FIELD;
  }

  // accessing name attribute using getter
  getName() {
    return this.name;
  }

  // Setter to assign value to the name attribute
  setName(name) {
    this.name = name;
  }
}

const aa = new Person('ram');
aa.setName('sham');
console.log(aa.getName());

const fetchData = (anyURL) => {
  setTimeout(() => {
    console.log('Asynchronous Code here');
  }, 3000);
  // requestedData = ...code
  // return dataFetched;
};

function someFunction() {
  // function code here
  console.log('some fun');
}
fetchData('url here');
someFunction();

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  get cnam() {
    return this.carname;
  }

  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car('Ford');
myCar.cnam = 'amit';
console.log('car = ' + myCar.cnam);
