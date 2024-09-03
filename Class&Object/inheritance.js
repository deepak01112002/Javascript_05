class Mobile{
    constructor(logo,calling){
        this.logo = logo,
        this.calling = calling
    }
    displayLogo(){
        console.log(this.logo)
    }
}

class XSMobile extends Mobile{
     constructor(logo,calling,model,size){
      super(logo,calling)
      this.model = model
      this.size = size
     }
}

class FifteenPro extends Mobile{
    constructor(logo,calling,model,size,body,camera,slowMotion){
        super(logo,calling)
        this.model = model 
        this.size = size
        this.body = body;
        this.camera = camera
        this.slowMotion = slowMotion
    }
}


let XS  = new XSMobile("Half apple",true,"XS","5.3inch")
let Fpro = new FifteenPro("Half apple",true,"15pro","15.3 inch","Titanium","15Px",true)
Fpro.displayLogo()
XS.displayLogo()