Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Root route
  root 'home#index'
  get "/bikers", to: "bikers#index"
  get "/locations", to: "locations#index"
  resources :slogan_submissions

  # Route all other non-API requests to React
  #get '*path', to: 'home#index', constraints: ->(request) { !request.xhr? && request.format.html? }
  

  # Defines the root path route ("/")
  # root "posts#index"
end
