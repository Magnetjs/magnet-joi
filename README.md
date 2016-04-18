### Usage
Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Server from 'magnet-spdy';
import Session from 'magnet-session';
import Router from 'magnet-router';
import Joi from 'magnet-joi';

let app = await magnet([Config, Logger, Server, Session, Joi, Router]);
```

controllers/todo.js
```
export default function todo({
  Joi,
  router,
  validation
}) {
  router

  .post(
    '/todos',

    validation('body', {
      title: Joi.any(),
    }),

    async (ctx) => {
      ctx.body = 'success';
    }
  );
}
```
