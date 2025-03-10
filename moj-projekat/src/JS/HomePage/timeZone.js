

 export const clock = () => {
    function updateLocalTime() {
        const now = new Date();
        // Formatiranje vremena
        const options = {
          hour: '2-digit',
          minute: '2-digit',
          
          timeZone: 'Asia/Bangkok',
          hour12: true
        };
        const localTime = new Intl.DateTimeFormat('en-US', options).format(now);
        document.getElementById('local-time').textContent = localTime;
      }
    
     
      updateLocalTime();
    
     
      setInterval(updateLocalTime, 60000);
 }
 