Rails.application.routes.draw do
  
  resources :reports
  resources :comments
  resources :posts
  resources :follows
  resources :users

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search/:username", to: "users#find"
  get "/followed_profiles", to: "users#follows"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
