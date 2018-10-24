import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as socketIo from 'socket.io-client';
import { TestAPIService } from '../services/test-api.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  firstName: any;
  lastName: any;
  isSignUp: boolean;

  constructor(private fb: FormBuilder, private testService: TestAPIService) {

    this.loginForm = this.fb.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required)
    });
    this.firstName = '';
    this.lastName = '';
  }

  ngOnInit() {
  }

  toggle() {
    this.isSignUp = !this.isSignUp;
  }

  onSubmit() {
    // debugger
    const fName = this.loginForm.get('firstName').value;
    const lName = this.loginForm.get('lastName').value;
    console.log(this.loginForm);

    // Create item:
    // const myObj = { fName };
    // localStorage.setItem( this.loginForm.value, JSON.stringify(myObj));

    // Read item:
    // const item = JSON.parse(localStorage.getItem(this.loginForm.value));
    // console.log(item);

    // Create item:
    const key = 'Item 1';
    // localStorage.setItem(key, 'dsds');
    // const myObj = { key: this.loginForm.get('firstName'), value: this.loginForm.get('firstName').value };
    // localStorage.setItem(JSON.stringify(myObj));

    // Read item:
    const myItem = localStorage.getItem(key);

    // const item = JSON.parse(localStorage.getItem(this.loginForm.value));
    // console.log(myItem);





    // this.testService.createDb();
    const socket = socketIo.connect('http://localhost:8000');
    // const socket = socketIo.connect('http://localhost:3000');
    // tslint:disable-next-line:whitespace
    socket.on('connect', () => {

      // tslint:disable-next-line:indent
      console.log('connected To Server ');
      // tslint:disable-next-line:indent
      // socket.emit('burp', 'shubham');
      // socket.emit("insert",{data:'insert this'});
    });
    socket.on('error', () => {
      console.log('ERRORRR ');
    });
    //  socket.on('connect_error', () => {console.log('connection error ');
    //  });
    // tslint:disable-next-line:no-shadowed-variable
    socket.on('insert_res', ( fName, lName) => {
       console.log(fName, lName);
     });
    // socket.on('update_res', () => {

    // });
    // socket.on('delete_res', () => {});
    // socket.on('fetch_res', () => {});
    // function connect() {

    // try
    // {
    // var socket = io.connect('http://localhost:3232/');
    // socket.on('login', function (loginForm) {
      // document.getElementById('login').innerHTML = 'Browser has connected to the app server';
      //     socket.emit('login', document.getElementById('firstName') , document.getElementById('lastName'));
    //   socket.emit('login', loginForm.fName, loginForm.lName);
    // });
    // socket.on('retuLogIn', function (data) {
    //   document.getElementById('login').innerHTML = 'Welcome ' + data;
    //   console.log('welcome' + data);
    // });
    // }
    // catch(err)
    // {
    //     document.getElementById('status').innerHTML = err.message;
    // }
    // }

  }
}

