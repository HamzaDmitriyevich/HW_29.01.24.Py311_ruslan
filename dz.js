class vos{
    constructor(buttonID){
        this.button = buttonID;
        let mybutton = new vos(button-id-vs);
        
        this.button.addEventListener(
            'click',
            this.voshod.bind(this)
        );

    }
    voshod() {
        this.button.style.transform = 'scale(1.2)';
            setTimeout(()=>{
                this.button.style.transform = 'scale(1)';
            },

            200);
            console.log('Не трогай меня');
    }
    
}


//setTimeout нагуглил.
