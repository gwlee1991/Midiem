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
Follow.destroy_all

guest = User.create(username: "guest", password: "password", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/c_scale,w_32/v1501014959/default-user-image_gvyan3.png")
andrew = User.create(username: "andrew", password: "password", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500508529/faker_haj29z.jpg")
emily = User.create(username: "emily", password: "password", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676315/travel1_g4mzwc.jpg")
claire = User.create(username: "claire", password: "password", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500414035/sample.jpg")


topic1 = Topic.create(title: "Trending")
topic2 = Topic.create(title: "Technology")
topic3 = Topic.create(title: "Travel")
topic4 = Topic.create(title: "Parenting")
topic5 = Topic.create(title: "E-Sports")


post1 = Post.create(title: "Will Midiem be the new Medium?", body:"A recent clone of Medium was published by an unknown web developer. Being completely ad free and improving the searching algorithms, Midiem is becoming more and more popular . Also the minimalist layouts of the website seems to ease the pressure of the view's eyes. Having more and more users switch to Midiem, will Midiem be able to replace Medium? We will soon find out.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500582536/laptop_czoar6.jpg",topic_id: topic1.id, author_id: guest.id)
post2 = Post.create(title: "Just sharing a picture", body:"Recently took a really good picture and wanted to share with this community. Please let me know what everyone thinks about this picture. Thanks!", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501223700/osml4217usn0cfqtfvnr.jpg",topic_id: topic1.id, author_id: andrew.id)
post3 = Post.create(title: "Matthew 5", body:"1 And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:
2 And he opened his mouth, and taught them, saying,
3 Blessed are the poor in spirit: for theirs is the kingdom of heaven.
4 Blessed are they that mourn: for they shall be comforted.
5 Blessed are the meek: for they shall inherit the earth.
6 Blessed are they which do hunger and thirst after righteousness: for they shall be filled.
7 Blessed are the merciful: for they shall obtain mercy.
8 Blessed are the pure in heart: for they shall see God.
9 Blessed are the peacemakers: for they shall be called the children of God.
10 Blessed are they which are persecuted for righteousness’ sake: for theirs is the kingdom of heaven.
11 Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake.
12 Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.
13 Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.
14 Ye are the light of the world. A city that is set on an hill cannot be hid.
15 Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.
16 Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.
17 Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.
18 For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.
19 Whosoever therefore shall break one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven: but whosoever shall do and teach them, the same shall be called great in the kingdom of heaven.
20 For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven.
21 Ye have heard that it was said by them of old time, Thou shalt not kill; and whosoever shall kill shall be in danger of the judgment:
22 But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment: and whosoever shall say to his brother, Raca, shall be in danger of the council: but whosoever shall say, Thou fool, shall be in danger of hell fire.
23 Therefore if thou bring thy gift to the altar, and there rememberest that thy brother hath ought against thee;
24 Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.
25 Agree with thine adversary quickly, whiles thou art in the way with him; lest at any time the adversary deliver thee to the judge, and the judge deliver thee to the officer, and thou be cast into prison.
26 Verily I say unto thee, Thou shalt by no means come out thence, till thou hast paid the uttermost farthing.
27 Ye have heard that it was said by them of old time, Thou shalt not commit adultery:
28 But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.
29 And if thy right eye offend thee, pluck it out, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.
30 And if thy right hand offend thee, cut it off, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.
31 It hath been said, Whosoever shall put away his wife, let him give her a writing of divorcement:
32 But I say unto you, That whosoever shall put away his wife, saving for the cause of fornication, causeth her to commit adultery: and whosoever shall marry her that is divorced committeth adultery.
33 ¶ Again, ye have heard that it hath been said by them of old time, Thou shalt not forswear thyself, but shalt perform unto the Lord thine oaths:
34 But I say unto you, Swear not at all; neither by heaven; for it is God’s throne:
35 Nor by the earth; for it is his footstool: neither by Jerusalem; for it is the city of the great King.
36 Neither shalt thou swear by thy head, because thou canst not make one hair white or black.
37 But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.
38 ¶ Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth:
39 But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.
40 And if any man will sue thee at the law, and take away thy coat, let him have thy cloak also.
41 And whosoever shall compel thee to go a mile, go with him twain.
42 Give to him that asketh thee, and from him that would borrow of thee turn not thou away.
43 ¶ Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy.
44 But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;
45 That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.
46 For if ye love them which love you, what reward have ye? do not even the publicans the same?
47 And if ye salute your brethren only, what do ye more than others? do not even the publicans so?
48 Be ye therefore perfect, even as your Father which is in heaven is perfect.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic1.id, author_id: emily.id)
post4 = Post.create(title: "Recent Tech News", body:"Some of you will be spending lots of time scrolling around your phone, hoping to avoid awkward family interactions at 4th of July barbecues. Lucky for you, some interesting stuff happened in tech last week and you can read about it right here in bite-sized chunks that are much easier to digest than your aunt Brenda’s ambrosia salad. The iPhone had its 10th birthday last week. Hard to believe it has been a decade since Steve Jobs introduced us to this wondrous little rectangle. It’s even weirder to think that the App Store didn’t debut until a year later. Nintendo officially announced that the Super Nintendo Classic Edition is officially scheduled for September 2017. It will cost $80 with two controllers, and come loaded with 21 games, including the previously unreleased Star Fox 2. It’s hard to get too excited since pre-orders sold out immediately and flippers are already trying to turn a profit on the secondary market, which suggests we’re headed for another boondoggle like the NES Classic Edition. Facebook officially broke 2 billion users last week. Shout out to your relatives who post awkward links and people you kinda remember from high school for helping Mark Z achieve such a monumental feat. Please leave comments if you want to know more.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501221239/zqylwvixckzme1nyyoiz.jpg",topic_id: topic2.id, author_id: claire.id)
post5 = Post.create(title: "The effect of Phones in our lives", body:"The mobile market is growing at a fast rate. It is almost at the point where almost everyone has a smartphone. As the IT field grows, more and more apps are developed to make our lives easier. However, there is a subtle addiction that people are not aware of. Most people send their time staring at their phones instead of interacting with people and despite the fact that there is no reason to be staring at your phone, you still do. It is time for us to look back and cut that addiction!", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500582530/phone_nmzslm.jpg",topic_id: topic2.id, author_id: guest.id)
post6 = Post.create(title: "Matthew 6", body:"1 Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.

2 Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward.

3 But when thou doest alms, let not thy left hand know what thy right hand doeth:

4 That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly.

5 ¶ And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward.

6 But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.

7 But when ye pray, use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking.

8 Be not ye therefore like unto them: for your Father knoweth what things ye have need of, before ye ask him.

9 After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.

10 Thy kingdom come. Thy will be done in earth, as it is in heaven.

11 Give us this day our daily bread.

12 And forgive us our debts, as we forgive our debtors.

13 And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.

14 For if ye forgive men their trespasses, your heavenly Father will also forgive you:

15 But if ye forgive not men their trespasses, neither will your Father forgive your trespasses.

16 ¶ Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward.

17 But thou, when thou fastest, anoint thine head, and wash thy face;

18 That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly.

19 ¶ Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:

20 But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal:

21 For where your treasure is, there will your heart be also.

22 The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light.

23 But if thine eye be evil, thy whole body shall be full of darkness. If therefore the light that is in thee be darkness, how great is that darkness!

24 ¶ No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.

25 Therefore I say unto you, Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?

26 Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?

27 Which of you by taking thought can add one cubit unto his stature?

28 And why take ye thought for raiment? Consider the lilies of the field, how they grow; they toil not, neither do they spin:

29 And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these.

30 Wherefore, if God so clothe the grass of the field, which to day is, and to morrow is cast into the oven, shall he not much more clothe you, O ye of little faith?

31 Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed?

32 (For after all these things do the Gentiles seek:) for your heavenly Father knoweth that ye have need of all these things.

33 But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.

34 Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501223700/osml4217usn0cfqtfvnr.jpg",topic_id: topic2.id, author_id: andrew.id)
post7 = Post.create(title: "My Trip to New York", body:"Trip to the East Coast: Day 1: SFO to LGA We left the San Francisco Airport on Wednesday night at 12am to arrive at LaGuardia Airport at 7am. Day 2: New York – Manhattan We first took the bus to Manhattan from the airport. We met our friend, left our baggage, changed clothes, and went out to eat breakfast. After breakfast, we started touring the city. Our first stop was the High Line. It’s a park made from an old train rack for people to visit and also rest. I learned about this place in college in my landscape architecture class. Our professor showed us this location as a good example of a landscape architecture, where people and nature reside equally. Our next stop was the Chelsea market. The market is located right next to The High Line. In the market, there are lots of unique shops for clothing, accessories, food including seafood, pastry, and more. At the seafood market, we ate lobster, oysters, lobster bisque, and lobster roll for lunch. It was very delicious. I highly recommend for you to go to the seafood market if you ever stop by New York. For dessert, we went to the brownie shop inside the Chelsea Market. We also bought several brownie packs for family and friend back home in California. Our next stop was to see the Statue of Liberty. We went to the terminal to take the ferry to the Staten Island. Because it was already dark, we didn’t get to go into the Statue of Liberty. Instead, we watched from the ferry ride. Our next stop was the Brooklyn Bridge. We took the subway to Brooklyn and walked the bridge to Manhattan. It was a very scary experience for me because I have acrophobia. I don’t think I can cross the bridge by feet ever again. Day 3: Manhattan, NY We woke up early in the morning, packed our bags and went to hold our baggage near Times Square for the day. After we left our baggage, we went to Central Park, which is another location I learned from the Landscape architecture class during college. It is a park with a man-made lake in the middle of the park. Our next stop was the Museum of Modern Art. It was a free day at the Museum, so due to the long line, we decided to go next time and headed our way to the Metropolitan Museum. After spending hours at the Museum, we went back to Times Square to explore. At Times Square, we visited the Disney Store, Toys R’ Us, and M&M store and bought souvenirs. It was getting dark so we went to pick up our baggage and headed to the hotel reserved for the night Day 4: Back to California We woke up early in the morning to pack to head home. Our flight was at 6am Eastern time to arrive in San Francisco at 10am.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676334/travel2_ktq8x4.jpg",topic_id: topic3.id, author_id: emily.id)
post8 = Post.create(title: "Trip to Cancun", body:"Cancun is a beautiful city in Mexico. I travelled to Cancun last November. We booked an all inclusive hotel for a week. The first day we arrived, we were surprised to see that our room was decorated along with a fancy wine. This is probably because we mentioned that it was our anniversary. This gave us a very good impression. The next day we tried some restaurants which were all buffets. The quality was impressive and at the same time they had a vast variety of foods. After being stuffed, we chilled in our room for the rest of the day. After that it was pretty much the same thing. Eat, swim, sleep, drink and repeat. We had fun and this is definitely a place that I would like to visit in the future.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676315/travel1_g4mzwc.jpg",topic_id: topic3.id, author_id: claire.id)
post9 = Post.create(title: "Psalm 1", body:"1 Blessed is the one
    who does not walk in step with the wicked
or stand in the way that sinners take
    or sit in the company of mockers,
2 but whose delight is in the law of the Lord,
    and who meditates on his law day and night.
3 That person is like a tree planted by streams of water,
    which yields its fruit in season
and whose leaf does not wither—
    whatever they do prospers.
4 Not so the wicked!
    They are like chaff
    that the wind blows away.
5 Therefore the wicked will not stand in the judgment,
    nor sinners in the assembly of the righteous.
6 For the Lord watches over the way of the righteous,
    but the way of the wicked leads to destruction.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501223700/osml4217usn0cfqtfvnr.jpg",topic_id: topic3.id, author_id: guest.id)
post10 = Post.create(title: "What to expect being a parent", body:"Parenting is always hard. It cannot be easy since no parent was a parent before. A baby is born and turns in to a toddler. She then becomes a child, teenager, and then an adult. Once, she gets married and has a baby, she becomes a mom. Although she also once was a baby before, parenting a baby is different then being a baby yourself. You understand what the child is going through but as a parent who needs to guide your child, you also need to think through consequences as well. Therefore, you start to think more like your mom and start to understand her better. Every parent who is raising a child is also learning and growing with them.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676294/parenting1_gfpmjn.jpg",topic_id: topic4.id, author_id: andrew.id)
post11 = Post.create(title: "Myself as a mom...", body:"As a teacher at a K-12 institution, I see many types of parents. There are those tiger parents who are eager for their kids to learn and be the smartest student at the school. There are parents who let their child pursue what they want to do. There are parents who think their child is always correct and never discipline them. There are also parents who are too busy and let the child do whatever they want. I cannot judge and say which parents are right or wrong. But, from my experience as a teacher and my personal experience, I know how I’d like to teach my kid. I don’t want to be the tiger mom who chases after the child, filling their time with classes after classes to learn what the parent once wanted to learn. I don’t want to be the mom who thinks only my child is right and don’t discipline them even when they fight with a friend at school. Instead, I want to become a mom who teaches my kid to love, to be joyful, to be peaceful, to be patient, to be kind, to be good, to be faithful, to be gentle, to have self-control, to be humble, to forgive, to be able to say sorry when you make a mistake, and to try again when he/she fails. I want to be a mom who is a friend so my child can tell me anything. I want to be a mom who can understand the child’s needs and help cope with them instead of doing it for them. I want to be a mom who can guide them so they can be independent rather than being dependent on me.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500676307/parenting2_eyv4we.jpg",topic_id: topic4.id, author_id: emily.id)
post12 = Post.create(title: "Psalm 3", body:"1 Lord, how many are my foes!
    How many rise up against me!
2 Many are saying of me,
    “God will not deliver him.”[b]
3 But you, Lord, are a shield around me,
    my glory, the One who lifts my head high.
4 I call out to the Lord,
    and he answers me from his holy mountain.
5 I lie down and sleep;
    I wake again, because the Lord sustains me.
6 I will not fear though tens of thousands
    assail me on every side.
7 Arise, Lord!
    Deliver me, my God!
Strike all my enemies on the jaw;
    break the teeth of the wicked.
8 From the Lord comes deliverance.
    May your blessing be on your people.
", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501223700/osml4217usn0cfqtfvnr.jpg",topic_id: topic4.id, author_id: claire.id)
post13 = Post.create(title: "What is with SKT T1 this Season?", body:"Within the past couple of years, there is no doubt that SKT T1 has been the strongest team amongst all the League of Legend(LOL) pro teams. They have won the World Series 3 times and also has won Korea's LOL league 4 times in a row. However, it seems like this season, they aren't performing as they used to. Considering their prior performance, their expectation for this season was very high. Will they be able to break out of this 8 loss streak and claim themselves to be the champion that they used to be? We will find out soon.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1500578757/SKT1_vjei8b.png",topic_id: topic5.id, author_id: andrew.id)
post14 = Post.create(title: "Diablo3 Necromancer", body:"Blizzard has recently released a new class called Necromancer. Being a class that was available on Diablo2, many are excited to the upcoming update. However, the popularity for Diablo3 is not as high as Diablo2 due to the lack of PVP systems. Will the release of the new hero bring profit to Blizzard or will it turn out being a divestment. We will soon find out.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501222965/dgasg3co7gyy4lj6ltop.jpg",topic_id: topic5.id, author_id: emily.id)
post15 = Post.create(title: "Psalm 4", body:"1 Answer me when I call to you,
    my righteous God.
Give me relief from my distress;
    have mercy on me and hear my prayer.
2 How long will you people turn my glory into shame?
    How long will you love delusions and seek false gods[b]?[c]
3 Know that the Lord has set apart his faithful servant for himself;
    the Lord hears when I call to him.
4 Tremble and[d] do not sin;
    when you are on your beds,
    search your hearts and be silent.
5 Offer the sacrifices of the righteous
    and trust in the Lord.
6 Many, Lord, are asking, “Who will bring us prosperity?”
    Let the light of your face shine on us.
7 Fill my heart with joy
    when their grain and new wine abound.
8 In peace I will lie down and sleep,
    for you alone, Lord,
    make me dwell in safety.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic5.id, author_id: claire.id)
post16 = Post.create(title: "Psalm 6", body:"1 Lord, do not rebuke me in your anger
    or discipline me in your wrath.
2 Have mercy on me, Lord, for I am faint;
    heal me, Lord, for my bones are in agony.
3 My soul is in deep anguish.
    How long, Lord, how long?
4 Turn, Lord, and deliver me;
    save me because of your unfailing love.
5 Among the dead no one proclaims your name.
    Who praises you from the grave?
6 I am worn out from my groaning.
All night long I flood my bed with weeping
    and drench my couch with tears.
7 My eyes grow weak with sorrow;
    they fail because of all my foes.
8 Away from me, all you who do evil,
    for the Lord has heard my weeping.
9 The Lord has heard my cry for mercy;
    the Lord accepts my prayer.
10 All my enemies will be overwhelmed with shame and anguish;
    they will turn back and suddenly be put to shame.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic1.id, author_id: andrew.id)
post17 = Post.create(title: "Psalm 8", body:"1 Lord, our Lord,
    how majestic is your name in all the earth!
You have set your glory
    in the heavens.
2 Through the praise of children and infants
    you have established a stronghold against your enemies,
    to silence the foe and the avenger.
3 When I consider your heavens,
    the work of your fingers,
the moon and the stars,
    which you have set in place,
4 what is mankind that you are mindful of them,
    human beings that you care for them?[c]
5 You have made them[d] a little lower than the angels[e]
    and crowned them[f] with glory and honor.
6 You made them rulers over the works of your hands;
    you put everything under their[g] feet:
7 all flocks and herds,
    and the animals of the wild,
8 the birds in the sky,
    and the fish in the sea,
    all that swim the paths of the seas.
9 Lord, our Lord,
    how majestic is your name in all the earth!", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic2.id, author_id: emily.id)
post18 = Post.create(title: "Psalm 11", body:"1 In the Lord I take refuge.
    How then can you say to me:
    “Flee like a bird to your mountain.
2 For look, the wicked bend their bows;
    they set their arrows against the strings
to shoot from the shadows
    at the upright in heart.
3 When the foundations are being destroyed,
    what can the righteous do?”
4 The Lord is in his holy temple;
    the Lord is on his heavenly throne.
He observes everyone on earth;
    his eyes examine them.
5 The Lord examines the righteous,
    but the wicked, those who love violence,
    he hates with a passion.
6 On the wicked he will rain
    fiery coals and burning sulfur;
    a scorching wind will be their lot.
7 For the Lord is righteous,
    he loves justice;
    the upright will see his face.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic3.id, author_id: claire.id)
post19 = Post.create(title: "Psalm 12", body:"1 Help, Lord, for no one is faithful anymore;
    those who are loyal have vanished from the human race.
2 Everyone lies to their neighbor;
    they flatter with their lips
    but harbor deception in their hearts.
3 May the Lord silence all flattering lips
    and every boastful tongue—
4 those who say,
    “By our tongues we will prevail;
    our own lips will defend us—who is lord over us?”
5 “Because the poor are plundered and the needy groan,
    I will now arise,” says the Lord.
    “I will protect them from those who malign them.”
6 And the words of the Lord are flawless,
    like silver purified in a crucible,
    like gold[c] refined seven times.
7 You, Lord, will keep the needy safe
    and will protect us forever from the wicked,
8 who freely strut about
    when what is vile is honored by the human race.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic4.id, author_id: andrew.id)
post20 = Post.create(title: "Psalm 13", body:"1 How long, Lord? Will you forget me forever?
    How long will you hide your face from me?
2 How long must I wrestle with my thoughts
    and day after day have sorrow in my heart?
    How long will my enemy triumph over me?
3 Look on me and answer, Lord my God.
    Give light to my eyes, or I will sleep in death,
4 and my enemy will say, “I have overcome him,”
    and my foes will rejoice when I fall.
5 But I trust in your unfailing love;
    my heart rejoices in your salvation.
6 I will sing the Lord’s praise,
    for he has been good to me.
", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic5.id, author_id: emily.id)
post21 = Post.create(title: "Psalm 14", body:"1 The fool[a] says in his heart,
    “There is no God.”
They are corrupt, their deeds are vile;
    there is no one who does good.
2 The Lord looks down from heaven
    on all mankind
to see if there are any who understand,
    any who seek God.
3 All have turned away, all have become corrupt;
    there is no one who does good,
    not even one.
4 Do all these evildoers know nothing?
They devour my people as though eating bread;
    they never call on the Lord.
5 But there they are, overwhelmed with dread,
    for God is present in the company of the righteous.
6 You evildoers frustrate the plans of the poor,
    but the Lord is their refuge.
7 Oh, that salvation for Israel would come out of Zion!
    When the Lord restores his people,
    let Jacob rejoice and Israel be glad!
", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic1.id, author_id: claire.id)
post22 = Post.create(title: "Psalm 15", body:"1 Lord, who may dwell in your sacred tent?
    Who may live on your holy mountain?
2 The one whose walk is blameless,
    who does what is righteous,
    who speaks the truth from their heart;
3 whose tongue utters no slander,
    who does no wrong to a neighbor,
    and casts no slur on others;
4 who despises a vile person
    but honors those who fear the Lord;
who keeps an oath even when it hurts,
    and does not change their mind;
5 who lends money to the poor without interest;
    who does not accept a bribe against the innocent.
Whoever does these things
    will never be shaken.", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic2.id, author_id: andrew.id)
post23 = Post.create(title: "Psalm 20", body:"1 May the Lord answer you when you are in distress;
    may the name of the God of Jacob protect you.
2 May he send you help from the sanctuary
    and grant you support from Zion.
3 May he remember all your sacrifices
    and accept your burnt offerings.[b]
4 May he give you the desire of your heart
    and make all your plans succeed.
5 May we shout for joy over your victory
    and lift up our banners in the name of our God.
May the Lord grant all your requests.
6 Now this I know:
    The Lord gives victory to his anointed.
He answers him from his heavenly sanctuary
    with the victorious power of his right hand.
7 Some trust in chariots and some in horses,
    but we trust in the name of the Lord our God.
8 They are brought to their knees and fall,
    but we rise up and stand firm.
9 Lord, give victory to the king!
    Answer us when we call!", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic3.id, author_id: claire.id)
post24 = Post.create(title: "Psalm 23", body:"1 The Lord is my shepherd, I lack nothing.
2     He makes me lie down in green pastures,
he leads me beside quiet waters,
3     he refreshes my soul.
He guides me along the right paths
    for his name’s sake.
4 Even though I walk
    through the darkest valley,[a]
I will fear no evil,
    for you are with me;
your rod and your staff,
    they comfort me.
5 You prepare a table before me
    in the presence of my enemies.
You anoint my head with oil;
    my cup overflows.
6 Surely your goodness and love will follow me
    all the days of my life,
and I will dwell in the house of the Lord
    forever.
", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic4.id, author_id: emily.id)
post25 = Post.create(title: "Psalm 24", body:"1 The earth is the Lord’s, and everything in it,
    the world, and all who live in it;
2 for he founded it on the seas
    and established it on the waters.
3 Who may ascend the mountain of the Lord?
    Who may stand in his holy place?
4 The one who has clean hands and a pure heart,
    who does not trust in an idol
    or swear by a false god.[a]
5 They will receive blessing from the Lord
    and vindication from God their Savior.
6 Such is the generation of those who seek him,
    who seek your face, God of Jacob.[b][c]
7 Lift up your heads, you gates;
    be lifted up, you ancient doors,
    that the King of glory may come in.
8 Who is this King of glory?
    The Lord strong and mighty,
    the Lord mighty in battle.
9 Lift up your heads, you gates;
    lift them up, you ancient doors,
    that the King of glory may come in.
10 Who is he, this King of glory?
    The Lord Almighty—
    he is the King of glory.
", image_url: "http://res.cloudinary.com/dbtdkqyeo/image/upload/v1501275889/pexels-photo-250609_jlel1p.jpg",topic_id: topic5.id, author_id: andrew.id)