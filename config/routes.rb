Rails.application.routes.draw do

  resources :tutorprofiles, only:[:show,:create]
  resources :studentprofiles,only:[:show,:create]
  resources :attempts,only:[:show,:create,:update]
  resources :invites,only:[:show,:create,:destroy]
  resources :mcqs
  resources :pros
  resources :kataas
  resources :assessments
  resources :students,only:[:show,:create,:destroy]
  resources :tutors
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
