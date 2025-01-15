import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChartType, NgApexchartsModule } from 'ng-apexcharts';  // Import NgApexchartsModule

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  standalone: true,
  imports: [NgApexchartsModule],  // Add NgApexchartsModule to imports
})
export class ChartComponent {
chartOptions = {
    series: [{
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    chart: {
      type: 'line' as ChartType,
      height: 350
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };
}
