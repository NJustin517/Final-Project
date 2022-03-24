class FollowsController < ApplicationController

  def create
    follow = Follow.create!(follow_params)
    render json: follow, status: :created
  end

  def destroy
    follow = Follow.find(params[:id])
    follow.destroy
    head :no_content
  end

  private

  def follow_params
    params.permit(:user_id, :follow_id)
  end
end
