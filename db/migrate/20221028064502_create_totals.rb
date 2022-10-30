class CreateTotals < ActiveRecord::Migration[6.1]
  def change
    create_table :totals do |t|
      t.integer :mcq_score
      t.integer :kataa_score
      t.integer :pro_score
      t.integer :total
      t.belongs_to :attempt, null: false, foreign_key: true
      t.belongs_to :assessment, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :tutor, null: false, foreign_key: true
      t.timestamps
    end
  end
end
