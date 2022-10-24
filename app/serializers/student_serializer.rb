class StudentSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :username
  has_many :assessments
  has_many :attempts
end
