class InviteSerializer < ActiveModel::Serializer
  attributes :id, :is_accepted
  has_one :tutor
  has_one :student
  has_one :assessment
end
