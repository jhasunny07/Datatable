import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ApexChart, ApexXAxis, ApexYAxis, ApexTooltip, ApexAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css'],
  imports: [CommonModule, NgApexchartsModule]
})
export class AppContentComponent implements AfterViewInit, OnInit {
  [x: string]: any;
  totalUsers: number = 1200;
  activeSessions: number = 850;
  bandwidthUtilization: number = 75; // In percentage
  revenueThisMonth: number = 15000; // Revenue in currency format

  collapsedWidgets: boolean[] = [false, false, false, false, false, false, false, false, false];

  
  // Chart options for bandwidth usage
  chartBandwidthOptions = {
    series: [{
      name: "Bandwidth Usage",
      data: [10, 15, 13, 25, 30, 35, 40] // Example data
    }] as ApexAxisChartSeries,
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        tools: {
          pan: false, // Disable only pan tool
          
        }
      }
    } as ApexChart,
  
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] // Example months
    } as ApexXAxis,
  
    yaxis: [{
      title: {
        text: 'Bandwidth (Mbps)',
        style: {
          color: 'var(--text-light-color)' // Apply theme color to y-axis title
        }
      }
    }] as ApexYAxis[],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark' // Apply dark theme to tooltip
    } as ApexTooltip,
    colors: ['var(--success-color)'], // Use theme color for line chart
  };
  
  chartCustomerGrowthOptions = {
    chart: {
      type: 'area', // Changed to area chart
      height: 350,
      toolbar: {
        tools: {
          pan: false, // Disable only pan tool
       
        }
      }
    } as ApexChart,
    series: [
      {
        name: 'Customer Growth',
        data: [10, 25, 35, 55, 60, 75, 85, 95, 120, 150], // Example data for area chart
      }
    ] as ApexAxisChartSeries,
    stroke: {
      curve: 'smooth', // Smooth curve for a spline effect
      width: 2
    },
    fill: {
      type: 'gradient', // Gradient fill for the area chart
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#F4C724'], // Gradient color
        stops: [0, 100]
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      title: {
        text: 'Months',
        style: {
          color: 'var(--text-light-color)' // Apply theme color to x-axis title
        }
      }
    },
    yaxis: {
      title: {
        text: 'Growth (%)',
        style: {
          color: 'var(--text-light-color)' // Apply theme color to y-axis title
        }
      }
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
      theme: 'dark' // Apply dark theme to tooltip
    },
    colors: ['var(--primary-color)'], // Use theme color for area chart
  };
  

  // Alerts data (this can be dynamically populated)
  alerts = [
    { message: 'System overload detected!' },
    { message: 'Server downtime scheduled for maintenance.' }
  ];

  // Sample user data
  users = [
    { name: 'John Doe', status: 'Active', region: 'North America' },
    { name: 'Jane Smith', status: 'Inactive', region: 'Europe' }
  ];

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // Initialize any dynamic data, API calls, etc.
    setTimeout(() => {
      this['initializeCharts']();
    }, 0);
  }

  // Method to suspend a user
  suspendUser(user: any) {
    console.log('Suspending user:', user);
    user.status = 'Suspended';
  }

  // Method to upgrade a user's plan
  upgradePlan(user: any) {
    console.log('Upgrading user plan:', user);
    // Logic to upgrade the user's plan
  }

  toggleCollapse(index: number): void {
    this.collapsedWidgets[index] = !this.collapsedWidgets[index];
    const chartId = `chart${index + 1}`;

    if (this.collapsedWidgets[index]) {
      // Destroy the chart if collapsed
      this.destroyChart(chartId);
    } else {
      // Reinitialize the chart if expanded
      this.reinitializeChart(chartId);
    }
  }

  destroyChart(chartId: string): void {
    // Destroy the chart to remove it from the DOM
    const chart = this['chartInstances'][chartId];
    if (chart) {
      chart.destroy();
      this['chartInstances'][chartId] = null;
    }
  }

  reinitializeChart(chartId: string): void {
    // Recreate the chart after expanding
    if (!this['chartInstances'][chartId]) {
      this['createChart'](chartId, 'bar', 'Sales Data', ['Q1', 'Q2', 'Q3', 'Q4'], [150, 200, 250, 300], ['#FF5733', '#33FF57', '#3357FF', '#FF33A1']);
      this.triggerChartResize(chartId);
    }
  }

  triggerChartResize(chartId: string): void {
    const chart = this['chartInstances'][chartId];
    if (chart) {
      // Trigger resize and update to make sure it redraws
      chart.resize();
      chart.update();  // Explicitly trigger the chart to update itself
    }
  }

  

 
}
