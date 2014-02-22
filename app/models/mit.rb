class Mit < ActiveRecord::Base
  acts_as_taggable
  belongs_to :user
  has_many :comments
  validates :title, presence: true
  validates :user_id, presence: true
  validate :can_complete, on: :update

  def can_complete
    if self.created_at + 2.days < Time.now
      errors.add(:complete, 'You can only complete an Mit within 2 days of starting it')
    end
  end
end
