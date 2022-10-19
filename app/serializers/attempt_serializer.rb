class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :kata_response, :prose_response, :kata_score, :prose_score, :mcq_score, :tutor_feedback, :total
  has_one :assessment
  has_one :student
  has_one :tutor
end
