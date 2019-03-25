import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SingleDirectionTimetable } from '../shared/models/single-direction-timetable';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LineStationSelectorComponent } from '../station-selector/line-station-selector.component';
import { Constants } from '../shared/util/constants';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'app-single-direction-selector',
  templateUrl: './single-direction-selector.component.html',
  styleUrls: ['./single-direction-selector.component.scss']
})
export class SingleDirectionSelectorComponent implements OnInit {
  selectorForm: FormGroup;
  @ViewChild(LineStationSelectorComponent) lineStationSelector: LineStationSelectorComponent;
  @Output() readonly criteriaConfirmed = new EventEmitter<void>();

  destStationList: any[];

  constructor(fb: FormBuilder) {
    this.selectorForm = fb.group({
      lineId: 1,
      stationId: 121,
      destDirection: 0,
      direction: 0,
      destStationId: 0,
      diagramSpecified: '',
      diagramTypeSelection: 'live',
      startTimeSelection: 'live',
      startTime: new Date().getHours().toString() + ':' + new Date().getMinutes().toString()
    });
  }

  ngOnInit() {
  }

  fromStationSelected() {
    const selectedLineId = this.lineStationSelector.selectedLineId;
    this.selectorForm.controls['lineId'].patchValue(selectedLineId);
    this.selectorForm.controls['stationId'].patchValue(this.lineStationSelector.selectedStationId);
    this.destStationList = Constants.LINE.find(x => x.lineId === selectedLineId).direction.map(x => new Object({
      text: x.description,
      value: x.directionId
    }));
    this.destStationList = this.destStationList.concat(
      Constants.STATION.find(x => x.lineId === selectedLineId).stationList.map(x => new Object({
        text: x.stationName,
        value: x.stationId
      })));
    this.selectorForm.controls['destDirection'].patchValue(this.destStationList[0].value);
  }

  confirmCriteria() {
    this.criteriaConfirmed.emit();
  }
}
