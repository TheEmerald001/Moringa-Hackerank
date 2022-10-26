class Tutor < ApplicationRecord
    has_secure_password
    has_many :assessments, dependent: :destroy
    has_many :invites
    has_many :students, through: :invites
    has_many :attempts
    has_one :tutorprofile
    
    validates :work_id, presence: true, format: { with: /\A[A-Z]{2}\/\d{4}\/\d{3}\z/, message: "please use the correct work_id format"}
    validates :work_id, presence: true
    validates :password, presence: true, length: { minimum: 6 }
end
