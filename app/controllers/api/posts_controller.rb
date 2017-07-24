class Api::PostsController < ApplicationController
    def index
        if params[:topic_id]
            @posts = Post.where(topic_id: params[:topic_id])
        else
            @posts = Post.all
        end

        render "/api/posts/index"
    end

    def show
        @post = Post.find(params[:id])
        if @post
            render "/api/posts/show"
        else
            render json: @post.errors.full_messages, status: 404
        end
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        @post.image_url = "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500922756/pexels-photo-461947_ygh99o.jpg" if @post.image_url == ""
        if @post.save!
            render "/api/posts/show"
        else
            render json: @posts.errors.full_messages, status: 422
        end
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post.update_attributes(post_params)
            render "/api/posts/show"
        else
            render json: @posts.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :body, :image_url, :topic_id)
    end
end
