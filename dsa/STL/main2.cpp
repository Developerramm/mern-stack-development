#include <iostream>
#include <list>
using namespace std;

int main()
{

    cout << "List data structure in cpp " << endl;

    // creation of  list
    list<int> myList;

    // insertion
    myList.push_back(10);
    // 10
    myList.push_back(20);
    // 10 -> 20
    myList.push_back(30);
    // 10->20->30
    myList.push_back(40);
    // 10->20->30->40

    myList.push_front(4);
    // 4->10->20->30->40
    myList.push_front(5);
    // 5->4->10->20->30->40
    myList.push_front(6);
    // 6->5->4->10->20->30->40
    myList.push_front(7);
    // 7->6->5->4->10->20->30->40

    list<int>::iterator it = myList.begin();

    while (it != myList.end())
    {
        cout << *it << "->";
        it++;
    }
    cout << endl;

    myList.remove(5);

    myList.insert(myList.begin(),100);

    list<int>::iterator it1 = myList.begin();
    while (it1 != myList.end())
    {
        cout << *it1 << "->";
        it1++;
    }
    cout << endl;

    cout << myList.size() << endl;

    cout << myList.front() << endl;
    cout << myList.back() << endl;
    myList.pop_back();
    myList.pop_front();
    cout << myList.front() << endl;
    cout << myList.back() << endl;

    if (myList.empty())
    {
        cout << "List is empty " << endl;
    }
    else
    {
        cout << "list is not empty" << endl;
    }

    cout << myList.size() << endl;
    myList.erase(myList.begin(),myList.end());
    cout << myList.size() << endl;

    return 0;
}