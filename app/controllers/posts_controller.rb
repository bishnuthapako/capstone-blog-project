class PostsController < ApplicationController
    skip_before_action :authenticate, only:[:create]
    
    # def index
    #     posts = Post.where(is_member_only: false).includes(:user).order(created_at: :desc)
    #     render json: posts, each_serializer: PostListSerializer
    # end

    def index
        posts = Post.all
        render json: posts, each_serializer: PostListSerializer
    end

    # POST
    def create
        post = Post.create(post_params)
        if post.save
            render json: post, status: :created
        else
            render json: post.errors, status: :unprocessable_entity
        end
    end
 #GET /POST/1  
    def show
        post = Post.find(params[:id])
        render json: post
    end

 #PATCH /POST/1  

    def update
        post = Post.find(params[:id])
       if post.update!(post_params)
          render json: post, status: :accepted
       else
        render json: post.error, status: :unprocessable_entity
       end
    end
        
    
    private

    def post_params
        params.require(:post).permit(:user_id, :title, :content, :minutes_to_read, :author)
    end

  

end
