const latestPost = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
        const data = await res.json();
        const posts = data.data; // ডেটার সঠিক কাঠামো বুঝে `data` অ্যাক্সেস করা হয়েছে।
        displayLatestPost(posts); // `posts` পাস করা হচ্ছে।
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

const displayLatestPost = (posts) => {
    const latestContainer = document.getElementById('latest-container');
    latestContainer.innerHTML = ""; // পুরানো কনটেন্ট মুছে ফেলা

    posts.forEach(post => {
        const latestCard = document.createElement('div');
        latestCard.classList = `border-2 p-5 space-y-6 border-[#12132D0D] rounded-2xl`;
        latestCard.innerHTML = `
            <div class="bg-[#f8f8f8] w-72 h-40 rounded-2xl">
                <img src="${post.image || 'images/default-image.png'}" alt="${post.title}" class="w-full h-full object-cover rounded-2xl">
            </div>
            <div class="flex gap-3 items-center">
                <img src="images/Frame (1).png" alt="Icon" class="w-6 h-6">
                <p>${post.date || 'Unknown Date'}</p>
            </div>
            <div class="space-y-3">
                <p class="text-lg font-extrabold">${post.title || 'No Title Available'}</p>
                <p class="text-[#12132D99]">${post.description || 'No Description Available'}</p>
            </div>
            <div class="flex gap-3 items-center">
                <div>
                    <img src="${post.author?.image || 'images/Group 13.png'}" alt="${post.author?.name}" class="w-10 h-10 rounded-full">
                </div>
                <div>
                    <p class="font-bold">${post.author?.name || 'Unknown Author'}</p>
                    <p>${post.author?.role || 'No Role'}</p>
                </div>
            </div>
        `;
        latestContainer.appendChild(latestCard);
    });
};

// কল করা
latestPost();
