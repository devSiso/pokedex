<template>
    <div
        class="full-screen-menu"
        :class="{ 'full-screen-menu--open': isOpen }"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
    >
        <div class="full-screen-menu__wrapper">
            <div class="full-screen-menu__circle" />
        </div>
        <div class="full-screen-menu__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'full-screen-menu',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';

.full-screen-menu {
    &__circle {
        background: $shark;
        border-radius: 50%;
        width: 300px;
        height: 300px;
        position: fixed;
        top: -300px;
        right: -300px;
        transition-duration: 0.8s;
        transform: scale(1);
        z-index: 3;

        .full-screen-menu--open & {
            transition-duration: 1.6s;
            transform: scale(20);
            top: -30vh;
            right: -30vh;
        }
    }

    &__content {
        position: absolute;
        z-index: 4;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s 0.2s;

        .full-screen-menu--open & {
            opacity: 1;
            visibility: visible;
            transition: all 0.2s 0.2s;
        }
    }
}
</style>
