import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  isClicked: boolean;
  jsForm: FormGroup;
  isAnswer: boolean;
  data: any[];
  id: number;
  constructor(private fb: FormBuilder) {
    this.isClicked = false;
    this.jsForm = this.fb.group({
      'answer': new FormControl('', [Validators.required])
    });
    this.isAnswer = false;
    this.data = [];
    this.id = 0;
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
    }
    this.jsForm.reset();
  }

}
