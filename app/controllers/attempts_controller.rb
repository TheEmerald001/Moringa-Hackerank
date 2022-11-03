class AttemptsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :update]
  
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
        query_assessment = params[:assessment_id]
        

    attempts = if query_assessment
        Attempt.where(assessment_id: query_assessment)
        else
           Attempt.all
        end

        render json: attempts 
    end

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

     #DELETE /attempts/id
     def destroy
        attempt= Attempt.find(params[:id])
        attempt.destroy
        head :not_found
    end

    private 

    def attempt_params
        params.permit(:assessment_id, :tutor_id, :student_id, :mcq_score, :kataa_response, 
            :kataa_score, :pro_response, :pro_score, :tutor_feedback, :total)
    end

    def render_not_found_response
        render json: { error: "Attempt not found" }, status: :not_found
    end


end
