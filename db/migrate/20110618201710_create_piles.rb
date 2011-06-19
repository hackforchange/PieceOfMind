class CreatePiles < ActiveRecord::Migration
  def self.up
    create_table :piles do |t|
      t.integer :image_id
      t.integer :shape_kind
      t.string  :serial,      :unique => true, :limit => 10
      t.integer :x
      t.integer :y

      t.timestamps
    end
    
    add_index :piles, :image_id
    add_index :piles, :serial
  end

  def self.down
    drop_table :piles
  end
end
