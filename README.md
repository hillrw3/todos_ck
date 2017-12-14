# Todo List

## Setup

Fairly basic rails app making use of the webpacker gem to serve react.

Dependencies:
* Postgres (can be installed and launched via homebrew
* Yarn (npm can be installed via homebrew, then run `npm install -g yarn`)

The following commands are all that should be needed to get the app in an operable state:
```
bundle install
rails db:create db:migrate db:seed
```


## Architectural Considerations
### Chosen approach: React via webpacker with single entry point
Pros: 
* Easy to move quickly
* Some degree of configuration via Webpacker
* No need to start separate JS server for dev

Cons: 
* Can't use turbolinks (due to components rendering on DOMContentLoaded event)


### Other Considered Architectures
#### react-rails gem
Pros:
* Gem handles parsing of props
* Simple

Cons:
* Codebase is tied to gem and whatever version of react it uses
* Can't use modern import/export syntax
* No control over npm packages

#### Stand-alone react app served by rails
Pros:
* Full configuration options of using something like npm and webpack
* React could be broken out into entirely separate app easily

Cons:
* Increased complexity of 2 package managers
* Webpack can be tedious
* More in-depth set-up

_Note : This is the option I would most likely choose on a more complex, long-running product._

#### Split frontend and backend
Pros:
* Full configuration options of using something like npm and webpack
* Easier for frontend to consume other services
* Migration to microservices architecture would be simplified 

Cons:
* Increased complexity of 2 package managers
* Webpack can be tedious
* More in-depth set-up
* Challenging release process; how do you serve frontend?
* More complicated UI testing
