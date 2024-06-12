class SloganSubmissionsController < ApplicationController
  def index
    @slogan_submissions = SloganSubmission.all
    render json: @slogan_submissions
  end

  def create
    @slogan_submission = SloganSubmission.new(slogan_submission_params)

    if @slogan_submission.save
      render json: @slogan_submission, status: :created
    else
      Rails.logger.error("SloganSubmission creation failed: #{@slogan_submission.errors.full_messages}")
      render json: @slogan_submission.errors, status: :unprocessable_entity
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