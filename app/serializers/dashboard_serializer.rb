class DashboardSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id
  has_many :teams, serializer: TeamSerializer
  has_many :mits, serializer: SimpleMitSerializer

  def mits
    object.recent_mits
  end

  def id
    rand(10000).floor
  end
end
