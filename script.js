const reels = [
    {
        profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
        userName: "rahul_k",
        isFollowed: false,
        caption: "next match",
        uploadedAt: "02/01/2025",
        likes: 1243,
        isLiked: false,
        comments: 87,
        shares: 14,
        video: "./videos/video-1.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
        userName: "neha_sharma",
        isFollowed: true,
        caption: "F1 radios are fake",
        uploadedAt: "03/01/2025",
        likes: 982,
        isLiked: true,
        comments: 43,
        shares: 9,
        video: "./videos/video-2.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
        userName: "amit_verma",
        isFollowed: false,
        caption: "Gym grind never stops 💪",
        uploadedAt: "05/01/2025",
        likes: 5421,
        isLiked: false,
        comments: 201,
        shares: 61,
        video: "./videos/video-3.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
        userName: "pooja_singh",
        isFollowed: false,
        caption: "Sunset therapy 🌅",
        uploadedAt: "06/01/2025",
        likes: 230,
        isLiked: false,
        comments: 19,
        shares: 4,
        video: "./videos/video-4.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
        userName: "arjun_mehta",
        isFollowed: true,
        caption: "Road trip scenes 🚗",
        uploadedAt: "08/01/2025",
        likes: 876,
        isLiked: true,
        comments: 56,
        shares: 17,
        video: "./videos/video-5.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
        userName: "kavya_jain",
        isFollowed: false,
        caption: "Coffee first, everything later ☕",
        uploadedAt: "09/01/2025",
        likes: 3120,
        isLiked: false,
        comments: 134,
        shares: 29,
        video: "./videos/video-6.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
        userName: "rohit_gupta",
        isFollowed: true,
        caption: "Late night coding 💻",
        uploadedAt: "10/01/2025",
        likes: 659,
        isLiked: true,
        comments: 22,
        shares: 8,
        video: "./videos/video-7.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
        userName: "simran_kaur",
        isFollowed: false,
        caption: "Dance like nobody's watching 💃",
        uploadedAt: "11/01/2025",
        likes: 4580,
        isLiked: false,
        comments: 176,
        shares: 52,
        video: "./videos/video-8.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
        userName: "dev_malhotra",
        isFollowed: false,
        caption: "Minimal life, maximum peace ✨",
        uploadedAt: "12/01/2025",
        likes: 121,
        isLiked: false,
        comments: 9,
        shares: 2,
        video: "./videos/video-9.mp4",
        isMuted : true
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
        userName: "ananya_r",
        isFollowed: true,
        caption: "New beginnings 🌸",
        uploadedAt: "13/01/2025",
        likes: 790,
        isLiked: true,
        comments: 31,
        shares: 11,
        video: "./videos/video-10.mp4",
        isMuted : true
    }
];

const allReels = document.querySelector('.all-reels');

function showReel () {
    let clutter = "";
    reels.forEach(function (reel, idx) {
        clutter += `<div id=${idx} class="reel">
                        <video 
                            src="${reel.video}"
                            alt=""
                            class="main-video"
                            id=${idx}
                            ${reel.isMuted ? "muted" : ""} autoplay loop>
                        </video>
                        <div class="bottom">
                            <div class="user">
                                <img src="${reel.profilePic}" alt="">
                                <h4>${reel.userName}</h4>
                                <button id=${idx} class="follow">${reel.isFollowed ? "Following" : "Follow"}</button>
                            </div>
                            <div class="caption">
                                <p>${reel.caption}</p>
                                <h6>${reel.uploadedAt}</h6>
                            </div>
                        </div>
                        <div class="right">
                            <div class="mute">
                                <h4>${reel.isMuted ? `<i id=${idx} class="mute ri-volume-mute-fill"></i>` : `<i id=${idx} class="mute ri-volume-up-line"></i>`}</h4>
                            </div>
                            <div id=${idx} class="like">
                                <h4>${reel.isLiked ? `<i id=${idx} class="like ri-heart-3-fill"></i>` : `<i id=${idx} class="like ri-heart-3-line"></i>`}</h4>
                                <h5>${reel.likes}</h5>
                            </div>
                            <div class="comment">
                                <h4><i class="ri-chat-3-fill"></i></h4>
                                <h5>${reel.comments}</h5>
                            </div>
                            <div class="share">
                                <h4><i class="ri-share-forward-fill"></i></h4>
                                <h5>${reel.shares}</h5>
                            </div>
                            <div class="menu">
                                <h4><i class="ri-more-2-fill"></i></h4>
                            </div>
                        </div>
                    </div>`;
    });
    allReels.innerHTML = clutter;
};

showReel();

allReels.addEventListener('dblclick', function(dets) {
    if (!reels[dets.target.id].isLiked) {
        reels[dets.target.id].isLiked = true;
        reels[dets.target.id].likes++;
        showReel()
    }
})

allReels.addEventListener('click', function (dets) {
    if (dets.target.className.includes('like')) {
        reels[dets.target.id].isLiked = !reels[dets.target.id].isLiked;
        reels[dets.target.id].isLiked ? reels[dets.target.id].likes++ : reels[dets.target.id].likes--;
        showReel();
    }
    
    if (dets.target.className.includes('follow')) {
        reels[dets.target.id].isFollowed = !reels[dets.target.id].isFollowed;
        showReel();
    }

    if (dets.target.className.includes('mute')) {
        reels[dets.target.id].isMuted = !reels[dets.target.id].isMuted;
        showReel();
    }
})