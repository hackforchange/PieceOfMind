class ImageController < ApplicationController
  def show
    @image = Image.find(:last)
  end
  
  def piles
    @piles = Image.piles_array

    respond_to do |format|
      format.json  { render :json => @piles }
    end
  end
end
