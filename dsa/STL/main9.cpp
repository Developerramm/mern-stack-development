#include <iostream>
#include <unordered_set>
#include <set>

using namespace std;

int main()
{

    set<int> st;

    st.insert(10);
    st.insert(15);
    st.insert(8);
    st.insert(4);

    cout << "size of set " << st.size() << endl;

    // traverse on set
    set<int>::iterator it = st.begin();

    while (it != st.end())
    {
        cout << *it << " ";
        it++;
    }

    cout << endl;

    unordered_set<int> s;
    s.insert(3);
    s.insert(3);
    s.insert(6);
    s.insert(2);
    s.insert(5);

    unordered_set<int>::iterator it1 = s.begin();

    while (it1 != s.end())
    {
        cout << *it1 << " ";
        it1++;
    }

    cout << endl;
    if (s.empty())
    {
        cout << "Set is empty " << endl;
    }
    else
    {
        cout << "set is not empty " << endl;
    }
    cout << s.size() << endl;

    return 0;
}