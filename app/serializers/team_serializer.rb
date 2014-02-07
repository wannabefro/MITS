class TeamSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name
  has_many :users
  has_many :memberships
end
