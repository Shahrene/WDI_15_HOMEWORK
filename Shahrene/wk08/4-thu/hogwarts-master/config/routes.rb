Rails.application.routes.draw do

  root 'houses#index'

  get '/', to: 'houses#index'

  get 'students/new', to: 'students#new'

  resources :houses, only: [:index, :show]

  resources :students, only: [:index, :show]

end
