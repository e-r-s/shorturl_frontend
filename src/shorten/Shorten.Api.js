export const api = {

     getHtml: async (url)=>{
          let response = await fetch(url, {
               method: 'GET',    
               headers: { 'Access-Control-Allow-Origin': '*'  }
          });
          if(response.status===200){
               let data = await response.text();
               if(data===null){
                   return null;
               }
               return data;
          }
          else{
               return null;
          }
       },
    
    get: async (url)=>{
       let response = await fetch(url);
       if(response.status===200){
            let data = await response.json();
            if(data===null){
                return null;
            }
            return data;
       }
       else{
            return null;
       }
    },
 
    post: async (url, data)=>{
        let response = await fetch(url,{ 
            method: 'POST',    
            headers: { 'Content-Type': 'application/json'  },    
            body: JSON.stringify(data)  
          });
        if(response.status===200){
             let data = await response.json();
             if(data===null ){
                 return null;
             }
             return data;
        }
        else{
             return null;
        }
     },


     forgetPassword: async (name, email)=>{ 
         
          if(email && email.trim().length>10 && email.indexOf('@')>-1 && name && name.length>1 ){
             var success = await api.post(window.VARS.apiUrl+'/forget', {name, email});
             if(success){
                 return true;
             }
          }
          return false;
        },

     checkLogin: async ()=>{ 
          var userHash = localStorage["userhash"];
          var userData = localStorage["userdata"];
          if(userHash){
             var userData = api.post(window.VARS.apiUrl+'/checklogin', {userHash, userData});
             if(userData && userData.id){
                window.sns.user = userData;
                localStorage["userdata"] = userData;
                return userData;
             }
          }
          return false;
        },

     login: async (username, password)=>{ 
         
          if(username && username.trim().length>10 && username.indexOf('@')>-1 && password && password.length>5 ){
             var userData = await api.post(window.VARS.apiUrl+'/login', {username, password});
             if(userData && userData.id){
                window.sns.user = userData;
                localStorage["userhash"] = userData.hash;
                localStorage["userdata"] = userData;
                return userData;
             }
          }
          return false;
        },

     register: async (name, mobile, email, password)=>{ 
         
          if(  email && email.trim().length>10 && email.indexOf('@')>-1 && 
               password && password.trim().length>5 && 
               name && name.trim().length>1 && 
               mobile && mobile.trim().length>5
          ){
               var userData = await api.post(window.VARS.apiUrl+'/register', {name, mobile, email, password});
               if(userData && userData.id){
                    window.sns.user = userData;
                    localStorage["userhash"] = userData.hash;
                    localStorage["userdata"] = userData;
                    return userData;
               }
          }
          return false;
     },

}



