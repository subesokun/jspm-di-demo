import {Inject} from 'di';

import {DoorSystem} from './doorsystem';
import {Winker} from './winker';

@Inject(DoorSystem, Winker)
export class Car {

  constructor(doorSystem, winker) {
    this.doorSystem = doorSystem;
    this.winker = winker;
  }

  unlock() {
    console.log('Unlocking the car...');

    this.doorSystem.unlock();
    this.winker.flash();

    console.log('Car is unlocked');
  }
}
