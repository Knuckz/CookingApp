import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.less']
})
export class AlertComponent {
    @Input() message: String;
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }
}