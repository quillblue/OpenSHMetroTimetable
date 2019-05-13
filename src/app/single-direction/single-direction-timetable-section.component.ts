import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SingleDirectionTimetable } from '../shared/models/single-direction-timetable';
import { StationTimeTable } from '../shared/models/station-timetable';
import { TimetableService } from '../shared/timetable.service';
import { MatDialog } from '@angular/material';
import { StationTimetableForInterchangeComponent } from '../station-timetable/station-timetable-for-interchange.component';
import { Constants } from '../shared/util/constants';
import { TimeFormatUtil } from '../shared/util/time-format-util';
import { TrainTimetableComponent } from '../train-timetable/train-timetable.component';

@Component({
    selector: 'app-single-direction-timetable-section',
    templateUrl: './single-direction-timetable-section.component.html',
    styleUrls: ['./single-direction-timetable-section.component.scss']
})
export class SingleDirectionTimetableSectionComponent implements OnInit {
    @Input() timetable: SingleDirectionTimetable;
    @Output() readonly unwatched = new EventEmitter<void>();

    trains: StationTimeTable[];
    retryHandler: any;
    refreshHandler: any;

    constructor(private timetableService: TimetableService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.refreshLive(null);
    }

    refreshLive(component) {
        const that = component === null ? this : component;
        that.timetableService.getSingleStationTimetable(that.timetable).subscribe((data) => {
            if (that.trains) {
                that.trains = that.trains.filter(t => t.locked).concat(data);
            } else {
                that.trains = data;
            }
            that.refresh(that);
            // window.clearInterval();
            window.setInterval(that.refresh, 1000, that);
            if (data.length > 0) {
                const nextRefreshSeconds = that.getNextRefreshSeconds(data[0].fromDeparture) * 1000;
                window.setTimeout(that.refreshLive, nextRefreshSeconds, that);
            } else {
                window.setTimeout(that.refreshLive, 60000, that);
            }
        },
            () => {
                window.setTimeout(that.refreshLive, 1000, that);
            }
        );
    }

    refresh(component) {
        const currentTime = new Date();
        component.trains.forEach(element => {
            element.countdown = component.getCountDownDisplay(element.fromArrival, currentTime);
        });
    }

    getCurrentTimeToNumber() {
        const currentTime = new Date();
        const hours = currentTime.getHours() < 3 ? (currentTime.getHours() + 24) : currentTime.getHours();
        return hours * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds();
    }

    getTimeDisplay(time: number) {
        return TimeFormatUtil.getTimeDisplay(time);
    }

    getCountDownDisplay(targetTime: number, currentTime: Date) {
        const countdown = 0;
        const targetSeconds = targetTime % 100;
        const targetMinutes = Math.trunc(targetTime / 100) % 100;
        const targetHours = Math.trunc(targetTime / 10000);
        const currentSeconds = currentTime.getSeconds();
        const currentMinutes = currentTime.getMinutes();
        const currentHours = currentTime.getHours();

        if (currentHours > targetHours || (currentHours === targetHours && currentMinutes > targetMinutes) ||
            (currentHours === targetHours && currentMinutes === targetMinutes && currentSeconds >= targetSeconds)) {
            return '已到站';
        }
        let deltaMinutes = (targetHours - currentHours) * 60 + targetMinutes - currentMinutes;
        if (deltaMinutes >= 60) { return '>60:00'; }
        let deltaSeconds = targetSeconds - currentSeconds;
        if (deltaSeconds < 0) {
            deltaMinutes -= 1;
            deltaSeconds += 60;
        }
        const minutesDisplay = deltaMinutes < 10 ? '0' + deltaMinutes.toString() : deltaMinutes.toString();
        const secondsDisplay = deltaSeconds < 10 ? '0' + deltaSeconds.toString() : deltaSeconds.toString();
        return minutesDisplay + ':' + secondsDisplay;
    }

    getNextRefreshSeconds(targetTime: number) {
        const currentTime = new Date();
        const targetSeconds = targetTime % 100;
        const targetMinutes = Math.trunc(targetTime / 100) % 100;
        const targetHours = Math.trunc(targetTime / 10000);
        const currentSeconds = currentTime.getSeconds();
        const currentMinutes = currentTime.getMinutes();
        const currentHours = currentTime.getHours();
        return (targetHours - currentHours) * 3600 + (targetMinutes - currentMinutes) * 60 + (targetSeconds - currentSeconds);
    }

    trackStation(item: StationTimeTable) {
        this.dialog.open(StationTimetableForInterchangeComponent, {
            width: '90%',
            height: '80vh',
            data: {
                benchmarkLineId: this.timetable.lineId,
                stationId: this.timetable.destStationId,
                stationName: this.timetable.destStationName,
                diagramType: this.timetable.diagramType === undefined ?
                    Constants.CurrentDiagramType(new Date().getDay()) : this.timetable.diagramType,
                time: item.destArrival
            }
        });
    }

    trackTrain(item: StationTimeTable) {
        this.dialog.open(TrainTimetableComponent, {
            width: '90%',
            height: '80vh',
            data: item
        });
    }

    lockTrain(item: StationTimeTable) {
        item.locked = true;
    }

    unlockTrain(item: StationTimeTable) {
        item.locked = false;
    }

    unwatch() {
        if (confirm('确认要删除此项吗?')) {
            this.unwatched.emit();
        }
    }

}
