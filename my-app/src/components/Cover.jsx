import React from 'react'
import './Cover.css'

export const Cover = () => {
  return (
    <div className='flex mb-100 pt-10 justify-between min-h-screen w-full'>
        
        <div id='squares' className='flex mt-3 bg-black'>
            <div id= 'squareContainer' className='mb-20'>
                <svg width="296" height="375" viewBox="0 0 296 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.053 102.676L23.382 185.939C108.053 185.939 108.053 185.939 109.664 272.653L191.633 187.664C108.053 185.939 108.053 185.939 108.053 102.676Z" fill="#888DF2"/>
                <path d="M108.37 49.1811C108.37 30.1201 92.9182 14.668 73.8572 14.668H-29.6818C-48.7429 14.668 -64.1949 30.12 -64.1949 49.181V152.72C-64.1949 171.781 -48.7429 187.233 -29.6819 187.233H73.8571C92.9181 187.233 108.37 171.781 108.37 152.72V49.1811Z" fill="black"/>
                <path d="M109.233 34.5131C109.233 15.452 93.781 0 74.72 0H-43.487C-62.548 0 -78.0001 15.452 -78.0001 34.513V152.72C-78.0001 171.781 -62.5481 187.233 -43.487 187.233H74.72C93.781 187.233 109.233 171.781 109.233 152.72V34.5131Z" fill="#888DF2"/>
                <path d="M295.603 221.746C295.603 202.685 280.151 187.233 261.09 187.233H142.883C123.822 187.233 108.37 202.685 108.37 221.746V339.953C108.37 359.014 123.822 374.466 142.883 374.466H261.093C280.153 374.466 295.603 359.016 295.603 339.956V221.746Z" fill="#888DF2"/>
                <path d="M197.903 232.865C199.724 229.712 204.276 229.712 206.097 232.865L255.26 318.019C257.081 321.173 254.805 325.115 251.163 325.115H152.836C149.195 325.115 146.919 321.173 148.74 318.019L197.903 232.865Z" stroke="black" stroke-width="15.7693"/>
                <path d="M198.19 259.382H206.864V298.654H198.19V259.382ZM202.77 313.433C201.105 313.433 199.74 312.994 198.676 312.115C197.612 311.19 197.08 309.987 197.08 308.507C197.08 307.073 197.612 305.87 198.676 304.899C199.786 303.927 201.151 303.442 202.77 303.442C204.389 303.442 205.707 303.927 206.725 304.899C207.789 305.87 208.321 307.073 208.321 308.507C208.321 309.987 207.812 311.19 206.794 312.115C205.777 312.994 204.435 313.433 202.77 313.433Z" fill="black"/>
                </svg>
            </div>
            <div className='mt-60 absolute ml-40'>
                <svg width="375" height="375" viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M187.551 102.676L272.221 185.939C187.551 185.939 187.551 185.939 185.939 272.653L103.97 187.664C187.551 185.939 187.551 185.939 187.551 102.676Z" fill="#BFF205"/>
                <path d="M187.233 34.5131C187.233 15.452 202.685 0 221.746 0H374.466V152.72C374.466 171.781 359.014 187.233 339.953 187.233H221.746C202.685 187.233 187.233 171.781 187.233 152.72V34.5131Z" fill="#BFF205"/>
                <circle cx="45.0779" cy="45.0779" r="38.8171" transform="matrix(-1 0 0 1 321.156 43)" stroke="black" stroke-width="12.5216"/>
                <path d="M306.13 118.13L333.677 145.677" stroke="black" stroke-width="17.5303" stroke-linecap="round"/>
                <path d="M276.078 65.5439C276.078 65.5439 269.012 65.1861 262.304 70.5526C255.596 75.9191 253.539 83.0742 253.539 83.0742" stroke="black" stroke-width="7.51298"/>
                <rect y="187.233" width="187.233" height="187.233" rx="34.513" fill="url(#paint0_linear_70_235)"/>
                <defs>
                <linearGradient id="paint0_linear_70_235" x1="93.6165" y1="187.233" x2="93.6165" y2="374.466" gradientUnits="userSpaceOnUse">
                <stop offset="0.28" stop-color="#BFF205"/>
                <stop offset="1" stop-color="#91B804"/>
                </linearGradient>
                </defs>
                </svg>

            </div>
        </div>
        <div id='title'>
            <div className='mt-[200px] mr-80'>
                <svg width="452" height="126" viewBox="0 0 452 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9168 32.3248C13.0366 32.3248 10.557 31.8701 8.47812 30.9605C6.42085 30.051 4.84 28.73 3.73557 26.9976C2.6528 25.2435 2.11141 23.0996 2.11141 20.5659C2.11141 18.6819 2.43624 17.0252 3.08591 15.596C3.75723 14.1451 4.66676 12.9323 5.8145 11.9579C6.98389 10.9617 8.32653 10.2146 9.84242 9.71651C11.3583 9.19678 12.9825 8.93691 14.7149 8.93691C15.6894 8.93691 16.6747 9.02353 17.6709 9.19678C18.667 9.34836 19.6199 9.58657 20.5294 9.91141L21.5689 10.2687L21.244 11.3082L20.1071 10.9509C19.1759 10.6477 18.2556 10.4311 17.346 10.3012C16.4582 10.1713 15.5811 10.1063 14.7149 10.1063C12.6143 10.1063 10.7086 10.5178 8.99785 11.3407C7.30873 12.1419 5.95526 13.3221 4.93745 14.8813C3.9413 16.4405 3.44322 18.3462 3.44322 20.5984C3.44322 22.8072 3.93047 24.7021 4.90497 26.283C5.90112 27.8421 7.31955 29.044 9.16027 29.8886C11.0226 30.7332 13.2423 31.1554 15.8193 31.1554C16.7505 31.1554 17.7575 31.058 18.8403 30.8631C19.923 30.6682 20.9625 30.4083 21.9587 30.0835V22.0277H13.3181V20.8583H23.2255V30.7656C22.4026 31.0905 21.5797 31.372 20.7568 31.6102C19.9339 31.8484 19.111 32.0217 18.2881 32.1299C17.4868 32.2599 16.6964 32.3248 15.9168 32.3248ZM29.391 32V9.26174H38.6487C40.2295 9.26174 41.5938 9.48913 42.7416 9.94389C43.911 10.3987 44.8205 11.0808 45.4702 11.9903C46.1198 12.8999 46.4447 14.0368 46.4447 15.4011C46.4447 16.3106 46.2931 17.166 45.9899 17.9672C45.7084 18.7685 45.2536 19.4723 44.6256 20.0787C43.9976 20.685 43.1639 21.1614 42.1244 21.5079C41.1066 21.8544 39.8614 22.0277 38.3888 22.0277H30.6578V32H29.391ZM45.9899 32L39.2984 21.8328L40.5327 21.378L47.5166 32H45.9899ZM30.6578 20.8583H38.7137C40.7276 20.8583 42.2976 20.3927 43.4237 19.4615C44.5498 18.5086 45.1129 17.1443 45.1129 15.3686C45.1129 13.7011 44.539 12.4668 43.3912 11.6655C42.2435 10.8426 40.6302 10.4311 38.5512 10.4311H30.6578V20.8583ZM61.0261 32.3248C59.2287 32.3248 57.6587 32.0108 56.316 31.3828C54.9734 30.7332 53.9231 29.7262 53.1651 28.3619C52.4289 26.9976 52.0607 25.2435 52.0607 23.0996V9.26174H53.3276V22.7423C53.3276 25.7524 54.0097 27.9071 55.374 29.2064C56.7383 30.5058 58.6223 31.1554 61.0261 31.1554C63.4731 31.1554 65.368 30.5058 66.7106 29.2064C68.0533 27.9071 68.7246 25.7524 68.7246 22.7423V9.26174H69.9265V23.0996C69.9265 25.2435 69.5583 26.9976 68.8221 28.3619C68.0858 29.7045 67.0463 30.7007 65.7037 31.3503C64.3827 32 62.8235 32.3248 61.0261 32.3248ZM76.2759 32V9.26174H84.7865C86.454 9.26174 87.8833 9.52161 89.0743 10.0413C90.2654 10.5611 91.1749 11.3298 91.8029 12.3476C92.4309 13.3655 92.7449 14.6323 92.7449 16.1482C92.7449 17.6641 92.4309 18.9742 91.8029 20.0787C91.1749 21.1614 90.2654 22.006 89.0743 22.6123C87.8833 23.197 86.454 23.4894 84.7865 23.4894H77.5428V32H76.2759ZM77.5428 22.32H84.7865C86.8871 22.32 88.5113 21.7894 89.659 20.7283C90.8284 19.6455 91.4131 18.1297 91.4131 16.1807C91.4131 14.1884 90.8284 12.7374 89.659 11.8279C88.5113 10.8967 86.8871 10.4311 84.7865 10.4311H77.5428V22.32ZM107.276 32.3248C105.111 32.3248 103.194 31.8268 101.527 30.8306C99.8591 29.8345 98.5489 28.4593 97.5961 26.7052C96.6433 24.9295 96.1668 22.9047 96.1668 20.6309C96.1668 18.357 96.6433 16.3431 97.5961 14.589C98.5489 12.8132 99.8591 11.4273 101.527 10.4311C103.194 9.43499 105.111 8.93691 107.276 8.93691C109.463 8.93691 111.391 9.43499 113.058 10.4311C114.726 11.4273 116.036 12.8132 116.989 14.589C117.941 16.3431 118.418 18.357 118.418 20.6309C118.418 22.9047 117.941 24.9295 116.989 26.7052C116.036 28.4593 114.726 29.8345 113.058 30.8306C111.391 31.8268 109.463 32.3248 107.276 32.3248ZM107.276 31.1554C109.203 31.1554 110.903 30.7007 112.376 29.7911C113.849 28.8816 114.996 27.6364 115.819 26.0556C116.664 24.4531 117.086 22.6448 117.086 20.6309C117.086 18.5953 116.664 16.787 115.819 15.2062C114.996 13.6253 113.849 12.3801 112.376 11.4706C110.903 10.5611 109.203 10.1063 107.276 10.1063C105.392 10.1063 103.714 10.5611 102.241 11.4706C100.769 12.3801 99.6101 13.6253 98.7655 15.2062C97.9209 16.787 97.4986 18.5953 97.4986 20.6309C97.4986 22.6448 97.9209 24.4531 98.7655 26.0556C99.6101 27.6364 100.769 28.8816 102.241 29.7911C103.714 30.7007 105.392 31.1554 107.276 31.1554ZM132.075 32V9.26174H139.806C142.123 9.26174 144.126 9.72734 145.815 10.6585C147.504 11.5897 148.814 12.9107 149.746 14.6215C150.677 16.3323 151.142 18.3462 151.142 20.6634C151.142 22.9805 150.666 24.9945 149.713 26.7052C148.76 28.3944 147.407 29.7045 145.653 30.6357C143.92 31.5452 141.863 32 139.481 32H132.075ZM133.342 30.8306H139.708C141.766 30.8306 143.552 30.4191 145.068 29.5962C146.584 28.7517 147.753 27.5715 148.576 26.0556C149.399 24.5397 149.811 22.7423 149.811 20.6634C149.811 18.5411 149.399 16.7221 148.576 15.2062C147.775 13.6686 146.616 12.4884 145.101 11.6655C143.606 10.8426 141.809 10.4311 139.708 10.4311H133.342V30.8306ZM156.659 32V9.26174H172.511V10.4311H157.926V19.7863H171.212V20.9557H157.926V30.8306H172.738V32H156.659ZM186.065 32V9.26174H194.576C196.243 9.26174 197.673 9.52161 198.864 10.0413C200.055 10.5611 200.964 11.3298 201.592 12.3476C202.22 13.3655 202.534 14.6323 202.534 16.1482C202.534 17.6641 202.22 18.9742 201.592 20.0787C200.964 21.1614 200.055 22.006 198.864 22.6123C197.673 23.197 196.243 23.4894 194.576 23.4894H187.332V32H186.065ZM187.332 22.32H194.576C196.677 22.32 198.301 21.7894 199.449 20.7283C200.618 19.6455 201.203 18.1297 201.203 16.1807C201.203 14.1884 200.618 12.7374 199.449 11.8279C198.301 10.8967 196.677 10.4311 194.576 10.4311H187.332V22.32ZM207.256 32V9.26174H223.107V10.4311H208.522V19.7863H221.808V20.9557H208.522V30.8306H223.335V32H207.256ZM234.81 32.3248C233.489 32.3248 232.309 32.2382 231.27 32.065C230.252 31.9134 229.429 31.751 228.801 31.5777L226.884 31.0255L227.209 30.0185L229.061 30.4733C229.949 30.6898 230.923 30.8631 231.984 30.993C233.045 31.1013 233.998 31.1554 234.843 31.1554C237.052 31.1554 238.741 30.7223 239.91 29.8561C241.08 28.9899 241.664 27.7339 241.664 26.0881C241.664 25.2651 241.469 24.5613 241.08 23.9766C240.69 23.3703 239.997 22.8181 239.001 22.32C238.026 21.8219 236.64 21.313 234.843 20.7933C233.002 20.2519 231.519 19.743 230.393 19.2666C229.288 18.7685 228.487 18.1838 227.989 17.5125C227.512 16.8412 227.274 15.9641 227.274 14.8813C227.274 13.4737 227.632 12.3368 228.346 11.4706C229.082 10.6044 230.057 9.96555 231.27 9.55409C232.482 9.14264 233.825 8.93691 235.298 8.93691C236.25 8.93691 237.236 9.02353 238.254 9.19678C239.293 9.34836 240.311 9.57575 241.307 9.87892L242.281 10.1713L242.022 11.1458L241.015 10.8859C239.997 10.6477 239.001 10.4636 238.026 10.3337C237.073 10.1821 236.12 10.1063 235.168 10.1063C233.11 10.1063 231.486 10.5178 230.295 11.3407C229.126 12.1636 228.541 13.333 228.541 14.8489C228.541 15.6718 228.725 16.3431 229.093 16.8628C229.483 17.3609 230.165 17.8048 231.14 18.1946C232.114 18.5844 233.5 19.05 235.298 19.5914C237.138 20.1111 238.611 20.6525 239.715 21.2156C240.841 21.757 241.664 22.4066 242.184 23.1646C242.704 23.9225 242.964 24.8753 242.964 26.0231C242.964 27.4957 242.595 28.6975 241.859 29.6287C241.145 30.5599 240.17 31.2421 238.936 31.6752C237.723 32.1083 236.348 32.3248 234.81 32.3248ZM267.974 32.3248L259.041 22.4824L259.983 21.7353L268.851 31.5452L267.974 32.3248ZM257.384 32.3248C255.219 32.3248 253.302 31.8268 251.635 30.8306C249.967 29.8345 248.657 28.4593 247.704 26.7052C246.751 24.9295 246.275 22.9047 246.275 20.6309C246.275 18.357 246.751 16.3431 247.704 14.589C248.657 12.8132 249.967 11.4273 251.635 10.4311C253.302 9.43499 255.219 8.93691 257.384 8.93691C259.571 8.93691 261.499 9.43499 263.166 10.4311C264.834 11.4273 266.144 12.8132 267.097 14.589C268.049 16.3431 268.526 18.357 268.526 20.6309C268.526 22.9047 268.049 24.9295 267.097 26.7052C266.144 28.4593 264.834 29.8345 263.166 30.8306C261.499 31.8268 259.571 32.3248 257.384 32.3248ZM257.384 31.1554C259.311 31.1554 261.011 30.7007 262.484 29.7911C263.957 28.8816 265.104 27.6364 265.927 26.0556C266.772 24.4531 267.194 22.6448 267.194 20.6309C267.194 18.5953 266.772 16.787 265.927 15.2062C265.104 13.6253 263.957 12.3801 262.484 11.4706C261.011 10.5611 259.311 10.1063 257.384 10.1063C255.5 10.1063 253.822 10.5611 252.349 11.4706C250.877 12.3801 249.718 13.6253 248.874 15.2062C248.029 16.787 247.607 18.5953 247.607 20.6309C247.607 22.6448 248.029 24.4531 248.874 26.0556C249.718 27.6364 250.877 28.8816 252.349 29.7911C253.822 30.7007 255.5 31.1554 257.384 31.1554ZM282.857 32.3248C281.06 32.3248 279.49 32.0108 278.147 31.3828C276.805 30.7332 275.754 29.7262 274.996 28.3619C274.26 26.9976 273.892 25.2435 273.892 23.0996V9.26174H275.159V22.7423C275.159 25.7524 275.841 27.9071 277.205 29.2064C278.57 30.5058 280.454 31.1554 282.857 31.1554C285.304 31.1554 287.199 30.5058 288.542 29.2064C289.885 27.9071 290.556 25.7524 290.556 22.7423V9.26174H291.758V23.0996C291.758 25.2435 291.39 26.9976 290.653 28.3619C289.917 29.7045 288.878 30.7007 287.535 31.3503C286.214 32 284.655 32.3248 282.857 32.3248ZM298.107 32V9.26174H299.374V32H298.107ZM312.466 32.3248C311.145 32.3248 309.964 32.2382 308.925 32.065C307.907 31.9134 307.084 31.751 306.456 31.5777L304.54 31.0255L304.864 30.0185L306.716 30.4733C307.604 30.6898 308.578 30.8631 309.639 30.993C310.701 31.1013 311.653 31.1554 312.498 31.1554C314.707 31.1554 316.396 30.7223 317.565 29.8561C318.735 28.9899 319.319 27.7339 319.319 26.0881C319.319 25.2651 319.125 24.5613 318.735 23.9766C318.345 23.3703 317.652 22.8181 316.656 22.32C315.681 21.8219 314.295 21.313 312.498 20.7933C310.657 20.2519 309.174 19.743 308.048 19.2666C306.943 18.7685 306.142 18.1838 305.644 17.5125C305.168 16.8412 304.929 15.9641 304.929 14.8813C304.929 13.4737 305.287 12.3368 306.001 11.4706C306.738 10.6044 307.712 9.96555 308.925 9.55409C310.138 9.14264 311.48 8.93691 312.953 8.93691C313.906 8.93691 314.891 9.02353 315.909 9.19678C316.948 9.34836 317.966 9.57575 318.962 9.87892L319.937 10.1713L319.677 11.1458L318.67 10.8859C317.652 10.6477 316.656 10.4636 315.681 10.3337C314.729 10.1821 313.776 10.1063 312.823 10.1063C310.766 10.1063 309.141 10.5178 307.95 11.3407C306.781 12.1636 306.196 13.333 306.196 14.8489C306.196 15.6718 306.38 16.3431 306.748 16.8628C307.138 17.3609 307.82 17.8048 308.795 18.1946C309.769 18.5844 311.155 19.05 312.953 19.5914C314.793 20.1111 316.266 20.6525 317.37 21.2156C318.497 21.757 319.319 22.4066 319.839 23.1646C320.359 23.9225 320.619 24.8753 320.619 26.0231C320.619 27.4957 320.251 28.6975 319.514 29.6287C318.8 30.5599 317.825 31.2421 316.591 31.6752C315.378 32.1083 314.003 32.3248 312.466 32.3248ZM321.981 32L331.466 9.26174H333.253L342.77 32H341.374L332.376 10.1713H332.311L323.345 32H321.981ZM325.554 25.5034V24.334H339.035V25.5034H325.554Z" fill="white"/>
                <path d="M12.5887 75.5123C10.5216 75.5123 8.66121 75.0989 7.00752 74.2721C5.3745 73.4245 4.07221 72.1739 3.10067 70.5203C2.1498 68.8666 1.67436 66.8305 1.67436 64.4119C1.67436 62.6342 1.96376 61.0632 2.54255 59.6989C3.12134 58.3139 3.91718 57.146 4.93007 56.1952C5.94295 55.2236 7.12121 54.5001 8.46483 54.0247C9.82913 53.5286 11.2761 53.2805 12.8058 53.2805C13.922 53.2805 14.9969 53.3942 16.0305 53.6216C17.064 53.849 18.0356 54.1384 18.9451 54.4898L19.6583 54.7688L19.0071 57.3114L18.1079 57.0943C17.157 56.8876 16.2682 56.7119 15.4413 56.5672C14.6352 56.4019 13.8083 56.3192 12.9608 56.3192C11.4518 56.3192 10.0979 56.6292 8.89893 57.2494C7.7 57.8488 6.75946 58.748 6.07732 59.947C5.39517 61.1252 5.05409 62.6032 5.05409 64.3809C5.05409 66.1793 5.3745 67.678 6.0153 68.8769C6.65611 70.0758 7.5553 70.975 8.71289 71.5745C9.89114 72.1739 11.2451 72.4737 12.7748 72.4737C13.6016 72.4737 14.4595 72.391 15.3483 72.2256C16.2372 72.0603 17.1674 71.8432 18.1389 71.5745L19.5652 71.1404L20.2474 73.6209L19.1621 74.086C18.0872 74.5408 16.9917 74.8922 15.8754 75.1403C14.7592 75.3883 13.6636 75.5123 12.5887 75.5123ZM33.2864 75.6054C31.2193 75.6054 29.3899 75.1299 27.7982 74.179C26.2066 73.2282 24.956 71.9156 24.0464 70.2412C23.1369 68.5462 22.6821 66.6134 22.6821 64.4429C22.6821 62.2725 23.1369 60.3501 24.0464 58.6757C24.956 56.9807 26.2066 55.6577 27.7982 54.7068C29.3899 53.756 31.2193 53.2805 33.2864 53.2805C35.3742 53.2805 37.2139 53.756 38.8056 54.7068C40.3973 55.6577 41.6479 56.9807 42.5574 58.6757C43.467 60.3501 43.9217 62.2725 43.9217 64.4429C43.9217 66.6134 43.467 68.5462 42.5574 70.2412C41.6479 71.9156 40.3973 73.2282 38.8056 74.179C37.2139 75.1299 35.3742 75.6054 33.2864 75.6054ZM33.2864 74.4891C35.1262 74.4891 36.7488 74.055 38.1545 73.1868C39.5601 72.3186 40.6557 71.1301 41.4412 69.6211C42.2474 68.0914 42.6505 66.3654 42.6505 64.4429C42.6505 62.4999 42.2474 60.7738 41.4412 59.2648C40.6557 57.7558 39.5601 56.5672 38.1545 55.699C36.7488 54.8309 35.1262 54.3968 33.2864 54.3968C31.488 54.3968 29.886 54.8309 28.4804 55.699C27.0748 56.5672 25.9688 57.7558 25.1627 59.2648C24.3565 60.7738 23.9534 62.4999 23.9534 64.4429C23.9534 66.3654 24.3565 68.0914 25.1627 69.6211C25.9688 71.1301 27.0748 72.3186 28.4804 73.1868C29.886 74.055 31.488 74.4891 33.2864 74.4891ZM48.5861 75.2953V53.5906H49.6403L59.6865 67.6366H59.7485L70.0117 53.5906H71.0039V75.2953H69.7947V55.637L60.0585 69.156H59.3454L49.7953 55.8231V75.2953H48.5861ZM76.8833 75.2953V53.5906H85.5032C86.7641 53.5906 87.87 53.818 88.8209 54.2727C89.7718 54.7275 90.5056 55.358 91.0224 56.1641C91.5598 56.9703 91.8286 57.9109 91.8286 58.9858C91.8286 60.1433 91.5495 61.1666 90.9914 62.0554C90.4539 62.9443 89.5754 63.5644 88.3558 63.9158V63.9468C89.6167 64.1949 90.6503 64.7737 91.4565 65.6832C92.2627 66.5721 92.6657 67.74 92.6657 69.187C92.6657 70.4479 92.3867 71.5435 91.8286 72.4737C91.2911 73.3832 90.5056 74.086 89.472 74.5821C88.4592 75.0576 87.2292 75.2953 85.7822 75.2953H76.8833ZM78.0926 74.179H85.7822C87.684 74.179 89.0896 73.7553 89.9992 72.9078C90.9294 72.0396 91.3945 70.7683 91.3945 69.0939C91.3945 67.7297 90.8984 66.6341 89.9061 65.8072C88.9346 64.9804 87.6013 64.567 85.9063 64.567H78.0926V74.179ZM78.0926 63.4507H85.9683C87.5186 63.4507 88.6659 63.058 89.41 62.2725C90.1749 61.487 90.5573 60.4224 90.5573 59.0788C90.5573 57.7558 90.1542 56.7016 89.348 55.9161C88.5418 55.1099 87.2602 54.7068 85.5032 54.7068H78.0926V63.4507ZM93.4804 75.2953L102.534 53.5906H104.24L113.325 75.2953H111.991L103.403 54.4588H103.341L94.7827 75.2953H93.4804ZM96.8911 69.0939V67.9777H109.759V69.0939H96.8911ZM119.541 75.2953V54.7068H111.107V53.5906H129.153V54.7068H120.75V75.2953H119.541ZM132.706 75.2953V53.5906H147.838V54.7068H133.916V63.6368H146.597V64.753H133.916V74.179H148.055V75.2953H132.706ZM156.435 75.2953L165.489 53.5906H167.194L176.279 75.2953H174.946L166.357 54.4588H166.295L157.737 75.2953H156.435ZM159.846 69.0939V67.9777H172.713V69.0939H159.846ZM167.69 52.0092H166.698L162.326 48.1024H163.908L167.69 52.0092ZM185.717 75.2953V53.5906H193.624C195.898 53.5906 197.872 54.0143 199.546 54.8619C201.241 55.7094 202.554 56.9497 203.484 58.5827C204.414 60.195 204.879 62.1588 204.879 64.4739C204.879 66.7064 204.404 68.6392 203.453 70.2722C202.523 71.8845 201.19 73.1248 199.453 73.993C197.738 74.8612 195.691 75.2953 193.314 75.2953H185.717ZM189.004 72.3807H193.5C195.216 72.3807 196.663 72.0706 197.841 71.4505C199.04 70.8097 199.949 69.9105 200.57 68.7529C201.19 67.5746 201.5 66.1483 201.5 64.4739C201.5 62.7169 201.19 61.2492 200.57 60.071C199.97 58.8721 199.081 57.9832 197.903 57.4044C196.725 56.805 195.257 56.5052 193.5 56.5052H189.004V72.3807ZM209.181 75.2953V53.5906H224.313V54.7068H210.391V63.6368H223.072V64.753H210.391V74.179H224.53V75.2953H209.181ZM234.863 75.6054C233.603 75.6054 232.476 75.5227 231.484 75.3573C230.512 75.2126 229.727 75.0576 229.127 74.8922L227.298 74.3651L227.608 73.4039L229.375 73.838C230.223 74.0447 231.153 74.2101 232.166 74.3341C233.179 74.4374 234.088 74.4891 234.894 74.4891C237.003 74.4891 238.615 74.0757 239.732 73.2488C240.848 72.422 241.406 71.2231 241.406 69.6521C241.406 68.8666 241.22 68.1948 240.848 67.6366C240.476 67.0578 239.814 66.5307 238.863 66.0553C237.933 65.5799 236.61 65.0941 234.894 64.598C233.137 64.0812 231.721 63.5954 230.647 63.1407C229.592 62.6652 228.828 62.1071 228.352 61.4663C227.897 60.8255 227.67 59.9883 227.67 58.9548C227.67 57.6111 228.011 56.5259 228.693 55.699C229.396 54.8722 230.326 54.2624 231.484 53.8697C232.641 53.4769 233.923 53.2805 235.329 53.2805C236.238 53.2805 237.179 53.3632 238.15 53.5286C239.142 53.6733 240.114 53.8903 241.065 54.1797L241.995 54.4588L241.747 55.389L240.786 55.1409C239.814 54.9135 238.863 54.7378 237.933 54.6138C237.024 54.4691 236.114 54.3968 235.205 54.3968C233.241 54.3968 231.69 54.7895 230.554 55.575C229.437 56.3605 228.879 57.4768 228.879 58.9237C228.879 59.7092 229.055 60.3501 229.406 60.8462C229.778 61.3216 230.43 61.7454 231.36 62.1174C232.29 62.4895 233.613 62.9339 235.329 63.4507C237.086 63.9468 238.491 64.4636 239.545 65.0011C240.62 65.5178 241.406 66.138 241.902 66.8615C242.398 67.585 242.646 68.4945 242.646 69.5901C242.646 70.9957 242.295 72.1429 241.592 73.0318C240.91 73.9207 239.98 74.5718 238.801 74.9852C237.644 75.3986 236.331 75.6054 234.863 75.6054ZM246.972 75.2953V53.5906H248.181V75.2953H246.972ZM254.073 75.2953V53.5906H255.221L271.003 73.1558H271.065V53.5906H272.274V75.2953H271.189L255.345 55.606H255.283V75.2953H254.073ZM278.162 75.2953V53.5906H292.673V54.7068H279.371V63.6368H291.433V64.753H279.371V75.2953H278.162ZM305.77 75.6054C303.703 75.6054 301.873 75.1299 300.282 74.179C298.69 73.2282 297.44 71.9156 296.53 70.2412C295.62 68.5462 295.166 66.6134 295.166 64.4429C295.166 62.2725 295.62 60.3501 296.53 58.6757C297.44 56.9807 298.69 55.6577 300.282 54.7068C301.873 53.756 303.703 53.2805 305.77 53.2805C307.858 53.2805 309.698 53.756 311.289 54.7068C312.881 55.6577 314.131 56.9807 315.041 58.6757C315.951 60.3501 316.405 62.2725 316.405 64.4429C316.405 66.6134 315.951 68.5462 315.041 70.2412C314.131 71.9156 312.881 73.2282 311.289 74.179C309.698 75.1299 307.858 75.6054 305.77 75.6054ZM305.77 74.4891C307.61 74.4891 309.232 74.055 310.638 73.1868C312.044 72.3186 313.139 71.1301 313.925 69.6211C314.731 68.0914 315.134 66.3654 315.134 64.4429C315.134 62.4999 314.731 60.7738 313.925 59.2648C313.139 57.7558 312.044 56.5672 310.638 55.699C309.232 54.8309 307.61 54.3968 305.77 54.3968C303.972 54.3968 302.37 54.8309 300.964 55.699C299.558 56.5672 298.452 57.7558 297.646 59.2648C296.84 60.7738 296.437 62.4999 296.437 64.4429C296.437 66.3654 296.84 68.0914 297.646 69.6211C298.452 71.1301 299.558 72.3186 300.964 73.1868C302.37 74.055 303.972 74.4891 305.77 74.4891ZM321.07 75.2953V53.5906H329.907C331.416 53.5906 332.718 53.8076 333.813 54.2417C334.93 54.6758 335.798 55.327 336.418 56.1952C337.038 57.0633 337.348 58.1486 337.348 59.4509C337.348 60.319 337.203 61.1356 336.914 61.9004C336.645 62.6652 336.211 63.337 335.612 63.9158C335.012 64.4946 334.216 64.9494 333.224 65.2801C332.253 65.6109 331.064 65.7762 329.658 65.7762H322.279V75.2953H321.07ZM336.914 75.2953L330.527 65.5902L331.705 65.1561L338.371 75.2953H336.914ZM322.279 64.66H329.969C331.891 64.66 333.39 64.2156 334.465 63.3267C335.539 62.4172 336.077 61.1149 336.077 59.4199C336.077 57.8282 335.529 56.6499 334.434 55.8851C333.338 55.0996 331.798 54.7068 329.814 54.7068H322.279V64.66ZM342.554 75.2953V53.5906H343.608L353.654 67.6366H353.716L363.98 53.5906H364.972V75.2953H363.762V55.637L354.026 69.156H353.313L343.763 55.8231V75.2953H342.554ZM367.75 75.2953L376.804 53.5906H378.51L387.595 75.2953H386.262L377.673 54.4588H377.611L369.053 75.2953H367.75ZM371.161 69.0939V67.9777H384.029V69.0939H371.161ZM398.733 75.4813C396.77 75.4813 394.982 75.0576 393.369 74.2101C391.757 73.3419 390.465 72.0913 389.493 70.4582C388.543 68.8045 388.067 66.7994 388.067 64.4429C388.067 62.6859 388.346 61.1149 388.904 59.7299C389.483 58.345 390.269 57.177 391.261 56.2262C392.274 55.2546 393.431 54.5208 394.734 54.0247C396.036 53.5286 397.421 53.2805 398.888 53.2805C400.025 53.2805 401.09 53.3942 402.082 53.6216C403.074 53.849 404.005 54.1384 404.873 54.4898L405.834 54.8929L405.524 55.7611L404.532 55.451C403.498 55.0996 402.537 54.8412 401.648 54.6758C400.759 54.4898 399.86 54.3968 398.95 54.3968C397.173 54.3968 395.55 54.7999 394.082 55.606C392.635 56.3915 391.478 57.5284 390.61 59.0168C389.762 60.5051 389.338 62.3035 389.338 64.4119C389.338 66.5204 389.741 68.3188 390.548 69.8071C391.375 71.2954 392.501 72.4323 393.927 73.2178C395.354 73.9827 396.976 74.3651 398.795 74.3651C399.705 74.3651 400.646 74.2514 401.617 74.024C402.609 73.7966 403.612 73.4866 404.625 73.0938L406.144 72.4737L406.547 73.3109L405.09 73.962C404.015 74.4168 402.94 74.7888 401.865 75.0782C400.811 75.347 399.767 75.4813 398.733 75.4813ZM396.842 80.9695L398.299 76.6286H399.633L397.679 80.9695H396.842ZM407.449 75.2953L416.503 53.5906H418.208L427.293 75.2953H425.96L417.371 54.4588H417.309L408.751 75.2953H407.449ZM410.86 69.0939V67.9777H423.727V69.0939H410.86ZM412.627 51.1721L412.069 50.986L412.441 49.9628C412.689 49.3013 413.02 48.8052 413.433 48.4745C413.867 48.1437 414.312 47.9784 414.766 47.9784C415.221 47.9784 415.676 48.1024 416.131 48.3505C416.585 48.5985 417.082 48.8982 417.619 49.2497C418.032 49.5184 418.425 49.7664 418.797 49.9938C419.169 50.2005 419.521 50.3039 419.851 50.3039C420.203 50.3039 420.534 50.2212 420.844 50.0558C421.154 49.8698 421.412 49.539 421.619 49.0636L422.053 48.1024L422.611 48.2884L422.239 49.3117C421.991 49.9731 421.65 50.4692 421.216 50.8C420.802 51.1307 420.368 51.2961 419.913 51.2961C419.459 51.2961 419.004 51.1721 418.549 50.924C418.094 50.6553 417.598 50.3556 417.061 50.0248C416.647 49.7354 416.255 49.4874 415.883 49.2807C415.511 49.0739 415.159 48.9706 414.828 48.9706C414.477 48.9706 414.146 49.0636 413.836 49.2497C413.547 49.415 413.288 49.7354 413.061 50.2109L412.627 51.1721ZM438.37 75.6054C436.303 75.6054 434.473 75.1299 432.882 74.179C431.29 73.2282 430.039 71.9156 429.13 70.2412C428.22 68.5462 427.765 66.6134 427.765 64.4429C427.765 62.2725 428.22 60.3501 429.13 58.6757C430.039 56.9807 431.29 55.6577 432.882 54.7068C434.473 53.756 436.303 53.2805 438.37 53.2805C440.457 53.2805 442.297 53.756 443.889 54.7068C445.481 55.6577 446.731 56.9807 447.641 58.6757C448.55 60.3501 449.005 62.2725 449.005 64.4429C449.005 66.6134 448.55 68.5462 447.641 70.2412C446.731 71.9156 445.481 73.2282 443.889 74.179C442.297 75.1299 440.457 75.6054 438.37 75.6054ZM438.37 74.4891C440.209 74.4891 441.832 74.055 443.238 73.1868C444.643 72.3186 445.739 71.1301 446.524 69.6211C447.331 68.0914 447.734 66.3654 447.734 64.4429C447.734 62.4999 447.331 60.7738 446.524 59.2648C445.739 57.7558 444.643 56.5672 443.238 55.699C441.832 54.8309 440.209 54.3968 438.37 54.3968C436.571 54.3968 434.969 54.8309 433.564 55.699C432.158 56.5672 431.052 57.7558 430.246 59.2648C429.44 60.7738 429.037 62.4999 429.037 64.4429C429.037 66.3654 429.44 68.0914 430.246 69.6211C431.052 71.1301 432.158 72.3186 433.564 73.1868C434.969 74.055 436.571 74.4891 438.37 74.4891Z" fill="white"/>
                <path d="M3.41074 116.161V93.4229H19.2626V94.5923H4.67758V103.947H17.9632V105.117H4.67758V114.992H19.4899V116.161H3.41074ZM34.7659 116.161L44.251 93.4229H46.0376L55.5552 116.161H54.1584L45.1606 94.3324H45.0956L36.1302 116.161H34.7659ZM38.3391 109.664V108.495H51.8196V109.664H38.3391ZM70.4076 116.486C68.2421 116.486 66.3256 115.988 64.6581 114.992C62.9906 113.996 61.6805 112.62 60.7276 110.866C59.7748 109.091 59.2984 107.066 59.2984 104.792C59.2984 102.518 59.7748 100.504 60.7276 98.7501C61.6805 96.9744 62.9906 95.5884 64.6581 94.5923C66.3256 93.5961 68.2421 93.098 70.4076 93.098C72.5948 93.098 74.5222 93.5961 76.1897 94.5923C77.8571 95.5884 79.1673 96.9744 80.1201 98.7501C81.073 100.504 81.5494 102.518 81.5494 104.792C81.5494 107.066 81.073 109.091 80.1201 110.866C79.1673 112.62 77.8571 113.996 76.1897 114.992C74.5222 115.988 72.5948 116.486 70.4076 116.486ZM70.4076 115.317C72.335 115.317 74.0349 114.862 75.5075 113.952C76.9801 113.043 78.1278 111.798 78.9507 110.217C79.7953 108.614 80.2176 106.806 80.2176 104.792C80.2176 102.756 79.7953 100.948 78.9507 99.3673C78.1278 97.7865 76.9801 96.5413 75.5075 95.6317C74.0349 94.7222 72.335 94.2674 70.4076 94.2674C68.5236 94.2674 66.8453 94.7222 65.3727 95.6317C63.9002 96.5413 62.7416 97.7865 61.897 99.3673C61.0525 100.948 60.6302 102.756 60.6302 104.792C60.6302 106.806 61.0525 108.614 61.897 110.217C62.7416 111.798 63.9002 113.043 65.3727 113.952C66.8453 114.862 68.5236 115.317 70.4076 115.317ZM99.8839 116.161V93.4229H108.167C110.549 93.4229 112.617 93.8668 114.371 94.7547C116.147 95.6426 117.522 96.9419 118.497 98.6527C119.471 100.342 119.959 102.399 119.959 104.824C119.959 107.163 119.46 109.188 118.464 110.899C117.49 112.588 116.093 113.887 114.274 114.797C112.477 115.706 110.333 116.161 107.842 116.161H99.8839ZM103.327 113.108H108.037C109.835 113.108 111.35 112.783 112.585 112.133C113.841 111.462 114.794 110.52 115.443 109.307C116.093 108.073 116.418 106.579 116.418 104.824C116.418 102.984 116.093 101.446 115.443 100.212C114.815 98.9559 113.884 98.0247 112.65 97.4183C111.415 96.7903 109.878 96.4763 108.037 96.4763H103.327V113.108ZM127.714 116.161V93.4229H128.98V116.161H127.714ZM144.671 116.486C143.35 116.486 142.169 116.399 141.13 116.226C140.112 116.075 139.289 115.912 138.661 115.739L136.745 115.187L137.07 114.18L138.921 114.634C139.809 114.851 140.783 115.024 141.845 115.154C142.906 115.262 143.859 115.317 144.703 115.317C146.912 115.317 148.601 114.883 149.77 114.017C150.94 113.151 151.525 111.895 151.525 110.249C151.525 109.426 151.33 108.722 150.94 108.138C150.55 107.531 149.857 106.979 148.861 106.481C147.886 105.983 146.501 105.474 144.703 104.954C142.862 104.413 141.379 103.904 140.253 103.428C139.148 102.93 138.347 102.345 137.849 101.674C137.373 101.002 137.135 100.125 137.135 99.0425C137.135 97.6349 137.492 96.498 138.206 95.6317C138.943 94.7655 139.917 94.1267 141.13 93.7152C142.343 93.3038 143.685 93.098 145.158 93.098C146.111 93.098 147.096 93.1847 148.114 93.3579C149.153 93.5095 150.171 93.7369 151.167 94.0401L152.142 94.3324L151.882 95.3069L150.875 95.047C149.857 94.8088 148.861 94.6248 147.886 94.4948C146.934 94.3432 145.981 94.2674 145.028 94.2674C142.971 94.2674 141.347 94.6789 140.155 95.5018C138.986 96.3247 138.401 97.4941 138.401 99.01C138.401 99.8329 138.585 100.504 138.954 101.024C139.343 101.522 140.026 101.966 141 102.356C141.975 102.746 143.36 103.211 145.158 103.753C146.999 104.272 148.471 104.814 149.576 105.377C150.702 105.918 151.525 106.568 152.044 107.326C152.564 108.084 152.824 109.036 152.824 110.184C152.824 111.657 152.456 112.859 151.719 113.79C151.005 114.721 150.03 115.403 148.796 115.836C147.583 116.269 146.208 116.486 144.671 116.486ZM169.908 116.356C167.851 116.356 165.978 115.912 164.288 115.024C162.599 114.115 161.246 112.805 160.228 111.094C159.232 109.361 158.734 107.261 158.734 104.792C158.734 102.951 159.026 101.305 159.611 99.8546C160.217 98.4036 161.04 97.1801 162.08 96.184C163.141 95.1661 164.353 94.3974 165.718 93.8776C167.082 93.3579 168.533 93.098 170.07 93.098C171.262 93.098 172.377 93.2171 173.416 93.4554C174.456 93.6936 175.43 93.9967 176.34 94.3649L177.347 94.7872L177.022 95.6967L175.982 95.3719C174.9 95.0037 173.893 94.733 172.961 94.5598C172.03 94.3649 171.088 94.2674 170.135 94.2674C168.273 94.2674 166.573 94.6897 165.036 95.5343C163.52 96.3572 162.307 97.5482 161.397 99.1074C160.51 100.667 160.066 102.551 160.066 104.76C160.066 106.968 160.488 108.852 161.332 110.412C162.199 111.971 163.379 113.162 164.873 113.985C166.367 114.786 168.067 115.187 169.973 115.187C170.926 115.187 171.911 115.068 172.929 114.829C173.968 114.591 175.019 114.266 176.08 113.855L177.672 113.205L178.094 114.082L176.567 114.764C175.441 115.241 174.315 115.631 173.189 115.934C172.084 116.215 170.991 116.356 169.908 116.356ZM194.013 116.486C192.216 116.486 190.646 116.172 189.303 115.544C187.96 114.894 186.91 113.887 186.152 112.523C185.416 111.159 185.048 109.405 185.048 107.261V93.4229H186.315V106.903C186.315 109.914 186.997 112.068 188.361 113.368C189.725 114.667 191.609 115.317 194.013 115.317C196.46 115.317 198.355 114.667 199.698 113.368C201.04 112.068 201.712 109.914 201.712 106.903V93.4229H202.914V107.261C202.914 109.405 202.545 111.159 201.809 112.523C201.073 113.866 200.033 114.862 198.691 115.511C197.37 116.161 195.811 116.486 194.013 116.486ZM211.862 116.161V93.4229H221.119C222.7 93.4229 224.065 93.6503 225.212 94.105C226.382 94.5598 227.291 95.2419 227.941 96.1515C228.591 97.061 228.915 98.1979 228.915 99.5622C228.915 100.472 228.764 101.327 228.461 102.128C228.179 102.93 227.724 103.633 227.096 104.24C226.468 104.846 225.635 105.323 224.595 105.669C223.577 106.016 222.332 106.189 220.86 106.189H213.129V116.161H211.862ZM228.461 116.161L221.769 105.994L223.003 105.539L229.987 116.161H228.461ZM213.129 105.019H221.184C223.198 105.019 224.768 104.554 225.894 103.623C227.021 102.67 227.584 101.305 227.584 99.5297C227.584 97.8622 227.01 96.6279 225.862 95.8266C224.714 95.0037 223.101 94.5923 221.022 94.5923H213.129V105.019ZM243.887 116.486C242.566 116.486 241.385 116.399 240.346 116.226C239.328 116.075 238.505 115.912 237.877 115.739L235.961 115.187L236.285 114.18L238.137 114.634C239.025 114.851 239.999 115.024 241.061 115.154C242.122 115.262 243.074 115.317 243.919 115.317C246.128 115.317 247.817 114.883 248.986 114.017C250.156 113.151 250.741 111.895 250.741 110.249C250.741 109.426 250.546 108.722 250.156 108.138C249.766 107.531 249.073 106.979 248.077 106.481C247.102 105.983 245.716 105.474 243.919 104.954C242.078 104.413 240.595 103.904 239.469 103.428C238.364 102.93 237.563 102.345 237.065 101.674C236.589 101.002 236.35 100.125 236.35 99.0425C236.35 97.6349 236.708 96.498 237.422 95.6317C238.159 94.7655 239.133 94.1267 240.346 93.7152C241.559 93.3038 242.901 93.098 244.374 93.098C245.327 93.098 246.312 93.1847 247.33 93.3579C248.369 93.5095 249.387 93.7369 250.383 94.0401L251.358 94.3324L251.098 95.3069L250.091 95.047C249.073 94.8088 248.077 94.6248 247.102 94.4948C246.15 94.3432 245.197 94.2674 244.244 94.2674C242.187 94.2674 240.562 94.6789 239.371 95.5018C238.202 96.3247 237.617 97.4941 237.617 99.01C237.617 99.8329 237.801 100.504 238.17 101.024C238.559 101.522 239.241 101.966 240.216 102.356C241.19 102.746 242.576 103.211 244.374 103.753C246.215 104.272 247.687 104.814 248.792 105.377C249.918 105.918 250.741 106.568 251.26 107.326C251.78 108.084 252.04 109.036 252.04 110.184C252.04 111.657 251.672 112.859 250.935 113.79C250.221 114.721 249.246 115.403 248.012 115.836C246.799 116.269 245.424 116.486 243.887 116.486ZM269.059 116.486C266.893 116.486 264.977 115.988 263.31 114.992C261.642 113.996 260.332 112.62 259.379 110.866C258.426 109.091 257.95 107.066 257.95 104.792C257.95 102.518 258.426 100.504 259.379 98.7501C260.332 96.9744 261.642 95.5884 263.31 94.5923C264.977 93.5961 266.893 93.098 269.059 93.098C271.246 93.098 273.174 93.5961 274.841 94.5923C276.509 95.5884 277.819 96.9744 278.772 98.7501C279.724 100.504 280.201 102.518 280.201 104.792C280.201 107.066 279.724 109.091 278.772 110.866C277.819 112.62 276.509 113.996 274.841 114.992C273.174 115.988 271.246 116.486 269.059 116.486ZM269.059 115.317C270.986 115.317 272.686 114.862 274.159 113.952C275.631 113.043 276.779 111.798 277.602 110.217C278.447 108.614 278.869 106.806 278.869 104.792C278.869 102.756 278.447 100.948 277.602 99.3673C276.779 97.7865 275.631 96.5413 274.159 95.6317C272.686 94.7222 270.986 94.2674 269.059 94.2674C267.175 94.2674 265.497 94.7222 264.024 95.6317C262.552 96.5413 261.393 97.7865 260.548 99.3673C259.704 100.948 259.282 102.756 259.282 104.792C259.282 106.806 259.704 108.614 260.548 110.217C261.393 111.798 262.552 113.043 264.024 113.952C265.497 114.862 267.175 115.317 269.059 115.317ZM299.055 116.161V93.4229H306.786C309.103 93.4229 311.106 93.8885 312.795 94.8197C314.485 95.7508 315.795 97.0718 316.726 98.7826C317.657 100.493 318.123 102.507 318.123 104.824C318.123 107.142 317.646 109.156 316.693 110.866C315.741 112.555 314.387 113.866 312.633 114.797C310.901 115.706 308.843 116.161 306.461 116.161H299.055ZM300.322 114.992H306.689C308.746 114.992 310.532 114.58 312.048 113.757C313.564 112.913 314.734 111.733 315.557 110.217C316.379 108.701 316.791 106.903 316.791 104.824C316.791 102.702 316.379 100.883 315.557 99.3673C314.755 97.8298 313.597 96.6495 312.081 95.8266C310.587 95.0037 308.789 94.5923 306.689 94.5923H300.322V114.992ZM326.238 116.161V93.4229H342.09V94.5923H327.505V103.947H340.791V105.117H327.505V114.992H342.317V116.161H326.238ZM370.619 116.486C368.324 116.486 366.32 115.999 364.61 115.024C362.899 114.028 361.567 112.653 360.614 110.899C359.661 109.123 359.185 107.077 359.185 104.76C359.185 102.464 359.661 100.439 360.614 98.6852C361.589 96.9311 362.942 95.5668 364.675 94.5923C366.407 93.5961 368.389 93.098 370.619 93.098C372.936 93.098 374.95 93.5961 376.661 94.5923C378.393 95.5668 379.736 96.9419 380.689 98.7176C381.642 100.472 382.118 102.497 382.118 104.792C382.118 107.087 381.631 109.123 380.656 110.899C379.682 112.653 378.328 114.028 376.596 115.024C374.885 115.999 372.893 116.486 370.619 116.486ZM370.619 113.303C372.2 113.303 373.586 112.967 374.777 112.296C375.968 111.603 376.899 110.617 377.571 109.34C378.242 108.062 378.577 106.535 378.577 104.76C378.577 103.005 378.242 101.5 377.571 100.244C376.921 98.9667 376 97.9922 374.809 97.3209C373.618 96.6279 372.222 96.2814 370.619 96.2814C369.082 96.2814 367.717 96.6279 366.526 97.3209C365.335 97.9922 364.404 98.9667 363.733 100.244C363.061 101.5 362.726 103.016 362.726 104.792C362.726 106.546 363.051 108.062 363.7 109.34C364.371 110.617 365.303 111.603 366.494 112.296C367.685 112.967 369.06 113.303 370.619 113.303ZM368.085 91.9936L371.236 87.9007H375.362L371.009 91.9936H368.085ZM389.896 116.161V93.4229H397.627C399.945 93.4229 401.948 93.8885 403.637 94.8197C405.326 95.7508 406.636 97.0718 407.567 98.7826C408.498 100.493 408.964 102.507 408.964 104.824C408.964 107.142 408.488 109.156 407.535 110.866C406.582 112.555 405.228 113.866 403.474 114.797C401.742 115.706 399.685 116.161 397.303 116.161H389.896ZM391.163 114.992H397.53C399.587 114.992 401.374 114.58 402.89 113.757C404.406 112.913 405.575 111.733 406.398 110.217C407.221 108.701 407.632 106.903 407.632 104.824C407.632 102.702 407.221 100.883 406.398 99.3673C405.597 97.8298 404.438 96.6495 402.922 95.8266C401.428 95.0037 399.631 94.5923 397.53 94.5923H391.163V114.992ZM417.08 116.161V93.4229H418.346V116.161H417.08ZM437.577 116.486C435.412 116.486 433.495 115.988 431.828 114.992C430.16 113.996 428.85 112.62 427.897 110.866C426.944 109.091 426.468 107.066 426.468 104.792C426.468 102.518 426.944 100.504 427.897 98.7501C428.85 96.9744 430.16 95.5884 431.828 94.5923C433.495 93.5961 435.412 93.098 437.577 93.098C439.764 93.098 441.692 93.5961 443.359 94.5923C445.027 95.5884 446.337 96.9744 447.29 98.7501C448.243 100.504 448.719 102.518 448.719 104.792C448.719 107.066 448.243 109.091 447.29 110.866C446.337 112.62 445.027 113.996 443.359 114.992C441.692 115.988 439.764 116.486 437.577 116.486ZM437.577 115.317C439.505 115.317 441.204 114.862 442.677 113.952C444.15 113.043 445.297 111.798 446.12 110.217C446.965 108.614 447.387 106.806 447.387 104.792C447.387 102.756 446.965 100.948 446.12 99.3673C445.297 97.7865 444.15 96.5413 442.677 95.6317C441.204 94.7222 439.505 94.2674 437.577 94.2674C435.693 94.2674 434.015 94.7222 432.542 95.6317C431.07 96.5413 429.911 97.7865 429.067 99.3673C428.222 100.948 427.8 102.756 427.8 104.792C427.8 106.806 428.222 108.614 429.067 110.217C429.911 111.798 431.07 113.043 432.542 113.952C434.015 114.862 435.693 115.317 437.577 115.317Z" fill="white"/>
                <path d="M1.4765 42.8188H451.812" stroke="white" stroke-width="2.21477"/>
                </svg>
            </div>
            <button className='font-bold mr-80 mt-10 text-xl'>
                Sobre
            </button>

        </div>

    </div>
  )
}
