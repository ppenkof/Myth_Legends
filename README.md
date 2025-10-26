### 1. Initialize Project 
 - [x] Initialize npm project `npm init -y`
 - [x] Change module system
 - [x] Add start file `/src/index.js`
 - [x] Add dev script
 - [x] Config debugger
 - [x] Add resources

### 2. Expres
 - [x] Install express `npm i express`
 - [x] Init express server
 - [x] Setup static middleware
 - [x] Add body parser
 - [x] Add home controller
 - [x] Add route file
 - [x] Add error controller

### 3. Handlebars
 - [x] Install handlebars `npm i express-handlebars`
 - [x] Config hanlebars engine
 - [x] Use handlebars engine
 - [x] Config handlebars file extension
 - [x] Set views folder
 - [x] Add home view
 - [x] Render home view without layout `res.render('home', {layout: false});`
 - [x] Fix asset paths
 - [x] Add layout
 - [x] Add partials dir
 - [x] Config handlebars to work with mongoose documents `runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Connect to db
 - [x] Add error handling on connect
 - [x] Add simple user model

### 5. Register
 - [x] Fix navigation links
 - [x] Add user controller
 - [x] Add user controller to routes
 - [x] Create register view
 - [x] Render register view
 - [x] Modify register form
 - [x] Create post route for register
 - [x] Create user service
 - [x] Redirect after successfull register
 - [x] Instal bcrypt `npm i bcrypt`
 - [x] Hash passwords before safe
 - [x] BONUS: Check if user exists

### 6. Login
 - [x] Fix login navigation link
 - [x] Add login view
 - [x] Add get login action
 - [x] Fix login form
 - [x] Add post login acion
 - [x] Add login method in userService
 - [x] Validate if user exists
 - [x] Validate password
 - [x] Install jsonwebtoke `npm i jsonwebtoken`
 - [x] Generate token
 - [x] Call userService from userController
 - [x] Send token as cookie
 - [x] Redirect to homepage
 - [x] BONUS: Extract jwt secret to constant or env 
 - [x] Auto login on register

### 7. Logout
 - [x] Add logout navigation link
 - [x] Add logout action

### 8. Authentication
 - [x] Install and use cookie-parser `npm i cookie-parser`
 - [x] Create auth middleware
    - [x] Allow if guest (no token)
    - [x] Verify token (clear session if invalid)
    - [x] Attach decoded token to req.user (if token is valid)
 - [x] Use auth middleware

### 9. Authorization
 - [x] Create isAuth middleware
 - [x] Create isGuest middleware
 - [x] Add route guards
 - [x] Add not found page

### 10. Dynamic content
 - [x] Add user data to handlebars context
 - [x] Dynamic navigation
 - [x] Dynamic titles
 - [x] BONUS: Set page title from view
  
### 11. Error handling and Validation
 - [x] Add error message in notification
 - [x] Notification conditional rendering
 - [x] Create getErrorMessage util function
 - [x] Add error handling for register
 - [x] Add register form data persistance
 - [x] Check repeatPassword in service
 - [x] BONUS: Check repeatPassword in model
 - [x] Error handling and data persistance on login 

## Solve Myth&Legends

### Create animal Page
 - [x] Fix create animal navigation link
 - [x] Add animal controller
 - [x] Add controller to routes
 - [x] Add create action with render
 - [x] Add animals folder in views
 - [x] Add create animal view
 - [x] Add animal model
 - [x] Modify create animal form
 - [x] Create animal post action
 - [x] Create animal service with create method
 - [x] Add owner on animal creation
 - [x] Add error handling

### Animal Dashboard Page
 - [x] Fix navigation link
 - [x] Add dashboard view
 - [x] Add get dashboard action with static animals
 - [x] Get all animals service
 - [x] Show dynamic animals  
### Home page animals
 - [x] Add get latest animals in animal service
 - [x] Show dynamic lastest animals on home 
###  Animal details
 - [x] Fix details link in animals page
 - [x] Fix details link in home page
 - [x] Show static details page
 - [x] Add getOne method in animal service
 - [x] Show dynamic details page (without author and donationers)
 - [x] Hide buttons if not logged
 - [x] Show edit and delete button if author
 - [x] Show donation and already donating buttons if logged
 - [ ] Implement donation functionallity
   - [ ] Add donationers in animal relation
   - [ ] Add donation action
   - [ ] Add donation service method
   - [ ] Fix donation link
 - [ ] Show dynamic donations
 - [ ] Show donations button or already donating buttons conditionally 
### Delete animal
 - [x] Fix navigation link in details
 - [x] Add delete action
 - [x] Add delete method in animal service
 
### Edit animal
 - [x] Fix navigation link in details
 - [x] Add get edit action
 - [x] Show empty edit page
 - [x] Populate edit form with animal data
 - [x] Add post edit action
 - [x] Add edit method in animal service
 - [x] Add error handling 
### Donations
 - [ ] Fix navigation link
 - [ ] Show static donations page
 - [ ] Show dynamic user information
 - [ ] Show created animals
 - [ ] Show donated animals

## Validation and error handling
