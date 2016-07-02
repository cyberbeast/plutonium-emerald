import { Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

// DELETE START MARKER HERE>>>>>>>>>>>>>>>>>>>>>>>>>
// ONLY FOR DEMO.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ONLY FOR DEMO.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export class Project {
  id: number;
  name: string;
  description: string;
}

const PROJECTS: Project[] = [
  { id: 1, name: 'Project Title A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
  { id: 2, name: 'Project B', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
  { id: 3, name: 'Project C', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' }
];
// ONLY FOR DEMO.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ONLY FOR DEMO.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DELETE END MARKER HERE >>>>>>>>>>>>>>>>>>>>>>>>>>


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})

export class AppComponent {
  title = 'Plutonium';
  subtitle = "Emerald Prototype Build";
  projects = PROJECTS;
}
