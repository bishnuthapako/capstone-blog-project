Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:index, :show, :create, :update]
  resources :tags, only: [:index, :create, :show]
  resources :comments, only: [:index, :create, :update]
  resources :posts, only: [:index, :create, :show, :update, :destroy]
  resources :members_only_posts, only: [:index, :show]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    post "/signup", to: "users#create"
    get "/me", to: "users#show"
  
end
