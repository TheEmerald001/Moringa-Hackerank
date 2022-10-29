class Answer < ApplicationRecord
  belongs_to :tutor
  belongs_to :student
  belongs_to :assessment
end
