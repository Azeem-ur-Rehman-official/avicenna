
function CheckLoginStatus() {
    const loginStatus = localStorage.getItem('login');
    const expiryTime = localStorage.getItem('expir');
  
    if (!loginStatus || !expiryTime) {
      // No login status or expiry time set, treat as logged out
      return false;
    }
  
    const now = new Date().getTime();
  
    // Check if the current time is greater than the expiry time
    if (now > expiryTime) {
      // If expired, remove login status and expiry from localStorage
      localStorage.removeItem('login');
      localStorage.removeItem('expir');
      return false;
    }
  
    // If not expired, return true
    return true;
  }
  
  // Example usage to check if user is logged in
 
  

export default CheckLoginStatus