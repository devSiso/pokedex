@extends('layouts.app')

@section('content')
    <div class="breeds-page">
        <div class="breeds-page__shape-container">
            <pokemon-profile-shape id={{ $id }}></pokemon-profile-shape>
        </div>
        <pokemon-profile-header id="{{ $id }}"></pokemon-profile-header>
        <pokemon-profile-card id="{{ $id }}"></pokemon-profile-card>
    </div>
@endsection
