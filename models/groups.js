(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Group = Backbone.Model.extend({
        defaults: {
            id   : null,
            type : null
        } 

    });
 

})();