class ProsController < ApplicationController

    # GET /pros/1
    def show
        pro = find_pro
        render json: pro
    end

    # POST /pros
    def create
        pro = Pro.create!(pro_params)
        render json: pro, status: :created
    end

    # PATCH/PUT /pros/1
    def update
        pro = find_pro
        pro.update(pro_params)
        render json: pro, status: :ok
    end

    # DELETE /pros/1
    def destroy
        pro = find_pro
        pro.destroy
        head :no_content
    end

    private

    def pro_params
        params.permit(:assessment_id, :question, :instructions)
    end
    
    def find_pro
        Pro.where(assessment_id: params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
