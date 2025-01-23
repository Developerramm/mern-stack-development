#include <iostream>
#include <vector>
using namespace std;

int main(){

    cout << "cpp stl vector " << endl;

    vector<int> marks(5,-1);

    cout << *(marks.begin()) << endl;

    cout << *(marks.end()-1) << endl;

    vector <int> miles(10);
    miles.push_back(10);
    miles.push_back(20);
    miles.push_back(30);
    miles.push_back(40);
    miles.push_back(50);

    cout << miles.size() << endl;

    miles.pop_back();
    cout << miles.size() << endl;
    cout << miles.front() << endl;
    cout << miles.back() << endl;

    if(miles.empty())
        cout << "Vector is empty " << endl;
    else
        cout << "Vector is not empty " << endl;

    miles[0] = 100;
    cout << miles[0] << endl;        

    vector<int> age;
    age[0] = 100;
    cout << age[0] << endl;

    cout << miles.at(5) << endl;

    cout << miles.max_size() << endl;

    vector<int> v;
    cout << v.max_size() << endl;
    v.insert(v.begin(),50);
    cout << v.at(0) << endl;

    v.erase(v.begin(),v.end());
    cout << v.size() << endl;

    vector<int> distances(15,0);


    return 0;
}