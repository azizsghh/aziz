var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) 
{
    if ((names[name][0]=="j")||(names[name][0]=="J"))
    {
        saygoodbye(names[name]) ; 
    }
    else
    {
        sayhello(names[name]) ; 

    };
};