import Vue from 'vue';
import Vuex from 'vuex';
import { CatalogModule } from './modules/catalog';

Vue.use(Vuex);

// export Store with modules
export default new Vuex.Store({
    modules: {
        catalog: new CatalogModule()
    }
});