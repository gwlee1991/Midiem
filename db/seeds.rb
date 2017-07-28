# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Topic.destroy_all
Post.destroy_all
Comment.destroy_all

guest = User.create(username: "guest", password: "password", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_32/v1501014959/default-user-image_gvyan3.png")

topic1 = Topic.create(title: "Most popular")
topic2 = Topic.create(title: "Technology")
topic3 = Topic.create(title: "Travel")
topic4 = Topic.create(title: "Parenting")
topic1 = Topic.create(title: "E-Sports")
