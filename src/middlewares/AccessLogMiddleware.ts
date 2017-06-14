import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'before', priority: 3000})
export class AccessLogMiddleware implements ExpressMiddlewareInterface {

  use(req: any, res: any, next?: (err?: any) => any): any {
    console.log('*** AccessLogMiddleware', req.path);
    next();
  }
}
