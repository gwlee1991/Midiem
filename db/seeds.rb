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

guest = User.create(username: "guest", password: "password")
user = User.create(username: "user", password: "password")


topic1 = Topic.create(title: "E-Sports")
topic2 = Topic.create(title: "Tech")
topic3 = Topic.create(title: "Travel")
topic4 = Topic.create(title: "Parenting")

post1 = Post.create(title: "Faker wins again", body: "Faker wins like always", author_id: guest.id, topic_id: topic1.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500508529/faker_haj29z.jpg")