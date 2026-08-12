// TODO: Hold items in an array (this is your single source of truth)
let items = [];

// TODO: Select necessary DOM elements (form, input, list, count)

// TODO: Write a render() function to rebuild the list from the array
// 1. Clear the current list (innerHTML = "")
// 2. Loop through the items array
// 3. Create elements, use data-id on each row, and append to the list
// 4. Update the live count paragraph
const list = document.getElementById('list')
const form=document.getElementById('add-form')
const input=document.getElementById('name')
const count =document.getElementById('count')
function render() {
  list.innerHTML=''
  items.forEach((e)=>{
    const li=document.createElement('li')

    if(e.done){
      li.classList.add('done')
    }
     li.textContent=e.text+ ' '
    const delbtn=document.createElement('button')
    delbtn.textContent='delete';
    delbtn.classList.add('delbtn')

  
   
    li.appendChild(delbtn)
    li.dataset.id=e.id
    list.appendChild(li)

    
  })
  count.textContent=`${items.length} items`

}


// TODO: Handle form submission
// 1. preventDefault to stop page reload
// 2. Read and validate the input
// 3. Push a new object to the items array (include a unique id and done: false)
// 4. Call render()

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const value=input.value.trim()
  if(value){
    const insert={
      id:Date.now(),
      text:value,
      done:false
    }
    items.push(insert)
    input.value=''
    render()
  }
 
})
// TODO: Set up event delegation on the #list
// 1. Listen for clicks on the parent <ul>
// 2. Use e.target and closest() to find the clicked row
// 3. Determine if the user is toggling ".done" or removing a row
// 4. Update the items array accordingly
// 5. Call render()

list.addEventListener('click',(e)=>{
  const li=e.target.closest('li')

  if(!li) return;

  const id= Number(li.dataset.id);
  
  if(e.target.classList.contains('delbtn')){
    items=items.filter(item=>item.id!==id)
  }
  else{
    items=items.map(item=>{
      if(item.id===id){
        return {...item,done:!item.done}
      }
      return item
    })
  }
  render()
})












