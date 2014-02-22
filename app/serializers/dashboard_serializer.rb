class DashboardSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :mit_stats
  has_many :teams, serializer: TeamSerializer
  has_many :mits, serializer: SimpleMitSerializer

  def mit_stats
    object.mit_days.map{|mit| mit.to_json}
  end

  def mits
    object.recent_mits
  end

  def id
    rand(10000).floor
  end
end
