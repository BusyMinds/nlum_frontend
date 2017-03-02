NLUM Frontend
=============


Dependencies
------------

Make sure the following are installed.

* `node`
* `yarn`


Setup
-----

1. Install project dependencies.
    ```
    $ yarn install
    ```
    
2. Copy configuration file. Edit as necessary.
    ```
    $ cp client/app/config.sample.js client/app/config.js
    ```
     
     
Development
-----------

1. Run local server.

    ```
    $ yarn start
    ```
    

Deployment
----------

1. Make a compiled build.    

    ```
    $ yarn build
    ```
    
2. Then, move the contents of the `dist` directory to a public webroot.
