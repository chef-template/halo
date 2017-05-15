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
router = new Router({ dir: './src/controllers' })

router.maps(generateRouterMaps({ dir: './src/controllers' }))

app.use(time())
    .use(error())
    .use(compress())
    .use(jsonp())
    .use(cors())
    .use(logger())
    .use(parameter())
    .use(router.routes())
    .listen(conf.port)