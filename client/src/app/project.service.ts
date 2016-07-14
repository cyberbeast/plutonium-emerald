import { Injectable } from '@angular/core';
import { Project } from './data-structures';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';


// DEV IMPORTS BEGIN>>>>>>>>>>>>>>>>>>>>>>>
// import { PROJECTS } from './mock-projects';
// DEV IMPORTS END >>>>>>>>>>>>>>>>>>>>>>>>

// Firebase IMPORTS BEGIN>>>>>>>>>>>>>>>>>>
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// Firebase IMPORTS END>>>>>>>>>>>>>>>>>>>>

@Injectable()
export class ProjectService {
    current_project_name: string;
    projects    : FirebaseListObservable<any[]>;
    functions   : FirebaseListObservable<any[]>;
    // idSubject: Subject<any>;
    nameSubject: Subject<any>;

    

    getProjects(){
        // DUMMY DATA RETURN BEGIN>>>>>
        // return Promise.resolve(PROJECTS);
        // DUMMY DATA RETURN END>>>>>>>
        console.log("Projects received!");
        return this.projects;
    }

    getProject(name: string) {
        // return this.getProjects().then(projects => projects.find(project => project.id === id));
        this.current_project_name = name;
        console.log("Received name is: " + name);
        console.log(this.functions);
        // this.idSubject.next(id);
        this.nameSubject.next(name);
        console.log("Sent functions!");
        console.dir(this.functions);
        return this.functions;
        
    }

    deleteProject(key: string) {    
        this.projects.remove(key); 
    }

    constructor(af: AngularFire) {
        this.projects = af.database.list('projects');

        this.nameSubject = new Subject();
        this.functions = af.database.list('functions');
    }
}
