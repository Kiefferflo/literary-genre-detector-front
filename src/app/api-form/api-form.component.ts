import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent {
  apiForm: FormGroup;

  types = [
    "Title",
    "Author",
    "Summary"
  ];

  models = [
    { name:"Tree", value:"/tree" },
    { name:"Neural Network", value:"/nn" }
  ]

  clicked: boolean = false;

  data: string = "";

  endpoint = "https://literary-genre-detector-api-t32mvyrpiq-od.a.run.app/api/predict/"

  

  constructor(private fb:FormBuilder, private http: HttpClient) {
    this.apiForm = this.fb.group({
      url: this.fb.control(this.types[0]),
      model: this.fb.control(this.models[0].value),
      text: this.fb.control('')
    });
  }

  async onSubmit() {
    let name = (this.apiForm.value['url'] as string).toLowerCase();
    if (this.apiForm.value['url'] == 'Author') {
      this.apiForm.value['model'] = ''
    }
    let url: string = this.endpoint + name + this.apiForm.value['model'] + '?' + name + '=' + this.apiForm.value['text'];
    await this.http.post<HttpResponse<string>>(url, '')
    .subscribe((rep) =>  {
      this.data = JSON.stringify(rep);
    }); 
  }
}
