class TutorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :work_id, :password_digest
end
