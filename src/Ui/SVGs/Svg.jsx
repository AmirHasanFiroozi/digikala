import FullCover from "../Other/FullCover";

function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
function Login() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
      />
    </svg>
  );
}

function Cart({ width, height, color = "none" }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Interface / Shopping_Cart_02">
        <path
          id="Vector"
          d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function HanmberMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function Percent() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="amazing">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.374 1.6755C11.8893 1.84875 12.2388 2.06925 12.7953 2.55375L13.1973 2.90925L13.279 2.97675L13.3855 3.05475L13.8753 3.36975C14.503 3.77475 14.8083 4.04475 15.1225 4.491C15.4083 4.8975 15.5568 5.241 15.718 5.87175L15.8875 6.5775L15.9273 6.71625L15.964 6.82275L16.1778 7.362C16.4478 8.0475 16.54 8.45475 16.54 9C16.54 9.546 16.447 9.9525 16.1778 10.638L15.9933 11.0993L15.9333 11.2643L15.8883 11.4225L15.718 12.1283C15.5568 12.7598 15.4083 13.1033 15.1218 13.5105C14.8098 13.953 14.5053 14.223 13.8873 14.6228L13.3848 14.946L13.2798 15.024L13.1478 15.1343L12.7945 15.447C12.238 15.9315 11.8885 16.152 11.371 16.326C10.855 16.4985 10.4665 16.53 9.70304 16.4753L9.18779 16.4363L9.04004 16.4318L8.97554 16.4325L8.81654 16.44L8.37704 16.4753C7.61354 16.53 7.22429 16.4978 6.70454 16.3245C6.19004 16.1513 5.84054 15.9315 5.28479 15.447L4.83929 15.0555L4.73129 14.9722L4.65404 14.9183L4.18979 14.622C3.57404 14.223 3.26804 13.9515 2.95754 13.5098C2.64479 13.065 2.49704 12.696 2.31629 11.946L2.20679 11.4803L2.16104 11.3115L2.11604 11.1773L1.90229 10.638C1.63229 9.9525 1.54004 9.54675 1.54004 9C1.54004 8.45475 1.63304 8.0475 1.90229 7.362L2.11604 6.82425L2.17754 6.63075L2.20679 6.5205L2.31629 6.05475L2.40479 5.70975C2.55104 5.1795 2.69729 4.8615 2.95754 4.49175C3.26804 4.04925 3.57254 3.77925 4.18979 3.3795L4.60379 3.1155L4.71854 3.0375L4.83854 2.94525L4.93154 2.8665L5.28404 2.55375C5.84129 2.06925 6.19079 1.84875 6.70679 1.6755C7.22429 1.5015 7.61354 1.47 8.37704 1.5255L8.90204 1.5645L9.07304 1.56825L9.27929 1.5585L9.70229 1.5255C10.4673 1.47 10.8565 1.50225 11.374 1.6755ZM9.92579 3.0135L9.25829 3.06225C9.17954 3.06675 9.10829 3.06825 9.04004 3.06825L8.83379 3.063L8.71679 3.05625L8.29454 3.02325L8.00579 3.00525C7.62029 2.98725 7.43054 3.01425 7.18529 3.09675L7.10429 3.126C6.84179 3.225 6.63929 3.36075 6.25079 3.70125L5.83829 4.06575L5.72204 4.1595L5.61554 4.23975L5.44304 4.35825L4.90304 4.70475C4.51529 4.962 4.35329 5.1135 4.18454 5.35425C4.01204 5.59875 3.92429 5.80125 3.80204 6.2895L3.65729 6.90075L3.61979 7.04325L3.58229 7.17075L3.51179 7.374L3.25304 8.0265C3.08579 8.46525 3.04004 8.6955 3.04004 9L3.04154 9.09C3.05054 9.3525 3.10304 9.5775 3.25304 9.975L3.53054 10.6755L3.58304 10.833L3.63854 11.0258L3.80279 11.7113C3.92429 12.1988 4.01279 12.4013 4.18529 12.6465C4.37054 12.9105 4.54904 13.0695 5.02604 13.3763L5.44529 13.6433C5.53379 13.701 5.59829 13.7468 5.66729 13.7985L5.72204 13.8405L5.90279 13.9905L6.25079 14.2988C6.67754 14.6738 6.88004 14.8013 7.18154 14.9025C7.48454 15.0038 7.70204 15.0218 8.29454 14.9775L8.52404 14.9588L8.94029 14.9333L9.04004 14.9318C9.10754 14.9318 9.17954 14.934 9.25829 14.9378L9.38279 14.9453L9.78479 14.9775C10.3773 15.0218 10.5948 15.0038 10.8933 14.904C11.1985 14.8005 11.4018 14.673 11.8285 14.2988L12.1188 14.0408L12.2778 13.9043L12.4135 13.7978L12.553 13.698L12.634 13.6433L13.1748 13.2968C13.5633 13.0403 13.726 12.8873 13.8948 12.6473C14.0823 12.3795 14.17 12.1643 14.3103 11.574L14.3785 11.2808C14.4025 11.1773 14.4228 11.097 14.4415 11.0258L14.4978 10.8308L14.5683 10.626L14.827 9.97425C14.9943 9.534 15.04 9.30375 15.04 9C15.04 8.69625 14.9943 8.466 14.827 8.02575L14.5495 7.32525L14.4783 7.1055L14.422 6.9L14.3103 6.42675L14.2368 6.13425C14.155 5.83275 14.0845 5.65425 13.9818 5.4855L13.8955 5.35425C13.726 5.11425 13.5648 4.962 13.1755 4.70475L12.7075 4.40475C12.6429 4.36353 12.5792 4.32102 12.5163 4.27725L12.3573 4.1595L12.241 4.065L11.7183 3.60525C11.4033 3.3375 11.2165 3.21825 10.9855 3.12975L10.822 3.07425C10.5805 3.00075 10.3698 2.98425 9.92579 3.0135ZM12.04 11.625C12.04 11.3266 11.9215 11.0405 11.7105 10.8295C11.4996 10.6185 11.2134 10.5 10.915 10.5C10.6167 10.5 10.3305 10.6185 10.1195 10.8295C9.90857 11.0405 9.79004 11.3266 9.79004 11.625C9.79004 11.9234 9.90857 12.2095 10.1195 12.4205C10.3305 12.6315 10.6167 12.75 10.915 12.75C11.2134 12.75 11.4996 12.6315 11.7105 12.4205C11.9215 12.2095 12.04 11.9234 12.04 11.625ZM10.69 5.55L11.89 6.45L7.39004 12.45L6.19004 11.55L10.69 5.55ZM8.29004 6.375C8.29004 6.07663 8.17151 5.79048 7.96053 5.57951C7.74956 5.36853 7.46341 5.25 7.16504 5.25C6.86667 5.25 6.58052 5.36853 6.36954 5.57951C6.15857 5.79048 6.04004 6.07663 6.04004 6.375C6.04004 6.67337 6.15857 6.95952 6.36954 7.1705C6.58052 7.38147 6.86667 7.5 7.16504 7.5C7.46341 7.5 7.74956 7.38147 7.96053 7.1705C8.17151 6.95952 8.29004 6.67337 8.29004 6.375Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function Bag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="19"
      height="18"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Cube() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width="19"
      height="18"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  );
}

