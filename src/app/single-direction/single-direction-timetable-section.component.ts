import { Component, Input, OnInit } from '@angular/core';
import { SingleDirectionTimetable } from '../shared/models/single-direction-timetable';
import { StationTimeTable } from '../shared/models/station-timetable';
import { TimetableService } from '../shared/timetable.service';

@Component({
    selector: 'app-single-direction-timetable-section',
    templateUrl: './single-direction-timetable-section.component.html',
    styleUrls: ['./single-direction-timetable-section.component.scss']
})
export class SingleDirectionTimetableSectionComponent implements OnInit {
    @Input() timetable: SingleDirectionTimetable;
    trains: StationTimeTable[];
    retryHandler: any;
    refreshHandler: any;

    constructor(private timetableService: TimetableService) {
    }

    ngOnInit() {
        this.refreshLive(null);
    }

    refreshLive(component) {
        const that = component === null ? this : component;
        that.timetableService.getSingleStationTimetable(that.timetable).subscribe((data) => {
            that.trains = data;
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
        return currentTime.getHours() * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds();
    }

    getTimeDisplay(time: number) {
        const seconds = time % 100;
        time = Math.trunc(time / 100);
        const minutes = time % 100;
        const hours = Math.trunc(time / 100);
        const hoursDisplay = hours < 10 ? '0' + hours.toString() : hours;
        const minutesDisplay = minutes < 10 ? '0' + minutes.toString() : minutes;
        const secondsDisplay = seconds < 10 ? '0' + seconds.toString() : seconds;
        return hoursDisplay + ':' + minutesDisplay + ':' + secondsDisplay;
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

}
