class McqSerializer < ActiveModel::Serializer
  attributes :id, :question, :answers
  has_one :assessment
end
