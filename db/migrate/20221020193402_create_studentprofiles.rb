class CreateStudentprofiles < ActiveRecord::Migration[6.1]
  def change
    create_table :studentprofiles do |t|
      t.string :image
      t.string :phone
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
