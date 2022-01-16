'use strict';

const properties = require('../package.json');

const controller = {
    about: function(req, res) {
        let aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    }
}

module.exports = controller;