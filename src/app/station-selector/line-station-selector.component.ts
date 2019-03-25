import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Constants } from '../shared/util/constants';


@Component({
    selector: 'app-line-station-selector',
    templateUrl: './line-station-selector.component.html',
    styleUrls: ['./line-station-selector.component.scss']
})
export class LineStationSelectorComponent implements OnInit {
    lineList = Constants.LINE;
    stationList: any[];
    selectedStationId: number;
    selectedLineId: number;
    @Input() initialStationId: number;
    @Output() readonly stationSelected = new EventEmitter<void>();

    lineOnChange() {
        this.stationList = Constants.STATION.find(x => x.lineId === this.selectedLineId).stationList;
        this.selectedStationId = this.stationList[0].stationId;
        this.stationOnChange();
    }

    stationOnChange() {
        this.stationSelected.emit();
    }

    ngOnInit() {
        if (!this.initialStationId) {
            this.initialStationId = 111;
        }
        this.selectedLineId = Math.floor(this.initialStationId / 100);
        this.lineOnChange();
        this.selectedStationId = this.initialStationId;
    }
}
