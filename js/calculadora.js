document.body.onload = nameDisplayCheck;

let result = "";
let aResult = [];

function getById(id){
 
    const list = document.getElementById(id);
    if(aResult.length == 0){
        localStorage.removeItem("item");
        localStorage.clear();
    }

    for(let i = 0; i < aResult.length; i++){
        if(aResult[i] == id){
            aResult.splice(i, 1);
            i--;
            list.remove();        
            localStorage.setItem("item", JSON.stringify(aResult))
        }
    }
}

function btn(){
    document.calc.txt.value=eval(document.calc.txt.value);
    document.getElementById("txt").value = document.getElementById("txt").value;
    result = document.getElementById("txt").value;
    aResult.push(result);
    localStorage.setItem("item", JSON.stringify(aResult));      
    location.reload();
}

function nameDisplayCheck(){
    if(localStorage.getItem("item") != null){
        
        let a = JSON.parse(localStorage.getItem("item")).toString();
        let v = a.split(",");

        let items = "";
        for(let i = 0; i < v.length; i++){
    
            items += "<div class='content' id='"+v[i]+"'>";
            items +=    "<div class='result' id='"+v[i]+"'>";
            items +=        "<label class='resultado-final' id='"+i+"' for=''>-> "+ v[i] +"</label>";
            items +=        "<input type='button' id='"+v[i]+"' class='submit' onclick='getById("+v[i]+")' value='X'>";
            items +=    "</div>";
            items += "</div><br>";
                
            aResult.push(v[i]);
        }  
        if(aResult.length != 0 || aResult.length != ""){         
            document.getElementById("res").innerHTML = items;  
        }
    }
}



