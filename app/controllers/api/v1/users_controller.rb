class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def exists
    if User.find_by_username_or_email(params[:user])
      render json: :success
    else
      render json: {message: 'User not found'}, status: :not_found
    end
  end
end
