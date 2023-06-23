<template>
    <div class="pokemon-profile-header">
        <img
            :src="pokemon.image_url"
            class="pokemon-profile-header__image"
        />
        <div class="pokemon-profile-header__name-wrapper">
            <h2 class="pokemon-profile-header__name">
                {{ `#${pokemon.id} ${pokemon.name}` }}
            </h2>
        </div>
        <div class="pokemon-profile-header__background">
            <pokemon-profile-shape :id="pokemon.id" />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PokemonProfileShape from '../PokemonProfileShape/index.vue'
import { capitalizeFirstLetter } from '../../utils';

import { Pokemon } from '../../@types/pokemon.types';

export default Vue.extend({
    name: 'pokemon-profile-header',
    components: {
        PokemonProfileShape
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            dreamWorldImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${parseInt(this.id)}.svg`
        }
    },
    computed: {
        pokemon(): { id: string, name: string, image_url: string } {
            const storagedData = JSON.parse(localStorage.getItem('vuex') ?? 'null')?.[1] ?? [];
            const dataFrom = storagedData.length && JSON.parse(storagedData);
            const { id, image_url, name } = dataFrom.find((pokemon: Pokemon) => parseInt(pokemon.id) === parseInt(this.id));

            return {
                name: capitalizeFirstLetter(name),
                id,
                image_url: this.dreamWorldImageUrl || image_url
            };
        }
    },
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.pokemon-profile-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    position: relative;

    @include breakpoint('large') {
        padding: 0 0 40px 0;
    }

    &__image {
        width: 200px;
        height: 195px;
        margin-bottom: 5px;

        @include breakpoint('large') {
            margin-bottom: 0;
            width: 362px;
            height: 354px;
        }
    }

    &__name {
        font-weight: $bold;
        font-size: 3rem;
        text-align: center;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        @include breakpoint('large') {
            font-size: 4.5rem;
        }

        &-wrapper {
            height: 58px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    &__background {
        position: absolute;
        width: 100%;
        height: 216px;
        bottom: 0;
        left: 0;
        right: 0;

        @include breakpoint('large') {
            display: none;
        }
    }
}
</style>
