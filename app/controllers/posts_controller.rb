class PostsController < ApplicationController
    # skip_before_action :authenticate, only:[:create]
    # before_action :set_post, only: %i[show update destroy]
    
    def index
        posts = Post.all
        render json: posts, each_serializer: PostListSerializer
    end

    # POST

    def create
        post = Post.new(post_params)
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
        post = Post.find_by(id: params[:id])
        post.update(post_params)
        render json: post
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
        params.permit(:title, :content, :date, :user_id)
    end

  

end
