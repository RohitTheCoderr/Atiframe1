
      // console.log(slideButtons);
      const initSlide =()=>{
        const SlideimgContainer = document.querySelector(".SlideimgContainer")
        const slideButtons =document.querySelectorAll(".slideBtn")
        // const maxScrollLeft= SlideimgContainer.scrollWidth -SlideimgContainer.clientWidth
        // Slide image according to the slide button clicks
        slideButtons.forEach(button =>{
          button.addEventListener("click", ()=>{
           const direction= button.id ==="L" ? -1 :1;
            const scrollAmount = SlideimgContainer.clientWidth * direction;
            SlideimgContainer.scrollBy({left:scrollAmount, behavior:"smooth"})
          //  button.style.backgroundColor="red"
          })
        });

        // const handleSlideBtn= ()=>{
        //   slideButtons[0].style.display=SlideimgContainer.scrollLeft <= 0 ? "none" : "block"
        //   slideButtons[1].style.display=SlideimgContainer.scrollLeft <= maxScrollLeft ? "none" : "block"
        // }

        // SlideimgContainer.addEventListener("scroll", ()=>{
        //   handleSlideBtn();
        // })

      }
      window.addEventListener("load", initSlide)




      
      // +++++++++++  About (Who Are We ? section)++++++++++++++++
      const para=document.querySelector("#HMVpara")

function paraChange(value) {
    if (value=="ABOUT US") {
        para.innerText="Renovatio, we believe that every space has the potential to be transformed into a work of art. With a passion for design and a commitment to excellence, we strive to create captivating interiors that reflect the unique personalities and aspirations of our clients.Our team of talented designers, architects, and craftsmen collaborates closely with each client to understand their vision and bring it to life."
    }
    if (value=="PHILOSOPHY") {
        para.innerText="Making best projects is our philosophy!" 
    }
    if (value=="FACTS") {
        para.innerText="We made more than 300 SEO and SMM projects"
       }
}
    


      