class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :assessment_title
  has_one :tutor
  has_one :student
end
