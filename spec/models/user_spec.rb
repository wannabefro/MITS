require 'spec_helper'

describe User do
  it { should have_many(:mits) }
  it { should have_many(:comments) }
  it { should have_many(:memberships) }
  it { should have_many(:teams).through(:memberships) }
  
  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }

  context 'authentication token' do
    it 'should create an auth token on creation' do
      user = FactoryGirl.create(:user)
      expect(user.authentication_token).to_not be_nil
    end
  end

  context 'find_by_username_or_email' do
    it 'should return a user if the user exists' do
      user = FactoryGirl.create(:user)
      expect(User.find_by_username_or_email(user.username)).to eql(user)
      expect(User.find_by_username_or_email(user.email)).to eql(user)
    end

    it 'should return nil if no user is found' do
      expect(User.find_by_username_or_email('user')).to be_nil
    end
  end
end
