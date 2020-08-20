class EmailsController < ApplicationController
    def create
    @email=Email.new(email_params)
    if @email.save
        flash[:notice] = "your email has been sent"
        redirect_to projects_path
    else
        flash[:notice] = "something went wrong"
        render projects_path
    end
    end

    private
    def email_params
        params.require(:email).permit(:name,:email,:message)
    end
end