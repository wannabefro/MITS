require 'spec_helper'

describe Team do
  it { should have_many(:memberships).dependent(:destroy) }
  it { should have_many(:users).through(:memberships) }
  it { should validate_presence_of(:name) }

  context 'admins' do
    before(:each){@team = FactoryGirl.create(:team)}
    it 'make_admin' do
      user = FactoryGirl.create(:user)
      @team.users << user
      user_membership = Membership.where('user_id = ? AND team_id = ?', user, @team).take
      user_membership.accept

      expect(user_membership.admin).to eql(false)

      @team.make_admin(user)
      user_membership.reload
      expect(user_membership.admin).to eql(true)
    end

    it 'should return admins' do
      users = FactoryGirl.create_list(:user, 2)
      expect(@team.admins.count).to eql(0)

      @team.users += users
      @team.make_admin(users.first)

      expect(@team.admins.count).to eql(1)
      expect(@team.admins.first).to eql(users.first)
    end
  end
end
