class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :username
  has_many :memberships
end
