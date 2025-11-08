let figure=document.querySelector('#figure');
let image2=document.querySelector('#PHP');
let dessin=figure.getContext("2d");
let image1=document.querySelector('#HTML5');
let IdTime;



restore();


function LogoMove(){

 dessin.clearRect(0, 0,500,500);
    let XLogo=50;
    let YLogo=60;
    let heightLogo=70;
    let widthLogo=80;
    let angle=45*Math.PI/180;
    let firstAngle=0;

   


        //php  logo
         let x1=300;
      
          IdTime=setInterval(()=>{
         if(x1<100){
            clearInterval(IdTime);
         }else{
                x1--;
            if(firstAngle<0.7854){firstAngle=firstAngle+0.059};
            
            AnimationLogo(x1,firstAngle);
           
         }

},100);

}





function restore(){

if(IdTime!=null){
   clearInterval(IdTime);
}


       //HTML LOGO 
         dessin.clearRect(0, 0,500,500);
         dessin.drawImage(image1,50,60,70,50);

         //HTML Text 


        dessin.font="bold 15px Arial";

        dessin.fillStyle="white";
        dessin.fillRect(50,150,130,50);


        dessin.fillStyle="black";
        dessin.fillText("Fig 1 : HTML5 ",60,180);

        //php logo
        
        dessin.drawImage(image2,300,200,130,80);

        //php text
        dessin.fillStyle="white";
        dessin.fillRect(300,300,130,50);
        dessin.fillStyle="black";
        dessin.fillText("Fig 2 : PHP ",310,330);


 

}



function AnimationLogo(XPhpLogo,angleHtmlLogo){


            dessin.clearRect(0, 0,500,500);

            LogoHtmlRotation(angleHtmlLogo);


            dessin.font="bold 15px Arial";



            dessin.fillStyle="white";
            dessin.fillRect(50,150,130,50);


            dessin.fillStyle="black";
            dessin.fillText("Fig 1 : HTML5 ",60,180);


            dessin.drawImage(image2,XPhpLogo,200,130,80);
            dessin.fillStyle="white";
            dessin.fillRect(300,300,130,50);
            dessin.fillStyle="black";
            dessin.fillText("Fig 2 : PHP ",310,330);

}



function LogoHtmlRotation(angle){

         let XLogo=50;
         let YLogo=60;
         let heightLogo=70;
         let widthLogo=80;

         dessin.save();
         dessin.translate(XLogo,YLogo);
         dessin.rotate(angle);
         dessin.drawImage(image1,-widthLogo/2, -heightLogo/2, widthLogo, heightLogo);

         dessin.restore(); 



}