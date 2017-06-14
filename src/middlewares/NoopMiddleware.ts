import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'before', priority: 2000})
export class NoopMiddleware implements ExpressMiddlewareInterface {

  use(req: any, res: any, next?: (err?: any) => any): any {
    console.log('*** NoopMiddleware');
    next();
  }
}
