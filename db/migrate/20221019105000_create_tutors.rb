class CreateTutors < ActiveRecord::Migration[6.1]
  def change
    create_table :tutors do |t|
      t.string :name
      t.string :email
      t.integer :work_id
      t.string :password

      t.timestamps
    end
  end
end
