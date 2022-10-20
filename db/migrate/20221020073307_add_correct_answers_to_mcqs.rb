class AddCorrectAnswersToMcqs < ActiveRecord::Migration[6.1]
  def change
    add_column :mcqs, :correct_answers,:string
  end
end
