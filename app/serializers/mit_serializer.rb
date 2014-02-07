class MitSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :title, :body, :created_at
  has_one :user
end
