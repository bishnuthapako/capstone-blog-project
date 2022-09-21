class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.references :post, null: false, foreign_key: true
      t.string :tagname

      t.timestamps
    end
  end
end