class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :fullname
      t.string :password_digest
      t.string :email
      t.string :bio
      t.string :avatar_url

      t.timestamps
    end
  end
end
