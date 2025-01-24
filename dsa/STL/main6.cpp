#include <iostream>
#include <queue>

using namespace std;

int main()
{

    cout << "priority queue " << endl;

    // creation
    priority_queue<int> pq;
    // max heap create ho raha hai
    pq.push(10);
    pq.push(20);
    pq.push(30);
    pq.push(40);

    cout << "Size of priority queue is " << pq.size() << endl;
    cout << "Top element is " << pq.top() << endl;
    pq.pop();
    cout << "size of pq is " << pq.size() << endl;

    if (pq.empty())
    {
        cout << "priority queue is empty " << endl;
    }
    else
    {
        cout << "priority queue is not empty " << endl;
    }

    while (!pq.empty())
    {
        cout << pq.top() << " ";
        pq.pop();
    }

    return 0;
}