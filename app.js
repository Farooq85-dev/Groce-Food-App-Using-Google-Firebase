const para1Btn = document.getElementById("para1Btn");
const showPara1 = () => {
    let para1 = document.getElementById("para1");
    let shortPara = `Your recommendations are backed by our scientific advisory board, made of
    leading doctors, scientists, and nutritionists...`;
    let fullPara = `Your recommendations are backed by our scientific advisory board, made of
    leading doctors, scientists, and nutritionists. We are upfront about levels of clinical
    research and are transparent about our supply chain. So you can make healthy
    decisions you’re comfortable with.`;
    if (para1Btn.innerHTML === "See More") {
        para1.innerHTML = fullPara;
        para1Btn.innerHTML = "See Less";
    } else {
        para1.innerHTML = shortPara;
        para1Btn.innerHTML = "See More";
    }

}
para1Btn.addEventListener("click", showPara1);

const para2Btn = document.getElementById("para2Btn");
const showPara2 = () => {
    let para2 = document.getElementById("para2");
    let shortPara = `There are tons of healthy living blogs and resources online that it can feel overwhelming — with so many to choose from...`;
    let fullPara = `There are tons of healthy living blogs and resources online that it can feel overwhelming — with so many to choose from, how do you know which you should really
    pay attention to?.`;
    if (para2Btn.innerHTML === "See More") {
        para2.innerHTML = fullPara;
        para2Btn.innerHTML = "See Less";
    } else {
        para2.innerHTML = shortPara;
        para2Btn.innerHTML = "See More";
    }

}
para2Btn.addEventListener("click", showPara2);

const para3Btn = document.getElementById("para3Btn");
const showPara3 = () => {
    let para3 = document.getElementById("para3");
    let shortPara = `I tend to get a lot of questions this time of year about how to prevent and deal with stress, and between holiday part...`;
    let fullPara = `I tend to get a lot of questions this time of year about how
    to prevent and deal with stress, and between holiday parties, family obligations, travel, and about
    a billion other things, that’s probably no surprise. Stress can throw off your health,
    impacting everything from your skin to your digestion, so it’s.`;
    if (para3Btn.innerHTML === "See More") {
        para3.innerHTML = fullPara;
        para3Btn.innerHTML = "See Less";
    } else {
        para3.innerHTML = shortPara;
        para3Btn.innerHTML = "See More";
    }

}
para3Btn.addEventListener("click", showPara3);

const para4Btn = document.getElementById("para4Btn");
const showPara4 = () => {
    let para4 = document.getElementById("para4");
    let shortPara = `My health goals included improved digestion, energy, stress management,
    immunity, sleep,
    and aiding exercise performance...`;
    let fullPara = `My health goals included improved digestion, energy, stress management,
    immunity, sleep, and aiding exercise performance. The personalized recommendations I received included
    vitamins & supplements packaged in their awesome daily packs, making it super convenient
    and easy to remember to get my daily needs...`;
    if (para4Btn.innerHTML === "See More") {
        para4.innerHTML = fullPara;
        para4Btn.innerHTML = "See Less";
    } else {
        para4.innerHTML = shortPara;
        para4Btn.innerHTML = "See More";
    }

}
para4Btn.addEventListener("click", showPara4);



const whatsappNo = () => {
    const number = `+923288302289`;
    const whastsappNo = document.getElementById("whastsappNo");
    whastsappNo.value = number;
}

const whatsapp = document.getElementById("whatsapp");
whatsapp.addEventListener("click", whatsappNo);



//Scrolling Effect
document.addEventListener("DOMContentLoaded", function () {
    const exploreLink = document.querySelector('.navbar a[href="#explore-section"]');
    if (exploreLink) {
        exploreLink.addEventListener('click', function (event) {
            event.preventDefault();
            const exploreSection = document.getElementById('explore-section');
            if (exploreSection) {
                // Scroll to the explore section smoothly
                exploreSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
