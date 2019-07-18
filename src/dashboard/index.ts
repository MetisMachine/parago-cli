
import * as path    from 'path'
import * as Express from 'express'
import * as Api from './router'
// const express = require( "express" );

export default class Dashboard {
  port: number;
  constructor(port: number) {
    this.port = port;
  }

  start(): void {
    const app = Express();
    // port = port || 8080; // default port to listen

    const staticPath    = path.resolve(
      path.relative(process.cwd(), __dirname),
      'static'
    )

    app.use(Express.static(staticPath))
    
    app.use('/api', Api)
    // define a route handler for the default home page
    app.get( "/", ( req, res ) => {
        res.send( "Hello world!" );
    } );
    
    app.use(function(req, res){
      res.sendfile('./static/index.html');
    });
    // start the Express server
    app.listen( this.port, () => {
        console.log( `server started at http://localhost:${ this.port }` );
    } );
    
  }
}


