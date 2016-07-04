import { Injectable } from '@angular/core';
import { Project } from './data-structures';

// DEV IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>
import { PROJECTS } from './mock-projects';
// DEV IMPORTS END >>>>>>>>>>>>>>>>>>>>>>>>

@Injectable()
export class ProjectService {
    getProjects(){
        // DUMMY DATA RETURN BEGIN>>>>>
        return Promise.resolve(PROJECTS);
        // DUMMY DATA RETURN END>>>>>
    }
}
