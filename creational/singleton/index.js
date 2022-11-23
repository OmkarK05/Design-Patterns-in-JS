import Singleton from "./singleton.js";

const firstSingleton = new Singleton();
const duplicateSingleton = new Singleton();

console.log( 'is Singleton ' ,firstSingleton === duplicateSingleton);