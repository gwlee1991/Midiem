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
topic2 = Topic.create(title: "Technology")
topic3 = Topic.create(title: "Travel")
topic4 = Topic.create(title: "Parenting")

post1 = Post.create(title: "Faker wins again", body: "Faker wins like always", author_id: guest.id, topic_id: topic1.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500508529/faker_haj29z.jpg")
post2 = Post.create(title: "SKT wins again", body: "SKT wins again like always", author_id: guest.id, topic_id: topic1.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500578757/SKT1_vjei8b.png")
post3 = Post.create(title: "Iphone 7 is mediocre", body: "I don't feel like Iphone 7 is good as 6", author_id: user.id, topic_id: topic2.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500582530/phone_nmzslm.jpg")
post4 = Post.create(title: "Is mac better than pc?", body: "Is mac better than pc as a programmer view?", author_id: user.id, topic_id: topic2.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_1681/v1500582536/laptop_czoar6.jpg")
post5 = Post.create(title: "Traveling is fun", body: "beautiful pictures pictures", author_id: user.id, topic_id: topic3.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676315/travel1_g4mzwc.jpg")
post6 = Post.create(title: "Traveling is awesome", body: "you get to see beautiful places", author_id: user.id, topic_id: topic3.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676334/travel2_ktq8x4.jpg")
post7 = Post.create(title: "Parenting is scary", body: "It's best when the baby is still in the womb", author_id: guest.id, topic_id: topic4.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676294/parenting1_gfpmjn.jpg")
post8 = Post.create(title: "Parenting is awesome", body: "Kids are so fun", author_id: guest.id, topic_id: topic4.id, image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676307/parenting2_eyv4we.jpg")

comment1 = Comment.create(body: "hello", post_id: post1.id, user_id: guest.id);
comment2 = Comment.create(body: "hello", post_id: post2.id, user_id: guest.id);
comment2 = Comment.create(body: "bye", post_id: post1.id, user_id: guest.id);