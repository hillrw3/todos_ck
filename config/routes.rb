Rails.application.routes.draw do
  root 'todos#app'

  resources :todos
end
