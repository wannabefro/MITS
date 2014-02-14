class UserMitSerializer < ActiveModel::Serializer
  self.root :user
  embed :ids, include: true
  attributes :id, :username
  has_many :mits
end
