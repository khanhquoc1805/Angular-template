var angular = require('angular');
const headerBarComponent = require('./header-bar/header-bar.component');

angular.module('shared', [])
    .component('headerBar', headerBarComponent);