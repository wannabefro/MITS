class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :body, :created_at
  has_one :user
  has_one :mit
end
