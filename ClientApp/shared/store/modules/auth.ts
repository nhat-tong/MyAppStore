import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import axios, { AxiosResponse } from 'axios';
import { Promise } from 'es6-promise';

// initial state
class State {
    jwt: string = '';
    expiration: Date = new Date();
    redirect: string = ''

    constructor() { }
}

// getters
const getters: GetterTree<State, any> = {
    isAuthenticated: (state: State) => {
        return state.jwt && state.expiration > new Date();
    },
    token: (state: State) => {
        return state.jwt;
    },
    redirect: (state: State) => {
        return state.redirect;
    }
}

// mutations
const mutations: MutationTree<State> = {
    setTokenInfo: (state: State, tokenInfo: any) => {
        state.jwt = tokenInfo.token;
        state.expiration = new Date(tokenInfo.expiration);
    },
    setRedirect: (state: State, path: string) => {
        state.redirect = path;
    },
    clearRedirect: (state: State) => {
        state.redirect = '';
    }
}

// actions
const actions: ActionTree<State, any> = {
    authenticate: (context, creds) => {
        return new Promise((resolve, reject) => {
            axios.get('/api/account/createtoken').then((res: AxiosResponse) => {
                context.commit('setTokenInfo', res.data);
                resolve();
            });
        });
    }
}

export class AuthModule implements Module<State, any> {
    namespaced: boolean = true;

    state: State;
    getters = getters;
    mutations = mutations;
    actions = actions;

    constructor() {
        this.state = new State();
    }
}