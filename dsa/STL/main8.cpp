#include <iostream>
#include <map>
#include <unordered_map>

using namespace std;

int main()
{

    cout << "Map container in cpp stl " << endl;

    // creation of map
    unordered_map<string, string> table;

    // insertion
    table["in"] = "India";
    table.insert(make_pair("en", "England"));

    pair<string, string> p;
    p.first = "br";
    p.second = "Brazil";
    table.insert(p);

    if (table.find("in") != table.end())
    {
        cout << "key found " << endl;
    }
    else
    {
        cout << "Key not found " << endl;
    }

    cout << table.at("in") << endl;
    table.at("in") = "Bihar";
    cout << table.at("in") << endl;

    cout << table.count("in") << endl;

    unordered_map<string, string>::iterator it = table.begin();

    while (it != table.end())
    {
        pair<string, string> p = *it;
        cout << p.first << " -> " << p.second << endl;
        it++;
    }

    cout << "size of map " << table.size() << endl;
    table.clear();

    cout << "size of map " << table.size() << endl;

    if (table.empty())
    {
        cout << "map is empty " << endl;
    }

    return 0;
}