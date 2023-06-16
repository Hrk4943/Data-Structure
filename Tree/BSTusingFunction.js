function createNode(value){
    value=value
    left=null
    right=null
    return{value,left,right}
}

function insertNode(root,value){
    if(root===null){
        return createNode(value)
    }
    if(value < root.value){
        root.left=insertNode(root.left,value)
    } else if(value > root.value){
        root.right=insertNode(root.right,value)
    }
    return root
}

function findMinValue(root){
    while(root.left!==null){
        node=node.left
    }
    return root
}

function deleteNode(root,target){
    if(root === null){
        return root
    }
    if(target < root.value){
        root.left =deleteNode(root.left,target)
    }else if(target> root.value){
        root.right=deleteNode(root.right,target)
    } else{
        //Case 1: Node has no children or only one child
        if(root.left===null){
            return root.right
        } else if(root.right===null){
            return root.left
        }
        //Case 2 : Node has two children
        let minValue=findMinValue(root.right)
        root.value=minValue.value
        root.right=deleteNode(root.right,minValue.value)
    }
    return root
}

function closestValue(root,target){
    let closestValue=root.value
    let minDifference=Math.abs(root.value-target)
    while(root!==null){
        const currentDiff=Math.abs(root.value-target)
        if(currentDiff<minDifference){
            minDifference=currentDiff
            closestValue=root.value
        }
        if(target===root.value){
            return root.value
        }else if(target<root.value){
            root=root.left
        } else {
            root=root.right
        }
    }
    return closestValue
}

let bst =null
bst=insertNode(bst,10)
bst=insertNode(bst,5)
bst=insertNode(bst,15)
bst=insertNode(bst,20)
bst=insertNode(bst,14)
bst=insertNode(bst,8)
bst=insertNode(bst,3)
console.log(bst)
bst=deleteNode(bst,14)
console.log(bst)
console.log("Closest of -1=",closestValue(bst,-1))
