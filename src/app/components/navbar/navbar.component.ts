import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  keyboard: any;
  loggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSearcyByTitle() {

  }

  logout() {

  }
}
