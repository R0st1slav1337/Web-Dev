import { Component, inject } from '@angular/core';
import {RouterOutlet, RouterLink, RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from './car.service';
import {LowerCasePipe} from '@angular/common';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    Reverse Machine: {{word | reverse}}
  `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}
