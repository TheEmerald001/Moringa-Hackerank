class AttemptsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    #GET/attempts/id
    def show
        attempt = Attempt.find(params[:id])
        render json: attempt
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
        params.permit(:assessment_id, :tutor_id, :student_id, :mcq_score, :kata_response, 
            :kata_score, :prose_response, :prose_score, :tutor_feedback, :total)
    end

    def render_not_found_response
        render json: { error: "Attempt not found" }, status: :not_found
    end


end
