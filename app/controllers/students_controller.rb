class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET/students
    def index
    students= Student.all
    render json: students
    end

    #GET/students/id
    def show
        student= Student.find(params[:id])
        render json: student
    end

    #POST/students
    def create
        student= Student.create!(student_params)
        render json: student
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    #DELETE /student/id
    def destroy
        student= Student.find(params[:id])
        student.destroy
        head :not_found
    end

    private

    def student_params
        params.permit(:name, :email, :username, :password_digest)
    end
    
    def render_not_found_response
        render json: { error: "Student not found" }, status: :not_found
    end
    
end
