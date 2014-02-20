require 'spec_helper'

describe Dashboard do
  context 'recent_mits' do
    before(:each) do 
      @user = FactoryGirl.create(:user, :with_mits, :with_team)
      @dashboard = Dashboard.new(@user)
    end
    it 'returns mits from the past 2 days' do
      expect(@dashboard.recent_mits.count).to eql(10)
    end
    it "doesn't return mits that are older than 2 days" do
      mits = FactoryGirl.create_list(:mit, 5, user: @user, created_at: Time.now - 3.days)
      expect(@dashboard.recent_mits.count).to eql(10)
      expect(@dashboard.recent_mits.each_cons(@dashboard.recent_mits.length).include? mits).to be_false
    end
  end

  context 'teams' do
    before(:each) do
      @user = FactoryGirl.create(:user, :with_team)
      @dashboard = Dashboard.new(@user)
    end
    it 'returns the current users teams' do
      expect(@dashboard.teams.count).to eql(1)
      expect(@dashboard.teams.first).to eql(@user.teams.first)
    end
    it 'should not return teams that are pending acceptance' do
      @team = FactoryGirl.create(:team)
      @team.users << @user
      expect(@dashboard.teams.count).to eql(1)
      expect(@dashboard.teams.include?(@team)).to be_false
    end
  end
end
