class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let currentNode=this.root
        for(let i=0;i<word.length;i++){
            const charToInsert=word[i]
            if(!currentNode.children[charToInsert]){
                currentNode.children[charToInsert]=new TrieNode()
            }
            currentNode=currentNode.children[charToInsert]
        }
        currentNode.isEndOfWord=true
    }

    search(word){
        let currentNode=this.root
        for(let i=0;i<word.length;i++){
            const charToFind=word[i]
            if(!currentNode.children[charToFind]){
                return false
            }
            currentNode=currentNode.children[charToFind]
        }
        return currentNode.isEndOfWord
    }

    startsWithPrefix(prefix){
        let currentNode=this.root
        for(let i=0;i<prefix.length;i++){
            const charStartWith=prefix[i]
            if(!currentNode.children[charStartWith]){
                return false
            }
            currentNode=currentNode.children[charStartWith]
        }
        return true
    }
}

const trie=new Trie()
trie.insert("apple")
trie.insert("orange")
trie.insert("grape")
trie.insert("mango")
trie.insert("lemon")
trie.insert("banana")
console.log(trie.search("apple"))
console.log(trie.search("mango"))
console.log(trie.startsWithPrefix("ap"))
console.log(trie.startsWithPrefix("ge"))
