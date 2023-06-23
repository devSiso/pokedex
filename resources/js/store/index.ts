import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { PokemonStore } from './modules/pokemon-store'
import { PokemonData, RootState } from './Types/types'
import { SET_POKEMON_DATA } from './Types/mutation-types';

Vue.use(Vuex)
Vue.config.devtools = true;

const vuexLocal = new VuexPersistence({
    supportCircular: true,
    reducer: (state: { PokemonStore: PokemonData } & RootState) => {
        return { pokemonList: JSON.stringify(state.PokemonStore.pokemonList) }
    },
});

export default new Vuex.Store({
    modules: {
        PokemonStore
    },
    plugins: [vuexLocal.plugin]
})
