Rails.application.routes.draw do
  resources :tutorprofiles, only:[:index,:show,:create]
  resources :studentprofiles,only:[:index,:show,:create]
  resources :attempts,only:[:index,:show,:create,:update]
  resources :invites,only:[:show,:create,:destroy]
  resources :mcqs, only: [:show, :create, :update, :destroy]
  resources :pros, only: [:show, :create, :update, :destroy]
  resources :kataas, only: [:show, :create, :update, :destroy]
  resources :assessments, only: [:show, :create, :update, :destroy]
  resources :students,only:[:index,:show,:create,:destroy] do
    resources :assessments, only: [:show, :create, :update, :destroy]
  end
  resources :tutors, only: [:show, :create]

  get "/attemptlist/:assessment_id",to: "attempts#order"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
