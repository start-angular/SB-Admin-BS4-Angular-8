export class LoginDTO {
    username: string;
    password: string;
    rememberMe: boolean;

    constructor( values: {} = {} ) {
        Object.assign(this, values);
    }
}
