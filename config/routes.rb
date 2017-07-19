Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :topics, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy]
  end
end
