//api call and return data

async function  makeAPICall(url){
    try {
    let res= await fetch(url) 
    
    let data = await res.json();
    return data;

    } catch (error) {
       console.log(error); 
    }
}



 function appendPictures(data,parent){
    let cart=[] 
   
    data.forEach(element => {
        
        let div= document.createElement("div");


        div.onclick=function(){
         cart.push(element);
         localStorage.setItem("clicked_item",JSON.stringify(cart));
           window.location.href="clicked.html"
        }
          

        let image=  document.createElement("img");
        image.src=element.urls.small;

        let p=document.createElement("p");
        p.innerText=element.user.name;

       div.append(image,p); 

       parent.append(div);

    });

 }



export { makeAPICall, appendPictures };