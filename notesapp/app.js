// console.log("welcome");
showNotes();
//if user adds a note to a local storage
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let addtext=document.getElementById("addtext");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtext.value="";
    console.log(notesObj);
    showNotes();
})
//function to show elements from local storage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div id="notes" class="row container-fluid">
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Notes ${index+1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onClick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`

    });
    let notesElm=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`
    }
}
//function to delete a note
function deletenote(index){
    console.log("I am deleting",index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
let search=document.getElementById('searchtext');
search.addEventListener("input",function(e){
    let inputval=search.value.toLowerCase();
    // console.log("input event fired",inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardtext=element.getElementsByTagName("p")[0].innerText;
        if(cardtext.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
         console.log(cardtext);
    })
})
