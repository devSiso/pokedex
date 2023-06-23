<template>
    <article class="pokemon-list">
        <div class="pokemon-list__wrapper">
            <header class="pokemon-list__header">
                <form
                    @submit.prevent
                    class="pokemon-list__filters"
                    @reset="search = ''"
                    v-focus
                >
                    <custom-search-input
                        placeholder="Search"
                        name="search-pokemon"
                        @on-search="onSearch"
                    />
                    <custom-select
                        name="pokemon-type-filter"
                        :defaultOption="filterOptions.find(item => item.isDefault)"
                        :options="filterOptions" @on-select="onSelectOption"
                    />
                </form>
            </header>
            <div
                class="pokemon-list__content-loader"
                v-if="isLoading"
            >
                <pokemon-loader />
            </div>
            <div
                class="pokemon-list__scrollable-area"
                v-else
            >
                <main class="pokemon-list__content container">
                    <ul class="pokemon-list__grid">
                        <pokemon-card v-for="(pokemon, index) in pokemonData" :key="index" :pokemon="pokemon"></pokemon-card>
                    </ul>
                </main>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';

import CustomSearchInput from '../CustomSearchInput/index.vue';
import CustomSelect from '../CustomSelect/index.vue';
import PokemonCard from '../PokemonCard/index.vue'
import PokemonLoader from '../PokemonLoader/index.vue';


import type { Pokemon } from '../../@types/pokemon.types';
import { SelectOption } from '../CustomSelect/type';

export default Vue.extend({
    name: 'pokemon-list',
    components: {
        CustomSearchInput,
        CustomSelect,
        PokemonCard,
        PokemonLoader
    },
    data() {
        return {
            filterOptions: [
                {
                    value: '',
                    label: 'Show All',
                    isDefault: true
                },
                {
                    value: 'fire',
                    label: 'Fire'
                },
                {
                    value: 'water',
                    label: 'Water'
                },
                {
                    value: 'grass',
                    label: 'Grass'
                },
                {
                    value: 'electric',
                    label: 'Electric'
                },
                {
                    value: 'ice',
                    label: 'Ice'
                },
                {
                    value: 'fighting',
                    label: 'Fighting'
                },
                {
                    value: 'poison',
                    label: 'Poison'
                },
                {
                    value: 'ground',
                    label: 'Ground'
                },
                {
                    value: 'flying',
                    label: 'Flying'
                },
                {
                    value: 'psychic',
                    label: 'Psychic'
                },
            ],
            search: '',
            selectedOption: {} as SelectOption,
        }
    },
    computed: {
        ...mapGetters({
            pokemonList: 'PokemonStore/pokemonList',
            isLoading: 'PokemonStore/isLoading'
        }),
        pokemonData(): Array<Pokemon> {
            const storagedData = JSON.parse(localStorage.getItem('vuex') ?? 'null')?.[1] ?? [];
            const dataFrom = storagedData.length ? JSON.parse(storagedData) : this.pokemonList;
            const filteredByType =
                this.selectedOption.value
                    ? dataFrom.filter((item: Pokemon) =>
                        item.primary_type === this.selectedOption.value
                        || item?.secondary_type === this.selectedOption.value)
                    : dataFrom;

            return filteredByType.filter((pokemon: Pokemon) =>
                pokemon.name.toLowerCase().startsWith(this.search.toLowerCase()) ||
                pokemon.name.toLowerCase().endsWith(this.search.toLowerCase()) ||
                pokemon.id.includes(this.search.toLowerCase()));
        }
    },
    created() {
        !this.pokemonData.length && this.fetchPokemons();
    },
    methods: {
        ...mapActions({
            fetchPokemons: 'PokemonStore/fetchPokemons'
        }),
        onSelectOption(option: SelectOption) {
            this.selectedOption = option;
        },
        onSearch(value: string) {
            this.search = value;
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.pokemon-list {
    $scroll-max-height-mobile: calc(100vh - 190px);
    $scroll-max-height-desktop: calc(100vh - 219px);

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        z-index: 2;

        @include breakpoint('large') {
            max-width: 100%;
        }
    }

    &__filters {
        width: 100%;
        margin: 23px 0 30px 0;

        @include breakpoint('large') {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin: 30px 0 20px 0;
        }

        div {

            &:first-of-type {
                margin-bottom: 18px;

                @include breakpoint('large') {
                    margin: 0 20px 0 0;
                }
            }

            @include breakpoint('large') {
                max-width: 200px;
                width: 100%;
            }
        }
    }

    &__content-loader {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 260px);

        @include breakpoint('large') {
            min-height: calc(100vh - 150px);
        }
    }

    &__scrollable-area {
        position: absolute;
        top: 190px;
        left: 0;
        right: 0;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: $scroll-max-height-mobile;
        height: 100%;
        scroll-behavior: smooth;

        @include breakpoint('large') {
            //minimun of 2 rows for small desktops
            padding-top: 10px;
            min-height: 362px;
            max-height: $scroll-max-height-desktop;
            top: 130px;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
        grid-auto-rows: 1fr;
        place-items: center;
        padding-bottom: 20px;

        @include breakpoint('large') {
            grid-gap: 20px;
            grid-template-columns: repeat(4, 200px);
            grid-auto-rows: 156px;
            place-items: flex-end;
        }
    }
}
</style>
