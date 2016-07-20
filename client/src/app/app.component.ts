// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import { 
    Component,
    OnDestroy,
    OnInit,
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
 } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// ANGULAR2 CORE IMPORTS END>>>>>>>>>>>>>>>

// UI IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>>
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
// import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
// import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
// import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MaterializeDirective } from "angular2-materialize";
// UI IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>>

// DEPENDENCY IMPORTS BEGIN>>>>>>>>>>>>>>>>
import { Project } from './data-structures';
import { ProjectService } from './project.service';
// import { ProjectsComponent } from "./projects.component";
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

// Firebase IMPORTS BEGIN>>>>>>>>>>>>>>>>>>
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// Firebase IMPORTS END>>>>>>>>>>>>>>>>>>>>

import { DebugService } from './debug.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'],
    directives: [
        // ProjectsComponent,
        MdIcon,
        ROUTER_DIRECTIVES,
        MaterializeDirective
    ],
    providers: [
        ProjectService,
        MdIconRegistry,
        DebugService
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

export class AppComponent implements OnDestroy, OnInit {
    title = 'Plutonium'; //App Title
    subtitle = "Emerald"; //App Subtitle
    projectObject: Observable<any[]>;
    projectFunctionObject: Observable<any[]>;
    subscription: Subscription;

    constructor(
        public af: AngularFire,
        private debugService: DebugService) {

    }

    clicky() {
        console.log(this.projectObject);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.debugService.projectListRetrieved$.subscribe(
            res => {
                this.projectObject = res;
            }
        );
        
        this.debugService.projectFunctionListRetrieved$.subscribe(
            result => {
                this.projectFunctionObject = result;
                console.log("CAPTURED");
            }
        );
    }

}