# dazn-movie-lobby-api

### How to run project on local machine?

1. To successfully run project in the local machine following should be installed locally
    1. node
    2. redis
    3. mongodb
    4. git
2. Clone the repo on local using git clone <url>. 
3. If all the 4 are available in local machine then make sure “redis” and “mongodb” are running over local machine and both should has to run over their default ports
    1. mongodb default port is 27017
    2. redis default port is 6379
    3. if not then these both has to be up and running on their default port
4. open terminal at project location and execute following command
    1. npm i & then
    2. npm run dev
5. To see whether project is running or not, run following in web browser
    1. [http://localhost:8800](http://localhost:8800/)
6. To see whether flow is reaching till route layer, run following in web browser
    1. [http://localhost:8800](http://localhost:8800/)/v1/
7. To see - how project can handle a random request (route), run following
    1. http://localhost:8800/v1/something
8. To add movie into db, import following in postman and run it
    - curl request
        ```jsx
        curl --location 'http://127.0.0.1:8800/v1/movies' \
        --header 'Content-Type: application/json' \
        --data '{
            "title": "Double Dhamal",
            "description": "Fun to watch movie",
            "genre": "comedy bollywood", 
            "rating": "3.50",
            "role": ["admin"],
            "streamingLink":"https://www.youtube.com/watch?v=J_WobG--B4s"
        }'
        ```
9. To fetch list of movie, import following into postman and run it
    - curl request
        
        ```jsx
        curl --location 'http://localhost:8800/v1/movies'
        ```
10. To get a movie based on title or genre, import following and run it
    - curl request
        ```jsx
        curl --location 'http://localhost:8800/v1/search?q=comedy'
        ```
11. To update a movie, import following and run it
    - curl request
        
        ```jsx
        curl --location --request PUT 'http://localhost:8800/v1/movies/676da781a6f378d91b7d74dd' \
        --header 'Content-Type: application/json' \
        --data '{
            "title": "Triple Dhamal",
            "description": "Triple Comdey with OG gang",
            "genre": "comedy", 
            "rating": "5.00",
            "role": ["admin"],
            "streamingLink":"https://www.youtube.com/watch?v=FXflfh5jdIc"
        }'
        ```
12. To delete a movie, import following and run it
    - curl request
        ```jsx
        curl --location --request DELETE 'http://localhost:8800/v1/movies/676da781a6f378d91b7d74dd' \
        --header 'Content-Type: application/json' \
        --data '{
            "role": ["admin"]
        }'
        ```
13. To see unhappy cases of these api, one has to visit middleware layer and then have to make changes in req body and made the request for observing those unhappy cases.

### Steps I followed to create the Project:

1. Created a new directory(folder) i.e. interviewDAZN
2. Open the vs code and directed to new folder “interviewDAZN”
3. Open terminal and initialize node project
    1. npm init
    2. answer the asked question and we are good to go
4. Install following packages
    1. npm install mongoose express dotenv cors express-validator body-parser redis
5. For working of TS, install following as dev dependencies
    1. npm install --save-dev typescript ts-node @types/express @types/node @types/mongoose @types/cors eslint jest ts-jest @types/jest supertest nodemon
6. Eslint configuration in project
    1. npx eslint --init
    2. Executing without downloading it to project
7. Made file as tsconfig.json
    1. To define the ts config
    2. It tells the typescript compiler how to behave when compiling TypeScript code into JavaScript.
    3. we can do the same with ⇒ npx tsc --init (Initialized the TS)
8. Made a file inside project as “.gitignore”
    1. add “node_modules” into it
9. Made a file inside project as “.env”
    1. added url, host and some more details
10. To run project with nodemon, made some changes in “script” inside package.json
11. Made project folder structure inside src
12. And started working on project


### Note:
I deliberately not put .env file into .gitignore and I know came inside best practices to put .env file .gitignore
