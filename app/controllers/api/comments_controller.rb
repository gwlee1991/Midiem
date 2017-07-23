class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render "api/comments/index"
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save!
    render json: @comment.errors.full_messages, status: 422
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment.errors.full_messages, status: 404
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render "api/comments/index"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private 

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end
