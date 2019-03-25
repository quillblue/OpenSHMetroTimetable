import { StationTimeTable } from './station-timetable';

export class SingleDirectionTimetable {
    lineId: number;
    stationId: number;
    stationName: string;
    direction: number;
    directionDisplay: string;
    destStationId: number;
    destStationName: string;
    isLive: boolean;
    diagramType: string;
    diagramSpecified: string;
    startTime: string;
}
