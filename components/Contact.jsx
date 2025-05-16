'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Swal from 'sweetalert2'
const Contact = () => {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a11550c6-d2e8-464e-a2b8-78eb851278a4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset();
        }
    }

    return (
        <>
            <section className='flex flex-col w-full h-full p-4 bg-neutral-100 dark:bg-dark rounded-2xl'>
                <form onSubmit={handleSubmit} className=''>
                    <div className='flex w-full items-center justify-center lg:pb-3 pb-2 my-6'>
                        <h2 className='text-2xl text-fourth font-semibold'>Get in touch with me!</h2>
                    </div>

                    <div className='flex flex-col w-full gap-6 px-8'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-sm text-fourth font-semibold'>Full Name</label>
                            <input type="text" id="name" name="name" maxLength={100} placeholder='Enter your name' required className='p-2 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='text-sm text-fourth font-semibold'>Email Address</label>
                            <input type="email" id="email" name="email" placeholder='Enter your email' maxLength={60} required className='p-2 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message" className='text-sm text-fourth font-semibold'>Message</label>
                            <textarea id="message" name="message" placeholder='Enter your message' required className='p-2 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg resize-none ' maxLength={600}></textarea>
                        </div>
                        <div className='flex items-center justify-center my-4'>
                            <Button type="submit" variant="outline" className={`rounded-3xl border-2 border-dashed border-second bg-white px-6 py-5 font-semibold uppercase text-dark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-second hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}>Send Message</Button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact
