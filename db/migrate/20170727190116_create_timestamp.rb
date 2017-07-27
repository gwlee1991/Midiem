class CreateTimestamp < ActiveRecord::Migration[5.0]
  def change
    add_timestamps(:comments, null: false)
  end
end
