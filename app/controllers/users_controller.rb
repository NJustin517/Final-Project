class UsersController < ApplicationController

    def index
      render json: User.all
    end

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def find
      user = User.find_by(username: params[:username])
      render json: user, status: :ok
    end

    def search
      users = User.where("lower(username) LIKE ?", "%" + params[:searchterm].downcase + "%")
      render json: users, status: :ok
    end

    def follows
      user = User.find_by(id: session[:user_id])
      follows = user.follow_profiles
      render json: follows
    end

    private

    def user_params
      params.permit(:username, :email, :password, :password_confirmation, :profile_picture, :first_name, :last_name)
    end
end
