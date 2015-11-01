package entity;

import com.google.gson.annotations.Expose;
import java.util.ArrayList;
import java.util.List;

public class User {
  
  private String password;  //Pleeeeease dont store me in plain text
  private String userName;
  List<String> roles = new ArrayList();

  public User(String userName, String password) {
    this.userName = userName;
    this.password = password;
  }
  
  public User(String userName, String password,List<String> roles) {
    this.userName = userName;
    this.password = password;
    this.roles = roles;
  }
  
  public void AddRole(String role){
    roles.add(role);
  }
    
  public List<String> getRoles() {
   return roles;
  }
 
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

    @Override
    public String toString() {
        return "User{" + "password=" + password + ", userName=" + userName + ", roles=" + roles + '}';
    }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }
  
  
 
          
}
