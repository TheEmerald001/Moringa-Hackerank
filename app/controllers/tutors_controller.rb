class TutorsController < ApplicationController

    # GET /tutors/1
    def show
        tutor = find_tutor
        render json: tutor
    end

    # POST /tutors
    def create
        tutor = Tutor.create!(tutor_params)
        render json: tutor, status: :created
    end

    private

    def tutor_params
        params.permit(:tutor_name, :work_id, :email, :password)
    end

    def find_tutor
        Tutor.find(params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
