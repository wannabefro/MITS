FactoryGirl.define do
  factory :team do
    name 'Best team ever'
    factory :team_with_user do
      after(:create) {|team| team.users << FactoryGirl.create(:user)}
    end
  end
end
