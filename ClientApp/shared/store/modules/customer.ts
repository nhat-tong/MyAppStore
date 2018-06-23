import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import axios, { AxiosResponse } from 'axios';
import { Promise } from 'es6-promise';

// initial state
class State {
    customer: [any]

    constructor() { }
}

// getters
const getters: GetterTree<State, any> = {}

// mutations
const mutations: MutationTree<State> = {
    setCustomerInfo: (state: State, customerInfo: any) => {
        state.customer = customerInfo;
    }
}

// actions
const actions: ActionTree<State, any> = {
    getCustomerInfo: (context) => {
        return new Promise((resolve, reject) => {
            axios.get('/api/customer', {
                headers: {
                    'Authorization': 'Bearer ' + context.getters.token
                }
            }).then((res: AxiosResponse) => {
                context.commit('setCustomerInfo', res.data);
                resolve();
            });
        });
    }
}

export class CustomerModule implements Module<State, any> {
    namespaced: boolean = true;

    state: State;
    getters = getters;
    mutations = mutations;
    actions = actions;

    constructor() {
        this.state = new State();
    }
}