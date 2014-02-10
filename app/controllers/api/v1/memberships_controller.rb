class Api::V1::MembershipsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_membership
  before_action :check_user
  respond_to :json

  def update
    if @membership.update(membership_params)
      respond_with @membership, status: :ok
    else
      render json: @membership.errors, status: :unprocessable_entity
    end
  end

  private
  def membership_params
    params.require(:membership).permit(:state)
  end

  def set_membership
    @membership = Membership.find(params[:id])
  end

  def check_user
    current_user == @membership.user
  end
end
