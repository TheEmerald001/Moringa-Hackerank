class Tutor < ApplicationRecord
    has_many :associations
    has_many :students, through: :associations
    has_many :students
    has_many :invites
    has_many :attempts
end
