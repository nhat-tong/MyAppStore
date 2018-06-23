import Vue from 'vue';
import Vuex from 'vuex';

import { CatalogModule } from './modules/catalog';
import { CustomerModule } from './modules/customer';
import { AuthModule } from './modules/auth';

Vue.use(Vuex);

// export Store with modules
export default new Vuex.Store({
    modules: {
        catalog: new CatalogModule(),
        customer: new CustomerModule(),
        auth: new AuthModule()
    }
});