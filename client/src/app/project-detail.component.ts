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
import { Project, Project_Functions } from './data-structures';
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
// Firebase IMPORTS BEGIN>>>>>>>>>>>>>>>>>>
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// Firebase IMPORTS END>>>>>>>>>>>>>>>>>>>>

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
        MdIconRegistry
    ]
})

export class ProjectDetailComponent implements OnInit, OnDestroy {
    
    // // Inputs received directly from the AppComponent. 
    // @Input()
    // selectedProjectName: string; //selectedProjectID can be set explicitly - Fir example, user directly types the URL for /project-detail/name.
    sub: any;
    project_functions: Observable<any>;
    // selected_name: FirebaseObjectObservable<any>;
    

    constructor(
        private _route: ActivatedRoute,
        private _af: AngularFire,
        public af: AngularFire
    ) {}

    ngOnInit() {
        this.sub = this._route.params
            .map(params => {
                return params["key"];
            })
            .subscribe(key => {
                this.project_functions = this._af.database.list(`functions`)
                .map(items => {
                    const filtered = items.filter(item => item.pkey === key);
                    return filtered;
                });
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // navigation method for click event of the back button
    goBack() {
        console.log("Going back");
        // console.log(this.selectedProjectName);
        window.history.back();
    }

    // getFunctions() {
    //     this.project_functions = this.projectService.getProject(this.selectedProjectName);
    //         // console.log("Initialized");
    //         console.dir("Output is: " + this.project_functions);
    // }
}