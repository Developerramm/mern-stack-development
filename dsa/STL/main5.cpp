#include <iostream>
#include <deque>
using namespace std;

int main()
{

    cout << "cpp stl deque" << endl;

    // creation
    deque<int> dq;
    // insertion
    dq.push_back(10);

    dq.push_back(20);
    dq.push_back(30);

    dq.push_front(100);
    dq.push_front(200);
    dq.push_front(300);

    cout << dq[0] << endl;
    cout << dq.at(5) << endl;

    cout << "traverse through iterator " << endl;
    deque<int>::iterator it = dq.begin();

    while (it != dq.end())
    {
        cout << *it << " ";
        it++;
    }

    cout << dq.size() << endl;
    dq.pop_back();

    dq.pop_front();

    cout << "Size of dq is " << dq.size() << endl;

    while (dq.size() != 0)
    {
        cout << dq.front() << " ";
        dq.pop_front();
    }

    cout << endl;

    if (dq.empty())
    {
        cout << "dq is empty " << endl;
    }
    else
    {
        cout << "dq is not empty " << endl;
    }

    return 0;
}