(function () {
    const FlexPanel = {
        init(){
            document.documentElement.className = "js-enabled";
            this.panel = document.querySelectorAll(".panel");
            for(const element of this.panel){
                element.addEventListener('click', ()=>{
                    this.animatePanel(element, this.panel);
                });
                element.addEventListener("transitionend", ()=>{
                    this.addText(element);
                });
            }
        },
        animatePanel: function (element, panel) {
            for (const elmnt of panel) {
                if (elmnt.classList.contains("open")) {
                    elmnt.classList.remove('open');
                    elmnt.classList.remove('open-active');
                }
            }
            element.classList.add("open");
        },
        addText(element){
            if(element.classList.contains("open")){
                element.classList.add("open-active");
            }
        }
    }
    FlexPanel.init();
})();