class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :team, null: false
      t.string :state, default: 'pending'

      t.timestamps
    end
    add_index :memberships, :user_id
    add_index :memberships, :team_id
  end
end
