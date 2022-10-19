class Tutor < ApplicationRecord
    # has_many : Did you mean assessments?
    has_many :assessments, dependent: :destroy
    # has_many :students, through: :associations Again, modest to search my invited students and index them on an assesment I gave, by looking through the invites table
    
    has_many :invites
    has_many :students, through: :invites
    has_many :attempts
end
