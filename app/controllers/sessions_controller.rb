class SessionsController < ApplicationController
            #POST /login
            def create
                student = Student.find_by(username: params[:username])
                if student&.authenticate(params[:password])
                    session[:student_id] = student.id
                    render json: student, status: :created
                else
                    render json: { error: "Invalid username or password" }, status: :unauthorized
                end
            end
            
            #DELETE /logout
                def destroy
                    session.delete :student_id
                    head :no_content
                end
end
