class EditColumnInPostsTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :posts, :author, :author_id
  end
end
