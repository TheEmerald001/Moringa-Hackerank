class Assessment < ApplicationRecord
  belongs_to :tutor
  belongs_to :student
  has_many :invites
  has_many :mcqs
  has_many :kataas
  has_many :pros
end
