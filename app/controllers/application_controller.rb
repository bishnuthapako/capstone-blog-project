class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authenticate

  def current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def authenticate
    
    if !current_user
     render json: {error: "Must be logged in"}, status: :unauthorized
    end
  end

end
