class Router {

    constructor(){

        this.pages = {};

    }

    register(name, callback){

        this.pages[name] = callback;

    }

    open(name){

        if(this.pages[name]){

            this.pages[name]();

        }

    }

}

const router = new Router();
