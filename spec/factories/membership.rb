FactoryGirl.define do
  factory :membership do
    user
    team
    admin false
  end
end
