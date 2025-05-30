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
int main() {
    cout << "Learning linked list"<<endl;
    vector<int> arr = {1,2,3,4,5};
    traverseLL(convertArrToLL(arr));
    return 0;
}