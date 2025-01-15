import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexTooltip,
  ApexFill,
  ApexLegend,
  NgApexchartsModule,
} from 'ng-apexcharts';

// Define ChartOptions with non-nullable default values
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels?: ApexDataLabels;
  stroke: ApexStroke; // Non-nullable stroke
  title: ApexTitleSubtitle; // Non-nullable title
  tooltip?: ApexTooltip;
  fill?: ApexFill;
  legend: ApexLegend; // Non-nullable legend
  colors: string[]; // Non-nullable colors
};

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  imports: [CommonModule, NgApexchartsModule],
})
export class MainContentComponent {
  public barChartOptions: ChartOptions = {
    series: [
      {
        name: 'Revenue',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    title: {
      text: 'Monthly Revenue',
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      position: 'bottom',
    },
    colors: ['#1E90FF'], // Default color for the bar chart
  };

  public lineChartOptions: ChartOptions = {
    series: [
      {
        name: 'Website Traffic',
        data: [20, 40, 30, 50, 80, 70, 110],
      },
    ],
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Weekly Traffic',
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    legend: {
      position: 'bottom',
    },
    colors: ['#32CD32'], // Default color for the line chart
  };

  public splineChartOptions: ChartOptions = {
    series: [
      {
        name: 'Growth Rate',
        data: [15, 40, 45, 60, 70, 85, 90, 120],
      },
    ],
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth', // Spline curve for smooth line
    },
    title: {
      text: 'Growth Rate Over Time',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    legend: {
      position: 'bottom',
    },
    colors: ['#FF6347'], // Default color for the spline chart
  };

  constructor() {
    // Ensure all charts are initialized with valid data
    // If needed, you can add dynamic data fetching here
  }
}
