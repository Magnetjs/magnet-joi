import Base from 'magnet-core/dist/base';
import Joi from 'joi';
import _promise from 'bluebird';

_promise.promisifyAll(Joi);

export default class Validation extends Base {
  async setup() {
    this.app.Joi = Joi;

    // TODO: Turn into middleware or use future koa-joi-router
    this.app.validation = function validationMiddleware(type, schema, options) {
      return async function validationMiddleware(ctx, next) {
        let data;

        switch (type) {
          case 'query':
            data = ctx.query;
            break;
          case 'params':
            data = ctx.params;
            break;
          case 'body':
            data = ctx.request.body;
            break;
          default:
            throw new Error('Type is not provide');
        }

        const result = await Joi.validate(data, schema, options);

        if (result.error) {
          ctx.status = 400;
          ctx.body = result;
          return;
        }

        switch (type) {
          case 'query':
            ctx.query = result.value;
            break;
          case 'params':
            ctx.params = result.value;
            break;
          case 'body':
            ctx.request.body = result.value;
            break;
          default:
            throw new Error('Type is not provide');
        }

        await next();
      };
    };
  }
}
