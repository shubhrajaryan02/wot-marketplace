import Vue from 'vue';
import Vuex from 'vuex';
import formNewProject from './modules/formNewProject';
import project from './modules/project';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        formNewProject,
        project
    },
    state: {
    },
    getters: {
        getTest: state => {
            return state.bla;
        }
    }
})