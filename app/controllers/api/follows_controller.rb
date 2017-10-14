class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.followee_id = current_user.id
    if @follow.save
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @follows = Follow.where(followee_id: params[:id]).pluck(:follower_id)
    @posts = Post.where(author_id: @follows)
    render "api/posts/index"
  end

  def destroy
    @follow = Follow.find_by(follower_id: params[:id], followee_id: current_user.id)
    @user = @follow.follower
    @follow.destroy!
    render "api/users/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
