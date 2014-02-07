class Api::V1::MitsController < ApplicationController
  before_action :set_mit, only: [:show, :update, :destroy]
  respond_to :json
  respond_to :html, only: []
  respond_to :xml, only: []
  
  def index
    @mits = Mit.where(user: current_user)
    respond_with @mits
  end

  def create
    @mit = Mit.new(mit_params)
    @mit.user_id = params[:mit][:user]
    if @mit.save
      respond_with @mit, status: :created, location: [:api, :v1, @mit]
    else
      render json: @mit.errors, status: :unprocessable_entity
    end
  end

  def show
    respond_with @mit
  end

  def destroy
    @mit.destroy
    head :no_content
  end

  private
  def set_mit
    @mit = Mit.find(params[:id])
  end

  def mit_params
    params.require(:mit).permit(:title, :body, :user_id)
  end
end
