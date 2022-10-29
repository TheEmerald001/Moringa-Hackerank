class TotalsController < ApplicationController

    def index
        totals = Total.all
        render json: totals
    end

    def show
        total = Total.find(params[:id])
        render json: total, except: [:created_at, :updated_at], methods: [:total_score] 
    end

    private

    def total_params
        params.permit(:mcq_score, :kataa_score, :pro_score, :total_score)
    end
end
