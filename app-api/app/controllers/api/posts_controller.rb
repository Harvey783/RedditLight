class Api::PostsController < ApplicationController
    before_action :set_post, only: [:show, :edit, :destroy]

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

    def destroy
        if @post.destroy
            render status: 204
        else
            render json: { messsage: "Unable to destroy" }, status: 400
        end
    end
    



end
