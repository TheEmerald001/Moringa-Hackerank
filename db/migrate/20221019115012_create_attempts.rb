class CreateAttempts < ActiveRecord::Migration[6.1]
  def change
    create_table :attempts do |t|
      t.references :assessment, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.references :tutor, null: false, foreign_key: true
      t.integer :mcq_score
      t.string :kataa_response
      t.integer :kataa_score
      t.string :pro_response      
      t.integer :pro_score      
      t.string :tutor_feedback
      t.integer :total

      t.timestamps
    end
  end
end