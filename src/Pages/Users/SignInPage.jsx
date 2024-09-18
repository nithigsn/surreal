
export default function SignInPage() {
    return (

        <div className="w-full h-[70vh] bg-gray flex justify-center items-center  z-20 ">

            <div className="flex flex-col items-center h-[60vh] w-full ">



                <form className="form_container flex flex-col items-center gap-2 w-[400px] h-[450px] bg-[#ffffff] rounded-md p-4 box-sha" >

                    <h2 className="text-center mt-4">Login to your account</h2>
                    <p className="text-center">Get started with our app and enjoy the experience.</p>

                    <div className="flex flex-col gap-3 w-full  justify-center items-center mt-5 ">
                        
                        <input type="text" className="p-1 signinmail border-[1px] border-black rounded-sm w-[250px] placeholder:text-sm " placeholder="Enter Your Email"></input>
                        <input type="text" className="p-1 signinmail border-[1px] border-black rounded-sm w-[250px] placeholder:text-sm " placeholder="Enter Your Password"></input>

                    </div>
                    
                    <button className="mt-9 h-10 w-32 bg-gray-50 rounded-xl box-sha ">Sign In</button>


                </form>
















            </div>







        </div>


    );
}