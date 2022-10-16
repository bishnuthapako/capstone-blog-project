class UsersController < ApplicationController
    skip_before_action :authenticate, only:[:create]
    # before_action :set_user, only: %i[show update]

    def index
        @users = User.all
        render json: @users
    end
 # POST /users
    def create
        user = User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
      # if user.valid?
      #   session[:user_id] = user.id
      #   render json:user, status: :created
      # else
      #   render json: {error: user.errors.full_message}, status: :unprocessable_entity
      # end
    end

 # GET /users/1
    def show
      # debugger;
      render json: @current_user
      # user = User.find_by(id: params[:id])
      #   render json: user
    end

    # PATCH/PUT /users/1
    def update
      user = User.find(params[:id])
        if user.update(users_param)
          render json: user
        else
          render json: { error: "User is not found" }, status: :not_found
        end
      end

    def destroy
      user = User.find_by(id: params[:id])
      if user
        user.destroy
        head :no_content
      else
          render json: { error: "User is not found" }, status: :not_found
        end
    end


    private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
        params.permit(:fullname, :username, :password, :password_confirmation, :email, :bio, :avatar_url )
    end


end
