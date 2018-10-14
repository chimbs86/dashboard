import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'collective',
    moduleId: module.id,
    templateUrl: 'chimbs.collective.html'

})

export class ChimbsCollective implements OnInit {
    components: Package[] = [{
            name: 'Gaurav', title: 'Expert', price: '250'
        },
        {
            name: 'Chimbs', title: 'Farmer', price: '300'
        },
        {
            name: 'Amit', title: 'Distributor', price: '500'
        }];

    activeComponents: Package[] = [
        ];

    ngOnInit() {
    }
}

class Package {
    name: String;
    title: String;
    price: String;
}
