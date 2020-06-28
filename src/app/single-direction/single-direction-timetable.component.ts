import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { SingleDirectionTimetable } from '../shared/models/single-direction-timetable';
import { SingleDirectionSelectorComponent } from './single-direction-selector.component';
import { Constants } from '../shared/util/constants';


@Component({
  selector: 'app-single-direction-timetable',
  templateUrl: './single-direction-timetable.component.html',
  styleUrls: ['./single-direction-timetable.component.scss']
})
export class SingleDirectionTimetableComponent implements OnInit {
  @Input() watchList: SingleDirectionTimetable[];
  @ViewChild(SingleDirectionSelectorComponent, { static: true }) itemEditor: SingleDirectionSelectorComponent;

  ngOnInit() {
    const watchListStr = sessionStorage.getItem('watchList');
    if (watchListStr) {
      this.watchList = JSON.parse(watchListStr);
    }

  }

  watchItemOnSave() {
    const item: SingleDirectionTimetable = this.itemEditor.selectorForm.getRawValue();
    item.isLive = this.itemEditor.selectorForm.value.startTimeSelection === 'live';
    item.stationName = Constants.STATION.find(x => x.lineId === item.lineId)
      .stationList.find(x => x.stationId === item.stationId).stationName;
    if (item.destStationId < 2) {
      item.direction = item.destStationId;
      item.directionDisplay = Constants.LINE.find(x => x.lineId === item.lineId)
        .direction.find(x => x.directionId === item.destStationId).description;
      item.destStationId = undefined;
    } else {
      item.destStationName = Constants.STATION.find(x => x.lineId === item.lineId)
        .stationList.find(x => x.stationId === item.destStationId).stationName;
    }
    if (this.itemEditor.selectorForm.controls['diagramTypeSelection'].value !== 'live') {
      item.diagramType = this.itemEditor.selectorForm.controls['diagramTypeSelection'].value;
    }
    this.watchList.push(item);
    sessionStorage.setItem('watchList', JSON.stringify(this.watchList));
  }

  unwatchItem(item) {
    const idx = this.watchList.indexOf(item);
    this.watchList = this.watchList.slice(0, idx).concat(this.watchList.slice(idx + 1));
    sessionStorage.setItem('watchList', JSON.stringify(this.watchList));
  }
}
