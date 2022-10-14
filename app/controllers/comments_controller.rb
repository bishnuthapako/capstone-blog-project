class CommentsController < ApplicationController
    # skip_before_action :authenticate, only: [:create]
    before_action :set_comment, only: &i[show update destroy]
    
    def index
        @comments = Comment.all
        render json: @comments
    end 

    # POST /COMMENT
    def create
        @comment = Comment.create!(comment_params)
        if @comment.save
            render json: comment, status: :created, location: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

   # PATCH/PUT /comment/1

    def update
        if @comment.update(comment_params)
            render json: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end

# Delete
    def destroy
    @comment.destroy
    end

    private

    def set_comment
        @comment = Comment.find_by(id: params[:id])
      end

    def comment_params
        params.permit(:body, :user_id, :post_id)

    end

    
end
