class mainScripts{
    constructor(){
        this.smallScreenSearchIcon = $('.small-screen-search-icon');
        this.searchForm = $('.search-form');
        this.searchInput = $('.search-input');
        this.searchContainer = $('.search-container');
        this.searchSpan = $('.search-span');
        this.searchSvg = $('.search-svg');
        this.events();
    }

    //Events
    events(){
        this.smallScreenSearchIcon.on('click', '.search-svg', this.openSearchForm.bind(this));
        this.searchForm.on('click', '.search-span', mainScripts.focusSearchInput.bind(this));
        this.searchForm.on('click', '.search-svg', mainScripts.focusSearchInput.bind(this));
        this.searchInput.on('click', mainScripts.focusSearchInput.bind(this));
        this.searchInput.focusout(this.detectTextInInput.bind(this));
        $(window).resize(this.showSearchOnResize.bind(this));
    }

    //Methods
    openSearchForm(){
        if(!this.searchContainer.hasClass('active')){
            this.searchContainer.slideDown();
            this.searchContainer.addClass('active');
            mainScripts.focusSearchInput('', this);
        }else{
            this.searchContainer.slideUp();
            this.searchContainer.removeClass('active');
        }
    };

    static focusSearchInput(e, _this = this){
        _this.searchInput.focus();
        _this.searchSpan.css('display', 'none');
        if(window.innerWidth > 515){
            _this.searchSvg.css('left', '5px');
        }else{
            _this.searchSvg.css('left', '15px');
        }
    }

    detectTextInInput(){
        if(this.searchInput.val()){
            this.searchSpan.css('display', 'none');
            if(window.innerWidth > 515){
                this.searchSvg.css('left', '5px');
            }else{
                this.searchSvg.css('left', '15px');
            }
        }else{
            this.searchSpan.css('display', 'initial');
            this.searchSvg.css('left', '62px');
        }
    }

    showSearchOnResize(){
        if(window.innerWidth > 515){
            this.searchContainer.css('display', 'block');
            this.searchContainer.removeClass('active');
            this.searchSvg.css('left', '5px');
        }else{
            this.searchSvg.css('left', '62px');
            if(!this.searchContainer.hasClass('active')){
                this.searchContainer.css('display', '');
            }
        }
    }
}

var Scripts = new mainScripts();