class Mit < ActiveRecord::Base
  acts_as_taggable
  belongs_to :user
  has_many :comments
  validates :title, presence: true
  validates :user_id, presence: true
end
