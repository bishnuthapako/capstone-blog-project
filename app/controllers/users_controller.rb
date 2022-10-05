class UsersController < ApplicationController
    before_action :authorize, only:[:show]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id]=user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_message}, status: :unprocessable_entity
        end
    end

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end




    private

    def user_params
        params.permit(:fullname, :username, :password, :password_confirmation, :email, :bio, :avatar_url )
    end

    def authorize
        render json: {error: "Not authorized" }, status: :unauthorized unless session.inlcude? :user_id
    end
end
