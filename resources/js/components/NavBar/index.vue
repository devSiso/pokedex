
<template>
    <nav
        role="navigation"
        aria-label="Main menu"
    >
        <div class="container">
            <div class="navbar">
                <div class="navbar__wrapper">
                    <h1
                        class="navbar__logo"
                        tabindex="-1"
                    >
                        <a href="/">PokeAtlas</a>
                    </h1>
                    <div class="navbar__items-wrapper">
                        <navigation-items :items="navRoutes" />
                    </div>
                    <div class="navbar__hamburger-button-wrapper">
                        <hamburger-button
                            @toggle-menu="toggleMenu"
                            :active="isMenuOpen"
                            controls-element-id="main-menu"
                        />
                    </div>
                </div>
                <div class="navbar__full-screen-menu-wrapper">
                    <full-screen-menu
                        id="main-menu"
                        :isOpen="isMenuOpen"
                    >
                        <navigation-items :items="navRoutes" />
                    </full-screen-menu>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import HamburgerButton from '../HamburgerButton/index.vue';
import FullScreenMenu from '../FullScreenMenu/index.vue';
import NavigationItems from './NavigationItems.vue';

export default Vue.extend({
    name: 'nav-bar',
    components: {
        HamburgerButton,
        FullScreenMenu,
        NavigationItems
    },
    props: {
        currentRouteName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isMenuOpen: false,
            navRoutes: [
                {
                    icon: 'home',
                    href: '/',
                    active: this.currentRouteName === 'home',
                    label: 'Home',
                    disabled: false
                },
                {
                    icon: 'list',
                    href: '/list',
                    active: this.currentRouteName === 'list' || this.currentRouteName === 'breeds',
                    label: 'Lista',
                    disabled: false
                },
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
})
</script>
<style lang="scss" scoped>
@import '../../../sass/config/mixins';
.navbar {
    position: relative;

    @include breakpoint('large') {
        position: relative;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        overflow: hidden;

        @include breakpoint('large') {
            // added 4px of horizontal padding to avoid cropping outline selector on keyboard navigation;
            padding: 0 4px;
        }
    }

    &__items-wrapper {
        display: none;

        @include breakpoint('large') {
            display: block;
        }
    }

    &__logo {
        font-size: 2rem;
        z-index: 4;

        @include breakpoint('large') {
            display: flex;
            align-items: center;

            &::after {
                content: '';
                width: 70px;
                height: 1px;
                background-color: $white;
                margin-left: 18px;
            }
        }
    }

    &__hamburger-button-wrapper {
        z-index: 4;

        @include breakpoint('large') {
            display: none;
        }
    }

    &__full-screen-menu-wrapper {
        @include breakpoint('large') {
            display: none;
        }
    }
}
</style>
