import {Component, OnInit} from '@angular/core';
import {now} from 'moment';

declare var $: any;

@Component({
    selector: 'collective',
    moduleId: module.id,
    templateUrl: 'chimbs.collective.html',
    styleUrls: ['../../../node_modules/ng-drag-drop/style.css']


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
    updated: String = 'updated 0 minutes ago'

    activeComponents: Package[] = [];

    ngOnInit() {
    }

    onDropEvent(e: any) {
        this.activeComponents.push(e.dragData);
    }
}

class Package {
    name: String;
    title: String;
    price: String;
}
