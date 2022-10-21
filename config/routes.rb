Rails.application.routes.draw do

  resources :attempts
  resources :invites
  resources :mcqs, only: [:show, :create, :update, :destroy]
  resources :pros, only: [:show, :create, :update, :destroy]
  resources :kataas, only: [:show, :create, :update, :destroy]
  resources :assessments, only: [:show, :create, :update, :destroy]
  resources :students
  resources :tutors, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
