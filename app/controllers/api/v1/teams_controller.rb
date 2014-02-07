class Api::V1::TeamsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json
  respond_to :html, only: []
  respond_to :xml, only: []

  def index
    @teams = current_user.teams
    render json: @teams
  end
end
