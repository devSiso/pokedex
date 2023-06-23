<template>
    <li
        class="pokemon-card"
        :data-content="`#${pokemon.id}`"
        :class="`--${pokemon.primary_type}`"
    >
        <a
            class="pokemon-card__content-wrapper"
            :href="`/breeds/${parseInt(pokemon.id)}/`"
        >
            <div class="pokemon-card__content">
                <span class="pokemon-card__content-name">
                    {{ pokemon.name }}
                </span>
                <ul class="pokemon-card__types-list">
                    <li
                        class="pokemon-card__type"
                        :title="pokemon.primary_type"
                    >
                        <img
                            class="pokemon-card__type-icon"
                            :src="`/svg/${pokemon.primary_type}.svg`"
                            :alt="pokemon.primary_type"
                        />
                    </li>
                    <li
                        class="pokemon-card__type"
                        :title="pokemon.secondary_type"
                        v-if="pokemon.secondary_type"
                    >
                        <img
                            class="pokemon-card__type-icon"
                            :src="`/svg/${pokemon.secondary_type}.svg`"
                            :alt="pokemon.secondary_type"
                        />
                    </li>
                </ul>
            </div>
            <img
                class="pokemon-card__image"
                :src="pokemon.image_url"
                :alt="pokemon.name"
            />
        </a>
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Pokemon } from '../../@types/pokemon.types';

export default Vue.extend({
    name: 'pokemon-card',
    props: {
        pokemon: {
            type: Object as () => Pokemon,
            required: true
        },
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.pokemon-card {
    @include pokemon-types-colors;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: $white;
    transition: all 0.2s linear;
    height: 100px;
    overflow: hidden;

    &:hover, &:focus-within {
        @include breakpoint('large') {
            transform: translateY(-5px) scale(1.05);
            transform-origin: center center;
        }
    }

    @include breakpoint('large') {
        max-width: 200px;
        overflow: visible;
    }

    &::before {
        content: attr(data-content);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 25px;
        z-index: 0;
        padding: 1px 5px 3px 9px;
        border-radius: 8px 8px 0 0;
        color: $white;
        font-size: 1.6rem;
        line-height: 1.3;

        @include breakpoint('large') {
            text-align: right;
            line-height: 1.8;
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 10px;
        z-index: 0;
        border-radius: 0 0 8px 8px;
    }

    &__content-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        outline: none;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 12px 10px 0;
        max-width: calc(100% - 100px);
        width: 100%;

        @include breakpoint('large') {
            flex-direction: row-reverse;
            justify-content: flex-start;
            max-width: 100%;
            padding: 25px 0 10px 10px;
        }

        &-name {
            text-transform: lowercase;
            font-size: 1.8rem;
            font-weight: $semibold;
            line-height: 1.3;
            color: green;
            padding-left: 10px;

            @include breakpoint('large') {
                width: 100%;
                padding: 0 28px 0 0;
                text-align: center;
            }
        }
    }

    &__types-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include breakpoint('large') {
            justify-content: space-between;
        }
    }

    &__type {
        color: $black;

        &:nth-of-type(2) {
            margin-top: 10px;

            @include breakpoint('large') {
                margin-top: 6px;
            }
        }

        &-icon {
            width: 18px;
            height: 18px;
        }
    }

    &__image {
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        height: 100px;
        z-index: 1;
        border-radius: 0 8px 8px 0;

        @include breakpoint('large') {
            left: 50%;
            transform: translate(-50%, -60px);
        }
    }
}
</style>
