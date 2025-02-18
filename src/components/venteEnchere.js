import "../assets/styles/home.css";
import enchere1 from "../assets/img/enchere1.jpg";
import enchere2 from "../assets/img/enchere2.jpg";
import enchere3 from "../assets/img/enchere3.jpg";
import React, {useState, useEffect} from "react";

const VenteEnchere = () => {

 
  const [compteur1, setCompteur1] = useState(60);
  const [compteur2, setCompteur2] = useState(50);
  const [compteur3, setCompteur3] = useState(50);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCompteur1((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval1);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    const interval2 = setInterval(() => {
      setCompteur2((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval2); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 
    const interval3 = setInterval(() => {
      setCompteur3((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval3); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 
   
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

    };
  }, []);

  return (
    <>
      <div className="flex gap-4 mt-8 sm:gap-6 md:gap-8 lg:gap-12 eventsCard">
        <div className="w-72 mx-auto shadow-lg overflow-hidden cardSection">
          <img
            src={enchere1}
            alt="Image Card"
            className="w-full h-48 object-cover"
          />
          <div style={{ backgroundColor: "#ebc785" }} className="">
            <h2
              style={{ backgroundColor: "#00445f", color: "#ebc785" }}
              className="pt-2 pb-2 text-xl font-semibold titleEvent flex justify-center"
            >
              Objets XIX<small>ème</small>
            </h2>

            <div className="ml-4 mt-4 flex">
              <p
                className="text-gray-600 p-2 textCard"
                style={{ color: "#00445f", backgroundColor: "#ebc785" }}
              >
                Vendeur : Antiquité Prestige
              </p>
            </div>

            <div className="ml-4 flex">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2193 11.5404L10.7746 9.09623C10.7245 9.04598 10.665 9.0061 10.5995 8.9789C10.534 8.95169 10.4637 8.93768 10.3928 8.93768C10.3218 8.93768 10.2516 8.95169 10.186 8.9789C10.1205 9.0061 10.061 9.04598 10.0109 9.09623L0.55892 18.0137C0.506505 18.0631 0.464526 18.1225 0.435464 18.1884C0.406402 18.2543 0.390846 18.3254 0.389715 18.3974C0.388584 18.4695 0.401902 18.541 0.428881 18.6078C0.45586 18.6746 0.495953 18.7353 0.546791 18.7863L3.51388 21.7638C3.56481 21.8148 3.62549 21.8552 3.6923 21.8824C3.75911 21.9096 3.83071 21.9231 3.90284 21.9222C3.97498 21.9212 4.04619 21.9058 4.11225 21.8768C4.17831 21.8478 4.23788 21.8059 4.28744 21.7534L13.2184 12.3037C13.2686 12.2536 13.3085 12.1942 13.3357 12.1288C13.363 12.0633 13.377 11.9931 13.3771 11.9222C13.3772 11.8513 13.3633 11.7811 13.3362 11.7156C13.3091 11.6501 13.2694 11.5906 13.2193 11.5404ZM22.4305 8.95428L20.4589 6.99659C20.3687 6.90671 20.2616 6.83558 20.1438 6.78732C20.026 6.73905 19.8998 6.7146 19.7725 6.71537C19.5662 6.7156 19.3652 6.78066 19.1979 6.90135C19.1979 6.88204 19.2006 6.86317 19.2019 6.84655C19.2222 6.55455 19.2536 6.11342 18.9684 5.71362C18.6292 5.25649 18.2568 4.82497 17.8543 4.42256C17.8532 4.42125 17.852 4.42005 17.8507 4.41897C17.2523 3.82959 15.9501 2.71957 13.9551 1.90604C13.1981 1.59577 12.3878 1.4366 11.5697 1.4375C10.152 1.4375 9.07386 2.07719 8.66103 2.45633C8.2545 2.82728 7.98789 3.32673 7.90589 3.87092L8.62464 4.3125C8.62464 4.3125 8.98671 4.22266 9.24726 4.16022C9.51946 4.10214 9.79876 4.08473 10.0761 4.10856C10.6686 4.15752 11.3694 4.45176 11.6793 4.69659C12.2049 5.1193 12.4578 5.68891 12.4996 6.54243C12.5086 6.73245 12.0719 7.50151 11.4143 8.33211C11.3596 8.40117 11.3322 8.48791 11.3372 8.57586C11.3423 8.66381 11.3794 8.74685 11.4417 8.80918L13.4798 10.8473C13.5451 10.912 13.6327 10.9493 13.7246 10.9513C13.8165 10.9534 13.9058 10.9202 13.9739 10.8585C14.5161 10.3644 15.3436 9.60071 15.5314 9.48436C15.8768 9.27188 16.1239 9.231 16.1917 9.22381C16.3678 9.20661 16.5448 9.24393 16.6989 9.33073C16.6997 9.33842 16.6988 9.34618 16.6964 9.35353C16.694 9.36088 16.6901 9.36764 16.685 9.3734L16.6032 9.45112L16.5897 9.4637C16.4994 9.5537 16.4278 9.66068 16.379 9.77849C16.3301 9.8963 16.3051 10.0226 16.3053 10.1501C16.3055 10.2776 16.331 10.4039 16.3802 10.5215C16.4294 10.6392 16.5014 10.7459 16.592 10.8356L18.5663 12.7978C18.6336 12.8647 18.7247 12.9023 18.8197 12.9023C18.9146 12.9023 19.0057 12.8647 19.073 12.7978L22.4278 9.46459C22.4616 9.43136 22.4886 9.39176 22.5071 9.34806C22.5255 9.30436 22.5352 9.25744 22.5354 9.21C22.5357 9.16256 22.5265 9.11554 22.5085 9.07165C22.4905 9.02776 22.464 8.98787 22.4305 8.95428Z"
                  fill="#00445F"
                />
              </svg>

              <p
                className="text-gray-600 p-2 textCard"
                style={{ color: "#00445f", backgroundColor: "#ebc785" }}
              >
                Ferme dans : 8j 4h 2min {compteur1}s
              </p>
            </div>
            <div className="ml-4 flex"></div>

            <div className="flex justify-center">
              <button className="mt-4 px-4 py-2 btnEvent">Aller à la vente</button>
            </div>
          </div>
        </div>{" "}
        <div className="w-72 mx-auto shadow-lg overflow-hidden cardSection">
          <img
            src={enchere2}
            alt="Image Card"
            className="w-full h-48 object-cover"
          />
          <div style={{ backgroundColor: "#ebc785" }} className="">
            <h2
              style={{ backgroundColor: "#00445f", color: "#ebc785" }}
              className="pt-2 pb-2 text-xl font-semibold titleEvent flex justify-center"
            >
              L'Âge d'Or
            </h2>

            <div className="ml-4 mt-4 flex">
              <p
                className="text-gray-600 p-2 textCard"
                style={{ color: "#00445f", backgroundColor: "#ebc785" }}
              >
                Vendeur : Collections Heritage
              </p>
            </div>

            <div className="ml-4 flex">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2193 11.5404L10.7746 9.09623C10.7245 9.04598 10.665 9.0061 10.5995 8.9789C10.534 8.95169 10.4637 8.93768 10.3928 8.93768C10.3218 8.93768 10.2516 8.95169 10.186 8.9789C10.1205 9.0061 10.061 9.04598 10.0109 9.09623L0.55892 18.0137C0.506505 18.0631 0.464526 18.1225 0.435464 18.1884C0.406402 18.2543 0.390846 18.3254 0.389715 18.3974C0.388584 18.4695 0.401902 18.541 0.428881 18.6078C0.45586 18.6746 0.495953 18.7353 0.546791 18.7863L3.51388 21.7638C3.56481 21.8148 3.62549 21.8552 3.6923 21.8824C3.75911 21.9096 3.83071 21.9231 3.90284 21.9222C3.97498 21.9212 4.04619 21.9058 4.11225 21.8768C4.17831 21.8478 4.23788 21.8059 4.28744 21.7534L13.2184 12.3037C13.2686 12.2536 13.3085 12.1942 13.3357 12.1288C13.363 12.0633 13.377 11.9931 13.3771 11.9222C13.3772 11.8513 13.3633 11.7811 13.3362 11.7156C13.3091 11.6501 13.2694 11.5906 13.2193 11.5404ZM22.4305 8.95428L20.4589 6.99659C20.3687 6.90671 20.2616 6.83558 20.1438 6.78732C20.026 6.73905 19.8998 6.7146 19.7725 6.71537C19.5662 6.7156 19.3652 6.78066 19.1979 6.90135C19.1979 6.88204 19.2006 6.86317 19.2019 6.84655C19.2222 6.55455 19.2536 6.11342 18.9684 5.71362C18.6292 5.25649 18.2568 4.82497 17.8543 4.42256C17.8532 4.42125 17.852 4.42005 17.8507 4.41897C17.2523 3.82959 15.9501 2.71957 13.9551 1.90604C13.1981 1.59577 12.3878 1.4366 11.5697 1.4375C10.152 1.4375 9.07386 2.07719 8.66103 2.45633C8.2545 2.82728 7.98789 3.32673 7.90589 3.87092L8.62464 4.3125C8.62464 4.3125 8.98671 4.22266 9.24726 4.16022C9.51946 4.10214 9.79876 4.08473 10.0761 4.10856C10.6686 4.15752 11.3694 4.45176 11.6793 4.69659C12.2049 5.1193 12.4578 5.68891 12.4996 6.54243C12.5086 6.73245 12.0719 7.50151 11.4143 8.33211C11.3596 8.40117 11.3322 8.48791 11.3372 8.57586C11.3423 8.66381 11.3794 8.74685 11.4417 8.80918L13.4798 10.8473C13.5451 10.912 13.6327 10.9493 13.7246 10.9513C13.8165 10.9534 13.9058 10.9202 13.9739 10.8585C14.5161 10.3644 15.3436 9.60071 15.5314 9.48436C15.8768 9.27188 16.1239 9.231 16.1917 9.22381C16.3678 9.20661 16.5448 9.24393 16.6989 9.33073C16.6997 9.33842 16.6988 9.34618 16.6964 9.35353C16.694 9.36088 16.6901 9.36764 16.685 9.3734L16.6032 9.45112L16.5897 9.4637C16.4994 9.5537 16.4278 9.66068 16.379 9.77849C16.3301 9.8963 16.3051 10.0226 16.3053 10.1501C16.3055 10.2776 16.331 10.4039 16.3802 10.5215C16.4294 10.6392 16.5014 10.7459 16.592 10.8356L18.5663 12.7978C18.6336 12.8647 18.7247 12.9023 18.8197 12.9023C18.9146 12.9023 19.0057 12.8647 19.073 12.7978L22.4278 9.46459C22.4616 9.43136 22.4886 9.39176 22.5071 9.34806C22.5255 9.30436 22.5352 9.25744 22.5354 9.21C22.5357 9.16256 22.5265 9.11554 22.5085 9.07165C22.4905 9.02776 22.464 8.98787 22.4305 8.95428Z"
                  fill="#00445F"
                />
              </svg>

              <p
                className="text-gray-600 p-2 textCard"
                style={{ color: "#00445f", backgroundColor: "#ebc785" }}
              >
                Ferme dans : 5j 2h 15min {compteur2}s
              </p>
            </div>
            <div className="ml-4 flex"></div>

            <div className="flex justify-center">
              <button className="mt-4 px-4 py-2 btnEvent">Aller à la vente</button>
            </div>
          </div>
        </div>{" "}
        <div className="w-72 mx-auto shadow-lg overflow-hidden cardSection">
          <img
            src={enchere3}
            alt="Image Card"
            className="w-full h-48 object-cover"
          />
          <div style={{ backgroundColor: "#ebc785" }} className="">
            <h2
              style={{ backgroundColor: "#00445f", color: "#ebc785" }}
              className="pt-2 pb-2 text-xl font-semibold titleEvent flex justify-center"
            >
             L'art de voyager
            </h2>

            <div className="ml-4 mt-4 flex">
              <p
                className="text-gray-600 p-2 textCard"
                style={{ color: "#00445f", backgroundColor: "#ebc785" }}
              >
                Vendeur : Vélos d'Antan
              </p>
            </div>

            <div className="ml-4 flex">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2193 11.5404L10.7746 9.09623C10.7245 9.04598 10.665 9.0061 10.5995 8.9789C10.534 8.95169 10.4637 8.93768 10.3928 8.93768C10.3218 8.93768 10.2516 8.95169 10.186 8.9789C10.1205 9.0061 10.061 9.04598 10.0109 9.09623L0.55892 18.0137C0.506505 18.0631 0.464526 18.1225 0.435464 18.1884C0.406402 18.2543 0.390846 18.3254 0.389715 18.3974C0.388584 18.4695 0.401902 18.541 0.428881 18.6078C0.45586 18.6746 0.495953 18.7353 0.546791 18.7863L3.51388 21.7638C3.56481 21.8148 3.62549 21.8552 3.6923 21.8824C3.75911 21.9096 3.83071 21.9231 3.90284 21.9222C3.97498 21.9212 4.04619 21.9058 4.11225 21.8768C4.17831 21.8478 4.23788 21.8059 4.28744 21.7534L13.2184 12.3037C13.2686 12.2536 13.3085 12.1942 13.3357 12.1288C13.363 12.0633 13.377 11.9931 13.3771 11.9222C13.3772 11.8513 13.3633 11.7811 13.3362 11.7156C13.3091 11.6501 13.2694 11.5906 13.2193 11.5404ZM22.4305 8.95428L20.4589 6.99659C20.3687 6.90671 20.2616 6.83558 20.1438 6.78732C20.026 6.73905 19.8998 6.7146 19.7725 6.71537C19.5662 6.7156 19.3652 6.78066 19.1979 6.90135C19.1979 6.88204 19.2006 6.86317 19.2019 6.84655C19.2222 6.55455 19.2536 6.11342 18.9684 5.71362C18.6292 5.25649 18.2568 4.82497 17.8543 4.42256C17.8532 4.42125 17.852 4.42005 17.8507 4.41897C17.2523 3.82959 15.9501 2.71957 13.9551 1.90604C13.1981 1.59577 12.3878 1.4366 11.5697 1.4375C10.152 1.4375 9.07386 2.07719 8.66103 2.45633C8.2545 2.82728 7.98789 3.32673 7.90589 3.87092L8.62464 4.3125C8.62464 4.3125 8.98671 4.22266 9.24726 4.16022C9.51946 4.10214 9.79876 4.08473 10.0761 4.10856C10.6686 4.15752 11.3694 4.45176 11.6793 4.69659C12.2049 5.1193 12.4578 5.68891 12.4996 6.54243C12.5086 6.73245 12.0719 7.50151 11.4143 8.33211C11.3596 8.40117 11.3322 8.48791 11.3372 8.57586C11.3423 8.66381 11.3794 8.74685 11.4417 8.80918L13.4798 10.8473C13.5451 10.912 13.6327 10.9493 13.7246 10.9513C13.8165 10.9534 13.9058 10.9202 13.9739 10.8585C14.5161 10.3644 15.3436 9.60071 15.5314 9.48436C15.8768 9.27188 16.1239 9.231 16.1917 9.22381C16.3678 9.20661 16.5448 9.24393 16.6989 9.33073C16.6997 9.33842 16.6988 9.34618 16.6964 9.35353C16.694 9.36088 16.6901 9.36764 16.685 9.3734L16.6032 9.45112L16.5897 9.4637C16.4994 9.5537 16.4278 9.66068 16.379 9.77849C16.3301 9.8963 16.3051 10.0226 16.3053 10.1501C16.3055 10.2776 16.331 10.4039 16.3802 10.5215C16.4294 10.6392 16.5014 10.7459 16.592 10.8356L18.5663 12.7978C18.6336 12.8647 18.7247 12.9023 18.8197 12.9023C18.9146 12.9023 19.0057 12.8647 19.073 12.7978L22.4278 9.46459C22.4616 9.43136 22.4886 9.39176 22.5071 9.34806C22.5255 9.30436 22.5352 9.25744 22.5354 9.21C22.5357 9.16256 22.5265 9.11554 22.5085 9.07165C22.4905 9.02776 22.464 8.98787 22.4305 8.95428Z"
                  fill="#00445F"
                />
              </svg>

              <p
                className="text-gray-600 p-2 textCard"
                style={{ color: "#00445f", backgroundColor: "#ebc785" }}
              >
                Ferme dans : 2j 3h 4min {compteur3}s
              </p>
            </div>
            <div className="ml-4 flex"></div>

            <div className="flex justify-center">
              <button className="mt-4 px-4 py-2 btnEvent">Aller à la vente</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default VenteEnchere;
