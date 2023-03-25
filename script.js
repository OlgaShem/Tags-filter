let cards = [
    {
        title: "How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions",
        tag1: "SMB",
        tag2: "Information Technology",
        time: "7 min read",
        name: "Name",
        subtitle: "Title",
        color: "#4545F5",
        read: "Read story"

    },
    {
        title: "How Ridgeline Discovery Reduced Invoice Processing Time by 90% in a Month",
        tag1: "SMB",
        tag2: "Biotech",
        time: "7 min read",
        name: "Name",
        subtitle: "Title",
        color: "#1D2452",
        read: "Read story"

    },
    {
        title: "How TESTEX Increased Order Processing Speed by Threefold",
        tag1: "Enterprise",
        tag2: "Textile Testing & Certification",
        time: "5 min read",
        name: "Name",
        subtitle: "Title",
        color: "#7B61FF",
        read: "Read story"

    },
    {
        title: "Cropnuts Uses Precoro to Streamline Requisitioning and Get Rid of Human Error",
        tag1: "SMB",
        tag2: "Agriculture, Laboratory Services",
        time: "3 min read",
        name: "Name",
        subtitle: "Title",
        color: "#9747FF",
        read: "Read story"

    },
    {
        title: "How PassportCard Consolidated Multiple Subsidiaries and Locations under One Sustainable Procurement Workflow",
        tag1: "Enterprise",
        tag2: "Insurance",
        time: "5 min read",
        name: "Name",
        subtitle: "Title",
        color: "#F5455A",
        read: "Read story"

    },
    {
        title: "How Greater Palm Springs CVB Achieved Operational Efficiency in the Procurement Process",
        tag1: "SMB",
        tag2: "Travel & Tourism, Leisure ",
        time: "5 min read",
        name: "Name",
        subtitle: "Title",
        color: "#4ED0FF",
        read: "Read story"

    },
]

let slideAll = document.querySelector('.slider__number_all');
let count = document.querySelector(".slider__number");
let cardTag = document.querySelectorAll('.card__tag');
let tagBtn = document.querySelectorAll('.tags__btn');

/* cards*/
function getAll() {
    let wrap = '';

    for (let item of cards) {
        wrap += `
            <div class="card item">
            <div class="card__banner" style="background: ${item.color}"></div>
                <div class="card__content">
                    <div class="card__container">
                        <div class="card__tags">
                            <button class="card__tag card__tag_first" value="${item.tag1}" onclick="selectTag(this.value)">${item.tag1}</button>
                            <button class="card__tag card__tag_second" value="${item.tag2}" onclick="selectTag(this.value)">${item.tag2}</button>
                            <p class="card__time"> ${item.time} </p>
                        </div>
                    </div>
                    <h2 class="card__title"> ${item.title} </h2>
                    <div class="author">
                        <div class="author__left">
                            <div class="author__sircle" style="background: ${item.color}"></div>
                            <div class="author__text">
                                <p class="author__name">${item.name} </p>
                                <p class="author__title">${item.subtitle} </p>
                            </div>
                        </div>
                        <a class="author__link" href="">${item.read}</a>
                    </div>
                </div>
        </div>`;
    }
    document.querySelector('.slider').innerHTML = wrap;
    count.innerHTML= "1";
    slideAll.textContent = "3";
}

getAll();

/* tag filter*/
function selectTag(tag) {
    let wrap = "";
    cards.forEach((item) => {
        if (item.tag1 === tag || item.tag2 === tag) {
            wrap += `<div class="card item">
        <div class="card__banner" style="background: ${item.color}"></div>
            <div class="card__content">
                <div class="card__container">
                    <div class="card__tags">
                        <button class="card__tag card__tag_first" value="${item.tag1}" onclick="selectTag(this.value)">${item.tag1}</button>
                        <button class="card__tag card__tag_second" value="${item.tag2}" onclick="selectTag(this.value)">${item.tag2}</button>
                        <p class="card__time">${item.time}</p>
                    </div>
                </div>
                <h2 class="card__title">${item.title}</h2>
                
                <div class="author">
                    <div class="author__left">
                        <div class="author__sircle" style="background: ${item.color}"></div>
                        <div class="author__text">
                            <p class="author__name">${item.name}</p>
                            <p class="author__title">${item.subtitle}</p>
                        </div>
                    </div>
                    <a class="author__link" href="">${item.read}</a>
                </div>
             </div>
        </div>`;

        }
    });
    document.querySelector('.slider').innerHTML = wrap;
    findNumber();
    setActive(tag);
    addTagClass();
}

