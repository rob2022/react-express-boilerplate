import elixir from 'laravel-elixir';
import gulp from 'gulp';

elixir.config.assetsPath = 'resources/';
elixir.config.publicPath = 'public/';

elixir((mix) => {
    mix.browserify(
        "App.js",
        "public/javascripts/app.js",
        "resources/javascripts"
    );

    mix.sass(
        ["app.scss"],
        "public/stylesheets/app.css"
    );
});
