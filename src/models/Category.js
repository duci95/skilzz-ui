import { Model } from "@vuex-orm/core";
import Question from "./Question";

export default class Category extends Model{
    static entity = 'categories';

    static fields() {
        return{
            id: this.uid(),
            name: this.string(''),
            description: this.string(''),
            updated_at: this.string(''),
            created_at: this.string(''),
        }
    }
}
