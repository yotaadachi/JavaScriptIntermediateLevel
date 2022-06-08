document.addEventListener('DOMContentLoaded', () => {
  const es = new ES2019();
  es.printVersion();
});

class ES2019 {

  #version = 2019;

  #increment() {
    this.#version++;
  }
  printVersion() {
    this.#increment();
    console.log(`Hi, my version is ${this.#version}`);
  }
};