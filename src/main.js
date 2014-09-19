import {Injector} from 'di';
import {Car} from './car';

function main() {
  var injector = new Injector();
  var car = injector.get(Car);

  car.unlock();
}

main();
