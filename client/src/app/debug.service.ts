import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class DebugService {
    // Observable sources
    private _projectListSource = new Subject<FirebaseListObservable<any[]>>();
    private _projectFunctionListSource = new Subject<FirebaseListObservable<any[]>>();
    

    // Observable streams
    projectListRetrieved$ = this._projectListSource.asObservable();
    projectFunctionListRetrieved$ = this._projectListSource.asObservable();
    

    // Service message commands
    announceProjectsList(projects: any) {
        this._projectListSource.next(projects);
        console.log("Received Projects " + projects);
    }
    announceProjectFunctionsList(functions: any) {
        this._projectListSource.next(functions);
        console.log("Received Functions " + functions);
    }

}