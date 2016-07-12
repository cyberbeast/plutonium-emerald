// ANGULAR2 CORE IMPORTS BEGIN>>>>>>>>>>>>>
import { Component, OnInit } from '@angular/core';
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
import { ProjectDetailComponent } from './project-detail.component';
// DEPENDENCY IMPORTS END>>>>>>>>>>>>>>>>>>

// DEV IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>> 
import { PROJECTS } from './mock-projects';
// DEV IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, ProjectDetailComponent, MdIcon],
  providers:[ProjectService, MdIconRegistry]
})

export class AppComponent implements OnInit{
  title = 'Plutonium'; //App Title
  subtitle = "Emerald Prototype Build"; //App Subtitle
  projects = PROJECTS; //projects property. DEFINED in data-structures.ts. POPULATED by mock-projects.ts.
  selectedProject: Project; //selectedProject property. USED when user clicks on the edit button of a project card.

  // onSelect method triggered by the click event of the Edit button on a project card.
  onSelect(project: Project) {
    this.selectedProject = project;
  }

  // constructor
  constructor(private projectService: ProjectService) { }
  
  // Supporting method for the ngOnInit() operation. CALLED by ngOnInit.
  getProjects(){
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  // ngOnInit() method triggered at the initialization lifecycle hook. PROVIDED by angular2.
  ngOnInit(){
    this.getProjects();
  }
}
