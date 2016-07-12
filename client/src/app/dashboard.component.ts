// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// ANGULAR2 CORE IMPORTS END>>>>>>>>>>>>>>>

// UI IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>>
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
// UI IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>>

@Component({
    moduleId: module.id,
    selector:'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:[
        'dashboard.component.css'
    ],
    directives: [
        MdIcon,
        MD_BUTTON_DIRECTIVES
    ],
    providers:[
        MdIconRegistry
    ]
})

export class DashboardComponent {
    constructor(
        private router: Router
    ){}

    gotoProjectsView(){
        this.router.navigate(['/projects']);

    }
}