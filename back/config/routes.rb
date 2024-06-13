Rails.application.routes.draw do
  root 'home#index'
  get "/bikers", to: "bikers#index"
  get "/locations", to: "locations#index"
  resources :slogan_submissions
end
