'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var secretOrKey = 'kbUyW5Htw/&=vYm!~JwYZ+"5m'; // Generate your own
var issuer = 'accounts.example.com';
var audience = 'example.com';

exports.default = {
  // https://github.com/koajs/jwt
  options: {
    secretOrKey: secretOrKey,
    issuer: issuer,
    audience: audience
  },

  // https://github.com/Foxandxss/koa-unless
  unless: {}
};