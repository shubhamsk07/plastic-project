import { motion } from "framer-motion";
import { useState } from "react";
import { Contact } from "./Contact";

export function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Open the form
  const openForm = () => setIsFormOpen(true);

  // Close the form
  const closeForm = () => setIsFormOpen(false);

  return (
    <div>
        <motion.div
    
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 75,
        damping: 10,
        duration: 1.5,
        opacity: { duration: 0.5 },
      }}
      className="bg-color1 h-24  flex justify-between"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 75,
          damping: 11,
          delay: 0.5,
          duration: 1.5,
          opacity: { duration: 0.5 },
        }}
        className="mt-7 ml-[90px]"
      >
        <Logo />
      </motion.div>
      <motion.div
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 75,
          delay: 0.7,
          damping: 10,
          duration: 1.8,
          opacity: { duration: 0.5 },
        }}
        className="text-white flex gap-14 mt-9 pr-[200px] montserrat-font"
      >
        <button className="cursor-pointer h-1 hover:text-gray-300">Home</button>
        <button className="cursor-pointer h-1 hover:text-gray-300">Products</button>
        <button className="cursor-pointer h-1 hover:text-gray-300 ">Industries</button>
        <button className="cursor-pointer h-1 hover:text-gray-300 ">About</button>
        <div onClick={openForm} className="cursor-pointer relative bottom-[9px]">
          <Group />
          <h3 className="relative hover:text-gray-300 bottom-7 left-5 font-bold montserrat-font">
            Contact
          </h3>
        </div>
      </motion.div>
      
    </motion.div>
    <div className="relative">
   <Contact isOpen={isFormOpen} onClose={closeForm} />
    </div>
    </div>
  );
}
function Group(){
    return <svg width="115" height="40" viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="7.12402" width="107.876" height="33.0769" fill="black"/>
<rect y="6.9231" width="107.876" height="33.0769" fill="#E40C10"/>
</svg>

}
function Logo(){
    return <svg width="164" height="60" viewBox="0 0 164 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2C0 0.89543 0.89543 0 2 0H162C163.105 0 164 0.895431 164 2V37C164 38.1046 163.105 39 162 39H2C0.895429 39 0 38.1046 0 37V2Z" fill="#5431A6"/>
    <path d="M16.162 23V13.2H20.404C21.2813 13.2 22.0373 13.3447 22.672 13.634C23.3067 13.914 23.7967 14.32 24.142 14.852C24.4873 15.384 24.66 16.0187 24.66 16.756C24.66 17.484 24.4873 18.114 24.142 18.646C23.7967 19.178 23.3067 19.5887 22.672 19.878C22.0373 20.158 21.2813 20.298 20.404 20.298H17.422L18.43 19.276V23H16.162ZM18.43 19.528L17.422 18.45H20.278C20.978 18.45 21.5007 18.3007 21.846 18.002C22.1913 17.7033 22.364 17.288 22.364 16.756C22.364 16.2147 22.1913 15.7947 21.846 15.496C21.5007 15.1973 20.978 15.048 20.278 15.048H17.422L18.43 13.97V19.528ZM29.6955 23.112C28.8928 23.112 28.1788 22.944 27.5535 22.608C26.9375 22.272 26.4475 21.8147 26.0835 21.236C25.7288 20.648 25.5515 19.9807 25.5515 19.234C25.5515 18.478 25.7288 17.8107 26.0835 17.232C26.4475 16.644 26.9375 16.1867 27.5535 15.86C28.1788 15.524 28.8928 15.356 29.6955 15.356C30.4888 15.356 31.1982 15.524 31.8235 15.86C32.4488 16.1867 32.9388 16.6393 33.2935 17.218C33.6482 17.7967 33.8255 18.4687 33.8255 19.234C33.8255 19.9807 33.6482 20.648 33.2935 21.236C32.9388 21.8147 32.4488 22.272 31.8235 22.608C31.1982 22.944 30.4888 23.112 29.6955 23.112ZM29.6955 21.32C30.0595 21.32 30.3862 21.236 30.6755 21.068C30.9648 20.9 31.1935 20.662 31.3615 20.354C31.5295 20.0367 31.6135 19.6633 31.6135 19.234C31.6135 18.7953 31.5295 18.422 31.3615 18.114C31.1935 17.806 30.9648 17.568 30.6755 17.4C30.3862 17.232 30.0595 17.148 29.6955 17.148C29.3315 17.148 29.0048 17.232 28.7155 17.4C28.4262 17.568 28.1928 17.806 28.0155 18.114C27.8475 18.422 27.7635 18.7953 27.7635 19.234C27.7635 19.6633 27.8475 20.0367 28.0155 20.354C28.1928 20.662 28.4262 20.9 28.7155 21.068C29.0048 21.236 29.3315 21.32 29.6955 21.32ZM35.2853 23V12.612H37.4693V23H35.2853ZM40.4483 25.828C40.0563 25.828 39.6689 25.7673 39.2863 25.646C38.9036 25.5247 38.5909 25.3567 38.3483 25.142L39.1463 23.588C39.3143 23.7373 39.5056 23.854 39.7203 23.938C39.9443 24.022 40.1636 24.064 40.3783 24.064C40.6863 24.064 40.9289 23.9893 41.1063 23.84C41.2929 23.7 41.4609 23.462 41.6103 23.126L42.0023 22.202L42.1703 21.964L44.8723 15.468H46.9723L43.5703 23.462C43.3276 24.0687 43.0476 24.5447 42.7303 24.89C42.4223 25.2353 42.0769 25.478 41.6943 25.618C41.3209 25.758 40.9056 25.828 40.4483 25.828ZM41.7363 23.294L38.3763 15.468H40.6303L43.2343 21.768L41.7363 23.294ZM52.6665 23.168C51.9105 23.168 51.2058 23.0467 50.5525 22.804C49.9085 22.552 49.3485 22.1973 48.8725 21.74C48.3965 21.2827 48.0231 20.746 47.7525 20.13C47.4911 19.514 47.3605 18.8373 47.3605 18.1C47.3605 17.3627 47.4911 16.686 47.7525 16.07C48.0231 15.454 48.3965 14.9173 48.8725 14.46C49.3578 14.0027 49.9225 13.6527 50.5665 13.41C51.2105 13.158 51.9151 13.032 52.6805 13.032C53.5298 13.032 54.2951 13.1813 54.9765 13.48C55.6671 13.7693 56.2458 14.1987 56.7125 14.768L55.2565 16.112C54.9205 15.7293 54.5471 15.4447 54.1365 15.258C53.7258 15.062 53.2778 14.964 52.7925 14.964C52.3351 14.964 51.9151 15.0387 51.5325 15.188C51.1498 15.3373 50.8185 15.552 50.5385 15.832C50.2585 16.112 50.0391 16.4433 49.8805 16.826C49.7311 17.2087 49.6565 17.6333 49.6565 18.1C49.6565 18.5667 49.7311 18.9913 49.8805 19.374C50.0391 19.7567 50.2585 20.088 50.5385 20.368C50.8185 20.648 51.1498 20.8627 51.5325 21.012C51.9151 21.1613 52.3351 21.236 52.7925 21.236C53.2778 21.236 53.7258 21.1427 54.1365 20.956C54.5471 20.76 54.9205 20.466 55.2565 20.074L56.7125 21.418C56.2458 21.9873 55.6671 22.4213 54.9765 22.72C54.2951 23.0187 53.5251 23.168 52.6665 23.168ZM58.09 23V15.468H60.176V17.596L59.882 16.98C60.106 16.448 60.4654 16.0467 60.96 15.776C61.4547 15.496 62.0567 15.356 62.766 15.356V17.372C62.6727 17.3627 62.5887 17.358 62.514 17.358C62.4394 17.3487 62.36 17.344 62.276 17.344C61.6787 17.344 61.1934 17.5167 60.82 17.862C60.456 18.198 60.274 18.7253 60.274 19.444V23H58.09ZM68.1925 23V21.53L68.0525 21.208V18.576C68.0525 18.1093 67.9078 17.7453 67.6185 17.484C67.3385 17.2227 66.9045 17.092 66.3165 17.092C65.9151 17.092 65.5185 17.1573 65.1265 17.288C64.7438 17.4093 64.4171 17.5773 64.1465 17.792L63.3625 16.266C63.7731 15.9767 64.2678 15.7527 64.8465 15.594C65.4251 15.4353 66.0131 15.356 66.6105 15.356C67.7585 15.356 68.6498 15.6267 69.2845 16.168C69.9191 16.7093 70.2365 17.554 70.2365 18.702V23H68.1925ZM65.8965 23.112C65.3085 23.112 64.8045 23.014 64.3845 22.818C63.9645 22.6127 63.6425 22.3373 63.4185 21.992C63.1945 21.6467 63.0825 21.2593 63.0825 20.83C63.0825 20.382 63.1898 19.99 63.4045 19.654C63.6285 19.318 63.9785 19.0567 64.4545 18.87C64.9305 18.674 65.5511 18.576 66.3165 18.576H68.3185V19.85H66.5545C66.0411 19.85 65.6865 19.934 65.4905 20.102C65.3038 20.27 65.2105 20.48 65.2105 20.732C65.2105 21.012 65.3178 21.236 65.5325 21.404C65.7565 21.5627 66.0598 21.642 66.4425 21.642C66.8065 21.642 67.1331 21.558 67.4225 21.39C67.7118 21.2127 67.9218 20.956 68.0525 20.62L68.3885 21.628C68.2298 22.1133 67.9405 22.482 67.5205 22.734C67.1005 22.986 66.5591 23.112 65.8965 23.112ZM72.4791 23V15.3C72.4791 14.4507 72.7311 13.774 73.2351 13.27C73.7391 12.7567 74.4577 12.5 75.3911 12.5C75.7084 12.5 76.0117 12.5327 76.3011 12.598C76.5997 12.6633 76.8517 12.766 77.0571 12.906L76.4831 14.488C76.3617 14.404 76.2264 14.3387 76.0771 14.292C75.9277 14.2453 75.7691 14.222 75.6011 14.222C75.2837 14.222 75.0364 14.3153 74.8591 14.502C74.6911 14.6793 74.6071 14.95 74.6071 15.314V16.014L74.6631 16.952V23H72.4791ZM71.3171 17.316V15.636H76.5391V17.316H71.3171ZM80.7071 23.112C79.8205 23.112 79.1298 22.888 78.6351 22.44C78.1405 21.9827 77.8931 21.306 77.8931 20.41V13.802H80.0771V20.382C80.0771 20.6993 80.1611 20.9467 80.3291 21.124C80.4971 21.292 80.7258 21.376 81.0151 21.376C81.3605 21.376 81.6545 21.2827 81.8971 21.096L82.4851 22.636C82.2611 22.7947 81.9905 22.916 81.6731 23C81.3651 23.0747 81.0431 23.112 80.7071 23.112ZM76.7311 17.316V15.636H81.9531V17.316H76.7311ZM91.05 23.168C90.266 23.168 89.5146 23.0653 88.796 22.86C88.0773 22.6453 87.4986 22.37 87.06 22.034L87.83 20.326C88.25 20.6247 88.7446 20.872 89.314 21.068C89.8926 21.2547 90.476 21.348 91.064 21.348C91.512 21.348 91.8713 21.306 92.142 21.222C92.422 21.1287 92.6273 21.0027 92.758 20.844C92.8886 20.6853 92.954 20.5033 92.954 20.298C92.954 20.0367 92.8513 19.8313 92.646 19.682C92.4406 19.5233 92.17 19.3973 91.834 19.304C91.498 19.2013 91.1246 19.108 90.714 19.024C90.3126 18.9307 89.9066 18.8187 89.496 18.688C89.0946 18.5573 88.726 18.3893 88.39 18.184C88.054 17.9787 87.7786 17.708 87.564 17.372C87.3586 17.036 87.256 16.6067 87.256 16.084C87.256 15.524 87.4053 15.0153 87.704 14.558C88.012 14.0913 88.4693 13.7227 89.076 13.452C89.692 13.172 90.462 13.032 91.386 13.032C92.002 13.032 92.6086 13.1067 93.206 13.256C93.8033 13.396 94.3306 13.6107 94.788 13.9L94.088 15.622C93.6306 15.3607 93.1733 15.1693 92.716 15.048C92.2586 14.9173 91.8106 14.852 91.372 14.852C90.9333 14.852 90.574 14.9033 90.294 15.006C90.014 15.1087 89.8133 15.244 89.692 15.412C89.5706 15.5707 89.51 15.7573 89.51 15.972C89.51 16.224 89.6126 16.4293 89.818 16.588C90.0233 16.7373 90.294 16.8587 90.63 16.952C90.966 17.0453 91.3346 17.1387 91.736 17.232C92.1466 17.3253 92.5526 17.4327 92.954 17.554C93.3646 17.6753 93.738 17.8387 94.074 18.044C94.41 18.2493 94.6806 18.52 94.886 18.856C95.1006 19.192 95.208 19.6167 95.208 20.13C95.208 20.6807 95.054 21.1847 94.746 21.642C94.438 22.0993 93.976 22.468 93.36 22.748C92.7533 23.028 91.9833 23.168 91.05 23.168ZM100.188 23.112C99.385 23.112 98.671 22.944 98.0457 22.608C97.4297 22.272 96.9397 21.8147 96.5757 21.236C96.221 20.648 96.0437 19.9807 96.0437 19.234C96.0437 18.478 96.221 17.8107 96.5757 17.232C96.9397 16.644 97.4297 16.1867 98.0457 15.86C98.671 15.524 99.385 15.356 100.188 15.356C100.981 15.356 101.69 15.524 102.316 15.86C102.941 16.1867 103.431 16.6393 103.786 17.218C104.14 17.7967 104.318 18.4687 104.318 19.234C104.318 19.9807 104.14 20.648 103.786 21.236C103.431 21.8147 102.941 22.272 102.316 22.608C101.69 22.944 100.981 23.112 100.188 23.112ZM100.188 21.32C100.552 21.32 100.878 21.236 101.168 21.068C101.457 20.9 101.686 20.662 101.854 20.354C102.022 20.0367 102.106 19.6633 102.106 19.234C102.106 18.7953 102.022 18.422 101.854 18.114C101.686 17.806 101.457 17.568 101.168 17.4C100.878 17.232 100.552 17.148 100.188 17.148C99.8237 17.148 99.497 17.232 99.2077 17.4C98.9184 17.568 98.685 17.806 98.5077 18.114C98.3397 18.422 98.2557 18.7953 98.2557 19.234C98.2557 19.6633 98.3397 20.0367 98.5077 20.354C98.685 20.662 98.9184 20.9 99.2077 21.068C99.497 21.236 99.8237 21.32 100.188 21.32ZM105.778 23V12.612H107.962V23H105.778ZM113.166 23.112C112.541 23.112 111.981 22.9907 111.486 22.748C111.001 22.5053 110.623 22.1367 110.352 21.642C110.082 21.138 109.946 20.4987 109.946 19.724V15.468H112.13V19.402C112.13 20.0273 112.261 20.4893 112.522 20.788C112.793 21.0773 113.171 21.222 113.656 21.222C113.992 21.222 114.291 21.152 114.552 21.012C114.814 20.8627 115.019 20.6387 115.168 20.34C115.318 20.032 115.392 19.6493 115.392 19.192V15.468H117.576V23H115.504V20.928L115.882 21.53C115.63 22.0527 115.257 22.4493 114.762 22.72C114.277 22.9813 113.745 23.112 113.166 23.112ZM122.68 23.112C121.793 23.112 121.102 22.888 120.608 22.44C120.113 21.9827 119.866 21.306 119.866 20.41V13.802H122.05V20.382C122.05 20.6993 122.134 20.9467 122.302 21.124C122.47 21.292 122.698 21.376 122.988 21.376C123.333 21.376 123.627 21.2827 123.87 21.096L124.458 22.636C124.234 22.7947 123.963 22.916 123.646 23C123.338 23.0747 123.016 23.112 122.68 23.112ZM118.704 17.316V15.636H123.926V17.316H118.704ZM125.684 23V15.468H127.868V23H125.684ZM126.776 14.418C126.374 14.418 126.048 14.3013 125.796 14.068C125.544 13.8347 125.418 13.5453 125.418 13.2C125.418 12.8547 125.544 12.5653 125.796 12.332C126.048 12.0987 126.374 11.982 126.776 11.982C127.177 11.982 127.504 12.094 127.756 12.318C128.008 12.5327 128.134 12.8127 128.134 13.158C128.134 13.522 128.008 13.8253 127.756 14.068C127.513 14.3013 127.186 14.418 126.776 14.418ZM133.479 23.112C132.676 23.112 131.962 22.944 131.337 22.608C130.721 22.272 130.231 21.8147 129.867 21.236C129.512 20.648 129.335 19.9807 129.335 19.234C129.335 18.478 129.512 17.8107 129.867 17.232C130.231 16.644 130.721 16.1867 131.337 15.86C131.962 15.524 132.676 15.356 133.479 15.356C134.272 15.356 134.981 15.524 135.607 15.86C136.232 16.1867 136.722 16.6393 137.077 17.218C137.431 17.7967 137.609 18.4687 137.609 19.234C137.609 19.9807 137.431 20.648 137.077 21.236C136.722 21.8147 136.232 22.272 135.607 22.608C134.981 22.944 134.272 23.112 133.479 23.112ZM133.479 21.32C133.843 21.32 134.169 21.236 134.459 21.068C134.748 20.9 134.977 20.662 135.145 20.354C135.313 20.0367 135.397 19.6633 135.397 19.234C135.397 18.7953 135.313 18.422 135.145 18.114C134.977 17.806 134.748 17.568 134.459 17.4C134.169 17.232 133.843 17.148 133.479 17.148C133.115 17.148 132.788 17.232 132.499 17.4C132.209 17.568 131.976 17.806 131.799 18.114C131.631 18.422 131.547 18.7953 131.547 19.234C131.547 19.6633 131.631 20.0367 131.799 20.354C131.976 20.662 132.209 20.9 132.499 21.068C132.788 21.236 133.115 21.32 133.479 21.32ZM143.647 15.356C144.244 15.356 144.776 15.4773 145.243 15.72C145.719 15.9533 146.092 16.3173 146.363 16.812C146.633 17.2973 146.769 17.9227 146.769 18.688V23H144.585V19.024C144.585 18.4173 144.449 17.9693 144.179 17.68C143.917 17.3907 143.544 17.246 143.059 17.246C142.713 17.246 142.401 17.3207 142.121 17.47C141.85 17.61 141.635 17.8293 141.477 18.128C141.327 18.4267 141.253 18.8093 141.253 19.276V23H139.069V15.468H141.155V17.554L140.763 16.924C141.033 16.42 141.421 16.0327 141.925 15.762C142.429 15.4913 143.003 15.356 143.647 15.356ZM151.282 23.112C150.638 23.112 150.018 23.0373 149.42 22.888C148.832 22.7293 148.366 22.5333 148.02 22.3L148.748 20.732C149.094 20.9467 149.5 21.124 149.966 21.264C150.442 21.3947 150.909 21.46 151.366 21.46C151.87 21.46 152.225 21.3993 152.43 21.278C152.645 21.1567 152.752 20.9887 152.752 20.774C152.752 20.5967 152.668 20.466 152.5 20.382C152.342 20.2887 152.127 20.2187 151.856 20.172C151.586 20.1253 151.287 20.0787 150.96 20.032C150.643 19.9853 150.321 19.9247 149.994 19.85C149.668 19.766 149.369 19.6447 149.098 19.486C148.828 19.3273 148.608 19.1127 148.44 18.842C148.282 18.5713 148.202 18.2213 148.202 17.792C148.202 17.316 148.338 16.896 148.608 16.532C148.888 16.168 149.29 15.8833 149.812 15.678C150.335 15.4633 150.96 15.356 151.688 15.356C152.202 15.356 152.724 15.412 153.256 15.524C153.788 15.636 154.232 15.7993 154.586 16.014L153.858 17.568C153.494 17.3533 153.126 17.2087 152.752 17.134C152.388 17.05 152.034 17.008 151.688 17.008C151.203 17.008 150.848 17.0733 150.624 17.204C150.4 17.3347 150.288 17.5027 150.288 17.708C150.288 17.8947 150.368 18.0347 150.526 18.128C150.694 18.2213 150.914 18.296 151.184 18.352C151.455 18.408 151.749 18.4593 152.066 18.506C152.393 18.5433 152.72 18.604 153.046 18.688C153.373 18.772 153.667 18.8933 153.928 19.052C154.199 19.2013 154.418 19.4113 154.586 19.682C154.754 19.9433 154.838 20.2887 154.838 20.718C154.838 21.1847 154.698 21.6 154.418 21.964C154.138 22.3187 153.732 22.5987 153.2 22.804C152.678 23.0093 152.038 23.112 151.282 23.112Z" fill="white"/>
    </svg>
    
}