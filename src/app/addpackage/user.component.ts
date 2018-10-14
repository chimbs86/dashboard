import {Component, Input, OnInit} from '@angular/core';
import {ChimbsCollective} from '../chimbscollective/dashboard.component';
import {NavbarComponent} from '../shared/navbar/navbar.component';


@Component({
    selector: 'user-package',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class AddPackage implements OnInit {
    username = '';
    title = '';
    cost = 0;
    ngOnInit() {
    }


    submit() {
        ChimbsCollective.components.push({
            name: this.username, title: this.title, price: this.cost
        });
        NavbarComponent.notifications.push({
            name: 'Added user ' + this.username
        });
    }
}
