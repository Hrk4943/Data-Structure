class HashTableCollision{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index=this.hash(key)
        // this.table[index]=value
        const arrayList=this.table[index]
        if(!arrayList){
            this.table[index]=[[key,value]]
        } else {
            const sameKeyAddItem=arrayList.find(item=> item[0]===key)
            if(sameKeyAddItem){
                sameKeyAddItem[1]=value
            } else {
                arrayList.push([key,value])
            }
        }
    }

    get(key){
        const index=this.hash(key)
        // console.log(this.table[index])
        const arrayList=this.table[index]
        if(arrayList){
            const sameKeyAddItem=arrayList.find(item=>item[0]===key)
            if(sameKeyAddItem){
                console.log(sameKeyAddItem[1])
            }
        }
        return undefined
    }

    remove(key){
        const index=this.hash(key)
        // this.table[index]=undefined
        const arrayList=this.table[index]
        if(arrayList){
            const sameKeyAddItem=arrayList.find(item=>item[0]===key)
            if(sameKeyAddItem){
                arrayList.splice(arrayList.indexOf(sameKeyAddItem),1)
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table=new HashTableCollision(50)
table.set("name","qwer")
table.set("age",25)
table.set("anme","qwerasddsa")
table.set("gae",20)
table.set("naem","vcvbc")
table.set("aeg",30)

table.display()
