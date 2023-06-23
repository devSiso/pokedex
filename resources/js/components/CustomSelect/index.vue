<template>
    <div
        class="custom-select"
        :class="{'custom-select--open': openDropdown}"
        focusable="false"
        v-click-outside="closeDropdown"
    >
        <div
            class="custom-input__wrapper"
            tabindex="0"
            @click="toggleDropdown"
            @keydown.space.prevent="openDropdown = true"
            @keyup.enter="openDropdown = true"
            @keydown.esc="openDropdown = false"
        >
            <span
                class="custom-select__label"
                :class="{ 'custom-select__label--default': selectedOption.isDefault }"
            >
                {{ selectedOption.label }}
            </span>
            <img
                class="custom-input__icon"
                :src="`/svg/${icon}.svg`"
                :alt="`${icon} icon`"
            />
        </div>
        <div class="custom-select__dropdown">
            <ul class="custom-select__dropdown-list">
                <li
                    v-for="(option, index) in options"
                    :key="option.value"
                    tabindex="0"
                    class="custom-select__dropdown-item"
                    :class="{ 'custom-select__dropdown-item--selected': selectedOption.value === option.value }"
                    @click="onSelect(option)"
                    @keyup.enter="onSelect(option)"
                    @keydown.esc="openDropdown = false"
                >
                    <span>{{ option.label }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SelectOption } from './type';

export default Vue.extend({
    name: 'custom-select',
    props: {
        defaultOption: {
            type: Object as () => SelectOption,
            required: true
        },
        options: {
            type: Array<SelectOption>,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: 'arrow_down'
        }
    },
    data() {
        return {
            selectedOption: this.defaultOption,
            openDropdown: false
        }
    },
    methods: {
        closeDropdown() {
            this.openDropdown = false
        },
        toggleDropdown() {
            this.openDropdown = !this.openDropdown;
        },
        onSelect(option: SelectOption) {
            this.selectedOption = option;
            this.openDropdown = false;
            this.$emit('on-select', option);
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';

.custom-select {
    cursor: pointer;
    position: relative;

    &--open {
        .custom-input__icon {
            transform: translateY(-50%) rotateZ(180deg);
        }
    }

    &__label {
        font-size: 1rem;
        font-weight: $regular;
        line-height: 1.3;
        color: $shark;

        &--default {
            color: $silver;
        }
    }

    &__dropdown {
        position: absolute;
        background-color: $white;
        padding: 10px 0 0 0;
        border: 1px solid $silver;
        border-radius: 8px;
        top: 30px;
        left: 0;
        right: 0;
        display: none;
        z-index: 2;
        box-shadow: 0 0 8px $black;

        .custom-select--open & {
            display: block;
        }

        &-item {
            padding: 8px 10px;
            font-size: 1rem;
            font-weight: $regular;
            line-height: 1.3;
            color: $shark;
            cursor: pointer;
            transition: all 0.3s;

            &:hover, &:focus {
                background-color: $silver;
            }

            &--selected {
                background-color: rgba($silver, 0.7);
            }
        }
    }

    .custom-input__icon {
        transition: all 0.3s;
    }

    .custom-input__wrapper:focus {
        outline: 1px solid $silver;
        outline-offset: 2px;
    }
}
</style>
