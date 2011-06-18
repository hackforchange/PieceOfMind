require 'test_helper'

class PilesControllerTest < ActionController::TestCase
  setup do
    @pile = piles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:piles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pile" do
    assert_difference('Pile.count') do
      post :create, :pile => @pile.attributes
    end

    assert_redirected_to pile_path(assigns(:pile))
  end

  test "should show pile" do
    get :show, :id => @pile.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @pile.to_param
    assert_response :success
  end

  test "should update pile" do
    put :update, :id => @pile.to_param, :pile => @pile.attributes
    assert_redirected_to pile_path(assigns(:pile))
  end

  test "should destroy pile" do
    assert_difference('Pile.count', -1) do
      delete :destroy, :id => @pile.to_param
    end

    assert_redirected_to piles_path
  end
end
