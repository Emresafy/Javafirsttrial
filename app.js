//select

const board = document.querySelector(".boardwrapper")


let picOne = "./images/anime8.jpg";
let picTwo = "./images/anime6.jpg";
let picThree = "./images/anime7.jpg";
let picFour = "./images/anime5.jpg";


const details = [
    {
        serviceName: "App Design",
        serviceDescription: "Build quality scalable applications, both ios and andriod. ",
        id: 1,
        img: picOne
},
    {
        serviceName: "Web Development",
        serviceDescription: "Build quality scalable and responsive website with a lot of features. ",
        id: 2,
        img: picTwo
},
    {
        serviceName: "Technical Writing",
        serviceDescription: "Create content to provide instruction or explain technical concept regarding environmental regulation.",
        id: 3,
        img: picThree
},
    {
        serviceName: "Product Design",
        serviceDescription: "Create and blend user needs with business goals to help brands make consistently successful products. ",
        id: 4,
        img: picFour
},
];

const createCard = (detail) => {
    //create card element
    const card = document.createElement("div")

    //give the create element a class name
    card.classList.add("card_container")

    //create what to insert in the card 
        let cardContent = `
        <div class="innerCard">
        <div class="img_cont">
            <img src=${detail.img} alt="pic" />
        </div>
        <h1> ${detail.serviceName}</h1>
        <p>${detail.serviceDescription}</p>
        </div>
    `;
    //put the created content in the card 
    card.innerHTML = cardContent;

    //add created card  to html
    board.appendChild(card)
};

details.map((detail) => {
    return createCard(detail);
});