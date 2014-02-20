class Api::V1::DashboardsController < ApplicationController
  before_action :authenticate_user!
  def show
    @dashboard = Dashboard.new(current_user)
    render json: @dashboard, serializer: DashboardSerializer
  end
end

