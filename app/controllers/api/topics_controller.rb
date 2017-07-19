class Api::TopicsController < ApplicationController
    def create
        @topic = Topic.new(topic_params)
        @topic.save!
        render json: @user.errors.full_messages, status: 422
    end

    def destroy
        @topic = Topic.find(topic[:id])
        @topic.destroy
    end

    def index
        @topics = Topic.all
        render "api/topics/index"
    end

    def show
        @topic = Topic.find(topic[:id])
        if @topic
            render "api/topics/show"
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    private

    def topic_params
        params.require(:topic).permit(:title)
    end
end
