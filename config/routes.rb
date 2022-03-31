Rails.application.routes.draw do
  
  resources :likes, only: [:index, :create, :destroy]
  # resources :reports
  resources :comments, only: [:index, :create]
  resources :posts, only: [:index, :create, :update, :destroy]
  resources :follows, only: [:index, :create, :destroy]
  resources :users, only: [:index, :create, :update, :show]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search/:searchterm", to: "users#search"
  get "/user/:username", to: "users#find"
  get "/followed_profiles", to: "users#follows"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
