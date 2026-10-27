export const largePost = {
  image: "/img/blog/large-item.jpg",
  category: "Music festival",
  title:
    "Guidelines for music festival event organisers: music festival harm reduction - December 2019",
  excerpt:
    "Lorem ipsum dolor consectetur adipiscing eiusmod tempor incididunt ut labore et dolore",
  author: "Erna O’Conner",
  date: "Dec 17, 2019",
  views: 230,
  comments: 18,
};

export const posts = [
  { id: 1, image: "/img/blog/blog-1.jpg", category: "Music festival", title: "World Music Festival | Free Events & Concerts in Chicago", author: "Erna O’Conner", date: "Dec 17, 2019" },
  { id: 2, image: "/img/blog/blog-2.jpg", category: "Music festival", title: "How ROQU Media and The Manual London staged Saudi…", author: "Erna O’Conner", date: "Dec 17, 2019" },
  { id: 3, image: "/img/blog/blog-3.jpg", category: "Music festival", title: "2019 Festival of the Sun music event, Port Macquarie", author: "Erna O’Conner", date: "Dec 17, 2019" },
  { id: 4, image: "/img/blog/blog-4.jpg", category: "Music festival", title: "Taylor Swift to Headline Glaston Music Festival", author: "Erna O’Conner", date: "Dec 17, 2019" },
  { id: 5, image: "/img/blog/blog-5.jpg", category: "Music festival", title: "24-hour festival Inner City Electronic returns", author: "Erna O’Conner", date: "Dec 17, 2019" },
  { id: 6, image: "/img/blog/blog-6.jpg", category: "Music festival", title: "Lost Paradise festival cancelled amid bushfire danger", author: "Erna O’Conner", date: "Dec 17, 2019" },
];

export const recentPosts = [1, 2, 3, 4].map((n) => ({
  id: n,
  image: `/img/blog/br-${n}.jpg`,
  title: "2020 Bendigo Blues and Roots Music Festival…",
  date: "Dec 17, 2019",
}));

export const socialLinks = [
  { id: 1, icon: "fa fa-facebook", href: "#" },
  { id: 2, icon: "fa fa-twitter", href: "#" },
  { id: 3, icon: "fa fa-instagram", href: "#" },
  { id: 4, icon: "fa fa-dribbble", href: "#" },
];