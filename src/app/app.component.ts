import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DatatableComponent } from './shared/datatable/datatable.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,FormsModule, NavbarComponent, NgApexchartsModule, SidebarComponent, DatatableComponent,
     FormsModule, NgxDatatableModule, DataTablesModule, ScrollingModule],
})
export class AppComponent {
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

