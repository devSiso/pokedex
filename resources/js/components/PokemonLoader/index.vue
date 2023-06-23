<template>
    <div class="pokemon-loader">
        <div class="pokemon-loader__pokeball" />
        <span class="pokemon-loader__text">Loading</span>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'pokemon-loader'
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/animations';
@import '../../../sass/config/mixins';

.pokemon-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(1.2);

    @include breakpoint('large') {
        transform: scale(1);
    }

    &__pokeball {
        position: relative;
        height: 100px;
        width: 100px;
        background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, $white 50%);
        border-radius: 50%;
        border: 8px solid $black;
        overflow: hidden;
        animation: spin 3s linear infinite;

        &::before {
            content: '';
            position: absolute;
            height: 8px;
            width: 100px;
            background: $black;
            top: 50%;
            transform: translateY(-50%);
        }

        &::after {
            content: '';
            position: absolute;
            height: 38px;
            width: 38px;
            border-radius: 50%;
            background: $white;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: inset 0 0 0 8px $black, inset 0 0 0 10px $white, inset 0 0 0 12px $black;

        }
    }

    &__text {
        margin-top: 20px;
        animation: blink 2s linear infinite;
    }
}
</style>
