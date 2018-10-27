import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as socketIo from 'socket.io-client';
import { TestAPIService } from '../services/test-api.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  SignUpForm: FormGroup;
  // Login declarations
  firstNameLogin: any;
  passwordLogin: any;
  // signUp Declarations
  firstNameSignUp: any;
  lastName: any;
  email: any;
  passwordSignUp; any;

  // isSignUp: boolean;
  isSignUp = false;
  SignUpStatus = 'SignUp';
  loadLoginData: object;
  profileData: any;
  loadSignUpData: object;
  constructor(private fb: FormBuilder, private testService: TestAPIService, private http: HttpClient) {
    // For Login Purpose
    this.loginForm = this.fb.group({
      'firstNameLogin': new FormControl('', Validators.required),
      'passwordLogin': new FormControl('', Validators.required)
    });
    // For SignUp Purpose
    this.SignUpForm = this.fb.group({
      'firstNameSignUp': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),

    });
    // Loading Login Data
    this.firstNameLogin = '';
    this.passwordLogin = '';
    this.loadLoginData = {};
    // loading Sign Up data
    this.firstNameSignUp = '';
    this.lastName = '';
    this.email = '';
    this.passwordSignUp = '';
    this.loadSignUpData = {};

  }

  ngOnInit() {
  }

  toggle() {
    this.isSignUp = true;
    // this.isSignUp = !this.isSignUp;
    this.SignUpStatus = 'Already Have An Account? Login';
  }

  onSubmit() {
    this.loadLoginData = {
      'firstNameLogin': this.loginForm.get('firstNameLogin').value,
      'passwordLogin': this.loginForm.get('passwordLogin').value,
    };
    // working on login json watch POST
    this.http.post('http://localhost:3000/posts/', this.loadLoginData).subscribe((res: Response) => {
      console.log(res);
    });

    this.http.get('http://localhost:3000/posts/').subscribe((res: Response) => {
      console.log(res);
    });

    // working get profile from db,.json
    // this.http.get('http://localhost:3000/posts/', this.loadLoginData).subscribe((res: Response) => {
    //   // console.log(res);
    //   this.profileData = res;
    //   for (let i = 0; i < this.profileData.length; i++) {
    //     console.log(this.profileData[4]);
    //   }
    // });

    const fName = this.loginForm.get('firstNameLogin').value;
    const lName = this.loginForm.get('passwordLogin').value;
    console.log(this.loginForm);

  }

  // onSignUp() {
  //   this.loadSignUpData = {
  //     'firstNameSignUp': this.SignUpForm.get('firstNameSignUp').value,
  //     'lastName': this.SignUpForm.get('lastName').value,
  //     'email': this.SignUpForm.get('email').value,
  //     'passwordSignUp': this.SignUpForm.get('passwordSignUp').value
  //   };
  //   console.log(this.loadSignUpData);
    // this.http.get('http://localhost:3000/posts/').subscribe((res: Response) => {
    //   console.log(res);
    // });
    // this.http.post('http://localhost:3000/posts/', this.loadSignUpData).subscribe((res: Response) => {
    //    console.log(res);
    //  });
    // working get profile from db,.json
    // this.http.get('http://localhost:3000/posts/', this.loadSignUpData).subscribe((res: Response) => {
    //   // console.log(res);
    //   this.profileData = res;
    //   for (let i = 0; i < this.profileData.length; i++) {
    //     console.log(this.profileData[4]);
    //   }
    // });
    // const fName = this.SignUpForm.get('firstNameSignUp').value;
    // const lName = this.SignUpForm.get('passwordSignUp').value;
    // const email = this.SignUpForm.get('email').value;
    // const password = this.SignUpForm.get('passwordSignUp');
    // console.log(this.SignUpForm);
  }

