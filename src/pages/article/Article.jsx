import React, { useEffect } from "react";
// Import Components
import {
    Header,
    Banner,
    Card,
    Contact,
    Services,
    Footer,
} from "../../components";
// Import Images
import img1 from "../../images/blog/PlantTherapy-PupPony-ApplicationBooklet-Horse.jpg";
import img2 from "../../images/blog/PlantTherapy-PupPony-ApprovedSingles-Dog.jpg";
// Import Icons
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
// Import useparams
// import { useParams } from "react-router-dom";
// Import CSS
import "./Article.css";

const post = {
    id: 1,
    image: img1,
    date: "10/06/2022",
    category: "Category 1",
    title: "Planting Kindness for St. Jude Children’s Research Hospital",
    content:
        "For the month of July, join us in supporting St. Jude Children’s Research Hospital! By leading the way in helping the world to understand, treat, and defeat childhood cancer and other life-threatening diseases, thousands of young lives have been saved since the hospital’s opening more than 50 years ago. While the hospital’s mission is to advance cures for pediatric catastrophic diseases, they notably offer an incredible peace of mind to the families of children in need of care. Thanks to considerable donations and programs, St. Jude is able to cover or supplement costs for treatment, travel, housing, and food. That way, families can stay focused on what matters most — their child’s health. ",
};

const Article = () => {
    // const { article } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Banner />
            <div className="post">
                <div className="container">
                    <div className="post-thumbnail">
                        <img src={img1} alt="" />
                    </div>
                    <h1 className="post-title">
                        Planting Kindness for St. Jude Children’s Research
                        Hospital
                    </h1>
                    <div className="post-content">
                        <p>
                            For the month of July, join us in supporting St.
                            Jude Children’s Research Hospital! By leading the
                            way in helping the world to understand, treat, and
                            defeat childhood cancer and other life-threatening
                            diseases, thousands of young lives have been saved
                            since the hospital’s opening more than 50 years ago.
                            While the hospital’s mission is to advance cures for
                            pediatric catastrophic diseases, they notably offer
                            an incredible peace of mind to the families of
                            children in need of care. Thanks to considerable
                            donations and programs, St. Jude is able to cover or
                            supplement costs for treatment, travel, housing, and
                            food. That way, families can stay focused on what
                            matters most — their child’s health.
                        </p>
                        <p>
                            Plant Therapy is thrilled to support St. Jude
                            Children’s Research Hospital and all they do to save
                            lives.
                        </p>
                        <h2>
                            This month, give a gift that gives back! With the
                            purchase of any of our Aroma Plush Pal Clips, Plant
                            Therapy will donate $5 to St. Jude Children’s
                            Hospital.
                        </h2>
                        <div className="post-image">
                            <img src={img2} alt="" />
                        </div>
                        <h2>Soft and smelly — in the best way!</h2>
                        <p>
                            Choose between Birch Bear, Flora Fox, and Briar
                            Bunny Aroma Plush Pals and Plush Pal Clips. These
                            snuggleable bite-sized Pals are great for road
                            trips, sleepovers, back-to-school, and other
                            on-the-go activities. Each Pal contains a velcro
                            pouch with a Safety Scent Cartridge inside where
                            essential oils drops can be applied to the felt pad
                            and secured safely back inside the Pal.
                        </p>
                        <p>
                            Does your kiddo have trouble falling asleep? Try
                            some Sweet Dreams with your Pal for the perfect
                            bedtime buddy. What about that busy body who has a
                            hard time focusing on a project? A little Study Time
                            with their favorite Pal by their side can help! The
                            possibilities are endless. These Pals make using
                            essential oils with kids a breeze thanks to how
                            portable, adorable, and easy to use they are. Try a
                            drop of Vanilla with a drop of Lemon to give the Pal
                            an irresistibly sweet and happy scent your children
                            will be able to love all day long!
                        </p>
                        <p>
                            As an added bonus, every Pal comes with a 10 mL
                            essential oil blend named Woodland Retreat. This
                            blend combines Cedarwood, Orange, Balsam Fir,
                            Mandarin, and Chamomile for an uplifting aroma that
                            helps promote a calm feeling for your little one
                            when they snuggle with their favorite new plushy.
                        </p>
                        <h2>
                            For more information about St. Jude Children’s
                            Hospital, visit their website to donate directly,
                            support local events, get inspired by amazing
                            patient stories, and so much more!
                        </h2>
                        <div className="share-post">
                            <h3>SHARE THIS POST!:</h3>
                            <div className="btns">
                                <button>
                                    <AiFillFacebook />
                                    <span>facebook</span>
                                </button>
                                <button>
                                    <AiOutlineTwitter />
                                    <span>twitter</span>
                                </button>
                                <button>
                                    <FaPinterestP />
                                    <span>pinterest</span>
                                </button>
                            </div>
                        </div>
                        <div className="related-postes">
                            <h3>RELATED POSTS</h3>
                            <div className="posts">
                                <Card post={post} />
                                <Card post={post} />
                                <Card post={post} />
                            </div>
                        </div>
                    </div>
                    <div className="leave-comment">
                        <h2 className="title">Leave a Comment </h2>
                        <form action="">
                            <input type="name" placeholder="Name*" required />
                            <input type="email" placeholder="Email*" required />
                            <textarea placeholder="Enter Your Comment Here"></textarea>
                            <input type="submit" value="Post" />
                        </form>
                    </div>
                    <div className="comments">
                        <h2 className="comments-title">
                            35 Comment “Planting Kindness for St. Jude
                            Children’s Research Hospital”
                        </h2>
                        <div className="comment">
                            <h3 className="user-name">KASEY A BURGESS</h3>
                            <div className="date">JULY 19, 2022 AT 8:44 AM</div>
                            <div className="comment-content">
                                These are so adorable and with the Safety Scent
                                Cartridges tucked away inside….you made them not
                                only look sweet but smell great too! And St.
                                Jude? Wow! You guys are the best!
                            </div>
                        </div>
                        <div className="comment">
                            <h3 className="user-name">KASEY A BURGESS</h3>
                            <div className="date">JULY 19, 2022 AT 8:44 AM</div>
                            <div className="comment-content">
                                These are so adorable and with the Safety Scent
                                Cartridges tucked away inside….you made them not
                                only look sweet but smell great too! And St.
                                Jude? Wow! You guys are the best!
                            </div>
                        </div>
                        <div className="comment">
                            <h3 className="user-name">KASEY A BURGESS</h3>
                            <div className="date">JULY 19, 2022 AT 8:44 AM</div>
                            <div className="comment-content">
                                These are so adorable and with the Safety Scent
                                Cartridges tucked away inside….you made them not
                                only look sweet but smell great too! And St.
                                Jude? Wow! You guys are the best!
                            </div>
                        </div>
                        <div className="comment">
                            <h3 className="user-name">KASEY A BURGESS</h3>
                            <div className="date">JULY 19, 2022 AT 8:44 AM</div>
                            <div className="comment-content">
                                These are so adorable and with the Safety Scent
                                Cartridges tucked away inside….you made them not
                                only look sweet but smell great too! And St.
                                Jude? Wow! You guys are the best!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Services />
            <Footer />
        </>
    );
};

export default Article;
