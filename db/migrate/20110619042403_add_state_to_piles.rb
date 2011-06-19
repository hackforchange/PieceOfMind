class AddStateToPiles < ActiveRecord::Migration
  def self.up
    add_column :piles, :published, :boolean, :null => false, :default => false
    add_index :piles,  :published
  end

  def self.down
    remove_column :piles, :published
  end
end
