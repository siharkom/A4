import { Component } from '@angular/core';
import dogs from '../siharkoma4\src\assets\Dogs.json'
import cats from '../siharkoma4\src\assets\Cats.json'
import { Animal } from './Animal.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siharkoma4';

  dList: Animal[] =dogs.dog;
  cList: Animal[] =cats.cat;
}
