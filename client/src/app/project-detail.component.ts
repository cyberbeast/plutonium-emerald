// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import { Component, Input } from '@angular/core';
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
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

// DEV IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>> 
// import { PROJECTS } from './mock-projects';
// DEV IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>

@Component({
    moduleId: module.id,
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html',
    styleUrls:['project-detail.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
    providers:[ProjectService]
})

export class ProjectDetailComponent {
    @Input()
    project: Project;
}