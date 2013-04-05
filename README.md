# Basic to-do app with AeroGear + Node.js + Redis

## Usage instructions

1. Grab the sources

        git clone git@github.com:abstractj/todo-aerogear-node.git && cd todo-aerogear-node && npm install
        
2. Install Redis

    *Linux*:

        apt-get install redis
    
    *Mac OS X*:

        brew install redis
    
    
3. Start Redis
 
        redis-server /usr/local/etc/redis.conf
       
4. Start the server
        
        node app
        
5. (*Optional*) Execute the script to insert some data on Redis  

        script/data.sh
        
4. Open the application at http://localhost:3000


**Note**: Install *nodemon*, if you want to monitor any changes at your Node.js application and save your time.

    npm install nodemon
    
Run the server

    nodemon app