class TutorsController < ApplicationController

     #GET/tutors
     def index
        tutors= Tutor.all
        render json: tutors
        end

    #Get /me 
    def show
        tutor = Tutor.find(params[:id])
        if tutor
        render json: tutor, status: :ok
    else
        render json: { error: "Not authorized" }, status: :unauthorized
    end
end

     #POST/signup
     def create
        tutor = Tutor.create!(tutor_params)
        if tutor.valid?
            session[:tutor_id] = tutor.id
            render json: tutor, status: :created
          else
            render json: { errors: tutor.errors.full_messages }, status: :unprocessable_entity
          end
    end

    private

    def tutor_params
        params.permit(:tutor_name, :work_id, :email, :password_digest)
    end

end
