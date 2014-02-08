class Api::V1::TeamsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_team, only: [:show, :update, :destroy, :admin_check]
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

  def show
    render json: @team
  end

  def admin_check
    if @team.admins.include?(current_user)
      render json: :success
    else
      render json: {message: "You are not an admin for #{@team.name}"}, status: :unauthorized
    end
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end

  def set_team
    @team = Team.find(params[:id])
  end
end
