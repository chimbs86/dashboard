import {Component, OnInit} from '@angular/core';
import {Package} from '../Package';
import {AppComponent} from '../app.component';

declare var $: any;

@Component({
    selector: 'collective',
    moduleId: module.id,
    templateUrl: 'chimbs.collective.html',
    styleUrls: ['../../../node_modules/ng-drag-drop/style.css']


})

export class ChimbsCollective implements OnInit {
    static components: Package[] = [{
        name: 'Gaurav', title: 'Expert', price: 250
    },
        {
            name: 'Chimbs', title: 'Farmer', price: 300
        },
        {
            name: 'Amit', title: 'Distributor', price: 500
        }];


    static activeComponents: Package[] = [];
    components = ChimbsCollective.components;
    activeComponents = ChimbsCollective.activeComponents;
    ngOnInit() {
    }

    onDropEvent(e: any) {
        ChimbsCollective.activeComponents.push(e.dragData);
    }

    total() {
        let value = 0;
        for (const currentComponent of ChimbsCollective.activeComponents) {
            value = currentComponent.price + value;
        }
        return 'total cost = $ ' + value;
    }
}


