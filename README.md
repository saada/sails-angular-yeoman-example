# Sails + Angular + Yeoman Example
#### I am aware this is sort of a hack, but it will do until another solution comes up:

    sails new YoSails --template=jade
    cd YoSails

Now make a backup of the sails default JSON dependencies, in my case:

    "dependencies": {
        "sails": "0.8.9"
    },
    "scripts": {
        "start": "node app.js",
        "debug": "node debug app.js"
    },
    "main": "app.js",

Now install Angular generator (and Yeoman of course):

    npm install generator-angular
    yo angular

Overwrite everything, then merge both package.json as shown in the example.

After that:

    npm install && bower install

Modify the grunt file's connect PORT to Sails's port:
    
    ...
    connect: {
            options: {
                port: 1337,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
    ...        
Finally, lift your sails in a terminal:

    sails lift
    
And start Yeoman (Grunt) in another terminal!

    grunt server

Additionally, I installed h5bp in this example.
