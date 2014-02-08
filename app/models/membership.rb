class Membership < ActiveRecord::Base
  belongs_to :user
  belongs_to :team
  validate :max_memberships
  
  state_machine :state, initial: :pending do
    event :accept do
      transition pending: :accepted
    end

    event :decline do
      transition pending: :declined
    end
  end

  private
  def max_memberships
    errors.add(:team, "A user can only belong to 5 teams") if user.teams.count >= 5
  end
end
