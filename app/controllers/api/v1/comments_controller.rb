class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  respond_to :json
  respond_to :html, only: []
  respond_to :xml, only: []

  def index
    @comments = Comment.where(mit: params[:comment][:mit_id])
    respond_with @comments
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :mit_id, :user_id)
  end
end
