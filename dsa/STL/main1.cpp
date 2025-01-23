#include <iostream>
#include <vector>

using namespace std;

int main(){
    cout << "Hello world " << endl;
    vector<int> v{10,20,30,40,50};

    vector<int>::iterator it = v.begin();

    while(it != v.end()){
        cout << *(it) << " ";
        it++;
    }
    
    cout << endl;
    vector<vector<int>> arr(5,vector<int>(5,0));

    int row = arr.size();
    int col = arr[0].size();

    for(int i = 0; i<row; i++){
        for(int j = 0; j <col; j++){
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }


    return 0;
}