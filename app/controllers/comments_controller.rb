class CommentsController < ApplicationController
    skip_before_action :authenticate, only: [:index]
    
    def index
        comments = Comment.all
        render json: comments
    end 

    
end
