// Create a new utility file for logging

export const logOnce = (message: string) => {
  if (typeof window !== 'undefined') {
    const hasLogged = localStorage.getItem('hasLoggedMessage');
    
    if (!hasLogged) {
      console.log(message);
      localStorage.setItem('hasLoggedMessage', 'true');
    }
  }
}; 