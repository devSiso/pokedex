<template>
    <div class="custom-input__wrapper custom-search">
        <input
            type="search"
            :name="name"
            :placeholder="placeholder"
            v-model="value"
            @input="onSearch"
            @keydown.enter="onSearch"
        >
        <div
            class="custom-search__icon-wrapper"
            :class="{'custom-search__icon-wrapper--hidden': hasValue}"
            @click="onSearch"
        >
            <img
                class="custom-input__icon"
                :src="`/svg/${icon}.svg`"
                :alt="`${icon} icon`"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'custom-search-input',
    props: {
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: 'search'
        }
    },
    data() {
        return {
            value: ''
        }
    },
    computed: {
        hasValue(): boolean {
            return !!this.value
        }
    },
    methods: {
        onSearch() {
            this.$emit('on-search', this.value)
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';

.custom-search {
    position: relative;

    &__icon-wrapper {
        position: absolute;
        top: 8px;
        bottom: 8px;
        right: 0;
        cursor: pointer;
        transition: all 0.1s;

        &--hidden {
            opacity: 0;
            visibility: hidden;
            z-index: -1;
        }
    }
}
</style>
