class MembersOnlyPostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def index
        posts = Post.where(is_member_only: true).includes(:user).order(created_at: :desc)
        render json: posts, each_serializer: PostListSerializer
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end



    private
    def record_not_found
        render json: {error: "Post not found"}, status: :not_found
    end
end
