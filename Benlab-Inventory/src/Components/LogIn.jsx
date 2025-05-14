import '../App.css';
function LogIn(){
    return(
        <div class="login flex h-screen gap-5 bg-gray-100">
            <div class="about-Image relative w-fill my-25 ml-25">
                <img src="/Microsoft-Lab-Equipment(1).png" alt="Lab-Equipment"></img>
                <div class="overlay absolute inset-0 opacity-30 pointer-events-none rounded-lg flex">
                    <h1 class="text-black text-5xl font-extrabold text-center mt-10">BenLab Inventory</h1>
                </div>
                <div class="flex flex-col items-center justify-between">
                    <h2 class="text-black text-5xl font-bold text-center px-5">Welcome Back!</h2>
                    <p class="text-center px-5 mt-5">The stock didn’t count itself — good thing you're here to keep things in order!</p>
                    <button class="border-2 border-dotted mt-5 p-3 text-center rounded-lg text-white">Sign In</button>
                </div>
            </div>

            {/*Log In form*/}
            <form class="about-content rounded-lg w-full my-25 mr-25 bg-white flex flex-col relative">
                <div class="absolute top-0 left-0">
                    <img class="h-30 w-30"src="/Benlab.png"></img>
                </div>
                <div class="mx-50 mt-5">
                    <h1 class="text-center font-bold text-3xl mb-2">Create an account</h1>
                    <p class="text-center text-base">Let's get Started</p>
                </div>
                <div class="flex flex-col mx-50">
                    <label for="name">Name<span class="text-red-500 ml-px">*</span></label>
                    <input class="bg-gray-100 rounded-lg my-2 h-10" type="type" id="name" name="name" required placeholder="Eg. John Doe"></input>
                    <label for="email">Email<span class="text-red-500 ml-px">*</span></label>
                    <input class="bg-gray-100 rounded-lg my-2 h-10" type="email" id="email" name="email" required placeholder="you@gmail.com"></input>
                    <label for="password">Password<span class="text-red-500 ml-px">*</span></label>
                    <input class="bg-gray-100  rounded-lg my-2 h-10" type="password" id="password" name="password" required></input>
                    <label for="confirm-password">Confirm Password<span class="text-red-500 ml-px">*</span></label>
                    <input class="bg-gray-100  rounded-lg my-2 h-10" type="password" id="confirm-password" name="password" required></input>
                    <div class="flex justify-end w-full">
                        <span class="text-red-500"><a href="#" class="no-underline">Forgot password?</a></span>
                    </div>
                    <button class="create-account-button mt-2 p-2 text-center rounded-lg text-white">Create Account</button>
                    <button class="sign-in-button mt-2 p-2 text-center rounded-lg text-white">Sign In</button>
                </div>
                <div class="mt-3 mx-50 flex flex-col justify-between items-center">
                    <div class="inline-flex">
                        <hr></hr>
                        <span>Or continue with</span>
                        <hr></hr>
                    </div>
                    <button class="google-button bg-gray-100 inline-flex items-center mt-2 p-3 rounded-lg text-black font-bold"><img class="w-6 h-6 mr-2" src="/icons8-google-48.png"></img>Google</button>
                </div>
            </form>
        </div>
    )
}
export default LogIn;