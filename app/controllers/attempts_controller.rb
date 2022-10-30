class AttemptsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def order
        attemptlist = Attempt.where(assessment_id: params[:assessment_id])
        render json: { 
            allAttempts: attemptlist.map do |attempt|
                {
                    student_name: attempt.student.name,
                    total: attempt.total
                }
            end
        }
    end

    #GET/attempts
    def index
        attempts = Attempt.all
        render json: attempts 
    end

    #GET/attempts/id
    def show
        attempt = Attempt.find(params[:id])
        render json: attempt, methods: [:mcqs_score]
    end

    #POST/attempts
    def create
        attempt = Attempt.create!(attempt_params)
        render json: attempt
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    #PATCH/attempts/id
    def update
        attempt = Attempt.find(params[:id])
        attempt.update!(attempt_params)
        render json: attempt
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private 

    def attempt_params
        params.permit(:assessment_id, :tutor_id, :student_id, :mcq_score, 
            :kataa_score, :pro_score, :tutor_feedback)
    end

    def render_not_found_response
        render json: { error: "Attempt not found" }, status: :not_found
    end


end
