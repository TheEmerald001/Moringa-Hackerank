class McqsController < ApplicationController

    # GET /mcqs/1
    def show
        mcq = find_mcq
        render json: mcq
    end

    # POST /mcqs
    def create
        mcq = Mcq.create!(mcq_params)
        render json: mcq, status: :created
    end

    # PATCH/PUT /mcqs/1
    def update
        mcq = find_mcq
        mcq.update(mcq_params)
        render json: mcq, status: :ok
    end

    # DELETE /mcqs/1
    def destroy
        mcq = find_mcq
        mcq.destroy
        head :no_content
    end

    private

    def mcq_params
        params.permit(:assessment_id, :question, {:answers => []}, :correct_answers)
    end 

    def find_mcq
        Mcq.where(assessment_id: params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
