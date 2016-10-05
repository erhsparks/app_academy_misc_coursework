# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "Alice")
User.create(username: "Bob")
User.create(username: "doge")

Contact.create(name: "Vivian", email: "v@v.v", user_id: 1)
Contact.create(name: "Mrs Fancypants", email: "idontunderstand@aol.com", user_id: 1)
Contact.create(name: "Sauron", email: "GRRR@yahoo.com", user_id: 2)
Contact.create(name: "Grumpy Cat", email: "no@no.no", user_id: 3)

ContactShare.create(user_id: 2, contact_id: 2)
ContactShare.create(user_id: 1, contact_id: 4)
