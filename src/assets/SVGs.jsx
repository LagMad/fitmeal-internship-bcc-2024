const Facebook = ({ fillColor }) => {
  return (
    <svg
      className={`${fillColor}`}
      width="20"
      height="20"
      viewBox="0 0 11 19"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.325 0C6.09837 0 4.92199 0.487275 4.05463 1.35463C3.18728 2.22199 2.7 3.39837 2.7 4.625V7.2H0.225C0.101 7.2 0 7.3 0 7.425V10.825C0 10.949 0.0999999 11.05 0.225 11.05H2.7V18.025C2.7 18.149 2.8 18.25 2.925 18.25H6.325C6.449 18.25 6.55 18.15 6.55 18.025V11.05H9.047C9.15 11.05 9.24 10.98 9.265 10.88L10.115 7.48C10.1234 7.44682 10.1241 7.41217 10.117 7.37869C10.11 7.34521 10.0954 7.31377 10.0744 7.28678C10.0533 7.25978 10.0264 7.23793 9.99571 7.22289C9.96497 7.20786 9.93121 7.20003 9.897 7.2H6.55V4.625C6.55 4.52323 6.57005 4.42245 6.60899 4.32842C6.64794 4.23439 6.70503 4.14896 6.77699 4.07699C6.84896 4.00503 6.93439 3.94794 7.02842 3.90899C7.12245 3.87005 7.22323 3.85 7.325 3.85H9.925C10.049 3.85 10.15 3.75 10.15 3.625V0.225C10.15 0.101 10.05 0 9.925 0H7.325Z"
        fill={fillColor}
      />
    </svg>
  );
};

const Instagram = ({ fillColor }) => {
  return (
    <svg
      className="cust-orange-sosmed"
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6086 0C12.7336 0.003 13.3046 0.009 13.7976 0.023L13.9916 0.03C14.2156 0.038 14.4366 0.0479999 14.7036 0.0599999C15.7676 0.11 16.4936 0.278 17.1306 0.525C17.7906 0.779 18.3466 1.123 18.9026 1.678C19.4111 2.1779 19.8045 2.78259 20.0556 3.45C20.3026 4.087 20.4706 4.813 20.5206 5.878C20.5326 6.144 20.5426 6.365 20.5506 6.59L20.5566 6.784C20.5716 7.276 20.5776 7.847 20.5796 8.972L20.5806 9.718V11.028C20.5831 11.7574 20.5754 12.4868 20.5576 13.216L20.5516 13.41C20.5436 13.635 20.5336 13.856 20.5216 14.122C20.4716 15.187 20.3016 15.912 20.0556 16.55C19.8053 17.2178 19.4117 17.8226 18.9026 18.322C18.4026 18.8303 17.7979 19.2238 17.1306 19.475C16.4936 19.722 15.7676 19.89 14.7036 19.94C14.4663 19.9512 14.229 19.9612 13.9916 19.97L13.7976 19.976C13.3046 19.99 12.7336 19.997 11.6086 19.999L10.8626 20H9.55359C8.82386 20.0025 8.09412 19.9949 7.36459 19.977L7.17059 19.971C6.9332 19.962 6.69587 19.9517 6.45859 19.94C5.39459 19.89 4.66859 19.722 4.03059 19.475C3.36326 19.2244 2.75881 18.8308 2.25959 18.322C1.75064 17.8223 1.35682 17.2176 1.10559 16.55C0.858594 15.913 0.690594 15.187 0.640594 14.122C0.629453 13.8847 0.619453 13.6474 0.610594 13.41L0.605594 13.216C0.587166 12.4868 0.578832 11.7574 0.580594 11.028V8.972C0.577803 8.2426 0.585137 7.5132 0.602594 6.784L0.609594 6.59C0.617594 6.365 0.627594 6.144 0.639594 5.878C0.689594 4.813 0.857594 4.088 1.10459 3.45C1.35571 2.7819 1.75031 2.17702 2.26059 1.678C2.75969 1.16947 3.36374 0.775987 4.03059 0.525C4.66859 0.278 5.39359 0.11 6.45859 0.0599999C6.72459 0.0479999 6.94659 0.038 7.17059 0.03L7.36459 0.0239999C8.09379 0.00623271 8.82319 -0.0014347 9.55259 0.000999928L11.6086 0ZM10.5806 5C9.25451 5 7.98274 5.52678 7.04506 6.46447C6.10738 7.40215 5.58059 8.67392 5.58059 10C5.58059 11.3261 6.10738 12.5979 7.04506 13.5355C7.98274 14.4732 9.25451 15 10.5806 15C11.9067 15 13.1784 14.4732 14.1161 13.5355C15.0538 12.5979 15.5806 11.3261 15.5806 10C15.5806 8.67392 15.0538 7.40215 14.1161 6.46447C13.1784 5.52678 11.9067 5 10.5806 5ZM10.5806 7C10.9746 6.99993 11.3647 7.07747 11.7287 7.22817C12.0927 7.37887 12.4234 7.5998 12.7021 7.87833C12.9807 8.15686 13.2017 8.48754 13.3525 8.85149C13.5034 9.21544 13.581 9.60553 13.5811 9.9995C13.5812 10.3935 13.5036 10.7836 13.3529 11.1476C13.2022 11.5116 12.9813 11.8423 12.7028 12.121C12.4242 12.3996 12.0936 12.6206 11.7296 12.7714C11.3657 12.9223 10.9756 12.9999 10.5816 13C9.78594 13 9.02288 12.6839 8.46027 12.1213C7.89766 11.5587 7.58159 10.7956 7.58159 10C7.58159 9.20435 7.89766 8.44129 8.46027 7.87868C9.02288 7.31607 9.78594 7 10.5816 7M15.8316 3.5C15.5001 3.5 15.1821 3.6317 14.9477 3.86612C14.7133 4.10054 14.5816 4.41848 14.5816 4.75C14.5816 5.08152 14.7133 5.39946 14.9477 5.63388C15.1821 5.8683 15.5001 6 15.8316 6C16.1631 6 16.4811 5.8683 16.7155 5.63388C16.9499 5.39946 17.0816 5.08152 17.0816 4.75C17.0816 4.41848 16.9499 4.10054 16.7155 3.86612C16.4811 3.6317 16.1631 3.5 15.8316 3.5Z"
        fill={fillColor}
      />
    </svg>
  );
};

