class Assessment < ApplicationRecord
  belongs_to :tutor
  has_many :invites, dependent: :destroy
  has_many :mcqs, dependent: :destroy
  has_many :kataas, dependent: :destroy
  has_many :pros, dependent: :destroy
  has_many :attempts, dependent: :destroy
end
