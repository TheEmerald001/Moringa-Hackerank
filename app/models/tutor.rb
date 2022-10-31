class Tutor < ApplicationRecord
    has_secure_password
    has_many :assessments, dependent: :destroy
    has_many :invites
    has_many :students, through: :invites
    has_many :attempts
    has_one :tutorprofile
    has_many :answers
    
    validates :work_id, presence: true, format: { with: /\A[A-Z]{2}\/\d{4}\/\d{3}\z/, message: "please use the correct work_id format"}
    validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, message: "please use the correct email format"}
    validates :password, presence: true, length: { minimum: 6 }, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+\z/, message: "must contain at least one uppercase letter, one lowercase letter, one number, and one special character" }
end
