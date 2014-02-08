class Team < ActiveRecord::Base
  has_many :memberships
  has_many :users, through: :memberships
  validates :name, presence: true

  def join(user)
    self.users += [user]
  end

  def make_admin(user)
    membership = Membership.where("user_id = ? AND team_id = ?", user.id, self.id).take
    membership.accept
    membership.admin = true
    membership.save!
  end
end
