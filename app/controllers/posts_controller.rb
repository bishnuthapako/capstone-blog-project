class PostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    
    def index
        posts = Post.where(is_member_only: false).includes(:user).order(created_at: :desc)
        render json: posts, each_serializer: PostListSerializer
    end

    # def index
    #     posts = Post.all
    #     render json: posts
    # end

    # POST
    # def create
    #     post = Post.create(post_params)
    #     render json: post, status: :created
    # end

    def show
        post = Post.find(params[:id])
        render json: post
    end


        
    
    private

    # def post_params
    #     params.permit(:title, :content)
    # end

    def record_not_found
        render json: {error: "Post not found"}, status: :not_found
    end


end
