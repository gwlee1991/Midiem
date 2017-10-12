class DropFollowers < ActiveRecord::Migration[5.0]
  def change
    drop_table :followers
  end
end
