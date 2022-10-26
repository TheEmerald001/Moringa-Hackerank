class CreateTutors < ActiveRecord::Migration[6.1]
  def change
    create_table :tutors do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :work_id
      t.string :password_digest

      t.timestamps
    end
  end
end
