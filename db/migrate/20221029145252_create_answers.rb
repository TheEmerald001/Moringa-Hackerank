class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.string :kataa_response
      t.string :pro_response
      t.belongs_to :tutor, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :assessment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
