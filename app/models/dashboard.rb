class Dashboard
  attr_accessor :user
  def initialize(user)
    @user = user
  end

  def teams
    @user.teams.references(:memberships).where(memberships: {state: 'accepted'})
  end

  def recent_mits
    @user.mits.where('created_at > ?', Time.now - 2.days)
  end

  def mit_days
    @user.mits.find_by_sql("select count(*), DATE(created_at), complete from mits group by DATE(created_at), complete ORDER by DATE(created_at), complete;")
  end
end
