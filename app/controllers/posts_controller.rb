class PostsController < ApplicationController
    # skip_before_action :authenticate, only:[:create]
    before_action :set_post, only: %i[show update destroy]
    
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
       if @post.update!(post_params)
          render json: @post, status: :accepted
       else
        render json: { errors: @post.errors.full_messages}, status: :unprocessable_entity
       end
    end

    # DELETE
        
    def destroy
            post = Post.find_by(id: params[:id])
        if post
            post.destroy
            head :no_content
        else
        render json: { error: "Article not found" }, status: :not_found
        end
    end


    private

    def set_post
        @post = Post.find_by(id: params[:id])
    end

    def post_params
        params.require(:post).permit(:user_id, :title, :content, :minutes_to_read, :author)
    end

  

end
