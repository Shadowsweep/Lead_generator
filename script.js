// chrome://extensions/

let  myLeads = []
let oldleads =[]

// myLeads.push("www.epiclead.com")
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn =document.getElementById("tab-btn")

// console.log(localStorage.getItem("myLeads"))
// localStorage.setItem("myLead","Utkkk")
// let name1 = document.getItem("mylead")
// console.log(name1)



// localStorage.clear()
const leadsFromlocalstorage =  JSON.parse( localStorage.getItem("myLeads"))

// console.log(leadsFromlocalstorage)

if(leadsFromlocalstorage) {
    myLeads  = leadsFromlocalstorage
    render(myLeads)
}


tabBtn.addEventListener("click",function(){
    
        chrome.tabs.query({active:true,currentWindow: true},function(tabs){
       
    //    console.log(tabs)
       myLeads.push(tabs[0].url)
       localStorage.setItem("myLeads",JSON.stringify(myLeads))
   
       render(myLeads);
       
        })
    

    
})


function render(leads){

    let listItems = ""
    
    for (let i=0;i < leads.length; i++){
        // console.log(myLeads[i])
        
        
        // listItems +=  "<li><a target='_blank' href= '" + myLeads[i] + "'>" +  myLeads[i]  + "</a><li>"
        listItems += `
        <li>
          <a target='_blank' href= '${leads[i]}'> 
           ${leads[i]}
          </a>
         <li>
        `
        
        // creat element
        // append to ul
       //    const li =  document.createElement("li")
       //    li.textContent = myLeads[i]
       //    ulEl.append(li)
    
    }
        ulEl.innerHTML = listItems
    }


deleteBtn.addEventListener("dblclick",function(){
    console.log("Double clicked! ")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    // console.log("Button clicked ")
    myLeads.push(inputEl.value)
    inputEl.value=""
    // console.log(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)

    // console.log(localStorage.getItem("myLeads"))

})