const TikTok = ({ fillColor }) => {
  return (
    <svg
      className="cust-orange-sosmed"
      width="20"
      height="20    "
      viewBox="0 0 16 18"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.681 2.82C11.9975 2.03962 11.6207 1.03743 11.621 0H8.53103V12.4C8.5072 13.071 8.2239 13.7066 7.74079 14.1729C7.25769 14.6393 6.61248 14.8999 5.94103 14.9C4.52103 14.9 3.34103 13.74 3.34103 12.3C3.34103 10.58 5.00103 9.29 6.71103 9.82V6.66C3.26103 6.2 0.241028 8.88 0.241028 12.3C0.241028 15.63 3.00103 18 5.93103 18C9.07103 18 11.621 15.45 11.621 12.3V6.01C12.874 6.90985 14.3784 7.39265 15.921 7.39V4.3C15.921 4.3 14.041 4.39 12.681 2.82Z"
        fill={fillColor}
      />
    </svg>
  );
};

const Twitter = ({ fillColor }) => {
  return (
    <svg
      className="cust-orange-sosmed"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7129 8.46857L18.9457 0H17.2315L10.9529 7.35286L5.93574 0H0.150024L7.73574 11.12L0.150024 20H1.86431L8.49574 12.2343L13.7943 20H19.58L11.7129 8.46857ZM9.36574 11.2171L8.59717 10.11L2.48145 1.3H5.11431L10.0486 8.41L10.8172 9.51714L17.2329 18.76H14.6L9.36574 11.2171Z"
        fill={fillColor}
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 7.74961H16.075L11.5375 2.29961C11.3253 2.04434 11.2232 1.71524 11.2537 1.38471C11.2842 1.05417 11.4447 0.749285 11.7 0.537112C11.9553 0.324939 12.2844 0.222862 12.6149 0.253336C12.9454 0.283811 13.2503 0.444341 13.4625 0.699612L19.7125 8.19961C19.7545 8.25927 19.7922 8.32194 19.825 8.38711C19.825 8.44961 19.825 8.48711 19.9125 8.54961C19.9692 8.69294 19.9988 8.8455 20 8.99961C19.9988 9.15372 19.9692 9.30629 19.9125 9.44961C19.9125 9.51211 19.9125 9.54961 19.825 9.61211C19.7922 9.67729 19.7545 9.73996 19.7125 9.79961L13.4625 17.2996C13.345 17.4407 13.1978 17.5542 13.0314 17.632C12.8651 17.7097 12.6836 17.7499 12.5 17.7496C12.2079 17.7502 11.9249 17.6485 11.7 17.4621C11.5734 17.3572 11.4688 17.2283 11.3921 17.0829C11.3154 16.9374 11.2682 16.7783 11.2531 16.6146C11.238 16.4509 11.2553 16.2858 11.3041 16.1288C11.3529 15.9718 11.4322 15.8259 11.5375 15.6996L16.075 10.2496H1.25C0.91848 10.2496 0.600536 10.1179 0.366116 9.8835C0.131695 9.64907 0 9.33113 0 8.99961C0 8.66809 0.131695 8.35015 0.366116 8.11573C0.600536 7.88131 0.91848 7.74961 1.25 7.74961Z"
        fill="#FA6815"
      />
    </svg>
  );
};

