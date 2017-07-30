

function addList() {

    var textFieldValue = document.getElementById('textField').value;
        grandParent = document.getElementById('ulist'),
        listItem = document.createElement('li'),
        listInnertextField = document.createElement('input'),
        buttonDiv = document.createElement('div'),
        imageChild = document.createElement('img'),
        tickImage = document.createElement('i'),
        updateIcon = document.createElement('i'),
        heading = document.getElementById('incomplete-tasks'),
        tempText = "";
        
    // textFieldValue = textFieldValue.value;
    console.log(listItem.children);
    updateIcon.setAttribute('class', 'fa fa-pencil-square-o update');
    updateIcon.setAttribute('aria-hidden', 'true');
    updateIcon.setAttribute('onClick','updateTodo(this.parentNode);');//here man here
    tickImage.setAttribute('class', 'fa fa-check invert ');
    tickImage.setAttribute('aria-hidden', 'true');
    imageChild.setAttribute('src', 'images/dicon.png');
    imageChild.setAttribute('class', 'image');
    buttonDiv.setAttribute('class', 'buttons');
    listInnertextField.setAttribute('type', 'text');
    tempText = textFieldValue;
    listInnertextField.value = textFieldValue;
    /*document.getElementById('textField').value = "";*/
    /* ***************************** heading ************************************ */
    if (heading.innerHTML === "") {
        heading.innerHTML = "Incomplete Tasks";
    }

    if (document.getElementById('textField').value === "") {
        alert("Please enter any task");
    }
    else {
        buttonDiv.appendChild(updateIcon);
        buttonDiv.appendChild(tickImage);
        buttonDiv.appendChild(imageChild);
        
        listItem.appendChild(buttonDiv);
        listItem.appendChild(listInnertextField);
        grandParent.appendChild(listItem);
    }

    document.getElementById('textField').value = "";


    imageChild.addEventListener('click', function () {
        console.log('image is pressed')
        var imageParent = this.parentNode;
        var parentList = imageParent.parentNode;
        parentList.parentNode.removeChild(parentList);
        if (document.getElementById('ulist').children.length === 0) {
            document.getElementById('incomplete-tasks').innerHTML = "";
        }

    });

    imageChild.addEventListener('mouseout', function () {
        console.log("i am involked")
        imageChild.setAttribute('id', 'whenMouseoutFromImage');
        this.className += " new";

    });
    /* ***********************************when create complete task*********************************** */
    tickImage.addEventListener('click', function () {


        var parent = document.getElementById('new-one');
        var textFieldValue = document.getElementById('textField').value,
            listItem = document.createElement('li'),
            listInnertextField = document.createElement('input'),
            buttonDiv = document.createElement('div'),
            imageChild = document.createElement('img')
        tickImage = document.createElement('i')
        heading = document.getElementById("complete-tasks"),
            div = this.parentNode,
            list = div.parentNode,
            childArray = list.children;
        if (document.getElementById('ulist').children.length === 1) {
            document.getElementById('incomplete-tasks').innerHTML = "";
        }
        tickImage.setAttribute('class', 'fa fa-check-circle invert');
        tickImage.setAttribute('aria-hidden', 'true');
        imageChild.setAttribute('src', 'images/dicon.png');
        imageChild.setAttribute('class', 'image');
        buttonDiv.setAttribute('class', 'buttons');
        listInnertextField.setAttribute('type', 'text');
        listInnertextField.value = childArray[1].value;
        // console.log(tempText);
        /* ********************************* heading ************************************************* */
        if (heading.innerHTML === "") {
            heading.innerHTML = "Completed Tasks"
        }
        buttonDiv.appendChild(tickImage);
        buttonDiv.appendChild(imageChild);
        listItem.appendChild(buttonDiv);
        listItem.appendChild(listInnertextField);
        parent.appendChild(listItem);
        /* ******************************* cancel icon mouseOver event ************************************* */
        imageChild.addEventListener('mouseout', function () {
            console.log("i am involked")
            imageChild.setAttribute('id', 'whenMouseoutFromImage');
            this.className += " new";

        });

        imageChild.addEventListener('click', function () {
            var div = this.parentNode;
            var list = div.parentNode;
            list.parentNode.removeChild(list);
            console.log("blow here")
            console.log(document.getElementById('new-one').innerHTML);
            if (document.getElementById('new-one').children.length === 0) {
                console.log(document.getElementById('new-one').innerHTML);
                document.getElementById('complete-tasks').innerHTML = "";
            }
        })

    });
    /* ******************************* when click tick icon delete form incomplete task ************************************* */
    tickImage.addEventListener('click', function () {
        var div = this.parentNode;
        var list = div.parentNode;
        list.parentNode.removeChild(list);

    });





}
function deleteList() {
    var parent = document.getElementById('ulist'),
        parent2 = document.getElementById('new-one'),
        heading1 = document.getElementById("complete-tasks"),
        heading2 = document.getElementById("incomplete-tasks");
    console.log(parent);
    parent.innerHTML = "";
    parent2.innerHTML = "";
    heading1.innerHTML = "";
    heading2.innerHTML = "";
}
 var tempvariable;
 var textField
function updateTodo(parentNd){

    var updateBtn = document.getElementById('update-btn')
   textField = document.getElementById('textField');
    tempvariable = parentNd;
    textField.value = parentNd.nextSibling.value;
    updateBtn.style.visibility = "visible";
    updateBtn.setAttribute('onClick', 'update()')
    
    
}

function update(){
    console.log(tempvariable.nextSibling);
    tempvariable.nextSibling.value = textField.value;
    textField.value = "";
    document.getElementById('update-btn').style.visibility = "hidden";
}