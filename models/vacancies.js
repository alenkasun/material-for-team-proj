(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Vacancy = Backbone.Model.extend({
        defaults: {
            id       : null,
            position : null,
            status   : null
        }

    });


})();