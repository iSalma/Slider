let activePage=1;
let pagesNumber=5;

/*Background color of pages*/

let pagesColors=["#C3447A"," #92A8D1","#DFCFBE","#955251","#7FCDCD"]; 

/******************* 
Create slider pages
********************/
function initialize(){ 
    let dotsContent="";
    let pages="";
    for(i=0;i<pagesNumber;i++){
        dotsContent+=`<i id="${(i+1)*100}" onClick="dotClick(this)" class="fa fa-circle"></i>`;
        pages+= `
        <div id="${i+1}" style="background-color:${pagesColors[i]};width:100%;display:${(i==0)?'inline':'none'};padding:8rem 0rem">
            <p class="slider__number">${i+1}</p>     
        </div>`
    }
    document.getElementById("slider__pages").innerHTML=dotsContent;
    document.getElementsByClassName("slider")[0].innerHTML=
    pages+document.getElementsByClassName("slider")[0].innerHTML;
}


/****************************** 
Hide prev page and show new one
*******************************/
function changePage(prevPage,newPage){
    document.getElementById(`${prevPage}`).style.display='none';
    document.getElementById(`${newPage}`).style.display='inline';
    document.getElementById(`${prevPage*100}`).style.color='grey';
    document.getElementById(`${newPage*100}`).style.color='black';
    activePage=newPage;
}


/******************************** 
Handle changing pages using dots
*********************************/
function dotClick(e){
    if((e.id/100)!=activePage){
        let newPage=(e.id/100);
        changePage(activePage,newPage);
    }
}

/******************************** 
Handle changing pages using arrows
*********************************/
function arrowClick(id){
    if(id=="arrowLeft"){
       if(activePage==1){
           changePage(1,pagesNumber);
       }
       else{
        changePage(activePage,activePage-1)
    }
    }
    else if(id=="arrowRight"){
        if(activePage==pagesNumber){
            changePage(pagesNumber,1);
        }
        else{
            changePage(activePage,activePage+1)
        }
     }
}

/****************************************** 
Handle changing pages using keyboard arrows
******************************************/
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            arrowClick('arrowLeft');
            break;
        case 39:
            arrowClick('arrowRight');
            break;
    }
};

initialize(pagesNumber);

