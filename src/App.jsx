import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pid, setPid] = useState(null);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    setPid(id);
    console.log(id);
  }, [window.location.search]);

  return (
   <div>
      <h2>welcome to Belle</h2>
      <h3>product id  : {pid}</h3>
   </div>
  )
}

export default App

{/* <div id="iframe-container"></div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    // Create an iframe element
    var iframe = document.createElement('iframe');
    
    // Set attributes for the iframe
    iframe.src = `/pages/getcustom/?id=${id}`; // Set the src attribute dynamically
    iframe.width = '100%'; // Set the width (adjust as needed)
    iframe.height = '400px'; // Set the height (adjust as needed)
    iframe.frameBorder = '0'; // Hide iframe border

    // Append the iframe to the div with id 'iframe-container'
    document.getElementById('iframe-container').appendChild(iframe);
  });
</script> */}
