<template>
    <div class="pokemon-profile-shape">
        <svg
            :class="typeClass"
            class="pokemon-profile-shape__image pokemon-profile-shape__image--mobile"
            width="100%"
            height="100%"
            viewBox="0 0 320 216"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-2 58.9695C-2 58.9695 62.0227 1.83396 87.1789 0.0390214C112.335 -1.75591 198.495 58.9695 198.495 58.9695H320V200H-2V58.9695Z"
                fill="currentColor"
                fill-opacity="0.51"
            />
            <path
                d="M-1 74.9695C-1 74.9695 62.8238 17.834 87.9019 16.039C112.98 14.2441 198.873 74.9695 198.873 74.9695H320V216H-1V74.9695Z"
                fill="currentColor"
            />
        </svg>

        <svg
            class="pokemon-profile-shape__image pokemon-profile-shape__image--desktop"
            :class="typeClass"
            width="100%"
            height="100%"
            viewBox="0 0 1280 377"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 128.738C0 128.738 254.5 28.1597 354.5 25C454.5 21.8403 797 128.738 797 128.738H1280V377H0V128.738Z"
                fill="currentColor"
            />
            <path
                d="M0 104.738C0 104.738 254.5 4.15973 354.5 1.00003C454.5 -2.15967 797 104.738 797 104.738H1280V353H0V104.738Z"
                fill="currentColor"
                fill-opacity="0.51"
            />
        </svg>

    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Pokemon } from '../../@types/pokemon.types';

export default Vue.extend({
    name: 'pokemon-profile-shape',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        typeClass() {
            const storagedData = JSON.parse(localStorage.getItem('vuex') ?? 'null')?.[1] ?? [];
            const dataFrom = storagedData.length && JSON.parse(storagedData);
            const { primary_type } = dataFrom.find((pokemon: Pokemon) => parseInt(pokemon.id) === parseInt(this.id));

            return `--${primary_type}`;
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/mixins';

.pokemon-profile-shape {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    @include breakpoint('large') {
        bottom: 0;
    }

    &__image {
        @include shape-fill-type-colors;
        width: 100%;

        &--mobile {
            display: block;

            @include breakpoint('large') {
                display: none;
            }
        }

        &--desktop {
            display: none;

            @include breakpoint('large') {
                display: block;
            }
        }
    }
}
</style>
