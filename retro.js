const allPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];
    // console.log(posts);    
    displayPosts(posts);
    // activeBallColor(posts);
   
}


const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = (data);
    // console.log(posts);
    displayLatestPosts(posts);
}

const displayLatestPosts = (posts) => {
    const latestContainer = document.getElementById('latest-container');
    posts.forEach(post => {
        // console.log(post);
    const latestCard = document.createElement('div');
    latestCard.innerHTML = `
    <div class=" border-2 p-5 space-y-6 border-[#12132D0D] rounded-2xl">
                <div class="bg-[#f8f8f8] rounded-2xl ">
                    <img class="rounded-xl" src="${post.cover_image}" alt="">
                </div>
                <div class="flex gap-3">
                    <img src="images/Frame (1).png" alt="">
                    <p>${post.author?.posted_date || 'No publish date'}</p>
                </div>
                <div class="space-y-3">
                    <p class=" text-lg font-extrabold">${post.title}</p>
                    <p class="text-[#12132D99]">${post.description}</p>
                </div>
                <div class="flex gap-3">
                    <div class="w-10 h-5 ">
                        <img class="rounded-full" src="${post.profile_image}" alt="">
                    </div>
                    <div>
                        <p class=" font-bold">${post.author.name}</p>
                        <p>${post.author.designation || 'Unknown'}</p>
                    </div>
                </div>
            </div>
    `;
    latestContainer.appendChild(latestCard);
    });
};



const displayPosts = posts => {
    
    const postContainer = document.getElementById('post-container');
    posts.forEach(post =>{
        // console.log(post);
        
        const postCard = document.createElement('div');
        postCard.innerHTML = `      
        <div class="">
                <div class="flex w-[650px] bg-[#797DFC1A] rounded-2xl p-10">
                    <div class=" rounded-xl w-[70px] ">
                    <img class="rounded-xl relative" src="${post.image}" alt="">
                    </div>
                    <div class="active-ball bg-red-600  w-4 h-4 ml-14 -mt-1 absolute rounded-full "></div>
                    <div class="space-y-3 pl-4">
                        <div class="flex gap-5 font-semibold">
                            <p># <span>${post.category}</span></p>
                            <p>Author : <span>${post.author.name}</span></p>
                        </div>
                        <p class=" text-xl font-bold">${post.title}</p>
                        <p class="text-[#12132D99] pb-3 border-b-2 border-dashed">${post.description}</p>
                        <div class="flex justify-between">
                            <div class="flex gap-6">
                                <div class="flex gap-2">
                                    <img src="images/Group 13.png" alt="">
                                    <p>${post.comment_count}</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="images/Group 16.png" alt="">
                                    <p>${post.view_count}</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="images/Group 18.png" alt="">
                                    <p>${post.posted_time}</p>
                                </div>
                            </div>
                            <div>
                             <img id="email-view" onclick="emailView('${encodeURIComponent(JSON.stringify(post))}')"')" src="images/email 1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        postContainer.appendChild(postCard);
        
    });
    // activeBallColor();
};

// function activeBallColor() {
//     const activeBalls = document.querySelectorAll('.active-ball');
//     if(activeBalls === ){

//     }
//     // activeBalls.forEach(ball => {
//     //     if(){

//     //     }
        
//     // });
// }

const emailView = (postString) => {
        const post = JSON.parse(decodeURIComponent(postString)); 
        const readDiv = document.getElementById('read-div');
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
            <div class="flex justify-between w-[450px] rounded-2xl mt-5 p-5 bg-white">
                <p class="font-bold">${post.title}</p>
                <div class="flex  items-center gap-2 pr-2">
                    <img src="images/Group 16.png" alt="">
                    <p>${post.view_count || 0}</p>
                </div>
            </div>
        `;
        readDiv.appendChild(createDiv);
    };

    let sum = 0;
    const emailCountView = document.getElementById('email-view');
    document.addEventListener('click', function readDivCounter(){
        const readCounter = document.getElementById('read-counter');
        sum += 1;
        readCounter.innerText = sum;
    })
   
// function emailView () {
//     const readDiv = document.getElementById('read-div');
//     const createDiv = document.createElement('div');
//     createDiv.innerHTML = `
//     <div class="flex w-[450px] rounded-2xl mt-5 p-5 bg-white">
//                                 <p class="font-bold">10 Kids Unaware of Their Halloween Costume</p>
//                                 <div class="flex items-center gap-2 pr-2">
//                                     <img src="images/Group 16.png" alt="">
//                                     <p></p>
//                                 </div>
//                             </div>
//     `
//     readDiv.appendChild(createDiv);
// };
    

allPost();
latestPost();
// activeBallColor();