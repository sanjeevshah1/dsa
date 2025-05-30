class ListNode{
    data: number;
    next: ListNode | null;
    constructor(data: number, next: ListNode | null = null){
        this.data = data;
        this.next = next;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(3,node1);
// console.log(node1)
// console.log(node2)

const arr = [1,2,3,4,5,0];
const convertToLL = (arr: number[]) : ListNode => {
    let head = new ListNode(arr[0]);
    let mover = head;
    for(let i = 1; i < arr.length; i++){
        let temp = new ListNode(arr[i]);
        mover.next = temp
        mover = temp
    }
    return head;
}

const traverseLL = (head : ListNode) : void => {
    let temp : ListNode | null = head;
    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }
}

traverseLL(convertToLL(arr))

const countLengthOfLL = (head : ListNode) : number => {
    let count = 0;
    let temp: ListNode | null = head;
    while(temp){
        count++;
        temp = temp.next
    }
    return count;
}
const lengthOfLL = countLengthOfLL(convertToLL(arr));
console.log(lengthOfLL)

const searchItem = (head: ListNode, item: number) : Boolean => {
    let temp: ListNode | null = head;
    while(temp){
        if(temp.data === item) return true;
        temp = temp.next;
    }
    return false;
}
console.log(searchItem(convertToLL(arr),9))