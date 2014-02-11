class Api::V1::MitsController < ApplicationController
  before_action :set_mit, only: [:show, :update, :destroy]
  before_action :authenticate_user!, except: [:show]
  before_action :is_owner, only: [:update, :destroy]
  respond_to :json
  respond_to :html, only: []
  respond_to :xml, only: []

  def index
    @mits = Mit.where(user: current_user)
    respond_with @mits
  end

  def create
    @mit = Mit.new(mit_params)
    @mit.tag_list.add(params[:mit][:new_tags])
    if @mit.save
      respond_with @mit, status: :created, location: [:api, :v1, @mit]
    else
      render json: @mit.errors, status: :unprocessable_entity
    end
  end

  def show
    respond_with @mit
  end

  def update
    if @mit.update(mit_params)
      @mit.tag_list = params[:mit][:new_tags]
      @mit.save!
      render json: @mit, status: :ok, location: [:api, :v1, @mit]
    else
      render json: @mit.errors, status: :unprocessable_entity
    end
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

  def is_owner
    if (@mit.user != current_user)
      render json: status::unprocessable_entity
    end
  end
end
