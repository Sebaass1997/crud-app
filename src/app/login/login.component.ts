import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    // console.log(this.email);
  
  }
}
