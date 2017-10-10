Rails.application.routes.draw do
  root 'appointments#index'

  resources :appointments

  get "/google7e2388d998536b22" => "application#verify_google_crawler"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
