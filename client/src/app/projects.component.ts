// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
} from '@angular/core';
import { Router } from '@angular/router';
// ANGULAR2 CORE IMPORTS END>>>>>>>>>>>>>>>

// UI IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>>
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
// import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
// import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
// import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
// UI IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>>

// DEPENDENCY IMPORTS BEGIN>>>>>>>>>>>>>>>>
import { Project } from './data-structures';
import { ProjectService } from './project.service';
import { ProjectDetailComponent } from './project-detail.component';
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

// Firebase IMPORTS BEGIN>>>>>>>>>>>>>>>>>>
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// Firebase IMPORTS END>>>>>>>>>>>>>>>>>>>>

import { DebugService } from './debug.service';
import { NavigationService } from './navigation.service';

@Component({
  moduleId: module.id,
  selector: 'my-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
  directives: [
    ProjectDetailComponent,
    MdIcon
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

export class ProjectsComponent implements OnInit {
  title = "projects";
  projects: Observable<any[]>; //projects property. DEFINED in data-structures.ts. POPULATED by mock-projects.ts.
  selectedProjectName: string; //selectedProject property. USED when user clicks on the edit button of a project card.

  // onSelect method triggered by the click event of the Edit button on a project card.
  onSelect(key: string) {
    this.router.navigate(['/project-detail', key]);
    // this.debugService.announceProjectsList("somethingishere");
  }

  onClicky(key: string) {
    // this.router.navigate(['/project-detail', key]);
    this.debugService.announceProjectsList("something");
    // console.dir(this.projects);
    // alert("SET");
  }

  // constructor
  constructor(
    private projectService: ProjectService,
    private router: Router,
    public af: AngularFire,
    private debugService: DebugService,
    private navigationService: NavigationService) {

  }

  // gotoDashboardView method. CALLED at the click event of the dashboard floating action button on the template.
  gotoDashboardView() {
    this.router.navigate(['']);
  }

  // Supporting method for the ngOnInit() operation. CALLED by ngOnInit.
  getProjects() {
    this.projects = this.projectService.getProjects();
    this.debugService.announceProjectsList(this.projects);

  }

  // ngOnInit() method triggered at the initialization lifecycle hook. PROVIDED by angular2.
  ngOnInit() {
    this.navigationService.announceViews(this.title);
    this.getProjects();
  }

  deleteProject(key: string) {
    this.projectService.deleteProject(key);
  }
}
