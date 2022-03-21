class PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    post = Post.create!(post_params)
    render json: post, status: :created
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

  private

  def post_params
    params.permit(:user_id, :image, :likes, :caption)
  end

end
