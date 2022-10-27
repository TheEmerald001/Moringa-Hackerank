class Student < ApplicationRecord
    has_secure_password
    has_many :invites
    has_many :tutors, through: :invites
    has_many :assessments,through: :invites
    has_many :attempts
    has_one :studentprofile

    validates :username, presence:true, uniqueness: true
    # validates :password, presence:true, length:{minimum: 6}
    # validates :password, presence: true, length: { minimum: 6 }, format: { with: /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+\z/, message: "must contain at least one uppercase letter, one lowercase letter, one number, and one special character" }
    validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i, message: "please use the correct email format"}
end
