import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as socketIo from 'socket.io-client';
import { TestAPIService } from '../services/test-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SingUpForm: FormGroup;
  constructor(private fb: FormBuilder, private testService: TestAPIService) {
    this.SingUpForm = this.fb.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  onSignUp() {
    console.log(this.SingUpForm.value);
  }
}
