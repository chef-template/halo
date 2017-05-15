import koa from 'koa'
import time from 'halo-time'
import cors from 'halo-cors'
import conf from './app.conf'
import error from 'halo-error'
import jsonp from 'halo-jsonp'
import logger from 'halo-logger'
import Router from 'halo-router'
import compress from 'halo-compress'
import parameter from 'halo-parameter'
import { rule, generateRouterMaps } from 'halo-utils'

let app, router

app = new koa()
router = new Router(conf.router)

router.maps(generateRouterMaps(conf.router))

app.use(time())
    .use(error(conf.error))
    .use(compress(conf.compress))
    .use(jsonp(conf.jsonp))
    .use(cors(conf.cors))
    .use(logger(conf.logger))
    .use(parameter(conf.parameter))
    .use(router.routes())
    .listen(conf.port)