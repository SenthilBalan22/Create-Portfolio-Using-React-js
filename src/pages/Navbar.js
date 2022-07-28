import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar( ){
    return (
    <div class="main">
        <nav>
            <svg class="logo" width="200" height="35" viewBox="0 0 159 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-current" d="M17.4243 0.219106L17.2882 0.579498L16.8422 1.73169L16.5459 2.47439C14.2955 8.04346 12.5455 10.6863 10.6844 10.6863C10.2141 10.6987 9.74637 10.6131 9.31103 10.4349C8.87568 10.2567 8.48224 9.98978 8.15576 9.65124L7.9184 9.43592C7.32726 8.89042 7.07856 8.75593 6.50934 8.75593C6.21301 8.75593 5.68235 9.1337 5.01184 10.0215C4.11356 11.2937 3.34976 12.6557 2.7327 14.0855L2.6571 14.2532H10.6398L9.64571 16.3196H2.19221V24.7816H0V0.219106H17.4243ZM14.3181 2.28173H2.19221V10.4665C3.64511 7.94675 5.0262 6.68198 6.51161 6.68198C7.01116 6.66602 7.50858 6.75395 7.97235 6.9402C8.43612 7.12644 8.85612 7.40693 9.20575 7.76391L9.45068 7.98604C10.0025 8.49527 10.2149 8.61238 10.6866 8.61238C11.2052 8.61313 12.5848 6.42207 14.3181 2.28173ZM26.6013 0.219862H28.3475C31.8716 0.219862 36.6151 1.84276 36.6151 8.37967C36.6151 12.2601 34.6081 14.7307 32.0886 15.8323L31.8716 15.9237L36.6166 24.7816H33.9958L29.5691 16.4911C29.3885 16.5213 29.2056 16.5357 29.0225 16.5342H23.8308V24.7816H21.5275V0.262927L23.0393 0.240261C24.2655 0.226661 25.3993 0.221373 26.6013 0.219862ZM28.2137 2.32479H23.8293V14.4738H28.4828C31.4642 14.4738 34.3556 12.5004 34.3556 8.28976C34.3556 4.03986 31.8021 2.39657 28.4322 2.32706L28.2137 2.32479ZM141.166 0.221373H143.736C147.26 0.221373 152.004 1.84427 152.004 8.38118C152.004 12.2616 149.997 14.7322 147.477 15.8338L147.26 15.9252L152 24.7816H149.38L144.952 16.4919C144.772 16.5221 144.589 16.5365 144.406 16.535H139.215V24.7816H136.911V0.262927L138.209 0.243283C139.249 0.230439 140.199 0.226661 141.166 0.221373ZM143.597 2.32404H139.213V14.4731H143.866C146.848 14.4731 149.74 12.4996 149.74 8.28901C149.74 4.03911 147.187 2.39581 143.816 2.3263L143.597 2.32404ZM51.6605 0C56.7313 0 61.8028 3.8268 61.957 11.732V12.1052V12.8948C61.957 21.0546 56.8069 25 51.6567 25C46.5413 25 41.5136 21.1732 41.3601 13.268V12.8948V12.1052C41.3601 3.94769 46.4649 0 51.6605 0ZM51.6605 2.06111C47.7954 2.06111 43.7557 4.90269 43.6226 11.7532V12.1052V12.8948C43.6226 19.956 47.7341 22.8951 51.6189 22.8951C55.5271 22.8951 59.5668 20.055 59.7021 13.2506V12.8948V12.1052C59.7021 5.00015 55.5906 2.06111 51.6605 2.06111Z" fill="#800000"></path>
                <path class="fill-current" d="M99.6391 24.7818V2.32492H105.151L106.144 0.219238H90.874V2.32492H97.3788V24.7818H99.6391Z" fill="#800000"></path>
                <path class="fill-current" d="M112.922 24.7807V0.0874023H110.662V24.7807H112.922Z" fill="#800000"></path>
                <path class="fill-current" d="M131.399 24.7818L132.393 22.7199H120.24V14.1672H128.328L129.322 12.1054H120.24V2.28337H131.399L132.392 0.219238H118.029V24.7818H131.399Z" fill="#800000"></path>
                <path class="fill-current" d="M86.4721 24.8147V0.305832H84.1211V19.1482C84.1211 19.1482 83.1535 18.1192 82.4528 17.2956L67.4823 0.20459H67.04V24.7981L69.326 24.8125V5.79179C69.326 5.79179 70.3586 7.04221 71.0586 7.86499L86.0298 24.8147H86.4721Z" fill="#800000"></path>
            </svg>

            <div class="bx bx-menu" id="menu-icon"></div>

            <ul>
                  <li>
                       <Link target="" to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                      <Link to="/service">Services</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contacts</Link>
                     </li>
            </ul>
            <a href="#" class="top-btn">Hire Me</a>
        </nav>   

        <Outlet />

    </div>    
    );
}
export default Navbar;