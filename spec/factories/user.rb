FactoryGirl.define do
  factory :user do
    sequence(:username) {|n| "user#{n}"}
    sequence(:email) {|n| "user#{n}@email.com"}
    password 'Password1'
    trait :with_mits do
      after(:create) do |user| 
        FactoryGirl.create_list(:mit, 5, user: user)
        FactoryGirl.create_list(:yesterday_mit, 5, user: user)
      end
    end
    trait :with_team do
      after(:create) do |user|
        team = FactoryGirl.create(:team)
        team.users << user
        membership = user.memberships.first
        membership.accept
      end
    end
  end
end
