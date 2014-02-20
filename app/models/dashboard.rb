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

  def past_week_progress
    
  end

  def past_month_progress

  end

  def overall_progress
  end
end
