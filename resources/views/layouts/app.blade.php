<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="shortcut icon" href="https://assets.pokemon.com/static2/_ui/img/favicon.ico">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.cdnfonts.com/css/fira-code-2" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="{{ Route::currentRouteName() }}">
    <div id="app">
        <nav-bar current-route-name="{{ Route::currentRouteName() }}"></nav-bar>
        <main>
            @yield('content')
        </main>
    </div>
    @stack('scripts')
</body>

</html>
