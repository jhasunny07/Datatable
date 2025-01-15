import { Component } from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';
import { CommonModule } from '@angular/common';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-widget',
  standalone: true,
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  imports: [MainContentComponent, CommonModule, NgApexchartsModule]
})
export class WidgetComponent {

  
    // Collapse states for the widgets
    isCollapsedWidget1: boolean = false;
    isCollapsedWidget2: boolean = false;
    isCollapsedWidget3: boolean = false;
    isCollapsedWidget4: boolean = false;
    isCollapsedChartWidget: boolean = false;
  
    // ApexChart options for the chart in widget 5
    public chartOptions: ApexOptions = {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "Sample Data",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        }
      ],
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
    };
  
    // Toggle collapse state for widgets
    toggleCollapse(widgetNumber: number): void {
      switch (widgetNumber) {
        case 1:
          this.isCollapsedWidget1 = !this.isCollapsedWidget1;
          break;
        case 2:
          this.isCollapsedWidget2 = !this.isCollapsedWidget2;
          break;
        case 3:
          this.isCollapsedWidget3 = !this.isCollapsedWidget3;
          break;
        case 4:
          this.isCollapsedWidget4 = !this.isCollapsedWidget4;
          break;
        case 5:
          this.isCollapsedChartWidget = !this.isCollapsedChartWidget;
          break;
      }
    }
  }