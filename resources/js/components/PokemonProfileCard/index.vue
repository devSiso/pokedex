<template>
    <div class="pokemon-profile-card">
        <div class="pokemon-profile-card__wrapper">
            <div
                class="pokemon-profile-card__header"
                :class="`--${pokemon.primary_type}`"
            >
                <h3 class="pokemon-profile-card__header-text">
                    Descrição
                </h3>
            </div>
            <div class="pokemon-profile-card__content">
                <p class="pokemon-profile-card__description">
                    {{ pokemon.description }}
                </p>
                <ul class="pokemon-profile-card__types">
                    <li class="pokemon-profile-card__type">
                        <img
                            class="pokemon-profile-card__type-icon"
                            :src="`/svg/${pokemon.primary_type}.svg`"
                            :alt="pokemon.primary_type"
                        />
                        <span class="pokemon-profile-card__type-text">
                            {{ capitalizedFirstLetterTypes.primary_type }}
                        </span>
                    </li>
                    <li
                        class="pokemon-profile-card__type"
                        v-if="pokemon.secondary_type"
                    >
                        <img
                            class="pokemon-profile-card__type-icon"
                            :src="`/svg/${pokemon.secondary_type}.svg`"
                            :alt="pokemon.secondary_type"
                        />
                        <span class="pokemon-profile-card__type-text">
                            {{ capitalizedFirstLetterTypes.secondary_type }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="pokemon-profile-card__statistics-wrapper">
                <div
                    class="pokemon-profile-card__header"
                    :class="`--${pokemon.primary_type}`"
                >
                    <h3 class="pokemon-profile-card__header-text">
                        Estatistica
                    </h3>
                </div>
                <ul class="pokemon-profile-card__statistics">
                    <li class="pokemon-profile-card__stat">
                        <status-bar
                            label="HP"
                            :value="pokemon.stats.hp"
                            :type="pokemon.primary_type"
                        />
                    </li>
                    <li class="pokemon-profile-card__stat">
                        <status-bar
                            label="ATK"
                            :value="pokemon.stats.attack"
                            :type="pokemon.primary_type"
                        />
                    </li>
                    <li class="pokemon-profile-card__stat">
                        <status-bar
                            label="DEF"
                            :value="pokemon.stats.defense"
                            :type="pokemon.primary_type"
                        />
                    </li>
                    <li class="pokemon-profile-card__stat">
                        <status-bar
                            label="SpP"
                            :value="pokemon.stats.spp"
                            :type="pokemon.primary_type"
                        />
                    </li>
                    <li class="pokemon-profile-card__stat">
                        <status-bar
                            label="SpD"
                            :value="pokemon.stats.spd"
                            :type="pokemon.primary_type"
                        />
                    </li>
                    <li class="pokemon-profile-card__stat">
                        <status-bar
                            label="spd"
                            :value="pokemon.stats.speed"
                            :type="pokemon.primary_type"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import StatusBar from '../StatusBar/index.vue'

import { capitalizeFirstLetter } from '../../utils';
import type { Pokemon } from '../../@types/pokemon.types';

export default Vue.extend({
    name: 'pokemon-profile-card',
    components: {
        StatusBar
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            pokemonList: 'PokemonStore/pokemonList',
        }),
        pokemon(): Pokemon {
            const storagedData = JSON.parse(localStorage.getItem('vuex') ?? 'null')?.[1] ?? [];
            const dataFrom = storagedData.length ? JSON.parse(storagedData) : this.pokemonList;

            return dataFrom.find((pokemon: Pokemon) => parseInt(pokemon.id) === parseInt(this.id));
        },
        capitalizedFirstLetterTypes(): { primary_type?: string, secondary_type?: string } {
            const types = [this.pokemon.primary_type, this.pokemon?.secondary_type];
            const capitalizedFirstLetterTypes = types.map(type => {
                if (!type) return undefined;

                return capitalizeFirstLetter(type);
            });

            return {
                primary_type: capitalizedFirstLetterTypes[0],
                secondary_type: capitalizedFirstLetterTypes[1] || undefined
            }
        }
    },
    created() {
        !this.pokemon && this.fetchPokemons();
    },
    methods: {
        ...mapActions({
            fetchPokemons: 'PokemonStore/fetchPokemons'
        }),
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.pokemon-profile-card {
    margin-top: auto;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $shark;
        padding: 20px 0 27px 0;
        border-radius: 4px;

        @include breakpoint('large') {
            padding: 20px 0 30px 0;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 0 10px $black;
        }
    }

    &__header {
        border-bottom: 2px solid;
        display: flex;
        height: 60px;
        width: 100%;
        align-items: center;
        justify-content: center;
        @include border-bottom-type-colors;

        &-text {
            font-size: 2.5rem;
            font-weight: $bold;
            text-align: center;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px 20px 0 20px;

        @include breakpoint('large') {
            padding-top: 20px;
        }
    }

    &__description {
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 20px;
    }

    &__types {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__type {
        display: flex;
        align-items: center;

        &:first-of-type {
            margin-right: 40px;
        }

        &-icon {
            margin-right: 10px;
            width: 52px;
            height: 45px;
        }

        &-text {
            font-size: 1.4rem;
        }
    }

    &__statistics {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 32px;
        padding: 0 20px;

        @include breakpoint('large') {
            padding: 0 16px 0 28px;
        }

        &-wrapper {
            width: 100%;
        }
    }

    &__stat {
        width: 100%;
        margin-bottom: 17px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
