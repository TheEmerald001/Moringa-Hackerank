class CreateTms < ActiveRecord::Migration[6.1]
  def change
    create_table :tms do |t|
      t.string :name
      t.string :password
      t.string :email
      t.string :username

      t.timestamps
    end
  end
end
