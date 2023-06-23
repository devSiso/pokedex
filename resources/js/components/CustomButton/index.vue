<template>
    <button
        class="custom-button"
        @click="$emit('on-click')"
        type="button"
    >
        <span class="custom-button__label">
            {{ label }}
        </span>
    </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'custom-button',
    props: {
        label: {
            type: String,
            required: true
        },
    },

})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.custom-button {
    @include button-box-shadow;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: $mine-shaft;
    transition: all 0.2s;

    @include breakpoint('large') {
        height: 40px;
    }

    &:hover, &:focus-within {
        @include breakpoint('large') {
            transform: translateY(-3px) scale(1.01);
        }
    }

    &__label {
        font-size: 1.4rem;
        font-weight: $bold;
        line-height: 1.29;

        @include breakpoint('large') {
            font-weight: $regular;
        }
    }
}

</style>
