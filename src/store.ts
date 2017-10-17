import { Observable } from 'rxjs/Rx';

export class Store {
  
    constructor(databaseName: string, databaseVersion: number = 2, ) {}
  
    public getItem(forKey: string): Observable<any> {
      // TODO: implementation
      return null;
    }
  
    public setItem(forKey: string) {
      // TODO: implementation
      console.log('set store');
    }
  }