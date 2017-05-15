import { RequestUrl, RequestParam } from 'halo-annotation'

export default class {
    @RequestUrl('/hello', RequestUrl.GET)
    @RequestParam('text', 'required', '名称')
    async action(ctx, next) {
        ctx.body = `hello ${ctx.getParameter('text')}`
    }
}