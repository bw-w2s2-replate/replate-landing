class Bio {
    constructor(dropDown) {
        this.dropDown = dropDown;
        this.aboutBtn = this.dropDown.querySelector('.aboutBtn');
        this.aboutBtn.innerText = 'About';
        this.aboutBtn.addEventListener('click', () => {
            this.expandBio() 
        });
    }

   expandBio() {
       this.dropDown.classList.toggle('bio-open');
   } 
}

let bios = document.querySelectorAll('.bio').forEach(bio => {
    new Bio(bio);
});
