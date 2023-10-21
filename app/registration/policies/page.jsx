"use client"

import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/dropDown";
import parse from "html-react-parser"
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import retrieveUserData from "../../../firebase/firestore/retrieveUserData";
import updateUser from "../../../firebase/firestore/updateUser";


import blob1 from "../../../assets/registration/Vector-1.png"
import blob2 from "../../../assets/registration/Vector-2.png"
import blob3 from "../../../assets/registration/Vector-3.png"
import blob4 from "../../../assets/registration/Vector-4.png"
import blob5 from "../../../assets/registration/Vector-5.png"
import blob6 from "../../../assets/registration/Vector-6.png"

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
          let dup = appData;
          dup.policiesComplete = false;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          return;
        }
        else
        {
          if (path == '/registration/completion')
          {
            let dup = appData;
            dup.policiesComplete = true;
            dup.applicationComplete = true;
            setAppData(dup);
            if (appData.aboutComplete && appData.educationComplete && appData.appQsComplete && appData.policiesComplete)
            {
              toast('Information saved!', {
                theme: 'dark',
                pauseOnHover: false,
                type: 'success'
              });

              await updateUser(currentUser.uid, appData);
              setTimeout(() => { window.location.href = path; }, 3000);
            }
            else
            {
              toast(
                'Please complete all sections before submitting your application.',
                {
                  theme: 'dark',
                  pauseOnHover: false,
                  type: 'error'
                }
              );
              return;
            }
          }
          else
          {
            toast('Information saved!', {
              theme: 'dark',
              pauseOnHover: false,
              type: 'success'
            });

            let dup = appData;
            dup.policiesComplete = true;
            setAppData(dup);            
            await updateUser(currentUser.uid, appData);
            setTimeout(() => { window.location.href = path; }, 3000);
          }
        }
      }
      else
      {
        if (areFieldsCompleted() == false)
        {
          let dup = appData;
          dup.policiesComplete = false;
          setAppData(dup);
          await updateUser(currentUser.uid, appData);
          setTimeout(() => { window.location.href = path; }, 500);
        }
        else
        {
          toast('Information saved!', {
            theme: 'dark',
            pauseOnHover: false,
            type: 'success'
          });
    
          let dup = appData;
          dup.policiesComplete = true;
          setAppData(dup);
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
      appData.mlhcodeOfConduct != null &&
      appData.mlhSharing != null &&
      appData.mlhPromotions != null
    )
  }

  return (
    <div className="w-screen min-h-screen h-fit m-0 p-0 relative text-white bg-[#111010]">

      {/* BACKGROUND */}
      <div className="hidden md:block absolute inset-0 h-auto w-full bg-transparent overflow-hidden">
        <img src={blob1.src} className="absolute bottom-0 right-0 w-[900px]"></img>
        <img src={blob2.src} className="absolute top-0 right-0 w-[900px]"></img>
        <img src={blob3.src} className="absolute top-[350px] left-0 h-[1000px]"></img>
        <img src={blob4.src} className="absolute bottom-0 left-0 w-[900px]"></img>
        <img src={blob5.src} className="absolute top-[450px] right-0 h-[1000px]"></img>
        <img src={blob6.src} className="absolute top-[-200px] left-0 w-[900px]"></img>
      </div>
      <div className="flex justify-center">
        <div className="z-[10] w-full md:w-[60%] flex flex-col justify-start items-center md:mt-[6rem]">
          <div className="md:flex justify-between items-center w-[80%] md:w-full hidden">
            <h1 className="text-3xl font-bold">Policies</h1>
            <button
              className="font-bold cursor-pointer text-sm px-5 py-2 rounded-xl bg-[#262261]"
              onClick={() => saveApplicationData(true, '/dashboard')}
            >
              Save & Quit
            </button>
          </div>

          <div className="flex flex-col bg-[#202020] py-[3rem] md:py-[4rem] px-[3rem] md:mt-[1rem] md:rounded-lg">
            <div className="flex justify-between items-center md:hidden mb-[2rem]">
              <h1 className="text-2xl md:text-3xl font-bold">Policies</h1>
              <button
                className="cursor-pointer font-light text-sm px-5 py-2 rounded-xl"
                style={{
                  background: "rgba(38, 34, 97, 1)",
                }}
                onClick={() => saveApplicationData(true, '/dashboard', false)}
              >
                Save & Quit
              </button>
            </div>

            <div className="flex flex-col mb-[1rem]">
              <h1 className="text-[20px] font-bold">{`QHacks Privacy Policy`}</h1>
              <p className="text-[16px] mb-5">{`Your privacy is important to us. It is QHacks' policy to respect your privacy regarding any information we may collect from you across`} <u>our website</u> {`and other sites we own and operate`}</p>
              <div className="text-[16px] h-[325px] rounded-[10px] border-[3px] border-white overflow-y-scroll p-[2rem]">
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
                <input type="checkbox" id="privacy-policy" name="privacy-policy" checked={appData?.privacyPolicy} className="w-5 h-5 rounded border border-white bg-[#2D2D2D]" onChange={e => setAppData({ ...appData, privacyPolicy: e.target.checked }) }></input>
                <label for="privacy-policy" className="pl-[0.5rem]">I have read and agree to the QHacks Privacy Policy<span className="text-red-500"> *</span></label>
              </div>
            </div>

            <div className="flex flex-col mb-[1rem]">
              <h1 className="text-[20px] font-bold mb-2">{`QHacks Terms and Conditions`}</h1>
              <div className="text-[16px] h-[325px] rounded-[10px] border-[3px] border-white overflow-y-scroll p-[2rem]">
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
                <input type="checkbox" id="terms-conditions" name="terms-conditions" checked={appData?.termsOfService} className="w-5 h-5 rounded border border-white bg-[#2D2D2D]" onChange={e => setAppData({ ...appData, termsOfService: e.target.checked })}></input>
                <label for="terms-conditions" className="pl-[0.5rem]">I have read and agree to the QHacks Terms and Conditions<span className="text-red-500"> *</span></label>
              </div>
            </div>

            <div className="flex flex-col mb-[4rem]">
              <h1 className="text-[20px] font-bold mb-1">{`MLH Code of Conduct`}</h1>
              <p className="mb-2">We are currently in the process of partnering with MLH. The following 3 checkboxes are for this partnership. If we do not end up partnering with MLH, your information will not be shared</p>
              <div className="flex flex-row flex-start items-center mb-2">
                <input type="checkbox" id="MLH-code-of-conduct" name="MLH-code-of-conduct" checked={appData?.mlhcodeOfConduct} className="w-5 h-5 rounded border border-white bg-[#2D2D2D]" onChange={e => setAppData({ ...appData, mlhcodeOfConduct: e.target.checked })}></input>
                <label for="MLH-code-of-conduct" className="pl-[0.5rem]">{parse(`I have read and agree to the <u><a target="_blank" rel="noreferrer" href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">MLH Code of Conduct</a></u><span className="text-red-500"> *</span>`)}</label>
              </div>
              <div className="flex flex-row flex-start mb-1">
                <input type="checkbox" id="authorize-MLH-application" name="authorize-MLH-application" checked={appData?.mlhSharing} className="w-5 h-5 rounded border border-white bg-[#2D2D2D] mt-[2px]" onChange={e => setAppData({ ...appData, mlhSharing: e.target.checked })}></input>
                <label for="authorize-MLH-application" className="pl-[0.5rem]">{parse(`I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the <u><a href="https://mlh.io/privacy" target="_blank" rel="noreferrer">MLH Privacy Policy</a></u>. I further agree to the terms of both the <u><a href="https://mlh.io/terms" target="_blank" rel="noreferrer">MLH Contest Terms and Conditions</a></u> and the <u><a href="https://mlh.io/privacy" target="_blank" rel="noreferrer">MLH Privacy Policy</a></u>.<span className="text-red-500"> *</span>`)}</label>
              </div>
              <div className="flex flex-row flex-start mb-1">
                <input type="checkbox" id="authorize-MLH-email" name="authorize-MLH-email" checked={appData?.mlhPromotions} className="w-5 h-5 rounded border border-white bg-[#2D2D2D] mt-[2px]" onChange={e => setAppData({ ...appData, mlhPromotions: e.target.checked })}></input>
                <label for="authorize-MLH-email" className="pl-[0.5rem]">{parse(`I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or Organizer Newsletters and other communications from MLH.<span className="text-red-500"> *</span>`)}</label>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center w-full bg-[#202020] py-[1rem] mt-[1rem] mb-[6rem] rounded-lg">
            <button 
              className="w-1/4 flex justify-center items-center text-center bg-[#FAAF40] rounded-lg py-3 font-bold"
              onClick={() => { saveApplicationData(false, '/registration/application'); }}
            >Previous Page</button>
            <div className="h-full w-[2px] bg-white mx-[1rem]"></div>
            <button 
              className="w-1/4 flex justify-center items-center text-center bg-[#EE4036] rounded-lg py-3 font-bold"
              onClick={() => { saveApplicationData(false, '/registration/completion', true); }}
            >Finish</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
