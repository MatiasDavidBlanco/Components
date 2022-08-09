class Cards extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        // this.;
        // this.surname;
    }

    static get observedAttributes(){
        return ['text', "img", "mainColor"];
    }

    

    attributeChangedCallback(nameAttr, oldValue, newValue){

        this.render()
        // switch(nameAttr){
        //     case "name":
        //         this.name = newValue;
        //     break;
        //     case "surname":
        //         this.surname = newValue;
        //     break;
        // }
    }
    render(){
        this.shadow.innerHTML = `
            <!--html-->
            <div class="card-container">
                <h1 class="title">${this.attributes.text.nodeValue}</h1>
                <img class="svg" src="${this.attributes.getNamedItem('img').nodeValue}">
            
            </div>
            <link rel="stylesheet" href="card.css">
            <style>
                .card-container{
                    background: linear-gradient(142.34deg,${this.attributes.mainColor.nodeValue} 5.97%, #FFFFFF 100%);
                }
            </style>
            <!--!html-->
            `;
    }

    connectedCallback(){
        this.render()
    }
}

window.customElements.define("card-retro", Cards);