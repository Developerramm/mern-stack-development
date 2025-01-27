#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

void printDouble(int a){
    cout << 2 * a << endl;
}

int main(){

    vector<int> arr(5);

    arr.push_back(10);
    arr.push_back(20);
    arr.push_back(30);
    arr.push_back(40);
    arr.push_back(50);

    

    // for_each(arr.begin(),arr.end(),printDouble);

    // auto it = find(arr.begin(),arr.end(),400);
    // cout << *it << endl;



    return 0;
}