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

## Copyright and license

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
