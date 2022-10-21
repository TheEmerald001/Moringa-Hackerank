class Student < ApplicationRecord
    has_secure_password
    has_many :invites
    has_many :tutors, through: :invites
    has_many :assessments,through: :invites
    has_many :attempts
    has_one :studentprofile
end
