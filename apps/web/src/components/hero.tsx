import { Link } from '@tanstack/react-router';
import { TypingAnimation } from './ui/typing-animation';
import crcGuilherme from '@/assets/curriculum/crcGuilherme.pdf';

const Hero = () => {
  return (
    <div className="container mx-auto  flex flex-col justify-center">
      <div className="  flex items-center gap-4">
        <a href="https://github.com/guisandroni">
          <svg
            width="40px"
            height="40px"
            viewBox="-2 -2 24.00 24.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffff"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            stroke="#ffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#ffffCCCCCC"
              stroke-width="0.04"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <title>github [#ffff142]</title> <desc>Created with Sketch.</desc>{' '}
              <defs> </defs>{' '}
              <g
                id="Page-1"
                stroke-width="0.0002"
                fill="none"
                fill-rule="evenodd"
              >
                {' '}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#ffff"
                >
                  {' '}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {' '}
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#ffff142]"
                    >
                      {' '}
                    </path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        </a>

        <a href="https://x.com/gui_sandroni">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1300"
            height="1300"
            fill="none"
            viewBox="0 0 1200 1227"
            className="size-4 sm:size-7"
          >
            <title>X (formerly Twitter)</title>
            <path
              fill="currentColor"
              d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
            ></path>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/guisandroni/">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                fill="#FFFF"
              ></path>{' '}
            </g>
          </svg>
        </a>

        <a
          href={crcGuilherme}
          target="_blank"
          rel="noopener noreferrer"
          download="crc"
        >
          <svg
            width="42px"
            height="42px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M19 15V21M19 21L17 19M19 21L21 19M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H14M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
            </g>
          </svg>
        </a>
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-6xl text-zinc-400 font-semibold">Hey,</span>
        <span className="text-6xl font-semibold">I'm</span>
        <img
          src="https://github.com/guisandroni.png"
          alt="profile"
          className="w-16 h-16 rounded-xl object-cover border-2  shadow-lg"
        />
        <span className="text-6xl font-medium">Guilherme</span>
      </div>
      <div className=" text-3xl md:text-6xl font-semibold mb-6">
        <span className="text-zinc-400">a</span>
        <span className="font-semibold"> developer </span>
        <TypingAnimation words={['Front-end ', 'Back-end ', 'Full-Stack ']} />
        <span className="font-semibold text-zinc-400">
          building applications and projects
        </span>
      </div>
      <div className=" text-4xl md:text-6xl font-semibold mb-6 ">
        <span className="text-zinc-400">currently based in</span>{' '}
        <span className="font-semibold  ">Ibiúna</span>
        <span className="inline-flex align-middle px-2">🇧🇷</span>
        <span className="font-semibold">Brazil</span>
      </div>
      <div className="text-md text-gray-400 mt-6 italic tracking-wider flex gap-4 font-semibold">
        <Link to="/projects">Projects</Link>
        <Link to="/bio">About</Link>
        <Link to="/blog">Posts</Link>
      </div>
    </div>
  );
};

export default Hero;
