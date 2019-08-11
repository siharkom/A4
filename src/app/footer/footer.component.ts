import { Component, OnInit } from '@angular/core';
import { siharkom } from "../siharkom";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currStudent: siharkom = {
    sid: 991503019, sname: "Harkomalpreet Sidhu",
    slogin: "siharkom", scampus: "Trafalgar", 
    atitle: "Assignment-4"
  }

  constructor() { }

  ngOnInit() {
  }

}
