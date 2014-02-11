class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :username
  has_many :memberships
end
