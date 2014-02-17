class AddCompleteToMit < ActiveRecord::Migration
  def change
    add_column :mits, :complete, :boolean, default: false, null: false
  end
end
