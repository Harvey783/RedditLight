class ChangeUserIdToBeStringInPosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :userId, :string
  end
end
