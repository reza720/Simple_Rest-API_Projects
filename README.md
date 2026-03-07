## These are small REST API projects with 2 to 4 Objects. 

## Steps To Do the Projects:
- **Start with installation of dependencies:**
  - Express
  - Sequelize
  - MySQL2
  - Dotenv
  - Winston
  - Swagger
  - jest
  - supertest
  - Express-validator 
  - jsonwebtoken (JWT)
  - bcrypt
  - helmet
  - express-rate-limit
  - cors

- **Setup Layers & Add Logs / Security:**
  - Config Winston & Sequelize
  - write Dotenv & constants
  - Write Models
  - Write Utils if needed any time for any part
  - Write Simple service layer: + signup & login with JWT & bcrypt/Argon2 
  - Use Logger: Business success: in service, Failer: in globalErrorHandler, Server Events: in app and server 
  - Write Controller layer
  - Write Middleware: globalErroHandler with failer logs, Security(validations, Authentication, Authorization)
  - Write Router: middleware functions, middleware tools(specific rate limiter, Route-Specific CORS)
  - Write app: Mount routers, middlewares(Body parser, globalErrorHandler, 404 of route, Helmet, rate limiter, Cors, hpp)
  - Write server

  
- **Apply Testing:**
  - Unit Testing (jest)
  - API Manual Testing (Postman)
  - API Automated Testing (Jest + Supertest)
  - Performance / Load Testing: K6
  - Security Testing: Dependencies(npm audit),auth,authorization,validation(Jest+Supertest),vulnerabilities(OWASP ZAP). 
  - Debugg: VS Code Debugger / console.log

- **Add More Things**
  - API Doc: Swagger
  - External Services:
  - Migration: sequelize-cli
  - Setup CI/CD Piplines: GitHub Actions
  - Containerize: Docker