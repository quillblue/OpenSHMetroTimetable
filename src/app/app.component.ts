import { Component } from '@angular/core';
import { SingleDirectionTimetable } from './shared/models/single-direction-timetable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  exampleWatchList: SingleDirectionTimetable[] = [
    // {
    //   line: 13,
    //   stationId: 1323,
    //   stationName: '丰庄',
    //   direction: 1,
    //   directionDisplay: '世博大道',
    //   destStationId: 1328,
    //   destStationName: '隆德路',
    //   isLive: true,
    //   diagramType: null,
    //   startTime: new Date()
    // },
    // {
    //   line: 11,
    //   stationId: 1132,
    //   stationName: '嘉定西',
    //   direction: 1,
    //   directionDisplay: '迪士尼',
    //   destStationId: 1149,
    //   destStationName: '徐家汇',
    //   isLive: true,
    //   diagramType: null,
    //   startTime: new Date()
    // },
    // {
    //   line: 11,
    //   stationId: 1131,
    //   stationName: '嘉定北',
    //   direction: 1,
    //   directionDisplay: '迪士尼',
    //   destStationId: 1147,
    //   destStationName: '江苏路',
    //   isLive: true,
    //   diagramType: null,
    //   startTime: new Date()
    // }

  ];
}
