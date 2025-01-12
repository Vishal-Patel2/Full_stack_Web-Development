const tl = gsap.timeline()
const button = document.querySelector('.container button')
let token = "******************"
let value = document.querySelector(".container input")
const image = document.querySelector(".img img")
let p = document.querySelector(".container p")
let downloadbtn = document.querySelector(".download")

tl.from(".container h1", {
    y: -50,
    delay: 0.5,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out",
})

tl.from(".container input", {
    width: 0,
    duration: 0.8,
})

gsap.from(".container button", {
    y: 400,
    rotate: 360,
    duration: 1,
    opacity: 0
})

async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
		{
			headers: {
				Authorization: `Bearer ${token}`
			},
			method: "POST",
			body: JSON.stringify({"inputs":value.value}),
            options:{
                "wait_for_model":true
            }
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click',async function() {
    p.style.display = "block"
    if(!value.value.trim()){
        alert("Enter a Prompt")
        return
    }
    query().then((response) => {
        let url = URL.createObjectURL(response)
        image.src = url
        downloadbtn.style.display ="block"
        p.style.display = "none"
        console.log("image gnerated")
        downloadbtn.addEventListener("click",()=>{
            console.log(url)
            downloadbtn.href = url
            downloadbtn.download = "generated.png"
        })
    });
})







































// async function query() {
//     try {
//         console.log("Sending prompt:", value.value); // Debug log
        
//         const response = await fetch(
//             "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 method: "POST",
//                 body: JSON.stringify({
//                     "inputs": value.value,
//                     "options": {
//                         "wait_for_model": true
//                     }
//                 })
//             }
//         );

//         if (!response.ok) {
//             const errorText = await response.text();
//             console.log("Error response:", errorText);
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         return await response.blob();
//     } catch (error) {
//         throw error;
//     }
// }

// button.addEventListener('click', async function() {
//     if (!value.value.trim()) {
//         alert("Please enter a prompt");
//         return;
//     }

//     try {
//         const blob = await query();
//         const object = URL.createObjectURL(blob);
//         image.src = object;
//         console.log("Success! Image URL:", object);
//     } catch (error) {
//         console.log("Failed to generate image:", error);
//     }
// });
