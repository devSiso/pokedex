<template>
    <ul class="navigation-items">
        <li
            v-for="(item, index) in items"
            :key="index"
            class="navigation-items__item"
            :class="{ 'navigation-items__item--active': item.active }"
        >
            <a
                class="navigation-items__item-link"
                :href="item.href"
            >
                <img
                    class="navigation-items__item-icon"
                    :class="`navigation-items__item-icon--${item.icon}`"
                    :src="`/svg/${item.icon}.svg`"
                    :alt="`${item.icon} icon`"
                />
                <span class="navigation-items__item-label">
                    {{ item.label }}
                </span>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'navigation-items',
    props: {
        items: {
            type: Array<{
                label: {
                    type: String,
                    required: true
                },
                href: {
                    type: String,
                    required: true
                },
                icon: {
                    type: String,
                    required: true
                },
                active: {
                    type: String,
                    required: true
                },
                disabled: {
                    type: Boolean,
                    default: false
                }
            }>,
            required: true
        }
    }
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/variables';
@import '../../../sass/config/mixins';

.navigation-items {
    display: flex;
    flex-direction: column;
    padding-top: 40px;

    @include breakpoint('large') {
        height: 100%;
        flex-direction: row;
        align-items: center;
        padding-top: 0;
    }

    &__item {
        z-index: 2;
        margin-bottom: 30px;

        &::after {
            content: '';
            width: 1px;
            height: 35px;
            background-color: $white;
            display: none;
        }

        &:last-of-type {
            margin-bottom: 0;
        }

        &:focus-within {
            .navigation-items__item-label {
                // negative margin value instead of translateY to avoid flicking effect on element's edges
                margin-top: -2px;

                &::after {
                    @include breakpoint('large') {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }
        }

        @include breakpoint('large') {
            display: flex;
            align-items: center;
            margin: 0 12px 0 0;
            width: 200px;
            height: 100%;

            &::after {
                display: block;
            }

            &:last-of-type {
                margin-right: 0;

                &::after {
                    display: none;
                }
            }
        }

        &-link {
            width: 100%;
            display: flex;

            @include breakpoint('large') {
                padding-bottom: 0;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
        }

        &-icon {
            margin-right: 20px;

            @include breakpoint('large') {
                display: none;
            }

            &--home {
                width: 29px;
                height: 29px;
            }

            &--list {
                width: 25px;
                height: 29px;
            }
        }

        &-label {
            display: flex;
            flex-direction: column;
            font-size: 2.5rem;
            font-weight: $bold;
            line-height: 1.30;
            padding: 0 0 30px 10px;
            width: 160px;

            &::after {
                content: '';
                width: 100px;
                align-self: center;
                height: 1px;
                background-color: $white;
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s;
            }

            &:hover {
                @include breakpoint('large') {
                    // negative margin value instead of translateY to avoid flicking effect on element's edges
                    margin-top: -2px;
                }

                &::after {
                    @include breakpoint('large') {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }

            .navigation-items__item--active & {
                border-bottom: 1px solid rgba($white, 0.5);

                @include breakpoint('large') {
                    font-weight: $bold;
                    border-bottom: 0;
                }
            }

            @include breakpoint('large') {
                font-size: 1.6rem;
                border-bottom: none;
                text-align: center;
                width: 100%;
                padding: 12px 10px 12px 0;
                font-weight: $regular;
            }
        }
    }
}
</style>
