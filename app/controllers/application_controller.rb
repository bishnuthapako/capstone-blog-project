class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authenticate

  def authenticate
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: ["Not authorized"] }, status: 401 unless @current_user
  end

  def authenticate_user
    # debugger;
    @@current_user ||= User.find(session[:user_id])
    user&.authenticate(params[:password])

  end


end
