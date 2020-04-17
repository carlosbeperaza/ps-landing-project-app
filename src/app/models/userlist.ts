export interface Userlist {
    id?: number;
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    registration_date?: Date;
    last_update_date?: Date;
    status?: boolean;
    username?: string;
    roles?: number[];
}