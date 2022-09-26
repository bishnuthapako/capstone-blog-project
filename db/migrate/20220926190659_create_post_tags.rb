class CreatePostTags < ActiveRecord::Migration[6.1]
  def change
    create_table :post_tags do |t|
      t.references :Tag, null: false, foreign_key: true
      t.references :Post, null: false, foreign_key: true

      t.timestamps
    end
  end
end