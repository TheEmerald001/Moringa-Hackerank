class InvitesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET/invites/id
    def show
        invite= Invite.find(params[:id])
        render json: invite
    end

    #POST/invites
    def create
        invite= Invite.create!(invite_params)
        render json: invite
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

     #PATCH/invites/id
     def update
        invite = Invite.find(params[:id])
        invite.update!(invite_params)
        render json: invite
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    #DELETE /invites/id
    def destroy
        invite= Invite.find(params[:id])
        invite.destroy
        head :not_found
    end

    private

    def invite_params
        params.permit(:tutor_id, :student_id, :assessment_id, :status)
    end
    
    def render_not_found_response
        render json: { error: "Invite not found" }, status: :not_found
    end

end
