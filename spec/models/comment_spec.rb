require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:mit) }

  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:mit_id) }
  it { should validate_presence_of(:body) }
end
