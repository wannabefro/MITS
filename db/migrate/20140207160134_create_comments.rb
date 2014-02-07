class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false
      t.belongs_to :mit, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
