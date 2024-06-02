require "test_helper"

class SloganSubmissionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get new_slogan_submission_url
    assert_response :success
    assert_template 'new'
    assert_select 'form[action=?]', slogan_submissions_path, count: 1
  end

  test "should create slogan_submission" do
    assert_difference('SloganSubmission.count') do
      post slogan_submissions_path, params: { slogan_submission: { first_name: "John", last_name: "Doe", email_address: "john@example.com", slogan_idea: "Test slogan" } }
    end

    assert_redirected_to slogan_submission_path(SloganSubmission.last)
  end

  test "should permit slogan_submission params" do
    params = { slogan_submission: { first_name: "John", last_name: "Doe", email_address: "john@example.com", slogan_idea: "Test slogan" } }
    assert_difference('SloganSubmission.count') do
      post slogan_submissions_path, params: params
    end
    assert_equal "John", SloganSubmission.last.first_name
    assert_equal "Doe", SloganSubmission.last.last_name
    assert_equal "john@example.com", SloganSubmission.last.email_address
    assert_equal "Test slogan", SloganSubmission.last.slogan_idea
  end
end
