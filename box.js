class Box
  {
    constructor(x,y,w,h,vx)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx = vx;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move()
    {
      this.y = this.y+this.vx;
    }

    bounce()
    {
      if (this.y >= height || this.y <=0 ){
        this.vx = -this.vx
      }
    }
    
    move2()
    {
      this.x =this.x+this.vx;
    }
  }

  
