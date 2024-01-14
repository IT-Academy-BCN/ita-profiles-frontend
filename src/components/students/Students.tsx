import ProfilesList from '../ProfilesList';

const Students = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-colortext">Alumn@s</h3>
        <button
          type="button"
          className="rounded-lg border border-gray-400 px-4 py-1 font-semibold hover:bg-gray-100 md:hidden"
        >
          Filtrar
        </button>
      </div>
      {/* <div className="mt-2 flex items-center justify-end gap-2">
        <div>
          <button className="flex h-8 w-8 items-center justify-center border md:h-16 md:w-16 md:rounded-xl md:border-2 md:p-2">
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0082 20.1618V4.03966C15.0135 3.41555 14.7706 2.81491 14.333 2.36988C13.8955 1.92485 13.299 1.67189 12.6749 1.66666H3.34156C2.71745 1.67189 2.12099 1.92485 1.6834 2.36988C1.24581 2.81491 1.00294 3.41555 1.00822 4.03966V20.1618C0.952759 20.6273 1.18131 21.0808 1.58848 21.3132C1.99565 21.5455 2.50235 21.5116 2.87489 21.227L7.30823 17.3992C7.70788 17.0385 8.31558 17.0385 8.71522 17.3992L13.1416 21.2282C13.5143 21.513 14.0213 21.5468 14.4286 21.3142C14.8359 21.0815 15.0642 20.6275 15.0082 20.1618Z"
                stroke="#B91879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <button className="flex h-8 w-8 items-center justify-center border">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2505 7.53023C23.2652 7.94418 23.6127 8.26781 24.0267 8.25307C24.4406 8.23833 24.7643 7.8908 24.7495 7.47685L23.2505 7.53023ZM17.571 1.50354V2.25354C17.5794 2.25354 17.5877 2.2534 17.5961 2.25312L17.571 1.50354ZM7.929 1.50354L7.90395 2.25312C7.9123 2.2534 7.92065 2.25354 7.929 2.25354V1.50354ZM0.750475 7.47685C0.735735 7.8908 1.05936 8.23833 1.47331 8.25307C1.88726 8.26781 2.23478 7.94418 2.24952 7.53023L0.750475 7.47685ZM24.75 7.50354C24.75 7.08933 24.4142 6.75354 24 6.75354C23.5858 6.75354 23.25 7.08933 23.25 7.50354H24.75ZM24 16.5035L24.7495 16.5302C24.7498 16.5213 24.75 16.5124 24.75 16.5035H24ZM17.571 22.5035L17.5961 21.754C17.5877 21.7537 17.5794 21.7535 17.571 21.7535V22.5035ZM7.929 22.5035V21.7535C7.92065 21.7535 7.9123 21.7537 7.90395 21.754L7.929 22.5035ZM1.5 16.5035H0.75C0.75 16.5124 0.750158 16.5213 0.750475 16.5302L1.5 16.5035ZM2.25 7.50354C2.25 7.08933 1.91421 6.75354 1.5 6.75354C1.08579 6.75354 0.75 7.08933 0.75 7.50354H2.25ZM24.3783 8.15114C24.736 7.94221 24.8565 7.4829 24.6476 7.12524C24.4387 6.76758 23.9794 6.64701 23.6217 6.85594L24.3783 8.15114ZM16.104 12.116L15.7257 11.4684L15.7195 11.4721L16.104 12.116ZM9.396 12.116L9.78056 11.4721L9.7743 11.4684L9.396 12.116ZM1.8783 6.85594C1.52064 6.64701 1.06133 6.76758 0.852398 7.12524C0.643468 7.4829 0.764038 7.94221 1.1217 8.15114L1.8783 6.85594ZM24.7495 7.47685C24.6126 3.63305 21.39 0.625478 17.5459 0.75396L17.5961 2.25312C20.6135 2.15227 23.143 4.51305 23.2505 7.53023L24.7495 7.47685ZM17.571 0.753541H7.929V2.25354H17.571V0.753541ZM7.95405 0.75396C4.10996 0.625478 0.887349 3.63305 0.750475 7.47685L2.24952 7.53023C2.35696 4.51305 4.88654 2.15227 7.90395 2.25312L7.95405 0.75396ZM23.25 7.50354V16.5035H24.75V7.50354H23.25ZM23.2505 16.4769C23.143 19.494 20.6135 21.8548 17.5961 21.754L17.5459 23.2531C21.39 23.3816 24.6126 20.374 24.7495 16.5302L23.2505 16.4769ZM17.571 21.7535H7.929V23.2535H17.571V21.7535ZM7.90395 21.754C4.88654 21.8548 2.35696 19.494 2.24952 16.4769L0.750475 16.5302C0.887349 20.374 4.10996 23.3816 7.95405 23.2531L7.90395 21.754ZM2.25 16.5035V7.50354H0.75V16.5035H2.25ZM23.6217 6.85594L15.7257 11.4684L16.4823 12.7636L24.3783 8.15114L23.6217 6.85594ZM15.7195 11.4721C13.8905 12.5644 11.6095 12.5644 9.78054 11.4721L9.01146 12.76C11.3141 14.1351 14.1859 14.1351 16.4885 12.76L15.7195 11.4721ZM9.7743 11.4684L1.8783 6.85594L1.1217 8.15114L9.0177 12.7636L9.7743 11.4684Z"
                fill="#B91879"
              />
            </svg>
          </button>
        </div>
      </div> */}
      <ProfilesList />
    </div>
  );
};
export default Students;
