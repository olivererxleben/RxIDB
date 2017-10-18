import { Observable } from 'rxjs/Rx';

enum DB_VERSION {
  V1 = 1, 
  V2 = 2
}

export class Store {
  
    constructor(databaseName: string, databaseVersion: number = DB_VERSION.V1, ) {}

    public open() {
      // TODO: implementation
    }

    public getItem(forKey: string): Observable<any> {
      // TODO: implementation
      return null;
    }
  
    public setItem(forKey: string) {
      // TODO: implementation
      console.log('set store');
    }
  }