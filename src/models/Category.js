import { Model } from "@vuex-orm/core";


export default class Category extends Model{
    static entity = 'categories';

    static fields() {
        return{
            id: this.uid(),
            name: this.string(""),
            description: this.string("")
        }
    }
}
