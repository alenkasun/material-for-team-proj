(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Course = Backbone.Model.extend({
        defaults: {
            id                 : null,
            idDirection        : null,
            idGroup            : null,
            title              : null,
            desc               : null,
            status             : null,
            userStatus         : null,
            dateStart          : null,
            dateFinish         : null,
            countOfstudents    : null,
            countOfapplication : null,
            duration           : null,
            schedule           : null
        } 

    });


})();