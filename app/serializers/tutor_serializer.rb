class TutorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :work_id, :password
end
