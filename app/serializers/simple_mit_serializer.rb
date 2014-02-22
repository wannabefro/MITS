class SimpleMitSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :user_id
end
