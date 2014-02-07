class AddRoleToMembership < ActiveRecord::Migration
  def change
    add_column :memberships, :admin, :boolean, default: false
    add_index :memberships, :admin, where: "admin = true"
  end
end
