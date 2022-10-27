class Attempt < ApplicationRecord
  belongs_to :assessment
  belongs_to :student
  belongs_to :tutor

  #mcqs_score
  def mcqs_score
    mcqs = assessment.mcqs
    mcq_score = 0
    mcqs.each do |mcq|
      if mcq.answer == mcq.correct_answer
        mcq_score += 1
      end
    end
    mcq_score
  end
  #pros_score
  def pros_score
    pros = assessment.pros
    pros.each do |pro|
      if pro.pro_score == pro_score
      return pro_score
      end
      pro_score
      end
  end
  #kataas_score
  def kataas_score
    kataas = assessment.kataas
    kataas.each do |kataa|
      if kataa.kataa_score == kataa_score
      return kataa_score
      end
      kataa_score
      end
  end
  #total scores
  def total_score
    total = mcq_score + kataa_score + pro_score
  end
end
