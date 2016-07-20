import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationService {
    // Observable sources
    private _views = new Subject<string>();

    // Observable streams
    viewsUpdated$ = this._views.asObservable();

    // Service message commands
    announceViews(view: string) {
        this._views.next(view);
    }
}