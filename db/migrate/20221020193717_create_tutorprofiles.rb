class CreateTutorprofiles < ActiveRecord::Migration[6.1]
  def change
    create_table :tutorprofiles do |t|
      t.string :image
      t.string :phone
      t.belongs_to :tutor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
