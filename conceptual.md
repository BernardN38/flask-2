### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
    an architeture for building apis that standardizes, uses verbs such as Get Post Patch Put and delete
- What is a resource?
    A resource is the return value of a website such as json 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
    the user registration is sent directly to the server

- What does idempotent mean? Which HTTP verbs are idempotent?
    idempotent is when you can run a request multiple times without changing the state

- What is the difference between PUT and PATCH?
    PUT replaces an entire resource, Patch only updates a part

- What is one way encryption?
    is when you hash a password and store it, only the user that created it can access, the stored password can not be reversed 

- What is the purpose of a `salt` when hashing a password?
    a unique sequnce that marks a stored password 

- What is the purpose of the Bcrypt module?
    to hash passwords to be stored safely and verify passwords when a user logs in

- What is the difference between authorization and authentication?
    authentication verifies the user is the correct person they are try to log in as
    athorization is verifying is a user has elevated powers such as admin 