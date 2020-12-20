import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import Category from "../models/Category";
import User from "../models/User";
import Question from "../models/Question";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(Category);
database.register(Question);

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
