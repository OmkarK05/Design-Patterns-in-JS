// There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.

let instance;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getInstance(){
    return instance;
  }
}

export default Singleton


// When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.

// constructor() {
//     if (this._instance == null) {
//         if (isFoo()) {
//             this._instance = new FooSingleton();
//         } else {
//             this._instance = new BasicSingleton();
//         }
//     }
//     return this._instance;
// }

// Here, getInstance becomes a little like a Factory method and we don't need to update each point in our code accessing it. 
// FooSingleton above would be a subclass of BasicSingleton and implement the same interface.


class Singleton {
    constructor(options = {}) {
      // set some properties for our singleton
      this.name = 'SingletonTester';
      this.pointX = options.pointX || 6;
      this.pointY = options.pointY || 10;
    }
  }
  
  // an emulation of static variables and methods
  const SingletonTester = {
    name: 'SingletonTester',
    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }

      return instance;
    },
  };

  const singletonTest = SingletonTester.getInstance({
    pointX: 5,
  });

  // Log the output of pointX just to verify it is correct
  // Outputs: 5
  console.log(singletonTest.pointX);