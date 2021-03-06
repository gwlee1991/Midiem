class Api::CommentsController < ApplicationController
  def index
    if params[:post_id]
      @comments = Comment.where(post_id: params[:post_id])
    else
      @comments = Comment.all
    end
    render "api/comments/index"
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save!
      render "/api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    
  end

  private 

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end
