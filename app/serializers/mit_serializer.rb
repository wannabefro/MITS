class MitSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :body, :created_at, :user_id
  has_many :comments
end
