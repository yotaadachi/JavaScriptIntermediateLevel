document.addEventListener('DOMContentLoaded', () => {
  const es = new ES2019Extended();
  es.printVersion();
});

class ES2019 {

  #version = 2019;

  set version(val) {
    this.#version = val;
  }

  get version() {
    return this.#version;
  }

  #increment() {
    this.#version++;
  }

  printVersion() {
    this.#increment();
    console.log(`Hi, my version is ${this.#version}`);
  }

};

class ES2019Extended extends ES2019 {

  printVersion() {
    console.log(`Hi, my version is ${this.version}`);
  }
}