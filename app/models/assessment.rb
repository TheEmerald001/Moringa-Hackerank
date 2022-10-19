class Assessment < ApplicationRecord
  belongs_to :tutor
  #for line below, consider an assessment to have many students, and to only belong to a student in the context of an invite
  belongs_to :student
  # for line below, consider an assessment to have many invites
  has_many :invites
  has_many :mcqs
  has_many :kataas
  has_many :pros
  # for line below, consider an assessment to have many attemps as submitted by the many students who attempted it
  has_many :attempts
end
