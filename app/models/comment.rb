class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :mit
  validates :user_id, presence: true
  validates :mit_id, presence: true
  validates :body, presence: true
end
