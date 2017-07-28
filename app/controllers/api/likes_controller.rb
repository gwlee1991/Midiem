class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @post = @like.post
    if @like.save
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(post_id: params[:id], user_id: current_user.id)
    @post = @like.post
    @like.destroy!
    render "api/posts/show"
  end

  def index
    @likes = Like.where(user_id: params[:id]).pluck(:post_id)
    @posts = Post.where(id: @likes)
    render "api/posts/index"
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
