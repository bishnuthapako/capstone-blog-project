class CommentsController < ApplicationController
    # skip_before_action :authenticate, only: [:create]
    # before_action :set_comment, only: &i[show update destroy]
    
    def index
        comments = Comment.all
        render json: comments
    end 

    def show
        comment=Comment.find_by(id: params[:id])
        render json: comment
    end

    # POST /COMMENT
    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment, status: :created
        else
            render json: comment.errors, status: :unprocessable_entity
        end
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

   # PATCH/PUT /comment/1

    def update
        comment = Comment.find_by(id: params[:id])
        if comment.update(comment_params)
            render json: @comment
        else
            render json: {error: "Comment is not found"}, status: :not_found
        end
    end


# Delete
    def destroy
    comment = Comment.find_by(id: params[:id])
      if comment
        comment.destroy
        head :no_content
      else
          render json: { error: "Comment is not found" }, status: :not_found
        end
    end

    private

    def set_comment
        @comment = Comment.find_by(id: params[:id])
      end

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id)

    end

    
end
