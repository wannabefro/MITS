class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def index
    render json: User.all, each_serializer: SimpleUserSerializer
  end

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserMitSerializer
  end

  def exists
    if User.find_by_username_or_email(params[:user])
      render json: :success
    else
      render json: {message: 'User not found'}, status: :not_found
    end
  end
end
