class Student < ApplicationRecord
    has_many :associations
    has_many :tutors, through: :associations
    has_many :invites
    belongs_to :tutors
    has_many :attempts
end
