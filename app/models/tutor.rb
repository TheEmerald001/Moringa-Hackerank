class Tutor < ApplicationRecord
    has_secure_password
    has_many :assessments, dependent: :destroy
    has_many :invites
    has_many :students, through: :invites
    has_many :attempts
    has_one :tutorprofile
    
    # VALID_WORK_ID_REGEX = \A[A-Z]{2}\/\d{4}\/\d{2}\z
    # validates :work_id, presence: true, format: { with: VALID_WORK_ID_REGEX } 
    validates :work_id, presence: true
    validates :password, presence: true, length: { minimum: 6 }
end
