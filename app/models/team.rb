class Team < ActiveRecord::Base
  has_many :memberships, dependent: :destroy
  has_many :users, through: :memberships
  validates :name, presence: true

  def make_admin(user)
    membership = Membership.where("user_id = ? AND team_id = ?", user.id, self.id).take
    membership.accept
    membership.admin = true
    membership.save!
  end

  def admins
    users.references(:memberships).where(memberships: {admin: true})
  end
end
