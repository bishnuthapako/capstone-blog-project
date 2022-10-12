class UsersController < ApplicationController
    skip_before_action :authenticate, only:[:create]

    def index
        users = User.all
        render json: users
    end
 # POST /users
    def create
        user = User.create!(users_param)
        session[:user_id] = user.id
        render json:user, status: :created
    end

 # GET /users/1
    def show
        render json: @current_user
    end

    # PATCH/PUT /users/1
    def update
        if user.update(users_param)
          render json: user
        else
          render json: user.errors, status: :unprocessable_entity
        end
      end




    private

    def users_param
        params.permit(:fullname, :username, :password, :password_confirmation, :password_digest, :email, :bio, :avatar_url )
    end


end
