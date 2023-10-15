"use client"

import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/dropDown";
import parse from "html-react-parser"
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import retrieveUserData from "../../../firebase/firestore/retrieveUserData";
import updateUser from "../../../firebase/firestore/updateUser";


export default function Policies() {
  const textBoxStyle = "rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]"

  const { currentUser } = useAuth();
  const [appData, setAppData] = useState(null);

  useEffect(async () => {
    if (currentUser === null)
    {
      window.location.href = '/login';
      return;
    }
    setAppData((await retrieveUserData(currentUser.uid)).result);
  }, []);

  console.log(appData);
  async function saveApplicationData(forceRedirect, path, checkCompletion)
  {
    if (appData === null) return;
    
    if (forceRedirect)
    {
      toast('Application saved!', {
        theme: 'dark',
        pauseOnHover: false,
        type: 'success' 
      });
      setAppData({...appData});
      await updateUser(currentUser.uid, appData);
      setTimeout(() => { window.location.href = path; }, 3000);
    }
    else
    {
      if (checkCompletion)
      {
        if (areFieldsCompleted() == false)
        {
          toast('Please fill out all fields to continue.', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'error'
          });
          setAppData({...appData, policiesComplete: false});
          updateUser(currentUser.uid, appData);
          return;
        }
        else
        {
          toast('Information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          setAppData({...appData, policiesComplete: true});
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 3000);
        }
      }
      else
      {
        if (areFieldsCompleted() == false)
        {
          setAppData({...appData, policiesComplete: false});
          updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 500);
        }
        else
        {
          toast('Information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          setAppData({...appData, policiesComplete: true});
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 3000);
        }
      }
    }
  }

  function areFieldsCompleted()
  {
    return (
      appData.privacyPolicy != null  &&
      appData.termsOfService != null &&
      appData.covidPolicy != null && 
      appData.codeOfConduct != null &&
      appData.mlhPromotions != null
    )
  }

  return (
    <div className="flex justify-center text-white">

      {/* BACKGROUND */}
      <div className="absolute z-[-1] w-full h-full bg-[#111010]">
        <svg xmlns="http://www.w3.org/2000/svg" width="914" height="1050" viewBox="0 0 914 1050" fill="none" className="absolute right-0">
          <g filter="url(#filter0_f_179_250)">
            <path d="M795.733 43.0597C838.033 70.5597 879.933 95.5597 906.133 132.56C932.333 169.46 942.733 218.36 940.833 266.06C938.933 313.86 924.833 360.46 906.933 411.86C889.133 463.26 867.633 519.36 827.233 581.36C786.833 643.36 727.433 711.26 668.533 710.56C609.633 709.86 551.133 640.46 500.633 584.26C450.133 528.16 407.533 485.16 377.833 434.46C348.033 383.86 331.133 325.46 342.633 273.86C354.233 222.16 394.233 177.16 420.433 120.26C446.533 63.4597 458.833 -5.34028 497.833 -34.6403C536.833 -63.9403 602.433 -53.9403 656.633 -34.0403C710.833 -14.0403 753.433 15.6597 795.733 43.0597Z" fill="#EE4036"/>
          </g>
          <defs>
            <filter id="filter0_f_179_250" x="0" y="-392" width="1280.05" height="1441.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_250"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="987" height="1265" viewBox="0 0 987 1265" fill="none" className="absolute left-0 mt-[-200px]">
          <g filter="url(#filter0_f_179_247)">
          <path d="M484.354 390.804C561.154 444.404 649.554 509.704 647.054 572.504C644.654 635.304 551.354 695.704 474.454 755.704C397.654 815.704 337.254 875.304 246.754 905.504C156.254 935.704 35.5542 936.404 -26.9458 876.404C-89.4458 816.404 -93.7458 695.704 -81.5458 587.104C-69.4458 478.604 -40.8458 382.204 21.6542 328.504C84.1542 274.904 180.554 263.904 261.354 279.504C342.254 295.004 407.554 337.104 484.354 390.804Z" fill="#262261"/>
          </g>
          <defs>
            <filter id="filter0_f_179_247" x="-426" y="-66" width="1412.11" height="1330.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_247"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="979" height="1551" viewBox="0 0 979 1551" fill="none" className="absolute right-0 mt-[400px]">
          <g filter="url(#filter0_f_179_256)">
            <path d="M795.389 1204.42C724.665 1218.87 648.441 1211.45 570.682 1192.05C492.923 1172.66 413.631 1141.28 382.16 1081.14C350.767 1020.94 367.258 932.05 361.663 850.63C356.208 769.225 328.604 695.211 343.293 631.875C358.044 568.617 415.027 515.958 474.853 464.607C534.68 413.255 597.507 363.086 668.789 346.137C740.149 329.126 820.027 345.413 865.479 398.049C910.994 450.764 922.146 539.906 962.582 600.671C1003.08 661.515 1072.94 693.919 1079.41 736.17C1085.9 778.279 1028.99 830.235 1004.78 895.445C980.427 960.64 988.829 1039.17 960.215 1096.5C931.664 1153.9 866.254 1189.99 795.389 1204.42Z" fill="#FAAF40"/>
          </g>
          <defs>
            <filter id="filter0_f_179_256" x="0.0358887" y="0.669312" width="1418.89" height="1550.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_256"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="877" height="1279" viewBox="0 0 877 1279" fill="none" className="absolute left-0 mt-[300px]">
          <g filter="url(#filter0_f_179_255)">
            <path d="M449.762 785.914C423.887 829.227 400.495 872.045 364.515 899.631C328.636 927.212 280.166 939.46 232.428 939.371C184.591 939.287 137.489 926.965 85.4469 911.028C33.4085 895.192 -23.467 875.836 -86.9554 837.818C-150.444 799.799 -220.549 743.019 -222.084 684.135C-223.62 625.25 -156.49 564.159 -102.246 511.563C-48.1032 458.97 -6.75067 414.769 42.7858 383.167C92.2186 351.468 149.935 332.364 201.934 341.898C254.037 351.528 300.523 389.792 358.376 413.814C416.126 437.739 485.343 447.42 516.102 485.28C546.86 523.14 539.357 589.072 521.528 643.988C503.599 698.908 475.537 742.605 449.762 785.914Z" fill="#EE4036"/>
          </g>
          <defs>
            <filter id="filter0_f_179_255" x="-561.11" y="0.43811" width="1437.15" height="1277.93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_255"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1060" height="1280" viewBox="0 0 1060 1280" fill="none" className="absolute left-0 mt-[800px]">
          <g filter="url(#filter0_f_179_253)">
            <path d="M472.496 372.538C536.696 405.538 591.496 459.038 639.996 522.838C688.496 586.638 730.696 660.738 717.596 727.338C704.396 793.938 635.896 852.938 589.296 919.938C542.596 986.838 517.796 1061.84 466.696 1102.04C415.596 1142.14 338.196 1147.54 259.396 1150.14C180.596 1152.74 100.196 1152.54 33.9959 1121.14C-32.3041 1089.74 -84.4041 1027.04 -86.9041 957.538C-89.4041 887.938 -42.3041 811.438 -35.8041 738.738C-29.3041 665.938 -63.5041 596.938 -42.1041 559.938C-20.8041 523.038 56.0959 518.138 115.796 482.438C175.596 446.838 218.196 380.338 276.396 353.538C334.596 326.638 408.196 339.438 472.496 372.538Z" fill="#FAAF40"/>
          </g>
          <defs>
            <filter id="filter0_f_179_253" x="-426" y="0" width="1485.01" height="1490.14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_253"/>
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="955" height="901" viewBox="0 0 955 901" fill="none" className="absolute right-0 mt-[1100px]">
          <g filter="url(#filter0_f_179_257)">
            <path d="M536.702 942.546C450.713 905.436 351.014 859.191 340.869 797.166C330.626 735.16 409.918 657.276 473.223 583.073C536.43 508.891 583.65 438.388 666.255 390.653C748.86 342.917 866.968 318.026 940.231 364.273C1013.49 410.52 1041.91 527.905 1051.74 636.746C1061.64 745.468 1052.96 845.645 1002.5 910.788C952.015 975.833 859.78 1005.94 777.493 1006.86C695.128 1007.9 622.711 979.753 536.702 942.546Z" fill="#262261"/>
          </g>
          <defs>
            <filter id="filter0_f_179_257" x="0.968994" y="0.708008" width="1393.37" height="1345.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="169.5" result="effect1_foregroundBlur_179_257"/>
            </filter>
          </defs>
        </svg>
      </div>


      <div className="z-[10] w-[60%] flex flex-col justify-start mt-[6rem]">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Policies</h1>
          <button
            className="font-bold cursor-pointer text-sm px-5 py-2 rounded-xl bg-[#262261]"
            onClick={() => saveApplicationData(true, '/dashboard')}
          >
            Save & Quit
          </button>
        </div>

        <div className="flex flex-col bg-[#202020] py-[4rem] px-[3rem] mt-[1rem] rounded-lg">
          <div className="flex flex-col mb-[1rem]">
            <h1 className="text-[20px] font-bold">{`QHacks Privacy Policy`}</h1>
            <p className="text-[16px] mb-5">{`Your privacy is important to us. It is QHacks' policy to respect your privacy regarding any information we may collect from you across`} <u>our website</u> {`and other sites we own and operate`}</p>
            <div className="text-[16px] h-[325px] rounded-[10px] border-[3px] border-white overflow-scroll p-[2rem]">
                {parse(`Information We Collect
                <br> 1. Log Data
                <br> When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
                <br> 2. Device Data
                <br> We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, device identifiers, device settings, and geo-location data. We collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.
                3. Personal Information
                We may ask for personal information, such as your: Name, Email, Social media profiles, Date of birth, phone/mobile number.
                Legal basis for processing
                We will process your personal information lawfully, fairly and in a transparent manner. We collect and process information about you only where we have legal bases for doing so. These legal bases depend on the services you use and how you use them, meaning we collect and use your information only where:
                It’s necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract (for example, when we provide a service you request from us), it satisfies a legitimate interest (which is not overridden by your data protection interests), such as for research and development, to market and promote our services, and to protect our legal rights and interests, you give us consent to do so for a specific purpose (for example, you might consent to us sending you our newsletter), or we need to process your data to comply with a legal obligation. Where you consent to our use of information about you for a specific purpose, you have the right to change your mind at any time (but this will not affect any processing that has already taken place).
                We don’t keep personal information for longer than is necessary. While we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or storage is 100% secure and cannot guarantee absolute data security. If necessary, we may retain your personal information for our compliance with a legal obligation or in order to protect your vital interests or the vital interests of another natural person.
                Collection and use of information
                We may collect, hold, use and disclose information for the following purposes and personal information will not be further processed in a manner that is incompatible with these purposes: to enable you to customise or personalise your experience of our website, to enable you to access and use our website, associated applications and associated social media platforms; to contact and communicate with you, for internal record keeping and administrative purposes; for analytics, market research and business development, including to operate and improve our website, associated applications and associated social media platforms, to run competitions and/or offer additional benefits to you, for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you, to comply with our legal obligations and resolve any disputes that we may have, and to consider your employment application.
                Disclosure of personal information to third parties
                We may disclose personal information to: third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors, and payment systems operators; our employees, contractors and/or related entities; and, sponsors or promoters of any competition we run.
                International transfer of personal information
                The personal information we collect is stored and processed in Canada, or where we or our partners, affiliates and third-party providers maintain facilities. By providing us with your personal information, you consent to the disclosure to these overseas third parties.
                We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses approved by the European Commission, or the use of binding corporate rules or other legally accepted means.
                Where we transfer personal information from a non-EEA country to another country, you acknowledge that third parties in other jurisdictions may not be subject to similar data protection laws to the ones in our jurisdiction. There are risks if any such third party engages in any act or practice that would contravene the data privacy laws in our jurisdiction and this might mean that you will not be able to seek redress under our jurisdiction’s privacy laws.
                Your rights and controlling your personal information
                Choice and consent: By providing personal information to us, you consent to us collecting, holding, using and disclosing your personal information in accordance with this privacy policy. If you are under 16 years of age, you must have, and warrant to the extent permitted by law to us, that you have your parent or legal guardian’s permission to access and use the website and they (your parents or guardian) have consented to you providing us with your personal information. You do not have to provide personal information to us, however, if you do not, it may affect your use of this website or the products and/or services offered on or through it.
                Information from third parties: If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.
                Restrict: You may choose to restrict the collection or use of your personal information. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below. If you ask us to restrict or limit how we process your personal information, we will let you know how the restriction affects your use of our website or products and services.
                Access and data portability: You may request details of the personal information that we hold about you. You may request a copy of the personal information we hold about you. Where possible, we will provide this information in CSV format or other easily readable machine format. You may request that we erase the personal information we hold about you at any time. You may also request that we transfer this personal information to another third party.
                Correction: If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact us using the details below. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading or out of date.
                Notification of data breaches: We will comply laws applicable to us in respect of any data breach. Complaints: If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
                Unsubscribe: To unsubscribe from our e-mail database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.
                Limits of Our Policy
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
                Changes to This Policy
                At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information.
                If we make a significant change to this privacy policy, for example changing a lawful basis on which we process your personal information, we will ask you to re-consent to the amended privacy policy.
                This policy is effective as of 1 December 2020.
                `)}
            </div>
          </div>

          <div className="flex flex-col mb-[3rem]">
            <div className="flex flex-row flex-start items-center">
              <input type="checkbox" id="busOption" name="busOption" value="" className="w-5 h-5 rounded border border-white bg-[#2D2D2D]"></input>
              <label for="busOption" className="pl-[0.5rem]">I have read and agree to the QHacks Privacy Policy</label>
            </div>
          </div>

          <div className="flex flex-col mb-[1rem]">
            <h1 className="text-[20px] font-bold mb-2">{`QHacks Terms and Conditions`}</h1>
            <div className="text-[16px] h-[325px] rounded-[10px] border-[3px] border-white overflow-scroll p-[2rem]">
                {parse(`Information We Collect
                <br> 1. Log Data
                <br> When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
                <br> 2. Device Data
                <br> We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, device identifiers, device settings, and geo-location data. We collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.
                3. Personal Information
                We may ask for personal information, such as your: Name, Email, Social media profiles, Date of birth, phone/mobile number.
                Legal basis for processing
                We will process your personal information lawfully, fairly and in a transparent manner. We collect and process information about you only where we have legal bases for doing so. These legal bases depend on the services you use and how you use them, meaning we collect and use your information only where:
                It’s necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract (for example, when we provide a service you request from us), it satisfies a legitimate interest (which is not overridden by your data protection interests), such as for research and development, to market and promote our services, and to protect our legal rights and interests, you give us consent to do so for a specific purpose (for example, you might consent to us sending you our newsletter), or we need to process your data to comply with a legal obligation. Where you consent to our use of information about you for a specific purpose, you have the right to change your mind at any time (but this will not affect any processing that has already taken place).
                We don’t keep personal information for longer than is necessary. While we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or storage is 100% secure and cannot guarantee absolute data security. If necessary, we may retain your personal information for our compliance with a legal obligation or in order to protect your vital interests or the vital interests of another natural person.
                Collection and use of information
                We may collect, hold, use and disclose information for the following purposes and personal information will not be further processed in a manner that is incompatible with these purposes: to enable you to customise or personalise your experience of our website, to enable you to access and use our website, associated applications and associated social media platforms; to contact and communicate with you, for internal record keeping and administrative purposes; for analytics, market research and business development, including to operate and improve our website, associated applications and associated social media platforms, to run competitions and/or offer additional benefits to you, for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you, to comply with our legal obligations and resolve any disputes that we may have, and to consider your employment application.
                Disclosure of personal information to third parties
                We may disclose personal information to: third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors, and payment systems operators; our employees, contractors and/or related entities; and, sponsors or promoters of any competition we run.
                International transfer of personal information
                The personal information we collect is stored and processed in Canada, or where we or our partners, affiliates and third-party providers maintain facilities. By providing us with your personal information, you consent to the disclosure to these overseas third parties.
                We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses approved by the European Commission, or the use of binding corporate rules or other legally accepted means.
                Where we transfer personal information from a non-EEA country to another country, you acknowledge that third parties in other jurisdictions may not be subject to similar data protection laws to the ones in our jurisdiction. There are risks if any such third party engages in any act or practice that would contravene the data privacy laws in our jurisdiction and this might mean that you will not be able to seek redress under our jurisdiction’s privacy laws.
                Your rights and controlling your personal information
                Choice and consent: By providing personal information to us, you consent to us collecting, holding, using and disclosing your personal information in accordance with this privacy policy. If you are under 16 years of age, you must have, and warrant to the extent permitted by law to us, that you have your parent or legal guardian’s permission to access and use the website and they (your parents or guardian) have consented to you providing us with your personal information. You do not have to provide personal information to us, however, if you do not, it may affect your use of this website or the products and/or services offered on or through it.
                Information from third parties: If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.
                Restrict: You may choose to restrict the collection or use of your personal information. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below. If you ask us to restrict or limit how we process your personal information, we will let you know how the restriction affects your use of our website or products and services.
                Access and data portability: You may request details of the personal information that we hold about you. You may request a copy of the personal information we hold about you. Where possible, we will provide this information in CSV format or other easily readable machine format. You may request that we erase the personal information we hold about you at any time. You may also request that we transfer this personal information to another third party.
                Correction: If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact us using the details below. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading or out of date.
                Notification of data breaches: We will comply laws applicable to us in respect of any data breach. Complaints: If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
                Unsubscribe: To unsubscribe from our e-mail database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.
                Limits of Our Policy
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
                Changes to This Policy
                At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information.
                If we make a significant change to this privacy policy, for example changing a lawful basis on which we process your personal information, we will ask you to re-consent to the amended privacy policy.
                This policy is effective as of 1 December 2020.
                `)}
            </div>
          </div>

          <div className="flex flex-col mb-[3rem]">
            <div className="flex flex-row flex-start items-center">
              <input type="checkbox" id="busOption" name="busOption" value="" className="w-5 h-5 rounded border border-white bg-[#2D2D2D]"></input>
              <label for="busOption" className="pl-[0.5rem]">I have read and agree to the QHacks Terms and Conditions</label>
            </div>
          </div>

          <div className="flex flex-col mb-[3rem]">
            <h1 className="text-[20px] font-bold mb-1">{`COVID-19 Precautions`}</h1>
            <p className="text-[16px] Inter mb-2">{`QHacks requires all participants to follow COVID-19 safety regulations at the time of the event. QHacks will follow Queen's University's COVID-19 precautions which will not require proof of vaccination.`}</p>
            <div className="flex flex-row flex-start items-center">
              <input type="checkbox" id="busOption" name="busOption" value="" className="w-5 h-5 rounded border border-white bg-[#2D2D2D]"></input>
              <label for="busOption" className="pl-[0.5rem]">I agree to the COVID-19 Precautions Agreement</label>
            </div>
          </div>

          <div className="flex flex-col mb-[4rem]">
            <h1 className="text-[20px] font-bold mb-1">{`MLH Code of Conduct`}</h1>
            <div className="flex flex-row flex-start items-center mb-2">
              <input type="checkbox" id="busOption" name="busOption" value="" className="w-5 h-5 rounded border border-white bg-[#2D2D2D]"></input>
              <label for="busOption" className="pl-[0.5rem]">{parse(`I have read and agree to the <u><a target="_blank" rel="noreferrer" href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">MLH Code of Conduct</a></u>`)}</label>
            </div>
            <div className="flex flex-row flex-start mb-1">
              <input type="checkbox" id="busOption" name="busOption" value="" className="w-5 h-5 rounded border border-white bg-[#2D2D2D] mt-[2px]"></input>
              <label for="busOption" className="pl-[0.5rem]">{parse(`I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the <u><a href="https://mlh.io/privacy" target="_blank" rel="noreferrer">MLH Privacy Policy</a></u>. I further agree to the terms of both the <u><a href="https://mlh.io/terms" target="_blank" rel="noreferrer">MLH Contest Terms and Conditions</a></u> and the <u><a href="https://mlh.io/privacy" target="_blank" rel="noreferrer">MLH Privacy Policy</a></u>.`)}</label>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row flex-start mb-1">
              <input type="checkbox" id="busOption" name="busOption" value="" className="w-5 h-5 rounded border border-white bg-[#2D2D2D] mt-[2px]"></input>
              <label for="busOption" className="pl-[0.5rem]">{parse(`I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or Organizer Newsletters and other communications from MLH.`)}</label>
            </div>
          </div>
          
        </div>

        <div className="flex flex-row justify-center bg-[#202020] py-[1rem] mt-[1rem] mb-[6rem] rounded-lg">
          <button 
            className="w-[25%] flex justify-center items-center text-center bg-[#FAAF40] rounded-lg py-3 font-bold"
            onClick={() => { saveApplicationData(false, '/registration/about'); }}
          >Previous Page</button>
          <div className="h-full w-[2px] bg-white mx-[1rem]"></div>
          <button 
            className="w-[25%] flex justify-center items-center text-center bg-[#EE4036] rounded-lg py-3 font-bold"
            onClick={() => { saveApplicationData(false, '/registration/application', true); }}
          >Finish</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};