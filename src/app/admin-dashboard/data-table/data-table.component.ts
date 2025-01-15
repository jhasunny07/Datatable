import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GridOptions, GridOptionsService } from 'ag-grid-community';

@Component({
  selector: 'app-data-table',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  imports: [],
})
export class DataTableComponent {
  gridOptions: GridOptions;
  gridApi: any; // Store the grid API
  gridColumnApi: any; // Store the column API

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Honda', model: 'Civic', price: 24000 },
    { make: 'BMW', model: '3 Series', price: 41000 },
    { make: 'Mercedes', model: 'C-Class', price: 55000 }
  ];

  constructor() {
    this.gridOptions = {
      paginationPageSize: 10,
      rowModelType: 'infinite',
      cacheBlockSize: 100,
      pagination: true,
      domLayout: 'autoHeight',
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
      },
      enableRangeSelection: true,
      suppressMenuHide: true,
    };
  }

  onGridReady(params: any): void {
    this.gridApi = params.api; // Assign the API to gridApi
    this.gridColumnApi = params.columnApi; // Assign the Column API to gridColumnApi
  }
}