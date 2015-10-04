(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Direction = Backbone.Model.extend({
        defaults: {
            id        : null,
            direction : null
        } 

    });
 

})();