carouselImages = [];
carouselImages.push("./img/java_code_snippet.jpg");
carouselImages.push("./img/pug.jpg");
carouselText = [];
carouselText.push("Programming Projects");
carouselText.push("cute dog");

var curCarouselIndex = 0;

//called at the start of the page to run the carousel
function startCarousel()
{
    var carousel_indicators = document.getElementById("carousel_indicators");
    for (var i = 0; i < carouselImages.length; i++)
    {
        var indicator = document.createElement("i");
        indicator.id = "indicator".concat(i);
        indicator.addEventListener("click", clickIndicator, false);
        indicator.index = i;
        indicator.classList.add("far");
        indicator.classList.add("fa-circle");
        carousel_indicators.appendChild(indicator);
    }
    updateCarousel();
    //auto advance through the carousel
    setInterval(moveCarouselRight, 10000);
}

//cycles carousel to the left
function moveCarouselLeft()
{
    emptyCircle(curCarouselIndex);
    if (curCarouselIndex == 0)
    {
        curCarouselIndex = carouselImages.length - 1;
    }
    else
    {
        curCarouselIndex = curCarouselIndex - 1;
    }
    updateCarousel();
}

//cycles carousel to the right
function moveCarouselRight()
{
    emptyCircle(curCarouselIndex);
    if (curCarouselIndex == carouselImages.length - 1)
    {
        curCarouselIndex = 0;
    }
    else
    {
        curCarouselIndex = curCarouselIndex + 1;
    }
    updateCarousel();
}

//handles when a carousel indicator is clicked
function clickIndicator(indicator)
{
    moveCarousel(indicator.currentTarget.index);
}

//moves carousel to the specified index
function moveCarousel(index)
{
    emptyCircle(curCarouselIndex);
    curCarouselIndex = index;
    updateCarousel();
}

//updates the carousel image and circle location
function updateCarousel()
{
    document.getElementById("imgTag").src = carouselImages[curCarouselIndex];
    document.getElementById("carousel_text").innerHTML = carouselText[curCarouselIndex];
    fillCircle(curCarouselIndex);
}

function fillCircle(index)
{
    var indicator = document.getElementById("indicator".concat(index));
    indicator.classList.remove("far");
    indicator.classList.add("fas");
}

function emptyCircle(index)
{
    var indicator = document.getElementById("indicator".concat(index));
    indicator.classList.remove("fas");
    indicator.classList.add("far");
}


//<i class="far fa-circle"></i> empty circle
//<i class="fas fa-circle"></i> filled circle