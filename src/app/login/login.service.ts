import { Injectable } from '@angular/core';
import { LoginDTO } from './login-dto';

@Injectable()
export class LoginService {

  constructor() { }

  public check(user: LoginDTO): boolean {
    if ( user.username === 'coldfire' && user.password === 'caramail') {
      return true;
    }
    return false;
  }

}