const Location = () => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.411621" width="35.3333" height="36" rx="10" fill="#FA6815" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1667 17.0783C11.1667 15.3544 11.8515 13.7011 13.0705 12.4821C14.2895 11.2631 15.9428 10.5783 17.6667 10.5783C19.3906 10.5783 21.0439 11.2631 22.2629 12.4821C23.4818 13.7011 24.1667 15.3544 24.1667 17.0783C24.1667 19.5636 23.1347 21.0276 21.9173 22.165C21.404 22.645 20.8973 23.0316 20.3573 23.4423L19.8707 23.8156C19.5065 24.092 19.1588 24.3894 18.8293 24.7063C18.5053 25.0263 18.116 25.473 17.856 26.053C17.8288 26.1211 17.7853 26.1815 17.7293 26.229C17.7233 26.2336 17.7166 26.2372 17.7093 26.2396C17.7093 26.2396 17.696 26.245 17.6667 26.245C17.6373 26.245 17.624 26.241 17.624 26.241C17.6167 26.2382 17.6099 26.2341 17.604 26.229C17.5482 26.1819 17.5047 26.1219 17.4773 26.0543C17.239 25.549 16.909 25.0924 16.504 24.7076C16.1745 24.3907 15.8268 24.0933 15.4627 23.817C15.296 23.6876 15.1347 23.5636 14.9747 23.4436C14.4336 23.0438 13.9134 22.6166 13.416 22.1636C12.2 21.029 11.1667 19.565 11.1667 17.0783ZM26.3333 17.0783C26.3333 21.6116 23.5787 23.7116 21.6267 25.1996C20.7813 25.8463 20.0853 26.3756 19.8333 26.9396C19.4733 27.745 18.7173 28.4116 17.6667 28.4116C16.616 28.4116 15.8613 27.745 15.5 26.9396C15.2467 26.3756 14.5533 25.8463 13.7053 25.1996C11.7547 23.7116 9 21.6103 9 17.0783C9 14.7797 9.91309 12.5753 11.5384 10.95C13.1637 9.32471 15.3681 8.41162 17.6667 8.41162C19.9652 8.41162 22.1696 9.32471 23.7949 10.95C25.4202 12.5753 26.3333 14.7797 26.3333 17.0783ZM19.6667 17.0783C19.6667 17.6087 19.456 18.1174 19.0809 18.4925C18.7058 18.8676 18.1971 19.0783 17.6667 19.0783C17.1362 19.0783 16.6275 18.8676 16.2525 18.4925C15.8774 18.1174 15.6667 17.6087 15.6667 17.0783C15.6667 16.5479 15.8774 16.0391 16.2525 15.6641C16.6275 15.289 17.1362 15.0783 17.6667 15.0783C18.1971 15.0783 18.7058 15.289 19.0809 15.6641C19.456 16.0391 19.6667 16.5479 19.6667 17.0783ZM21.6667 17.0783C21.6667 18.1392 21.2452 19.1566 20.4951 19.9067C19.7449 20.6569 18.7275 21.0783 17.6667 21.0783C16.6058 21.0783 15.5884 20.6569 14.8382 19.9067C14.0881 19.1566 13.6667 18.1392 13.6667 17.0783C13.6667 16.0174 14.0881 15 14.8382 14.2499C15.5884 13.4997 16.6058 13.0783 17.6667 13.0783C18.7275 13.0783 19.7449 13.4997 20.4951 14.2499C21.2452 15 21.6667 16.0174 21.6667 17.0783Z"
        fill="white"
      />
    </svg>
  );
};

