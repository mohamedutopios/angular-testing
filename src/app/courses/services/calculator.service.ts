import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) {

  }

     add(n1:number, n2:number) {
    this.logger.log("Addition operation called");
    return null;
  }

  subtract(n1:number, n2:number) {
    this.logger.log("Subtraction operation called");
    return null;
  }

}

