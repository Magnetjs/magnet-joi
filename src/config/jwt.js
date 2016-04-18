const secretOrKey = 'kbUyW5Htw/&=vYm!~JwYZ+"5m'; // Generate your own
const issuer = 'accounts.example.com';
const audience = 'example.com';

export default {
  // https://github.com/koajs/jwt
  options: {
    secretOrKey,
    issuer,
    audience,
  },

  // https://github.com/Foxandxss/koa-unless
  unless: {

  }
};
