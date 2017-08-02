import { Component }       from '@angular/core';

@Component({
    selector: 'tab1',
    templateUrl: 'app/templates/components/tab1.component.html',
    styleUrls: [ 'app/css/tab1.component.css' ]
})
export class Tab1Component {
    private toggleText: string = "Show";
    private show: boolean = false;

    public onToggle(): void {
        this.show = !this.show;
        this.toggleText = this.show ? "Hide" : "Show";
    }
}
