class CreateMcqs < ActiveRecord::Migration[6.1]
  def change
    create_table :mcqs do |t|
      t.references :assessment, null: false, foreign_key: true
      t.string :question
      t.string :answers, array: true, default: []
      t.string :correct_answer
      t.string :student_answer
      t.timestamps
    end
  end
end
