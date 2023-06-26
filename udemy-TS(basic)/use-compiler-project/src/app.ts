const button = document.querySelector('button')!;

function clickHandler (message: string) {
    console.log('clicked!!' + message);
    
}

// app.ts
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You'r welcome"));
}