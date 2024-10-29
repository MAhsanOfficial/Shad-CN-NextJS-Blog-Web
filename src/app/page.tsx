import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col text-center p-6 sm:p-10 lg:p-14 bg-gray-300">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-purple-500 underline">
          *ShadCN-UI*
        </h1>
        <div className="mt-6 mb-10 flex justify-center">
          <div className="relative w-full max-w-sm sm:w-96 h-48 sm:h-72">
            <Image
              src="/images/image1.jpg"
              alt="image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl font-semibold mx-auto max-w-4xl">
          ShadCN is a UI library that provides built-in components that focus
          on "Radix-UI" && Tailwind CSS. It is not a components library but a
          Collection of re-usable Components that you can use in Your Project's.
        </p>

        <div className="mt-16 text-left mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono">
            Download Links ShadCN-UI Own Your Project:
          </h2>
          <h3 className="text-xl text-blue-600 font-mono underline mt-4">
            Links:
          </h3>
        </div>

        <div className="relative w-full max-w-lg h-48 sm:h-60 mx-auto mt-8">
          <Image
            src="/images/linksimg.jpg"
            alt="Links Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="mt-16 text-left mx-auto max-w-4xl">
          <h2 className="text-3xl underline font-mono font-semibold text-red-500">
            "ShadCN-UI"
          </h2>
          <p className="text-lg sm:text-xl font-semibold mt-4">
            It provides a set of flexible components that make it easy for
            developers to implement them in their own projects. The library also
            offers customization options through Tailwind CSS, which can help
            save development time.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold font-mono mt-12">
            *-How To Use ShadCN-UI Components?
          </h2>
          <p className="text-lg sm:text-xl mt-4">
            First of all, you have to select one of the components and run its
            command.
          </p>

          <p className="text-blue-500 text-lg sm:text-xl font-mono font-semibold mt-4">
            For Example:
          </p>
          <div className="relative w-full max-w-3xl h-36 sm:h-40 mt-4">
            <Image
              src="/images/link1.jpg"
              alt="Link 1"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <p className="text-lg sm:text-xl mt-8">
            Then, you must include the component in your code, import it into
            your project, and add it within your layout.
          </p>

          <p className="text-blue-500 text-lg sm:text-xl font-mono font-semibold mt-4">
            For Example:
          </p>
          <div className="relative w-full max-w-md h-64 sm:h-[400px] mt-4">
            <Image
              src="/images/link2.jpg"
              alt="link 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="font-mono text-lg sm:text-2xl text-blue-600 font-semibold mt-8">
            Your components will run on variables, and you can apply custom
            styling as needed.
          </p>
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-green-800 underline">
            *Radix-UI*
          </h1>
          <div className="flex justify-center mt-6 mb-10">
            <div className="relative w-full max-w-sm sm:w-96 h-48 sm:h-72">
              <Image
                src="/images/radix.jpg"
                alt="Radix UI Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl font-semibold mx-auto max-w-4xl">
            Radix-UI is a library where we get unstyled and accessible
            components. It offers functionality for React.js, and Shadcn-UI is
            built on top of Radix-UI.
          </p>

          <div className="mt-16 text-left mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">
              Download Links Radix-UI for Your Project:
            </h2>
            <h3 className="text-xl text-blue-600 font-mono underline mt-4">
              Links:
            </h3>
          </div>

          <div className="relative w-full max-w-lg h-48 sm:h-60 mx-auto mt-8">
            <Image
              src="/images/install1.jpg"
              alt="Links Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="mt-16 text-left mx-auto max-w-4xl">
            <h2 className="text-3xl underline font-mono font-semibold text-red-500">
              "Radix-UI"
            </h2>
            <p className="text-lg sm:text-xl font-semibold mt-4">
              Radix-UI is primarily made for React.js but is also compatible
              with Next.js. Components are customizable and accessible, ideal
              for building scalable UI.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-mono mt-12">
              *-How To Use Radix-UI Components?
            </h2>
            <p className="text-lg sm:text-xl mt-4">
              First, select one of the components and run its installation
              command.
            </p>

            <p className="text-blue-500 text-lg sm:text-xl font-mono font-semibold mt-4">
              For Example:
            </p>
            <div className="relative w-full max-w-3xl h-36 sm:h-40 mt-4">
              <Image
                src="/images/install1.jpg"
                alt="Link 1"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <p className="text-lg sm:text-xl mt-8">
              Then, import the component and include it in your layout to
              display it.
            </p>

            <p className="text-blue-500 text-lg sm:text-xl font-mono font-semibold mt-4">
              For Example:
            </p>
            <div className="relative w-full max-w-3xl h-64 sm:h-[400px] mt-4">
              <Image
                src="/images/install2.jpg"
                alt="link 2"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <p className="font-mono text-lg sm:text-2xl text-blue-600 font-semibold mt-8">
              Use variables and custom styling for Radix-UI components.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
