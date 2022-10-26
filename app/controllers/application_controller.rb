class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authorize
  skip_before_action :authorize ,only: [:create]
  
end
