//User page

class userPageScripts{
    constructor(){
        this.imgBox = $('.img-box');
        if($('.your_bio').length){
            this.yourBio = $('.your_bio');
            this.mainRow = $('.main-row');
            this.specialEvents();
        }
        this.increaseHeight();
        this.fitImgSize();
    }

    //Events
    specialEvents(){
        $(window).resize(this.increaseHeight.bind(this));
        $(window).resize(this.fitImgSize.bind(this));
    }

    //Methods
    increaseHeight(){
       if(window.innerWidth < 735){
            var bioHeight = 145 + this.yourBio.height() + 10;
            this.mainRow.css('height', bioHeight);
       }else{
            this.mainRow.css('height', '');
        }
    }

    fitImgSize(){
        var boxWidth = this.imgBox.width();
        this.imgBox.css('height', boxWidth);
    }
}

var newUserPageScripts = new userPageScripts();