class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :kataa_response, :pro_response
  has_one :tutor
  has_one :student
  has_one :assessment
end
