class CreateInvites < ActiveRecord::Migration[6.1]
  def change
    create_table :invites do |t|
      t.references :tutor, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.references :assessment, null: false, foreign_key: true
      t.string :is_accepted

      t.timestamps
    end
  end
end
