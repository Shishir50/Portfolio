import { styles } from "../styles";

const Hero = () => {
  return (
<section className={`relative w-full sm:h-[80vh] h-[55vh] mx-auto`}>

      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} >

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-72 h-40 violet-gradient' />
        </div>

       <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shishir</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Frontend Developer <br />
            <span className="sm:text-[18px] text-[14px] text-secondary tracking-wider">Having knowledge in technologies like Javascript, ReactJS, NextJS, Python etc..</span>
          </p>
        </div>

      </div>

</section>
  )
}

export default Hero