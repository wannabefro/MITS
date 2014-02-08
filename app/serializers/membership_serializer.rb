class MembershipSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :state, :admin
  has_one :user
  has_one :team
end