function findNumber(){
   let num= $(".card").length;
    if (num <=2 ) {
        let one = '1'
        console.log("1");
        slideAll.textContent = "1"
        count.innerHTML= `<span>${one}</span>`;
    }
    else if (num<=4) {
        console.log("2");
        slideAll.textContent = "2"
        count.innerHTML= "1";
    }
    else {
        console.log("3");
        slideAll.textContent = "3"
    }

}
findNumber()


function addTagClass() {

    for (let i = 0; i < cardTag.length; i++) {
        if (cardTag[i].value == "Enterprise") {
            cardTag[i].classList.add("blue");
        }
    }
}
addTagClass();

/*Set active class for header category */

for (let i = 0; i < tagBtn.length; i++) {
    tagBtn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function setActive(tag) {
       if (tag == "SMB") {
        for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.smb').classList.add('active');   
            }
       }
       else if (tag == "Enterprise") {
        for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.enterprise').classList.add('active');
        }
    }
       else if (tag == "Biotech") {
        for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.biotech').classList.add('active');
            }
        }
        else if (tag == "Textile Testing & Certification") {
            for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.textile').classList.add('active');
            }
        }
        else if (tag == "Insurance") {
            for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.insurance').classList.add('active');
            }
        }
        else if (tag == "Transport & Logistics") {
            for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.transport').classList.add('active');
            }
        }
        else if (tag == "Information Technology") {
            for (let i = 0; i < tagBtn.length; i++) {
            tagBtn[i].classList.remove('active');
            document.querySelector('.information').classList.add('active');
            }
        }
    }

  

/*slider*/
let left = document.querySelector('.slider__left');
let right = document.querySelector('.slider__right');
let cardSection = document.querySelector('.card-section');


function countIncrease() {
    let countPlus = count.innerHTML;
    findNumber()
    if (+countPlus <= 2){
      count.innerHTML++;
    
    }   
}

function countReduce() {
    let countMinus = count.innerHTML;
    if(+countMinus >= 2){
      count.innerHTML--;
    }
}



/* tags slider */
let tagArrow = document.querySelector(".tags-arrow");
let tagArrowLeft = document.querySelector(".tags-arrow_left");
let tagsMenu = document.querySelector(".tags-slider");

tagArrow.addEventListener('click', tagScroll);
tagArrowLeft.addEventListener('click', tagScrollLeft);

function tagScroll() {
    tagsMenu.scrollBy({
        left: 120,
        behavior: 'smooth'
    });
    tagArrowLeft.style.display = "block";
};

function tagScrollLeft() {
    tagsMenu.scrollBy({
        left: -120,
        behavior: 'smooth'
    });
    tagArrowLeft.style.display = "none";
};



/*mobile*/
if (window.screen.width >= 769) {

    left.addEventListener('click', scrollLeft);
    function scrollLeft() {
        cardSection.scrollBy({
            left: -1100,
            behavior: 'smooth'
        });
        countReduce()
    };

    right.addEventListener('click', scrollRight);

    function scrollRight() {
        cardSection.scrollBy({
            left: 1100,
            behavior: 'smooth'
        });
        countIncrease();
    };

}

if (window.screen.width <= 768) {

    left.addEventListener('click', scrollLeft);
    function scrollLeft() {
        cardSection.scrollBy({
            left: -750,
            behavior: 'smooth'
        });
        countReduce()
    };

    right.addEventListener('click', scrollRight);

    function scrollRight() {
        cardSection.scrollBy({
            left: 750,
            behavior: 'smooth'
        });
        countIncrease();
    };

}


if (window.screen.width <= 425) {
    left.addEventListener('click', scrollLeft);
    function scrollLeft() {
        cardSection.scrollBy({
            left: -344,
            behavior: 'smooth'
        });
        countReduce()
    };

    right.addEventListener('click', scrollRight);


    function scrollRight() {
        cardSection.scrollBy({
            left: 344,
            behavior: 'smooth'
        });
        countIncrease();
    };

    function tagScrollLeft() {
        tagsMenu.scrollBy({
            left: -750,
            behavior: 'smooth'
        });
    };


    let divs = $(".slider > .card");

    for (let i = 0; i < divs.length; i += 2) {
    divs.slice(i, i + 2).wrapAll("<div class='block'></div>");
    }

}