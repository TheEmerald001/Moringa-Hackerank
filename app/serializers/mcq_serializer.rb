class McqSerializer < ActiveModel::Serializer
  attributes :id, :question, :answers, :correct_answer
  has_one :assessment
end
