class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :kataa_response, :pro_response, 
  :kataa_score, :pro_score, :mcq_score, :tutor_feedback
  has_one :assessment
  has_one :student
  has_one :tutor
  has_one :total
end
