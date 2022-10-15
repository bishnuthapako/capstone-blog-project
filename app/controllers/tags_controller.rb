class TagsController < ApplicationController

    # before_action :set_tag, only: %i[show update destroy]

    def index
        tags = Tag.all
        render json: tags
    end


        # GET TAG/1
        def show
            tag = Tag.find(params[:id])
            render json: tag
        end

        # POST
    def create
        tag = Tag.create(tag_params)
        if tag.save
            render json: tag, status: :created
        else
            render json: {error: tag.errors.full_message}, status: :unprocessable_entity
        end
    end


    # UPDATE /PATCH
    def update
        tag = Tag.find_by(id: params[:id])
       if tag.update(tag_params)
            render json: tag
          else
            render json: { error: "Tag is not found" }, status: :not_found
          end
     end

    # DELETE

     def destroy
        tag = Tag.find_by(id: params[:id])
    if tag
        tag.destroy
        head :no_content
    else
        render json: { error: "Tag not found" }, status: :not_found
        end
    end



    private


    def set_tag
        @tag = Tag.find_by(id: params[:id])
    end

    def tag_params
        params.require(:tag).permit(:tagname)
    end
end
