import Link from "next/link";

const AboutUs = () => {
    return (
      <div className="bg-[#1F1F22] shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="flex flex-col items-center justify-center mb-4">
      
          <h1 className="transition duration-700 pt-4 text-white text-3xl font-semibold">
            About Us
          </h1>
          <img
            src="https://api.logo.com/api/v2/images?logo=logo_b34edc7e-bfce-45e1-b75e-130eef622c85&format=webp&margins=0&quality=60&width=500&background=transparent&u=1692119254" // Replace with the actual image path
            alt="About Us"
            className="h-40 w-40 mr-2 rounded-full object-cover p-4 mt-4"
          />
        </div>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="font-medium text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-[#877EFF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Replace this with your own SVG path */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">Established in 2023</span>
          </div>
        </div>
        <p className="text-left text-lg text-gray-100 font-normal px-4 lg:px-20 mb-8">

Welcome to Blogeey, your ultimate destination for a diverse range of captivating content spanning the realms of Web Technology, Ai Descoveries, Current Blog Flashes, ChatGPT, and FutureScape. Our mission is to curate insightful articles that cater to tech enthusiasts, sports fanatics, global affairs followers, curious minds exploring AI like ChatGPT, and stargazers seeking celestial wonders.<br/><br/>

At Blogeey, we're passionate about bringing you the latest updates in web technology trends, offering in-depth analyses of sports events, providing thought-provoking insights into world affairs, unraveling the fascinating capabilities of ChatGPT, and unraveling the mysteries of the cosmos through our astronomy explorations.<br/><br/>

Our dedicated team of writers and experts is committed to delivering high-quality, well-researched, and engaging content that informs, entertains, and sparks your curiosity. Whether you're looking to expand your knowledge, keep up with the latest tech advancements, stay updated on global events, explore the potential of AI like ChatGPT, or gaze at the wonders of the night sky, Blogeey is here to be your go-to source.<br/><br/>

Join us on this exciting journey through the dynamic intersections of technology, sports, geopolitics, AI, and the cosmos. We're thrilled to have you as part of the Blogeey community!<br/><br/>

Sincerely,<br/>
The Blogeey Team
        </p>
        <div className="text-center">
         <Link href="/contact-us/contact" >
         <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#877EFF] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Contact Us for any feedback
          </span>
         </Link>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  