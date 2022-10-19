class CreatePros < ActiveRecord::Migration[6.1]
  def change
    create_table :pros do |t|
      t.references :assessment, null: false, foreign_key: true
      t.string :question
      t.string :instructions

      t.timestamps
    end
  end
end
