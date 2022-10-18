class Tm < ApplicationRecord
    has_many :assessments
    has_many :students,through: :assessments
end
