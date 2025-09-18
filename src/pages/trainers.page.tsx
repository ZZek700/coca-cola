import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';
import { Users, Award, Star, Clock } from 'lucide-react';

export default function TrainersPage() {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-crown-dark text-crown-white'>
      {/* Hero Section */}
      <section className='relative py-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mb-8'>
            <Logo color='crown-primary' size='80px' className='mx-auto mb-6' />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-crown-white'>Expert Trainers</h1>
          <p className='text-xl text-crown-white/80 max-w-2xl mx-auto'>
            Meet our certified professionals dedicated to your wellness journey
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='bg-crown-dark-red/20 rounded-2xl p-12 border border-crown-primary/20'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-crown-primary'>Coming Soon</h2>
            <p className='text-lg text-crown-white/70 mb-8'>
              We're assembling an elite team of certified trainers and wellness experts. Each professional will bring
              years of experience and specialized expertise to guide your transformation.
            </p>

            {/* Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <Users className='w-8 h-8 text-crown-primary mx-auto mb-4' />
                <h3 className='text-lg font-semibold mb-3 text-crown-white'>Personal Training</h3>
                <p className='text-crown-white/60 text-sm'>One-on-one customized fitness programs</p>
              </div>

              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <Award className='w-8 h-8 text-crown-primary mx-auto mb-4' />
                <h3 className='text-lg font-semibold mb-3 text-crown-white'>Certified Experts</h3>
                <p className='text-crown-white/60 text-sm'>Internationally certified professionals</p>
              </div>

              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <Star className='w-8 h-8 text-crown-primary mx-auto mb-4' />
                <h3 className='text-lg font-semibold mb-3 text-crown-white'>Specialized Programs</h3>
                <p className='text-crown-white/60 text-sm'>Tailored wellness and fitness plans</p>
              </div>

              <div className='bg-crown-primary/10 rounded-xl p-6 border border-crown-primary/20'>
                <Clock className='w-8 h-8 text-crown-primary mx-auto mb-4' />
                <h3 className='text-lg font-semibold mb-3 text-crown-white'>Flexible Scheduling</h3>
                <p className='text-crown-white/60 text-sm'>Sessions that fit your lifestyle</p>
              </div>
            </div>

            {/* Trainer Categories */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
              <div className='bg-gradient-to-br from-crown-primary/20 to-crown-primary/5 rounded-xl p-8 border border-crown-primary/20'>
                <h3 className='text-2xl font-semibold mb-4 text-crown-white'>Fitness Coaches</h3>
                <ul className='text-crown-white/70 space-y-2 text-left'>
                  <li>• Strength Training Specialists</li>
                  <li>• Cardio & Endurance Experts</li>
                  <li>• Functional Movement Coaches</li>
                  <li>• Sports Performance Trainers</li>
                </ul>
              </div>

              <div className='bg-gradient-to-br from-crown-primary/20 to-crown-primary/5 rounded-xl p-8 border border-crown-primary/20'>
                <h3 className='text-2xl font-semibold mb-4 text-crown-white'>Wellness Experts</h3>
                <ul className='text-crown-white/70 space-y-2 text-left'>
                  <li>• Yoga & Pilates Instructors</li>
                  <li>• Meditation Guides</li>
                  <li>• Nutrition Consultants</li>
                  <li>• Stress Management Coaches</li>
                </ul>
              </div>

              <div className='bg-gradient-to-br from-crown-primary/20 to-crown-primary/5 rounded-xl p-8 border border-crown-primary/20'>
                <h3 className='text-2xl font-semibold mb-4 text-crown-white'>Spa Therapists</h3>
                <ul className='text-crown-white/70 space-y-2 text-left'>
                  <li>• Licensed Massage Therapists</li>
                  <li>• Skincare Specialists</li>
                  <li>• Aromatherapy Experts</li>
                  <li>• Holistic Healing Practitioners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
