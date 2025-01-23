#include <iostream>
#include <queue>

using namespace std;

int main()
{

    cout << "Queue data structure in cpp " << endl;

    // creation of queue
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);

    cout << q.size() << endl;
    cout << q.front() << endl;
    cout << q.back() << endl;
    q.pop();
    cout << q.size() << endl;
    cout << q.front() << endl;

    queue<int> p;
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);


    q.swap(p);
    cout << q.front() << endl;
    

    return 0;
}