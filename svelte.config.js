const preprocess = require('svelte-preprocess');

module.exports = {

    preprocess: [
        preprocess(),
    ],
    vitePlugin: {
        exclude: [],
        // experimental options
        experimental: {},
        disableDependencyReinclusion: ['@roxi/routify'],
      },
};
