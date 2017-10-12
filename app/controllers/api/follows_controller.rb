class FollowsController < ApplicationController
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
    @follows = Follow.where(followee_id: params[:id])
  end

  def destroy
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
