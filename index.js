

let editing = null


document.getElementById('form').addEventListener('submit',function(e){

    e.preventDefault()

    let table_row = document.getElementById('table').children.length
    console.log(table_row)

  if(editing==null){

    var pro = {}
    pro['p_code'] = document.getElementById('p_code').value
    pro['p_name'] = document.getElementById('p_name').value
    pro['p_quan'] = document.getElementById('p_quan').value
    pro['p_price'] = document.getElementById('p_price').value


let tr = document.createElement('tr')
     tr.innerHTML = '<td> '+pro['p_code']+'</td>' +
                     '<td> '+pro['p_name']+'</td>' +
                     '<td> '+pro['p_quan']+'</td>' +
                     '<td> '+pro['p_price']+'</td>' +
                     '<td> <button onclick="Edit(this)">Edit</button>  <button onclick="delet(this)">Delete</button></td>' 
                      

let table = document.querySelector('table')
table.append(tr)
  }else{
      update()
  }

     reset()
}  

    
)

function update(){
  
  editing.getElementsByTagName('td')[0].innerHTML = document.getElementById('p_code').value
  editing.getElementsByTagName('td')[1].innerHTML = document.getElementById('p_name').value
  editing.getElementsByTagName('td')[2].innerHTML =  document.getElementById('p_quan').value
  editing.getElementsByTagName('td')[3].innerHTML = document.getElementById('p_price').value

  editing = null


}


function Edit(btn){
   
  document.getElementById('submit').innerHTML = 'Update'

    editing =   btn.parentElement.parentElement;
   document.getElementById('p_code').value = editing.getElementsByTagName('td')[0].innerHTML
   document.getElementById('p_name').value = editing.getElementsByTagName('td')[1].innerHTML
   document.getElementById('p_quan').value = editing.getElementsByTagName('td')[2].innerHTML
   document.getElementById('p_price').value = editing.getElementsByTagName('td')[3].innerHTML

}

function reset(){

    document.getElementById('p_code').value = ''
    document.getElementById('p_name').value = ''
    document.getElementById('p_quan').value = ''
    document.getElementById('p_price').value = ''

}

function delet(btn){

  let ans = confirm('Are you sure to delete')
  if(ans){
    btn.parentElement.parentElement.remove()
  }
  
}