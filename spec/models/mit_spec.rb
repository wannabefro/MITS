require 'spec_helper'

describe Mit do
  it { should belong_to(:user) }
  it { should have_many(:comments) }
  
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:user_id) }
end
