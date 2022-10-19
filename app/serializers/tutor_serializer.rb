class TutorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :workid, :password
end
