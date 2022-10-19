class McqSerializer < ActiveModel::Serializer
  attributes :id, :question, :response
  has_one :assessment
end
