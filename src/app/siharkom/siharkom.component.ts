
import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../../assets/Animal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() brkList: Animal;
  @Input() lnchList: Animal;
  @Input() dnrList: Animal;

  constructor() { }

  ngOnInit() {
  }

}
