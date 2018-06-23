import Vue from 'vue';
import Vuex from 'vuex';
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import * as T from '../types';
import { CartItem } from '../types';
import * as _ from 'lodash';
import axios, { AxiosResponse } from 'axios';
import { Promise } from 'es6-promise';

// initial state
class State {
    catalog: [T.Product];
    cart: [T.CartItem];

    constructor() { }
}

// getters
const getters: GetterTree<State, any> = {}

// mutations
const mutations: MutationTree<State> = {
    setCatalog: (state: State, newCatalog: [T.Product]) => {
        state.catalog = newCatalog
    },
    addToCart: (state: State, product: T.Product) => {
        let item = _.find(state.cart, { code: product.gtinCode });
        if (item) {
            item.quantity++;
        }
        else {
            state.cart.push(new T.CartItem(product));
        }
    },
    deleteCartItem: (state: State, item: T.CartItem) => {
        let index = _.findIndex(state.cart, { code: item.code });
        if (index != -1) {
            state.cart.splice(index, 1);
        }
    }
}

// actions
const actions: ActionTree<State, any> = {
    loadCatalog: (context) => {
        return axios.get('/api/products')
            .then((res: AxiosResponse<any>) =>
            {
                context.commit('setCatalog', res.data.results);
            });
    },
    findProduct: (context, code) => {
        return new Promise(function (resolve, reject) {
            axios.get("/api/products")
                .then(function (res) {
                    context.commit("setCatalog", res.data.results);
                    resolve();
                })
                .catch(function () {
                    reject();
                });
        });
    }
}

export class CatalogModule implements Module<State, any> {
    namespaced: boolean = true;

    // default properties required for vuex stores/modules
    state: State;
    getters = getters;
    mutations = mutations;
    actions = actions;

    // create everything
    constructor() {
        this.state = new State();
    }
}