(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Material = Backbone.Model.extend({
        defaults: {
            id       : null,
            idModule : null,
            title    : null,
            wysiwyg  : null,
            link     : null
        }

    });


})();