#include <iostream>
#include <vector>
using namespace std;
class Node{
  public:
    int data;
    Node* next;
public:
Node(int data1, Node* next1){
    data = data1;
    next = next1;
}
Node(int data1){
    data = data1;
    next = nullptr;
}
};
Node* convertArrToLL(vector<int>& arr){
    Node* head = new Node(arr[0]);
    Node* mover = head;
    for(int i = 1; i <= arr.size() - 1; i++){
        Node* temp = new Node(arr[i]);
        mover->next = temp;
        mover = temp;
    }
    return head;
}
void traverseLL(Node* head){
    Node* temp = head;
    while(temp){
        cout << temp->data <<endl;
        temp = temp->next;
    }
}
int countLength(Node* head){
    Node* temp = head;
    int count = 0;
    while(temp){
        count++;
        temp = temp->next;
    }
    return count;
}

bool searchItem(Node* head, int item){
    Node* temp = head;
    while(temp){
        if(temp->data == item) return true;
        temp = temp->next;
    }
    return false;
}
int main() {
    cout << "Learning linked list"<<endl;
    vector<int> arr = {1,2,3,4,5};
    traverseLL(convertArrToLL(arr));
    int length = countLength(convertArrToLL(arr));
    cout<<"The length of LL is "<<length<<endl;
    cout<<"The item "<<3<<"present is in LL "<<searchItem(convertArrToLL(arr),9)<<endl;
    return 0;
}