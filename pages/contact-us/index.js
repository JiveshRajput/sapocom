import React, { useState } from 'react'
import Image from 'next/image'
import SetHeaders from '@/components/SetHeaders'
import VideoBackgroundMessage from '@/components/VideoBackgroundMessage'
import contactAddressBg from '@/assets/images/contact/contact-address.png'

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });

  function formSubmitHandler(e) {
    e.preventDefault();
    // console.log(form)
    alert('Form Submitted Successfully!!!');
  }

  return (
    <>
      <SetHeaders title='Contact Us | Sapocom' />
      {/* About Sapocom */}
      <section className='w-full p-4 md:py-8 bg-gradient-to-r from-secondary to-third text-white' >
        <div className='max-w-1200 mx-auto grid md:grid-cols-[1fr_1fr] grid-cols-1 gap-8'>
          {/* Contact Us Form */}
          <div>
            <p className=' uppercase mb-4 font-medium'>Client</p>
            <h2 className='text-3xl font-medium max-w-[550px] mb-4'>Have a Question ?<br />Let’s Get in Touch with us 👋</h2>
            <p className=' mb-6 opacity-70 max-w-[500px]'>Our global presence allows us to provide local support and expertise to our clients, no matter where they are located.</p>
            {/* Form  */}
            <form className='max-w-[450px]' onSubmit={formSubmitHandler}>
              <label htmlFor="name" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Name *</span>
                <input type="text" name="name" id="name" required placeholder='Please enter your name' className='border-b border-b-white/60 focus:border-b-white w-full py-2 outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
              </label>

              <label htmlFor="email" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Email *</span>
                <input type="email" name="email" id="email" required placeholder='Please enter your email' className='border-b border-b-white/60 focus:border-b-white w-full py-2 outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
              </label>

              <label htmlFor="mobNumber" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Phone Number *</span>
                <input type="number" name="mobNumber" id="mobNumber" required placeholder='Please enter your phone number' className='border-b border-b-white/60 focus:border-b-white w-full py-2 outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.number} onChange={(e) => setForm({...form, number: e.target.value})}/>
              </label>

              <label htmlFor="message" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Message *</span>
                <textarea name="message" id="message" rows="4" required placeholder='Write your message here' className='border-b border-b-white/60 focus:border-b-white w-full py-2 resize-none outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
              </label>

              <div className='grid 1000:grid-cols-[135px_1fr]  gap-4'>
                <button type='submit' className='rounded-sm py-2 px-3 bg-white text-secondary inline'>Send Message</button>
                <p className=' inline-block'>By clicking here, I state that I have read and understood the terms and conditions.</p>
              </div>
            </form>
          </div>

          {/* Office Address Details  */}
          <div className="flex flex-grow text-center w-full justify-center items-center max-md:hidden">
            <div className='md:w-full max-md:max-w-[450px] relative'>
              <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-[10] rounded-tr-[60px] p-8 flex justify-start place-items-end'>
                <div className='text-left text-white'>
                  <div className='mb-4'>
                    <p className='text-white/60 pb-1 border-b border-b-white mb-2 max-w-[200px]'>Office Address</p>
                    <p>USqaure Ring road Bangalore ,411587</p>
                  </div>
                  <div className='mb-4'>
                    <p className='text-white/60 pb-1 border-b border-b-white mb-2 max-w-[200px]'>Working Hour</p>
                    <p>Monday to Friday</p>
                    <p>9:00 AM to 8:00 PM</p>
                    <p className='opacity-60'>Our Support Team is available 24Hrs</p>
                  </div>
                  <div className='mb-4'>
                    <p className='text-white/60 pb-1 border-b border-b-white mb-2 max-w-[200px]'>Contact Us</p>
                    <p>020 7993 2905</p>
                    <p>hello@sapocomglobal.com</p>
                  </div>
                  <div className=' flex '>
                    <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="instagram">
                      <Image alt='instagram_logo' src={require('../../assets/images/icons/instagram.svg')} />
                    </a>
                    <a href='https://twitter.com/home' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="twitter">
                      <Image alt='twitter_logo' src={require('../../assets/images/icons/twitter.svg')} />
                    </a>
                    <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="facebook">
                      <Image alt='facebook_logo' src={require('../../assets/images/icons/facebook.svg')} />
                    </a>
                    <a href='https://www.linkedin.com/in/sapocom-technologies-79382b231/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="linked in">
                      <Image alt='linkedIn_logo' src={require('../../assets/images/icons/linked-in.svg')} />
                    </a>
                  </div>
                </div>
              </div>
              <Image src={contactAddressBg} alt='contact_address_image' className='md:w-full max-md:max-w-[450px]' />
            </div>

          </div>
        </div>
      </section>

      <VideoBackgroundMessage />
    </>
  )
}

export default ContactUs
