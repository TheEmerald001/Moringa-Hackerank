class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :kataResp, :prosResp, :kataGrade, :prosGrade, :mcqGrade, :tutorFeed, :total
  has_one :assessment
  has_one :student
  has_one :tutor
end
