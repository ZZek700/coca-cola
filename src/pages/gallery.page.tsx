import Logo from '../components/Logo';

export default function GalleryPage() {
  return (
    <div className='min-h-screen bg-crown-dark text-crown-white'>
      {/* Hero Section */}
      <section className='relative py-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mb-8'>
            <Logo color='crown-primary' size='80px' className='mx-auto mb-6' />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-crown-white'>Gallery</h1>
          <p className='text-xl text-crown-white/80 max-w-2xl mx-auto'>
            Explore our premium facilities and luxurious wellness spaces
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='bg-crown-dark-red/20 rounded-2xl p-12 border border-crown-primary/20'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-crown-primary'>Coming Soon</h2>
            <p className='text-lg text-crown-white/70 mb-8'>
              We're curating an exclusive collection of our finest moments and spaces. Our gallery will showcase the
              luxury and elegance that defines Crown Wellness Club.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <h3 className='text-xl font-semibold mb-3 text-crown-white'>Facilities</h3>
                <p className='text-crown-white/60'>Premium equipment and luxury amenities</p>
              </div>
              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <h3 className='text-xl font-semibold mb-3 text-crown-white'>Spa & Wellness</h3>
                <p className='text-crown-white/60'>Relaxation and rejuvenation spaces</p>
              </div>
              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <h3 className='text-xl font-semibold mb-3 text-crown-white'>Events</h3>
                <p className='text-crown-white/60'>Exclusive moments and celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
