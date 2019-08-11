import { siharkom } from "../siharkom";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currStudent: siharkom = {
    sid: 991503019, sname: "Harkomalpreet Sidhu",
    slogin: "siharkom", scampus: "Trafalgar", 
    atitle: "Assignment-3"
  }

  constructor() { }

  ngOnInit() {
    
  }

}
