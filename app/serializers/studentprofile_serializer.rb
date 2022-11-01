class StudentprofileSerializer < ActiveModel::Serializer
  attributes :id, :image, :phone
  has_one :student
end
