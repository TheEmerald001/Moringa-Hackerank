class InviteSerializer < ActiveModel::Serializer

  attributes :id, :status, :message
  has_one :tutor
  has_one :student
  has_one :assessment


  def message 
     { message: 'You have accepted the invitation, Click attempt when ready to attempt' }
  end 

end
