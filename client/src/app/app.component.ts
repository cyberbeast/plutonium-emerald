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
import {
    ROUTER_DIRECTIVES,
    Router
} from '@angular/router';
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
import { NavigationService } from './navigation.service';
import { TitleCase  } from './titlecase.pipe'

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
        DebugService,
        NavigationService
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
        ]),
    trigger('navHistoryFlyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
    ],
    pipes: [TitleCase]
})

export class AppComponent implements OnDestroy, OnInit {
    title = 'plutonium'; //App Title
    subtitle = "Emerald"; //App Subtitle
    projectObject: Observable<any[]>;
    projectFunctionObject: Observable<any[]>;
    subscription: Subscription;
    navHistory: string[] = [];
    navFlow: string[] = ['dashboard', 'projects', 'functions'];
    param:string;

    constructor(
        public af: AngularFire,
        private debugService: DebugService,
        private navigationService: NavigationService,
        private router: Router) { }

    clicky() {
        console.log(this.projectObject);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

    gotoView(viewName: string){
        // this.param = viewName.toLowerCase;
        this.router.navigate([( viewName )]);
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

        this.navigationService.viewsUpdated$.subscribe(
            result => {
                console.log("INDEX IS: " + this.navFlow.indexOf(result));
                console.log("ARRAY IS: " + this.navHistory);
                // console.log("Extracted is: " + this.navFlow.slice(0,this.navFlow.indexOf(result)));
                // this.navHistory = this.navFlow.slice(0, this.navFlow.indexOf(result)+1);

                var index = this.navFlow.indexOf(result)
                if (index === 0) {
                    this.navHistory.length = 0;
                    this.navHistory.push(result);
                }
                else {
                    // for (var _i = 0; _i < index; _i++){
                    //     this.navHistory.pop();
                    // }
                    this.navHistory.length = 0;
                    this.navHistory = this.navFlow.slice(0, index+1);
                }
            }
        )
    }

}