import Link from "next/link";

const AboutUs = () => {
    return (
      <div className="bg-[#1F1F22] shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="flex flex-col items-center justify-center mb-4">
      
          <h1 className="transition duration-700 pt-4 text-white text-3xl font-semibold">
            About Us
          </h1>
          <img
            src="data:image/jpeg;base64,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" // Replace with the actual image path
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

Welcome to Blogeey, your ultimate destination for a diverse range of captivating content spanning the realms of Web Technology, Sports, World Affairs, ChatGPT, and Astronomy. Our mission is to curate insightful articles that cater to tech enthusiasts, sports fanatics, global affairs followers, curious minds exploring AI like ChatGPT, and stargazers seeking celestial wonders.<br/><br/>

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
  