const Time = () => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.411621" width="36" height="36" rx="10" fill="#FA6815" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.8571 18.4116C25.8571 20.4955 25.0293 22.494 23.5558 23.9675C22.0823 25.441 20.0838 26.2688 18 26.2688C15.9162 26.2688 13.9177 25.441 12.4442 23.9675C10.9707 22.494 10.1429 20.4955 10.1429 18.4116C10.1429 16.3278 10.9707 14.3293 12.4442 12.8558C13.9177 11.3823 15.9162 10.5545 18 10.5545C20.0838 10.5545 22.0823 11.3823 23.5558 12.8558C25.0293 14.3293 25.8571 16.3278 25.8571 18.4116ZM28 18.4116C28 21.0638 26.9464 23.6073 25.0711 25.4827C23.1957 27.3581 20.6522 28.4116 18 28.4116C15.3478 28.4116 12.8043 27.3581 10.9289 25.4827C9.05357 23.6073 8 21.0638 8 18.4116C8 15.7595 9.05357 13.2159 10.9289 11.3406C12.8043 9.46519 15.3478 8.41162 18 8.41162C20.6522 8.41162 23.1957 9.46519 25.0711 11.3406C26.9464 13.2159 28 15.7595 28 18.4116ZM19.0714 13.4116C19.0714 13.1275 18.9585 12.8549 18.7576 12.654C18.5567 12.4531 18.2842 12.3402 18 12.3402C17.7158 12.3402 17.4433 12.4531 17.2424 12.654C17.0415 12.8549 16.9286 13.1275 16.9286 13.4116V18.4116C16.9286 18.578 16.9673 18.742 17.0417 18.8908C17.1161 19.0396 17.2241 19.169 17.3571 19.2688L20.2143 21.4116C20.3268 21.496 20.4549 21.5575 20.5912 21.5924C20.7275 21.6273 20.8694 21.635 21.0087 21.6151C21.148 21.5952 21.282 21.5481 21.403 21.4764C21.5241 21.4047 21.6299 21.3099 21.7143 21.1973C21.7987 21.0848 21.8601 20.9567 21.8951 20.8204C21.93 20.6841 21.9377 20.5422 21.9178 20.403C21.8979 20.2637 21.8508 20.1297 21.7791 20.0086C21.7074 19.8875 21.6126 19.7818 21.5 19.6973L19.0714 17.8759V13.4116Z"
        fill="white"
      />
    </svg>
  );
};

const StarReview = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.411621" width="36" height="35.1767" rx="10" fill="#FA6815" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5607 14.9219L20.0196 16.0631L21.2484 16.1468L25.4278 16.4305L22.2119 19.1169L21.268 19.9052L21.5687 21.1001L22.591 25.1631L19.043 22.9355L17.9998 22.2805L16.9566 22.9342L13.4087 25.1631L14.431 21.1001L14.7316 19.9052L13.7865 19.1169L10.5706 16.4305L14.7513 16.1468L15.9801 16.0631L16.4376 14.9206L17.9998 11.0327L19.5607 14.9219ZM9.46462 14.5401L14.6192 14.1898L16.5435 9.396C17.0717 8.08349 18.928 8.08349 19.4561 9.396L21.3805 14.1898L26.5351 14.5401C27.9469 14.6356 28.5195 16.4017 27.4345 17.309L23.4708 20.6216L24.731 25.6311C25.0761 27.0037 23.5728 28.094 22.3753 27.3436L17.9998 24.5957L13.6244 27.3423C12.4269 28.094 10.9235 27.0024 11.2687 25.6311L12.5289 20.6216L8.56522 17.309C7.48018 16.4017 8.05407 14.6356 9.46462 14.5401Z"
        fill="white"
      />
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 8.33793H3.925L8.4625 2.88793C8.67467 2.63266 8.77675 2.30356 8.74628 1.97303C8.7158 1.64249 8.55527 1.3376 8.3 1.12543C8.04473 0.913257 7.71563 0.811179 7.3851 0.841654C7.05456 0.872129 6.74967 1.03266 6.5375 1.28793L0.2875 8.78793C0.245451 8.84758 0.207849 8.91025 0.175 8.97543C0.175 9.03793 0.175 9.07543 0.0875002 9.13793C0.0308421 9.28125 0.0011764 9.43382 0 9.58793C0.0011764 9.74204 0.0308421 9.89461 0.0875002 10.0379C0.0875002 10.1004 0.0874998 10.1379 0.175 10.2004C0.207849 10.2656 0.245451 10.3283 0.2875 10.3879L6.5375 17.8879C6.65503 18.029 6.8022 18.1425 6.96856 18.2203C7.13491 18.2981 7.31636 18.3382 7.5 18.3379C7.79207 18.3385 8.07511 18.2368 8.3 18.0504C8.42657 17.9455 8.5312 17.8166 8.60789 17.6712C8.68458 17.5257 8.73183 17.3666 8.74692 17.2029C8.76202 17.0392 8.74466 16.8741 8.69586 16.7171C8.64705 16.5601 8.56775 16.4142 8.4625 16.2879L3.925 10.8379H18.75C19.0815 10.8379 19.3995 10.7062 19.6339 10.4718C19.8683 10.2374 20 9.91945 20 9.58793C20 9.25641 19.8683 8.93847 19.6339 8.70405C19.3995 8.46963 19.0815 8.33793 18.75 8.33793Z"
        fill="#FA6815"
      />
    </svg>
  );
};

export default {
  Facebook,
  Instagram,
  TikTok,
  Twitter,
  RightArrow,
  Location,
  Time,
  StarReview,
  LeftArrow,
};
