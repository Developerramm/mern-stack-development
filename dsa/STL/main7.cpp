#include <iostream>
#include <queue>
using namespace std;

int main()
{

    cout << "min heap using priority queue " << endl;

    priority_queue<int, vector<int>, greater<int>> pq;
    // min heap using priority queue
    pq.push(100);
    pq.push(50);
    pq.push(75);
    pq.push(500);

    cout << "size of pq is " << pq.size() << endl;

    cout << "minimum element is " << pq.top() << endl;

    while (!pq.empty())
    {
        cout << pq.top() << " ";
        pq.pop();
    }

    return 0;
}