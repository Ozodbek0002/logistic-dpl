import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
declare let initHeadline: any;

@Component({
  selector: 'app-dealarships',
  templateUrl: './dealarships.component.html',
  styleUrls: ['./dealarships.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DealarshipsComponent implements AfterViewInit {
  defult = [{"name": "..."}];

  companies: Array<any> = this.defult;
  api = environment.companyApi;


  constructor(private http: HttpClient) {}




  send(form: NgForm) {
    console.log(form.value);
    form.onReset();
  }



  findCompany(searchText: string) {
    if(searchText.length > 3)
      this.http.get(this.api + searchText).subscribe((res: any) => this.companies = res.companies);
    else
      this.companies = this.defult;
  }


  ngAfterViewInit(): void {
    initHeadline();
  }

}
