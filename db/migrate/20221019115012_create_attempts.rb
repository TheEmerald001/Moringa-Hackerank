class CreateAttempts < ActiveRecord::Migration[6.1]
  def change
    create_table :attempts do |t|
      t.references :assessment, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.references :tutor, null: false, foreign_key: true
      t.string :kataResp
      t.string :prosResp
      t.integer :kataGrade
      t.integer :prosGrade
      t.integer :mcqGrade
      t.string :tutorFeed
      t.integer :total

      t.timestamps
    end
  end
end
