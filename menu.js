window.addEventListener("scroll", function(){
    var header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})


const myObserver = new IntersectionObserver((entra) => {
    entra.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostre')
        } else {
            entry.target.classList.remove('mostre')
        }
    })
 })

    const fundcadeira = document.querySelector('.fundocadeira')


  fundcadeira.forEach( (element) => myObserver.observe(element)) 