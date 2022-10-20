class McqSerializer < ActiveModel::Serializer
  attributes :id, :question
  has_one :assessment
end
