import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChartType, Row } from 'angular-google-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {

  @Input()
  data: Row[] = [];

  type: ChartType = ChartType.PieChart;
  options = {
    width: 300,
    height: 300,
    legend: {
      position: 'bottom',
      alignment: 'center'
    },
    sliceVisibilityThreshold: 0
  };

}
