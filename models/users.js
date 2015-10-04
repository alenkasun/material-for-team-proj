(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.User = Backbone.Model.extend({
        defaults: {
            id              : null,
            firtsName       : null,
            lastName        : null,
            email           : null,
            password        : null,
            confirmPassword : null
        } 

    });


})();