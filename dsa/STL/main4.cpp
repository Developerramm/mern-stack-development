#include <iostream>
#include <stack>

using namespace std;

int main()
{

    cout << "stack data structure in cpp stl" << endl;

    stack<int> s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.push(40);
    s.push(50);

    cout << s.size() << endl;
    cout << s.empty() << endl;

    cout << s.top() << endl;
    // int element = s.pop();
    // cout << element << endl;
    s.pop();
    cout << s.size() << endl;
    cout << s.top() << endl;

    stack<int> p;
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);

    s.swap(p);

    while (s.size() != 0)
    {
        cout << s.top() << " ";
        s.pop();
    }

    if (s.empty())
    {
        cout << "Stack is empty " << endl;
    }
    else
    {
        cout << "Stack is not empty" << endl;
    }

    return 0;
}