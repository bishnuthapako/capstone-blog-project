class AddIsMemberOnlyToMembers < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :is_member_only, :boolean, null: false, default: false
  end
end
