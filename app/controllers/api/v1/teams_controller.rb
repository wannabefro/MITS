class Api::V1::TeamsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json
  respond_to :html, only: []
  respond_to :xml, only: []

  def index
    @teams = current_user.teams
    render json: @teams
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      @team.join(current_user)
      @team.make_admin(current_user)
      render json: @team, status: :created
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end
end
