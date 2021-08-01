const myGallery = ["./imgs/burger-1.jpg",
    "./imgs/burger-2.jpg", 
    "./imgs/chicken-wings-1.jpg",
    "./imgs/chicken-wings-2.jpg",
    "./imgs/chicken-wings-3.jpg",
];

let imgNum = 0;

document.querySelector("#next").addEventListener('click', () => {
    imgNum++;

    if (imgNum >= myGallery.length) {
        imgNum = 0;
        document.getElementById("img-list").src = myGallery[imgNum];
    } else {
        document.getElementById("img-list").src = myGallery[imgNum];
    }
})

document.querySelector("#prev").addEventListener('click', () => {
    imgNum--;

    if (imgNum < 0) {
        imgNum = myGallery.length - 1;
        document.getElementById("img-list").src = myGallery[imgNum];
    } else {
        document.getElementById("img-list").src = myGallery[imgNum];
    }
})