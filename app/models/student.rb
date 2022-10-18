class Student < ApplicationRecord
    has_many :assessments
    has_many :tms ,through: :assessments
end
