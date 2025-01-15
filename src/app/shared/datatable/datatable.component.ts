import { Component, OnInit, ViewChild, Input, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';  // Import the directive
import { Subject } from 'rxjs';

import 'jspdf-autotable';
import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  @Input() tableTitle: string = 'Static DataTable'; 
exportToCsv() {
throw new Error('Method not implemented.');
}

dataTable: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;  // Declare the DataTableDirective reference

  dtOptions: any = {};
  itemsPerPage: number = 10; // Declare itemsPerPage property with a default value
  isDropdownVisible: boolean = false;
  dtTrigger: Subject<any> = new Subject();  // Declare the trigger


  columns = [
    { name: 'Rendering engine', key: 'engine', visible: true },
    { name: 'Browser', key: 'browser', visible: true },
    { name: 'Platform(s)', key: 'platform', visible: true },
    { name: 'Engine version', key: 'version', visible: true },
    { name: 'CSS grade', key: 'cssGrade', visible: true }
  ];
  data: any[] = [
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', version: '4', cssGrade: 'X' },
    { engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', version: '5', cssGrade: 'C' },
    { engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', version: '5.5', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', version: '6', cssGrade: 'A' },
    { engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', version: '7', cssGrade: 'A' },
    { engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', version: '6', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
    { engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', version: '1.7', cssGrade: 'A' },
  ];
  visibleRows: any[] = [];
  rowHeight = 40; // Estimate the row height (can be dynamic)
  totalHeight = 0; // The total height of the table for scroll calculation

  constructor() {}
  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      searching: true,
      ordering: true,
      scrollX: true, // Enable horizontal scroll
      order: [[0, 'asc']],  // Default sorting
      dom: '<"top"f>rt<"bottom"lp><"clear">',  // Separates pagination outside the table
      language: {
        paginate: {
          previous: 'Prev',
          next: 'Next'
        }
      },
      buttons: ['csv', 'excel'],
    };
    
    this.totalHeight = this.data.length * this.rowHeight;
    this.updateVisibleRows(0);
  }


  updateVisibleRows(scrollTop: number): void {
    const startIndex = Math.floor(scrollTop / this.rowHeight);
    const endIndex = Math.min(this.data.length - 1, Math.ceil((scrollTop + 400) / this.rowHeight)); // 400 is the visible area height

    this.visibleRows = this.data.slice(startIndex, endIndex + 1);
  }

  // Listen for the scroll event
  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const scrollTop = event.target.scrollTop;
    this.updateVisibleRows(scrollTop);
  }
  
  // Export table to CSV
  exportToCSV() {
    const csvContent = this.convertToCSV(this.data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'datatable.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Convert data to CSV format
  private convertToCSV(data: any[]): string {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map((row) => Object.values(row).join(','));
    return [headers, ...rows].join('\n');
  }

  // Export table to Excel
  exportToExcel() {
    const tableHTML = `
      <table>
        <thead>
          <tr>
            ${Object.keys(this.data[0])
              .map((key) => `<th>${key}</th>`)
              .join('')}
          </tr>
        </thead>
        <tbody>
          ${this.data
            .map(
              (row) =>
                `<tr>${Object.values(row)
                  .map((value) => `<td>${value}</td>`)
                  .join('')}</tr>`
            )
            .join('')}
        </tbody>
      </table>
    `;
    const blob = new Blob([tableHTML], { type: 'application/vnd.ms-excel' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'datatable.xls');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }




  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleColumnVisibility(column: any) {
    column.visible = !column.visible;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const dropdownButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (!dropdownButton?.contains(event.target as Node) && !dropdownMenu?.contains(event.target as Node)) {
      this.isDropdownVisible = false;
    }
  }

  getVisibleColumns() {
    return this.columns.filter(column => column.visible);
  }
  // Export table to PDF
  exportToPdf(): void {
    const exportDate = new Date().toLocaleString();
    const tableTitle = 'Data Table Report';
  
    // Create content for the PDF
    const pageContent = `
 <div style="font-family: Arial, sans-serif; font-size: 12px; padding: 10px 40px 40px; width: 100%;">
    <!-- Header Section with Logo -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <img src="assets/images/onlinelogo.png" alt="Company Logo" style="width: 80px; height: auto;">
      <h1 style="margin: 0; font-size: 24px; color: #333; text-align: center; flex-grow: 1;">Data Table Report</h1>
    </div>

    <!-- Export Info -->
    <p style="text-align: right; font-size: 12px; color: #666;">Exported on: ${exportDate}</p>

    <!-- Table Section -->
    <div class="pdf-table">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <thead>
          <tr style="background-color: #2F3C7E; color: white; text-align: left;">
            ${this.columns.map(col => `<th style="padding: 8px; border: 1px solid #ddd;">${col.name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${this.data.map((row, rowIndex) => `
            <tr style="background-color: ${rowIndex % 2 === 0 ? '#f9f9f9' : 'white'};">
              ${this.columns.map(col => `<td style="padding: 8px; border: 1px solid #ddd;">${row[col.key]}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Footer Section -->
    <div style="text-align: center; font-size: 10px; color: #666;">
      © ${new Date().getFullYear()} Internet Services Company. All rights reserved.
    </div>
  </div>
`;
  
    // Create a temporary div to hold the content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = pageContent;
    document.body.appendChild(tempDiv);
  
    // Apply CSS to handle page breaks properly
    const style = document.createElement('style');
    style.innerHTML = `
      .pdf-table table { 
        width: 100%; 
        border-collapse: collapse; 
      }
      .pdf-table table tbody tr {
        page-break-inside: avoid; /* Prevent rows from being split across pages */
      }
      .page-break {
        page-break-before: always; /* Force page break */
      }
    `;
    document.head.appendChild(style);
  
    const options = {
      margin: 0.5,
      filename: 'datatable_report.pdf',
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
      },
    };
  
    html2pdf()
      .from(tempDiv)
      .set(options)
      .save()
      .then(() => {
        console.log('PDF saved successfully!');
        tempDiv.remove();
        style.remove();
      })
      .catch((error: any) => {
        console.error('Error generating PDF:', error);
        tempDiv.remove();
        style.remove();
      });














      
  }
  
  
}
