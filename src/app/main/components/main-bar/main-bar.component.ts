import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBarComponent implements OnInit {
  myControl = new FormControl('');

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
  filteredOptions: Observable<any[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
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
