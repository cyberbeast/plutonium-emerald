import { Component, OnInit } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Project } from './data-structures';
import { ProjectService } from './project.service';

// DEV IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>> 
import { PROJECTS } from './mock-projects';
// DEV IMPORTS END>>>>>>>>>>>>>>>>>>>>>>>>>

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  providers:[ProjectService]
})

export class AppComponent implements OnInit{
  title = 'Plutonium';
  subtitle = "Emerald Prototype Build";
  projects = PROJECTS;

  constructor(private projectService: ProjectService) { }
  
  getProjects(){
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(){
    this.getProjects();
  }
}
