var angular = require("angular");
var myapp = require("./app/myapp.html").default;

require("./app/components/component.module");
require("./app/shared/shared.module");

angular
    .module("myApp", ["component",'shared',require("angular-route")])
    .component("myApp", {
        template: myapp,
    })
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/admin/product-mgmt", {
                    template: "<product-mgmt></product-mgmt>",
                })
                .when('/', {
                    template: '<home-page></home-page>'
                });

            // for clean URLs, required base tag on index.html
            $locationProvider.html5Mode(true);
        },
    ]);
