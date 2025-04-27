'use strict';

/**
 * short-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::short-video.short-video');
