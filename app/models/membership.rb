class Membership < ActiveRecord::Base
  belongs_to :user
  belongs_to :team
  validates :admin, presence: true
  validate :max_memberships

  private

  def max_memberships
    errors.add(:team, "A user can only belong to 5 teams") if user.teams.count >= 5
  end
end
