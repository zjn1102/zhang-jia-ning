

/**
 * 数组中包含的内容
 */
interface ArrayItem {
    checked: boolean,
    id: number,
    value: string
}

type TodoListArray =  Array<ArrayItem>


/**获取ul标签 */
let ul1: HTMLUListElement = document.getElementsByTagName("ul")[0];

/**定义新增数组 */
let todoArray1: TodoListArray = [];


/**定义数组自增ID */
let nextId1: number = 1


function addTodoList(event) {
    if(!event || event.keyCode === 13) {
        // 首先获取input框的输入内容
        //@ts-ignore
        let inputValue = document.getElementsByClassName("input-todoList")[0].value;
        if(inputValue){
            addTodoItem(inputValue);
            //@ts-ignore
            document.getElementsByClassName("input-todoList")[0].value = ''
        }
    }
}

function changeCheckboxDate(ele: ArrayItem) {
    todoArray1.forEach(item => {
        if (item.id == ele.id) {
            item.checked = !item.checked
        }
    })
    renderHtml(todoArray1, ele.id)
}
/**
 * 新增的方法
 */
function addTodoItem(value:string): void {
  /**获取新增的内容 */
  let inputValue: string =  value
  if(todoArray1.length > 0) {
    nextId1++
  } 
    let addItemValue: ArrayItem = {
        checked: false,
        id: nextId1,
        value: inputValue
    }
    todoArray1.push(addItemValue)
    // 调用渲染方法
    renderHtml(todoArray1,nextId1)
}


/**
 * 删除
 */
function deleteDate(id: number) {
   let result: ArrayItem[] =  todoArray1.filter(item => item.id !== id)
   // 调用渲染方法
   renderHtml(result,id)
   todoArray1=result
}

/**
 * 勾选
 * 修改原数据,因为本来数据就变化了,不需要在进行保留
 */
function inputChecked(id:number) {
    todoArray1.forEach( item => {
        if(item.id === id) {
            item.checked = !item.checked
        }
    })
    // 调用渲染方法
    renderHtml(todoArray1,id)
}

/**
 * 渲染html方法
 */
function renderHtml(array: TodoListArray,nextIds:number) {
    ul1.innerHTML = ''
    array.forEach((item) => {
    // 创建li标签
     let li = document.createElement("li");
     li.className = item.id == nextIds &&  item.checked ? ' completed ' : item.checked ? "need-completed" : ''
     li.id = `${item.id}`
     li.innerHTML = ` 
        <div class="li-style-div">
            <input type="checkbox" class="checkbox" id=${item.id} ${
            item.checked ? "checked" : null
            } onchange="changeCheckboxDate(this)"></input>
            <p class="li-style-div-content">${item.value}</p>
        </div>
        <button class= ${item.id == nextIds &&  item.checked ? ' completed ' : item.checked? "need-completed button-close " : "button-close"}  id=${item.id}  onclick=deleteDate(${item.id})>X</button>
      `;
   ul1.append(li)
  });
}