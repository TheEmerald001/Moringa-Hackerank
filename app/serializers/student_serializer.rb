class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username
  has_many :assessments
  has_many :attempts
end
