json.id @user.id
json.username @user.username
json.image_url @user.image_url
json.followers @user.followees
json.follows @user.followers
json.followers_count @user.followees.length
json.follows_count @user.followers.length