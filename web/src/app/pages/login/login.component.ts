import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  defaultAuth : any = {
    userId: '',
    email: '',
    password:'',
  }
  



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initform();
  }

  get form(){
    return this.loginForm.controls;
  }

  initform(){
    this.loginForm = this.formBuilder.group({
      email: [this.defaultAuth.email],
      password: [this.defaultAuth.password],

    })
  }

  onSubmit(){
    const email = this.form.email.value;
    const password = this.form.password.value;
    console.log(email + '\n' + password);
    this.router.navigate(['/home'], {replaceUrl: true});
  }

}
