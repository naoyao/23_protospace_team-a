Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  #prototypesのdeleateだったものをdestroyに変更しました。
  resources :prototypes, only: [:index, :new, :create, :show, :destroy, :edit]
  resources :users, only: [:show, :edit, :update]
end
