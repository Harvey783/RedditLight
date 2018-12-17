class Api::PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def create
        post = Post.new(post_params)
        if post.save
            render json: post
        else
            render json: { message: post.errors }, status: 400
        end
    end

    def show
        render json: @post
    end

    def update
        if @post.update(post_params)
            render json: @post
        else
            render json: { messsage: @post.errors }, status: 400
        end
    end
    

end
