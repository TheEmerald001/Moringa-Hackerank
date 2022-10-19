class McqSerializer < ActiveModel::Serializer
  attributes :id, :question, :is_right, :response
  has_one :assessment
end
