import { Component, Input, ViewChild } from '@angular/core';
import { SingleDirectionTimetable } from '../shared/models/single-direction-timetable';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SingleDirectionSelectorComponent } from './single-direction-selector.component';
import { Constants } from '../shared/util/constants';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-single-direction-timetable',
  templateUrl: './single-direction-timetable.component.html',
  styleUrls: ['./single-direction-timetable.component.scss']
})
export class SingleDirectionTimetableComponent {
  @Input() watchList: SingleDirectionTimetable[];
  @ViewChild(SingleDirectionSelectorComponent) itemEditor: SingleDirectionSelectorComponent;

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
  }
}
