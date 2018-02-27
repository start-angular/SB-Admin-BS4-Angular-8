import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  // private collection: 'users';

  private mock = [{
    id: 1,
    username: 'coldfire',
    password: 'caramail'
  }, {
    id: 2,
    username: 'ridasaidd',
    password: 'caramail'
  }, {
    id: 3,
    username: 'adam',
    password: 'chaddaev'
  }];

  constructor() { }

  public getUserBy(username: string): any {
    for ( let i = 0; i < this.mock.length; i++ ) {
      if (this.mock[i].username === username) {
        return this.mock[i];
      }
    }
    return false;
  }

  public getAll(): any[] {
    return this.mock;
  }

}
