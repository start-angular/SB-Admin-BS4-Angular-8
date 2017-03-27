import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() {
        let i = 0;
        setInterval(() => {
            this.data = i++;
            console.log(this.data);
            this.event.emit(i);
        }, 1000);
    }
}
