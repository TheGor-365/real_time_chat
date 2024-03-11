Rails.application.routes.draw do
  root 'landing#index'
  resources :messages, only: [:new, :create]
end
