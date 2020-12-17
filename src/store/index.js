import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Category from "../models/Category"


Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Category)

export default new Vuex.Store({
  // state: {
  //   categories:[]
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }

  plugins: [VuexORM.install(database)]
})
