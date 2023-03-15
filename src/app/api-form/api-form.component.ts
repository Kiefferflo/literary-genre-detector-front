import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent {
  apiForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.apiForm = this.fb.group({
      title: this.fb.control(''),
      summary: this.fb.control(''),
      author: this.fb.control(''),
    });
  }

  onSubmit() {
    console.log(this.apiForm.value);
  }
}
