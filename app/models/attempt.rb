class Attempt < ApplicationRecord
  belongs_to :assessment
  belongs_to :student
  belongs_to :tutor

  def order_by_total
    self.attempts.order(total: :desc)
  end

end
