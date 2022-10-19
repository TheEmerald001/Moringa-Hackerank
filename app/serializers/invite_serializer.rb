class InviteSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :tutor
  has_one :student
  has_one :assessment
end
