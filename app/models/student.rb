class Student < ApplicationRecord
    # has_many :associations Did you mean assessments?
    has_many :assessments
    # has_many :tutors, through: :assessments little correction, we have a tutor from an invite, thus modest to find my tutor on the invites table
    has_many :invites
    has_many :tutors, through: :invites
    # belongs_to :tutors we already esatblished that they have many tutors via invites
    has_many :attempts
end
