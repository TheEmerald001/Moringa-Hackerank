Rails.application.routes.draw do
  resources :tutorprofiles, only:[:index,:show,:create]
  resources :studentprofiles,only:[:index,:show,:create]
  resources :attempts,only:[:index,:show,:create,:update]
  resources :invites,only:[:show,:create,:update,:destroy, :update]
  resources :mcqs, only: [:show, :create, :update, :destroy]
  resources :pros, only: [:show, :create, :update, :destroy]
  resources :kataas, only: [:show, :create, :update, :destroy]
  resources :assessments, only: [:show, :create, :update, :destroy]
  resources :students,only:[:index,:show,:create,:destroy] do
    resources :assessments, only: [:show, :create, :update, :destroy]
  end
  resources :tutors, only: [:show, :create]

  #custome route for assessment
  get "/attemptlist/:assessment_id",to: "attempts#order"

  #Signup routes for student
  post "/signup" , to: "students#create"
  get "/me", to:"students#show"
  get '/students', to: "students#index"
  
  #login & logout routes for student
  post "/login" , to:"sessions#create"
  delete "/logout" ,to: "sessions#destroy"
  
  #Signup routes for tutor
  post "/signup" , to: "tutors#create"
  get "/me", to:"tutors#show"
  get '/tutors', to: "tutors#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
