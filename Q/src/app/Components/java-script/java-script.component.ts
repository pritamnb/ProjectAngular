import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent implements OnInit {
  isClicked: boolean;
  jsForm: FormGroup;
  isAnswer: boolean;
  data: any[];
  id: number;
  todaysDate = new Date();
  today: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.isClicked = false;
    this.jsForm = this.fb.group({
      'answer': new FormControl('', [Validators.required])
    });
    this.isAnswer = false;
    this.data = [];
    this.id = 0;
    this.today = '';
  }

  ngOnInit() {
  }

  toggle() {
    this.isClicked = !this.isClicked;
  }

  onPostAnswer() {
    this.id++;
    console.log(this.id);
    this.data.push(this.jsForm.get('answer').value);
    if (this.data) {
      this.isAnswer = true;
      this.today = formatDate(this.todaysDate, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

    }
    this.jsForm.reset();
  }

  addQuestion() {
    this.router.navigate(['/home']);
  }


}
