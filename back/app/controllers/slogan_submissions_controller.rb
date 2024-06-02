class SloganSubmissionsController < ApplicationController
  def index
    @slogan_submissions = SloganSubmission.all
  end

  def new
    @slogan_submission = SloganSubmission.new
  end

  def create
    @slogan_submission = SloganSubmission.new(slogan_submission_params)

    if @slogan_submission.save
      redirect_to @slogan_submission
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def slogan_submission_params
    params.require(:slogan_submission).permit(
      :first_name,
      :last_name,
      :email_address,
      :slogan_idea)
  end
end