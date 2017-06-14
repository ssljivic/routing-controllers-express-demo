import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'before'})
export class Noop2Middleware implements ExpressMiddlewareInterface {

  use(req: any, res: any, next?: (err?: any) => any): any {
    console.log('*** Noop2Middleware');
    next();
  }
}
