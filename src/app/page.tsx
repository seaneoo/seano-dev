import { Button } from '@headlessui/react'
import Link from 'next/link'
import cat from './icon.svg'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='h-full container px-8 xl:px-8 py-8 xl:py-24'>
            <h1 className='font-semibold text-8xl flex flex-col lg:flex-row justify-center lg:justify-start lg:items-center gap-4'>
                <Image src={cat} alt='' className='inline-block' /> Hi, I&#39;m
                Sean.
            </h1>
            <div className='w-full lg:w-1/2 xl:w-5/12 py-8 xl:py-12'>
                <p>
                    I am a dedicated and experienced software developer based in
                    Denver, CO with a focus on the Java ecosystem. Although I
                    primarily develop Android apps and back-end APIs, my passion
                    for technology has given me a diverse skill set that also
                    includes modding video games and designing websites.
                </p>
                <p className='pt-6'>
                    To see what I am currently up to, check out my{' '}
                    <Link href='https://github.com/seaneoo' target='_blank'>
                        GitHub
                    </Link>
                    .
                </p>
            </div>
            <h2 className='font-semibold text-6xl pb-8'>Let&#39;s chat.</h2>
            <Link href='mailto:hey@seano.dev'>
                <Button className='rounded-full bg-foreground border border-foreground text-background py-2 px-12 text-lg transition-all duration-200 hover:text-foreground hover:bg-transparent'>
                    Email me
                </Button>
            </Link>
        </main>
    )
}
