import { ActionTree, MutationTree, GetterTree, Module } from 'vuex'
import PokemonService from '../../api/services/pokemon-service'
import { SET_POKEMON_DATA, SET_IS_LOADING } from '../Types/mutation-types';

import type { RootState } from '../Types/types'
import type { PokemonData } from '../Types/types'

const state = (): PokemonData => ({
    pokemonList: [],
    isLoading: false
})

const mutations: MutationTree<PokemonData> = {
    SET_POKEMON_DATA(state: PokemonData, pokemonList: []) {
        state.pokemonList = pokemonList
    },
    SET_IS_LOADING(state: PokemonData, loading: Boolean) {
        state.isLoading = loading
    }
}

const actions: ActionTree<PokemonData, RootState> = {
    async fetchPokemons({ commit }) {
        try {
            commit(SET_IS_LOADING, true);
            const data = await PokemonService.fetchOriginalPokemons();
            commit(SET_POKEMON_DATA, data);
        } catch (error) {
            console.error(error);
        } finally {
            commit(SET_IS_LOADING, false)
        }
    }
}

const getters: GetterTree<PokemonData, RootState> = {
    pokemonList: (state: PokemonData) => state.pokemonList,
    isLoading: (state: PokemonData) => state.isLoading
}

const namespaced: boolean = true

export const PokemonStore: Module<PokemonData, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
}
