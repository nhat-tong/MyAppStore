import Vue from 'vue';
import Vuex from 'vuex';
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import * as T from '../types';

// initial state
interface State {
    cart: [T.Product]
}

const state: State = {
    cart: [
        { name: 'product 1', price: 20, quantity: 3, code: 'AYZE1' },
        { name: 'product 2', price: 25, quantity: 4, code: 'AYZE2' },
        { name: 'product 3', price: 30, quantity: 5, code: 'AYZE3' },
        { name: 'product 4', price: 35, quantity: 6, code: 'AYZE4' },
        { name: 'product 5', price: 40, quantity: 7, code: 'AYZE5' }
    ]
}

// getters
const getters: GetterTree<State, any> = {
    length: (state: State) => state.cart.length
}

// mutations
const mutations: MutationTree<State> = {
    splice: (state: State) => state.cart.splice(1, 1)
}

// actions
const actions: ActionTree<State, any> = {}

export class CatalogModule implements Module<State, any> {
    namespaced: boolean = true;

    // default properties required for vuex stores/modules
    state: State;
    getters = getters;
    mutations = mutations;
    actions = actions;

    // create everything
    constructor() {
        this.state = state;
    }
}