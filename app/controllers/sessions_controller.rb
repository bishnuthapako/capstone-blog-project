class SessionsController < ApplicationController
    skip_before_action :authenticate, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        # debugger;
        if user&.authenticate(params[:password])
            session[:user_id]=user.id
            render json: user
        else
            render json: {error: ['Check your username or password.']}, status: :unauthorized
        end
    end


    def destroy
        session.delete :user_id
        head :no_content
    end

    
end
