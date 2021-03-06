# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110619042403) do

  create_table "images", :force => true do |t|
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "piles", :force => true do |t|
    t.integer  "image_id"
    t.integer  "shape_kind"
    t.string   "serial",     :limit => 10
    t.integer  "x"
    t.integer  "y"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "published",                :default => false, :null => false
  end

  add_index "piles", ["image_id"], :name => "index_piles_on_image_id"
  add_index "piles", ["published"], :name => "index_piles_on_published"
  add_index "piles", ["serial"], :name => "index_piles_on_serial"

  create_table "stories", :force => true do |t|
    t.text     "text"
    t.integer  "user_id"
    t.integer  "pile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "stories", ["pile_id"], :name => "index_stories_on_pile_id"
  add_index "stories", ["user_id"], :name => "index_stories_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "city"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
