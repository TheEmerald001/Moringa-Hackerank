class Attempt < ApplicationRecord
  belongs_to :assessment
  belongs_to :student
  belongs_to :tutor

 
end
