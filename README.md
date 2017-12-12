# README


##Architectural Considerations
###Chosen approach
Pros: 
* Easy to move quickly
* Some degree of configuration via Webpacker
* No need to start separate JS server for dev

Cons: 
* Can't use turbolinks (due to components rendering on DOMContentLoaded event)
