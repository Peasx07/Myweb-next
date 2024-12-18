import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-[aliceblue] text-black">
      {/* หลัง */}
      <div className="fixed inset-0 backdrop-blur-[40px] z-[-1]"></div>

      {/* บน */}
      <div className="bg-[rgba(33,46,196,0.8)] flex items-center px-5 h-[60px]">
        <div className="flex items-center mr-5">
          <Image
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Peachoom/672cbcaa1c929.png"
            alt="Logo"
            className="rounded-full border-4 border-white shadow-[0_0_10px_rgba(33,46,196,0.8)] w-[45px] h-[45px]"
            width={45}
            height={45}
          />
        </div>
        <a
          href="#home"
          className="text-white text-center flex-1 transition duration-1000 hover:text-black"
        >
          About Myself
        </a>
      </div>

      {/* ภาพตัวเอง */}
      <div className="flex justify-center items-center mt-5">
        <Image
          src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Peachoom/672cbc8a2c052.png"
          alt="Profile Image"
          className="w-[200px] h-[200px] rounded-[30px] transition-transform duration-1000 hover:wiggle"
          width={200}
          height={200}
        />
      </div>

      {/* Name */}
      <div className="flex justify-center items-center mt-5">
        <p className="text-black font-bold px-4 py-2 border-3 border-white rounded-[10px] bg-white">
          My Name is ?
        </p>
      </div>

      {/* Name โช*/}
      <div className="flex justify-center items-center mt-5 opacity-0 hover:opacity-100 text-xl text-black transition-opacity duration-500">
        <p>Pongsinachai Treepol (PEA)</p>
      </div>

      {/* About Me */}
      <label
        htmlFor="aboutMe"
        className="block text-center bg-white text-black font-bold px-5 py-2 rounded-lg mt-10 cursor-pointer"
      >
        About Me
      </label>
      <input type="checkbox" id="aboutMe" className="hidden peer" />
      <div className="mt-5 p-5 bg-gray-100 border-3 border-gray-400 rounded-md text-center peer-checked:block hidden">
        <p>My name is Pongsinachai Treepol,</p>
        <p>A 6th year student in the G-SciCom at Satri Angthong School.</p>
        <p>
          I started coding in 2021 and am interested in studying many technology streams to find one that
          you like.
        </p>
      </div>

      {/* My Project Award */}
      <label
        htmlFor="myProject"
        className="block text-center bg-white text-black font-bold px-5 py-2 rounded-lg mt-10 cursor-pointer"
      >
        My Project & Award
      </label>
      <input type="checkbox" id="myProject" className="hidden peer" />
      <div className="peer-checked:flex flex-col items-center mt-5 hidden">
        {/* Project 1 */}
        <div className="p-3 bg-gray-100 border-3 border-gray-400 rounded-lg flex items-center mt-3">
          <Image
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Peachoom/672cbc94634d1.png"
            alt="Project 1"
            className="w-[100px] h-auto rounded-lg mr-5"
            width={100}
            height={100}
          />
          <div className="text-center">
            <p>National Software Contest 26</p>
            <p>The 3rd place winner in project competition</p>
          </div>
        </div>
        {/* P 2 */}
        <div className="p-3 bg-gray-100 border-3 border-gray-400 rounded-lg flex items-center mt-3">
          <Image
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Peachoom/672cbcbf9dc72.png"
            alt="Project 2"
            className="w-[100px] h-auto rounded-lg mr-5"
            width={100}
            height={100}
          />
          <div className="text-center">
            <p>KidBright Innovation by Alumni</p>
            <p>The 2nd place winner in project competition</p>
          </div>
        </div>
        {/* P 3 */}
        <div className="p-3 bg-gray-100 border-3 border-gray-400 rounded-lg flex items-center mt-3">
          <Image
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Peachoom/672cb957c14fd.png"
            alt="Project 3"
            className="w-[100px] h-auto rounded-lg mr-5"
            width={100}
            height={100}
          />
          <div className="text-center">
            <p>RSU Academic Competition Future Design 2023</p>
            <p>The Compliment place in project competition in First Round</p>
          </div>
        </div>
        {/* P 4 */}
        <div className="p-3 bg-gray-100 border-3 border-gray-400 rounded-lg flex items-center mt-3">
          <Image
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/Peachoom/672cbc836a1c0.png"
            alt="Project 4"
            className="w-[100px] h-auto rounded-lg mr-5"
            width={100}
            height={100}
          />
          <div className="text-center">
            <p>National Software Contest 25</p>
            <p>Semi-finalist Received development funds of 2000 baht</p>
          </div>
        </div>
      </div>

      {/* ติดต่อ */}
      <div className="ml-5 mb-5">
        <h2>Contact</h2>
        <section className="relative">
          {/* เฟส */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
            />
          </svg>
          <p className="underline">Pea pongsinachai</p>

          {/* ig*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            />
          </svg>
          <p className="underline">pea_pst</p>

          {/* Email */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
          <p>tripphlphngsinachay@gmail.com</p>

          {/* เบอ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
          <p>090-945-3013</p>
        </section>
      </div>
    </div>
  );
}
