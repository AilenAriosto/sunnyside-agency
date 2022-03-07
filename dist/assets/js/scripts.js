$(document).ready(function(){
    
    
    // Burguer
    
    const showBurguer = () =>{
        let buttonBurguer = $('#buttonBurguer')
        let menu = $('#menu')

        buttonBurguer.click(function(){
            menu.toggle("scale", 500)
        })
        
        buttonBurguer.on('keypress', function(){
            menu.toggle("scale", 500)
        })
    }
    

    // Slider
    
    const slider = () =>{
        var $slideshow = $('.slideshow').slides(),
        api = $slideshow.data('slides');
    }
    
    // Array Testimonials
    
    const testimonials = () =>{
        let testimonialData = [
            {
                image: '../images/image-emily.jpg',
                comment: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
                name: 'Emily R.',
                profession: 'Marketing Director'
            },
            {
                image: '../images/image-thomas.jpg',
                comment: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
                name: 'Thomas S.',
                profession: 'Chief Operating Officer'
            },
            {
                image: '../images/image-jennie.jpg',
                comment: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside.<br>Highly recommended!`,
                name: 'Jennie F.',
                profession: 'Business Owner'
            }
        ]
        testimonialData.forEach((i, e) =>{
            
            let testimonialPost = `
                <article class="testimonials--card">
                    <figure class="testimonials_card--image"></figure>
                    <p class="testimonials_card--about">${i.comment}</p>
                    <h5 class="testimonials_card--name">${i.name}</h5>
                    <p class="testimonials_card--profesion">${i.profession}</p>
                </article>
            `
            
            $("#postTestimonials").append(testimonialPost)
        })   
        
    }
    


   // Call function
    
    showBurguer()
    slider()
    testimonials()


})