import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col text-center p-14 bg-gray-400">
        <h1 className="text-6xl font-mono font-bold text-amber-500 underline">
          *ShadCN-UI*
        </h1><br /><br />
        <div className="relative w-96 h-72 ml-[380px]">
          <Image
            src="/images/image1.jpg"
            alt="image 1"
            layout="fill" 
            objectFit="cover"
          />
        </div><br /><br />
        <p className="text-2xl font-semibold">
        ShadCN is a UI library that provides built-in components that focus on "Radix-UI" && Tailwind CSS.
        It is not a components library but a Collection of re-usable Components that you can use in Your Project's.
        </p>
        <br /><br /><br /><br /><br /><br />
        <h1 className=" text-3xl font-bold mr-[600px] font-mono">Download Links ShadCN-UI Own Your Project :</h1>
       <br /> <h2 className="relative text-2xl font-bold mr-[1000px] text-blue-600 font-mono underline">Links: </h2> <br />

         
        <div className="relative h-96">
          <Image
            src="/images/linksimg.jpg"
            alt="Links Image"
            layout="fill" 
            objectFit="cover"
          />
        </div>

<br /><br /><br /><br /><br />
    <h2 className="text-3xl underline font-mono font-semibold  text-amber-500 mr-[900px]">"ShadCN-UI"</h2><br />
<p className="text-xl font-semibold">It provides a set of Flexibility Components that make it easy for Developers to implement them in their own Projects. We also Customized Of ShadCN Re-usable Components with the help of Tailwind CSS. This Library Also saves Uptime</p><br /><br />
<br /><br />
<h2 className="text-3xl underline font-mono font-bold  mr-[500px]">*-How To Use ShadCN-UI Components ?</h2><br /><br />
<p className="text-xl mr-[390px] font-semibold"> *First of all, you have to select one of the components and run its command</p><br />
<p className="text-blue-500 text-xl font-mono font-semibold mr-[920px]">For Example :</p>
<br />
<div className="relative w-[700px] h-40 mr-[359px]">
          <Image
            src="/images/link1.jpg"
            alt="Link 1"
            layout="fill" 
            objectFit="cover"
          />
        </div><br /><br /><br /><br />
        <p className="text-xl font-semibold"> *But you must have written a Code below which you will import in your Components and Copy and Paste the code after return, then your components will Run.</p><br />
<p className="text-blue-500 text-xl font-mono font-semibold mr-[920px]">For Example :</p><br />
<div className="relative w-[500px] h-[400px] mr-[359px]">
          <Image
            src="/images/link2.jpg"
            alt="link 2"
            layout="fill" 
            objectFit="cover"
          />
        </div>
        <br />
        <p className="font-mono text-2xl text-blue-600 font-semibold">Your components will run on Var and you will also use to do Custom Styling</p>
      </main>
      <Footer/>
    </>
  );
}
