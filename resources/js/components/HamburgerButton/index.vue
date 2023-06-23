<template>
    <button
        type="button"
        class="hamburger-menu"
        :class="{ 'hamburger-menu--active': active }"
        :aria-controls="controlsElementId"
        @click="$emit('toggle-menu')"
    >
        <span
            class="hamburger-menu__line"
            focusable="false"
        />
        <span
            class="hamburger-menu__line"
            focusable="false"
        />
        <span
            class="hamburger-menu__line"
            focusable="false"
        />
    </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'hamburger-button',
    props: {
        controlsElementId: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: false
        }
    },

})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 19px;

    &:hover {
        cursor: pointer;
    }

    &__line {
        height: 3px;
        width: 100%;
        background-color: $white;
        transition: transform 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 0.1s linear;

        &:first-of-type {
            .hamburger-menu--active & {
                transform: translate(0, 8px) rotate(45deg);
                border-radius: 8px;
            }
        }

        &:nth-of-type(2) {
            .hamburger-menu--active & {
                opacity: 0;
            }
        }

        &:last-of-type {
            .hamburger-menu--active & {
                transform: translate(0, -8px) rotate(-45deg);
                border-radius: 8px;
            }
        }
    }
}
</style>
