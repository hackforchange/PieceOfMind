class Image < ActiveRecord::Base
  include Magick
  
  has_many :piles
  attr_accessor :path
  
  after_create :build_piles
  
  def self.pixel_to_shape_id(color)
    hex = color[1..2]
    (hex.to_i(16).to_s(10).to_f * 0.039215686274509803).round
  end
  
  def piles_as_string
    sql = "SELECT array_to_string(array(SELECT (CAST(x as text) || ',' || CAST(y as text) || ',' || shape_kind) FROM piles WHERE image_id=#{id}), ',') AS piles"
    ActiveRecord::Base.connection.execute(sql).first['piles']
  end
  
  private 
  
  def build_piles
    img = ImageList.new(path).first
  
    self.width  = img.columns
    self.height = img.rows
    self.save
    
    # http://www.coffeepowered.net/2009/01/23/mass-inserting-data-in-rails-without-killing-your-performance/
    inserts = []
    self.width.times do |x|
      self.height.times do |y|
        k = self.class.pixel_to_shape_id(img.pixel_color(x,y).to_color(AllCompliance,false,QuantumDepth,true));
        inserts.push "(#{self.id}, '#{k}', #{x}, #{y})"
      end
    end
    sql = "INSERT INTO piles (image_id, shape_kind, x, y) VALUES #{inserts.join(", ")}"
    ActiveRecord::Base.connection.execute sql
  end
end
