
puts "📃 Seeding data..."

u1 = User.create(
	fullname: "Bishnu Thapa",
    username: "bishnuthapa",
    password: "admin",
    password_confirmation: "admin",
    email: "bishnuthapako@gmail.com",
    bio: "Simply the best",
    avatar_url: "https://robohash.org/voluptasquisnihil.png?size=300x300&set=set1"
)
u2 = User.create(
	fullname: "James Song",
    username: "james",
    password: "admin1",
    password_confirmation: "admin1",
    email: "james@gmail.com",
    bio: "I believe in making the impossible possible because there's no fun",
    avatar_url: "https://robohash.org/voluptasquisnihil.png?size=300x300&set=set1"
)
p1 = Post.create(
    user_id: u1.id,
    title: "How To Write Optimized Articles With Minimum Efforts",
    content: "Welcome guys, I am going to show you how to write SEO optimized articles on google docs using SEO Writing Assistant which helps to write SEO friendly contents even on digital marketing. Google will love and chances to rank on the first page.",
    minutes_to_read: 8
)
p2 = Post.create(
    user_id: u2.id,
    title: "Understand, How to use the ‘self’ keyword in Ruby.",
    content: "If you are learning Ruby you may find the use of the self keyword very confusing. A lot of the problems beginners face are caused by not understanding self. In this post, I am going to look at Self in a variety of every-day situations. The self keyword in Ruby enables you to access the current object that is receiving the current message.",
    minutes_to_read: 10
)

c1 = Comment.create(
    user_id: u1.id,
    post_id: p1.id,
    body: "Exactly. It looks like the other guy is struggling to learn the basics of .env files."
)

c2 = Comment.create(
    user_id: u2.id,
    post_id: p2.id,
    body: "It looks like the other guy is struggling to learn the basics of .env files."
)

t1 = Tag.create(
    tagname: "Seo"
)
t2 = Tag.create(
    tagname: "Programming"
)

p1.tags << t1
p2.tags << t2






puts "✅ Done seeding"