function Fire({ width, height }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="searchTrend">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.51125 6.82876C9.67775 7.12651 9.81875 7.37626 9.86075 7.46026C10.1315 8.00326 10.25 8.44276 10.25 9.00001C10.25 9.39783 10.092 9.77936 9.81066 10.0607C9.52936 10.342 9.14782 10.5 8.75 10.5C8.35218 10.5 7.97064 10.342 7.68934 10.0607C7.40804 9.77936 7.25 9.39783 7.25 9.00001L7.25225 5.58226C7.25225 4.86751 6.34775 4.55701 5.90975 5.12251C4.31525 7.17901 3.5 8.92951 3.5 10.4168C3.5 13.7738 6.1835 16.5 9.5 16.5C12.8165 16.5 15.5 13.7738 15.5 10.4168C15.5 8.19076 13.6625 5.33176 10.0287 1.71826C9.9446 1.63452 9.84178 1.57195 9.72874 1.5357C9.6157 1.49945 9.49567 1.49055 9.37852 1.50974C9.26136 1.52892 9.15044 1.57564 9.05486 1.64605C8.95929 1.71646 8.88179 1.80855 8.82875 1.91476C8.2235 3.12601 8.2235 4.37476 8.82875 5.58526C8.96225 5.85226 9.26525 6.39226 9.51125 6.82876ZM5.75 9.00001C5.75 9.79566 6.06607 10.5587 6.62868 11.1213C7.19129 11.6839 7.95435 12 8.75 12C9.54565 12 10.3087 11.6839 10.8713 11.1213C11.4339 10.5587 11.75 9.79566 11.75 9.00001C11.75 8.19151 11.5715 7.52851 11.2025 6.78976C11.1433 6.67276 10.97 6.36301 10.778 6.02176C10.5694 5.65616 10.3668 5.2871 10.1705 4.91476C9.96575 4.50526 9.8675 4.10551 9.87575 3.70576C12.635 6.60826 14 8.87551 14 10.4168C14 12.9503 11.9825 15 9.5 15C7.0175 15 5 12.9503 5 10.4168C5 9.76426 5.2475 8.97301 5.75 8.05126V9.00001Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function Discount() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="discount">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.12 3C17.3189 3 17.5097 3.07902 17.6503 3.21967C17.791 3.36032 17.87 3.55109 17.87 3.75V14.25C17.87 14.4489 17.791 14.6397 17.6503 14.7803C17.5097 14.921 17.3189 15 17.12 15H5.12C4.9211 15 4.73036 14.9209 4.58975 14.7803L1.58975 11.7802C1.44908 11.6396 1.37004 11.4489 1.37 11.25V6.75C1.37004 6.5511 1.44908 6.36037 1.58975 6.21975L4.58975 3.21975C4.73036 3.07909 4.9211 3.00004 5.12 3H17.12ZM16.37 4.5H5.4305L2.87 7.0605V10.9395L5.4305 13.5H16.37V4.5ZM11.87 7.125C11.87 7.42337 11.7515 7.70952 11.5405 7.9205C11.3295 8.13147 11.0434 8.25 10.745 8.25C10.4466 8.25 10.1605 8.13147 9.9495 7.9205C9.73852 7.70952 9.62 7.42337 9.62 7.125C9.62 6.82663 9.73852 6.54048 9.9495 6.3295C10.1605 6.11853 10.4466 6 10.745 6C11.0434 6 11.3295 6.11853 11.5405 6.3295C11.7515 6.54048 11.87 6.82663 11.87 7.125ZM13.745 12C14.0434 12 14.3295 11.8815 14.5405 11.6705C14.7515 11.4595 14.87 11.1734 14.87 10.875C14.87 10.5766 14.7515 10.2905 14.5405 10.0795C14.3295 9.86853 14.0434 9.75 13.745 9.75C13.4466 9.75 13.1605 9.86853 12.9495 10.0795C12.7385 10.2905 12.62 10.5766 12.62 10.875C12.62 11.1734 12.7385 11.4595 12.9495 11.6705C13.1605 11.8815 13.4466 12 13.745 12ZM8.12 9C8.12 9.29547 8.0618 9.58806 7.94872 9.86104C7.83565 10.134 7.66992 10.3821 7.46099 10.591C7.25205 10.7999 7.00402 10.9657 6.73103 11.0787C6.45805 11.1918 6.16547 11.25 5.87 11.25C5.57452 11.25 5.28194 11.1918 5.00896 11.0787C4.73597 10.9657 4.48794 10.7999 4.27901 10.591C4.07007 10.3821 3.90434 10.134 3.79127 9.86104C3.67819 9.58806 3.62 9.29547 3.62 9C3.62 8.40326 3.85705 7.83097 4.27901 7.40901C4.70096 6.98705 5.27326 6.75 5.87 6.75C6.46673 6.75 7.03903 6.98705 7.46099 7.40901C7.88294 7.83097 8.12 8.40326 8.12 9ZM5.12 9C5.12 9.19891 5.19901 9.38968 5.33967 9.53033C5.48032 9.67098 5.67108 9.75 5.87 9.75C6.06891 9.75 6.25967 9.67098 6.40032 9.53033C6.54098 9.38968 6.62 9.19891 6.62 9C6.62 8.80109 6.54098 8.61032 6.40032 8.46967C6.25967 8.32902 6.06891 8.25 5.87 8.25C5.67108 8.25 5.48032 8.32902 5.33967 8.46967C5.19901 8.61032 5.12 8.80109 5.12 9ZM14.756 6.3975L11.006 12.3975L9.734 11.6025L13.484 5.6025L14.756 6.3975Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function Location() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function ArrowLeft({ width, height }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ArrowRight({ width, height }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function ArrowBottom({ width, height }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ArrowTop({ width, height }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}

function X({ width, height }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

function Home({ width, height, color = "none" }) {
  return (
    <svg
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Home</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill={color}
        fillRule="evenodd"
      >
        <g id="Home">
          <rect
            id="Rectangle"
            fillRule="nonzero"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <path
            d="M5,10 L5,19 C5,19.5523 5.44772,20 6,20 L18,20 C18.5523,20 19,19.5523 19,19 L19,10"
            id="Path"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M21,11 L12.307,4.23875 C12.1264,4.09832 11.8736,4.09832 11.693,4.23875 L3,11"
            id="Path"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function Category({ width, height }) {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
    </svg>
  );
}

function User({ width, height, color = "none" }) {
  return (
    <svg
      fill={color}
      width={`${width ? width : "19"}px`}
      height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

function Error({ width, height}) {
  return (
    <svg
    width={`${width ? width : "19"}px`}
    height={`${height ? height : "18"}px`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}

export {
  Login,
  Search,
  Cart,
  HanmberMenu,
  Percent,
  Bag,
  Cube,
  Fire,
  Discount,
  Location,
  ArrowLeft,
  ArrowRight,
  X,
  Home,
  Category,
  User,
  ArrowBottom,
  ArrowTop,
  Error
};
