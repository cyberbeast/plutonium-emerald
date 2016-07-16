// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// ANGULAR2 CORE IMPORTS END>>>>>>>>>>>>>>>

// UI IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>>
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
// UI IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>>

// DEPENDENCY IMPORTS BEGIN>>>>>>>>>>>>>>>>
import { Project } from './data-structures';
import { ProjectService } from './project.service';
import { ProjectsComponent } from "./projects.component";
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

import { AngularFire } from 'angularfire2';
import {MaterializeDirective} from "angular2-materialize";


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'],
    directives: [
        ProjectsComponent,
        MD_TOOLBAR_DIRECTIVES,
        MdIcon,
        ROUTER_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MaterializeDirective
    ],
    providers: [
        ProjectService,
        MdIconRegistry
    ]
})

export class AppComponent {
    title = 'Plutonium'; //App Title
    subtitle = "Emerald"; //App Subtitle

    constructor(public af:AngularFire){
        
    } 
}