class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :email, :username
end
