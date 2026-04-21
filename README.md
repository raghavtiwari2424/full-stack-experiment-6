# full-stack-experiment-6
Node.js Backend Experiments — 2.2.1, 2.2.2, 2.2.3
Three complete Node.js + Express.js + MongoDB experiments.

Quick Start (any experiment)
cd exp-2.2.X-<name>
npm install
# edit .env as needed
npm run dev
Experiment Overview
Experiment	Topic	Key Concepts
2.2.1 exp-2.2.1-middleware	Middleware Implementation	Custom logging, auth, error handling, middleware chaining
2.2.2 exp-2.2.2-jwt-auth	JWT Authentication for Banking API	bcrypt, JWT access/refresh tokens, protected routes
2.2.3 exp-2.2.3-transactions	Transaction System with Rollback	MongoDB sessions, ACID properties, atomicity, audit logs
Common Requirements
Node.js 18+
MongoDB running locally or a MongoDB Atlas URI
Postman or curl for testing
Experiment 2.2.3 only: MongoDB must be running as a Replica Set for transactions to work. See its README for setup steps.

## Learning Outcomes

1. Understand and implement middleware in Express.js, including custom logging, authentication, and error handling.

2. Develop secure REST APIs using JSON Web Tokens (JWT) for authentication and authorization.

3. Integrate MongoDB with Node.js applications using Mongoose for efficient data modeling and database operations.

4. Implement advanced backend concepts such as transactions, rollback mechanisms, and ACID properties using MongoDB sessions.

5. Test and debug backend APIs using tools like Postman, ensuring proper request handling and error management.

Course Outcomes
CO3: RESTful APIs + MongoDB/MySQL integration with Node.js & Express.js
CO4: Debugging, testing, and optimizing full-stack applications
