(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Test = Backbone.Model.extend({
        defaults: {
            id       : null,
            idModule : null,
            idUser   : null,
            title    : null
        } 
    });
 
    app.models.Question = Backbone.Model.extend({
        defaults: {
            id         : null,
            idTest     : null,
            question   : null,
            type       : null            
        } 
    });

    app.models.Answer = Backbone.Model.extend({
        defaults: {
            id         : null,
            idQuestion : null,
            variant    : null
            userAnswer : null
        } 
    });

})();