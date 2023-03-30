import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  apiForm: FormGroup;
  
  clicked: boolean = false;

  data: string = "";

  endpoint = "https://literary-genre-detector-api-t32mvyrpiq-od.a.run.app/api/predict/title/summary?summary="

  constructor(private fb:FormBuilder, private http: HttpClient) {
    this.apiForm = this.fb.group({
      text: this.fb.control('')
    });
  }

  async onSubmit() {
    let url: string = this.endpoint + this.apiForm.value['text'];
    await this.http.post<HttpResponse<string>>(url, '')
    .subscribe((rep) =>  {
      this.data = JSON.stringify(rep);
    }); 
  }

}
