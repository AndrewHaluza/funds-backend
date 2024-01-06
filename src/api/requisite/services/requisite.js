'use strict';

/**
 * requisite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::requisite.requisite');
