class AssessmentsController < ApplicationController

    # GET /assessments/1
    def show
        render json: assessment
    end

    # POST /assessments
    def create
        assessment = Assessment.create!(assessment_params)
        render json: assessment, status: :created
    end

    # PATCH/PUT /assessments/1
    def update
        assessment = find_assessment
        assessment.update(assessment_params)
        render json: assessment, status: :ok
    end

    # DELETE /assessments/1
    def destroy
        assessment = find_assessment
        assessment.destroy
        head :no_content
    end

    private

    def assessment_params
        params.permit(:tutor_id, :assessment_title)
    end

    def find_assessment
        Assessment.find(params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
