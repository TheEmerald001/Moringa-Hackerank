Rails.application.routes.draw do

  resources :mcqs
  resources :pros
  resources :kataas
  resources :assessments
  resources :students
  resources :tutors
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
