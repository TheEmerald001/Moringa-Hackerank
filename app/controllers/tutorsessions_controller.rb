class TutorsessionsController < ApplicationController

    #POST /login
    def create
        tutor = Tutor.find_by(username: params[:username])
        if tutor&.authenticate(params[:password])
            session[:tutor_id] = tutor.id
            render json: tutor, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
    
    #DELETE /logout
        def destroy
            session.delete :tutor_id
            head :no_content
        end
end
