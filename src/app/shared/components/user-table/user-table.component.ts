import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['Transiton Code', 'name', 'Invest Amount', 'Interest rate', 'Option'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  hide = true
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
   onInputSearch(event: Event) {
    let targetVal = (event.target! as HTMLInputElement).value;
    this.dataSource.filter = targetVal.trim().toLowerCase()
  }
}




const ELEMENT_DATA: any[] = [
  {Transiton_Code: 1, name: 'Hydrogen', InvestAmount: 1.0079, Interestrate: '11'},
  {Transiton_Code: 2, name: 'Helium', InvestAmount: 4.0026, Interestrate: '12'},
  {Transiton_Code: 3, name: 'Lithium', InvestAmount: 6.941, Interestrate: '13'},
  {Transiton_Code: 4, name: 'Beryllium', InvestAmount: 9.0122, Interestrate: '13'},
  {Transiton_Code: 5, name: 'Boron', InvestAmount: 10.811, Interestrate: '14'},
  {Transiton_Code: 6, name: 'Carbon', InvestAmount: 12.0107, Interestrate: '15'},
  {Transiton_Code: 7, name: 'Nitrogen', InvestAmount: 14.0067, Interestrate: '16'},
  {Transiton_Code: 8, name: 'Oxygen', InvestAmount: 15.9994, Interestrate: '17'},
  {Transiton_Code: 9, name: 'Fluorine', InvestAmount: 18.9984, Interestrate: '18'},
  {Transiton_Code: 10, name: 'Neon', InvestAmount: 20.1797, Interestrate: '19'},
  {Transiton_Code: 11, name: 'Sodium', InvestAmount: 22.9897, Interestrate: '20'},
  {Transiton_Code: 12, name: 'Magnesium', InvestAmount: 24.305, Interestrate: '21'},
  {Transiton_Code: 13, name: 'Aluminum', InvestAmount: 26.9815, Interestrate: '22'},
  {Transiton_Code: 14, name: 'Silicon', InvestAmount: 28.0855, Interestrate: '24'},
  {Transiton_Code: 15, name: 'Phosphorus', InvestAmount: 30.9738, Interestrate: '26'},
  {Transiton_Code: 16, name: 'Sulfur', InvestAmount: 32.065, Interestrate: '28'},
  {Transiton_Code: 17, name: 'Chlorine', InvestAmount: 35.453, Interestrate: '30'},
  {Transiton_Code: 18, name: 'Argon', InvestAmount: 39.948, Interestrate: '32'},
  {Transiton_Code: 19, name: 'Potassium', InvestAmount: 39.0983, Interestrate: '34'},
  {Transiton_Code: 20, name: 'Calcium', InvestAmount: 40.078, Interestrate: '36'},
];
