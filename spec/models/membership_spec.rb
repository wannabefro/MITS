require 'spec_helper'

describe Membership do
  it { should validate_presence_of(:user_id)}
  it { should validate_presence_of(:team_id)}

  it { should belong_to(:user) }
  it { should belong_to(:team) }

  context 'max_memberships' do
    it 'a user should only be able to have a max of 5 memberships' do
      user = FactoryGirl.create(:user)
      teams = FactoryGirl.create_list(:team, 5)
      teams.each{|team| team.users << user}
      team = FactoryGirl.create(:team)
      expect{team.users << user}.to raise_error
    end
  end
  
  context 'states' do
    before(:each){@membership = FactoryGirl.create(:membership)}
    it 'should have an initial state of pending' do
      expect(@membership.state).to eql('pending')
    end
    it 'should have a state accepted after accept' do
      @membership.accept
      expect(@membership.state).to eql('accepted')
    end
    it 'should have a state declined after decline' do
      @membership.decline
      expect(@membership.state).to eql('declined')
    end
  end
end
