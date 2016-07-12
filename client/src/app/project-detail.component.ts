// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    directives: [
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES, 
        MD_GRID_LIST_DIRECTIVES, 
        MD_TOOLBAR_DIRECTIVES, 
        MdIcon
    ],
    providers:[
        ProjectService, 
        MdIconRegistry
    ]
})

export class ProjectDetailComponent implements OnDestroy {
    
    // Inputs received from the AppComponent
    @Input()
    project: Project; //project input is the project set at the onSelect method attached to the click event of the Edit button of App Component View.
    sub: any;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.projectService.getProject(id).then(project => this.project = project);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    // navigation method for click event of the back button
    goBack() {
        window.history.back();
    }
}