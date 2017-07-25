Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :topics, only: [:create, :destroy, :show, :index]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
