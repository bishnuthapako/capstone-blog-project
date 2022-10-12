class TagsController < ApplicationController

    def create
        tag = Tag.create(tag_params)
        if tag.valid?
            session[:tag_id]=tag.id
            render json: tag, status: :created
        else
            render json: {error: post.errors.full_message}, status: :unprocessable_entity
        end
    end

        # GET TAG/1
    def show
        tag = Tag.find(params[:id])
        render json: tag
    end



    private
    def tag_params
        params.permit(:tagname)
    end
end
