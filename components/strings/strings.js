import WebHarpString from "../sting/string";

export default class WebHarpStrings extends HTMLElement {

    connectedCallback(){
        let strings ='<div class="spacer"></div>';
        for(let c=0; c< this.getAttribute('srings'); c++){
                strings +=`<webharp-string></webharp-string>`;
        }


        this.innerHTML='<div class="line"></div>\
                        <style>\
                            webharp-string> .line {\
                                background-color: white;\
                                height: 100%;\
                                width: 2pxl\
                            }\
                        </style>';
    }
}
    if(!customElements.get('webharp-string')){
        customElements.define('webharp-string',WebHarpString)
    }
