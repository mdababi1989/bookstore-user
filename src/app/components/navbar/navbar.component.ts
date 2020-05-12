import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  keyboard: any;
  loggedIn: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.checkSession().subscribe(
      res => this.loggedIn = true,
      error => this.loggedIn = false
    );
  }

  onSearchByTitle() {

  }

  logout() {

  }
}
