import {Routes} from '@angular/router';
import {ChimbsCollective} from './chimbscollective/dashboard.component';
import {AddPackage} from './addpackage/user.component';
import {TableComponent} from "./table/table.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: ChimbsCollective
    },
    {
        path: 'dashboard/',
        component: ChimbsCollective
    },
    {
        path: 'user',
        component: AddPackage
    },
    {
        path: 'user?',
        component: AddPackage
    },
    {
        path: 'table',
        component: TableComponent
    },
    // {
    //     path: 'typography',
    //     component: TypographyComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'maps',
    //     component: MapsComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
    // {
    //     path: 'upgrade',
    //     component: UpgradeComponent
    // }
]
