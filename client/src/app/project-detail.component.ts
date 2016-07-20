// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    group
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ANGULAR2 CORE IMPORTS END>>>>>>>>>>>>>>>

// UI IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>>
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
// import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
// import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
// import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
// UI IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>>

// DEPENDENCY IMPORTS BEGIN>>>>>>>>>>>>>>>>
import { Project, Project_Functions } from './data-structures';
import { DebugService } from './debug.service';
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
// Firebase IMPORTS BEGIN>>>>>>>>>>>>>>>>>>
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// Firebase IMPORTS END>>>>>>>>>>>>>>>>>>>>

import {MaterializeDirective} from "angular2-materialize";

@Component({
    moduleId: module.id,
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html',
    styleUrls: ['project-detail.component.css'],
    directives: [
        MdIcon,
        MaterializeDirective
    ],
    providers: [
        MdIconRegistry
    ],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateY(0)' })),
            transition('void => *', [
                animate(300, keyframes([
                    style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateY(15px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                ]))
            ]),
            transition('* => void', [
                animate(300, keyframes([
                    style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.7 }),
                    style({ opacity: 0, transform: 'translateY(100%)', offset: 1.0 })
                ]))
            ])
        ])
    ]
})

export class ProjectDetailComponent implements OnInit, OnDestroy {
    sub: any;
    project_functions: Observable<any>;


    constructor(
        private _route: ActivatedRoute,
        private _af: AngularFire,
        public af: AngularFire,
        private debugService: DebugService
    ) { }

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
        this.debugService.announceProjectFunctionsList(this.project_functions);

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // navigation method for click event of the back button
    goBack() {
        console.log("Going back");
        window.history.back();
    }
}