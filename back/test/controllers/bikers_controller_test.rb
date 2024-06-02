require "test_helper"
require "factory_bot"

class BikersControllerTest < ActionDispatch::IntegrationTest
  include FactoryBot::Syntax::Methods

  test "should get index" do
    # Create a biker using the factory
    biker = create(:biker)

    # Make a request to the index action
    get bikers_url

    # Assert that the response is successful
    assert_response :success
  end
end

