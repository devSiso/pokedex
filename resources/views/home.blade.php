@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="home-page">
            <div class="home-page__content">
                <h2 class="home-page__title">Pokedex</h2>
                <p class="home-page__description">
                    Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more! Search for a Pokémon by
                    name or using its National Pokédex number.
                </p>
                <div class="home-page__button-wrapper">
                    <a href="/list">
                        <custom-button label="Search Pokemon"/>
                    </a>
                </div>
            </div>
            <div class="home-page__carousel-wrapper">
                <div class="home-page__carousel">
                    <ul class="home-page__carousel-items">
                        <li class="home-page__carousel-item">
                            <img src="{{ URL::asset('/svg/charizard.svg') }}" alt="Charizard">
                        </li>
                        <li class="home-page__carousel-item">
                            <img src="{{ URL::asset('/svg/venusaur.svg') }}" alt="Venusaur">
                        </li>
                        <li class="home-page__carousel-item">
                            <img src="{{ URL::asset('/svg/blastoise.svg') }}" alt="Blastoise">
                        </li>
                    </ul>
                </div>
                <ul class="home-page__carousel-navigation">
                    <li class="home-page__carousel-navigation-dot --active"></li>
                    <li class="home-page__carousel-navigation-dot"></li>
                    <li class="home-page__carousel-navigation-dot"></li>
                </ul>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="/js/carousel.js"></script>
@endpush
