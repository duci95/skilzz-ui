import { Model } from "@vuex-orm/core";

export default class User extends Model{
    static entity = 'users';

    static fields() {
        return {
            first_name: this.string(''),
            last_name: this.string(''),
            username: this.string(''),
            email: this.string(''),
            password: this.string('')
        }
    }
}
