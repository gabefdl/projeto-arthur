window.addEventListener("scroll", function(){
    var header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})