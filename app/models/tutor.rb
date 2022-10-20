class Tutor < ApplicationRecord
    has_secure_password
    has_many :assessments, dependent: :destroy
    has_many :invites
    has_many :students, through: :invites
    has_many :attempts
    has_one :tutorprofile
end
