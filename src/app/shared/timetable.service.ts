import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StationTimeTable } from './models/station-timetable';
import { SingleDirectionTimetable } from './models/single-direction-timetable';
import { StationTimetableCriteria } from './models/station-timetable-criteria';
import { InterchangeGuideAndTimetable } from './models/interchange-guide-and-timetable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TimetableService {
    private serviceBaseUrl: string;

    constructor(private http: HttpClient) {
        this.serviceBaseUrl = 'http://www.quillblue.com/shmetro-api';
    }

    getSingleStationTimetable(criteria: SingleDirectionTimetable): Observable<StationTimeTable[]> {
        return this.http.get<StationTimeTable[]>(this.serviceBaseUrl + '/single', {
            params: {
                line: criteria.lineId.toString(),
                fromStation: criteria.stationId.toString(),
                toStation: criteria.destStationId === undefined ? '' : criteria.destStationId.toString(),
                live: criteria.isLive ? '1' : '0',
                diagramType: criteria.diagramType,
                diagramSpecified: criteria.diagramSpecified,
                direction: criteria.direction === undefined ? '' : criteria.direction.toString(),
                travelTime: criteria.startTime.replace(':', '') + '00'
            }
        });
    }

    getSingleTrainTimetable(criteria: StationTimeTable): Observable<StationTimeTable[]> {
        return this.http.get<StationTimeTable[]>(this.serviceBaseUrl + '/train', {
            params: {
                trainNo: criteria.trainNo,
                benchmarkStationId: criteria.fromStationId.toString(),
                benchmarkStationDept: criteria.fromDeparture.toString(),
                diagramSpecified: criteria.diagramNum
            }
        });
    }

    getStationTimetable(criteria: StationTimetableCriteria): Observable<InterchangeGuideAndTimetable[]> {
        return this.http.get<InterchangeGuideAndTimetable[]>(this.serviceBaseUrl + '/station', {
            params: {
                station: criteria.stationId.toString(),
                diagramType: criteria.diagramType,
                time: criteria.time.toString()
            }
        });
    }
}
