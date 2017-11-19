import { Injectable } from '@angular/core';
import { Link } from './link';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LinkService {

  private link: Link;

  constructor() { }

  getLink(): Observable<any> {
    return of([
      {
        'id': 1,
        'source': 1,
        'target': 2,
        'type': '0'
      }
    ]);
  }
}
