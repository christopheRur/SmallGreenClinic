import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  display = true;
  dispProv = false;

  // const route: Router = [

  //   { path: 'login', component: ProviderComponent },

  // ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 public logingUser(): void{

  if(this.username=='Provider' && this.password =="admin123"){

    console.log("Welcome");
    this.update();
    this.displayProviders();
  }

 }
 update(){
  this.display = !this.display;
}

displayProviders(){
  this.dispProv = !this.dispProv;
}


}
