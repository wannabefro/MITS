class MitSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :body, :created_at, :user_id, :complete
  has_many :tags, serializer: ActsAsTaggableOn::TagSerializer
  has_many :comments
end
