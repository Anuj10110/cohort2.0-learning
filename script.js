const users = [
  {
    username: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    profession: "Frontend Developer",
    description: "Crafting beautiful and responsive web interfaces using modern JavaScript frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    username: "Neha Verma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    profession: "UI/UX Designer",
    description: "Designing clean, user-friendly and conversion-focused digital experiences.",
    tags: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
  },
  {
    username: "Rohit Mehta",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    profession: "Backend Engineer",
    description: "Building secure and scalable APIs with Node.js and databases.",
    tags: ["Node.js", "MongoDB", "Express", "REST API"]
  },
  {
    username: "Priya Singh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    profession: "Content Creator",
    description: "Creating engaging tech tutorials and productivity content for YouTube.",
    tags: ["YouTube", "Content Marketing", "SEO", "Video Editing"]
  },
  {
    username: "Karan Patel",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    profession: "Digital Marketer",
    description: "Helping brands grow through paid ads and performance marketing strategies.",
    tags: ["Google Ads", "Facebook Ads", "Analytics", "Growth Hacking"]
  }
];

var clutter = "";

users.forEach(function (user) {
    clutter += `<div class="card">
            <img src="${user.image}" alt="">
            <h3>${user.username}</h3>
            <h4>${user.profession}</h4>
            <p>${user.description}</p>
        </div>`
})

document.querySelector('main').innerHTML = clutter;