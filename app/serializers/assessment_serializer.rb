class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :tutor_id, :assessment_title
  has_one :tutor
  # has_many :students
end
