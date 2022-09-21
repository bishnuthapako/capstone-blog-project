class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.references :author, null: false, foreign_key: true
      t.string :firstname
      t.string :lastname
      t.string :username
      t.string :email
      t.string :bio
      t.string :avatar_url

      t.timestamps
    end
  end
end
