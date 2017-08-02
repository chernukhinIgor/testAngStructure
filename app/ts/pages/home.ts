import { Component }       from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: 'app/templates/pages/home.html',
    styleUrls: [ 'app/css/home.css' ]
})
export class Home {
    constructor() {
        console.log('aaa21312')
    }
    onButtonClick () {
        console.log('aaaasaaaa');
    }
}
