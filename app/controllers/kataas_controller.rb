class KataasController < ApplicationController

    # GET /kataas/1
    def show
        kataa = find_kataa
        render json: kataa
    end

    # POST /kataas
    def create
        kataa = Kataa.create!(kataa_params)
        render json: kataa, status: :created
    end

    # PATCH/PUT /kataas/1
    def update
        kataa = find_kataa
        kataa.update(kataa_params)
        render json: kataa, status: :ok
    end

    # DELETE /kataas/1
    def destroy
        kataa = find_kataa
        kataa.destroy
        head :no_content
    end

    private

    def kataa_params
        params.permit(:assessment_id, :question, :instructions)
    end

    def find_kataa
        Kataa.find(params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
