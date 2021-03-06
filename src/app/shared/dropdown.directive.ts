import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[dropdownDirective]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;
    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen
    }
    constructor(private eleRef: ElementRef){

    }
}