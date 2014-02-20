FactoryGirl.define do
  factory :mit do
    user
    title 'Best title ever'
    body 'Best body ever'
    factory :yesterday_mit do
      created_at Time.now - 1.day
    end
  end
end
