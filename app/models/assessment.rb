class Assessment < ApplicationRecord
  belongs_to :tutor
  has_many :invites
  has_many :mcqs
  has_many :kataas
  has_many :pros
  has_many :attempts
  has_many :totals
  has_many :answers
end
