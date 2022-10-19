class KatumSerializer < ActiveModel::Serializer
  attributes :id, :question, :instructions
  has_one :assessment
end
