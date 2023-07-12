import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  myControl1 = new FormControl('');
  myControl2 = new FormControl('');

  countryes: any = [
    {
      id: 1,
      zip: "123",
      city: "New York"
    },
    {
      id: 2,
      zip: "312",
      city: "Colifornya"
    },
    {
      id: 3,
      zip: "904",
      city: "Mexico"
    },
    {
      id: 4,
      zip: "578",
      city: "Losangles"
    },
    {
      id: 5,
      zip: "485",
      city: "Chicogo"
    },
    {
      id: 5,
      zip: "847",
      city: "Monhetan"
    },
    {
      id: 6,
      zip: "746",
      city: "Boston"
    },
  ];

  filteredCountries: any;
  filteredOptions1: Observable<any[]> | undefined;
  filteredOptions2: Observable<any[]> | undefined;

  ngOnInit() {
    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countryes.filter((option: any) => { 
      if(option.city.toLowerCase().includes(filterValue) || option.zip.includes(filterValue)) {
        return option.city;
      }
    });
  }
}
