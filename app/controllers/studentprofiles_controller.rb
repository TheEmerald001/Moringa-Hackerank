class StudentprofilesController < ApplicationController

    def create
        profile = Studentprofile.create(profile_params)
        if profile.valid?
            render json: profile, status: :created
        else
            render json: {error: "Failed to create user profile."}, status: :not_created
        end
    end

    def index
        profiles = Studentprofile.all
        render json: profiles, status: :ok 
    end

    def show
        profile = Studentprofile.find(params[:id])
        if profile
          render json: profiles, status: :ok 
        else
            render json: {error: "Failed to find profile."}, status: :not_found
        end
    end

    private
    def profile_params
        params.permit(:image, :phone)
    end

end
