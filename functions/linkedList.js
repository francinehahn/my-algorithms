class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.size = 0
    }

    getSize () {
        return this.size
    }

    addValue (value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.size++
    }

    deleteValue (value) {
        let current = this.head
        let previous = null

        while (current) {
            if (current.value === value) {
                if (!previous) {
                    this.head = current.next
                } else {
                    previous.next = current.next
                }

                this.size--
                return true
            }
            previous = current
            current = current.next
        }

        return false
    }

    print () {
        let current = this.head

        if (current) {
            while (current) {
                console.log(current.value)
                current = current.next
            }
        } else {
            console.log("Lista vazia")
        }
    }
}

const linkedList = new LinkedList()
console.log("Tamanho da lista:", linkedList.getSize())
linkedList.print()
linkedList.addValue("5")
linkedList.addValue(10)
linkedList.addValue("Olá mundo!")
linkedList.addValue(25)
linkedList.addValue(0)
linkedList.print()
linkedList.addValue(80)
console.log("Tamanho da lista:", linkedList.getSize())
linkedList.deleteValue(25)
linkedList.print()
console.log("Tamanho da lista:", linkedList.getSize())