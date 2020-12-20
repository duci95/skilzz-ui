import { Model } from "@vuex-orm/core";
import Category from "./Category";

export default class Question extends Model{
    static entity = 'questions';

    static fields() {
        return{
            id: this.uid(),
            question: this.string(''),
            updated_at: this.string(''),
            created_at: this.string(''),
            category_id: this.attr(''),
            category: this.belongsTo(Category,'category_id')
        }
    }
}
