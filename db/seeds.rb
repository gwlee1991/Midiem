# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Topic.destroy_all

guest = User.create(username: "guest", password: "password")
user = User.create(username: "user", password: "password")

topic1 = Topic.create(title: "e-sports")
topic2 = Topic.create(title: "tech")
topic3 = Topic.create(title: "travel")