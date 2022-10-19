class Tutor < ApplicationRecord
    has_many :associations
    has_many :students, through: :associations
    has_many :students
end
