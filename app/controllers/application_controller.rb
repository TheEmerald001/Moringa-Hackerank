class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authorize
  skip_before_action :authorize ,only: [:create]

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
  
end
