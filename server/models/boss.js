'use strict';
var app = require('../server');

module.exports = function(Boss) {
    // why is Boss.app not defined here but at other times it is i.e in hooks?

    // datasource is not defined here
    //Boss.attachTo(app.dataSources['db-persistence']);
    Boss.on('attached', () => {
        Boss.create({ name: "Hugo" });
    })
};
