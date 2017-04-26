require.config({
    paths: {
        'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min',
        'angular-route': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-route.min',
        "angular-aria": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-aria.min",
        "angular-animate": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min",
        "angular-message": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-messages.min",
        "angular-material": "https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.3/angular-material.min"
    },
    priority: ['angular'],
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-message': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular-animate', 'angular-aria', 'angular-message']
        },
        'angular-route': {
            deps: ['angular-material'],
        },
        'app': {
            deps: ['angular-route']
        }
    }
});
require(['angular', 'app'], function(angular) {
    'use strict';
    angular.bootstrap(document, ['myApp']);
});