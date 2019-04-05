import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { Constants } from '../shared/util/constants';
import { TimetableService } from '../shared/timetable.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { StationTimetableCriteria } from '../shared/models/station-timetable-criteria';
import { TimeFormatUtil } from '../shared/util/time-format-util';
import { StationTimeTable } from '../shared/models/station-timetable';

@Component({
    selector: 'app-train-timetable',
    templateUrl: './train-timetable.component.html',
    styleUrls: ['./train-timetable.component.scss']
})

export class TrainTimetableComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public criteria: StationTimeTable, private timetableService: TimetableService) { }

    timetable: StationTimeTable[];

    ngOnInit() {
        console.log(this.criteria);
        this.timetableService.getSingleTrainTimetable(this.criteria).subscribe((result) => {
             this.timetable = result;
        });
    }

    getTimeDisplay(time: number) {
        return TimeFormatUtil.getTimeDisplay(time);
    }
}
