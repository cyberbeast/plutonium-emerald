import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class DebugService {
    // Observable sources
    private _projectListSource = new Subject<FirebaseListObservable<any[]>>();
    
    // Observable streams
    projectListRetreived$ = this._projectListSource.asObservable();

    // Service message commands
    announceProjectsList(projects: any) {
        this._projectListSource.next(projects);
        console.log("Received   " + projects);
    }
    
}