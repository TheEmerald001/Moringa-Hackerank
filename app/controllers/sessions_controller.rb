class SessionsController < ApplicationController
    #POST /login
    def create
        user = Student.find_by(username: params[:username]) || user = Tutor.find_by(work_id: params[:work_id])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
    
    #DELETE /logout
        def destroy
            session.delete :user_id
            render json: { message: "you've successfully logged out" }
            # head :no_content
        end
end
