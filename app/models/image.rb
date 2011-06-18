class Image < ActiveRecord::Base
  include Magick
  
  has_many :piles
  attr_accessor :path
  
  after_create :build_piles
  
  def self.pixel_to_shape_id(color)
    hex = color[1..2]
    (hex.to_i(16).to_s(10).to_f * 0.039215686274509803).round
  end
  
  private 
  
  def build_piles
    img = ImageList.new(path).first
  
    self.width  = img.columns
    self.height = img.rows
    self.save
    
    self.width.times do |x|
      self.height.times do |y|
        k = self.class.pixel_to_shape_id(img.pixel_color(x,y).to_color(AllCompliance,false,QuantumDepth,true));
        self.piles.create({
          x:          x,
          y:          y,
          shape_kind: k
        })
        puts "#{x}x#{y} => #{k}"
      end
    end
  end
end
