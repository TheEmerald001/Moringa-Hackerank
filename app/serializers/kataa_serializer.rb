class KataaSerializer < ActiveModel::Serializer
  attributes :id, :question, :instructions,:answer
  has_one :assessment
end
