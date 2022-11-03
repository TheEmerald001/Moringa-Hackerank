class TutorprofileSerializer < ActiveModel::Serializer
  attributes :id, :image, :phone
  has_one :tutor
end
