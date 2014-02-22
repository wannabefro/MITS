require 'spec_helper'

describe Mit do
  it { should belong_to(:user) }
  it { should have_many(:comments) }
  
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:user_id) }

  context 'completing mit' do
    it 'should not allow you to complete an mit 2 days after it has been created' do
      mit = FactoryGirl.create(:mit, created_at: Time.now - 2.days)
      mit.complete = true;
      expect(mit).to_not be_valid
    end
    it 'should allow you to complente an mit within 2 days' do
      mit = FactoryGirl.create(:mit, created_at: Time.now - 1.day)
      mit.complete = true;
      expect(mit).to be_valid
    end
  end
end
