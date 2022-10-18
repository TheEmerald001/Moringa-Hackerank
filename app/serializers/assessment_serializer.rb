class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :tm
  has_one :student
end
