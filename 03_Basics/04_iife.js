// Immediately Invoke Function Expression (IIFE)

(function User() {
    console.log("user is LoogedIn");
})();


(
      (name)=>{
        console.log(`${name},Welcome`);
    }
)('madin');