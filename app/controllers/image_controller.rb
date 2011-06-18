class ImageController < ApplicationController
  def show
    @image = Image.find(:last, :include => [:piles])
  end
end
