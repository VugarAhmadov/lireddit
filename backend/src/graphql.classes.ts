
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserInput {
    username: string;
    password: string;
    email: string;
    age: number;
}

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    age: number;
    isSubscribed: boolean;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(input: UserInput): User | Promise<User>;
}
