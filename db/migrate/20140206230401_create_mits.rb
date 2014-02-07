class CreateMits < ActiveRecord::Migration
  def change
    create_table :mits do |t|
      t.string :title, null: false
      t.text :body
      t.belongs_to :user

      t.timestamps
    end
    add_index :mits, :user_id
  end
end
