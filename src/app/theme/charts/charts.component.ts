import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js' 

Chart.register(...registerables);
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart(){
    new Chart('piechart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [500, 1000, 1500,700, 500, 900],
          backgroundColor:[
            'red', 'blue', 'yellow', 'green', 'purple', 'orange'
          ]
          // borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
