(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Module = Backbone.Model.extend({
        defaults: {
            id         : null,
            title      : null,
            userStatus : null,
            result     : null
        } 

    });



})();