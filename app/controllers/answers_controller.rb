class AnswersController < ApplicationController
     #GET /students
     def index
        answers= Answer.all
        render json: answers
        end
    
        #GET /me 
        def show
            answer = Answer.find_by(id: params[:id])
            if answer
                render json: answer
            else
                render json: { error: "Answer not found" }, status: :not_found
            end
        end
    
        private
    
        def answer_params
            params.permit(:kataa_response,:pro_response)
        end
        
end
