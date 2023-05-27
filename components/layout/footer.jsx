import React from 'react'

function Footer() {
    return ( <footer className='pb-8 pt-48 bg-gradient-to-b from-gray-950 to-blue-900'>
    <div className='flex justify-center items-center py-5'>
      <a className='px-[3%] z-2 ' href='https://www.instagram.com/qhacks24/'><span className='text-5xl'><i class="fab fa-instagram text-white"></i></span></a>
      <a className='px-[3%] z-2 ' href='https://twitter.com/QHacks23'><span className='text-5xl'><i class="fab fa-twitter text-white"></i></span></a>
      <a className='px-[3%] z-2 ' href='mailto:hello@qhacks.io'><span className='text-5xl'><i class="far fa-envelope text-white"></i></span></a>
      <a className='px-[3%] z-2 ' href='https://www.facebook.com/QHacks/'><span className='text-5xl'><i class="fab fa-facebook text-white"></i></span></a>
      <a className='px-[3%] z-2 ' href='https://www.linkedin.com/company/qhacks/'><span className='text-5xl'><i class="fab fa-linkedin text-white"></i></span></a>
    </div>
    <div className='flex justify-center items-center py-2'>
      <a href='https://qhacks.io/' className='text-white hover:text-blue-400 px-[3%]'>QHacks 2023</a>
      <a href='https://ghw.mlh.io/' className='text-white hover:text-blue-400 px-[3%]'>Local Hack Day</a>
      <a href='https://medium.com/@qhacks' className='text-white hover:text-blue-400 px-[3%]'>QHacks Blog</a>
      <a href='https://www.youtube.com/watch?v=a3Z7zEc7AXQ' className='text-white hover:text-blue-400 px-[3%]'>Hack Day Tips</a>
      <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' className='text-white hover:text-blue-400 px-[3%]'>MLH Code of Conduct</a>
    </div>
    <div>

    </div>
    <div className='flex justify-center items-center pb-2'>
      <p className='text-white px-[2%]'>Queen's University</p>
      <p className='text-white px-[2%]'>99 University Ave, Kingston ON</p>
      <p className='text-white px-[2%]'>Copyright © 2023 QHACKS</p>
    </div>
  </footer> );
}

export default Footer;